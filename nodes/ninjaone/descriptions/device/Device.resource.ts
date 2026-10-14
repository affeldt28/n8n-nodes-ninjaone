import type { INodeProperties } from 'n8n-workflow';
import { getDeviceDescription, getDeviceOption } from './get.operation';
import { getAllDeviceDescription, getAllDeviceOption } from './getAll.operation';

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
		options: [getAllDeviceOption, getDeviceOption],
	},
	...getAllDeviceDescription,
	...getDeviceDescription,
];
