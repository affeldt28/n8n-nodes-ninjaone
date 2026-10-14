import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';
import { pageQueryParameters } from '../shared/QueryParameter';

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
	...pageQueryParameters,
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getDevices'],
	},
};

export const getDevicesDescription = updateDisplayOptions(displayOptions, properties);
