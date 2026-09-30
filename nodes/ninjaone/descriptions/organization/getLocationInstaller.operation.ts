import {
	type INodeProperties,
	type INodePropertyOptions,
	updateDisplayOptions,
} from 'n8n-workflow';

export const getLocationInstallerOption: INodePropertyOptions = {
	name: 'Get Location Installer',
	value: 'getLocationInstaller',
	description: 'Get a location installer',
	action: 'Get a location installer',
	routing: {
		request: {
			method: 'GET',
			url: '=/v2/organization/{{ encodeURIComponent($parameter["organizationId"].value) }}/location/{{ encodeURIComponent($parameter["locationId"].value) }}/installer/{{ encodeURIComponent($parameter["installerType"]) }}',
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
		displayName: 'Location ID',
		name: 'locationId',
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
		displayName: 'Installer Type',
		name: 'installerType',
		type: 'options',
		default: 'WINDOWS_MSI',
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
	},
];

const displayOptions = {
	show: {
		resource: ['organization'],
		operation: ['getLocationInstaller'],
	},
};

export const getLocationInstallerDescription = updateDisplayOptions(displayOptions, properties);
