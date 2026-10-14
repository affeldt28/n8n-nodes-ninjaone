import { type INodeProperties, INodePropertyOptions, updateDisplayOptions } from 'n8n-workflow';

export const getGroupDevicesOption: INodePropertyOptions = {
	name: 'Get Devices',
	description: 'Returns list of device identifiers that match group criteria',
	value: 'getDevices',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/group/{{ $parameter.groupId }}/device-ids',
		},
		output: {
			postReceive: [
				async function (_items, response) {
					return (response.body as number[]).map((id) => ({ json: { id } }));
				},
			],
		},
	},
	action: 'Get devices in group',
};

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

export const getGroupDevicesDescription = updateDisplayOptions(displayOptions, properties);
