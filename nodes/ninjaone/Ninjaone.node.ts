import { type INodeType, type INodeTypeDescription, NodeConnectionTypes } from 'n8n-workflow';
import { device, group, organization } from './descriptions';

export class Ninjaone implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'NinjaOne',
		name: 'ninjaone',
		icon: 'file:../../icons/ninjaone.svg',
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
			baseURL: '=https://{{ $credentials.region }}.ninjarmm.com',
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				default: 'organization',
				options: [
					{
						name: 'Organization',
						value: 'organization',
					},
					{
						name: 'Device',
						value: 'device',
					},
					{
						name: 'Group',
						value: 'group',
					},
				],
			},
			...organization.description,
			...device.description,
			...group.description,
		],
	};
	methods = {};
}
