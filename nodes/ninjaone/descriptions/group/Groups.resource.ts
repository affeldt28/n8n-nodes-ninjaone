import type { INodeProperties } from 'n8n-workflow';
import * as getAll from './getAll.operation';
import * as getDevices from './getDevices.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['groups'],
			},
		},
		options: [
			{
				name: 'Get Many',
				description: 'Get a list of all groups',
				value: 'getAll',
				routing: {
					request: {
						method: 'GET',
						url: '/v2/groups',
					},
				},
				action: 'Get many groups',
			},
			{
				name: 'Get Devices',
				description: 'Returns list of device identifiers that match group criteria',
				value: 'getDevices',
				routing: {
					request: {
						method: 'GET',
						url: '=/v2/group/{{ $parameter.groupId }}/device-ids',
					},
					output: {
						postReceive: [
							async function (_items, response) {
								return (response.body as number[]).map((id) => ({ json: { id } }));
							},
						],
					},
				},
				action: 'Get devices in group',
			},
		],
	},
	...getAll.description,
	...getDevices.description,
];
