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
export declare namespace adsense_v1_4 {
    interface Options extends GlobalOptions {
        version: 'v1_4';
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
     * AdSense Management API
     *
     * Accesses AdSense publishers&#39; inventory and generates performance
     * reports.
     *
     * @example
     * const {google} = require('googleapis');
     * const adsense = google.adsense('v1.4');
     *
     * @namespace adsense
     * @type {Function}
     * @version v1.4
     * @variation v1.4
     * @param {object=} options Options for Adsense
     */
    class Adsense {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        accounts: Resource$Accounts;
        adclients: Resource$Adclients;
        adunits: Resource$Adunits;
        alerts: Resource$Alerts;
        customchannels: Resource$Customchannels;
        metadata: Resource$Metadata;
        payments: Resource$Payments;
        reports: Resource$Reports;
        savedadstyles: Resource$Savedadstyles;
        urlchannels: Resource$Urlchannels;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    interface Schema$Account {
        creation_time?: string;
        /**
         * Unique identifier of this account.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#account.
         */
        kind?: string;
        /**
         * Name of this account.
         */
        name?: string;
        /**
         * Whether this account is premium.
         */
        premium?: boolean;
        /**
         * Sub accounts of the this account.
         */
        subAccounts?: Schema$Account[];
        /**
         * AdSense timezone of this account.
         */
        timezone?: string;
    }
    interface Schema$Accounts {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The accounts returned in this list response.
         */
        items?: Schema$Account[];
        /**
         * Kind of list this is, in this case adsense#accounts.
         */
        kind?: string;
        /**
         * Continuation token used to page through accounts. To retrieve the next
         * page of results, set the next request&#39;s &quot;pageToken&quot; value
         * to this.
         */
        nextPageToken?: string;
    }
    interface Schema$AdClient {
        /**
         * Whether this ad client is opted in to ARC.
         */
        arcOptIn?: boolean;
        /**
         * Unique identifier of this ad client.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#adClient.
         */
        kind?: string;
        /**
         * This ad client&#39;s product code, which corresponds to the PRODUCT_CODE
         * report dimension.
         */
        productCode?: string;
        /**
         * Whether this ad client supports being reported on.
         */
        supportsReporting?: boolean;
    }
    interface Schema$AdClients {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The ad clients returned in this list response.
         */
        items?: Schema$AdClient[];
        /**
         * Kind of list this is, in this case adsense#adClients.
         */
        kind?: string;
        /**
         * Continuation token used to page through ad clients. To retrieve the next
         * page of results, set the next request&#39;s &quot;pageToken&quot; value
         * to this.
         */
        nextPageToken?: string;
    }
    interface Schema$AdCode {
        /**
         * The Auto ad code snippet. The ad code snippet.
         */
        adCode?: string;
        /**
         * The AMP Auto ad code snippet that goes in the body of an AMP page.
         */
        ampBody?: string;
        /**
         * The AMP Auto ad code snippet that goes in the head of an AMP page.
         */
        ampHead?: string;
        /**
         * Kind this is, in this case adsense#adCode.
         */
        kind?: string;
    }
    interface Schema$AdsenseReportsGenerateResponse {
        /**
         * The averages of the report. This is the same length as any other row in
         * the report; cells corresponding to dimension columns are empty.
         */
        averages?: string[];
        /**
         * The requested end date in yyyy-mm-dd format.
         */
        endDate?: string;
        /**
         * The header information of the columns requested in the report. This is a
         * list of headers; one for each dimension in the request, followed by one
         * for each metric in the request.
         */
        headers?: any[];
        /**
         * Kind this is, in this case adsense#report.
         */
        kind?: string;
        /**
         * The output rows of the report. Each row is a list of cells; one for each
         * dimension in the request, followed by one for each metric in the request.
         * The dimension cells contain strings, and the metric cells contain
         * numbers.
         */
        rows?: string[][];
        /**
         * The requested start date in yyyy-mm-dd format.
         */
        startDate?: string;
        /**
         * The total number of rows matched by the report request. Fewer rows may be
         * returned in the response due to being limited by the row count requested
         * or the report row limit.
         */
        totalMatchedRows?: string;
        /**
         * The totals of the report. This is the same length as any other row in the
         * report; cells corresponding to dimension columns are empty.
         */
        totals?: string[];
        /**
         * Any warnings associated with generation of the report.
         */
        warnings?: string[];
    }
    interface Schema$AdStyle {
        /**
         * The colors which are included in the style. These are represented as six
         * hexadecimal characters, similar to HTML color codes, but without the
         * leading hash.
         */
        colors?: any;
        /**
         * The style of the corners in the ad (deprecated: never populated,
         * ignored).
         */
        corners?: string;
        /**
         * The font which is included in the style.
         */
        font?: any;
        /**
         * Kind this is, in this case adsense#adStyle.
         */
        kind?: string;
    }
    interface Schema$AdUnit {
        /**
         * Identity code of this ad unit, not necessarily unique across ad clients.
         */
        code?: string;
        /**
         * Settings specific to content ads (AFC) and highend mobile content ads
         * (AFMC - deprecated).
         */
        contentAdsSettings?: any;
        /**
         * Custom style information specific to this ad unit.
         */
        customStyle?: Schema$AdStyle;
        /**
         * Settings specific to feed ads (AFF) - deprecated.
         */
        feedAdsSettings?: any;
        /**
         * Unique identifier of this ad unit. This should be considered an opaque
         * identifier; it is not safe to rely on it being in any particular format.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#adUnit.
         */
        kind?: string;
        /**
         * Settings specific to WAP mobile content ads (AFMC) - deprecated.
         */
        mobileContentAdsSettings?: any;
        /**
         * Name of this ad unit.
         */
        name?: string;
        /**
         * ID of the saved ad style which holds this ad unit&#39;s style
         * information.
         */
        savedStyleId?: string;
        /**
         * Status of this ad unit. Possible values are: NEW: Indicates that the ad
         * unit was created within the last seven days and does not yet have any
         * activity associated with it.  ACTIVE: Indicates that there has been
         * activity on this ad unit in the last seven days.  INACTIVE: Indicates
         * that there has been no activity on this ad unit in the last seven days.
         */
        status?: string;
    }
    interface Schema$AdUnits {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The ad units returned in this list response.
         */
        items?: Schema$AdUnit[];
        /**
         * Kind of list this is, in this case adsense#adUnits.
         */
        kind?: string;
        /**
         * Continuation token used to page through ad units. To retrieve the next
         * page of results, set the next request&#39;s &quot;pageToken&quot; value
         * to this.
         */
        nextPageToken?: string;
    }
    interface Schema$Alert {
        /**
         * Unique identifier of this alert. This should be considered an opaque
         * identifier; it is not safe to rely on it being in any particular format.
         */
        id?: string;
        /**
         * Whether this alert can be dismissed.
         */
        isDismissible?: boolean;
        /**
         * Kind of resource this is, in this case adsense#alert.
         */
        kind?: string;
        /**
         * The localized alert message.
         */
        message?: string;
        /**
         * Severity of this alert. Possible values: INFO, WARNING, SEVERE.
         */
        severity?: string;
        /**
         * Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3,
         * ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY,
         * GRAYLISTED_PUBLISHER, API_HOLD.
         */
        type?: string;
    }
    interface Schema$Alerts {
        /**
         * The alerts returned in this list response.
         */
        items?: Schema$Alert[];
        /**
         * Kind of list this is, in this case adsense#alerts.
         */
        kind?: string;
    }
    interface Schema$CustomChannel {
        /**
         * Code of this custom channel, not necessarily unique across ad clients.
         */
        code?: string;
        /**
         * Unique identifier of this custom channel. This should be considered an
         * opaque identifier; it is not safe to rely on it being in any particular
         * format.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#customChannel.
         */
        kind?: string;
        /**
         * Name of this custom channel.
         */
        name?: string;
        /**
         * The targeting information of this custom channel, if activated.
         */
        targetingInfo?: any;
    }
    interface Schema$CustomChannels {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The custom channels returned in this list response.
         */
        items?: Schema$CustomChannel[];
        /**
         * Kind of list this is, in this case adsense#customChannels.
         */
        kind?: string;
        /**
         * Continuation token used to page through custom channels. To retrieve the
         * next page of results, set the next request&#39;s &quot;pageToken&quot;
         * value to this.
         */
        nextPageToken?: string;
    }
    interface Schema$Metadata {
        items?: Schema$ReportingMetadataEntry[];
        /**
         * Kind of list this is, in this case adsense#metadata.
         */
        kind?: string;
    }
    interface Schema$Payment {
        /**
         * Unique identifier of this Payment.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#payment.
         */
        kind?: string;
        /**
         * The amount to be paid.
         */
        paymentAmount?: string;
        /**
         * The currency code for the amount to be paid.
         */
        paymentAmountCurrencyCode?: string;
        /**
         * The date this payment was/will be credited to the user, or none if the
         * payment threshold has not been met.
         */
        paymentDate?: string;
    }
    interface Schema$Payments {
        /**
         * The list of Payments for the account. One or both of a) the account&#39;s
         * most recent payment; and b) the account&#39;s upcoming payment.
         */
        items?: Schema$Payment[];
        /**
         * Kind of list this is, in this case adsense#payments.
         */
        kind?: string;
    }
    interface Schema$ReportingMetadataEntry {
        /**
         * For metrics this is a list of dimension IDs which the metric is
         * compatible with, for dimensions it is a list of compatibility groups the
         * dimension belongs to.
         */
        compatibleDimensions?: string[];
        /**
         * The names of the metrics the dimension or metric this reporting metadata
         * entry describes is compatible with.
         */
        compatibleMetrics?: string[];
        /**
         * Unique identifier of this reporting metadata entry, corresponding to the
         * name of the appropriate dimension or metric.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#reportingMetadataEntry.
         */
        kind?: string;
        /**
         * The names of the dimensions which the dimension or metric this reporting
         * metadata entry describes requires to also be present in order for the
         * report to be valid. Omitting these will not cause an error or warning,
         * but may result in data which cannot be correctly interpreted.
         */
        requiredDimensions?: string[];
        /**
         * The names of the metrics which the dimension or metric this reporting
         * metadata entry describes requires to also be present in order for the
         * report to be valid. Omitting these will not cause an error or warning,
         * but may result in data which cannot be correctly interpreted.
         */
        requiredMetrics?: string[];
        /**
         * The codes of the projects supported by the dimension or metric this
         * reporting metadata entry describes.
         */
        supportedProducts?: string[];
    }
    interface Schema$SavedAdStyle {
        /**
         * The AdStyle itself.
         */
        adStyle?: Schema$AdStyle;
        /**
         * Unique identifier of this saved ad style. This should be considered an
         * opaque identifier; it is not safe to rely on it being in any particular
         * format.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#savedAdStyle.
         */
        kind?: string;
        /**
         * The user selected name of this SavedAdStyle.
         */
        name?: string;
    }
    interface Schema$SavedAdStyles {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The saved ad styles returned in this list response.
         */
        items?: Schema$SavedAdStyle[];
        /**
         * Kind of list this is, in this case adsense#savedAdStyles.
         */
        kind?: string;
        /**
         * Continuation token used to page through ad units. To retrieve the next
         * page of results, set the next request&#39;s &quot;pageToken&quot; value
         * to this.
         */
        nextPageToken?: string;
    }
    interface Schema$SavedReport {
        /**
         * Unique identifier of this saved report.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#savedReport.
         */
        kind?: string;
        /**
         * This saved report&#39;s name.
         */
        name?: string;
    }
    interface Schema$SavedReports {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The saved reports returned in this list response.
         */
        items?: Schema$SavedReport[];
        /**
         * Kind of list this is, in this case adsense#savedReports.
         */
        kind?: string;
        /**
         * Continuation token used to page through saved reports. To retrieve the
         * next page of results, set the next request&#39;s &quot;pageToken&quot;
         * value to this.
         */
        nextPageToken?: string;
    }
    interface Schema$UrlChannel {
        /**
         * Unique identifier of this URL channel. This should be considered an
         * opaque identifier; it is not safe to rely on it being in any particular
         * format.
         */
        id?: string;
        /**
         * Kind of resource this is, in this case adsense#urlChannel.
         */
        kind?: string;
        /**
         * URL Pattern of this URL channel. Does not include &quot;http://&quot; or
         * &quot;https://&quot;. Example: www.example.com/home
         */
        urlPattern?: string;
    }
    interface Schema$UrlChannels {
        /**
         * ETag of this response for caching purposes.
         */
        etag?: string;
        /**
         * The URL channels returned in this list response.
         */
        items?: Schema$UrlChannel[];
        /**
         * Kind of list this is, in this case adsense#urlChannels.
         */
        kind?: string;
        /**
         * Continuation token used to page through URL channels. To retrieve the
         * next page of results, set the next request&#39;s &quot;pageToken&quot;
         * value to this.
         */
        nextPageToken?: string;
    }
    class Resource$Accounts {
        root: Adsense;
        adclients: Resource$Accounts$Adclients;
        adunits: Resource$Accounts$Adunits;
        alerts: Resource$Accounts$Alerts;
        customchannels: Resource$Accounts$Customchannels;
        payments: Resource$Accounts$Payments;
        reports: Resource$Accounts$Reports;
        savedadstyles: Resource$Accounts$Savedadstyles;
        urlchannels: Resource$Accounts$Urlchannels;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.get
         * @desc Get information about the selected AdSense account.
         * @alias adsense.accounts.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to get information about.
         * @param {boolean=} params.tree Whether the tree of sub accounts should be returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): AxiosPromise<Schema$Account>;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * adsense.accounts.list
         * @desc List all accounts available to this AdSense account.
         * @alias adsense.accounts.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of accounts to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$List, options?: MethodOptions): AxiosPromise<Schema$Accounts>;
        list(params: Params$Resource$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$Accounts>, callback: BodyResponseCallback<Schema$Accounts>): void;
        list(params: Params$Resource$Accounts$List, callback: BodyResponseCallback<Schema$Accounts>): void;
        list(callback: BodyResponseCallback<Schema$Accounts>): void;
    }
    interface Params$Resource$Accounts$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to get information about.
         */
        accountId?: string;
        /**
         * Whether the tree of sub accounts should be returned.
         */
        tree?: boolean;
    }
    interface Params$Resource$Accounts$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of accounts to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through accounts. To retrieve the next
         * page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Accounts$Adclients {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.adclients.getAdCode
         * @desc Get Auto ad code for a given ad client.
         * @alias adsense.accounts.adclients.getAdCode
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account which contains the ad client.
         * @param {string} params.adClientId Ad client to get the code for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getAdCode(params?: Params$Resource$Accounts$Adclients$Getadcode, options?: MethodOptions): AxiosPromise<Schema$AdCode>;
        getAdCode(params: Params$Resource$Accounts$Adclients$Getadcode, options: MethodOptions | BodyResponseCallback<Schema$AdCode>, callback: BodyResponseCallback<Schema$AdCode>): void;
        getAdCode(params: Params$Resource$Accounts$Adclients$Getadcode, callback: BodyResponseCallback<Schema$AdCode>): void;
        getAdCode(callback: BodyResponseCallback<Schema$AdCode>): void;
        /**
         * adsense.accounts.adclients.list
         * @desc List all ad clients in the specified account.
         * @alias adsense.accounts.adclients.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account for which to list ad clients.
         * @param {integer=} params.maxResults The maximum number of ad clients to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Adclients$List, options?: MethodOptions): AxiosPromise<Schema$AdClients>;
        list(params: Params$Resource$Accounts$Adclients$List, options: MethodOptions | BodyResponseCallback<Schema$AdClients>, callback: BodyResponseCallback<Schema$AdClients>): void;
        list(params: Params$Resource$Accounts$Adclients$List, callback: BodyResponseCallback<Schema$AdClients>): void;
        list(callback: BodyResponseCallback<Schema$AdClients>): void;
    }
    interface Params$Resource$Accounts$Adclients$Getadcode extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account which contains the ad client.
         */
        accountId?: string;
        /**
         * Ad client to get the code for.
         */
        adClientId?: string;
    }
    interface Params$Resource$Accounts$Adclients$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account for which to list ad clients.
         */
        accountId?: string;
        /**
         * The maximum number of ad clients to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad clients. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Accounts$Adunits {
        root: Adsense;
        customchannels: Resource$Accounts$Adunits$Customchannels;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.adunits.get
         * @desc Gets the specified ad unit in the specified ad client for the
         * specified account.
         * @alias adsense.accounts.adunits.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the ad client belongs.
         * @param {string} params.adClientId Ad client for which to get the ad unit.
         * @param {string} params.adUnitId Ad unit to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Adunits$Get, options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
        get(params: Params$Resource$Accounts$Adunits$Get, options: MethodOptions | BodyResponseCallback<Schema$AdUnit>, callback: BodyResponseCallback<Schema$AdUnit>): void;
        get(params: Params$Resource$Accounts$Adunits$Get, callback: BodyResponseCallback<Schema$AdUnit>): void;
        get(callback: BodyResponseCallback<Schema$AdUnit>): void;
        /**
         * adsense.accounts.adunits.getAdCode
         * @desc Get ad code for the specified ad unit.
         * @alias adsense.accounts.adunits.getAdCode
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account which contains the ad client.
         * @param {string} params.adClientId Ad client with contains the ad unit.
         * @param {string} params.adUnitId Ad unit to get the code for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getAdCode(params?: Params$Resource$Accounts$Adunits$Getadcode, options?: MethodOptions): AxiosPromise<Schema$AdCode>;
        getAdCode(params: Params$Resource$Accounts$Adunits$Getadcode, options: MethodOptions | BodyResponseCallback<Schema$AdCode>, callback: BodyResponseCallback<Schema$AdCode>): void;
        getAdCode(params: Params$Resource$Accounts$Adunits$Getadcode, callback: BodyResponseCallback<Schema$AdCode>): void;
        getAdCode(callback: BodyResponseCallback<Schema$AdCode>): void;
        /**
         * adsense.accounts.adunits.list
         * @desc List all ad units in the specified ad client for the specified
         * account.
         * @alias adsense.accounts.adunits.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the ad client belongs.
         * @param {string} params.adClientId Ad client for which to list ad units.
         * @param {boolean=} params.includeInactive Whether to include inactive ad units. Default: true.
         * @param {integer=} params.maxResults The maximum number of ad units to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Adunits$List, options?: MethodOptions): AxiosPromise<Schema$AdUnits>;
        list(params: Params$Resource$Accounts$Adunits$List, options: MethodOptions | BodyResponseCallback<Schema$AdUnits>, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(params: Params$Resource$Accounts$Adunits$List, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    }
    interface Params$Resource$Accounts$Adunits$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the ad client belongs.
         */
        accountId?: string;
        /**
         * Ad client for which to get the ad unit.
         */
        adClientId?: string;
        /**
         * Ad unit to retrieve.
         */
        adUnitId?: string;
    }
    interface Params$Resource$Accounts$Adunits$Getadcode extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account which contains the ad client.
         */
        accountId?: string;
        /**
         * Ad client with contains the ad unit.
         */
        adClientId?: string;
        /**
         * Ad unit to get the code for.
         */
        adUnitId?: string;
    }
    interface Params$Resource$Accounts$Adunits$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the ad client belongs.
         */
        accountId?: string;
        /**
         * Ad client for which to list ad units.
         */
        adClientId?: string;
        /**
         * Whether to include inactive ad units. Default: true.
         */
        includeInactive?: boolean;
        /**
         * The maximum number of ad units to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad units. To retrieve the next
         * page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Accounts$Adunits$Customchannels {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.adunits.customchannels.list
         * @desc List all custom channels which the specified ad unit belongs to.
         * @alias adsense.accounts.adunits.customchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the ad client belongs.
         * @param {string} params.adClientId Ad client which contains the ad unit.
         * @param {string} params.adUnitId Ad unit for which to list custom channels.
         * @param {integer=} params.maxResults The maximum number of custom channels to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Adunits$Customchannels$List, options?: MethodOptions): AxiosPromise<Schema$CustomChannels>;
        list(params: Params$Resource$Accounts$Adunits$Customchannels$List, options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(params: Params$Resource$Accounts$Adunits$Customchannels$List, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    }
    interface Params$Resource$Accounts$Adunits$Customchannels$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the ad client belongs.
         */
        accountId?: string;
        /**
         * Ad client which contains the ad unit.
         */
        adClientId?: string;
        /**
         * Ad unit for which to list custom channels.
         */
        adUnitId?: string;
        /**
         * The maximum number of custom channels to include in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through custom channels. To retrieve
         * the next page, set this parameter to the value of "nextPageToken" from
         * the previous response.
         */
        pageToken?: string;
    }
    class Resource$Accounts$Alerts {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.alerts.delete
         * @desc Dismiss (delete) the specified alert from the specified publisher
         * AdSense account.
         * @alias adsense.accounts.alerts.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account which contains the ad unit.
         * @param {string} params.alertId Alert to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Accounts$Alerts$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Accounts$Alerts$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Accounts$Alerts$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * adsense.accounts.alerts.list
         * @desc List the alerts for the specified AdSense account.
         * @alias adsense.accounts.alerts.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account for which to retrieve the alerts.
         * @param {string=} params.locale The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Alerts$List, options?: MethodOptions): AxiosPromise<Schema$Alerts>;
        list(params: Params$Resource$Accounts$Alerts$List, options: MethodOptions | BodyResponseCallback<Schema$Alerts>, callback: BodyResponseCallback<Schema$Alerts>): void;
        list(params: Params$Resource$Accounts$Alerts$List, callback: BodyResponseCallback<Schema$Alerts>): void;
        list(callback: BodyResponseCallback<Schema$Alerts>): void;
    }
    interface Params$Resource$Accounts$Alerts$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account which contains the ad unit.
         */
        accountId?: string;
        /**
         * Alert to delete.
         */
        alertId?: string;
    }
    interface Params$Resource$Accounts$Alerts$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account for which to retrieve the alerts.
         */
        accountId?: string;
        /**
         * The locale to use for translating alert messages. The account locale will
         * be used if this is not supplied. The AdSense default (English) will be
         * used if the supplied locale is invalid or unsupported.
         */
        locale?: string;
    }
    class Resource$Accounts$Customchannels {
        root: Adsense;
        adunits: Resource$Accounts$Customchannels$Adunits;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.customchannels.get
         * @desc Get the specified custom channel from the specified ad client for
         * the specified account.
         * @alias adsense.accounts.customchannels.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the ad client belongs.
         * @param {string} params.adClientId Ad client which contains the custom channel.
         * @param {string} params.customChannelId Custom channel to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Customchannels$Get, options?: MethodOptions): AxiosPromise<Schema$CustomChannel>;
        get(params: Params$Resource$Accounts$Customchannels$Get, options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>, callback: BodyResponseCallback<Schema$CustomChannel>): void;
        get(params: Params$Resource$Accounts$Customchannels$Get, callback: BodyResponseCallback<Schema$CustomChannel>): void;
        get(callback: BodyResponseCallback<Schema$CustomChannel>): void;
        /**
         * adsense.accounts.customchannels.list
         * @desc List all custom channels in the specified ad client for the
         * specified account.
         * @alias adsense.accounts.customchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the ad client belongs.
         * @param {string} params.adClientId Ad client for which to list custom channels.
         * @param {integer=} params.maxResults The maximum number of custom channels to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Customchannels$List, options?: MethodOptions): AxiosPromise<Schema$CustomChannels>;
        list(params: Params$Resource$Accounts$Customchannels$List, options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(params: Params$Resource$Accounts$Customchannels$List, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    }
    interface Params$Resource$Accounts$Customchannels$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the ad client belongs.
         */
        accountId?: string;
        /**
         * Ad client which contains the custom channel.
         */
        adClientId?: string;
        /**
         * Custom channel to retrieve.
         */
        customChannelId?: string;
    }
    interface Params$Resource$Accounts$Customchannels$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the ad client belongs.
         */
        accountId?: string;
        /**
         * Ad client for which to list custom channels.
         */
        adClientId?: string;
        /**
         * The maximum number of custom channels to include in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through custom channels. To retrieve
         * the next page, set this parameter to the value of "nextPageToken" from
         * the previous response.
         */
        pageToken?: string;
    }
    class Resource$Accounts$Customchannels$Adunits {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.customchannels.adunits.list
         * @desc List all ad units in the specified custom channel.
         * @alias adsense.accounts.customchannels.adunits.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the ad client belongs.
         * @param {string} params.adClientId Ad client which contains the custom channel.
         * @param {string} params.customChannelId Custom channel for which to list ad units.
         * @param {boolean=} params.includeInactive Whether to include inactive ad units. Default: true.
         * @param {integer=} params.maxResults The maximum number of ad units to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Customchannels$Adunits$List, options?: MethodOptions): AxiosPromise<Schema$AdUnits>;
        list(params: Params$Resource$Accounts$Customchannels$Adunits$List, options: MethodOptions | BodyResponseCallback<Schema$AdUnits>, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(params: Params$Resource$Accounts$Customchannels$Adunits$List, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    }
    interface Params$Resource$Accounts$Customchannels$Adunits$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the ad client belongs.
         */
        accountId?: string;
        /**
         * Ad client which contains the custom channel.
         */
        adClientId?: string;
        /**
         * Custom channel for which to list ad units.
         */
        customChannelId?: string;
        /**
         * Whether to include inactive ad units. Default: true.
         */
        includeInactive?: boolean;
        /**
         * The maximum number of ad units to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad units. To retrieve the next
         * page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Accounts$Payments {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.payments.list
         * @desc List the payments for the specified AdSense account.
         * @alias adsense.accounts.payments.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account for which to retrieve the payments.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Payments$List, options?: MethodOptions): AxiosPromise<Schema$Payments>;
        list(params: Params$Resource$Accounts$Payments$List, options: MethodOptions | BodyResponseCallback<Schema$Payments>, callback: BodyResponseCallback<Schema$Payments>): void;
        list(params: Params$Resource$Accounts$Payments$List, callback: BodyResponseCallback<Schema$Payments>): void;
        list(callback: BodyResponseCallback<Schema$Payments>): void;
    }
    interface Params$Resource$Accounts$Payments$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account for which to retrieve the payments.
         */
        accountId?: string;
    }
    class Resource$Accounts$Reports {
        root: Adsense;
        saved: Resource$Accounts$Reports$Saved;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.reports.generate
         * @desc Generate an AdSense report based on the report request sent in the
         * query parameters. Returns the result as JSON; to retrieve output in CSV
         * format specify "alt=csv" as a query parameter.
         * @alias adsense.accounts.reports.generate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account upon which to report.
         * @param {string=} params.currency Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
         * @param {string=} params.dimension Dimensions to base the report on.
         * @param {string} params.endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @param {string=} params.filter Filters to be run on the report.
         * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
         * @param {integer=} params.maxResults The maximum number of rows of report data to return.
         * @param {string=} params.metric Numeric columns to include in the report.
         * @param {string=} params.sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
         * @param {string} params.startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @param {integer=} params.startIndex Index of the first row of report data to return.
         * @param {boolean=} params.useTimezoneReporting Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate(params?: Params$Resource$Accounts$Reports$Generate, options?: MethodOptions): AxiosPromise<Schema$AdsenseReportsGenerateResponse>;
        generate(params: Params$Resource$Accounts$Reports$Generate, options: MethodOptions | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>, callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        generate(params: Params$Resource$Accounts$Reports$Generate, callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        generate(callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
    }
    interface Params$Resource$Accounts$Reports$Generate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account upon which to report.
         */
        accountId?: string;
        /**
         * Optional currency to use when reporting on monetary metrics. Defaults to
         * the account's currency if not set.
         */
        currency?: string;
        /**
         * Dimensions to base the report on.
         */
        dimension?: string;
        /**
         * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
         */
        endDate?: string;
        /**
         * Filters to be run on the report.
         */
        filter?: string;
        /**
         * Optional locale to use for translating report output to a local language.
         * Defaults to "en_US" if not specified.
         */
        locale?: string;
        /**
         * The maximum number of rows of report data to return.
         */
        maxResults?: number;
        /**
         * Numeric columns to include in the report.
         */
        metric?: string;
        /**
         * The name of a dimension or metric to sort the resulting report on,
         * optionally prefixed with "+" to sort ascending or "-" to sort descending.
         * If no prefix is specified, the column is sorted ascending.
         */
        sort?: string;
        /**
         * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
         */
        startDate?: string;
        /**
         * Index of the first row of report data to return.
         */
        startIndex?: number;
        /**
         * Whether the report should be generated in the AdSense account's local
         * timezone. If false default PST/PDT timezone will be used.
         */
        useTimezoneReporting?: boolean;
    }
    class Resource$Accounts$Reports$Saved {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.reports.saved.generate
         * @desc Generate an AdSense report based on the saved report ID sent in the
         * query parameters.
         * @alias adsense.accounts.reports.saved.generate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the saved reports belong.
         * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
         * @param {integer=} params.maxResults The maximum number of rows of report data to return.
         * @param {string} params.savedReportId The saved report to retrieve.
         * @param {integer=} params.startIndex Index of the first row of report data to return.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate(params?: Params$Resource$Accounts$Reports$Saved$Generate, options?: MethodOptions): AxiosPromise<Schema$AdsenseReportsGenerateResponse>;
        generate(params: Params$Resource$Accounts$Reports$Saved$Generate, options: MethodOptions | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>, callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        generate(params: Params$Resource$Accounts$Reports$Saved$Generate, callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        generate(callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        /**
         * adsense.accounts.reports.saved.list
         * @desc List all saved reports in the specified AdSense account.
         * @alias adsense.accounts.reports.saved.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the saved reports belong.
         * @param {integer=} params.maxResults The maximum number of saved reports to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Reports$Saved$List, options?: MethodOptions): AxiosPromise<Schema$SavedReports>;
        list(params: Params$Resource$Accounts$Reports$Saved$List, options: MethodOptions | BodyResponseCallback<Schema$SavedReports>, callback: BodyResponseCallback<Schema$SavedReports>): void;
        list(params: Params$Resource$Accounts$Reports$Saved$List, callback: BodyResponseCallback<Schema$SavedReports>): void;
        list(callback: BodyResponseCallback<Schema$SavedReports>): void;
    }
    interface Params$Resource$Accounts$Reports$Saved$Generate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the saved reports belong.
         */
        accountId?: string;
        /**
         * Optional locale to use for translating report output to a local language.
         * Defaults to "en_US" if not specified.
         */
        locale?: string;
        /**
         * The maximum number of rows of report data to return.
         */
        maxResults?: number;
        /**
         * The saved report to retrieve.
         */
        savedReportId?: string;
        /**
         * Index of the first row of report data to return.
         */
        startIndex?: number;
    }
    interface Params$Resource$Accounts$Reports$Saved$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the saved reports belong.
         */
        accountId?: string;
        /**
         * The maximum number of saved reports to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through saved reports. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Accounts$Savedadstyles {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.savedadstyles.get
         * @desc List a specific saved ad style for the specified account.
         * @alias adsense.accounts.savedadstyles.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account for which to get the saved ad style.
         * @param {string} params.savedAdStyleId Saved ad style to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Savedadstyles$Get, options?: MethodOptions): AxiosPromise<Schema$SavedAdStyle>;
        get(params: Params$Resource$Accounts$Savedadstyles$Get, options: MethodOptions | BodyResponseCallback<Schema$SavedAdStyle>, callback: BodyResponseCallback<Schema$SavedAdStyle>): void;
        get(params: Params$Resource$Accounts$Savedadstyles$Get, callback: BodyResponseCallback<Schema$SavedAdStyle>): void;
        get(callback: BodyResponseCallback<Schema$SavedAdStyle>): void;
        /**
         * adsense.accounts.savedadstyles.list
         * @desc List all saved ad styles in the specified account.
         * @alias adsense.accounts.savedadstyles.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account for which to list saved ad styles.
         * @param {integer=} params.maxResults The maximum number of saved ad styles to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Savedadstyles$List, options?: MethodOptions): AxiosPromise<Schema$SavedAdStyles>;
        list(params: Params$Resource$Accounts$Savedadstyles$List, options: MethodOptions | BodyResponseCallback<Schema$SavedAdStyles>, callback: BodyResponseCallback<Schema$SavedAdStyles>): void;
        list(params: Params$Resource$Accounts$Savedadstyles$List, callback: BodyResponseCallback<Schema$SavedAdStyles>): void;
        list(callback: BodyResponseCallback<Schema$SavedAdStyles>): void;
    }
    interface Params$Resource$Accounts$Savedadstyles$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account for which to get the saved ad style.
         */
        accountId?: string;
        /**
         * Saved ad style to retrieve.
         */
        savedAdStyleId?: string;
    }
    interface Params$Resource$Accounts$Savedadstyles$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account for which to list saved ad styles.
         */
        accountId?: string;
        /**
         * The maximum number of saved ad styles to include in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through saved ad styles. To retrieve
         * the next page, set this parameter to the value of "nextPageToken" from
         * the previous response.
         */
        pageToken?: string;
    }
    class Resource$Accounts$Urlchannels {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.accounts.urlchannels.list
         * @desc List all URL channels in the specified ad client for the specified
         * account.
         * @alias adsense.accounts.urlchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId Account to which the ad client belongs.
         * @param {string} params.adClientId Ad client for which to list URL channels.
         * @param {integer=} params.maxResults The maximum number of URL channels to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$Urlchannels$List, options?: MethodOptions): AxiosPromise<Schema$UrlChannels>;
        list(params: Params$Resource$Accounts$Urlchannels$List, options: MethodOptions | BodyResponseCallback<Schema$UrlChannels>, callback: BodyResponseCallback<Schema$UrlChannels>): void;
        list(params: Params$Resource$Accounts$Urlchannels$List, callback: BodyResponseCallback<Schema$UrlChannels>): void;
        list(callback: BodyResponseCallback<Schema$UrlChannels>): void;
    }
    interface Params$Resource$Accounts$Urlchannels$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Account to which the ad client belongs.
         */
        accountId?: string;
        /**
         * Ad client for which to list URL channels.
         */
        adClientId?: string;
        /**
         * The maximum number of URL channels to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through URL channels. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Adclients {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.adclients.list
         * @desc List all ad clients in this AdSense account.
         * @alias adsense.adclients.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of ad clients to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Adclients$List, options?: MethodOptions): AxiosPromise<Schema$AdClients>;
        list(params: Params$Resource$Adclients$List, options: MethodOptions | BodyResponseCallback<Schema$AdClients>, callback: BodyResponseCallback<Schema$AdClients>): void;
        list(params: Params$Resource$Adclients$List, callback: BodyResponseCallback<Schema$AdClients>): void;
        list(callback: BodyResponseCallback<Schema$AdClients>): void;
    }
    interface Params$Resource$Adclients$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of ad clients to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad clients. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Adunits {
        root: Adsense;
        customchannels: Resource$Adunits$Customchannels;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.adunits.get
         * @desc Gets the specified ad unit in the specified ad client.
         * @alias adsense.adunits.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to get the ad unit.
         * @param {string} params.adUnitId Ad unit to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Adunits$Get, options?: MethodOptions): AxiosPromise<Schema$AdUnit>;
        get(params: Params$Resource$Adunits$Get, options: MethodOptions | BodyResponseCallback<Schema$AdUnit>, callback: BodyResponseCallback<Schema$AdUnit>): void;
        get(params: Params$Resource$Adunits$Get, callback: BodyResponseCallback<Schema$AdUnit>): void;
        get(callback: BodyResponseCallback<Schema$AdUnit>): void;
        /**
         * adsense.adunits.getAdCode
         * @desc Get ad code for the specified ad unit.
         * @alias adsense.adunits.getAdCode
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client with contains the ad unit.
         * @param {string} params.adUnitId Ad unit to get the code for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getAdCode(params?: Params$Resource$Adunits$Getadcode, options?: MethodOptions): AxiosPromise<Schema$AdCode>;
        getAdCode(params: Params$Resource$Adunits$Getadcode, options: MethodOptions | BodyResponseCallback<Schema$AdCode>, callback: BodyResponseCallback<Schema$AdCode>): void;
        getAdCode(params: Params$Resource$Adunits$Getadcode, callback: BodyResponseCallback<Schema$AdCode>): void;
        getAdCode(callback: BodyResponseCallback<Schema$AdCode>): void;
        /**
         * adsense.adunits.list
         * @desc List all ad units in the specified ad client for this AdSense
         * account.
         * @alias adsense.adunits.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to list ad units.
         * @param {boolean=} params.includeInactive Whether to include inactive ad units. Default: true.
         * @param {integer=} params.maxResults The maximum number of ad units to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Adunits$List, options?: MethodOptions): AxiosPromise<Schema$AdUnits>;
        list(params: Params$Resource$Adunits$List, options: MethodOptions | BodyResponseCallback<Schema$AdUnits>, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(params: Params$Resource$Adunits$List, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    }
    interface Params$Resource$Adunits$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client for which to get the ad unit.
         */
        adClientId?: string;
        /**
         * Ad unit to retrieve.
         */
        adUnitId?: string;
    }
    interface Params$Resource$Adunits$Getadcode extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client with contains the ad unit.
         */
        adClientId?: string;
        /**
         * Ad unit to get the code for.
         */
        adUnitId?: string;
    }
    interface Params$Resource$Adunits$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client for which to list ad units.
         */
        adClientId?: string;
        /**
         * Whether to include inactive ad units. Default: true.
         */
        includeInactive?: boolean;
        /**
         * The maximum number of ad units to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad units. To retrieve the next
         * page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Adunits$Customchannels {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.adunits.customchannels.list
         * @desc List all custom channels which the specified ad unit belongs to.
         * @alias adsense.adunits.customchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client which contains the ad unit.
         * @param {string} params.adUnitId Ad unit for which to list custom channels.
         * @param {integer=} params.maxResults The maximum number of custom channels to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Adunits$Customchannels$List, options?: MethodOptions): AxiosPromise<Schema$CustomChannels>;
        list(params: Params$Resource$Adunits$Customchannels$List, options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(params: Params$Resource$Adunits$Customchannels$List, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    }
    interface Params$Resource$Adunits$Customchannels$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client which contains the ad unit.
         */
        adClientId?: string;
        /**
         * Ad unit for which to list custom channels.
         */
        adUnitId?: string;
        /**
         * The maximum number of custom channels to include in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through custom channels. To retrieve
         * the next page, set this parameter to the value of "nextPageToken" from
         * the previous response.
         */
        pageToken?: string;
    }
    class Resource$Alerts {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.alerts.delete
         * @desc Dismiss (delete) the specified alert from the publisher's AdSense
         * account.
         * @alias adsense.alerts.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.alertId Alert to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Alerts$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Alerts$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Alerts$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * adsense.alerts.list
         * @desc List the alerts for this AdSense account.
         * @alias adsense.alerts.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.locale The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Alerts$List, options?: MethodOptions): AxiosPromise<Schema$Alerts>;
        list(params: Params$Resource$Alerts$List, options: MethodOptions | BodyResponseCallback<Schema$Alerts>, callback: BodyResponseCallback<Schema$Alerts>): void;
        list(params: Params$Resource$Alerts$List, callback: BodyResponseCallback<Schema$Alerts>): void;
        list(callback: BodyResponseCallback<Schema$Alerts>): void;
    }
    interface Params$Resource$Alerts$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Alert to delete.
         */
        alertId?: string;
    }
    interface Params$Resource$Alerts$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The locale to use for translating alert messages. The account locale will
         * be used if this is not supplied. The AdSense default (English) will be
         * used if the supplied locale is invalid or unsupported.
         */
        locale?: string;
    }
    class Resource$Customchannels {
        root: Adsense;
        adunits: Resource$Customchannels$Adunits;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.customchannels.get
         * @desc Get the specified custom channel from the specified ad client.
         * @alias adsense.customchannels.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client which contains the custom channel.
         * @param {string} params.customChannelId Custom channel to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Customchannels$Get, options?: MethodOptions): AxiosPromise<Schema$CustomChannel>;
        get(params: Params$Resource$Customchannels$Get, options: MethodOptions | BodyResponseCallback<Schema$CustomChannel>, callback: BodyResponseCallback<Schema$CustomChannel>): void;
        get(params: Params$Resource$Customchannels$Get, callback: BodyResponseCallback<Schema$CustomChannel>): void;
        get(callback: BodyResponseCallback<Schema$CustomChannel>): void;
        /**
         * adsense.customchannels.list
         * @desc List all custom channels in the specified ad client for this
         * AdSense account.
         * @alias adsense.customchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to list custom channels.
         * @param {integer=} params.maxResults The maximum number of custom channels to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Customchannels$List, options?: MethodOptions): AxiosPromise<Schema$CustomChannels>;
        list(params: Params$Resource$Customchannels$List, options: MethodOptions | BodyResponseCallback<Schema$CustomChannels>, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(params: Params$Resource$Customchannels$List, callback: BodyResponseCallback<Schema$CustomChannels>): void;
        list(callback: BodyResponseCallback<Schema$CustomChannels>): void;
    }
    interface Params$Resource$Customchannels$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client which contains the custom channel.
         */
        adClientId?: string;
        /**
         * Custom channel to retrieve.
         */
        customChannelId?: string;
    }
    interface Params$Resource$Customchannels$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client for which to list custom channels.
         */
        adClientId?: string;
        /**
         * The maximum number of custom channels to include in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through custom channels. To retrieve
         * the next page, set this parameter to the value of "nextPageToken" from
         * the previous response.
         */
        pageToken?: string;
    }
    class Resource$Customchannels$Adunits {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.customchannels.adunits.list
         * @desc List all ad units in the specified custom channel.
         * @alias adsense.customchannels.adunits.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client which contains the custom channel.
         * @param {string} params.customChannelId Custom channel for which to list ad units.
         * @param {boolean=} params.includeInactive Whether to include inactive ad units. Default: true.
         * @param {integer=} params.maxResults The maximum number of ad units to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Customchannels$Adunits$List, options?: MethodOptions): AxiosPromise<Schema$AdUnits>;
        list(params: Params$Resource$Customchannels$Adunits$List, options: MethodOptions | BodyResponseCallback<Schema$AdUnits>, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(params: Params$Resource$Customchannels$Adunits$List, callback: BodyResponseCallback<Schema$AdUnits>): void;
        list(callback: BodyResponseCallback<Schema$AdUnits>): void;
    }
    interface Params$Resource$Customchannels$Adunits$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client which contains the custom channel.
         */
        adClientId?: string;
        /**
         * Custom channel for which to list ad units.
         */
        customChannelId?: string;
        /**
         * Whether to include inactive ad units. Default: true.
         */
        includeInactive?: boolean;
        /**
         * The maximum number of ad units to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad units. To retrieve the next
         * page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Metadata {
        root: Adsense;
        dimensions: Resource$Metadata$Dimensions;
        metrics: Resource$Metadata$Metrics;
        constructor(root: Adsense);
        getRoot(): Adsense;
    }
    class Resource$Metadata$Dimensions {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.metadata.dimensions.list
         * @desc List the metadata for the dimensions available to this AdSense
         * account.
         * @alias adsense.metadata.dimensions.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Metadata$Dimensions$List, options?: MethodOptions): AxiosPromise<Schema$Metadata>;
        list(params: Params$Resource$Metadata$Dimensions$List, options: MethodOptions | BodyResponseCallback<Schema$Metadata>, callback: BodyResponseCallback<Schema$Metadata>): void;
        list(params: Params$Resource$Metadata$Dimensions$List, callback: BodyResponseCallback<Schema$Metadata>): void;
        list(callback: BodyResponseCallback<Schema$Metadata>): void;
    }
    interface Params$Resource$Metadata$Dimensions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Metadata$Metrics {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.metadata.metrics.list
         * @desc List the metadata for the metrics available to this AdSense
         * account.
         * @alias adsense.metadata.metrics.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Metadata$Metrics$List, options?: MethodOptions): AxiosPromise<Schema$Metadata>;
        list(params: Params$Resource$Metadata$Metrics$List, options: MethodOptions | BodyResponseCallback<Schema$Metadata>, callback: BodyResponseCallback<Schema$Metadata>): void;
        list(params: Params$Resource$Metadata$Metrics$List, callback: BodyResponseCallback<Schema$Metadata>): void;
        list(callback: BodyResponseCallback<Schema$Metadata>): void;
    }
    interface Params$Resource$Metadata$Metrics$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Payments {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.payments.list
         * @desc List the payments for this AdSense account.
         * @alias adsense.payments.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Payments$List, options?: MethodOptions): AxiosPromise<Schema$Payments>;
        list(params: Params$Resource$Payments$List, options: MethodOptions | BodyResponseCallback<Schema$Payments>, callback: BodyResponseCallback<Schema$Payments>): void;
        list(params: Params$Resource$Payments$List, callback: BodyResponseCallback<Schema$Payments>): void;
        list(callback: BodyResponseCallback<Schema$Payments>): void;
    }
    interface Params$Resource$Payments$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Reports {
        root: Adsense;
        saved: Resource$Reports$Saved;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.reports.generate
         * @desc Generate an AdSense report based on the report request sent in the
         * query parameters. Returns the result as JSON; to retrieve output in CSV
         * format specify "alt=csv" as a query parameter.
         * @alias adsense.reports.generate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.accountId Accounts upon which to report.
         * @param {string=} params.currency Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.
         * @param {string=} params.dimension Dimensions to base the report on.
         * @param {string} params.endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @param {string=} params.filter Filters to be run on the report.
         * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
         * @param {integer=} params.maxResults The maximum number of rows of report data to return.
         * @param {string=} params.metric Numeric columns to include in the report.
         * @param {string=} params.sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
         * @param {string} params.startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
         * @param {integer=} params.startIndex Index of the first row of report data to return.
         * @param {boolean=} params.useTimezoneReporting Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate(params?: Params$Resource$Reports$Generate, options?: MethodOptions): AxiosPromise<Schema$AdsenseReportsGenerateResponse>;
        generate(params: Params$Resource$Reports$Generate, options: MethodOptions | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>, callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        generate(params: Params$Resource$Reports$Generate, callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        generate(callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
    }
    interface Params$Resource$Reports$Generate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Accounts upon which to report.
         */
        accountId?: string;
        /**
         * Optional currency to use when reporting on monetary metrics. Defaults to
         * the account's currency if not set.
         */
        currency?: string;
        /**
         * Dimensions to base the report on.
         */
        dimension?: string;
        /**
         * End of the date range to report on in "YYYY-MM-DD" format, inclusive.
         */
        endDate?: string;
        /**
         * Filters to be run on the report.
         */
        filter?: string;
        /**
         * Optional locale to use for translating report output to a local language.
         * Defaults to "en_US" if not specified.
         */
        locale?: string;
        /**
         * The maximum number of rows of report data to return.
         */
        maxResults?: number;
        /**
         * Numeric columns to include in the report.
         */
        metric?: string;
        /**
         * The name of a dimension or metric to sort the resulting report on,
         * optionally prefixed with "+" to sort ascending or "-" to sort descending.
         * If no prefix is specified, the column is sorted ascending.
         */
        sort?: string;
        /**
         * Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
         */
        startDate?: string;
        /**
         * Index of the first row of report data to return.
         */
        startIndex?: number;
        /**
         * Whether the report should be generated in the AdSense account's local
         * timezone. If false default PST/PDT timezone will be used.
         */
        useTimezoneReporting?: boolean;
    }
    class Resource$Reports$Saved {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.reports.saved.generate
         * @desc Generate an AdSense report based on the saved report ID sent in the
         * query parameters.
         * @alias adsense.reports.saved.generate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
         * @param {integer=} params.maxResults The maximum number of rows of report data to return.
         * @param {string} params.savedReportId The saved report to retrieve.
         * @param {integer=} params.startIndex Index of the first row of report data to return.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate(params?: Params$Resource$Reports$Saved$Generate, options?: MethodOptions): AxiosPromise<Schema$AdsenseReportsGenerateResponse>;
        generate(params: Params$Resource$Reports$Saved$Generate, options: MethodOptions | BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>, callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        generate(params: Params$Resource$Reports$Saved$Generate, callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        generate(callback: BodyResponseCallback<Schema$AdsenseReportsGenerateResponse>): void;
        /**
         * adsense.reports.saved.list
         * @desc List all saved reports in this AdSense account.
         * @alias adsense.reports.saved.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of saved reports to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Reports$Saved$List, options?: MethodOptions): AxiosPromise<Schema$SavedReports>;
        list(params: Params$Resource$Reports$Saved$List, options: MethodOptions | BodyResponseCallback<Schema$SavedReports>, callback: BodyResponseCallback<Schema$SavedReports>): void;
        list(params: Params$Resource$Reports$Saved$List, callback: BodyResponseCallback<Schema$SavedReports>): void;
        list(callback: BodyResponseCallback<Schema$SavedReports>): void;
    }
    interface Params$Resource$Reports$Saved$Generate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Optional locale to use for translating report output to a local language.
         * Defaults to "en_US" if not specified.
         */
        locale?: string;
        /**
         * The maximum number of rows of report data to return.
         */
        maxResults?: number;
        /**
         * The saved report to retrieve.
         */
        savedReportId?: string;
        /**
         * Index of the first row of report data to return.
         */
        startIndex?: number;
    }
    interface Params$Resource$Reports$Saved$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of saved reports to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through saved reports. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
    class Resource$Savedadstyles {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.savedadstyles.get
         * @desc Get a specific saved ad style from the user's account.
         * @alias adsense.savedadstyles.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.savedAdStyleId Saved ad style to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Savedadstyles$Get, options?: MethodOptions): AxiosPromise<Schema$SavedAdStyle>;
        get(params: Params$Resource$Savedadstyles$Get, options: MethodOptions | BodyResponseCallback<Schema$SavedAdStyle>, callback: BodyResponseCallback<Schema$SavedAdStyle>): void;
        get(params: Params$Resource$Savedadstyles$Get, callback: BodyResponseCallback<Schema$SavedAdStyle>): void;
        get(callback: BodyResponseCallback<Schema$SavedAdStyle>): void;
        /**
         * adsense.savedadstyles.list
         * @desc List all saved ad styles in the user's account.
         * @alias adsense.savedadstyles.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.maxResults The maximum number of saved ad styles to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Savedadstyles$List, options?: MethodOptions): AxiosPromise<Schema$SavedAdStyles>;
        list(params: Params$Resource$Savedadstyles$List, options: MethodOptions | BodyResponseCallback<Schema$SavedAdStyles>, callback: BodyResponseCallback<Schema$SavedAdStyles>): void;
        list(params: Params$Resource$Savedadstyles$List, callback: BodyResponseCallback<Schema$SavedAdStyles>): void;
        list(callback: BodyResponseCallback<Schema$SavedAdStyles>): void;
    }
    interface Params$Resource$Savedadstyles$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Saved ad style to retrieve.
         */
        savedAdStyleId?: string;
    }
    interface Params$Resource$Savedadstyles$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The maximum number of saved ad styles to include in the response, used
         * for paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through saved ad styles. To retrieve
         * the next page, set this parameter to the value of "nextPageToken" from
         * the previous response.
         */
        pageToken?: string;
    }
    class Resource$Urlchannels {
        root: Adsense;
        constructor(root: Adsense);
        getRoot(): Adsense;
        /**
         * adsense.urlchannels.list
         * @desc List all URL channels in the specified ad client for this AdSense
         * account.
         * @alias adsense.urlchannels.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.adClientId Ad client for which to list URL channels.
         * @param {integer=} params.maxResults The maximum number of URL channels to include in the response, used for paging.
         * @param {string=} params.pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Urlchannels$List, options?: MethodOptions): AxiosPromise<Schema$UrlChannels>;
        list(params: Params$Resource$Urlchannels$List, options: MethodOptions | BodyResponseCallback<Schema$UrlChannels>, callback: BodyResponseCallback<Schema$UrlChannels>): void;
        list(params: Params$Resource$Urlchannels$List, callback: BodyResponseCallback<Schema$UrlChannels>): void;
        list(callback: BodyResponseCallback<Schema$UrlChannels>): void;
    }
    interface Params$Resource$Urlchannels$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Ad client for which to list URL channels.
         */
        adClientId?: string;
        /**
         * The maximum number of URL channels to include in the response, used for
         * paging.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through URL channels. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response.
         */
        pageToken?: string;
    }
}
