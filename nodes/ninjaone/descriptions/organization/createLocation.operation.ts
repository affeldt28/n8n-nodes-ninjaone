import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const createLocationOption: INodePropertyOptions = {
	name: 'Create Location',
	value: 'createLocation',
	description: 'Create an organization location',
	action: 'Create an organization location',
	routing: {
		request: {
			method: 'POST',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/locations',
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
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		description: 'Location name',
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
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'address',
					},
				},
			},
			{
				displayName: 'Description',
				name: 'description',
				type: 'string',
				default: '',
				routing: {
					send: {
						type: 'body',
						property: 'description',
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
		operation: ['createLocation'],
	},
};

export const createLocationDescription = updateDisplayOptions(displayOptions, properties);
