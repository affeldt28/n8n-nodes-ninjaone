import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const updateOption: INodePropertyOptions = {
	name: 'Update',
	value: 'update',
	description: 'Update an organization',
	action: 'Update an organization',
	routing: {
		request: {
			method: 'PATCH',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}',
		},
	},
};

const properties: INodeProperties[] = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'resourceLocator',
		default: {
			mode: 'id',
			value: '',
		},
		required: true,
		modes: [
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g. 123',
			},
		],
	},
	{
		displayName: 'Update Fields',
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
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Organization full name',
				routing: {
					send: {
						type: 'body',
						property: 'name',
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
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['update'],
	},
};

export const updateDescription = updateDisplayOptions(displayOptions, properties);
