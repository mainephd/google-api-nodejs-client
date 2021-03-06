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
export declare namespace script_v1 {
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
     * Apps Script API
     *
     * Manages and executes Google Apps Script projects.
     *
     * @example
     * const {google} = require('googleapis');
     * const script = google.script('v1');
     *
     * @namespace script
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Script
     */
    class Script {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        processes: Resource$Processes;
        projects: Resource$Projects;
        scripts: Resource$Scripts;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * The Content resource.
     */
    interface Schema$Content {
        /**
         * The list of script project files. One of the files is a script manifest;
         * it must be named &quot;appsscript&quot;, must have type of JSON, and
         * include the manifest configurations for the project.
         */
        files?: Schema$File[];
        /**
         * The script project&#39;s Drive ID.
         */
        scriptId?: string;
    }
    /**
     * Request to create a script project.
     */
    interface Schema$CreateProjectRequest {
        /**
         * The Drive ID of a parent file that the created script project is bound
         * to. This is usually the ID of a Google Doc, Google Sheet, Google Form, or
         * Google Slides file. If not set, a standalone script project is created.
         */
        parentId?: string;
        /**
         * The title for the project.
         */
        title?: string;
    }
    /**
     * Representation of a single script deployment.
     */
    interface Schema$Deployment {
        /**
         * The deployment configuration.
         */
        deploymentConfig?: Schema$DeploymentConfig;
        /**
         * The deployment ID for this deployment.
         */
        deploymentId?: string;
        /**
         * The deployment&#39;s entry points.
         */
        entryPoints?: Schema$EntryPoint[];
        /**
         * Last modified date time stamp.
         */
        updateTime?: string;
    }
    /**
     * Metadata the defines how a deployment is configured.
     */
    interface Schema$DeploymentConfig {
        /**
         * The description for this deployment.
         */
        description?: string;
        /**
         * The manifest file name for this deployment.
         */
        manifestFileName?: string;
        /**
         * The script project&#39;s Drive ID.
         */
        scriptId?: string;
        /**
         * The version number on which this deployment is based.
         */
        versionNumber?: number;
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
     * A configuration that defines how a deployment is accessed externally.
     */
    interface Schema$EntryPoint {
        /**
         * Add-on properties.
         */
        addOn?: Schema$GoogleAppsScriptTypeAddOnEntryPoint;
        /**
         * The type of the entry point.
         */
        entryPointType?: string;
        /**
         * An entry point specification for Apps Script API execution calls.
         */
        executionApi?: Schema$GoogleAppsScriptTypeExecutionApiEntryPoint;
        /**
         * An entry point specification for web apps.
         */
        webApp?: Schema$GoogleAppsScriptTypeWebAppEntryPoint;
    }
    /**
     * An object that provides information about the nature of an error resulting
     * from an attempted execution of a script function using the Apps Script API.
     * If a run call succeeds but the script function (or Apps Script itself)
     * throws an exception, the response body&#39;s error field contains a Status
     * object. The `Status` object&#39;s `details` field contains an array with a
     * single one of these `ExecutionError` objects.
     */
    interface Schema$ExecutionError {
        /**
         * The error message thrown by Apps Script, usually localized into the
         * user&#39;s language.
         */
        errorMessage?: string;
        /**
         * The error type, for example `TypeError` or `ReferenceError`. If the error
         * type is unavailable, this field is not included.
         */
        errorType?: string;
        /**
         * An array of objects that provide a stack trace through the script to show
         * where the execution failed, with the deepest call first.
         */
        scriptStackTraceElements?: Schema$ScriptStackTraceElement[];
    }
    /**
     * A request to run the function in a script. The script is identified by the
     * specified `script_id`. Executing a function on a script returns results
     * based on the implementation of the script.
     */
    interface Schema$ExecutionRequest {
        /**
         * If `true` and the user is an owner of the script, the script runs at the
         * most recently saved version rather than the version deployed for use with
         * the Apps Script API. Optional; default is `false`.
         */
        devMode?: boolean;
        /**
         * The name of the function to execute in the given script. The name does
         * not include parentheses or parameters.
         */
        function?: string;
        /**
         * The parameters to be passed to the function being executed. The object
         * type for each parameter should match the expected type in Apps Script.
         * Parameters cannot be Apps Script-specific object types (such as a
         * `Document` or a `Calendar`); they can only be primitive types such as
         * `string`, `number`, `array`, `object`, or `boolean`. Optional.
         */
        parameters?: any[];
        /**
         * For Android add-ons only. An ID that represents the user&#39;s current
         * session in the Android app for Google Docs or Sheets, included as extra
         * data in the
         * [Intent](https://developer.android.com/guide/components/intents-filters.html)
         * that launches the add-on. When an Android add-on is run with a session
         * state, it gains the privileges of a
         * [bound](https://developers.google.com/apps-script/guides/bound)
         * script&amp;mdash;that is, it can access information like the user&#39;s
         * current cursor position (in Docs) or selected cell (in Sheets). To
         * retrieve the state, call
         * `Intent.getStringExtra(&quot;com.google.android.apps.docs.addons.SessionState&quot;)`.
         * Optional.
         */
        sessionState?: string;
    }
    /**
     * An object that provides the return value of a function executed using the
     * Apps Script API. If the script function returns successfully, the response
     * body&#39;s response field contains this `ExecutionResponse` object.
     */
    interface Schema$ExecutionResponse {
        /**
         * The return value of the script function. The type matches the object type
         * returned in Apps Script. Functions called using the Apps Script API
         * cannot return Apps Script-specific objects (such as a `Document` or a
         * `Calendar`); they can only return primitive types such as a `string`,
         * `number`, `array`, `object`, or `boolean`.
         */
        result?: any;
    }
    /**
     * An individual file within a script project. A file is a third-party source
     * code created by one or more developers. It can be a server-side JS code,
     * HTML, or a configuration file. Each script project can contain multiple
     * files.
     */
    interface Schema$File {
        /**
         * Creation date timestamp. This read-only field is only visible to users
         * who have WRITER permission for the script project.
         */
        createTime?: string;
        /**
         * The defined set of functions in the script file, if any.
         */
        functionSet?: Schema$GoogleAppsScriptTypeFunctionSet;
        /**
         * The user who modified the file most recently. This read-only field is
         * only visible to users who have WRITER permission for the script project.
         */
        lastModifyUser?: Schema$GoogleAppsScriptTypeUser;
        /**
         * The name of the file. The file extension is not part of the file name,
         * which can be identified from the type field.
         */
        name?: string;
        /**
         * The file content.
         */
        source?: string;
        /**
         * The type of the file.
         */
        type?: string;
        /**
         * Last modified date timestamp. This read-only field is only visible to
         * users who have WRITER permission for the script project.
         */
        updateTime?: string;
    }
    /**
     * An add-on entry point.
     */
    interface Schema$GoogleAppsScriptTypeAddOnEntryPoint {
        /**
         * The add-on&#39;s required list of supported container types.
         */
        addOnType?: string;
        /**
         * The add-on&#39;s optional description.
         */
        description?: string;
        /**
         * The add-on&#39;s optional help URL.
         */
        helpUrl?: string;
        /**
         * The add-on&#39;s required post install tip URL.
         */
        postInstallTipUrl?: string;
        /**
         * The add-on&#39;s optional report issue URL.
         */
        reportIssueUrl?: string;
        /**
         * The add-on&#39;s required title.
         */
        title?: string;
    }
    /**
     * API executable entry point configuration.
     */
    interface Schema$GoogleAppsScriptTypeExecutionApiConfig {
        /**
         * Who has permission to run the API executable.
         */
        access?: string;
    }
    /**
     * An API executable entry point.
     */
    interface Schema$GoogleAppsScriptTypeExecutionApiEntryPoint {
        /**
         * The entry point&#39;s configuration.
         */
        entryPointConfig?: Schema$GoogleAppsScriptTypeExecutionApiConfig;
    }
    /**
     * Represents a function in a script project.
     */
    interface Schema$GoogleAppsScriptTypeFunction {
        /**
         * The function name in the script project.
         */
        name?: string;
    }
    /**
     * A set of functions. No duplicates are permitted.
     */
    interface Schema$GoogleAppsScriptTypeFunctionSet {
        /**
         * A list of functions composing the set.
         */
        values?: Schema$GoogleAppsScriptTypeFunction[];
    }
    /**
     * Representation of a single script process execution that was started from
     * the script editor, a trigger, an application, or using the Apps Script API.
     * This is distinct from the `Operation` resource, which only represents
     * executions started via the Apps Script API.
     */
    interface Schema$GoogleAppsScriptTypeProcess {
        /**
         * Duration the execution spent executing.
         */
        duration?: string;
        /**
         * User-facing name for the user executing the script.
         */
        executingUser?: string;
        /**
         * Name of the function the started the execution.
         */
        functionName?: string;
        /**
         * The executions status.
         */
        processStatus?: string;
        /**
         * The executions type.
         */
        processType?: string;
        /**
         * Name of the script being executed.
         */
        projectName?: string;
        /**
         * Time the execution started.
         */
        startTime?: string;
        /**
         * The executing users access level to the script.
         */
        userAccessLevel?: string;
    }
    /**
     * A simple user profile resource.
     */
    interface Schema$GoogleAppsScriptTypeUser {
        /**
         * The user&#39;s domain.
         */
        domain?: string;
        /**
         * The user&#39;s identifying email address.
         */
        email?: string;
        /**
         * The user&#39;s display name.
         */
        name?: string;
        /**
         * The user&#39;s photo.
         */
        photoUrl?: string;
    }
    /**
     * Web app entry point configuration.
     */
    interface Schema$GoogleAppsScriptTypeWebAppConfig {
        /**
         * Who has permission to run the web app.
         */
        access?: string;
        /**
         * Who to execute the web app as.
         */
        executeAs?: string;
    }
    /**
     * A web application entry point.
     */
    interface Schema$GoogleAppsScriptTypeWebAppEntryPoint {
        /**
         * The entry point&#39;s configuration.
         */
        entryPointConfig?: Schema$GoogleAppsScriptTypeWebAppConfig;
        /**
         * The URL for the web application.
         */
        url?: string;
    }
    /**
     * Response with the list of deployments for the specified Apps Script
     * project.
     */
    interface Schema$ListDeploymentsResponse {
        /**
         * The list of deployments.
         */
        deployments?: Schema$Deployment[];
        /**
         * The token that can be used in the next call to get the next page of
         * results.
         */
        nextPageToken?: string;
    }
    /**
     * Response with the list of Process resources.
     */
    interface Schema$ListScriptProcessesResponse {
        /**
         * Token for the next page of results. If empty, there are no more pages
         * remaining.
         */
        nextPageToken?: string;
        /**
         * List of processes matching request parameters.
         */
        processes?: Schema$GoogleAppsScriptTypeProcess[];
    }
    /**
     * Response with the list of Process resources.
     */
    interface Schema$ListUserProcessesResponse {
        /**
         * Token for the next page of results. If empty, there are no more pages
         * remaining.
         */
        nextPageToken?: string;
        /**
         * List of processes matching request parameters.
         */
        processes?: Schema$GoogleAppsScriptTypeProcess[];
    }
    /**
     * Response with the list of the versions for the specified script project.
     */
    interface Schema$ListVersionsResponse {
        /**
         * The token use to fetch the next page of records. if not exist in the
         * response, that means no more versions to list.
         */
        nextPageToken?: string;
        /**
         * The list of versions.
         */
        versions?: Schema$Version[];
    }
    /**
     * Resource containing usage stats for a given script, based on the supplied
     * filter and mask present in the request.
     */
    interface Schema$Metrics {
        /**
         * Number of active users.
         */
        activeUsers?: Schema$MetricsValue[];
        /**
         * Number of failed executions.
         */
        failedExecutions?: Schema$MetricsValue[];
        /**
         * Number of total executions.
         */
        totalExecutions?: Schema$MetricsValue[];
    }
    /**
     * Metrics value that holds number of executions counted.
     */
    interface Schema$MetricsValue {
        /**
         * Required field indicating the end time of the interval.
         */
        endTime?: string;
        /**
         * Required field indicating the start time of the interval.
         */
        startTime?: string;
        /**
         * Indicates the number of executions counted.
         */
        value?: string;
    }
    /**
     * A representation of an execution of an Apps Script function started with
     * run. The execution response does not arrive until the function finishes
     * executing. The maximum execution runtime is listed in the [Apps Script
     * quotas guide](/apps-script/guides/services/quotas#current_limitations).
     * &lt;p&gt;After execution has started, it can have one of four
     * outcomes:&lt;/p&gt; &lt;ul&gt; &lt;li&gt; If the script function returns
     * successfully, the   response field contains an   ExecutionResponse object
     * with the function&#39;s return value in the object&#39;s `result`
     * field.&lt;/li&gt; &lt;li&gt; If the script function (or Apps Script itself)
     * throws an exception, the   error field contains a   Status object. The
     * `Status` object&#39;s `details`   field contains an array with a single
     * ExecutionError object that   provides information about the nature of the
     * error.&lt;/li&gt; &lt;li&gt; If the execution has not yet completed,   the
     * done field is `false` and   the neither the `response` nor `error` fields
     * are present.&lt;/li&gt; &lt;li&gt; If the `run` call itself fails (for
     * example, because of a   malformed request or an authorization error), the
     * method returns an HTTP   response code in the 4XX range with a different
     * format for the response   body. Client libraries automatically convert a
     * 4XX response into an   exception class.&lt;/li&gt; &lt;/ul&gt;
     */
    interface Schema$Operation {
        /**
         * This field indicates whether the script execution has completed. A
         * completed execution has a populated `response` field containing the
         * ExecutionResponse from function that was executed.
         */
        done?: boolean;
        /**
         * If a `run` call succeeds but the script function (or Apps Script itself)
         * throws an exception, this field contains a Status object. The `Status`
         * object&#39;s `details` field contains an array with a single
         * ExecutionError object that provides information about the nature of the
         * error.
         */
        error?: Schema$Status;
        /**
         * If the script function returns successfully, this field contains an
         * ExecutionResponse object with the function&#39;s return value.
         */
        response?: any;
    }
    /**
     * The script project resource.
     */
    interface Schema$Project {
        /**
         * When the script was created.
         */
        createTime?: string;
        /**
         * User who originally created the script.
         */
        creator?: Schema$GoogleAppsScriptTypeUser;
        /**
         * User who last modified the script.
         */
        lastModifyUser?: Schema$GoogleAppsScriptTypeUser;
        /**
         * The parent&#39;s Drive ID that the script will be attached to. This is
         * usually the ID of a Google Document or Google Sheet. This filed is
         * optional, and if not set, a stand-alone script will be created.
         */
        parentId?: string;
        /**
         * The script project&#39;s Drive ID.
         */
        scriptId?: string;
        /**
         * The title for the project.
         */
        title?: string;
        /**
         * When the script was last updated.
         */
        updateTime?: string;
    }
    /**
     * A stack trace through the script that shows where the execution failed.
     */
    interface Schema$ScriptStackTraceElement {
        /**
         * The name of the function that failed.
         */
        function?: string;
        /**
         * The line number where the script failed.
         */
        lineNumber?: number;
    }
    /**
     * If a `run` call succeeds but the script function (or Apps Script itself)
     * throws an exception, the response body&#39;s error field contains this
     * `Status` object.
     */
    interface Schema$Status {
        /**
         * The status code. For this API, this value either: &lt;ul&gt; &lt;li&gt;
         * 10, indicating a `SCRIPT_TIMEOUT` error,&lt;/li&gt; &lt;li&gt; 3,
         * indicating an `INVALID_ARGUMENT` error, or&lt;/li&gt; &lt;li&gt; 1,
         * indicating a `CANCELLED` execution.&lt;/li&gt; &lt;/ul&gt;
         */
        code?: number;
        /**
         * An array that contains a single ExecutionError object that provides
         * information about the nature of the error.
         */
        details?: any[];
        /**
         * A developer-facing error message, which is in English. Any user-facing
         * error message is localized and sent in the details field, or localized by
         * the client.
         */
        message?: string;
    }
    /**
     * Request with deployment information to update an existing deployment.
     */
    interface Schema$UpdateDeploymentRequest {
        /**
         * The deployment configuration.
         */
        deploymentConfig?: Schema$DeploymentConfig;
    }
    /**
     * A resource representing a script project version. A version is a
     * &quot;snapshot&quot; of a script project and is similar to a read-only
     * branched release. When creating deployments, the version to use must be
     * specified.
     */
    interface Schema$Version {
        /**
         * When the version was created.
         */
        createTime?: string;
        /**
         * The description for this version.
         */
        description?: string;
        /**
         * The script project&#39;s Drive ID.
         */
        scriptId?: string;
        /**
         * The incremental ID that is created by Apps Script when a version is
         * created. This is system assigned number and is immutable once created.
         */
        versionNumber?: number;
    }
    class Resource$Processes {
        root: Script;
        constructor(root: Script);
        getRoot(): Script;
        /**
         * script.processes.list
         * @desc List information about processes made by or on behalf of a user,
         * such as process type and current status.
         * @alias script.processes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of returned processes per page of results. Defaults to 50.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
         * @param {string=} params.userProcessFilter.deploymentId Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
         * @param {string=} params.userProcessFilter.endTime Optional field used to limit returned processes to those that completed on or before the given timestamp.
         * @param {string=} params.userProcessFilter.functionName Optional field used to limit returned processes to those originating from a script function with the given function name.
         * @param {string=} params.userProcessFilter.projectName Optional field used to limit returned processes to those originating from projects with project names containing a specific string.
         * @param {string=} params.userProcessFilter.scriptId Optional field used to limit returned processes to those originating from projects with a specific script ID.
         * @param {string=} params.userProcessFilter.startTime Optional field used to limit returned processes to those that were started on or after the given timestamp.
         * @param {string=} params.userProcessFilter.statuses Optional field used to limit returned processes to those having one of the specified process statuses.
         * @param {string=} params.userProcessFilter.types Optional field used to limit returned processes to those having one of the specified process types.
         * @param {string=} params.userProcessFilter.userAccessLevels Optional field used to limit returned processes to those having one of the specified user access levels.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Processes$List, options?: MethodOptions): AxiosPromise<Schema$ListUserProcessesResponse>;
        list(params: Params$Resource$Processes$List, options: MethodOptions | BodyResponseCallback<Schema$ListUserProcessesResponse>, callback: BodyResponseCallback<Schema$ListUserProcessesResponse>): void;
        list(params: Params$Resource$Processes$List, callback: BodyResponseCallback<Schema$ListUserProcessesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListUserProcessesResponse>): void;
        /**
         * script.processes.listScriptProcesses
         * @desc List information about a script's executed processes, such as
         * process type and current status.
         * @alias script.processes.listScriptProcesses
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of returned processes per page of results. Defaults to 50.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
         * @param {string=} params.scriptId The script ID of the project whose processes are listed.
         * @param {string=} params.scriptProcessFilter.deploymentId Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
         * @param {string=} params.scriptProcessFilter.endTime Optional field used to limit returned processes to those that completed on or before the given timestamp.
         * @param {string=} params.scriptProcessFilter.functionName Optional field used to limit returned processes to those originating from a script function with the given function name.
         * @param {string=} params.scriptProcessFilter.startTime Optional field used to limit returned processes to those that were started on or after the given timestamp.
         * @param {string=} params.scriptProcessFilter.statuses Optional field used to limit returned processes to those having one of the specified process statuses.
         * @param {string=} params.scriptProcessFilter.types Optional field used to limit returned processes to those having one of the specified process types.
         * @param {string=} params.scriptProcessFilter.userAccessLevels Optional field used to limit returned processes to those having one of the specified user access levels.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listScriptProcesses(params?: Params$Resource$Processes$Listscriptprocesses, options?: MethodOptions): AxiosPromise<Schema$ListScriptProcessesResponse>;
        listScriptProcesses(params: Params$Resource$Processes$Listscriptprocesses, options: MethodOptions | BodyResponseCallback<Schema$ListScriptProcessesResponse>, callback: BodyResponseCallback<Schema$ListScriptProcessesResponse>): void;
        listScriptProcesses(params: Params$Resource$Processes$Listscriptprocesses, callback: BodyResponseCallback<Schema$ListScriptProcessesResponse>): void;
        listScriptProcesses(callback: BodyResponseCallback<Schema$ListScriptProcessesResponse>): void;
    }
    interface Params$Resource$Processes$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of returned processes per page of results. Defaults
         * to 50.
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page. This
         * should be set to the value of `nextPageToken` from a previous response.
         */
        pageToken?: string;
        /**
         * Optional field used to limit returned processes to those originating from
         * projects with a specific deployment ID.
         */
        'userProcessFilter.deploymentId'?: string;
        /**
         * Optional field used to limit returned processes to those that completed
         * on or before the given timestamp.
         */
        'userProcessFilter.endTime'?: string;
        /**
         * Optional field used to limit returned processes to those originating from
         * a script function with the given function name.
         */
        'userProcessFilter.functionName'?: string;
        /**
         * Optional field used to limit returned processes to those originating from
         * projects with project names containing a specific string.
         */
        'userProcessFilter.projectName'?: string;
        /**
         * Optional field used to limit returned processes to those originating from
         * projects with a specific script ID.
         */
        'userProcessFilter.scriptId'?: string;
        /**
         * Optional field used to limit returned processes to those that were
         * started on or after the given timestamp.
         */
        'userProcessFilter.startTime'?: string;
        /**
         * Optional field used to limit returned processes to those having one of
         * the specified process statuses.
         */
        'userProcessFilter.statuses'?: string;
        /**
         * Optional field used to limit returned processes to those having one of
         * the specified process types.
         */
        'userProcessFilter.types'?: string;
        /**
         * Optional field used to limit returned processes to those having one of
         * the specified user access levels.
         */
        'userProcessFilter.userAccessLevels'?: string;
    }
    interface Params$Resource$Processes$Listscriptprocesses extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of returned processes per page of results. Defaults
         * to 50.
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page. This
         * should be set to the value of `nextPageToken` from a previous response.
         */
        pageToken?: string;
        /**
         * The script ID of the project whose processes are listed.
         */
        scriptId?: string;
        /**
         * Optional field used to limit returned processes to those originating from
         * projects with a specific deployment ID.
         */
        'scriptProcessFilter.deploymentId'?: string;
        /**
         * Optional field used to limit returned processes to those that completed
         * on or before the given timestamp.
         */
        'scriptProcessFilter.endTime'?: string;
        /**
         * Optional field used to limit returned processes to those originating from
         * a script function with the given function name.
         */
        'scriptProcessFilter.functionName'?: string;
        /**
         * Optional field used to limit returned processes to those that were
         * started on or after the given timestamp.
         */
        'scriptProcessFilter.startTime'?: string;
        /**
         * Optional field used to limit returned processes to those having one of
         * the specified process statuses.
         */
        'scriptProcessFilter.statuses'?: string;
        /**
         * Optional field used to limit returned processes to those having one of
         * the specified process types.
         */
        'scriptProcessFilter.types'?: string;
        /**
         * Optional field used to limit returned processes to those having one of
         * the specified user access levels.
         */
        'scriptProcessFilter.userAccessLevels'?: string;
    }
    class Resource$Projects {
        root: Script;
        deployments: Resource$Projects$Deployments;
        versions: Resource$Projects$Versions;
        constructor(root: Script);
        getRoot(): Script;
        /**
         * script.projects.create
         * @desc Creates a new, empty script project with no script files and a base
         * manifest file.
         * @alias script.projects.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().CreateProjectRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Create, options?: MethodOptions): AxiosPromise<Schema$Project>;
        create(params: Params$Resource$Projects$Create, options: MethodOptions | BodyResponseCallback<Schema$Project>, callback: BodyResponseCallback<Schema$Project>): void;
        create(params: Params$Resource$Projects$Create, callback: BodyResponseCallback<Schema$Project>): void;
        create(callback: BodyResponseCallback<Schema$Project>): void;
        /**
         * script.projects.get
         * @desc Gets a script project's metadata.
         * @alias script.projects.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Get, options?: MethodOptions): AxiosPromise<Schema$Project>;
        get(params: Params$Resource$Projects$Get, options: MethodOptions | BodyResponseCallback<Schema$Project>, callback: BodyResponseCallback<Schema$Project>): void;
        get(params: Params$Resource$Projects$Get, callback: BodyResponseCallback<Schema$Project>): void;
        get(callback: BodyResponseCallback<Schema$Project>): void;
        /**
         * script.projects.getContent
         * @desc Gets the content of the script project, including the code source
         * and metadata for each script file.
         * @alias script.projects.getContent
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {integer=} params.versionNumber The version number of the project to retrieve. If not provided, the project's HEAD version is returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getContent(params?: Params$Resource$Projects$Getcontent, options?: MethodOptions): AxiosPromise<Schema$Content>;
        getContent(params: Params$Resource$Projects$Getcontent, options: MethodOptions | BodyResponseCallback<Schema$Content>, callback: BodyResponseCallback<Schema$Content>): void;
        getContent(params: Params$Resource$Projects$Getcontent, callback: BodyResponseCallback<Schema$Content>): void;
        getContent(callback: BodyResponseCallback<Schema$Content>): void;
        /**
         * script.projects.getMetrics
         * @desc Get metrics data for scripts, such as number of executions and
         * active users.
         * @alias script.projects.getMetrics
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.metricsFilter.deploymentId Optional field indicating a specific deployment to retrieve metrics from.
         * @param {string=} params.metricsGranularity Required field indicating what granularity of metrics are returned.
         * @param {string} params.scriptId Required field indicating the script to get metrics for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getMetrics(params?: Params$Resource$Projects$Getmetrics, options?: MethodOptions): AxiosPromise<Schema$Metrics>;
        getMetrics(params: Params$Resource$Projects$Getmetrics, options: MethodOptions | BodyResponseCallback<Schema$Metrics>, callback: BodyResponseCallback<Schema$Metrics>): void;
        getMetrics(params: Params$Resource$Projects$Getmetrics, callback: BodyResponseCallback<Schema$Metrics>): void;
        getMetrics(callback: BodyResponseCallback<Schema$Metrics>): void;
        /**
         * script.projects.updateContent
         * @desc Updates the content of the specified script project. This content
         * is stored as the HEAD version, and is used when the script is executed as
         * a trigger, in the script editor, in add-on preview mode, or as a web app
         * or Apps Script API in development mode. This clears all the existing
         * files in the project.
         * @alias script.projects.updateContent
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {().Content} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateContent(params?: Params$Resource$Projects$Updatecontent, options?: MethodOptions): AxiosPromise<Schema$Content>;
        updateContent(params: Params$Resource$Projects$Updatecontent, options: MethodOptions | BodyResponseCallback<Schema$Content>, callback: BodyResponseCallback<Schema$Content>): void;
        updateContent(params: Params$Resource$Projects$Updatecontent, callback: BodyResponseCallback<Schema$Content>): void;
        updateContent(callback: BodyResponseCallback<Schema$Content>): void;
    }
    interface Params$Resource$Projects$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CreateProjectRequest;
    }
    interface Params$Resource$Projects$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
    }
    interface Params$Resource$Projects$Getcontent extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
        /**
         * The version number of the project to retrieve. If not provided, the
         * project's HEAD version is returned.
         */
        versionNumber?: number;
    }
    interface Params$Resource$Projects$Getmetrics extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional field indicating a specific deployment to retrieve metrics from.
         */
        'metricsFilter.deploymentId'?: string;
        /**
         * Required field indicating what granularity of metrics are returned.
         */
        metricsGranularity?: string;
        /**
         * Required field indicating the script to get metrics for.
         */
        scriptId?: string;
    }
    interface Params$Resource$Projects$Updatecontent extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Content;
    }
    class Resource$Projects$Deployments {
        root: Script;
        constructor(root: Script);
        getRoot(): Script;
        /**
         * script.projects.deployments.create
         * @desc Creates a deployment of an Apps Script project.
         * @alias script.projects.deployments.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {().DeploymentConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Deployments$Create, options?: MethodOptions): AxiosPromise<Schema$Deployment>;
        create(params: Params$Resource$Projects$Deployments$Create, options: MethodOptions | BodyResponseCallback<Schema$Deployment>, callback: BodyResponseCallback<Schema$Deployment>): void;
        create(params: Params$Resource$Projects$Deployments$Create, callback: BodyResponseCallback<Schema$Deployment>): void;
        create(callback: BodyResponseCallback<Schema$Deployment>): void;
        /**
         * script.projects.deployments.delete
         * @desc Deletes a deployment of an Apps Script project.
         * @alias script.projects.deployments.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.deploymentId The deployment ID to be undeployed.
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Projects$Deployments$Delete, options?: MethodOptions): AxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Deployments$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Deployments$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * script.projects.deployments.get
         * @desc Gets a deployment of an Apps Script project.
         * @alias script.projects.deployments.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.deploymentId The deployment ID.
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Deployments$Get, options?: MethodOptions): AxiosPromise<Schema$Deployment>;
        get(params: Params$Resource$Projects$Deployments$Get, options: MethodOptions | BodyResponseCallback<Schema$Deployment>, callback: BodyResponseCallback<Schema$Deployment>): void;
        get(params: Params$Resource$Projects$Deployments$Get, callback: BodyResponseCallback<Schema$Deployment>): void;
        get(callback: BodyResponseCallback<Schema$Deployment>): void;
        /**
         * script.projects.deployments.list
         * @desc Lists the deployments of an Apps Script project.
         * @alias script.projects.deployments.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of deployments on each returned page. Defaults to 50.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Deployments$List, options?: MethodOptions): AxiosPromise<Schema$ListDeploymentsResponse>;
        list(params: Params$Resource$Projects$Deployments$List, options: MethodOptions | BodyResponseCallback<Schema$ListDeploymentsResponse>, callback: BodyResponseCallback<Schema$ListDeploymentsResponse>): void;
        list(params: Params$Resource$Projects$Deployments$List, callback: BodyResponseCallback<Schema$ListDeploymentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListDeploymentsResponse>): void;
        /**
         * script.projects.deployments.update
         * @desc Updates a deployment of an Apps Script project.
         * @alias script.projects.deployments.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.deploymentId The deployment ID for this deployment.
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {().UpdateDeploymentRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Projects$Deployments$Update, options?: MethodOptions): AxiosPromise<Schema$Deployment>;
        update(params: Params$Resource$Projects$Deployments$Update, options: MethodOptions | BodyResponseCallback<Schema$Deployment>, callback: BodyResponseCallback<Schema$Deployment>): void;
        update(params: Params$Resource$Projects$Deployments$Update, callback: BodyResponseCallback<Schema$Deployment>): void;
        update(callback: BodyResponseCallback<Schema$Deployment>): void;
    }
    interface Params$Resource$Projects$Deployments$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DeploymentConfig;
    }
    interface Params$Resource$Projects$Deployments$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The deployment ID to be undeployed.
         */
        deploymentId?: string;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
    }
    interface Params$Resource$Projects$Deployments$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The deployment ID.
         */
        deploymentId?: string;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
    }
    interface Params$Resource$Projects$Deployments$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of deployments on each returned page. Defaults to 50.
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page. This
         * should be set to the value of `nextPageToken` from a previous response.
         */
        pageToken?: string;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
    }
    interface Params$Resource$Projects$Deployments$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The deployment ID for this deployment.
         */
        deploymentId?: string;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UpdateDeploymentRequest;
    }
    class Resource$Projects$Versions {
        root: Script;
        constructor(root: Script);
        getRoot(): Script;
        /**
         * script.projects.versions.create
         * @desc Creates a new immutable version using the current code, with a
         * unique version number.
         * @alias script.projects.versions.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {().Version} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Projects$Versions$Create, options?: MethodOptions): AxiosPromise<Schema$Version>;
        create(params: Params$Resource$Projects$Versions$Create, options: MethodOptions | BodyResponseCallback<Schema$Version>, callback: BodyResponseCallback<Schema$Version>): void;
        create(params: Params$Resource$Projects$Versions$Create, callback: BodyResponseCallback<Schema$Version>): void;
        create(callback: BodyResponseCallback<Schema$Version>): void;
        /**
         * script.projects.versions.get
         * @desc Gets a version of a script project.
         * @alias script.projects.versions.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {integer} params.versionNumber The version number.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Projects$Versions$Get, options?: MethodOptions): AxiosPromise<Schema$Version>;
        get(params: Params$Resource$Projects$Versions$Get, options: MethodOptions | BodyResponseCallback<Schema$Version>, callback: BodyResponseCallback<Schema$Version>): void;
        get(params: Params$Resource$Projects$Versions$Get, callback: BodyResponseCallback<Schema$Version>): void;
        get(callback: BodyResponseCallback<Schema$Version>): void;
        /**
         * script.projects.versions.list
         * @desc List the versions of a script project.
         * @alias script.projects.versions.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer=} params.pageSize The maximum number of versions on each returned page. Defaults to 50.
         * @param {string=} params.pageToken The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
         * @param {string} params.scriptId The script project's Drive ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Projects$Versions$List, options?: MethodOptions): AxiosPromise<Schema$ListVersionsResponse>;
        list(params: Params$Resource$Projects$Versions$List, options: MethodOptions | BodyResponseCallback<Schema$ListVersionsResponse>, callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
        list(params: Params$Resource$Projects$Versions$List, callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListVersionsResponse>): void;
    }
    interface Params$Resource$Projects$Versions$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Version;
    }
    interface Params$Resource$Projects$Versions$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
        /**
         * The version number.
         */
        versionNumber?: number;
    }
    interface Params$Resource$Projects$Versions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of versions on each returned page. Defaults to 50.
         */
        pageSize?: number;
        /**
         * The token for continuing a previous list request on the next page. This
         * should be set to the value of `nextPageToken` from a previous response.
         */
        pageToken?: string;
        /**
         * The script project's Drive ID.
         */
        scriptId?: string;
    }
    class Resource$Scripts {
        root: Script;
        constructor(root: Script);
        getRoot(): Script;
        /**
         * script.scripts.run
         * @desc Runs a function in an Apps Script project. The script project must
         * be deployed for use with the Apps Script API and the calling application
         * must share the same Cloud Platform project.  This method requires
         * authorization with an OAuth 2.0 token that includes at least one of the
         * scopes listed in the [Authorization](#authorization) section; script
         * projects that do not require authorization cannot be executed through
         * this API. To find the correct scopes to include in the authentication
         * token, open the project in the script editor, then select **File >
         * Project properties** and click the **Scopes** tab.  The error `403,
         * PERMISSION_DENIED: The caller does not have permission` indicates that
         * the Cloud Platform project used to authorize the request is not the same
         * as the one used by the script.
         * @alias script.scripts.run
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.scriptId The script ID of the script to be executed. To find the script ID, open the project in the script editor and select **File > Project properties**.
         * @param {().ExecutionRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        run(params?: Params$Resource$Scripts$Run, options?: MethodOptions): AxiosPromise<Schema$Operation>;
        run(params: Params$Resource$Scripts$Run, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        run(params: Params$Resource$Scripts$Run, callback: BodyResponseCallback<Schema$Operation>): void;
        run(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    interface Params$Resource$Scripts$Run extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The script ID of the script to be executed. To find the script ID, open
         * the project in the script editor and select **File > Project
         * properties**.
         */
        scriptId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ExecutionRequest;
    }
}
