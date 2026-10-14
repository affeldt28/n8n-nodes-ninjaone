import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';
import { pageQueryParameters } from '../shared/QueryParameter';

export const getAllOption: INodePropertyOptions = {
	name: 'Get Many',
	value: 'getAll',
	description: 'Get many organizations',
	action: 'Get many organizations',
	routing: {
		request: {
			method: 'GET',
			url: '/v2/organizations',
		},
	},
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
				displayName: 'Organization Filter',
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

export const getAllDescription = updateDisplayOptions(displayOptions, properties);
