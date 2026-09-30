import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const createOption: INodePropertyOptions = {
	name: 'Create',
	value: 'create',
	description: 'Create an organization',
	action: 'Create an organization',
	routing: {
		request: {
			method: 'POST',
			url: '/v2/organizations',
		},
	},
};

const properties: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'Organization full name',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'fields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				description: 'Organization Description',
				routing: {
					send: {
						type: 'body',
						property: 'description',
					},
				},
			},
			{
				displayName: 'Device Approval Mode',
				name: 'nodeApprovalMode',
				type: 'options',
				default: 'AUTOMATIC',
				options: [
					{
						name: 'Automatic',
						value: 'AUTOMATIC',
					},
					{
						name: 'Manual',
						value: 'MANUAL',
					},
					{
						name: 'Reject',
						value: 'REJECT',
					},
				],
				routing: {
					send: {
						type: 'body',
						property: 'nodeApprovalMode',
					},
				},
			},
			{
				displayName: 'Locations (JSON)',
				name: 'locations',
				type: 'json',
				default: '[]',
				description: 'List of locations',
				routing: {
					send: {
						type: 'body',
						property: 'locations',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'Policies (JSON)',
				name: 'policies',
				type: 'json',
				default: '[]',
				description: 'Node role policy assignments',
				routing: {
					send: {
						type: 'body',
						property: 'policies',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
			{
				displayName: 'User Data (JSON)',
				name: 'userData',
				type: 'json',
				default: '{}',
				description: 'Custom attributes',
				routing: {
					send: {
						type: 'body',
						property: 'userData',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		default: {},
		placeholder: 'Add Option',
		options: [
			{
				displayName: 'Template Organization ID',
				name: 'templateOrganizationId',
				type: 'number',
				default: 0,
				description: 'Model/Template organization to copy settings from',
				routing: {
					send: {
						type: 'query',
						property: 'templateOrganizationId',
					},
				},
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['create'],
	},
};

export const createDescription = updateDisplayOptions(displayOptions, properties);
