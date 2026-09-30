import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getLocationsOption: INodePropertyOptions = {
	name: 'Get Locations',
	value: 'getLocations',
	description: 'Get organization locations',
	action: 'Get organization locations',
	routing: {
		request: {
			method: 'GET',
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
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getLocations'],
	},
};

export const getLocationsDescription = updateDisplayOptions(displayOptions, properties);
