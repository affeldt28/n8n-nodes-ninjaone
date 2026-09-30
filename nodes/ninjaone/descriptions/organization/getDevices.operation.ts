import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getDevicesOption: INodePropertyOptions = {
	name: 'Get Devices',
	value: 'getDevices',
	description: 'Get organization devices',
	action: 'Get organization devices',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/devices',
		},
	},
};

const properties: INodeProperties[] = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'resourceLocator',
		default: {
			mode: 'id',
			value: '',
		},
		required: true,
		modes: [
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g. 123',
			},
		],
	},
	{
		displayName: 'Options',
		name: 'options',
		type: 'collection',
		default: {},
		placeholder: 'Add Option',
		options: [
			{
				displayName: 'PageSize',
				name: 'pageSize',
				type: 'number',
				default: 0,
				description: 'Limit number of devices to return',
				routing: {
					send: {
						type: 'query',
						property: 'pageSize',
					},
				},
			},
			{
				displayName: 'After',
				name: 'after',
				type: 'number',
				default: 0,
				description: 'Last Node ID from previous page',
				routing: {
					send: {
						type: 'query',
						property: 'after',
					},
				},
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getDevices'],
	},
};

export const getDevicesDescription = updateDisplayOptions(displayOptions, properties);
