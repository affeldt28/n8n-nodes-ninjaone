import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const updatePoliciesOption: INodePropertyOptions = {
	name: 'Update Policies',
	value: 'updatePolicies',
	description: 'Update organization policy mappings',
	action: 'Update organization policy mappings',
	routing: {
		request: {
			method: 'PUT',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/policies',
			body: '={{ typeof $parameter["body"] === "string" ? JSON.parse($parameter["body"]) : $parameter["body"] }}',
		},
	},
};

const properties: INodeProperties[] = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'resourceLocator',
		default: {
			mode: 'id',
			value: '',
		},
		required: true,
		modes: [
			{
				displayName: 'By ID',
				name: 'id',
				type: 'string',
				placeholder: 'e.g. 123',
			},
		],
	},
	{
		displayName: 'Policy Mappings (JSON)',
		name: 'body',
		type: 'json',
		default: '[]',
		required: true,
		description: 'Array of nodeRoleId and policyId mappings',
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['updatePolicies'],
	},
};

export const updatePoliciesDescription = updateDisplayOptions(displayOptions, properties);
