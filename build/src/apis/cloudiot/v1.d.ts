/**
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AxiosPromise } from 'axios';
import { Compute, JWT, OAuth2Client, UserRefreshClient } from 'google-auth-library';
import { BodyResponseCallback, GlobalOptions, GoogleConfigurable, MethodOptions } from 'googleapis-common';
export declare namespace cloudiot_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API
         * access, quota, and reports. Required unless you provide an OAuth 2.0
         * token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be
         * any arbitrary string assigned to a user, but should not exceed 40
         * characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Cloud IoT API
     *
     * Registers and manages IoT (Internet of Things) devices that connect to the
     * Google Cloud Platform.
     *
     * @example
     * const {google} = require('googleapis');
     * const cloudiot = google.cloudiot('v1');
     *
     * @namespace cloudiot
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Cloudiot
     */
    class Cloudiot {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * Associates `members` with a `role`.
     */
    interface Schema$Binding {
        /**
         * Unimplemented. The condition that is associated with this binding. NOTE:
         * an unsatisfied condition will not allow user access via current binding.
         * Different bindings, including their conditions, are examined
         * independently.
         */
        condition?: Schema$Expr;
        /**
         * Specifies the identities requesting access for a Cloud Platform resource.
         * `members` can have the following values:  * `allUsers`: A special
         * identifier that represents anyone who is    on the internet; with or
         * without a Google account.  * `allAuthenticatedUsers`: A special
         * identifier that represents anyone    who is authenticated with a Google
         * account or a service account.  * `user:{emailid}`: An email address that
         * represents a specific Google    account. For example, `alice@gmail.com` .
         * * `serviceAccount:{emailid}`: An email address that represents a service
         * account. For example, `my-other-app@appspot.gserviceaccount.com`.  *
         * `group:{emailid}`: An email address that represents a Google group. For
         * example, `admins@example.com`.   * `domain:{domain}`: A Google Apps
         * domain name that represents all the    users of that domain. For example,
         * `google.com` or `example.com`.
         */
        members?: string[];
        /**
         * Role that is assigned to `members`. For example, `roles/viewer`,
         * `roles/editor`, or `roles/owner`.
         */
        role?: string;
    }
    /**
     * The device resource.
     */
    interface Schema$Device {
        /**
         * If a device is blocked, connections or requests from this device will
         * fail. Can be used to temporarily prevent the device from connecting if,
         * for example, the sensor is generating bad data and needs maintenance.
         */
        blocked?: boolean;
        /**
         * The most recent device configuration, which is eventually sent from Cloud
         * IoT Core to the device. If not present on creation, the configuration
         * will be initialized with an empty payload and version value of `1`. To
         * update this field after creation, use the
         * `DeviceManager.ModifyCloudToDeviceConfig` method.
         */
        config?: Schema$DeviceConfig;
        /**
         * The credentials used to authenticate this device. To allow credential
         * rotation without interruption, multiple device credentials can be bound
         * to this device. No more than 3 credentials can be bound to a single
         * device at a time. When new credentials are added to a device, they are
         * verified against the registry credentials. For details, see the
         * description of the `DeviceRegistry.credentials` field.
         */
        credentials?: Schema$DeviceCredential[];
        /**
         * The user-defined device identifier. The device ID must be unique within a
         * device registry.
         */
        id?: string;
        /**
         * [Output only] The last time a cloud-to-device config version
         * acknowledgment was received from the device. This field is only for
         * configurations sent through MQTT.
         */
        lastConfigAckTime?: string;
        /**
         * [Output only] The last time a cloud-to-device config version was sent to
         * the device.
         */
        lastConfigSendTime?: string;
        /**
         * [Output only] The error message of the most recent error, such as a
         * failure to publish to Cloud Pub/Sub. &#39;last_error_time&#39; is the
         * timestamp of this field. If no errors have occurred, this field has an
         * empty message and the status code 0 == OK. Otherwise, this field is
         * expected to have a status code other than OK.
         */
        lastErrorStatus?: Schema$Status;
        /**
         * [Output only] The time the most recent error occurred, such as a failure
         * to publish to Cloud Pub/Sub. This field is the timestamp of
         * &#39;last_error_status&#39;.
         */
        lastErrorTime?: string;
        /**
         * [Output only] The last time a telemetry event was received. Timestamps
         * are periodically collected and written to storage; they may be stale by a
         * few minutes.
         */
        lastEventTime?: string;
        /**
         * [Output only] The last time an MQTT `PINGREQ` was received. This field
         * applies only to devices connecting through MQTT. MQTT clients usually
         * only send `PINGREQ` messages if the connection is idle, and no other
         * messages have been sent. Timestamps are periodically collected and
         * written to storage; they may be stale by a few minutes.
         */
        lastHeartbeatTime?: string;
        /**
         * [Output only] The last time a state event was received. Timestamps are
         * periodically collected and written to storage; they may be stale by a few
         * minutes.
         */
        lastStateTime?: string;
        /**
         * **Beta Feature**  The logging verbosity for device activity. If
         * unspecified, DeviceRegistry.log_level will be used.
         */
        logLevel?: string;
        /**
         * The metadata key-value pairs assigned to the device. This metadata is not
         * interpreted or indexed by Cloud IoT Core. It can be used to add
         * contextual information for the device.  Keys must conform to the regular
         * expression a-zA-Z+ and be less than 128 bytes in length.  Values are
         * free-form strings. Each value must be less than or equal to 32 KB in
         * size.  The total size of all keys and values must be less than 256 KB,
         * and the maximum number of key-value pairs is 500.
         */
        metadata?: any;
        /**
         * The resource path name. For example,
         * `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
         * `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
         * When `name` is populated as a response from the service, it always ends
         * in the device numeric ID.
         */
        name?: string;
        /**
         * [Output only] A server-defined unique numeric ID for the device. This is
         * a more compact way to identify devices, and it is globally unique.
         */
        numId?: string;
        /**
         * [Output only] The state most recently received from the device. If no
         * state has been reported, this field is not present.
         */
        state?: Schema$DeviceState;
    }
    /**
     * The device configuration. Eventually delivered to devices.
     */
    interface Schema$DeviceConfig {
        /**
         * The device configuration data.
         */
        binaryData?: string;
        /**
         * [Output only] The time at which this configuration version was updated in
         * Cloud IoT Core. This timestamp is set by the server.
         */
        cloudUpdateTime?: string;
        /**
         * [Output only] The time at which Cloud IoT Core received the
         * acknowledgment from the device, indicating that the device has received
         * this configuration version. If this field is not present, the device has
         * not yet acknowledged that it received this version. Note that when the
         * config was sent to the device, many config versions may have been
         * available in Cloud IoT Core while the device was disconnected, and on
         * connection, only the latest version is sent to the device. Some versions
         * may never be sent to the device, and therefore are never acknowledged.
         * This timestamp is set by Cloud IoT Core.
         */
        deviceAckTime?: string;
        /**
         * [Output only] The version of this update. The version number is assigned
         * by the server, and is always greater than 0 after device creation. The
         * version must be 0 on the `CreateDevice` request if a `config` is
         * specified; the response of `CreateDevice` will always have a value of 1.
         */
        version?: string;
    }
    /**
     * A server-stored device credential used for authentication.
     */
    interface Schema$DeviceCredential {
        /**
         * [Optional] The time at which this credential becomes invalid. This
         * credential will be ignored for new client authentication requests after
         * this timestamp; however, it will not be automatically deleted.
         */
        expirationTime?: string;
        /**
         * A public key used to verify the signature of JSON Web Tokens (JWTs). When
         * adding a new device credential, either via device creation or via
         * modifications, this public key credential may be required to be signed by
         * one of the registry level certificates. More specifically, if the
         * registry contains at least one certificate, any new device credential
         * must be signed by one of the registry certificates. As a result, when the
         * registry contains certificates, only X.509 certificates are accepted as
         * device credentials. However, if the registry does not contain a
         * certificate, self-signed certificates and public keys will be accepted.
         * New device credentials must be different from every registry-level
         * certificate.
         */
        publicKey?: Schema$PublicKeyCredential;
    }
    /**
     * A container for a group of devices.
     */
    interface Schema$DeviceRegistry {
        /**
         * The credentials used to verify the device credentials. No more than 10
         * credentials can be bound to a single registry at a time. The verification
         * process occurs at the time of device creation or update. If this field is
         * empty, no verification is performed. Otherwise, the credentials of a
         * newly created device or added credentials of an updated device should be
         * signed with one of these registry credentials.  Note, however, that
         * existing devices will never be affected by modifications to this list of
         * credentials: after a device has been successfully created in a registry,
         * it should be able to connect even if its registry credentials are
         * revoked, deleted, or modified.
         */
        credentials?: Schema$RegistryCredential[];
        /**
         * The configuration for notification of telemetry events received from the
         * device. All telemetry events that were successfully published by the
         * device and acknowledged by Cloud IoT Core are guaranteed to be delivered
         * to Cloud Pub/Sub. If multiple configurations match a message, only the
         * first matching configuration is used. If you try to publish a device
         * telemetry event using MQTT without specifying a Cloud Pub/Sub topic for
         * the device&#39;s registry, the connection closes automatically. If you
         * try to do so using an HTTP connection, an error is returned. Up to 10
         * configurations may be provided.
         */
        eventNotificationConfigs?: Schema$EventNotificationConfig[];
        /**
         * The DeviceService (HTTP) configuration for this device registry.
         */
        httpConfig?: Schema$HttpConfig;
        /**
         * The identifier of this device registry. For example, `myRegistry`.
         */
        id?: string;
        /**
         * **Beta Feature**  The default logging verbosity for activity from devices
         * in this registry. The verbosity level can be overridden by
         * Device.log_level.
         */
        logLevel?: string;
        /**
         * The MQTT configuration for this device registry.
         */
        mqttConfig?: Schema$MqttConfig;
        /**
         * The resource path name. For example,
         * `projects/example-project/locations/us-central1/registries/my-registry`.
         */
        name?: string;
        /**
         * The configuration for notification of new states received from the
         * device. State updates are guaranteed to be stored in the state history,
         * but notifications to Cloud Pub/Sub are not guaranteed. For example, if
         * permissions are misconfigured or the specified topic doesn&#39;t exist,
         * no notification will be published but the state will still be stored in
         * Cloud IoT Core.
         */
        stateNotificationConfig?: Schema$StateNotificationConfig;
    }
    /**
     * The device state, as reported by the device.
     */
    interface Schema$DeviceState {
        /**
         * The device state data.
         */
        binaryData?: string;
        /**
         * [Output only] The time at which this state version was updated in Cloud
         * IoT Core.
         */
        updateTime?: string;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated
     * empty messages in your APIs. A typical example is to use it as the request
     * or the response type of an API method. For instance:      service Foo { rpc
     * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
     * representation for `Empty` is empty JSON object `{}`.
     */
    interface Schema$Empty {
    }
    /**
     * The configuration for forwarding telemetry events.
     */
    interface Schema$EventNotificationConfig {
        /**
         * A Cloud Pub/Sub topic name. For example,
         * `projects/myProject/topics/deviceEvents`.
         */
        pubsubTopicName?: string;
        /**
         * If the subfolder name matches this string exactly, this configuration
         * will be used. The string must not include the leading &#39;/&#39;
         * character. If empty, all strings are matched. This field is used only for
         * telemetry events; subfolders are not supported for state changes.
         */
        subfolderMatches?: string;
    }
    /**
     * Represents an expression text. Example:      title: &quot;User account
     * presence&quot;     description: &quot;Determines whether the request has a
     * user account&quot;     expression: &quot;size(request.user) &gt; 0&quot;
     */
    interface Schema$Expr {
        /**
         * An optional description of the expression. This is a longer text which
         * describes the expression, e.g. when hovered over it in a UI.
         */
        description?: string;
        /**
         * Textual representation of an expression in Common Expression Language
         * syntax.  The application context of the containing message determines
         * which well-known feature set of CEL is supported.
         */
        expression?: string;
        /**
         * An optional string indicating the location of the expression for error
         * reporting, e.g. a file name and a position in the file.
         */
        location?: string;
        /**
         * An optional title for the expression, i.e. a short string describing its
         * purpose. This can be used e.g. in UIs which allow to enter the
         * expression.
         */
        title?: string;
    }
    /**
     * Request message for `GetIamPolicy` method.
     */
    interface Schema$GetIamPolicyRequest {
    }
    /**
     * The configuration of the HTTP bridge for a device registry.
     */
    interface Schema$HttpConfig {
        /**
         * If enabled, allows devices to use DeviceService via the HTTP protocol.
         * Otherwise, any requests to DeviceService will fail for this registry.
         */
        httpEnabledState?: string;
    }
    /**
     * Response for `ListDeviceConfigVersions`.
     */
    interface Schema$ListDeviceConfigVersionsResponse {
        /**
         * The device configuration for the last few versions. Versions are listed
         * in decreasing order, starting from the most recent one.
         */
        deviceConfigs?: Schema$DeviceConfig[];
    }
    /**
     * Response for `ListDeviceRegistries`.
     */
    interface Schema$ListDeviceRegistriesResponse {
        /**
         * The registries that matched the query.
         */
        deviceRegistries?: Schema$DeviceRegistry[];
        /**
         * If not empty, indicates that there may be more registries that match the
         * request; this value should be passed in a new
         * `ListDeviceRegistriesRequest`.
         */
        nextPageToken?: string;
    }
    /**
     * Response for `ListDevices`.
     */
    interface Schema$ListDevicesResponse {
        /**
         * The devices that match the request.
         */
        devices?: Schema$Device[];
        /**
         * If not empty, indicates that there may be more devices that match the
         * request; this value should be passed in a new `ListDevicesRequest`.
         */
        nextPageToken?: string;
    }
    /**
     * Response for `ListDeviceStates`.
     */
    interface Schema$ListDeviceStatesResponse {
        /**
         * The last few device states. States are listed in descending order of
         * server update time, starting from the most recent one.
         */
        deviceStates?: Schema$DeviceState[];
    }
    /**
     * Request for `ModifyCloudToDeviceConfig`.
     */
    interface Schema$ModifyCloudToDeviceConfigRequest {
        /**
         * The configuration data for the device.
         */
        binaryData?: string;
        /**
         * The version number to update. If this value is zero, it will not check
         * the version number of the server and will always update the current
         * version; otherwise, this update will fail if the version number found on
         * the server does not match this version number. This is used to support
         * multiple simultaneous updates without losing data.
         */
        versionToUpdate?: string;
    }
    /**
     * The configuration of MQTT for a device registry.
     */
    interface Schema$MqttConfig {
        /**
         * If enabled, allows connections using the MQTT protocol. Otherwise, MQTT
         * connections to this registry will fail.
         */
        mqttEnabledState?: string;
    }
    /**
     * Defines an Identity and Access Management (IAM) policy. It is used to
     * specify access control policies for Cloud Platform resources.   A `Policy`
     * consists of a list of `bindings`. A `binding` binds a list of `members` to
     * a `role`, where the members can be user accounts, Google groups, Google
     * domains, and service accounts. A `role` is a named list of permissions
     * defined by IAM.  **JSON Example**      {       &quot;bindings&quot;: [ {
     * &quot;role&quot;: &quot;roles/owner&quot;,           &quot;members&quot;: [
     * &quot;user:mike@example.com&quot;, &quot;group:admins@example.com&quot;,
     * &quot;domain:google.com&quot;,
     * &quot;serviceAccount:my-other-app@appspot.gserviceaccount.com&quot; ] }, {
     * &quot;role&quot;: &quot;roles/viewer&quot;,           &quot;members&quot;:
     * [&quot;user:sean@example.com&quot;]         }       ]     }  **YAML
     * Example**      bindings:     - members:       - user:mike@example.com -
     * group:admins@example.com       - domain:google.com       -
     * serviceAccount:my-other-app@appspot.gserviceaccount.com       role:
     * roles/owner     - members:       - user:sean@example.com       role:
     * roles/viewer   For a description of IAM and its features, see the [IAM
     * developer&#39;s guide](https://cloud.google.com/iam/docs).
     */
    interface Schema$Policy {
        /**
         * Associates a list of `members` to a `role`. `bindings` with no members
         * will result in an error.
         */
        bindings?: Schema$Binding[];
        /**
         * `etag` is used for optimistic concurrency control as a way to help
         * prevent simultaneous updates of a policy from overwriting each other. It
         * is strongly suggested that systems make use of the `etag` in the
         * read-modify-write cycle to perform policy updates in order to avoid race
         * conditions: An `etag` is returned in the response to `getIamPolicy`, and
         * systems are expected to put that etag in the request to `setIamPolicy` to
         * ensure that their change will be applied to the same version of the
         * policy.  If no `etag` is provided in the call to `setIamPolicy`, then the
         * existing policy is overwritten blindly.
         */
        etag?: string;
        /**
         * Deprecated.
         */
        version?: number;
    }
    /**
     * A public key certificate format and data.
     */
    interface Schema$PublicKeyCertificate {
        /**
         * The certificate data.
         */
        certificate?: string;
        /**
         * The certificate format.
         */
        format?: string;
        /**
         * [Output only] The certificate details. Used only for X.509 certificates.
         */
        x509Details?: Schema$X509CertificateDetails;
    }
    /**
     * A public key format and data.
     */
    interface Schema$PublicKeyCredential {
        /**
         * The format of the key.
         */
        format?: string;
        /**
         * The key data.
         */
        key?: string;
    }
    /**
     * A server-stored registry credential used to validate device credentials.
     */
    interface Schema$RegistryCredential {
        /**
         * A public key certificate used to verify the device credentials.
         */
        publicKeyCertificate?: Schema$PublicKeyCertificate;
    }
    /**
     * Request for `SendCommandToDevice`.
     */
    interface Schema$SendCommandToDeviceRequest {
        /**
         * The command data to send to the device.
         */
        binaryData?: string;
        /**
         * Optional subfolder for the command. If empty, the command will be
         * delivered to the /devices/{device-id}/commands topic, otherwise it will
         * be delivered to the /devices/{device-id}/commands/{subfolder} topic.
         * Multi-level subfolders are allowed. This field must not have more than
         * 256 characters, and must not contain any MQTT wildcards (&quot;+&quot; or
         * &quot;#&quot;) or null characters.
         */
        subfolder?: string;
    }
    /**
     * Response for `SendCommandToDevice`.
     */
    interface Schema$SendCommandToDeviceResponse {
    }
    /**
     * Request message for `SetIamPolicy` method.
     */
    interface Schema$SetIamPolicyRequest {
        /**
         * REQUIRED: The complete policy to be applied to the `resource`. The size
         * of the policy is limited to a few 10s of KB. An empty policy is a valid
         * policy but certain Cloud Platform services (such as Projects) might
         * reject them.
         */
        policy?: Schema$Policy;
    }
    /**
     * The configuration for notification of new states received from the device.
     */
    interface Schema$StateNotificationConfig {
        /**
         * A Cloud Pub/Sub topic name. For example,
         * `projects/myProject/topics/deviceEvents`.
         */
        pubsubTopicName?: string;
    }
    /**
     * The `Status` type defines a logical error model that is suitable for
     * different programming environments, including REST APIs and RPC APIs. It is
     * used by [gRPC](https://github.com/grpc). The error model is designed to be:
     * - Simple to use and understand for most users - Flexible enough to meet
     * unexpected needs  # Overview  The `Status` message contains three pieces of
     * data: error code, error message, and error details. The error code should
     * be an enum value of google.rpc.Code, but it may accept additional error
     * codes if needed.  The error message should be a developer-facing English
     * message that helps developers *understand* and *resolve* the error. If a
     * localized user-facing error message is needed, put the localized message in
     * the error details or localize it in the client. The optional error details
     * may contain arbitrary information about the error. There is a predefined
     * set of error detail types in the package `google.rpc` that can be used for
     * common error conditions.  # Language mapping  The `Status` message is the
     * logical representation of the error model, but it is not necessarily the
     * actual wire format. When the `Status` message is exposed in different
     * client libraries and different wire protocols, it can be mapped
     * differently. For example, it will likely be mapped to some exceptions in
     * Java, but more likely mapped to some error codes in C.  # Other uses  The
     * error model and the `Status` message can be used in a variety of
     * environments, either with or without APIs, to provide a consistent
     * developer experience across different environments.  Example uses of this
     * error model include:  - Partial errors. If a service needs to return
     * partial errors to the client,     it may embed the `Status` in the normal
     * response to indicate the partial     errors.  - Workflow errors. A typical
     * workflow has multiple steps. Each step may     have a `Status` message for
     * error reporting.  - Batch operations. If a client uses batch request and
     * batch response, the     `Status` message should be used directly inside
     * batch response, one for     each error sub-response.  - Asynchronous
     * operations. If an API call embeds asynchronous operation     results in its
     * response, the status of those operations should be     represented directly
     * using the `Status` message.  - Logging. If some API errors are stored in
     * logs, the message `Status` could     be used directly after any stripping
     * needed for security/privacy reasons.
     */
    interface Schema$Status {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number;
        /**
         * A list of messages that carry the error details.  There is a common set
         * of message types for APIs to use.
         */
        details?: any[];
        /**
         * A developer-facing error message, which should be in English. Any
         * user-facing error message should be localized and sent in the
         * google.rpc.Status.details field, or localized by the client.
         */
        message?: string;
    }
    /**
     * Request message for `TestIamPermissions` method.
     */
    interface Schema$TestIamPermissionsRequest {
        /**
         * The set of permissions to check for the `resource`. Permissions with
         * wildcards (such as &#39;*&#39; or &#39;storage.*&#39;) are not allowed.
         * For more information see [IAM
         * Overview](https://cloud.google.com/iam/docs/overview#permissions).
         */
        permissions?: string[];
    }
    /**
     * Response message for `TestIamPermissions` method.
     */
    interface Schema$TestIamPermissionsResponse {
        /**
         * A subset of `TestPermissionsRequest.permissions` that the caller is
         * allowed.
         */
        permissions?: string[];
    }
    /**
     * Details of an X.509 certificate. For informational purposes only.
     */
    interface Schema$X509CertificateDetails {
        /**
         * The time the certificate becomes invalid.
         */
        expiryTime?: string;
        /**
         * The entity that signed the certificate.
         */
        issuer?: string;
        /**
         * The type of public key in the certificate.
         */
        publicKeyType?: string;
        /**
         * The algorithm used to sign the certificate.
         */
        signatureAlgorithm?: string;
        /**
         * The time the certificate becomes valid.
         */
        startTime?: string;
        /**
         * The entity the certificate and public key belong to.
         */
        subject?: string;
    }
    class Resource$Projects {
        root: Cloudiot;
        locations: Resource$Projects$Locations;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
    }
    class Resource$Projects$Locations {
        root: Cloudiot;
        registries: Resource$Projects$Locations$Registries;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
    }
    class Resource$Projects$Locations$Registries {
        root: Cloudiot;
        devices: Resource$Projects$Locations$Registries$Devices;
        groups: Resource$Projects$Locations$Registries$Groups;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
        /**
         * cloudiot.projects.locations.registries.create
         * @desc Creates a device registry that contains devices.
         * @alias cloudiot.projects.locations.registries.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The project and cloud region where this device registry must be created. For example, `projects/example-project/locations/us-central1`.
         * @param {().DeviceRegistry} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Locations$Registries$Create, options?: MethodOptions): AxiosPromise<Schema$DeviceRegistry>;
        create(params: Params$Resource$Projects$Locations$Registries$Create, options: MethodOptions | BodyResponseCallback<Schema$DeviceRegistry>, callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        create(params: Params$Resource$Projects$Locations$Registries$Create, callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        create(callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        /**
         * cloudiot.projects.locations.registries.delete
         * @desc Deletes a device registry configuration.
         * @alias cloudiot.projects.locations.registries.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Locations$Registries$Delete, options?: MethodOptions): AxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Registries$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Registries$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * cloudiot.projects.locations.registries.get
         * @desc Gets a device registry configuration.
         * @alias cloudiot.projects.locations.registries.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Registries$Get, options?: MethodOptions): AxiosPromise<Schema$DeviceRegistry>;
        get(params: Params$Resource$Projects$Locations$Registries$Get, options: MethodOptions | BodyResponseCallback<Schema$DeviceRegistry>, callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        get(params: Params$Resource$Projects$Locations$Registries$Get, callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        get(callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        /**
         * cloudiot.projects.locations.registries.getIamPolicy
         * @desc Gets the access control policy for a resource. Returns an empty
         * policy if the resource exists and does not have a policy set.
         * @alias cloudiot.projects.locations.registries.getIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().GetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy(params?: Params$Resource$Projects$Locations$Registries$Getiampolicy, options?: MethodOptions): AxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Registries$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Registries$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * cloudiot.projects.locations.registries.list
         * @desc Lists device registries.
         * @alias cloudiot.projects.locations.registries.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of registries to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
         * @param {string=} params.pageToken The value returned by the last `ListDeviceRegistriesResponse`; indicates that this is a continuation of a prior `ListDeviceRegistries` call and the system should return the next page of data.
         * @param {string} params.parent The project and cloud region path. For example, `projects/example-project/locations/us-central1`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Registries$List, options?: MethodOptions): AxiosPromise<Schema$ListDeviceRegistriesResponse>;
        list(params: Params$Resource$Projects$Locations$Registries$List, options: MethodOptions | BodyResponseCallback<Schema$ListDeviceRegistriesResponse>, callback: BodyResponseCallback<Schema$ListDeviceRegistriesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Registries$List, callback: BodyResponseCallback<Schema$ListDeviceRegistriesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDeviceRegistriesResponse>): void;
        /**
         * cloudiot.projects.locations.registries.patch
         * @desc Updates a device registry configuration.
         * @alias cloudiot.projects.locations.registries.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource path name. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
         * @param {string=} params.updateMask Only updates the `device_registry` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `event_notification_config`, `http_config`, `mqtt_config`, and `state_notification_config`.
         * @param {().DeviceRegistry} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Projects$Locations$Registries$Patch, options?: MethodOptions): AxiosPromise<Schema$DeviceRegistry>;
        patch(params: Params$Resource$Projects$Locations$Registries$Patch, options: MethodOptions | BodyResponseCallback<Schema$DeviceRegistry>, callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        patch(params: Params$Resource$Projects$Locations$Registries$Patch, callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        patch(callback: BodyResponseCallback<Schema$DeviceRegistry>): void;
        /**
         * cloudiot.projects.locations.registries.setIamPolicy
         * @desc Sets the access control policy on the specified resource. Replaces
         * any existing policy.
         * @alias cloudiot.projects.locations.registries.setIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {().SetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy(params?: Params$Resource$Projects$Locations$Registries$Setiampolicy, options?: MethodOptions): AxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Registries$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Registries$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * cloudiot.projects.locations.registries.testIamPermissions
         * @desc Returns permissions that a caller has on the specified resource. If
         * the resource does not exist, this will return an empty set of
         * permissions, not a NOT_FOUND error.
         * @alias cloudiot.projects.locations.registries.testIamPermissions
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().TestIamPermissionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions(params?: Params$Resource$Projects$Locations$Registries$Testiampermissions, options?: MethodOptions): AxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Registries$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Registries$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Registries$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The project and cloud region where this device registry must be created.
         * For example, `projects/example-project/locations/us-central1`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DeviceRegistry;
    }
    interface Params$Resource$Projects$Locations$Registries$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device registry. For example,
         * `projects/example-project/locations/us-central1/registries/my-registry`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Registries$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device registry. For example,
         * `projects/example-project/locations/us-central1/registries/my-registry`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Registries$Getiampolicy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy is being requested. See the
         * operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GetIamPolicyRequest;
    }
    interface Params$Resource$Projects$Locations$Registries$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of registries to return in the response. If this value
         * is zero, the service will select a default size. A call may return fewer
         * objects than requested. A non-empty `next_page_token` in the response
         * indicates that more data is available.
         */
        pageSize?: number;
        /**
         * The value returned by the last `ListDeviceRegistriesResponse`; indicates
         * that this is a continuation of a prior `ListDeviceRegistries` call and
         * the system should return the next page of data.
         */
        pageToken?: string;
        /**
         * The project and cloud region path. For example,
         * `projects/example-project/locations/us-central1`.
         */
        parent?: string;
    }
    interface Params$Resource$Projects$Locations$Registries$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource path name. For example,
         * `projects/example-project/locations/us-central1/registries/my-registry`.
         */
        name?: string;
        /**
         * Only updates the `device_registry` fields indicated by this mask. The
         * field mask must not be empty, and it must not contain fields that are
         * immutable or only set by the server. Mutable top-level fields:
         * `event_notification_config`, `http_config`, `mqtt_config`, and
         * `state_notification_config`.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DeviceRegistry;
    }
    interface Params$Resource$Projects$Locations$Registries$Setiampolicy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy is being specified. See the
         * operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    interface Params$Resource$Projects$Locations$Registries$Testiampermissions extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy detail is being requested.
         * See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    class Resource$Projects$Locations$Registries$Devices {
        root: Cloudiot;
        configVersions: Resource$Projects$Locations$Registries$Devices$Configversions;
        states: Resource$Projects$Locations$Registries$Devices$States;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
        /**
         * cloudiot.projects.locations.registries.devices.create
         * @desc Creates a device in a device registry.
         * @alias cloudiot.projects.locations.registries.devices.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.parent The name of the device registry where this device should be created. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
         * @param {().Device} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Locations$Registries$Devices$Create, options?: MethodOptions): AxiosPromise<Schema$Device>;
        create(params: Params$Resource$Projects$Locations$Registries$Devices$Create, options: MethodOptions | BodyResponseCallback<Schema$Device>, callback: BodyResponseCallback<Schema$Device>): void;
        create(params: Params$Resource$Projects$Locations$Registries$Devices$Create, callback: BodyResponseCallback<Schema$Device>): void;
        create(callback: BodyResponseCallback<Schema$Device>): void;
        /**
         * cloudiot.projects.locations.registries.devices.delete
         * @desc Deletes a device.
         * @alias cloudiot.projects.locations.registries.devices.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Locations$Registries$Devices$Delete, options?: MethodOptions): AxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Registries$Devices$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Registries$Devices$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * cloudiot.projects.locations.registries.devices.get
         * @desc Gets details about a device.
         * @alias cloudiot.projects.locations.registries.devices.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fieldMask The fields of the `Device` resource to be returned in the response. If the field mask is unset or empty, all fields are returned.
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Registries$Devices$Get, options?: MethodOptions): AxiosPromise<Schema$Device>;
        get(params: Params$Resource$Projects$Locations$Registries$Devices$Get, options: MethodOptions | BodyResponseCallback<Schema$Device>, callback: BodyResponseCallback<Schema$Device>): void;
        get(params: Params$Resource$Projects$Locations$Registries$Devices$Get, callback: BodyResponseCallback<Schema$Device>): void;
        get(callback: BodyResponseCallback<Schema$Device>): void;
        /**
         * cloudiot.projects.locations.registries.devices.list
         * @desc List devices in a device registry.
         * @alias cloudiot.projects.locations.registries.devices.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.deviceIds A list of device string IDs. For example, `['device0', 'device12']`. If empty, this field is ignored. Maximum IDs: 10,000
         * @param {string=} params.deviceNumIds A list of device numeric IDs. If empty, this field is ignored. Maximum IDs: 10,000.
         * @param {string=} params.fieldMask The fields of the `Device` resource to be returned in the response. The fields `id` and `num_id` are always returned, along with any other fields specified.
         * @param {integer=} params.pageSize The maximum number of devices to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
         * @param {string=} params.pageToken The value returned by the last `ListDevicesResponse`; indicates that this is a continuation of a prior `ListDevices` call and the system should return the next page of data.
         * @param {string} params.parent The device registry path. Required. For example, `projects/my-project/locations/us-central1/registries/my-registry`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Registries$Devices$List, options?: MethodOptions): AxiosPromise<Schema$ListDevicesResponse>;
        list(params: Params$Resource$Projects$Locations$Registries$Devices$List, options: MethodOptions | BodyResponseCallback<Schema$ListDevicesResponse>, callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Registries$Devices$List, callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
        /**
         * cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
         * @desc Modifies the configuration for the device, which is eventually sent
         * from the Cloud IoT Core servers. Returns the modified configuration
         * version and its metadata.
         * @alias
         * cloudiot.projects.locations.registries.devices.modifyCloudToDeviceConfig
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {().ModifyCloudToDeviceConfigRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        modifyCloudToDeviceConfig(params?: Params$Resource$Projects$Locations$Registries$Devices$Modifycloudtodeviceconfig, options?: MethodOptions): AxiosPromise<Schema$DeviceConfig>;
        modifyCloudToDeviceConfig(params: Params$Resource$Projects$Locations$Registries$Devices$Modifycloudtodeviceconfig, options: MethodOptions | BodyResponseCallback<Schema$DeviceConfig>, callback: BodyResponseCallback<Schema$DeviceConfig>): void;
        modifyCloudToDeviceConfig(params: Params$Resource$Projects$Locations$Registries$Devices$Modifycloudtodeviceconfig, callback: BodyResponseCallback<Schema$DeviceConfig>): void;
        modifyCloudToDeviceConfig(callback: BodyResponseCallback<Schema$DeviceConfig>): void;
        /**
         * cloudiot.projects.locations.registries.devices.patch
         * @desc Updates a device.
         * @alias cloudiot.projects.locations.registries.devices.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
         * @param {string=} params.updateMask Only updates the `device` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `credentials`, `blocked`, and `metadata`
         * @param {().Device} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Projects$Locations$Registries$Devices$Patch, options?: MethodOptions): AxiosPromise<Schema$Device>;
        patch(params: Params$Resource$Projects$Locations$Registries$Devices$Patch, options: MethodOptions | BodyResponseCallback<Schema$Device>, callback: BodyResponseCallback<Schema$Device>): void;
        patch(params: Params$Resource$Projects$Locations$Registries$Devices$Patch, callback: BodyResponseCallback<Schema$Device>): void;
        patch(callback: BodyResponseCallback<Schema$Device>): void;
        /**
         * cloudiot.projects.locations.registries.devices.sendCommandToDevice
         * @desc Sends a command to the specified device. In order for a device to
         * be able to receive commands, it must: 1) be connected to Cloud IoT Core
         * using the MQTT protocol, and 2) be subscribed to the group of MQTT topics
         * specified by    /devices/{device-id}/commands/#. This subscription will
         * receive commands    at the top-level topic /devices/{device-id}/commands
         * as well as commands    for subfolders, like
         * /devices/{device-id}/commands/subfolder.    Note that subscribing to
         * specific subfolders is not supported. If the command could not be
         * delivered to the device, this method will return an error; in particular,
         * if the device is not subscribed, this method will return
         * FAILED_PRECONDITION. Otherwise, this method will return OK. If the
         * subscription is QoS 1, at least once delivery will be guaranteed; for QoS
         * 0, no acknowledgment will be expected from the device.
         * @alias cloudiot.projects.locations.registries.devices.sendCommandToDevice
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {().SendCommandToDeviceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sendCommandToDevice(params?: Params$Resource$Projects$Locations$Registries$Devices$Sendcommandtodevice, options?: MethodOptions): AxiosPromise<Schema$SendCommandToDeviceResponse>;
        sendCommandToDevice(params: Params$Resource$Projects$Locations$Registries$Devices$Sendcommandtodevice, options: MethodOptions | BodyResponseCallback<Schema$SendCommandToDeviceResponse>, callback: BodyResponseCallback<Schema$SendCommandToDeviceResponse>): void;
        sendCommandToDevice(params: Params$Resource$Projects$Locations$Registries$Devices$Sendcommandtodevice, callback: BodyResponseCallback<Schema$SendCommandToDeviceResponse>): void;
        sendCommandToDevice(callback: BodyResponseCallback<Schema$SendCommandToDeviceResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device registry where this device should be created. For
         * example,
         * `projects/example-project/locations/us-central1/registries/my-registry`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Device;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The fields of the `Device` resource to be returned in the response. If
         * the field mask is unset or empty, all fields are returned.
         */
        fieldMask?: string;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * A list of device string IDs. For example, `['device0', 'device12']`. If
         * empty, this field is ignored. Maximum IDs: 10,000
         */
        deviceIds?: string;
        /**
         * A list of device numeric IDs. If empty, this field is ignored. Maximum
         * IDs: 10,000.
         */
        deviceNumIds?: string;
        /**
         * The fields of the `Device` resource to be returned in the response. The
         * fields `id` and `num_id` are always returned, along with any other fields
         * specified.
         */
        fieldMask?: string;
        /**
         * The maximum number of devices to return in the response. If this value is
         * zero, the service will select a default size. A call may return fewer
         * objects than requested. A non-empty `next_page_token` in the response
         * indicates that more data is available.
         */
        pageSize?: number;
        /**
         * The value returned by the last `ListDevicesResponse`; indicates that this
         * is a continuation of a prior `ListDevices` call and the system should
         * return the next page of data.
         */
        pageToken?: string;
        /**
         * The device registry path. Required. For example,
         * `projects/my-project/locations/us-central1/registries/my-registry`.
         */
        parent?: string;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$Modifycloudtodeviceconfig extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ModifyCloudToDeviceConfigRequest;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource path name. For example,
         * `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
         * `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
         * When `name` is populated as a response from the service, it always ends
         * in the device numeric ID.
         */
        name?: string;
        /**
         * Only updates the `device` fields indicated by this mask. The field mask
         * must not be empty, and it must not contain fields that are immutable or
         * only set by the server. Mutable top-level fields: `credentials`,
         * `blocked`, and `metadata`
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Device;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$Sendcommandtodevice extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SendCommandToDeviceRequest;
    }
    class Resource$Projects$Locations$Registries$Devices$Configversions {
        root: Cloudiot;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
        /**
         * cloudiot.projects.locations.registries.devices.configVersions.list
         * @desc Lists the last few versions of the device configuration in
         * descending order (i.e.: newest first).
         * @alias cloudiot.projects.locations.registries.devices.configVersions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {integer=} params.numVersions The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Registries$Devices$Configversions$List, options?: MethodOptions): AxiosPromise<Schema$ListDeviceConfigVersionsResponse>;
        list(params: Params$Resource$Projects$Locations$Registries$Devices$Configversions$List, options: MethodOptions | BodyResponseCallback<Schema$ListDeviceConfigVersionsResponse>, callback: BodyResponseCallback<Schema$ListDeviceConfigVersionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Registries$Devices$Configversions$List, callback: BodyResponseCallback<Schema$ListDeviceConfigVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDeviceConfigVersionsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$Configversions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
        /**
         * The number of versions to list. Versions are listed in decreasing order
         * of the version number. The maximum number of versions retained is 10. If
         * this value is zero, it will return all the versions available.
         */
        numVersions?: number;
    }
    class Resource$Projects$Locations$Registries$Devices$States {
        root: Cloudiot;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
        /**
         * cloudiot.projects.locations.registries.devices.states.list
         * @desc Lists the last few versions of the device state in descending order
         * (i.e.: newest first).
         * @alias cloudiot.projects.locations.registries.devices.states.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {integer=} params.numStates The number of states to list. States are listed in descending order of update time. The maximum number of states retained is 10. If this value is zero, it will return all the states available.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Registries$Devices$States$List, options?: MethodOptions): AxiosPromise<Schema$ListDeviceStatesResponse>;
        list(params: Params$Resource$Projects$Locations$Registries$Devices$States$List, options: MethodOptions | BodyResponseCallback<Schema$ListDeviceStatesResponse>, callback: BodyResponseCallback<Schema$ListDeviceStatesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Registries$Devices$States$List, callback: BodyResponseCallback<Schema$ListDeviceStatesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDeviceStatesResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Registries$Devices$States$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
        /**
         * The number of states to list. States are listed in descending order of
         * update time. The maximum number of states retained is 10. If this value
         * is zero, it will return all the states available.
         */
        numStates?: number;
    }
    class Resource$Projects$Locations$Registries$Groups {
        root: Cloudiot;
        devices: Resource$Projects$Locations$Registries$Groups$Devices;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
        /**
         * cloudiot.projects.locations.registries.groups.getIamPolicy
         * @desc Gets the access control policy for a resource. Returns an empty
         * policy if the resource exists and does not have a policy set.
         * @alias cloudiot.projects.locations.registries.groups.getIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().GetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getIamPolicy(params?: Params$Resource$Projects$Locations$Registries$Groups$Getiampolicy, options?: MethodOptions): AxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Registries$Groups$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Registries$Groups$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * cloudiot.projects.locations.registries.groups.setIamPolicy
         * @desc Sets the access control policy on the specified resource. Replaces
         * any existing policy.
         * @alias cloudiot.projects.locations.registries.groups.setIamPolicy
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy is being specified. See the operation documentation for the appropriate value for this field.
         * @param {().SetIamPolicyRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setIamPolicy(params?: Params$Resource$Projects$Locations$Registries$Groups$Setiampolicy, options?: MethodOptions): AxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Registries$Groups$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Registries$Groups$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * cloudiot.projects.locations.registries.groups.testIamPermissions
         * @desc Returns permissions that a caller has on the specified resource. If
         * the resource does not exist, this will return an empty set of
         * permissions, not a NOT_FOUND error.
         * @alias cloudiot.projects.locations.registries.groups.testIamPermissions
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.resource_ REQUIRED: The resource for which the policy detail is being requested. See the operation documentation for the appropriate value for this field.
         * @param {().TestIamPermissionsRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        testIamPermissions(params?: Params$Resource$Projects$Locations$Registries$Groups$Testiampermissions, options?: MethodOptions): AxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Registries$Groups$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Registries$Groups$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Getiampolicy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy is being requested. See the
         * operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GetIamPolicyRequest;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Setiampolicy extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy is being specified. See the
         * operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Testiampermissions extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * REQUIRED: The resource for which the policy detail is being requested.
         * See the operation documentation for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    class Resource$Projects$Locations$Registries$Groups$Devices {
        root: Cloudiot;
        configVersions: Resource$Projects$Locations$Registries$Groups$Devices$Configversions;
        states: Resource$Projects$Locations$Registries$Groups$Devices$States;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
        /**
         * cloudiot.projects.locations.registries.groups.devices.get
         * @desc Gets details about a device.
         * @alias cloudiot.projects.locations.registries.groups.devices.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.fieldMask The fields of the `Device` resource to be returned in the response. If the field mask is unset or empty, all fields are returned.
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Locations$Registries$Groups$Devices$Get, options?: MethodOptions): AxiosPromise<Schema$Device>;
        get(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Get, options: MethodOptions | BodyResponseCallback<Schema$Device>, callback: BodyResponseCallback<Schema$Device>): void;
        get(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Get, callback: BodyResponseCallback<Schema$Device>): void;
        get(callback: BodyResponseCallback<Schema$Device>): void;
        /**
         * cloudiot.projects.locations.registries.groups.devices.list
         * @desc List devices in a device registry.
         * @alias cloudiot.projects.locations.registries.groups.devices.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.deviceIds A list of device string IDs. For example, `['device0', 'device12']`. If empty, this field is ignored. Maximum IDs: 10,000
         * @param {string=} params.deviceNumIds A list of device numeric IDs. If empty, this field is ignored. Maximum IDs: 10,000.
         * @param {string=} params.fieldMask The fields of the `Device` resource to be returned in the response. The fields `id` and `num_id` are always returned, along with any other fields specified.
         * @param {integer=} params.pageSize The maximum number of devices to return in the response. If this value is zero, the service will select a default size. A call may return fewer objects than requested. A non-empty `next_page_token` in the response indicates that more data is available.
         * @param {string=} params.pageToken The value returned by the last `ListDevicesResponse`; indicates that this is a continuation of a prior `ListDevices` call and the system should return the next page of data.
         * @param {string} params.parent The device registry path. Required. For example, `projects/my-project/locations/us-central1/registries/my-registry`.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Registries$Groups$Devices$List, options?: MethodOptions): AxiosPromise<Schema$ListDevicesResponse>;
        list(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$List, options: MethodOptions | BodyResponseCallback<Schema$ListDevicesResponse>, callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$List, callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDevicesResponse>): void;
        /**
         * cloudiot.projects.locations.registries.groups.devices.modifyCloudToDeviceConfig
         * @desc Modifies the configuration for the device, which is eventually sent
         * from the Cloud IoT Core servers. Returns the modified configuration
         * version and its metadata.
         * @alias
         * cloudiot.projects.locations.registries.groups.devices.modifyCloudToDeviceConfig
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {().ModifyCloudToDeviceConfigRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        modifyCloudToDeviceConfig(params?: Params$Resource$Projects$Locations$Registries$Groups$Devices$Modifycloudtodeviceconfig, options?: MethodOptions): AxiosPromise<Schema$DeviceConfig>;
        modifyCloudToDeviceConfig(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Modifycloudtodeviceconfig, options: MethodOptions | BodyResponseCallback<Schema$DeviceConfig>, callback: BodyResponseCallback<Schema$DeviceConfig>): void;
        modifyCloudToDeviceConfig(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Modifycloudtodeviceconfig, callback: BodyResponseCallback<Schema$DeviceConfig>): void;
        modifyCloudToDeviceConfig(callback: BodyResponseCallback<Schema$DeviceConfig>): void;
        /**
         * cloudiot.projects.locations.registries.groups.devices.patch
         * @desc Updates a device.
         * @alias cloudiot.projects.locations.registries.groups.devices.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The resource path name. For example, `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`. When `name` is populated as a response from the service, it always ends in the device numeric ID.
         * @param {string=} params.updateMask Only updates the `device` fields indicated by this mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. Mutable top-level fields: `credentials`, `blocked`, and `metadata`
         * @param {().Device} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Projects$Locations$Registries$Groups$Devices$Patch, options?: MethodOptions): AxiosPromise<Schema$Device>;
        patch(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Patch, options: MethodOptions | BodyResponseCallback<Schema$Device>, callback: BodyResponseCallback<Schema$Device>): void;
        patch(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Patch, callback: BodyResponseCallback<Schema$Device>): void;
        patch(callback: BodyResponseCallback<Schema$Device>): void;
        /**
         * cloudiot.projects.locations.registries.groups.devices.sendCommandToDevice
         * @desc Sends a command to the specified device. In order for a device to
         * be able to receive commands, it must: 1) be connected to Cloud IoT Core
         * using the MQTT protocol, and 2) be subscribed to the group of MQTT topics
         * specified by    /devices/{device-id}/commands/#. This subscription will
         * receive commands    at the top-level topic /devices/{device-id}/commands
         * as well as commands    for subfolders, like
         * /devices/{device-id}/commands/subfolder.    Note that subscribing to
         * specific subfolders is not supported. If the command could not be
         * delivered to the device, this method will return an error; in particular,
         * if the device is not subscribed, this method will return
         * FAILED_PRECONDITION. Otherwise, this method will return OK. If the
         * subscription is QoS 1, at least once delivery will be guaranteed; for QoS
         * 0, no acknowledgment will be expected from the device.
         * @alias
         * cloudiot.projects.locations.registries.groups.devices.sendCommandToDevice
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {().SendCommandToDeviceRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sendCommandToDevice(params?: Params$Resource$Projects$Locations$Registries$Groups$Devices$Sendcommandtodevice, options?: MethodOptions): AxiosPromise<Schema$SendCommandToDeviceResponse>;
        sendCommandToDevice(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Sendcommandtodevice, options: MethodOptions | BodyResponseCallback<Schema$SendCommandToDeviceResponse>, callback: BodyResponseCallback<Schema$SendCommandToDeviceResponse>): void;
        sendCommandToDevice(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Sendcommandtodevice, callback: BodyResponseCallback<Schema$SendCommandToDeviceResponse>): void;
        sendCommandToDevice(callback: BodyResponseCallback<Schema$SendCommandToDeviceResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Devices$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The fields of the `Device` resource to be returned in the response. If
         * the field mask is unset or empty, all fields are returned.
         */
        fieldMask?: string;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Devices$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * A list of device string IDs. For example, `['device0', 'device12']`. If
         * empty, this field is ignored. Maximum IDs: 10,000
         */
        deviceIds?: string;
        /**
         * A list of device numeric IDs. If empty, this field is ignored. Maximum
         * IDs: 10,000.
         */
        deviceNumIds?: string;
        /**
         * The fields of the `Device` resource to be returned in the response. The
         * fields `id` and `num_id` are always returned, along with any other fields
         * specified.
         */
        fieldMask?: string;
        /**
         * The maximum number of devices to return in the response. If this value is
         * zero, the service will select a default size. A call may return fewer
         * objects than requested. A non-empty `next_page_token` in the response
         * indicates that more data is available.
         */
        pageSize?: number;
        /**
         * The value returned by the last `ListDevicesResponse`; indicates that this
         * is a continuation of a prior `ListDevices` call and the system should
         * return the next page of data.
         */
        pageToken?: string;
        /**
         * The device registry path. Required. For example,
         * `projects/my-project/locations/us-central1/registries/my-registry`.
         */
        parent?: string;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Devices$Modifycloudtodeviceconfig extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ModifyCloudToDeviceConfigRequest;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Devices$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The resource path name. For example,
         * `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
         * `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
         * When `name` is populated as a response from the service, it always ends
         * in the device numeric ID.
         */
        name?: string;
        /**
         * Only updates the `device` fields indicated by this mask. The field mask
         * must not be empty, and it must not contain fields that are immutable or
         * only set by the server. Mutable top-level fields: `credentials`,
         * `blocked`, and `metadata`
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Device;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Devices$Sendcommandtodevice extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SendCommandToDeviceRequest;
    }
    class Resource$Projects$Locations$Registries$Groups$Devices$Configversions {
        root: Cloudiot;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
        /**
         * cloudiot.projects.locations.registries.groups.devices.configVersions.list
         * @desc Lists the last few versions of the device configuration in
         * descending order (i.e.: newest first).
         * @alias
         * cloudiot.projects.locations.registries.groups.devices.configVersions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {integer=} params.numVersions The number of versions to list. Versions are listed in decreasing order of the version number. The maximum number of versions retained is 10. If this value is zero, it will return all the versions available.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Registries$Groups$Devices$Configversions$List, options?: MethodOptions): AxiosPromise<Schema$ListDeviceConfigVersionsResponse>;
        list(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Configversions$List, options: MethodOptions | BodyResponseCallback<Schema$ListDeviceConfigVersionsResponse>, callback: BodyResponseCallback<Schema$ListDeviceConfigVersionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$Configversions$List, callback: BodyResponseCallback<Schema$ListDeviceConfigVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDeviceConfigVersionsResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Devices$Configversions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
        /**
         * The number of versions to list. Versions are listed in decreasing order
         * of the version number. The maximum number of versions retained is 10. If
         * this value is zero, it will return all the versions available.
         */
        numVersions?: number;
    }
    class Resource$Projects$Locations$Registries$Groups$Devices$States {
        root: Cloudiot;
        constructor(root: Cloudiot);
        getRoot(): Cloudiot;
        /**
         * cloudiot.projects.locations.registries.groups.devices.states.list
         * @desc Lists the last few versions of the device state in descending order
         * (i.e.: newest first).
         * @alias cloudiot.projects.locations.registries.groups.devices.states.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.name The name of the device. For example, `projects/p0/locations/us-central1/registries/registry0/devices/device0` or `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         * @param {integer=} params.numStates The number of states to list. States are listed in descending order of update time. The maximum number of states retained is 10. If this value is zero, it will return all the states available.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Locations$Registries$Groups$Devices$States$List, options?: MethodOptions): AxiosPromise<Schema$ListDeviceStatesResponse>;
        list(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$States$List, options: MethodOptions | BodyResponseCallback<Schema$ListDeviceStatesResponse>, callback: BodyResponseCallback<Schema$ListDeviceStatesResponse>): void;
        list(params: Params$Resource$Projects$Locations$Registries$Groups$Devices$States$List, callback: BodyResponseCallback<Schema$ListDeviceStatesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDeviceStatesResponse>): void;
    }
    interface Params$Resource$Projects$Locations$Registries$Groups$Devices$States$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The name of the device. For example,
         * `projects/p0/locations/us-central1/registries/registry0/devices/device0`
         * or
         * `projects/p0/locations/us-central1/registries/registry0/devices/{num_id}`.
         */
        name?: string;
        /**
         * The number of states to list. States are listed in descending order of
         * update time. The maximum number of states retained is 10. If this value
         * is zero, it will return all the states available.
         */
        numStates?: number;
    }
}
