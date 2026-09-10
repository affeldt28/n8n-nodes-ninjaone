# n8n-nodes-ninjaone

This is an n8n community node. It lets you use NinjaOne in your n8n workflows.

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

The node currently supports the following operation:

### Organization


| Operation          | API                                                                                                   | Implemented |
| ------------------ | ----------------------------------------------------------------------------------------------------- | ----------- |
| List organizations | [GET /v2/organizations](https://app.ninjarmm.com/apidocs/?links.active=core#/system/getOrganizations) | ✅           |


### Device

| Operation    | API                                                                                       | Implemented |
| ------------ | ----------------------------------------------------------------------------------------- | ----------- |
| List devices | [GET /v2/devices](https://app.ninjarmm.com/apidocs/?links.active=core#/system/getDevices) | ✅           |



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
