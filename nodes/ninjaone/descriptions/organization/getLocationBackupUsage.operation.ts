import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getLocationBackupUsageOption: INodePropertyOptions = {
	name: 'Get Location Backup Usage',
	value: 'getLocationBackupUsage',
	action: 'Get location backup usage',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/locations/{{ encodeURIComponent($parameter["locationId"].value) }}/backup/usage',
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
		displayName: 'Location ID',
		name: 'locationId',
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
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getLocationBackupUsage'],
	},
};

export const getLocationBackupUsageDescription = updateDisplayOptions(displayOptions, properties);
