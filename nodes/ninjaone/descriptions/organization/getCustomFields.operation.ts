import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getCustomFieldsOption: INodePropertyOptions = {
	name: 'Get Custom Fields',
	value: 'getCustomFields',
	description: 'Get organization custom fields',
	action: 'Get organization custom fields',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/custom-fields',
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
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getCustomFields'],
	},
};

export const getCustomFieldsDescription = updateDisplayOptions(displayOptions, properties);
