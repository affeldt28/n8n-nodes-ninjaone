import type { INodeProperties } from 'n8n-workflow';
import * as getAll from './getAll.operation';

export const description: INodeProperties[] = [
	{
		name: 'operation',
		displayName: 'Operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['organizations'],
			},
		},
		options: [
			{
				name: 'Get Many',
				description: 'Get a list of all organization names',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/organizations',
					},
				},
				action: 'Get many organizations',
			},
		],
	},
	...getAll.description,
];
