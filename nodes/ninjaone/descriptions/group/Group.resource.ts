import type { INodeProperties } from 'n8n-workflow';
import { getAllGroupDescription, getAllGroupOption } from './getAll.operation';
import { getGroupDevicesDescription, getGroupDevicesOption } from './getDevices.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['group'],
			},
		},
		options: [getAllGroupOption, getGroupDevicesOption],
	},
	...getAllGroupDescription,
	...getGroupDevicesDescription,
];
