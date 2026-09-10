import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import { organizations } from './descriptions';

export class Ninjaone implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'NinjaOne',
		name: 'ninjaone',
		icon: { light: 'file:../../icons/ninjaone.svg', dark: 'file:../../icons/ninjaone.svg' },
		group: ['input'],
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		version: 1,
		description: 'Interact with the NinjaOne API',
		defaults: {
			name: 'NinjaOne',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'ninjaoneApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '=https://{{ $credentials.region }}.ninjarmm.com/v2',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: 'organizations',
				options: [
					{
						name: 'Organizations',
						value: 'organizations',
					},
				],
			},
			...organizations.description,
		],
	};
	methods = {};
}
