import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';
import { pageQueryParameters } from '../shared/QueryParameter';

const properties: INodeProperties[] = [
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		options: [
			...pageQueryParameters,
			{
				displayName: 'Organization filter',
				name: 'of',
				description: 'Filter organizations by a specific criteria',
				type: 'string',
				default: '',
				placeholder: 'e.g. active',
				routing: {
					send: {
						type: 'query',
						property: 'of',
					},
				},
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getAll'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
