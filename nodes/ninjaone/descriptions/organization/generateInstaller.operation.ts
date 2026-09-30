import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const generateInstallerOption: INodePropertyOptions = {
	name: 'Generate Installer',
	value: 'generateInstaller',
	description: 'Generate an organization installer',
	action: 'Generate an organization installer',
	routing: {
		request: {
			method: 'POST',
			url: '/v2/organization/generate-installer',
		},
	},
};

const properties: INodeProperties[] = [
	{
		displayName: 'Organization ID',
		name: 'organizationId',
		type: 'number',
		default: 0,
		description: 'Organization identifier',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'organizationId',
			},
		},
	},
	{
		displayName: 'Location ID',
		name: 'locationId',
		type: 'number',
		default: 0,
		description: 'Location identifier',
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'locationId',
			},
		},
	},
	{
		displayName: 'Installer Type',
		name: 'installerType',
		type: 'options',
		default: 'WINDOWS_MSI',
		description: 'Agent installer type',
		options: [
			{
				name: 'Linux Arm64 Deb',
				value: 'LINUX_ARM64_DEB',
			},
			{
				name: 'Linux Arm64 Rpm',
				value: 'LINUX_ARM64_RPM',
			},
			{
				name: 'Linux Armv7A Deb',
				value: 'LINUX_ARMV7A_DEB',
			},
			{
				name: 'Linux Armv7A Rpm',
				value: 'LINUX_ARMV7A_RPM',
			},
			{
				name: 'Linux Deb',
				value: 'LINUX_DEB',
			},
			{
				name: 'Linux Rpm',
				value: 'LINUX_RPM',
			},
			{
				name: 'Mac Dmg',
				value: 'MAC_DMG',
			},
			{
				name: 'Mac Pkg',
				value: 'MAC_PKG',
			},
			{
				name: 'Windows Arm64 Msi',
				value: 'WINDOWS_ARM64_MSI',
			},
			{
				name: 'Windows Msi',
				value: 'WINDOWS_MSI',
			},
		],
		required: true,
		routing: {
			send: {
				type: 'body',
				property: 'installerType',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'fields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		options: [
			{
				displayName: 'Content (JSON)',
				name: 'content',
				type: 'json',
				default: '{}',
				description: 'Content',
				routing: {
					send: {
						type: 'body',
						property: 'content',
						value: '={{ typeof $value === "string" ? JSON.parse($value) : $value }}',
					},
				},
			},
		],
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['generateInstaller'],
	},
};

export const generateInstallerDescription = updateDisplayOptions(displayOptions, properties);
