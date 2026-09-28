import type { ICredentialTestRequest, ICredentialType, Icon, INodeProperties } from 'n8n-workflow';

export class NinjaOneOAuth2Api implements ICredentialType {
	name = 'ninjaOneOAuth2Api';

	displayName = 'NinjaOne OAuth2 API';

	extends = ['oAuth2Api'];

	icon: Icon = {
		light: 'file:../icons/ninjaone.svg',
		dark: 'file:../icons/ninjaone.dark.svg',
	};

	documentationUrl = 'https://app.ninjarmm.com/apidocs/';

	properties: INodeProperties[] = [
		{
			displayName: 'Region',
			name: 'region',
			type: 'options',
			required: true,
			default: 'app',
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
					name: 'Europe / Middle East (eu)',
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
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'options',
			default: 'clientCredentials',
			options: [
				{
					name: 'Authorization Code',
					value: 'authorizationCode',
				},
				{
					name: 'Client Credentials',
					value: 'clientCredentials',
				},
			],
		},
		{
			displayName: 'Authorization URL',
			name: 'authUrl',
			type: 'hidden',
			default: '={{ `https://${$self["region"]}.ninjarmm.com/ws/oauth/authorize` }}',
			required: true,
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'hidden',
			default: '={{ `https://${$self["region"]}.ninjarmm.com/ws/oauth/token` }}',
			required: true,
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: 'monitoring',
			placeholder: 'monitoring management control',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'header',
		},
	];

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
