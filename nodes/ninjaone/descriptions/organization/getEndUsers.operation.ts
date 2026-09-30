import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getEndUsersOption: INodePropertyOptions = {
	name: 'Get End Users',
	value: 'getEndUsers',
	description: 'Get organization end users',
	action: 'Get organization end users',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/end-users',
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
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		default: {},
		placeholder: 'Add Option',
		options: [
			{
				displayName: 'Include Roles',
				name: 'includeRoles',
				type: 'boolean',
				default: false,
				description: 'Whether to include user role information',
				routing: {
					send: {
						type: 'query',
						property: 'includeRoles',
					},
				},
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getEndUsers'],
	},
};

export const getEndUsersDescription = updateDisplayOptions(displayOptions, properties);
