import type { INodeProperties } from 'n8n-workflow';
import * as getAll from './getAll.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['organization'],
			},
		},
		options: [
			{
				name: 'Get Many',
				description: 'Get a list of many organization names',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/v2/organizations',
					},
				},
				action: 'Get many organizations',
			},
		],
	},
	...getAll.description,
];
