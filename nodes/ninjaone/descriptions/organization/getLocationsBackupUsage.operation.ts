import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getLocationsBackupUsageOption: INodePropertyOptions = {
	name: 'Get Locations Backup Usage',
	value: 'getLocationsBackupUsage',
	description: 'Get organization locations backup usage',
	action: 'Get organization locations backup usage',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/locations/backup/usage',
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
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getLocationsBackupUsage'],
	},
};

export const getLocationsBackupUsageDescription = updateDisplayOptions(displayOptions, properties);
