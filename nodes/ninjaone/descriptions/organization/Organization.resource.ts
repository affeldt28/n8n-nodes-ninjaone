import type { INodeProperties } from 'n8n-workflow';
import { createDescription, createOption } from './create.operation';
import { createLocationDescription, createLocationOption } from './createLocation.operation';
import {
	generateInstallerDescription,
	generateInstallerOption,
} from './generateInstaller.operation';
import { getDescription, getOption } from './get.operation';
import { getAllDescription, getAllOption } from './getAll.operation';
import { getAllDetailedDescription, getAllDetailedOption } from './getAllDetailed.operation';
import { getCustomFieldsDescription, getCustomFieldsOption } from './getCustomFields.operation';
import { getDevicesDescription, getDevicesOption } from './getDevices.operation';
import { getEndUsersDescription, getEndUsersOption } from './getEndUsers.operation';
import {
	getLocationBackupUsageDescription,
	getLocationBackupUsageOption,
} from './getLocationBackupUsage.operation';
import {
	getLocationCustomFieldsDescription,
	getLocationCustomFieldsOption,
} from './getLocationCustomFields.operation';
import {
	getLocationInstallerDescription,
	getLocationInstallerOption,
} from './getLocationInstaller.operation';
import { getLocationsDescription, getLocationsOption } from './getLocations.operation';
import {
	getLocationsBackupUsageDescription,
	getLocationsBackupUsageOption,
} from './getLocationsBackupUsage.operation';
import { updateDescription, updateOption } from './update.operation';
import {
	updateCustomFieldsDescription,
	updateCustomFieldsOption,
} from './updateCustomFields.operation';
import { updateLocationDescription, updateLocationOption } from './updateLocation.operation';
import {
	updateLocationCustomFieldsDescription,
	updateLocationCustomFieldsOption,
} from './updateLocationCustomFields.operation';
import { updatePoliciesDescription, updatePoliciesOption } from './updatePolicies.operation';

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		default: 'getAll',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['organization'],
			},
		},
		options: [
			createOption,
			createLocationOption,
			generateInstallerOption,
			getOption,
			getCustomFieldsOption,
			getDevicesOption,
			getEndUsersOption,
			getLocationBackupUsageOption,
			getLocationCustomFieldsOption,
			getLocationInstallerOption,
			getLocationsOption,
			getLocationsBackupUsageOption,
			getAllOption,
			getAllDetailedOption,
			updateOption,
			updateCustomFieldsOption,
			updateLocationOption,
			updateLocationCustomFieldsOption,
			updatePoliciesOption,
		],
	},
	...createDescription,
	...createLocationDescription,
	...generateInstallerDescription,
	...getDescription,
	...getCustomFieldsDescription,
	...getDevicesDescription,
	...getEndUsersDescription,
	...getLocationBackupUsageDescription,
	...getLocationCustomFieldsDescription,
	...getLocationInstallerDescription,
	...getLocationsDescription,
	...getLocationsBackupUsageDescription,
	...getAllDescription,
	...getAllDetailedDescription,
	...updateDescription,
	...updateCustomFieldsDescription,
	...updateLocationDescription,
	...updateLocationCustomFieldsDescription,
	...updatePoliciesDescription,
];
