import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const updateCustomFieldsOption: INodePropertyOptions = {
	name: 'Update Custom Fields',
	value: 'updateCustomFields',
	description: 'Update organization custom fields',
	action: 'Update organization custom fields',
	routing: {
		request: {
			method: 'PATCH',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/custom-fields',
			body: '={{ typeof $parameter["body"] === "string" ? JSON.parse($parameter["body"]) : $parameter["body"] }}',
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
		displayName: 'Custom Fields (JSON)',
		name: 'body',
		type: 'json',
		default: '{}',
		required: true,
		description: 'Object mapping custom field names to values',
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['updateCustomFields'],
	},
};

export const updateCustomFieldsDescription = updateDisplayOptions(displayOptions, properties);
