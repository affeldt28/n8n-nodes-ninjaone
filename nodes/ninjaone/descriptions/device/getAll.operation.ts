import { type INodeProperties, INodePropertyOptions, updateDisplayOptions } from 'n8n-workflow';
import { pageQueryParameters } from '../shared/QueryParameter';

export const getAllDeviceOption: INodePropertyOptions = {
	name: 'Get Many',
	description: 'Get a list of many devices',
	value: 'getAll',
	routing: {
		request: {
			method: 'GET',
			url: '/v2/devices',
		},
	},
	action: 'Get many devices',
};

const properties: INodeProperties[] = [
	...pageQueryParameters,
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Device Filter',
				name: 'df',
				description: 'Filter devices by a specific criteria',
				type: 'string',
				default: '',
				placeholder: 'e.g. active',
				routing: {
					send: {
						type: 'query',
						property: 'df',
					},
				},
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['device'],
		operation: ['getAll'],
	},
};

export const getAllDeviceDescription = updateDisplayOptions(displayOptions, properties);
