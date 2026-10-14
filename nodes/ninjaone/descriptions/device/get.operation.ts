import { type INodeProperties, INodePropertyOptions, updateDisplayOptions } from 'n8n-workflow';

export const getDeviceOption: INodePropertyOptions = {
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
};

const properties: INodeProperties[] = [
	{
		displayName: 'Device ID',
		name: 'deviceId',
		type: 'resourceLocator',
		default: {
			mode: 'id',
			value: '',
		},
		modes: [
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g. 12345',
			},
		],
		required: true,
	},
];

const displayOptions = {
	show: {
		resource: ['device'],
		operation: ['get'],
	},
};

export const getDeviceDescription = updateDisplayOptions(displayOptions, properties);
