import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getLocationCustomFieldsOption: INodePropertyOptions = {
	name: 'Get Location Custom Fields',
	value: 'getLocationCustomFields',
	action: 'Get location custom fields',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/location/{{ encodeURIComponent($parameter["locationId"].value) }}/custom-fields',
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
		displayName: 'Location ID',
		name: 'locationId',
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
				displayName: 'With Inheritance',
				name: 'withInheritance',
				type: 'boolean',
				default: false,
				description: 'Whether to retrieve values using the definition scope hierarchy',
				routing: {
					send: {
						type: 'query',
						property: 'withInheritance',
					},
				},
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getLocationCustomFields'],
	},
};

export const getLocationCustomFieldsDescription = updateDisplayOptions(displayOptions, properties);
