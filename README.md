# n8n-nodes-ninjaone

This is an n8n community node. It lets you use NinjaOne in your n8n workflows.

This implementation is based off [NinjaOne Public API 2.0 documentation](https://app.ninjarmm.com/apidocs/?links.active=core), specification version **`2.0.9-draft`**, in **OpenAPI 3 (OAS3)** format.

NinjaOne is a cloud-based IT management platform that provides remote monitoring and management (RMM) capabilities for IT professionals. It allows users to monitor, manage, and support their IT infrastructure and endpoints remotely.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations

This node currently supports the following NinjaOne resources and operations:

### Organization

All endpoints in the core Organization section are supported, together with organization and location management endpoints. Organization Documents and Organization Checklists are separate resources and are not included.

| Operation                     | API                                                                                                                                                                    | Implemented |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Create                        | [POST /v2/organizations](https://app.ninjarmm.com/apidocs/?links.active=core#/management/createOrganization)                                                           | ✅           |
| Create Location               | [POST /v2/organization/{id}/locations](https://app.ninjarmm.com/apidocs/?links.active=core#/management/createLocationForOrganization)                                  | ✅           |
| Generate Installer            | [POST /v2/organization/generate-installer](https://app.ninjarmm.com/apidocs/?links.active=core#/management/getInstaller)                                               | ✅           |
| Get                           | [GET /v2/organization/{id}](https://app.ninjarmm.com/apidocs/?links.active=core#/organization/getOrganization)                                                         | ✅           |
| Get Custom Fields             | [GET /v2/organization/{id}/custom-fields](https://app.ninjarmm.com/apidocs/?links.active=core#/organization/getNodeCustomFields_1)                                     | ✅           |
| Get Devices                   | [GET /v2/organization/{id}/devices](https://app.ninjarmm.com/apidocs/?links.active=core#/organization/getOrganizationDevices)                                          | ✅           |
| Get End Users                 | [GET /v2/organization/{id}/end-users](https://app.ninjarmm.com/apidocs/?links.active=core#/organization/getEndUsers)                                                   | ✅           |
| Get Location Backup Usage     | [GET /v2/organization/{id}/locations/{locationId}/backup/usage](https://app.ninjarmm.com/apidocs/?links.active=core#/organization/getLocationUsage)                    | ✅           |
| Get Location Custom Fields    | [GET /v2/organization/{id}/location/{locationId}/custom-fields](https://app.ninjarmm.com/apidocs/?links.active=core#/Location/getNodeCustomFields_2)                   | ✅           |
| Get Location Installer        | [GET /v2/organization/{id}/location/{location_id}/installer/{installer_type}](https://app.ninjarmm.com/apidocs/?links.active=core#/management/getInstallerForLocation) | ✅           |
| Get Locations                 | [GET /v2/organization/{id}/locations](https://app.ninjarmm.com/apidocs/?links.active=core#/organization/getOrganizationLocations)                                      | ✅           |
| Get Locations Backup Usage    | [GET /v2/organization/{id}/locations/backup/usage](https://app.ninjarmm.com/apidocs/?links.active=core#/organization/getOrganizationLocationUsage)                     | ✅           |
| Get Many                      | [GET /v2/organizations](https://app.ninjarmm.com/apidocs/?links.active=core#/system/getOrganizations)                                                                  | ✅           |
| Get Many Detailed             | [GET /v2/organizations-detailed](https://app.ninjarmm.com/apidocs/?links.active=core#/system/getOrganizationsDetailed)                                                 | ✅           |
| Update                        | [PATCH /v2/organization/{id}](https://app.ninjarmm.com/apidocs/?links.active=core#/management/updateOrganization)                                                      | ✅           |
| Update Custom Fields          | [PATCH /v2/organization/{id}/custom-fields](https://app.ninjarmm.com/apidocs/?links.active=core#/organization/updateNodeAttributeValues_1)                             | ✅           |
| Update Location               | [PATCH /v2/organization/{id}/locations/{locationId}](https://app.ninjarmm.com/apidocs/?links.active=core#/management/updateLocation)                                   | ✅           |
| Update Location Custom Fields | [PATCH /v2/organization/{id}/location/{locationId}/custom-fields](https://app.ninjarmm.com/apidocs/?links.active=core#/Location/updateNodeAttributeValues_2)           | ✅           |
| Update Policies               | [PUT /v2/organization/{id}/policies](https://app.ninjarmm.com/apidocs/?links.active=core#/management/updateNodeRolePolicyAssignmentForOrganization)                    | ✅           |

List operations expose the API’s page size and after cursor where supported; each execution returns one page. Use the last returned ID as **After** to retrieve the next page. Create and update operations support all documented writable fields. Structured fields (locations, policy mappings, user data, installer content, and custom field values) accept JSON, including object/array expressions. Optional update fields are sent only when added, so omitted fields remain untouched. Policy updates accept an array such as `[{"nodeRoleId": 1, "policyId": 2}]`; custom field updates accept an object such as `{"customFieldNameText": "Sample Text"}`.

Write operations require the appropriate NinjaOne API permissions and management scope. Installer operations return the API’s installer metadata/URL.

### Device

| Operation    | API                                                                                           | Implemented |
| ------------ | --------------------------------------------------------------------------------------------- | ----------- |
| List devices | [GET /v2/devices](https://app.ninjarmm.com/apidocs/?links.active=core#/system/getDevices)     | ✅           |
| Get device   | [GET /v2/device/{id}](https://app.ninjarmm.com/apidocs/?links.active=core#/devices/getDevice) | ✅           |

### Group

| Operation   | API                                                                                                            | Implemented |
| ----------- | -------------------------------------------------------------------------------------------------------------- | ----------- |
| List groups | [GET /v2/groups](https://app.ninjarmm.com/apidocs/?links.active=core#/system/getGroups)                        | ✅           |
| Get devices | [GET /v2/group/{id}/device-ids](https://app.ninjarmm.com/apidocs/?links.active=core#/groups/getGroupDeviceIds) | ✅           |

## Credentials

Create a **NinjaOne API** credential in n8n using the client credentials from your NinjaOne portal.

1. Select the **Region** matching your NinjaOne instance.
2. Enter your **Client Id** and **Client Secret**.
3. Set **Grant Type** to **Client Credentials** for a client credentials integration.
4. Select the **Scope** configured for your API client. The default is **Monitoring** (`monitoring`); the credential also offers **Management** (`management`) and **Control** (`control`).
5. Save and test the credential. The test requests `GET /v2/organizations`, so the client must have access to this endpoint.

### Regions

The credential offers these region values:

| Region               | Value |
| -------------------- | ----- |
| USA Standard         | `app` |
| USA                  | `us2` |
| Europe / Middle East | `eu`  |
| Canada               | `ca`  |
| Australia / Oceania  | `oc`  |
| Japan                | `jp`  |
| Government           | `fed` |

The node builds the API base URL as `https://<region>.ninjarmm.com/v2` and requests an access token from `https://<region>.ninjarmm.com/ws/oauth/token`. API requests use the returned token in the `Authorization: Bearer` header.

### Other grant types

The credential also accepts manually supplied values for:

- **Authorization Code**: Select this grant type and enter the **Code** and matching **Redirect URI**.
- **Refresh Token**: Select this grant type and enter the **Refresh Token**.

The credential does not provide an interactive browser authorization flow or persist newly returned refresh tokens. The **Redirect URI** field defaults to `https://localhost` and is only sent for the authorization code grant.

## Compatibility

This package uses the n8n community node API version 1 and depends on `n8n-workflow`.

No specific minimum n8n version is pinned in this package yet.

## Usage

1. Add the **NinjaOne** node to your workflow.
2. Select your **NinjaOne API** credential.
3. Set **Resource** to **Organizations**.
4. Set **Operation** to **Get Many**.
5. Execute the node to retrieve organizations and use the response in subsequent workflow steps.

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)
- [NinjaOne](https://www.ninjaone.com/)
- [NinjaOne API documentation](https://app.ninjarmm.com/apidocs/)
