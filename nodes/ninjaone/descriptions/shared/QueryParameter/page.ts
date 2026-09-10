import { type INodeProperties } from 'n8n-workflow';

export const pageQueryParameters: INodeProperties[] = [
	{
		displayName: 'Page size',
		name: 'pageSize',
		description: 'Limit number of items to return',
		type: 'number',
		default: 100,
		placeholder: 'e.g. 100',
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
		description: 'Last item ID from the previous page, used for pagination',
		type: 'number',
		default: 0,
		placeholder: 'e.g. 100',
		routing: {
			send: {
				type: 'query',
				property: 'after',
			},
		},
	},
];
