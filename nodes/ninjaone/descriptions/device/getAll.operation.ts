import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { pageQueryParameters } from '../shared/QueryParameter';

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

export const description = updateDisplayOptions(displayOptions, properties);
