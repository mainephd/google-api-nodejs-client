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
export declare namespace replicapoolupdater_v1beta1 {
    interface Options extends GlobalOptions {
        version: 'v1beta1';
    }
    interface StandardParameters {
        /**
         * Data format for the response.
         */
        alt?: string;
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
         * An opaque string that represents a user for quota purposes. Must not
         * exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Deprecated. Please use quotaUser instead.
         */
        userIp?: string;
    }
    /**
     * Google Compute Engine Instance Group Updater API
     *
     * [Deprecated. Please use compute.instanceGroupManagers.update method.
     * replicapoolupdater API will be disabled after December 30th, 2016] Updates
     * groups of Compute Engine instances.
     *
     * @example
     * const {google} = require('googleapis');
     * const replicapoolupdater = google.replicapoolupdater('v1beta1');
     *
     * @namespace replicapoolupdater
     * @type {Function}
     * @version v1beta1
     * @variation v1beta1
     * @param {object=} options Options for Replicapoolupdater
     */
    class Replicapoolupdater {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        rollingUpdates: Resource$Rollingupdates;
        zoneOperations: Resource$Zoneoperations;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * Update of a single instance.
     */
    interface Schema$InstanceUpdate {
        /**
         * Errors that occurred during the instance update.
         */
        error?: any;
        /**
         * Fully-qualified URL of the instance being updated.
         */
        instance?: string;
        /**
         * Status of the instance update. Possible values are:   -
         * &quot;PENDING&quot;: The instance update is pending execution.  -
         * &quot;ROLLING_FORWARD&quot;: The instance update is going forward.  -
         * &quot;ROLLING_BACK&quot;: The instance update is being rolled back.  -
         * &quot;PAUSED&quot;: The instance update is temporarily paused (inactive).
         * - &quot;ROLLED_OUT&quot;: The instance update is finished, the instance
         * is running the new template.  - &quot;ROLLED_BACK&quot;: The instance
         * update is finished, the instance has been reverted to the previous
         * template.  - &quot;CANCELLED&quot;: The instance update is paused and no
         * longer can be resumed, undefined in which template the instance is
         * running.
         */
        status?: string;
    }
    /**
     * Response returned by ListInstanceUpdates method.
     */
    interface Schema$InstanceUpdateList {
        /**
         * Collection of requested instance updates.
         */
        items?: Schema$InstanceUpdate[];
        /**
         * [Output Only] Type of the resource.
         */
        kind?: string;
        /**
         * A token used to continue a truncated list request.
         */
        nextPageToken?: string;
        /**
         * [Output Only] The fully qualified URL for the resource.
         */
        selfLink?: string;
    }
    /**
     * An operation resource, used to manage asynchronous API requests.
     */
    interface Schema$Operation {
        clientOperationId?: string;
        /**
         * [Output Only] Creation timestamp in RFC3339 text format.
         */
        creationTimestamp?: string;
        endTime?: string;
        /**
         * [Output Only] If errors occurred during processing of this operation,
         * this field will be populated.
         */
        error?: any;
        httpErrorMessage?: string;
        httpErrorStatusCode?: number;
        /**
         * [Output Only] Unique identifier for the resource; defined by the server.
         */
        id?: string;
        /**
         * [Output Only] The time that this operation was requested. This is in RFC
         * 3339 format.
         */
        insertTime?: string;
        /**
         * [Output Only] Type of the resource. Always replicapoolupdater#operation
         * for Operation resources.
         */
        kind?: string;
        /**
         * [Output Only] Name of the resource.
         */
        name?: string;
        operationType?: string;
        progress?: number;
        /**
         * [Output Only] URL of the region where the operation resides.
         */
        region?: string;
        /**
         * [Output Only] The fully qualified URL for the resource.
         */
        selfLink?: string;
        /**
         * [Output Only] The time that this operation was started by the server.
         * This is in RFC 3339 format.
         */
        startTime?: string;
        /**
         * [Output Only] Status of the operation. Can be one of the following:
         * &quot;PENDING&quot;, &quot;RUNNING&quot;, or &quot;DONE&quot;.
         */
        status?: string;
        /**
         * [Output Only] An optional textual description of the current status of
         * the operation.
         */
        statusMessage?: string;
        /**
         * [Output Only] Unique target id which identifies a particular incarnation
         * of the target.
         */
        targetId?: string;
        /**
         * [Output Only] URL of the resource the operation is mutating.
         */
        targetLink?: string;
        user?: string;
        warnings?: any[];
        /**
         * [Output Only] URL of the zone where the operation resides.
         */
        zone?: string;
    }
    /**
     * Contains a list of Operation resources.
     */
    interface Schema$OperationList {
        /**
         * [Output Only] Unique identifier for the resource; defined by the server.
         */
        id?: string;
        /**
         * [Output Only] The Operation resources.
         */
        items?: Schema$Operation[];
        /**
         * [Output Only] Type of resource. Always replicapoolupdater#operationList
         * for OperationList resources.
         */
        kind?: string;
        /**
         * [Output Only] A token used to continue a truncate.
         */
        nextPageToken?: string;
        /**
         * [Output Only] The fully qualified URL for the resource.
         */
        selfLink?: string;
    }
    /**
     * The following represents a resource describing a single update (rollout) of
     * a group of instances to the given template.
     */
    interface Schema$RollingUpdate {
        /**
         * Specifies the action to take for each instance within the instance group.
         * This can be RECREATE which will recreate each instance and is only
         * available for managed instance groups. It can also be REBOOT which
         * performs a soft reboot for each instance and is only available for
         * regular (non-managed) instance groups.
         */
        actionType?: string;
        /**
         * [Output Only] Creation timestamp in RFC3339 text format.
         */
        creationTimestamp?: string;
        /**
         * An optional textual description of the resource; provided by the client
         * when the resource is created.
         */
        description?: string;
        /**
         * [Output Only] Errors that occurred during the rolling update.
         */
        error?: any;
        /**
         * [Output Only] Unique identifier for the resource; defined by the server.
         */
        id?: string;
        /**
         * Fully-qualified URL of an instance group being updated. Exactly one of
         * instanceGroupManager and instanceGroup must be set.
         */
        instanceGroup?: string;
        /**
         * Fully-qualified URL of an instance group manager being updated. Exactly
         * one of instanceGroupManager and instanceGroup must be set.
         */
        instanceGroupManager?: string;
        /**
         * Fully-qualified URL of an instance template to apply.
         */
        instanceTemplate?: string;
        /**
         * [Output Only] Type of the resource.
         */
        kind?: string;
        /**
         * Fully-qualified URL of the instance template encountered while starting
         * the update.
         */
        oldInstanceTemplate?: string;
        /**
         * Parameters of the update process.
         */
        policy?: any;
        /**
         * [Output Only] An optional progress indicator that ranges from 0 to 100.
         * There is no requirement that this be linear or support any granularity of
         * operations. This should not be used to guess at when the update will be
         * complete. This number should be monotonically increasing as the update
         * progresses.
         */
        progress?: number;
        /**
         * [Output Only] The fully qualified URL for the resource.
         */
        selfLink?: string;
        /**
         * [Output Only] Status of the update. Possible values are:   -
         * &quot;ROLLING_FORWARD&quot;: The update is going forward.  -
         * &quot;ROLLING_BACK&quot;: The update is being rolled back.  -
         * &quot;PAUSED&quot;: The update is temporarily paused (inactive).  -
         * &quot;ROLLED_OUT&quot;: The update is finished, all instances have been
         * updated successfully.  - &quot;ROLLED_BACK&quot;: The update is finished,
         * all instances have been reverted to the previous template.  -
         * &quot;CANCELLED&quot;: The update is paused and no longer can be resumed,
         * undefined how many instances are running in which template.
         */
        status?: string;
        /**
         * [Output Only] An optional textual description of the current status of
         * the update.
         */
        statusMessage?: string;
        /**
         * [Output Only] User who requested the update, for example:
         * user@example.com.
         */
        user?: string;
    }
    /**
     * Response returned by List method.
     */
    interface Schema$RollingUpdateList {
        /**
         * Collection of requested updates.
         */
        items?: Schema$RollingUpdate[];
        /**
         * [Output Only] Type of the resource.
         */
        kind?: string;
        /**
         * A token used to continue a truncated list request.
         */
        nextPageToken?: string;
        /**
         * [Output Only] The fully qualified URL for the resource.
         */
        selfLink?: string;
    }
    class Resource$Rollingupdates {
        root: Replicapoolupdater;
        constructor(root: Replicapoolupdater);
        getRoot(): Replicapoolupdater;
        /**
         * replicapoolupdater.rollingUpdates.cancel
         * @desc Cancels an update. The update must be PAUSED before it can be
         * cancelled. This has no effect if the update is already CANCELLED.
         * @alias replicapoolupdater.rollingUpdates.cancel
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel(params?: Params$Resource$Rollingupdates$Cancel, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        cancel(params: Params$Resource$Rollingupdates$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        cancel(params: Params$Resource$Rollingupdates$Cancel, callback: BodyResponseCallback<Schema$Operation>): void;
        cancel(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * replicapoolupdater.rollingUpdates.get
         * @desc Returns information about an update.
         * @alias replicapoolupdater.rollingUpdates.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Rollingupdates$Get, options?: MethodOptions): AxiosPromise<Schema$RollingUpdate>;
        get(params: Params$Resource$Rollingupdates$Get, options: MethodOptions | BodyResponseCallback<Schema$RollingUpdate>, callback: BodyResponseCallback<Schema$RollingUpdate>): void;
        get(params: Params$Resource$Rollingupdates$Get, callback: BodyResponseCallback<Schema$RollingUpdate>): void;
        get(callback: BodyResponseCallback<Schema$RollingUpdate>): void;
        /**
         * replicapoolupdater.rollingUpdates.insert
         * @desc Inserts and starts a new update.
         * @alias replicapoolupdater.rollingUpdates.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {().RollingUpdate} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Rollingupdates$Insert, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        insert(params: Params$Resource$Rollingupdates$Insert, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(params: Params$Resource$Rollingupdates$Insert, callback: BodyResponseCallback<Schema$Operation>): void;
        insert(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * replicapoolupdater.rollingUpdates.list
         * @desc Lists recent updates for a given managed instance group, in reverse
         * chronological order and paginated format.
         * @alias replicapoolupdater.rollingUpdates.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Optional. Filter expression for filtering listed resources.
         * @param {integer=} params.maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @param {string=} params.pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Rollingupdates$List, options?: MethodOptions): AxiosPromise<Schema$RollingUpdateList>;
        list(params: Params$Resource$Rollingupdates$List, options: MethodOptions | BodyResponseCallback<Schema$RollingUpdateList>, callback: BodyResponseCallback<Schema$RollingUpdateList>): void;
        list(params: Params$Resource$Rollingupdates$List, callback: BodyResponseCallback<Schema$RollingUpdateList>): void;
        list(callback: BodyResponseCallback<Schema$RollingUpdateList>): void;
        /**
         * replicapoolupdater.rollingUpdates.listInstanceUpdates
         * @desc Lists the current status for each instance within a given update.
         * @alias replicapoolupdater.rollingUpdates.listInstanceUpdates
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Optional. Filter expression for filtering listed resources.
         * @param {integer=} params.maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @param {string=} params.pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listInstanceUpdates(params?: Params$Resource$Rollingupdates$Listinstanceupdates, options?: MethodOptions): AxiosPromise<Schema$InstanceUpdateList>;
        listInstanceUpdates(params: Params$Resource$Rollingupdates$Listinstanceupdates, options: MethodOptions | BodyResponseCallback<Schema$InstanceUpdateList>, callback: BodyResponseCallback<Schema$InstanceUpdateList>): void;
        listInstanceUpdates(params: Params$Resource$Rollingupdates$Listinstanceupdates, callback: BodyResponseCallback<Schema$InstanceUpdateList>): void;
        listInstanceUpdates(callback: BodyResponseCallback<Schema$InstanceUpdateList>): void;
        /**
         * replicapoolupdater.rollingUpdates.pause
         * @desc Pauses the update in state from ROLLING_FORWARD or ROLLING_BACK.
         * Has no effect if invoked when the state of the update is PAUSED.
         * @alias replicapoolupdater.rollingUpdates.pause
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        pause(params?: Params$Resource$Rollingupdates$Pause, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        pause(params: Params$Resource$Rollingupdates$Pause, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        pause(params: Params$Resource$Rollingupdates$Pause, callback: BodyResponseCallback<Schema$Operation>): void;
        pause(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * replicapoolupdater.rollingUpdates.resume
         * @desc Continues an update in PAUSED state. Has no effect if invoked when
         * the state of the update is ROLLED_OUT.
         * @alias replicapoolupdater.rollingUpdates.resume
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        resume(params?: Params$Resource$Rollingupdates$Resume, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        resume(params: Params$Resource$Rollingupdates$Resume, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        resume(params: Params$Resource$Rollingupdates$Resume, callback: BodyResponseCallback<Schema$Operation>): void;
        resume(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * replicapoolupdater.rollingUpdates.rollback
         * @desc Rolls back the update in state from ROLLING_FORWARD or PAUSED. Has
         * no effect if invoked when the state of the update is ROLLED_BACK.
         * @alias replicapoolupdater.rollingUpdates.rollback
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.project The Google Developers Console project name.
         * @param {string} params.rollingUpdate The name of the update.
         * @param {string} params.zone The name of the zone in which the update's target resides.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rollback(params?: Params$Resource$Rollingupdates$Rollback, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        rollback(params: Params$Resource$Rollingupdates$Rollback, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        rollback(params: Params$Resource$Rollingupdates$Rollback, callback: BodyResponseCallback<Schema$Operation>): void;
        rollback(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    interface Params$Resource$Rollingupdates$Cancel extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Google Developers Console project name.
         */
        project?: string;
        /**
         * The name of the update.
         */
        rollingUpdate?: string;
        /**
         * The name of the zone in which the update's target resides.
         */
        zone?: string;
    }
    interface Params$Resource$Rollingupdates$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Google Developers Console project name.
         */
        project?: string;
        /**
         * The name of the update.
         */
        rollingUpdate?: string;
        /**
         * The name of the zone in which the update's target resides.
         */
        zone?: string;
    }
    interface Params$Resource$Rollingupdates$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Google Developers Console project name.
         */
        project?: string;
        /**
         * The name of the zone in which the update's target resides.
         */
        zone?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RollingUpdate;
    }
    interface Params$Resource$Rollingupdates$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional. Filter expression for filtering listed resources.
         */
        filter?: string;
        /**
         * Optional. Maximum count of results to be returned. Maximum value is 500
         * and default value is 500.
         */
        maxResults?: number;
        /**
         * Optional. Tag returned by a previous list request truncated by
         * maxResults. Used to continue a previous list request.
         */
        pageToken?: string;
        /**
         * The Google Developers Console project name.
         */
        project?: string;
        /**
         * The name of the zone in which the update's target resides.
         */
        zone?: string;
    }
    interface Params$Resource$Rollingupdates$Listinstanceupdates extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional. Filter expression for filtering listed resources.
         */
        filter?: string;
        /**
         * Optional. Maximum count of results to be returned. Maximum value is 500
         * and default value is 500.
         */
        maxResults?: number;
        /**
         * Optional. Tag returned by a previous list request truncated by
         * maxResults. Used to continue a previous list request.
         */
        pageToken?: string;
        /**
         * The Google Developers Console project name.
         */
        project?: string;
        /**
         * The name of the update.
         */
        rollingUpdate?: string;
        /**
         * The name of the zone in which the update's target resides.
         */
        zone?: string;
    }
    interface Params$Resource$Rollingupdates$Pause extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Google Developers Console project name.
         */
        project?: string;
        /**
         * The name of the update.
         */
        rollingUpdate?: string;
        /**
         * The name of the zone in which the update's target resides.
         */
        zone?: string;
    }
    interface Params$Resource$Rollingupdates$Resume extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Google Developers Console project name.
         */
        project?: string;
        /**
         * The name of the update.
         */
        rollingUpdate?: string;
        /**
         * The name of the zone in which the update's target resides.
         */
        zone?: string;
    }
    interface Params$Resource$Rollingupdates$Rollback extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Google Developers Console project name.
         */
        project?: string;
        /**
         * The name of the update.
         */
        rollingUpdate?: string;
        /**
         * The name of the zone in which the update's target resides.
         */
        zone?: string;
    }
    class Resource$Zoneoperations {
        root: Replicapoolupdater;
        constructor(root: Replicapoolupdater);
        getRoot(): Replicapoolupdater;
        /**
         * replicapoolupdater.zoneOperations.get
         * @desc Retrieves the specified zone-specific operation resource.
         * @alias replicapoolupdater.zoneOperations.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.operation Name of the operation resource to return.
         * @param {string} params.project Name of the project scoping this request.
         * @param {string} params.zone Name of the zone scoping this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Zoneoperations$Get, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Zoneoperations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Zoneoperations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * replicapoolupdater.zoneOperations.list
         * @desc Retrieves the list of Operation resources contained within the
         * specified zone.
         * @alias replicapoolupdater.zoneOperations.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.filter Optional. Filter expression for filtering listed resources.
         * @param {integer=} params.maxResults Optional. Maximum count of results to be returned. Maximum value is 500 and default value is 500.
         * @param {string=} params.pageToken Optional. Tag returned by a previous list request truncated by maxResults. Used to continue a previous list request.
         * @param {string} params.project Name of the project scoping this request.
         * @param {string} params.zone Name of the zone scoping this request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Zoneoperations$List, options?: MethodOptions): AxiosPromise<Schema$OperationList>;
        list(params: Params$Resource$Zoneoperations$List, options: MethodOptions | BodyResponseCallback<Schema$OperationList>, callback: BodyResponseCallback<Schema$OperationList>): void;
        list(params: Params$Resource$Zoneoperations$List, callback: BodyResponseCallback<Schema$OperationList>): void;
        list(callback: BodyResponseCallback<Schema$OperationList>): void;
    }
    interface Params$Resource$Zoneoperations$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Name of the operation resource to return.
         */
        operation?: string;
        /**
         * Name of the project scoping this request.
         */
        project?: string;
        /**
         * Name of the zone scoping this request.
         */
        zone?: string;
    }
    interface Params$Resource$Zoneoperations$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional. Filter expression for filtering listed resources.
         */
        filter?: string;
        /**
         * Optional. Maximum count of results to be returned. Maximum value is 500
         * and default value is 500.
         */
        maxResults?: number;
        /**
         * Optional. Tag returned by a previous list request truncated by
         * maxResults. Used to continue a previous list request.
         */
        pageToken?: string;
        /**
         * Name of the project scoping this request.
         */
        project?: string;
        /**
         * Name of the zone scoping this request.
         */
        zone?: string;
    }
}
