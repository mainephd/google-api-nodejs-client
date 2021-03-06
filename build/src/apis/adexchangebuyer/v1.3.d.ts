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
export declare namespace adexchangebuyer_v1_3 {
    interface Options extends GlobalOptions {
        version: 'v1_3';
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
     * Ad Exchange Buyer API
     *
     * Accesses your bidding-account information, submits creatives for
     * validation, finds available direct deals, and retrieves performance
     * reports.
     *
     * @example
     * const {google} = require('googleapis');
     * const adexchangebuyer = google.adexchangebuyer('v1.3');
     *
     * @namespace adexchangebuyer
     * @type {Function}
     * @version v1.3
     * @variation v1.3
     * @param {object=} options Options for Adexchangebuyer
     */
    class Adexchangebuyer {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        accounts: Resource$Accounts;
        billingInfo: Resource$Billinginfo;
        budget: Resource$Budget;
        creatives: Resource$Creatives;
        directDeals: Resource$Directdeals;
        performanceReport: Resource$Performancereport;
        pretargetingConfig: Resource$Pretargetingconfig;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * Configuration data for an Ad Exchange buyer account.
     */
    interface Schema$Account {
        /**
         * Your bidder locations that have distinct URLs.
         */
        bidderLocation?: any[];
        /**
         * The nid parameter value used in cookie match requests. Please contact
         * your technical account manager if you need to change this.
         */
        cookieMatchingNid?: string;
        /**
         * The base URL used in cookie match requests.
         */
        cookieMatchingUrl?: string;
        /**
         * Account id.
         */
        id?: number;
        /**
         * Resource type.
         */
        kind?: string;
        /**
         * The maximum number of active creatives that an account can have, where a
         * creative is active if it was inserted or bid with in the last 30 days.
         * Please contact your technical account manager if you need to change this.
         */
        maximumActiveCreatives?: number;
        /**
         * The sum of all bidderLocation.maximumQps values cannot exceed this.
         * Please contact your technical account manager if you need to change this.
         */
        maximumTotalQps?: number;
        /**
         * The number of creatives that this account inserted or bid with in the
         * last 30 days.
         */
        numberActiveCreatives?: number;
    }
    /**
     * An account feed lists Ad Exchange buyer accounts that the user has access
     * to. Each entry in the feed corresponds to a single buyer account.
     */
    interface Schema$AccountsList {
        /**
         * A list of accounts.
         */
        items?: Schema$Account[];
        /**
         * Resource type.
         */
        kind?: string;
    }
    /**
     * The configuration data for an Ad Exchange billing info.
     */
    interface Schema$BillingInfo {
        /**
         * Account id.
         */
        accountId?: number;
        /**
         * Account name.
         */
        accountName?: string;
        /**
         * A list of adgroup IDs associated with this particular account. These IDs
         * may show up as part of a realtime bidding BidRequest, which indicates a
         * bid request for this account.
         */
        billingId?: string[];
        /**
         * Resource type.
         */
        kind?: string;
    }
    /**
     * A billing info feed lists Billing Info the Ad Exchange buyer account has
     * access to. Each entry in the feed corresponds to a single billing info.
     */
    interface Schema$BillingInfoList {
        /**
         * A list of billing info relevant for your account.
         */
        items?: Schema$BillingInfo[];
        /**
         * Resource type.
         */
        kind?: string;
    }
    /**
     * The configuration data for Ad Exchange RTB - Budget API.
     */
    interface Schema$Budget {
        /**
         * The id of the account. This is required for get and update requests.
         */
        accountId?: string;
        /**
         * The billing id to determine which adgroup to provide budget information
         * for. This is required for get and update requests.
         */
        billingId?: string;
        /**
         * The daily budget amount in unit amount of the account currency to apply
         * for the billingId provided. This is required for update requests.
         */
        budgetAmount?: string;
        /**
         * The currency code for the buyer. This cannot be altered here.
         */
        currencyCode?: string;
        /**
         * The unique id that describes this item.
         */
        id?: string;
        /**
         * The kind of the resource, i.e. &quot;adexchangebuyer#budget&quot;.
         */
        kind?: string;
    }
    /**
     * A creative and its classification data.
     */
    interface Schema$Creative {
        /**
         * Account id.
         */
        accountId?: number;
        /**
         * Detected advertiser id, if any. Read-only. This field should not be set
         * in requests.
         */
        advertiserId?: string[];
        /**
         * The name of the company being advertised in the creative.
         */
        advertiserName?: string;
        /**
         * The agency id for this creative.
         */
        agencyId?: string;
        /**
         * The last upload timestamp of this creative if it was uploaded via API.
         * Read-only. The value of this field is generated, and will be ignored for
         * uploads. (formatted RFC 3339 timestamp).
         */
        apiUploadTimestamp?: string;
        /**
         * All attributes for the ads that may be shown from this snippet.
         */
        attribute?: number[];
        /**
         * A buyer-specific id identifying the creative in this ad.
         */
        buyerCreativeId?: string;
        /**
         * The set of destination urls for the snippet.
         */
        clickThroughUrl?: string[];
        /**
         * Shows any corrections that were applied to this creative. Read-only. This
         * field should not be set in requests.
         */
        corrections?: any[];
        /**
         * The reasons for disapproval, if any. Note that not all disapproval
         * reasons may be categorized, so it is possible for the creative to have a
         * status of DISAPPROVED with an empty list for disapproval_reasons. In this
         * case, please reach out to your TAM to help debug the issue. Read-only.
         * This field should not be set in requests.
         */
        disapprovalReasons?: any[];
        /**
         * The filtering reasons for the creative. Read-only. This field should not
         * be set in requests.
         */
        filteringReasons?: any;
        /**
         * Ad height.
         */
        height?: number;
        /**
         * The HTML snippet that displays the ad when inserted in the web page. If
         * set, videoURL should not be set.
         */
        HTMLSnippet?: string;
        /**
         * The set of urls to be called to record an impression.
         */
        impressionTrackingUrl?: string[];
        /**
         * Resource type.
         */
        kind?: string;
        /**
         * If nativeAd is set, HTMLSnippet and videoURL should not be set.
         */
        nativeAd?: any;
        /**
         * Detected product categories, if any. Read-only. This field should not be
         * set in requests.
         */
        productCategories?: number[];
        /**
         * All restricted categories for the ads that may be shown from this
         * snippet.
         */
        restrictedCategories?: number[];
        /**
         * Detected sensitive categories, if any. Read-only. This field should not
         * be set in requests.
         */
        sensitiveCategories?: number[];
        /**
         * Creative serving status. Read-only. This field should not be set in
         * requests.
         */
        status?: string;
        /**
         * All vendor types for the ads that may be shown from this snippet.
         */
        vendorType?: number[];
        /**
         * The version for this creative. Read-only. This field should not be set in
         * requests.
         */
        version?: number;
        /**
         * The URL to fetch a video ad. If set, HTMLSnippet and the nativeAd should
         * not be set.
         */
        videoURL?: string;
        /**
         * Ad width.
         */
        width?: number;
    }
    /**
     * The creatives feed lists the active creatives for the Ad Exchange buyer
     * accounts that the user has access to. Each entry in the feed corresponds to
     * a single creative.
     */
    interface Schema$CreativesList {
        /**
         * A list of creatives.
         */
        items?: Schema$Creative[];
        /**
         * Resource type.
         */
        kind?: string;
        /**
         * Continuation token used to page through creatives. To retrieve the next
         * page of results, set the next request&#39;s &quot;pageToken&quot; value
         * to this.
         */
        nextPageToken?: string;
    }
    /**
     * The configuration data for an Ad Exchange direct deal.
     */
    interface Schema$DirectDeal {
        /**
         * The account id of the buyer this deal is for.
         */
        accountId?: number;
        /**
         * The name of the advertiser this deal is for.
         */
        advertiser?: string;
        /**
         * Whether the publisher for this deal is eligible for alcohol ads.
         */
        allowsAlcohol?: boolean;
        /**
         * The account id that this deal was negotiated for. It is either the buyer
         * or the client that this deal was negotiated on behalf of.
         */
        buyerAccountId?: string;
        /**
         * The currency code that applies to the fixed_cpm value. If not set then
         * assumed to be USD.
         */
        currencyCode?: string;
        /**
         * The deal type such as programmatic reservation or fixed price and so on.
         */
        dealTier?: string;
        /**
         * End time for when this deal stops being active. If not set then this deal
         * is valid until manually disabled by the publisher. In seconds since the
         * epoch.
         */
        endTime?: string;
        /**
         * The fixed price for this direct deal. In cpm micros of currency according
         * to currency_code. If set, then this deal is eligible for the fixed price
         * tier of buying (highest priority, pay exactly the configured fixed
         * price).
         */
        fixedCpm?: string;
        /**
         * Deal id.
         */
        id?: string;
        /**
         * Resource type.
         */
        kind?: string;
        /**
         * Deal name.
         */
        name?: string;
        /**
         * The minimum price for this direct deal. In cpm micros of currency
         * according to currency_code. If set, then this deal is eligible for the
         * private exchange tier of buying (below fixed price priority, run as a
         * second price auction).
         */
        privateExchangeMinCpm?: string;
        /**
         * If true, the publisher has opted to have their blocks ignored when a
         * creative is bid with for this deal.
         */
        publisherBlocksOverriden?: boolean;
        /**
         * The name of the publisher offering this direct deal.
         */
        sellerNetwork?: string;
        /**
         * Start time for when this deal becomes active. If not set then this deal
         * is active immediately upon creation. In seconds since the epoch.
         */
        startTime?: string;
    }
    /**
     * A direct deals feed lists Direct Deals the Ad Exchange buyer account has
     * access to. This includes direct deals set up for the buyer account as well
     * as its merged stream seats.
     */
    interface Schema$DirectDealsList {
        /**
         * A list of direct deals relevant for your account.
         */
        directDeals?: Schema$DirectDeal[];
        /**
         * Resource type.
         */
        kind?: string;
    }
    /**
     * The configuration data for an Ad Exchange performance report list.
     */
    interface Schema$PerformanceReport {
        /**
         * The number of bid responses with an ad.
         */
        bidRate?: number;
        /**
         * The number of bid requests sent to your bidder.
         */
        bidRequestRate?: number;
        /**
         * Rate of various prefiltering statuses per match. Please refer to the
         * callout-status-codes.txt file for different statuses.
         */
        calloutStatusRate?: any[];
        /**
         * Average QPS for cookie matcher operations.
         */
        cookieMatcherStatusRate?: any[];
        /**
         * Rate of ads with a given status. Please refer to the
         * creative-status-codes.txt file for different statuses.
         */
        creativeStatusRate?: any[];
        /**
         * The number of bid responses that were filtered due to a policy violation
         * or other errors.
         */
        filteredBidRate?: number;
        /**
         * Average QPS for hosted match operations.
         */
        hostedMatchStatusRate?: any[];
        /**
         * The number of potential queries based on your pretargeting settings.
         */
        inventoryMatchRate?: number;
        /**
         * Resource type.
         */
        kind?: string;
        /**
         * The 50th percentile round trip latency(ms) as perceived from Google
         * servers for the duration period covered by the report.
         */
        latency50thPercentile?: number;
        /**
         * The 85th percentile round trip latency(ms) as perceived from Google
         * servers for the duration period covered by the report.
         */
        latency85thPercentile?: number;
        /**
         * The 95th percentile round trip latency(ms) as perceived from Google
         * servers for the duration period covered by the report.
         */
        latency95thPercentile?: number;
        /**
         * Rate of various quota account statuses per quota check.
         */
        noQuotaInRegion?: number;
        /**
         * Rate of various quota account statuses per quota check.
         */
        outOfQuota?: number;
        /**
         * Average QPS for pixel match requests from clients.
         */
        pixelMatchRequests?: number;
        /**
         * Average QPS for pixel match responses from clients.
         */
        pixelMatchResponses?: number;
        /**
         * The configured quota limits for this account.
         */
        quotaConfiguredLimit?: number;
        /**
         * The throttled quota limits for this account.
         */
        quotaThrottledLimit?: number;
        /**
         * The trading location of this data.
         */
        region?: string;
        /**
         * The number of properly formed bid responses received by our servers
         * within the deadline.
         */
        successfulRequestRate?: number;
        /**
         * The unix timestamp of the starting time of this performance data.
         */
        timestamp?: string;
        /**
         * The number of bid responses that were unsuccessful due to timeouts,
         * incorrect formatting, etc.
         */
        unsuccessfulRequestRate?: number;
    }
    /**
     * The configuration data for an Ad Exchange performance report list.
     */
    interface Schema$PerformanceReportList {
        /**
         * Resource type.
         */
        kind?: string;
        /**
         * A list of performance reports relevant for the account.
         */
        performanceReport?: Schema$PerformanceReport[];
    }
    interface Schema$PretargetingConfig {
        /**
         * The id for billing purposes, provided for reference. Leave this field
         * blank for insert requests; the id will be generated automatically.
         */
        billingId?: string;
        /**
         * The config id; generated automatically. Leave this field blank for insert
         * requests.
         */
        configId?: string;
        /**
         * The name of the config. Must be unique. Required for all requests.
         */
        configName?: string;
        /**
         * List must contain exactly one of PRETARGETING_CREATIVE_TYPE_HTML or
         * PRETARGETING_CREATIVE_TYPE_VIDEO.
         */
        creativeType?: string[];
        /**
         * Requests which allow one of these (width, height) pairs will match. All
         * pairs must be supported ad dimensions.
         */
        dimensions?: any[];
        /**
         * Requests with any of these content labels will not match. Values are from
         * content-labels.txt in the downloadable files section.
         */
        excludedContentLabels?: string[];
        /**
         * Requests containing any of these geo criteria ids will not match.
         */
        excludedGeoCriteriaIds?: string[];
        /**
         * Requests containing any of these placements will not match.
         */
        excludedPlacements?: any[];
        /**
         * Requests containing any of these users list ids will not match.
         */
        excludedUserLists?: string[];
        /**
         * Requests containing any of these vertical ids will not match. Values are
         * from the publisher-verticals.txt file in the downloadable files section.
         */
        excludedVerticals?: string[];
        /**
         * Requests containing any of these geo criteria ids will match.
         */
        geoCriteriaIds?: string[];
        /**
         * Whether this config is active. Required for all requests.
         */
        isActive?: boolean;
        /**
         * The kind of the resource, i.e.
         * &quot;adexchangebuyer#pretargetingConfig&quot;.
         */
        kind?: string;
        /**
         * Request containing any of these language codes will match.
         */
        languages?: string[];
        /**
         * Requests containing any of these mobile carrier ids will match. Values
         * are from mobile-carriers.csv in the downloadable files section.
         */
        mobileCarriers?: string[];
        /**
         * Requests containing any of these mobile device ids will match. Values are
         * from mobile-devices.csv in the downloadable files section.
         */
        mobileDevices?: string[];
        /**
         * Requests containing any of these mobile operating system version ids will
         * match. Values are from mobile-os.csv in the downloadable files section.
         */
        mobileOperatingSystemVersions?: string[];
        /**
         * Requests containing any of these placements will match.
         */
        placements?: any[];
        /**
         * Requests matching any of these platforms will match. Possible values are
         * PRETARGETING_PLATFORM_MOBILE, PRETARGETING_PLATFORM_DESKTOP, and
         * PRETARGETING_PLATFORM_TABLET.
         */
        platforms?: string[];
        /**
         * Creative attributes should be declared here if all creatives
         * corresponding to this pretargeting configuration have that creative
         * attribute. Values are from pretargetable-creative-attributes.txt in the
         * downloadable files section.
         */
        supportedCreativeAttributes?: string[];
        /**
         * Requests containing any of these user list ids will match.
         */
        userLists?: string[];
        /**
         * Requests that allow any of these vendor ids will match. Values are from
         * vendors.txt in the downloadable files section.
         */
        vendorTypes?: string[];
        /**
         * Requests containing any of these vertical ids will match.
         */
        verticals?: string[];
    }
    interface Schema$PretargetingConfigList {
        /**
         * A list of pretargeting configs
         */
        items?: Schema$PretargetingConfig[];
        /**
         * Resource type.
         */
        kind?: string;
    }
    class Resource$Accounts {
        root: Adexchangebuyer;
        constructor(root: Adexchangebuyer);
        getRoot(): Adexchangebuyer;
        /**
         * adexchangebuyer.accounts.get
         * @desc Gets one account by ID.
         * @alias adexchangebuyer.accounts.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer} params.id The account id
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Accounts$Get, options?: MethodOptions): AxiosPromise<Schema$Account>;
        get(params: Params$Resource$Accounts$Get, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        get(params: Params$Resource$Accounts$Get, callback: BodyResponseCallback<Schema$Account>): void;
        get(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * adexchangebuyer.accounts.list
         * @desc Retrieves the authenticated user's list of accounts.
         * @alias adexchangebuyer.accounts.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Accounts$List, options?: MethodOptions): AxiosPromise<Schema$AccountsList>;
        list(params: Params$Resource$Accounts$List, options: MethodOptions | BodyResponseCallback<Schema$AccountsList>, callback: BodyResponseCallback<Schema$AccountsList>): void;
        list(params: Params$Resource$Accounts$List, callback: BodyResponseCallback<Schema$AccountsList>): void;
        list(callback: BodyResponseCallback<Schema$AccountsList>): void;
        /**
         * adexchangebuyer.accounts.patch
         * @desc Updates an existing account. This method supports patch semantics.
         * @alias adexchangebuyer.accounts.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer} params.id The account id
         * @param {().Account} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Accounts$Patch, options?: MethodOptions): AxiosPromise<Schema$Account>;
        patch(params: Params$Resource$Accounts$Patch, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        patch(params: Params$Resource$Accounts$Patch, callback: BodyResponseCallback<Schema$Account>): void;
        patch(callback: BodyResponseCallback<Schema$Account>): void;
        /**
         * adexchangebuyer.accounts.update
         * @desc Updates an existing account.
         * @alias adexchangebuyer.accounts.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer} params.id The account id
         * @param {().Account} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Accounts$Update, options?: MethodOptions): AxiosPromise<Schema$Account>;
        update(params: Params$Resource$Accounts$Update, options: MethodOptions | BodyResponseCallback<Schema$Account>, callback: BodyResponseCallback<Schema$Account>): void;
        update(params: Params$Resource$Accounts$Update, callback: BodyResponseCallback<Schema$Account>): void;
        update(callback: BodyResponseCallback<Schema$Account>): void;
    }
    interface Params$Resource$Accounts$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id
         */
        id?: number;
    }
    interface Params$Resource$Accounts$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Accounts$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id
         */
        id?: number;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    interface Params$Resource$Accounts$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id
         */
        id?: number;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Account;
    }
    class Resource$Billinginfo {
        root: Adexchangebuyer;
        constructor(root: Adexchangebuyer);
        getRoot(): Adexchangebuyer;
        /**
         * adexchangebuyer.billingInfo.get
         * @desc Returns the billing information for one account specified by
         * account ID.
         * @alias adexchangebuyer.billingInfo.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer} params.accountId The account id.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Billinginfo$Get, options?: MethodOptions): AxiosPromise<Schema$BillingInfo>;
        get(params: Params$Resource$Billinginfo$Get, options: MethodOptions | BodyResponseCallback<Schema$BillingInfo>, callback: BodyResponseCallback<Schema$BillingInfo>): void;
        get(params: Params$Resource$Billinginfo$Get, callback: BodyResponseCallback<Schema$BillingInfo>): void;
        get(callback: BodyResponseCallback<Schema$BillingInfo>): void;
        /**
         * adexchangebuyer.billingInfo.list
         * @desc Retrieves a list of billing information for all accounts of the
         * authenticated user.
         * @alias adexchangebuyer.billingInfo.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Billinginfo$List, options?: MethodOptions): AxiosPromise<Schema$BillingInfoList>;
        list(params: Params$Resource$Billinginfo$List, options: MethodOptions | BodyResponseCallback<Schema$BillingInfoList>, callback: BodyResponseCallback<Schema$BillingInfoList>): void;
        list(params: Params$Resource$Billinginfo$List, callback: BodyResponseCallback<Schema$BillingInfoList>): void;
        list(callback: BodyResponseCallback<Schema$BillingInfoList>): void;
    }
    interface Params$Resource$Billinginfo$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id.
         */
        accountId?: number;
    }
    interface Params$Resource$Billinginfo$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Budget {
        root: Adexchangebuyer;
        constructor(root: Adexchangebuyer);
        getRoot(): Adexchangebuyer;
        /**
         * adexchangebuyer.budget.get
         * @desc Returns the budget information for the adgroup specified by the
         * accountId and billingId.
         * @alias adexchangebuyer.budget.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to get the budget information for.
         * @param {string} params.billingId The billing id to get the budget information for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Budget$Get, options?: MethodOptions): AxiosPromise<Schema$Budget>;
        get(params: Params$Resource$Budget$Get, options: MethodOptions | BodyResponseCallback<Schema$Budget>, callback: BodyResponseCallback<Schema$Budget>): void;
        get(params: Params$Resource$Budget$Get, callback: BodyResponseCallback<Schema$Budget>): void;
        get(callback: BodyResponseCallback<Schema$Budget>): void;
        /**
         * adexchangebuyer.budget.patch
         * @desc Updates the budget amount for the budget of the adgroup specified
         * by the accountId and billingId, with the budget amount in the request.
         * This method supports patch semantics.
         * @alias adexchangebuyer.budget.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id associated with the budget being updated.
         * @param {string} params.billingId The billing id associated with the budget being updated.
         * @param {().Budget} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Budget$Patch, options?: MethodOptions): AxiosPromise<Schema$Budget>;
        patch(params: Params$Resource$Budget$Patch, options: MethodOptions | BodyResponseCallback<Schema$Budget>, callback: BodyResponseCallback<Schema$Budget>): void;
        patch(params: Params$Resource$Budget$Patch, callback: BodyResponseCallback<Schema$Budget>): void;
        patch(callback: BodyResponseCallback<Schema$Budget>): void;
        /**
         * adexchangebuyer.budget.update
         * @desc Updates the budget amount for the budget of the adgroup specified
         * by the accountId and billingId, with the budget amount in the request.
         * @alias adexchangebuyer.budget.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id associated with the budget being updated.
         * @param {string} params.billingId The billing id associated with the budget being updated.
         * @param {().Budget} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Budget$Update, options?: MethodOptions): AxiosPromise<Schema$Budget>;
        update(params: Params$Resource$Budget$Update, options: MethodOptions | BodyResponseCallback<Schema$Budget>, callback: BodyResponseCallback<Schema$Budget>): void;
        update(params: Params$Resource$Budget$Update, callback: BodyResponseCallback<Schema$Budget>): void;
        update(callback: BodyResponseCallback<Schema$Budget>): void;
    }
    interface Params$Resource$Budget$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id to get the budget information for.
         */
        accountId?: string;
        /**
         * The billing id to get the budget information for.
         */
        billingId?: string;
    }
    interface Params$Resource$Budget$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id associated with the budget being updated.
         */
        accountId?: string;
        /**
         * The billing id associated with the budget being updated.
         */
        billingId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Budget;
    }
    interface Params$Resource$Budget$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id associated with the budget being updated.
         */
        accountId?: string;
        /**
         * The billing id associated with the budget being updated.
         */
        billingId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Budget;
    }
    class Resource$Creatives {
        root: Adexchangebuyer;
        constructor(root: Adexchangebuyer);
        getRoot(): Adexchangebuyer;
        /**
         * adexchangebuyer.creatives.get
         * @desc Gets the status for a single creative. A creative will be available
         * 30-40 minutes after submission.
         * @alias adexchangebuyer.creatives.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer} params.accountId The id for the account that will serve this creative.
         * @param {string} params.buyerCreativeId The buyer-specific id for this creative.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Creatives$Get, options?: MethodOptions): AxiosPromise<Schema$Creative>;
        get(params: Params$Resource$Creatives$Get, options: MethodOptions | BodyResponseCallback<Schema$Creative>, callback: BodyResponseCallback<Schema$Creative>): void;
        get(params: Params$Resource$Creatives$Get, callback: BodyResponseCallback<Schema$Creative>): void;
        get(callback: BodyResponseCallback<Schema$Creative>): void;
        /**
         * adexchangebuyer.creatives.insert
         * @desc Submit a new creative.
         * @alias adexchangebuyer.creatives.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().Creative} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Creatives$Insert, options?: MethodOptions): AxiosPromise<Schema$Creative>;
        insert(params: Params$Resource$Creatives$Insert, options: MethodOptions | BodyResponseCallback<Schema$Creative>, callback: BodyResponseCallback<Schema$Creative>): void;
        insert(params: Params$Resource$Creatives$Insert, callback: BodyResponseCallback<Schema$Creative>): void;
        insert(callback: BodyResponseCallback<Schema$Creative>): void;
        /**
         * adexchangebuyer.creatives.list
         * @desc Retrieves a list of the authenticated user's active creatives. A
         * creative will be available 30-40 minutes after submission.
         * @alias adexchangebuyer.creatives.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {integer=} params.accountId When specified, only creatives for the given account ids are returned.
         * @param {string=} params.buyerCreativeId When specified, only creatives for the given buyer creative ids are returned.
         * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
         * @param {string=} params.pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
         * @param {string=} params.statusFilter When specified, only creatives having the given status are returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Creatives$List, options?: MethodOptions): AxiosPromise<Schema$CreativesList>;
        list(params: Params$Resource$Creatives$List, options: MethodOptions | BodyResponseCallback<Schema$CreativesList>, callback: BodyResponseCallback<Schema$CreativesList>): void;
        list(params: Params$Resource$Creatives$List, callback: BodyResponseCallback<Schema$CreativesList>): void;
        list(callback: BodyResponseCallback<Schema$CreativesList>): void;
    }
    interface Params$Resource$Creatives$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The id for the account that will serve this creative.
         */
        accountId?: number;
        /**
         * The buyer-specific id for this creative.
         */
        buyerCreativeId?: string;
    }
    interface Params$Resource$Creatives$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Creative;
    }
    interface Params$Resource$Creatives$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * When specified, only creatives for the given account ids are returned.
         */
        accountId?: number;
        /**
         * When specified, only creatives for the given buyer creative ids are
         * returned.
         */
        buyerCreativeId?: string;
        /**
         * Maximum number of entries returned on one result page. If not set, the
         * default is 100. Optional.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through ad clients. To retrieve the
         * next page, set this parameter to the value of "nextPageToken" from the
         * previous response. Optional.
         */
        pageToken?: string;
        /**
         * When specified, only creatives having the given status are returned.
         */
        statusFilter?: string;
    }
    class Resource$Directdeals {
        root: Adexchangebuyer;
        constructor(root: Adexchangebuyer);
        getRoot(): Adexchangebuyer;
        /**
         * adexchangebuyer.directDeals.get
         * @desc Gets one direct deal by ID.
         * @alias adexchangebuyer.directDeals.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.id The direct deal id
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Directdeals$Get, options?: MethodOptions): AxiosPromise<Schema$DirectDeal>;
        get(params: Params$Resource$Directdeals$Get, options: MethodOptions | BodyResponseCallback<Schema$DirectDeal>, callback: BodyResponseCallback<Schema$DirectDeal>): void;
        get(params: Params$Resource$Directdeals$Get, callback: BodyResponseCallback<Schema$DirectDeal>): void;
        get(callback: BodyResponseCallback<Schema$DirectDeal>): void;
        /**
         * adexchangebuyer.directDeals.list
         * @desc Retrieves the authenticated user's list of direct deals.
         * @alias adexchangebuyer.directDeals.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Directdeals$List, options?: MethodOptions): AxiosPromise<Schema$DirectDealsList>;
        list(params: Params$Resource$Directdeals$List, options: MethodOptions | BodyResponseCallback<Schema$DirectDealsList>, callback: BodyResponseCallback<Schema$DirectDealsList>): void;
        list(params: Params$Resource$Directdeals$List, callback: BodyResponseCallback<Schema$DirectDealsList>): void;
        list(callback: BodyResponseCallback<Schema$DirectDealsList>): void;
    }
    interface Params$Resource$Directdeals$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The direct deal id
         */
        id?: string;
    }
    interface Params$Resource$Directdeals$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Performancereport {
        root: Adexchangebuyer;
        constructor(root: Adexchangebuyer);
        getRoot(): Adexchangebuyer;
        /**
         * adexchangebuyer.performanceReport.list
         * @desc Retrieves the authenticated user's list of performance metrics.
         * @alias adexchangebuyer.performanceReport.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to get the reports.
         * @param {string} params.endDateTime The end time of the report in ISO 8601 timestamp format using UTC.
         * @param {integer=} params.maxResults Maximum number of entries returned on one result page. If not set, the default is 100. Optional.
         * @param {string=} params.pageToken A continuation token, used to page through performance reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response. Optional.
         * @param {string} params.startDateTime The start time of the report in ISO 8601 timestamp format using UTC.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Performancereport$List, options?: MethodOptions): AxiosPromise<Schema$PerformanceReportList>;
        list(params: Params$Resource$Performancereport$List, options: MethodOptions | BodyResponseCallback<Schema$PerformanceReportList>, callback: BodyResponseCallback<Schema$PerformanceReportList>): void;
        list(params: Params$Resource$Performancereport$List, callback: BodyResponseCallback<Schema$PerformanceReportList>): void;
        list(callback: BodyResponseCallback<Schema$PerformanceReportList>): void;
    }
    interface Params$Resource$Performancereport$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id to get the reports.
         */
        accountId?: string;
        /**
         * The end time of the report in ISO 8601 timestamp format using UTC.
         */
        endDateTime?: string;
        /**
         * Maximum number of entries returned on one result page. If not set, the
         * default is 100. Optional.
         */
        maxResults?: number;
        /**
         * A continuation token, used to page through performance reports. To
         * retrieve the next page, set this parameter to the value of
         * "nextPageToken" from the previous response. Optional.
         */
        pageToken?: string;
        /**
         * The start time of the report in ISO 8601 timestamp format using UTC.
         */
        startDateTime?: string;
    }
    class Resource$Pretargetingconfig {
        root: Adexchangebuyer;
        constructor(root: Adexchangebuyer);
        getRoot(): Adexchangebuyer;
        /**
         * adexchangebuyer.pretargetingConfig.delete
         * @desc Deletes an existing pretargeting config.
         * @alias adexchangebuyer.pretargetingConfig.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to delete the pretargeting config for.
         * @param {string} params.configId The specific id of the configuration to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Pretargetingconfig$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Pretargetingconfig$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Pretargetingconfig$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * adexchangebuyer.pretargetingConfig.get
         * @desc Gets a specific pretargeting configuration
         * @alias adexchangebuyer.pretargetingConfig.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to get the pretargeting config for.
         * @param {string} params.configId The specific id of the configuration to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Pretargetingconfig$Get, options?: MethodOptions): AxiosPromise<Schema$PretargetingConfig>;
        get(params: Params$Resource$Pretargetingconfig$Get, options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>, callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        get(params: Params$Resource$Pretargetingconfig$Get, callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        get(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        /**
         * adexchangebuyer.pretargetingConfig.insert
         * @desc Inserts a new pretargeting configuration.
         * @alias adexchangebuyer.pretargetingConfig.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to insert the pretargeting config for.
         * @param {().PretargetingConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Pretargetingconfig$Insert, options?: MethodOptions): AxiosPromise<Schema$PretargetingConfig>;
        insert(params: Params$Resource$Pretargetingconfig$Insert, options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>, callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        insert(params: Params$Resource$Pretargetingconfig$Insert, callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        insert(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        /**
         * adexchangebuyer.pretargetingConfig.list
         * @desc Retrieves a list of the authenticated user's pretargeting
         * configurations.
         * @alias adexchangebuyer.pretargetingConfig.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to get the pretargeting configs for.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Pretargetingconfig$List, options?: MethodOptions): AxiosPromise<Schema$PretargetingConfigList>;
        list(params: Params$Resource$Pretargetingconfig$List, options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfigList>, callback: BodyResponseCallback<Schema$PretargetingConfigList>): void;
        list(params: Params$Resource$Pretargetingconfig$List, callback: BodyResponseCallback<Schema$PretargetingConfigList>): void;
        list(callback: BodyResponseCallback<Schema$PretargetingConfigList>): void;
        /**
         * adexchangebuyer.pretargetingConfig.patch
         * @desc Updates an existing pretargeting config. This method supports patch
         * semantics.
         * @alias adexchangebuyer.pretargetingConfig.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to update the pretargeting config for.
         * @param {string} params.configId The specific id of the configuration to update.
         * @param {().PretargetingConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Pretargetingconfig$Patch, options?: MethodOptions): AxiosPromise<Schema$PretargetingConfig>;
        patch(params: Params$Resource$Pretargetingconfig$Patch, options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>, callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        patch(params: Params$Resource$Pretargetingconfig$Patch, callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        patch(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        /**
         * adexchangebuyer.pretargetingConfig.update
         * @desc Updates an existing pretargeting config.
         * @alias adexchangebuyer.pretargetingConfig.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.accountId The account id to update the pretargeting config for.
         * @param {string} params.configId The specific id of the configuration to update.
         * @param {().PretargetingConfig} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Pretargetingconfig$Update, options?: MethodOptions): AxiosPromise<Schema$PretargetingConfig>;
        update(params: Params$Resource$Pretargetingconfig$Update, options: MethodOptions | BodyResponseCallback<Schema$PretargetingConfig>, callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        update(params: Params$Resource$Pretargetingconfig$Update, callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
        update(callback: BodyResponseCallback<Schema$PretargetingConfig>): void;
    }
    interface Params$Resource$Pretargetingconfig$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id to delete the pretargeting config for.
         */
        accountId?: string;
        /**
         * The specific id of the configuration to delete.
         */
        configId?: string;
    }
    interface Params$Resource$Pretargetingconfig$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id to get the pretargeting config for.
         */
        accountId?: string;
        /**
         * The specific id of the configuration to retrieve.
         */
        configId?: string;
    }
    interface Params$Resource$Pretargetingconfig$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id to insert the pretargeting config for.
         */
        accountId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PretargetingConfig;
    }
    interface Params$Resource$Pretargetingconfig$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id to get the pretargeting configs for.
         */
        accountId?: string;
    }
    interface Params$Resource$Pretargetingconfig$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id to update the pretargeting config for.
         */
        accountId?: string;
        /**
         * The specific id of the configuration to update.
         */
        configId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PretargetingConfig;
    }
    interface Params$Resource$Pretargetingconfig$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The account id to update the pretargeting config for.
         */
        accountId?: string;
        /**
         * The specific id of the configuration to update.
         */
        configId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PretargetingConfig;
    }
}
