import { type INodeProperties, updateDisplayOptions } from 'n8n-workflow';

const properties: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
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
		resource: ['group'],
		operation: ['getDevices'],
	},
};

export const description = updateDisplayOptions(displayOptions, properties);
