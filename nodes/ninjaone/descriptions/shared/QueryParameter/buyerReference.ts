import { type INodeProperties } from 'n8n-workflow';

export const buyerReferenceQueryParameter: INodeProperties = {
	name: 'BuyerReference',
	displayName: 'Buyer Reference',
	type: 'string',
	default: '',
	placeholder: 'e.g. buyerReference',
	description: 'Filter by buyer reference',
	routing: {
		send: {
			type: 'query',
			property: 'BuyerReference',
		},
	},
};
