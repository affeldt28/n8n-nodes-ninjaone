import type {
	IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	Icon,
	IHttpRequestHelper,
	INodeProperties,
} from 'n8n-workflow';

export class NinjaoneApi implements ICredentialType {
	name = 'ninjaoneApi';

	displayName = 'NinjaOne API';

	icon: Icon = { light: 'file:../icons/ninjaone.svg', dark: 'file:../icons/ninjaone.dark.svg' };

	documentationUrl = 'https://www.ninjaone.com/de/services/ninjaone-api/';

	properties: INodeProperties[] = [
		{
			displayName: 'Region',
			name: 'region',
			type: 'options',
			typeOptions: { password: false },
			required: true,
			default: '',
			description: '',
			options: [
				{
					name: 'USA Standard (app)',
					value: 'app',
				},
				{
					name: 'USA (us2)',
					value: 'us2',
				},
				{
					name: 'Europa / Middle East (eu)',
					value: 'eu',
				},
				{
					name: 'Canada (ca)',
					value: 'ca',
				},
				{
					name: 'Australia / Oceania (oc)',
					value: 'oc',
				},
				{
					name: 'Japan (jp)',
					value: 'jp',
				},
				{
					name: 'Government (fed)',
					value: 'fed',
				},
			],
		},
		{
			displayName: 'Client Id',
			name: 'clientId',
			type: 'string',
			typeOptions: { password: false },
			required: true,
			default: '',
			description: 'Client Id can be created in the NinjaOne portal.',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'Client secret can be created in the NinjaOne portal.',
		},
		{
			displayName: 'Redirect URI',
			name: 'redirectUri',
			type: 'string',
			default: 'https://localhost',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'multiOptions',
			default: ['monitoring'],
			options: [
				{
					name: 'Monitoring',
					value: 'monitoring',
				},
				{
					name: 'Management',
					value: 'management',
				},
				{
					name: 'Control',
					value: 'control',
				},
			],
		},
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'options',
			default: 'client_credentials',
			required: true,
			options: [
				{
					name: 'Authorization Code',
					value: 'authorization_code',
				},
				{
					name: 'Client Credentials',
					value: 'client_credentials',
				},
				{
					name: 'Refresh Token',
					value: 'refresh_token',
				},
			],
		},
		{
			displayName: 'Code',
			name: 'code',
			type: 'string',
			default: '',
			displayOptions: {
				show: {
					grantType: ['authorization_code'],
				},
			},
		},
		{
			displayName: 'Refresh Token',
			name: 'refresh_token',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			displayOptions: {
				show: {
					grantType: ['refresh_token'],
				},
			},
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'hidden',
			typeOptions: {
				expirable: true,
				password: true,
			},
			default: '',
		},
	];

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		// Older credentials stored grantType as a multi-option array.
		const grants = Array.isArray(credentials.grantType)
			? credentials.grantType
			: [credentials.grantType];
		if (
			grants.length !== 1 ||
			!['client_credentials', 'authorization_code', 'refresh_token'].includes(
				String(grants[0]),
			)
		) {
			throw new Error('Select exactly one supported OAuth grant type.');
		}
		const grantType = String(grants[0]);
		const body: Record<string, string> = {
			grant_type: grantType,
			client_id: String(credentials.clientId ?? ''),
			client_secret: String(credentials.clientSecret ?? ''),
			scope: Array.isArray(credentials.scope)
				? credentials.scope.join(' ')
				: String(credentials.scope ?? 'monitoring'),
		};
		if (grantType === 'authorization_code') {
			body.code = String(credentials.code ?? '');
			body.redirect_uri = String(credentials.redirectUri ?? '');
		} else if (grantType === 'refresh_token') {
			body.refresh_token = String(credentials.refresh_token ?? '');
		}

		const response = (await this.helpers.httpRequest({
			method: 'POST',
			url: `https://${credentials.region}.ninjarmm.com/ws/oauth/token`,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Accept: 'application/json',
			},
			body,
			json: true,
		})) as {
			access_token?: string;
			expires_in: number;
			token_type: string;
			refresh_token: string;
			scope: string;
		};
		if (typeof response.access_token !== 'string' || !response.access_token) {
			throw new Error('NinjaOne did not return an access token.');
		}
		return { accessToken: response.access_token };
	}

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{ `https://${$credentials.region}.ninjarmm.com` }}',
			url: '/v2/organizations',
			method: 'GET',
			headers: {
				Accept: 'application/json',
			},
		},
	};
}
