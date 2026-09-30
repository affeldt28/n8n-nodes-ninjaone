import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';
import { pageQueryParameters } from '../shared/QueryParameter';

export const getAllDetailedOption: INodePropertyOptions = {
	name: 'Get Many Detailed',
	value: 'getAllDetailed',
	description: 'Get many organizations with details',
	action: 'Get many organizations with details',
	routing: {
		request: {
			method: 'GET',
			url: '/v2/organizations-detailed',
		},
	},
};

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
		operation: ['getAllDetailed'],
	},
};

export const getAllDetailedDescription = updateDisplayOptions(displayOptions, properties);
