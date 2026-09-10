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
				resource: ['devices'],
			},
		},
		options: [
			{
				name: 'Get Many',
				description: 'Get a list of all device',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/devices',
					},
				},
				action: 'Get many devices',
			},
		],
	},
	...getAll.description,
];
