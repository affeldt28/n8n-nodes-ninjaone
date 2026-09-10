import { type INodeProperties } from 'n8n-workflow';

export const periodQueryParameters: INodeProperties[] = [
	{
		name: 'PeriodStart',
		displayName: 'Period Start',
		type: 'dateTime',
		default: '',
		description: 'Filter by the start of the period',
		routing: {
			send: {
				type: 'query',
				property: 'PeriodStart',
			},
		},
	},
	{
		name: 'PeriodEnd',
		displayName: 'Period End',
		type: 'dateTime',
		default: '',
		description: 'Filter by the end of the period',
		routing: {
			send: {
				type: 'query',
				property: 'PeriodEnd',
			},
		},
	},
];
