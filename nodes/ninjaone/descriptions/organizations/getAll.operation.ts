import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [];

const displayOptions = {
	show: {
		resource: ['organizations'],
		operation: ['getAll'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
