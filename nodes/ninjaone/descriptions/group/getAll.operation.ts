import { type INodeProperties, INodePropertyOptions, updateDisplayOptions } from 'n8n-workflow';

export const getAllGroupOption: INodePropertyOptions = {
	name: 'Get Many',
	description: 'Get a list of many groups',
	value: 'getAll',
	routing: {
		request: {
			method: 'GET',
			url: '/v2/groups',
		},
	},
	action: 'Get many groups',
};

const properties: INodeProperties[] = [];

const displayOptions = {
	show: {
		resource: ['group'],
		operation: ['getAll'],
	},
};

export const getAllGroupDescription = updateDisplayOptions(displayOptions, properties);
