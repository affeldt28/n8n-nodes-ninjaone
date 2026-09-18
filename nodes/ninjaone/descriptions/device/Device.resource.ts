import type { INodeProperties } from 'n8n-workflow';
import * as get from './get.operation';
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
				resource: ['device'],
			},
		},
		options: [
			{
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
			},
			{
				name: 'Get',
				description: 'Get a single device',
				value: 'get',
				routing: {
					request: {
						method: 'GET',
						url: '=/v2/device/{{ $parameter.deviceId }}',
					},
				},
				action: 'Get a device',
			},
		],
	},
	...getAll.description,
	...get.description,
];
