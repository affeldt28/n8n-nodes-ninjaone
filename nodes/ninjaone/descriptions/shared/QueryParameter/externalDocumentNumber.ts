import { type INodeProperties } from 'n8n-workflow';

export const externalDocumentNumberQueryParameter: INodeProperties = {
	name: 'ExternalDocumentNumber',
	displayName: 'External Document Number',
	type: 'string',
	default: '',
	placeholder: 'e.g. externalDocumentNumber',
	description: 'Filter by external document number',
	routing: {
		send: {
			type: 'query',
			property: 'ExternalDocumentNumber',
		},
	},
};
