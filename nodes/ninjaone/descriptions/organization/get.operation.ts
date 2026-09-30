import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getOption: INodePropertyOptions = {
	name: 'Get',
	value: 'get',
	description: 'Get an organization',
	action: 'Get an organization',
	routing: {
		request: {
			method: 'GET',
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
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['get'],
	},
};

export const getDescription = updateDisplayOptions(displayOptions, properties);
