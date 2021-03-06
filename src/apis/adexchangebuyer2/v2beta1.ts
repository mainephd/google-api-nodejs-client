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

import {AxiosPromise} from 'axios';
import {Compute, JWT, OAuth2Client, UserRefreshClient} from 'google-auth-library';
import {BodyResponseCallback, createAPIRequest, GlobalOptions, GoogleConfigurable, MethodOptions} from 'googleapis-common';

// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace

export namespace adexchangebuyer2_v2beta1 {
  export interface Options extends GlobalOptions {
    version: 'v2beta1';
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
   * Ad Exchange Buyer API II
   *
   * Accesses the latest features for managing Authorized Buyers accounts,
   * Real-Time Bidding configurations and auction metrics, and Marketplace
   * programmatic deals.
   *
   * @example
   * const {google} = require('googleapis');
   * const adexchangebuyer2 = google.adexchangebuyer2('v2beta1');
   *
   * @namespace adexchangebuyer2
   * @type {Function}
   * @version v2beta1
   * @variation v2beta1
   * @param {object=} options Options for Adexchangebuyer2
   */
  export class Adexchangebuyer2 {
    _options: GlobalOptions;
    google?: GoogleConfigurable;
    root = this;

    accounts: Resource$Accounts;
    bidders: Resource$Bidders;

    constructor(options: GlobalOptions, google?: GoogleConfigurable) {
      this._options = options || {};
      this.google = google;
      this.getRoot.bind(this);

      this.accounts = new Resource$Accounts(this);
      this.bidders = new Resource$Bidders(this);
    }

    getRoot() {
      return this.root;
    }
  }

  /**
   * An absolute date range, specified by its start date and end date. The
   * supported range of dates begins 30 days before today and ends today.
   * Validity checked upon filter set creation. If a filter set with an absolute
   * date range is run at a later date more than 30 days after start_date, it
   * will fail.
   */
  export interface Schema$AbsoluteDateRange {
    /**
     * The end date of the range (inclusive). Must be within the 30 days leading
     * up to current date, and must be equal to or after start_date.
     */
    endDate?: Schema$Date;
    /**
     * The start date of the range (inclusive). Must be within the 30 days
     * leading up to current date, and must be equal to or before end_date.
     */
    startDate?: Schema$Date;
  }
  /**
   * Request to accept a proposal.
   */
  export interface Schema$AcceptProposalRequest {
    /**
     * The last known client revision number of the proposal.
     */
    proposalRevision?: string;
  }
  /**
   * A request for associating a deal and a creative.
   */
  export interface Schema$AddDealAssociationRequest {
    /**
     * The association between a creative and a deal that should be added.
     */
    association?: Schema$CreativeDealAssociation;
  }
  /**
   * Request message for adding a note to a given proposal.
   */
  export interface Schema$AddNoteRequest {
    /**
     * Details of the note to add.
     */
    note?: Schema$Note;
  }
  /**
   * Represents size of a single ad slot, or a creative.
   */
  export interface Schema$AdSize {
    /**
     * The height of the ad slot in pixels. This field will be present only when
     * size type is `PIXEL`.
     */
    height?: string;
    /**
     * The size type of the ad slot.
     */
    sizeType?: string;
    /**
     * The width of the ad slot in pixels. This field will be present only when
     * size type is `PIXEL`.
     */
    width?: string;
  }
  /**
   * @OutputOnly The app type the restriction applies to for mobile device.
   */
  export interface Schema$AppContext {
    /**
     * The app types this restriction applies to.
     */
    appTypes?: string[];
  }
  /**
   * @OutputOnly The auction type the restriction applies to.
   */
  export interface Schema$AuctionContext {
    /**
     * The auction types this restriction applies to.
     */
    auctionTypes?: string[];
  }
  /**
   * The set of metrics that are measured in numbers of bids, representing how
   * many bids with the specified dimension values were considered eligible at
   * each stage of the bidding funnel;
   */
  export interface Schema$BidMetricsRow {
    /**
     * The number of bids that Ad Exchange received from the buyer.
     */
    bids?: Schema$MetricValue;
    /**
     * The number of bids that were permitted to compete in the auction.
     */
    bidsInAuction?: Schema$MetricValue;
    /**
     * The number of bids for which the buyer was billed.
     */
    billedImpressions?: Schema$MetricValue;
    /**
     * The number of bids that won an impression.
     */
    impressionsWon?: Schema$MetricValue;
    /**
     * The number of bids for which the corresponding impression was measurable
     * for viewability (as defined by Active View).
     */
    measurableImpressions?: Schema$MetricValue;
    /**
     * The values of all dimensions associated with metric values in this row.
     */
    rowDimensions?: Schema$RowDimensions;
    /**
     * The number of bids for which the corresponding impression was viewable
     * (as defined by Active View).
     */
    viewableImpressions?: Schema$MetricValue;
  }
  /**
   * The number of impressions with the specified dimension values that were
   * considered to have no applicable bids, as described by the specified
   * status.
   */
  export interface Schema$BidResponseWithoutBidsStatusRow {
    /**
     * The number of impressions for which there was a bid response with the
     * specified status.
     */
    impressionCount?: Schema$MetricValue;
    /**
     * The values of all dimensions associated with metric values in this row.
     */
    rowDimensions?: Schema$RowDimensions;
    /**
     * The status specifying why the bid responses were considered to have no
     * applicable bids.
     */
    status?: string;
  }
  /**
   * Represents a buyer of inventory. Each buyer is identified by a unique
   * Authorized Buyers account ID.
   */
  export interface Schema$Buyer {
    /**
     * Authorized Buyers account ID of the buyer.
     */
    accountId?: string;
  }
  /**
   * The number of impressions with the specified dimension values where the
   * corresponding bid request or bid response was not successful, as described
   * by the specified callout status.
   */
  export interface Schema$CalloutStatusRow {
    /**
     * The ID of the callout status. See
     * [callout-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/callout-status-codes).
     */
    calloutStatusId?: number;
    /**
     * The number of impressions for which there was a bid request or bid
     * response with the specified callout status.
     */
    impressionCount?: Schema$MetricValue;
    /**
     * The values of all dimensions associated with metric values in this row.
     */
    rowDimensions?: Schema$RowDimensions;
  }
  /**
   * Request to cancel an ongoing negotiation.
   */
  export interface Schema$CancelNegotiationRequest {}
  /**
   * A client resource represents a client buyer&amp;mdash;an agency, a brand,
   * or an advertiser customer of the sponsor buyer. Users associated with the
   * client buyer have restricted access to the Marketplace and certain other
   * sections of the Authorized Buyers UI based on the role granted to the
   * client buyer. All fields are required unless otherwise specified.
   */
  export interface Schema$Client {
    /**
     * The globally-unique numerical ID of the client. The value of this field
     * is ignored in create and update operations.
     */
    clientAccountId?: string;
    /**
     * Name used to represent this client to publishers. You may have multiple
     * clients that map to the same entity, but for each client the combination
     * of `clientName` and entity must be unique. You can specify this field as
     * empty.
     */
    clientName?: string;
    /**
     * Numerical identifier of the client entity. The entity can be an
     * advertiser, a brand, or an agency. This identifier is unique among all
     * the entities with the same type.  A list of all known advertisers with
     * their identifiers is available in the
     * [advertisers.txt](https://storage.googleapis.com/adx-rtb-dictionaries/advertisers.txt)
     * file.  A list of all known brands with their identifiers is available in
     * the
     * [brands.txt](https://storage.googleapis.com/adx-rtb-dictionaries/brands.txt)
     * file.  A list of all known agencies with their identifiers is available
     * in the
     * [agencies.txt](https://storage.googleapis.com/adx-rtb-dictionaries/agencies.txt)
     * file.
     */
    entityId?: string;
    /**
     * The name of the entity. This field is automatically fetched based on the
     * type and ID. The value of this field is ignored in create and update
     * operations.
     */
    entityName?: string;
    /**
     * The type of the client entity: `ADVERTISER`, `BRAND`, or `AGENCY`.
     */
    entityType?: string;
    /**
     * Optional arbitrary unique identifier of this client buyer from the
     * standpoint of its Ad Exchange sponsor buyer.  This field can be used to
     * associate a client buyer with the identifier in the namespace of its
     * sponsor buyer, lookup client buyers by that identifier and verify whether
     * an Ad Exchange counterpart of a given client buyer already exists.  If
     * present, must be unique among all the client buyers for its Ad Exchange
     * sponsor buyer.
     */
    partnerClientId?: string;
    /**
     * The role which is assigned to the client buyer. Each role implies a set
     * of permissions granted to the client. Must be one of
     * `CLIENT_DEAL_VIEWER`, `CLIENT_DEAL_NEGOTIATOR` or `CLIENT_DEAL_APPROVER`.
     */
    role?: string;
    /**
     * The status of the client buyer.
     */
    status?: string;
    /**
     * Whether the client buyer will be visible to sellers.
     */
    visibleToSeller?: boolean;
  }
  /**
   * A client user is created under a client buyer and has restricted access to
   * the Marketplace and certain other sections of the Authorized Buyers UI
   * based on the role granted to the associated client buyer.  The only way a
   * new client user can be created is via accepting an email invitation (see
   * the accounts.clients.invitations.create method).  All fields are required
   * unless otherwise specified.
   */
  export interface Schema$ClientUser {
    /**
     * Numerical account ID of the client buyer with which the user is
     * associated; the buyer must be a client of the current sponsor buyer. The
     * value of this field is ignored in an update operation.
     */
    clientAccountId?: string;
    /**
     * User&#39;s email address. The value of this field is ignored in an update
     * operation.
     */
    email?: string;
    /**
     * The status of the client user.
     */
    status?: string;
    /**
     * The unique numerical ID of the client user that has accepted an
     * invitation. The value of this field is ignored in an update operation.
     */
    userId?: string;
  }
  /**
   * An invitation for a new client user to get access to the Authorized Buyers
   * UI. All fields are required unless otherwise specified.
   */
  export interface Schema$ClientUserInvitation {
    /**
     * Numerical account ID of the client buyer that the invited user is
     * associated with. The value of this field is ignored in create operations.
     */
    clientAccountId?: string;
    /**
     * The email address to which the invitation is sent. Email addresses should
     * be unique among all client users under each sponsor buyer.
     */
    email?: string;
    /**
     * The unique numerical ID of the invitation that is sent to the user. The
     * value of this field is ignored in create operations.
     */
    invitationId?: string;
  }
  /**
   * Request message for indicating that the proposal&#39;s setup step is
   * complete.
   */
  export interface Schema$CompleteSetupRequest {}
  /**
   * Contains information on how a buyer or seller can be reached.
   */
  export interface Schema$ContactInformation {
    /**
     * Email address for the contact.
     */
    email?: string;
    /**
     * The name of the contact.
     */
    name?: string;
  }
  /**
   * @OutputOnly Shows any corrections that were applied to this creative.
   */
  export interface Schema$Correction {
    /**
     * The contexts for the correction.
     */
    contexts?: Schema$ServingContext[];
    /**
     * Additional details about what was corrected.
     */
    details?: string[];
    /**
     * The type of correction that was applied to the creative.
     */
    type?: string;
  }
  /**
   * A creative and its classification data.  Next ID: 38
   */
  export interface Schema$Creative {
    /**
     * The account that this creative belongs to. Can be used to filter the
     * response of the creatives.list method.
     */
    accountId?: string;
    /**
     * The link to AdChoices destination page.
     */
    adChoicesDestinationUrl?: string;
    /**
     * The name of the company being advertised in the creative.
     */
    advertiserName?: string;
    /**
     * The agency ID for this creative.
     */
    agencyId?: string;
    /**
     * @OutputOnly The last update timestamp of the creative via API.
     */
    apiUpdateTime?: string;
    /**
     * All attributes for the ads that may be shown from this creative. Can be
     * used to filter the response of the creatives.list method.
     */
    attributes?: string[];
    /**
     * The set of destination URLs for the creative.
     */
    clickThroughUrls?: string[];
    /**
     * @OutputOnly Shows any corrections that were applied to this creative.
     */
    corrections?: Schema$Correction[];
    /**
     * The buyer-defined creative ID of this creative. Can be used to filter the
     * response of the creatives.list method.
     */
    creativeId?: string;
    /**
     * @OutputOnly The top-level deals status of this creative. If disapproved,
     * an entry for &#39;auctionType=DIRECT_DEALS&#39; (or &#39;ALL&#39;) in
     * serving_restrictions will also exist. Note that this may be nuanced with
     * other contextual restrictions, in which case, it may be preferable to
     * read from serving_restrictions directly. Can be used to filter the
     * response of the creatives.list method.
     */
    dealsStatus?: string;
    /**
     * The set of declared destination URLs for the creative.
     */
    declaredClickThroughUrls?: string[];
    /**
     * @OutputOnly Detected advertiser IDs, if any.
     */
    detectedAdvertiserIds?: string[];
    /**
     * @OutputOnly The detected domains for this creative.
     */
    detectedDomains?: string[];
    /**
     * @OutputOnly The detected languages for this creative. The order is
     * arbitrary. The codes are 2 or 5 characters and are documented at
     * https://developers.google.com/adwords/api/docs/appendix/languagecodes.
     */
    detectedLanguages?: string[];
    /**
     * @OutputOnly Detected product categories, if any. See the
     * ad-product-categories.txt file in the technical documentation for a list
     * of IDs.
     */
    detectedProductCategories?: number[];
    /**
     * @OutputOnly Detected sensitive categories, if any. See the
     * ad-sensitive-categories.txt file in the technical documentation for a
     * list of IDs. You should use these IDs along with the
     * excluded-sensitive-category field in the bid request to filter your bids.
     */
    detectedSensitiveCategories?: number[];
    /**
     * @OutputOnly The filtering stats for this creative.
     */
    filteringStats?: Schema$FilteringStats;
    /**
     * An HTML creative.
     */
    html?: Schema$HtmlContent;
    /**
     * The set of URLs to be called to record an impression.
     */
    impressionTrackingUrls?: string[];
    /**
     * A native creative.
     */
    native?: Schema$NativeContent;
    /**
     * @OutputOnly The top-level open auction status of this creative. If
     * disapproved, an entry for &#39;auctionType = OPEN_AUCTION&#39; (or
     * &#39;ALL&#39;) in serving_restrictions will also exist. Note that this
     * may be nuanced with other contextual restrictions, in which case, it may
     * be preferable to read from serving_restrictions directly. Can be used to
     * filter the response of the creatives.list method.
     */
    openAuctionStatus?: string;
    /**
     * All restricted categories for the ads that may be shown from this
     * creative.
     */
    restrictedCategories?: string[];
    /**
     * @OutputOnly The granular status of this ad in specific contexts. A
     * context here relates to where something ultimately serves (for example, a
     * physical location, a platform, an HTTPS vs HTTP request, or the type of
     * auction).
     */
    servingRestrictions?: Schema$ServingRestriction[];
    /**
     * All vendor IDs for the ads that may be shown from this creative. See
     * https://storage.googleapis.com/adx-rtb-dictionaries/vendors.txt for
     * possible values.
     */
    vendorIds?: number[];
    /**
     * @OutputOnly The version of this creative.
     */
    version?: number;
    /**
     * A video creative.
     */
    video?: Schema$VideoContent;
  }
  /**
   * The association between a creative and a deal.
   */
  export interface Schema$CreativeDealAssociation {
    /**
     * The account the creative belongs to.
     */
    accountId?: string;
    /**
     * The ID of the creative associated with the deal.
     */
    creativeId?: string;
    /**
     * The externalDealId for the deal associated with the creative.
     */
    dealsId?: string;
  }
  /**
   * Represents creative restrictions associated to Programmatic Guaranteed/
   * Preferred Deal in Ad Manager. This doesn&#39;t apply to Private Auction and
   * AdX Preferred Deals.
   */
  export interface Schema$CreativeRestrictions {
    /**
     * The format of the environment that the creatives will be displayed in.
     */
    creativeFormat?: string;
    creativeSpecifications?: Schema$CreativeSpecification[];
    /**
     * Skippable video ads allow viewers to skip ads after 5 seconds.
     */
    skippableAdType?: string;
  }
  /**
   * Specifies the size of the creative.
   */
  export interface Schema$CreativeSize {
    /**
     * What formats are allowed by the publisher. If this repeated field is
     * empty then all formats are allowed. For example, if this field contains
     * AllowedFormatType.AUDIO then the publisher only allows an audio ad
     * (without any video).
     */
    allowedFormats?: string[];
    /**
     * For video creatives specifies the sizes of companion ads (if present).
     * Companion sizes may be filled in only when creative_size_type = VIDEO
     */
    companionSizes?: Schema$Size[];
    /**
     * The creative size type.
     */
    creativeSizeType?: string;
    /**
     * The native template for this creative. It will have a value only if
     * creative_size_type = CreativeSizeType.NATIVE. @OutputOnly
     */
    nativeTemplate?: string;
    /**
     * For regular or video creative size type, specifies the size of the
     * creative
     */
    size?: Schema$Size;
    /**
     * The type of skippable ad for this creative. It will have a value only if
     * creative_size_type = CreativeSizeType.VIDEO.
     */
    skippableAdType?: string;
  }
  /**
   * Represents information for a creative that is associated with a
   * Programmatic Guaranteed/Preferred Deal in Ad Manager.
   */
  export interface Schema$CreativeSpecification {
    /**
     * Companion sizes may be filled in only when this is a video creative.
     */
    creativeCompanionSizes?: Schema$AdSize[];
    /**
     * The size of the creative.
     */
    creativeSize?: Schema$AdSize;
  }
  /**
   * The number of bids with the specified dimension values that did not win the
   * auction (either were filtered pre-auction or lost the auction), as
   * described by the specified creative status.
   */
  export interface Schema$CreativeStatusRow {
    /**
     * The number of bids with the specified status.
     */
    bidCount?: Schema$MetricValue;
    /**
     * The ID of the creative status. See
     * [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     */
    creativeStatusId?: number;
    /**
     * The values of all dimensions associated with metric values in this row.
     */
    rowDimensions?: Schema$RowDimensions;
  }
  /**
   * Generic targeting used for targeting dimensions that contains a list of
   * included and excluded numeric IDs.
   */
  export interface Schema$CriteriaTargeting {
    /**
     * A list of numeric IDs to be excluded.
     */
    excludedCriteriaIds?: string[];
    /**
     * A list of numeric IDs to be included.
     */
    targetedCriteriaIds?: string[];
  }
  /**
   * Represents a whole or partial calendar date, e.g. a birthday. The time of
   * day and time zone are either specified elsewhere or are not significant.
   * The date is relative to the Proleptic Gregorian Calendar. This can
   * represent:  * A full date, with non-zero year, month and day values * A
   * month and day value, with a zero year, e.g. an anniversary * A year on its
   * own, with zero month and day values * A year and month value, with a zero
   * day, e.g. a credit card expiration date  Related types are
   * google.type.TimeOfDay and `google.protobuf.Timestamp`.
   */
  export interface Schema$Date {
    /**
     * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
     * if specifying a year by itself or a year and month where the day is not
     * significant.
     */
    day?: number;
    /**
     * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
     * month and day.
     */
    month?: number;
    /**
     * Year of date. Must be from 1 to 9999, or 0 if specifying a date without a
     * year.
     */
    year?: number;
  }
  /**
   * Daypart targeting message that specifies if the ad can be shown only during
   * certain parts of a day/week.
   */
  export interface Schema$DayPart {
    /**
     * The day of the week to target. If unspecified, applicable to all days.
     */
    dayOfWeek?: string;
    /**
     * The ending time of the day for the ad to show (minute level granularity).
     * The end time is exclusive. This field is not available for filtering in
     * PQL queries.
     */
    endTime?: Schema$TimeOfDay;
    /**
     * The starting time of day for the ad to show (minute level granularity).
     * The start time is inclusive. This field is not available for filtering in
     * PQL queries.
     */
    startTime?: Schema$TimeOfDay;
  }
  /**
   * Specifies the day part targeting criteria.
   */
  export interface Schema$DayPartTargeting {
    /**
     * A list of day part targeting criterion.
     */
    dayParts?: Schema$DayPart[];
    /**
     * The timezone to use for interpreting the day part targeting.
     */
    timeZoneType?: string;
  }
  /**
   * A deal represents a segment of inventory for displaying ads on. A proposal
   * can contain multiple deals. A deal contains the terms and targeting
   * information that is used for serving.
   */
  export interface Schema$Deal {
    /**
     * Proposed flight end time of the deal. This will generally be stored in a
     * granularity of a second. A value is not required for Private Auction
     * deals or Preferred Deals.
     */
    availableEndTime?: string;
    /**
     * Optional proposed flight start time of the deal. This will generally be
     * stored in the granularity of one second since deal serving starts at
     * seconds boundary. Any time specified with more granularity (e.g., in
     * milliseconds) will be truncated towards the start of time in seconds.
     */
    availableStartTime?: string;
    /**
     * Buyer private data (hidden from seller).
     */
    buyerPrivateData?: Schema$PrivateData;
    /**
     * The product ID from which this deal was created.  Note: This field may be
     * set only when creating the resource. Modifying this field while updating
     * the resource will result in an error.
     */
    createProductId?: string;
    /**
     * Optional revision number of the product that the deal was created from.
     * If present on create, and the server `product_revision` has advanced
     * sinced the passed-in `create_product_revision`, an `ABORTED` error will
     * be returned.  Note: This field may be set only when creating the
     * resource. Modifying this field while updating the resource will result in
     * an error.
     */
    createProductRevision?: string;
    /**
     * The time of the deal creation. @OutputOnly
     */
    createTime?: string;
    /**
     * Specifies the creative pre-approval policy. @OutputOnly
     */
    creativePreApprovalPolicy?: string;
    /**
     * Restricitions about the creatives associated with the deal (i.e., size)
     * This is available for Programmatic Guaranteed/Preferred Deals in Ad
     * Manager. @OutputOnly
     */
    creativeRestrictions?: Schema$CreativeRestrictions;
    /**
     * Specifies whether the creative is safeFrame compatible. @OutputOnly
     */
    creativeSafeFrameCompatibility?: string;
    /**
     * A unique deal ID for the deal (server-assigned). @OutputOnly
     */
    dealId?: string;
    /**
     * Metadata about the serving status of this deal. @OutputOnly
     */
    dealServingMetadata?: Schema$DealServingMetadata;
    /**
     * The negotiable terms of the deal.
     */
    dealTerms?: Schema$DealTerms;
    /**
     * The set of fields around delivery control that are interesting for a
     * buyer to see but are non-negotiable. These are set by the publisher.
     */
    deliveryControl?: Schema$DeliveryControl;
    /**
     * Description for the deal terms.
     */
    description?: string;
    /**
     * The name of the deal.
     */
    displayName?: string;
    /**
     * The external deal ID assigned to this deal once the deal is finalized.
     * This is the deal ID that shows up in serving/reporting etc. @OutputOnly
     */
    externalDealId?: string;
    /**
     * True, if the buyside inventory setup is complete for this deal.
     * @OutputOnly
     */
    isSetupComplete?: boolean;
    /**
     * Specifies the creative source for programmatic deals. PUBLISHER means
     * creative is provided by seller and ADVERTISER means creative is provided
     * by buyer. @OutputOnly
     */
    programmaticCreativeSource?: string;
    /**
     * ID of the proposal that this deal is part of. @OutputOnly
     */
    proposalId?: string;
    /**
     * Seller contact information for the deal. @OutputOnly
     */
    sellerContacts?: Schema$ContactInformation[];
    /**
     * The syndication product associated with the deal.  Note: This field may
     * be set only when creating the resource. Modifying this field while
     * updating the resource will result in an error.
     */
    syndicationProduct?: string;
    /**
     * Specifies the subset of inventory targeted by the deal. @OutputOnly
     */
    targeting?: Schema$MarketplaceTargeting;
    /**
     * The shared targeting visible to buyers and sellers. Each shared targeting
     * entity is AND&#39;d together.
     */
    targetingCriterion?: Schema$TargetingCriteria[];
    /**
     * The time when the deal was last updated. @OutputOnly
     */
    updateTime?: string;
    /**
     * The web property code for the seller copied over from the product.
     */
    webPropertyCode?: string;
  }
  /**
   * Tracks which parties (if any) have paused a deal. The deal is considered
   * paused if either hasBuyerPaused or hasSellPaused is true.
   */
  export interface Schema$DealPauseStatus {
    /**
     * The buyer&#39;s reason for pausing, if the buyer paused the deal.
     */
    buyerPauseReason?: string;
    /**
     * The role of the person who first paused this deal.
     */
    firstPausedBy?: string;
    /**
     * True, if the buyer has paused the deal unilaterally.
     */
    hasBuyerPaused?: boolean;
    /**
     * True, if the seller has paused the deal unilaterally.
     */
    hasSellerPaused?: boolean;
    /**
     * The seller&#39;s reason for pausing, if the seller paused the deal.
     */
    sellerPauseReason?: string;
  }
  /**
   * Message captures metadata about the serving status of a deal.
   */
  export interface Schema$DealServingMetadata {
    /**
     * Tracks which parties (if any) have paused a deal. @OutputOnly
     */
    dealPauseStatus?: Schema$DealPauseStatus;
  }
  /**
   * The deal terms specify the details of a Product/deal. They specify things
   * like price per buyer, the type of pricing model (e.g., fixed price,
   * auction) and expected impressions from the publisher.
   */
  export interface Schema$DealTerms {
    /**
     * Visibility of the URL in bid requests. (default: BRANDED)
     */
    brandingType?: string;
    /**
     * Publisher provided description for the terms.
     */
    description?: string;
    /**
     * Non-binding estimate of the estimated gross spend for this deal. Can be
     * set by buyer or seller.
     */
    estimatedGrossSpend?: Schema$Price;
    /**
     * Non-binding estimate of the impressions served per day. Can be set by
     * buyer or seller.
     */
    estimatedImpressionsPerDay?: string;
    /**
     * The terms for guaranteed fixed price deals.
     */
    guaranteedFixedPriceTerms?: Schema$GuaranteedFixedPriceTerms;
    /**
     * The terms for non-guaranteed auction deals.
     */
    nonGuaranteedAuctionTerms?: Schema$NonGuaranteedAuctionTerms;
    /**
     * The terms for non-guaranteed fixed price deals.
     */
    nonGuaranteedFixedPriceTerms?: Schema$NonGuaranteedFixedPriceTerms;
    /**
     * The time zone name. For deals with Cost Per Day billing, defines the time
     * zone used to mark the boundaries of a day. It should be an IANA TZ name,
     * such as &quot;America/Los_Angeles&quot;. For more information, see
     * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
     */
    sellerTimeZone?: string;
  }
  /**
   * Message contains details about how the deals will be paced.
   */
  export interface Schema$DeliveryControl {
    /**
     * Specified the creative blocking levels to be applied. @OutputOnly
     */
    creativeBlockingLevel?: string;
    /**
     * Specifies how the impression delivery will be paced. @OutputOnly
     */
    deliveryRateType?: string;
    /**
     * Specifies any frequency caps. @OutputOnly
     */
    frequencyCaps?: Schema$FrequencyCap[];
  }
  /**
   * @OutputOnly The reason and details for a disapproval.
   */
  export interface Schema$Disapproval {
    /**
     * Additional details about the reason for disapproval.
     */
    details?: string[];
    /**
     * The categorized reason for disapproval.
     */
    reason?: string;
  }
  /**
   * A generic empty message that you can re-use to avoid defining duplicated
   * empty messages in your APIs. A typical example is to use it as the request
   * or the response type of an API method. For instance:      service Foo { rpc
   * Bar(google.protobuf.Empty) returns (google.protobuf.Empty);     }  The JSON
   * representation for `Empty` is empty JSON object `{}`.
   */
  export interface Schema$Empty {}
  /**
   * The number of filtered bids with the specified dimension values that have
   * the specified creative.
   */
  export interface Schema$FilteredBidCreativeRow {
    /**
     * The number of bids with the specified creative.
     */
    bidCount?: Schema$MetricValue;
    /**
     * The ID of the creative.
     */
    creativeId?: string;
    /**
     * The values of all dimensions associated with metric values in this row.
     */
    rowDimensions?: Schema$RowDimensions;
  }
  /**
   * The number of filtered bids with the specified dimension values, among
   * those filtered due to the requested filtering reason (i.e. creative
   * status), that have the specified detail.
   */
  export interface Schema$FilteredBidDetailRow {
    /**
     * The number of bids with the specified detail.
     */
    bidCount?: Schema$MetricValue;
    /**
     * The ID of the detail. The associated value can be looked up in the
     * dictionary file corresponding to the DetailType in the response message.
     */
    detailId?: number;
    /**
     * The values of all dimensions associated with metric values in this row.
     */
    rowDimensions?: Schema$RowDimensions;
  }
  /**
   * @OutputOnly Filtering reasons for this creative during a period of a single
   * day (from midnight to midnight Pacific).
   */
  export interface Schema$FilteringStats {
    /**
     * The day during which the data was collected. The data is collected from
     * 00:00:00 to 23:59:59 PT. During switches from PST to PDT and back, the
     * day may contain 23 or 25 hours of data instead of the usual 24.
     */
    date?: Schema$Date;
    /**
     * The set of filtering reasons for this date.
     */
    reasons?: Schema$Reason[];
  }
  /**
   * A set of filters that is applied to a request for data. Within a filter
   * set, an AND operation is performed across the filters represented by each
   * field. An OR operation is performed across the filters represented by the
   * multiple values of a repeated field, e.g., &quot;format=VIDEO AND
   * deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)&quot;.
   */
  export interface Schema$FilterSet {
    /**
     * An absolute date range, defined by a start date and an end date.
     * Interpreted relative to Pacific time zone.
     */
    absoluteDateRange?: Schema$AbsoluteDateRange;
    /**
     * The set of dimensions along which to break down the response; may be
     * empty. If multiple dimensions are requested, the breakdown is along the
     * Cartesian product of the requested dimensions.
     */
    breakdownDimensions?: string[];
    /**
     * The ID of the creative on which to filter; optional. This field may be
     * set only for a filter set that accesses account-level troubleshooting
     * data, i.e., one whose name matches the `bidders/x/accounts/x/filterSets/x
     * pattern.
     */
    creativeId?: string;
    /**
     * The ID of the deal on which to filter; optional. This field may be set
     * only for a filter set that accesses account-level troubleshooting data,
     * i.e., one whose name matches the `bidders/x/accounts/x/filterSets/x
     * pattern.
     */
    dealId?: string;
    /**
     * The environment on which to filter; optional.
     */
    environment?: string;
    /**
     * The list of formats on which to filter; may be empty. The filters
     * represented by multiple formats are ORed together (i.e., if non-empty,
     * results must match any one of the formats).
     */
    formats?: string[];
    /**
     * A user-defined name of the filter set. Filter set names must be unique
     * globally and match one of the patterns:  - `bidders/x/filterSets/x (for
     * accessing bidder-level troubleshooting data) -
     * `bidders/x/accounts/x/filterSets/x (for accessing account-level
     * troubleshooting data)  This field is required in create operations.
     */
    name?: string;
    /**
     * The list of platforms on which to filter; may be empty. The filters
     * represented by multiple platforms are ORed together (i.e., if non-empty,
     * results must match any one of the platforms).
     */
    platforms?: string[];
    /**
     * For Open Bidding partners only. The list of publisher identifiers on
     * which to filter; may be empty. The filters represented by multiple
     * publisher identifiers are ORed together.
     */
    publisherIdentifiers?: string[];
    /**
     * An open-ended realtime time range, defined by the aggregation start
     * timestamp.
     */
    realtimeTimeRange?: Schema$RealtimeTimeRange;
    /**
     * A relative date range, defined by an offset from today and a duration.
     * Interpreted relative to Pacific time zone.
     */
    relativeDateRange?: Schema$RelativeDateRange;
    /**
     * For Authorized Buyers only. The list of IDs of the seller (publisher)
     * networks on which to filter; may be empty. The filters represented by
     * multiple seller network IDs are ORed together (i.e., if non-empty,
     * results must match any one of the publisher networks). See
     * [seller-network-ids](https://developers.google.com/authorized-buyers/rtb/downloads/seller-network-ids)
     * file for the set of existing seller network IDs.
     */
    sellerNetworkIds?: number[];
    /**
     * The granularity of time intervals if a time series breakdown is desired;
     * optional.
     */
    timeSeriesGranularity?: string;
  }
  /**
   * Represents a list of targeted and excluded mobile application IDs that
   * publishers own. Mobile application IDs are from App Store and Google Play
   * Store. Android App ID, for example, com.google.android.apps.maps, can be
   * found in Google Play Store URL. iOS App ID (which is a number) can be found
   * at the end of iTunes store URL. First party mobile applications is either
   * included or excluded.
   */
  export interface Schema$FirstPartyMobileApplicationTargeting {
    /**
     * A list of application IDs to be excluded.
     */
    excludedAppIds?: string[];
    /**
     * A list of application IDs to be included.
     */
    targetedAppIds?: string[];
  }
  /**
   * Frequency cap.
   */
  export interface Schema$FrequencyCap {
    /**
     * The maximum number of impressions that can be served to a user within the
     * specified time period.
     */
    maxImpressions?: number;
    /**
     * The amount of time, in the units specified by time_unit_type. Defines the
     * amount of time over which impressions per user are counted and capped.
     */
    numTimeUnits?: number;
    /**
     * The time unit. Along with num_time_units defines the amount of time over
     * which impressions per user are counted and capped.
     */
    timeUnitType?: string;
  }
  /**
   * Terms for Programmatic Guaranteed Deals.
   */
  export interface Schema$GuaranteedFixedPriceTerms {
    /**
     * Fixed price for the specified buyer.
     */
    fixedPrices?: Schema$PricePerBuyer[];
    /**
     * Guaranteed impressions as a percentage. This is the percentage of
     * guaranteed looks that the buyer is guaranteeing to buy.
     */
    guaranteedImpressions?: string;
    /**
     * Count of guaranteed looks. Required for deal, optional for product.
     */
    guaranteedLooks?: string;
    /**
     * Daily minimum looks for CPD deal types.
     */
    minimumDailyLooks?: string;
  }
  /**
   * HTML content for a creative.
   */
  export interface Schema$HtmlContent {
    /**
     * The height of the HTML snippet in pixels.
     */
    height?: number;
    /**
     * The HTML snippet that displays the ad when inserted in the web page.
     */
    snippet?: string;
    /**
     * The width of the HTML snippet in pixels.
     */
    width?: number;
  }
  /**
   * An image resource. You may provide a larger image than was requested, so
   * long as the aspect ratio is preserved.
   */
  export interface Schema$Image {
    /**
     * Image height in pixels.
     */
    height?: number;
    /**
     * The URL of the image.
     */
    url?: string;
    /**
     * Image width in pixels.
     */
    width?: number;
  }
  /**
   * The set of metrics that are measured in numbers of impressions,
   * representing how many impressions with the specified dimension values were
   * considered eligible at each stage of the bidding funnel.
   */
  export interface Schema$ImpressionMetricsRow {
    /**
     * The number of impressions available to the buyer on Ad Exchange. In some
     * cases this value may be unavailable.
     */
    availableImpressions?: Schema$MetricValue;
    /**
     * The number of impressions for which Ad Exchange sent the buyer a bid
     * request.
     */
    bidRequests?: Schema$MetricValue;
    /**
     * The number of impressions that match the buyer&#39;s inventory
     * pretargeting.
     */
    inventoryMatches?: Schema$MetricValue;
    /**
     * The number of impressions for which Ad Exchange received a response from
     * the buyer that contained at least one applicable bid.
     */
    responsesWithBids?: Schema$MetricValue;
    /**
     * The values of all dimensions associated with metric values in this row.
     */
    rowDimensions?: Schema$RowDimensions;
    /**
     * The number of impressions for which the buyer successfully sent a
     * response to Ad Exchange.
     */
    successfulResponses?: Schema$MetricValue;
  }
  /**
   * Represents the size of an ad unit that can be targeted on an ad request. It
   * only applies to Private Auction, AdX Preferred Deals and Auction Packages.
   * This targeting does not apply to Programmatic Guaranteed and Preferred
   * Deals in Ad Manager.
   */
  export interface Schema$InventorySizeTargeting {
    /**
     * A list of inventory sizes to be excluded.
     */
    excludedInventorySizes?: Schema$AdSize[];
    /**
     * A list of inventory sizes to be included.
     */
    targetedInventorySizes?: Schema$AdSize[];
  }
  /**
   * Response message for listing the metrics that are measured in number of
   * bids.
   */
  export interface Schema$ListBidMetricsResponse {
    /**
     * List of rows, each containing a set of bid metrics.
     */
    bidMetricsRows?: Schema$BidMetricsRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListBidMetricsRequest.pageToken field in the subsequent call to the
     * bidMetrics.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing all reasons that bid responses resulted in an
   * error.
   */
  export interface Schema$ListBidResponseErrorsResponse {
    /**
     * List of rows, with counts of bid responses aggregated by callout status.
     */
    calloutStatusRows?: Schema$CalloutStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListBidResponseErrorsRequest.pageToken field in the subsequent call to
     * the bidResponseErrors.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing all reasons that bid responses were considered
   * to have no applicable bids.
   */
  export interface Schema$ListBidResponsesWithoutBidsResponse {
    /**
     * List of rows, with counts of bid responses without bids aggregated by
     * status.
     */
    bidResponseWithoutBidsStatusRows?: Schema$BidResponseWithoutBidsStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListBidResponsesWithoutBidsRequest.pageToken field in the subsequent call
     * to the bidResponsesWithoutBids.list method to retrieve the next page of
     * results.
     */
    nextPageToken?: string;
  }
  export interface Schema$ListClientsResponse {
    /**
     * The returned list of clients.
     */
    clients?: Schema$Client[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListClientsRequest.pageToken field in the subsequent call to the
     * accounts.clients.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  export interface Schema$ListClientUserInvitationsResponse {
    /**
     * The returned list of client users.
     */
    invitations?: Schema$ClientUserInvitation[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListClientUserInvitationsRequest.pageToken field in the subsequent call
     * to the clients.invitations.list method to retrieve the next page of
     * results.
     */
    nextPageToken?: string;
  }
  export interface Schema$ListClientUsersResponse {
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListClientUsersRequest.pageToken field in the subsequent call to the
     * clients.invitations.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
    /**
     * The returned list of client users.
     */
    users?: Schema$ClientUser[];
  }
  /**
   * A response for listing creatives.
   */
  export interface Schema$ListCreativesResponse {
    /**
     * The list of creatives.
     */
    creatives?: Schema$Creative[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListCreativesRequest.page_token field in the subsequent call to
     * `ListCreatives` method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing all creatives associated with a given filtered
   * bid reason.
   */
  export interface Schema$ListCreativeStatusBreakdownByCreativeResponse {
    /**
     * List of rows, with counts of bids with a given creative status aggregated
     * by creative.
     */
    filteredBidCreativeRows?: Schema$FilteredBidCreativeRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListCreativeStatusBreakdownByCreativeRequest.pageToken field in the
     * subsequent call to the filteredBids.creatives.list method to retrieve the
     * next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing all details associated with a given filtered
   * bid reason.
   */
  export interface Schema$ListCreativeStatusBreakdownByDetailResponse {
    /**
     * The type of detail that the detail IDs represent.
     */
    detailType?: string;
    /**
     * List of rows, with counts of bids with a given creative status aggregated
     * by detail.
     */
    filteredBidDetailRows?: Schema$FilteredBidDetailRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListCreativeStatusBreakdownByDetailRequest.pageToken field in the
     * subsequent call to the filteredBids.details.list method to retrieve the
     * next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * A response for listing creative and deal associations
   */
  export interface Schema$ListDealAssociationsResponse {
    /**
     * The list of associations.
     */
    associations?: Schema$CreativeDealAssociation[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListDealAssociationsRequest.page_token field in the subsequent call to
     * &#39;ListDealAssociation&#39; method to retrieve the next page of
     * results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing all reasons that bid requests were filtered
   * and not sent to the buyer.
   */
  export interface Schema$ListFilteredBidRequestsResponse {
    /**
     * List of rows, with counts of filtered bid requests aggregated by callout
     * status.
     */
    calloutStatusRows?: Schema$CalloutStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListFilteredBidRequestsRequest.pageToken field in the subsequent call to
     * the filteredBidRequests.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing all reasons that bids were filtered from the
   * auction.
   */
  export interface Schema$ListFilteredBidsResponse {
    /**
     * List of rows, with counts of filtered bids aggregated by filtering reason
     * (i.e. creative status).
     */
    creativeStatusRows?: Schema$CreativeStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListFilteredBidsRequest.pageToken field in the subsequent call to the
     * filteredBids.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing filter sets.
   */
  export interface Schema$ListFilterSetsResponse {
    /**
     * The filter sets belonging to the buyer.
     */
    filterSets?: Schema$FilterSet[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListFilterSetsRequest.pageToken field in the subsequent call to the
     * accounts.filterSets.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing the metrics that are measured in number of
   * impressions.
   */
  export interface Schema$ListImpressionMetricsResponse {
    /**
     * List of rows, each containing a set of impression metrics.
     */
    impressionMetricsRows?: Schema$ImpressionMetricsRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListImpressionMetricsRequest.pageToken field in the subsequent call to
     * the impressionMetrics.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing all reasons that bids lost in the auction.
   */
  export interface Schema$ListLosingBidsResponse {
    /**
     * List of rows, with counts of losing bids aggregated by loss reason (i.e.
     * creative status).
     */
    creativeStatusRows?: Schema$CreativeStatusRow[];
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListLosingBidsRequest.pageToken field in the subsequent call to the
     * losingBids.list method to retrieve the next page of results.
     */
    nextPageToken?: string;
  }
  /**
   * Response message for listing all reasons for which a buyer was not billed
   * for a winning bid.
   */
  export interface Schema$ListNonBillableWinningBidsResponse {
    /**
     * A token to retrieve the next page of results. Pass this value in the
     * ListNonBillableWinningBidsRequest.pageToken field in the subsequent call
     * to the nonBillableWinningBids.list method to retrieve the next page of
     * results.
     */
    nextPageToken?: string;
    /**
     * List of rows, with counts of bids not billed aggregated by reason.
     */
    nonBillableWinningBidStatusRows?: Schema$NonBillableWinningBidStatusRow[];
  }
  /**
   * Response message for listing products visible to the buyer.
   */
  export interface Schema$ListProductsResponse {
    /**
     * List pagination support.
     */
    nextPageToken?: string;
    /**
     * The list of matching products at their head revision number.
     */
    products?: Schema$Product[];
  }
  /**
   * Response message for listing proposals.
   */
  export interface Schema$ListProposalsResponse {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of proposals.
     */
    proposals?: Schema$Proposal[];
  }
  /**
   * Response message for profiles visible to the buyer.
   */
  export interface Schema$ListPublisherProfilesResponse {
    /**
     * List pagination support
     */
    nextPageToken?: string;
    /**
     * The list of matching publisher profiles.
     */
    publisherProfiles?: Schema$PublisherProfile[];
  }
  /**
   * @OutputOnly The Geo criteria the restriction applies to.
   */
  export interface Schema$LocationContext {
    /**
     * IDs representing the geo location for this context. Please refer to the
     * [geo-table.csv](https://storage.googleapis.com/adx-rtb-dictionaries/geo-table.csv)
     * file for different geo criteria IDs.
     */
    geoCriteriaIds?: number[];
  }
  /**
   * Targeting represents different criteria that can be used by advertisers to
   * target ad inventory. For example, they can choose to target ad requests
   * only if the user is in the US. Multiple types of targeting are always
   * applied as a logical AND, unless noted otherwise.
   */
  export interface Schema$MarketplaceTargeting {
    /**
     * Geo criteria IDs to be included/excluded.
     */
    geoTargeting?: Schema$CriteriaTargeting;
    /**
     * Inventory sizes to be included/excluded.
     */
    inventorySizeTargeting?: Schema$InventorySizeTargeting;
    /**
     * Placement targeting information, e.g., URL, mobile applications.
     */
    placementTargeting?: Schema$PlacementTargeting;
    /**
     * Technology targeting information, e.g., operating system, device
     * category.
     */
    technologyTargeting?: Schema$TechnologyTargeting;
    /**
     * Video targeting information.
     */
    videoTargeting?: Schema$VideoTargeting;
  }
  /**
   * A metric value, with an expected value and a variance; represents a count
   * that may be either exact or estimated (i.e. when sampled).
   */
  export interface Schema$MetricValue {
    /**
     * The expected value of the metric.
     */
    value?: string;
    /**
     * The variance (i.e. square of the standard deviation) of the metric value.
     * If value is exact, variance is 0. Can be used to calculate margin of
     * error as a percentage of value, using the following formula, where Z is
     * the standard constant that depends on the desired size of the confidence
     * interval (e.g. for 90% confidence interval, use Z = 1.645): marginOfError
     * = 100 * Z * sqrt(variance) / value
     */
    variance?: string;
  }
  /**
   * Mobile application targeting settings.
   */
  export interface Schema$MobileApplicationTargeting {
    /**
     * Publisher owned apps to be targeted or excluded by the publisher to
     * display the ads in.
     */
    firstPartyTargeting?: Schema$FirstPartyMobileApplicationTargeting;
  }
  /**
   * Represents an amount of money with its currency type.
   */
  export interface Schema$Money {
    /**
     * The 3-letter currency code defined in ISO 4217.
     */
    currencyCode?: string;
    /**
     * Number of nano (10^-9) units of the amount. The value must be between
     * -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos`
     * must be positive or zero. If `units` is zero, `nanos` can be positive,
     * zero, or negative. If `units` is negative, `nanos` must be negative or
     * zero. For example $-1.75 is represented as `units`=-1 and
     * `nanos`=-750,000,000.
     */
    nanos?: number;
    /**
     * The whole units of the amount. For example if `currencyCode` is
     * `&quot;USD&quot;`, then 1 unit is one US dollar.
     */
    units?: string;
  }
  /**
   * Native content for a creative.
   */
  export interface Schema$NativeContent {
    /**
     * The name of the advertiser or sponsor, to be displayed in the ad
     * creative.
     */
    advertiserName?: string;
    /**
     * The app icon, for app download ads.
     */
    appIcon?: Schema$Image;
    /**
     * A long description of the ad.
     */
    body?: string;
    /**
     * A label for the button that the user is supposed to click.
     */
    callToAction?: string;
    /**
     * The URL that the browser/SDK will load when the user clicks the ad.
     */
    clickLinkUrl?: string;
    /**
     * The URL to use for click tracking.
     */
    clickTrackingUrl?: string;
    /**
     * A short title for the ad.
     */
    headline?: string;
    /**
     * A large image.
     */
    image?: Schema$Image;
    /**
     * A smaller image, for the advertiser&#39;s logo.
     */
    logo?: Schema$Image;
    /**
     * The price of the promoted app including currency info.
     */
    priceDisplayText?: string;
    /**
     * The app rating in the app store. Must be in the range [0-5].
     */
    starRating?: number;
    /**
     * The URL to the app store to purchase/download the promoted app.
     */
    storeUrl?: string;
    /**
     * The URL to fetch a native video ad.
     */
    videoUrl?: string;
  }
  /**
   * The number of winning bids with the specified dimension values for which
   * the buyer was not billed, as described by the specified status.
   */
  export interface Schema$NonBillableWinningBidStatusRow {
    /**
     * The number of bids with the specified status.
     */
    bidCount?: Schema$MetricValue;
    /**
     * The values of all dimensions associated with metric values in this row.
     */
    rowDimensions?: Schema$RowDimensions;
    /**
     * The status specifying why the winning bids were not billed.
     */
    status?: string;
  }
  /**
   * Terms for Private Auctions. Note that Private Auctions can be created only
   * by the seller, but they can be returned in a get or list request.
   */
  export interface Schema$NonGuaranteedAuctionTerms {
    /**
     * True if open auction buyers are allowed to compete with invited buyers in
     * this private auction.
     */
    autoOptimizePrivateAuction?: boolean;
    /**
     * Reserve price for the specified buyer.
     */
    reservePricesPerBuyer?: Schema$PricePerBuyer[];
  }
  /**
   * Terms for Preferred Deals. Note that Preferred Deals cannot be created via
   * the API at this time, but can be returned in a get or list request.
   */
  export interface Schema$NonGuaranteedFixedPriceTerms {
    /**
     * Fixed price for the specified buyer.
     */
    fixedPrices?: Schema$PricePerBuyer[];
  }
  /**
   * A proposal may be associated to several notes.
   */
  export interface Schema$Note {
    /**
     * The timestamp for when this note was created. @OutputOnly
     */
    createTime?: string;
    /**
     * The role of the person (buyer/seller) creating the note. @OutputOnly
     */
    creatorRole?: string;
    /**
     * The actual note to attach. (max-length: 1024 unicode code units)  Note:
     * This field may be set only when creating the resource. Modifying this
     * field while updating the resource will result in an error.
     */
    note?: string;
    /**
     * The unique ID for the note. @OutputOnly
     */
    noteId?: string;
    /**
     * The revision number of the proposal when the note is created. @OutputOnly
     */
    proposalRevision?: string;
  }
  /**
   * Represents targeting information for operating systems.
   */
  export interface Schema$OperatingSystemTargeting {
    /**
     * IDs of operating systems to be included/excluded.
     */
    operatingSystemCriteria?: Schema$CriteriaTargeting;
    /**
     * IDs of operating system versions to be included/excluded.
     */
    operatingSystemVersionCriteria?: Schema$CriteriaTargeting;
  }
  /**
   * Request message to pause serving for an already-finalized proposal.
   */
  export interface Schema$PauseProposalRequest {
    /**
     * The reason why the proposal is being paused. This human readable message
     * will be displayed in the seller&#39;s UI. (Max length: 100 unicode code
     * units.)
     */
    reason?: string;
  }
  /**
   * Represents targeting about where the ads can appear, e.g., certain sites or
   * mobile applications. Different placement targeting types will be logically
   * OR&#39;ed.
   */
  export interface Schema$PlacementTargeting {
    /**
     * Mobile application targeting information in a deal. This doesn&#39;t
     * apply to Auction Packages.
     */
    mobileApplicationTargeting?: Schema$MobileApplicationTargeting;
    /**
     * URLs to be included/excluded.
     */
    urlTargeting?: Schema$UrlTargeting;
  }
  /**
   * @OutputOnly The type of platform the restriction applies to.
   */
  export interface Schema$PlatformContext {
    /**
     * The platforms this restriction applies to.
     */
    platforms?: string[];
  }
  /**
   * Represents a price and a pricing type for a product / deal.
   */
  export interface Schema$Price {
    /**
     * The actual price with currency specified.
     */
    amount?: Schema$Money;
    /**
     * The pricing type for the deal/product. (default: CPM)
     */
    pricingType?: string;
  }
  /**
   * Used to specify pricing rules for buyers/advertisers. Each PricePerBuyer in
   * a product can become 0 or 1 deals. To check if there is a PricePerBuyer for
   * a particular buyer or buyer/advertiser pair, we look for the most specific
   * matching rule - we first look for a rule matching the buyer and advertiser,
   * next a rule with the buyer but an empty advertiser list, and otherwise look
   * for a matching rule where no buyer is set.
   */
  export interface Schema$PricePerBuyer {
    /**
     * The list of advertisers for this price when associated with this buyer.
     * If empty, all advertisers with this buyer pay this price.
     */
    advertiserIds?: string[];
    /**
     * The buyer who will pay this price. If unset, all buyers can pay this
     * price (if the advertisers match, and there&#39;s no more specific rule
     * matching the buyer).
     */
    buyer?: Schema$Buyer;
    /**
     * The specified price.
     */
    price?: Schema$Price;
  }
  /**
   * Buyers are allowed to store certain types of private data in a
   * proposal/deal.
   */
  export interface Schema$PrivateData {
    /**
     * A buyer or seller specified reference ID. This can be queried in the list
     * operations (max-length: 1024 unicode code units).
     */
    referenceId?: string;
  }
  /**
   * Note: this resource requires whitelisting for access. Please contact your
   * account manager for access to Marketplace resources.  A product is a
   * segment of inventory that a seller wishes to sell. It is associated with
   * certain terms and targeting information which helps the buyer know more
   * about the inventory.
   */
  export interface Schema$Product {
    /**
     * The proposed end time for the deal. The field will be truncated to the
     * order of seconds during serving.
     */
    availableEndTime?: string;
    /**
     * Inventory availability dates. The start time will be truncated to seconds
     * during serving. Thus, a field specified as 3:23:34.456 (HH:mm:ss.SSS)
     * will be truncated to 3:23:34 when serving.
     */
    availableStartTime?: string;
    /**
     * Creation time.
     */
    createTime?: string;
    /**
     * Optional contact information for the creator of this product.
     */
    creatorContacts?: Schema$ContactInformation[];
    /**
     * The display name for this product as set by the seller.
     */
    displayName?: string;
    /**
     * If the creator has already signed off on the product, then the buyer can
     * finalize the deal by accepting the product as is. When copying to a
     * proposal, if any of the terms are changed, then auto_finalize is
     * automatically set to false.
     */
    hasCreatorSignedOff?: boolean;
    /**
     * The unique ID for the product.
     */
    productId?: string;
    /**
     * The revision number of the product (auto-assigned by Marketplace).
     */
    productRevision?: string;
    /**
     * An ID which can be used by the Publisher Profile API to get more
     * information about the seller that created this product.
     */
    publisherProfileId?: string;
    /**
     * Information about the seller that created this product.
     */
    seller?: Schema$Seller;
    /**
     * The syndication product associated with the deal.
     */
    syndicationProduct?: string;
    /**
     * Targeting that is shared between the buyer and the seller. Each targeting
     * criterion has a specified key and for each key there is a list of
     * inclusion value or exclusion values.
     */
    targetingCriterion?: Schema$TargetingCriteria[];
    /**
     * The negotiable terms of the deal.
     */
    terms?: Schema$DealTerms;
    /**
     * Time of last update.
     */
    updateTime?: string;
    /**
     * The web-property code for the seller. This needs to be copied as is when
     * adding a new deal to a proposal.
     */
    webPropertyCode?: string;
  }
  /**
   * Note: this resource requires whitelisting for access. Please contact your
   * account manager for access to Marketplace resources.  Represents a proposal
   * in the Marketplace. A proposal is the unit of negotiation between a seller
   * and a buyer and contains deals which are served.  Note: you can not update,
   * create, or otherwise modify Private Auction or Preferred Deals deals
   * through the API.  Fields are updatable unless noted otherwise.
   */
  export interface Schema$Proposal {
    /**
     * Reference to the buyer that will get billed for this proposal.
     * @OutputOnly
     */
    billedBuyer?: Schema$Buyer;
    /**
     * Reference to the buyer on the proposal.  Note: This field may be set only
     * when creating the resource. Modifying this field while updating the
     * resource will result in an error.
     */
    buyer?: Schema$Buyer;
    /**
     * Contact information for the buyer.
     */
    buyerContacts?: Schema$ContactInformation[];
    /**
     * Private data for buyer. (hidden from seller).
     */
    buyerPrivateData?: Schema$PrivateData;
    /**
     * The deals associated with this proposal. For Private Auction proposals
     * (whose deals have NonGuaranteedAuctionTerms), there will only be one
     * deal.
     */
    deals?: Schema$Deal[];
    /**
     * The name for the proposal.
     */
    displayName?: string;
    /**
     * True if the proposal is being renegotiated. @OutputOnly
     */
    isRenegotiating?: boolean;
    /**
     * True, if the buyside inventory setup is complete for this proposal.
     * @OutputOnly
     */
    isSetupComplete?: boolean;
    /**
     * The role of the last user that either updated the proposal or left a
     * comment. @OutputOnly
     */
    lastUpdaterOrCommentorRole?: string;
    /**
     * The notes associated with this proposal. @OutputOnly
     */
    notes?: Schema$Note[];
    /**
     * Indicates whether the buyer/seller created the proposal. @OutputOnly
     */
    originatorRole?: string;
    /**
     * Private auction ID if this proposal is a private auction proposal.
     * @OutputOnly
     */
    privateAuctionId?: string;
    /**
     * The unique ID of the proposal. @OutputOnly
     */
    proposalId?: string;
    /**
     * The revision number for the proposal. Each update to the proposal or the
     * deal causes the proposal revision number to auto-increment. The buyer
     * keeps track of the last revision number they know of and pass it in when
     * making an update. If the head revision number on the server has since
     * incremented, then an ABORTED error is returned during the update
     * operation to let the buyer know that a subsequent update was made.
     * @OutputOnly
     */
    proposalRevision?: string;
    /**
     * The current state of the proposal. @OutputOnly
     */
    proposalState?: string;
    /**
     * Reference to the seller on the proposal.  Note: This field may be set
     * only when creating the resource. Modifying this field while updating the
     * resource will result in an error.
     */
    seller?: Schema$Seller;
    /**
     * Contact information for the seller. @OutputOnly
     */
    sellerContacts?: Schema$ContactInformation[];
    /**
     * The time when the proposal was last revised. @OutputOnly
     */
    updateTime?: string;
  }
  /**
   * Note: this resource requires whitelisting for access. Please contact your
   * account manager for access to Marketplace resources.  Represents a
   * publisher profile in Marketplace.  All fields are read only. All string
   * fields are free-form text entered by the publisher unless noted otherwise.
   */
  export interface Schema$PublisherProfile {
    /**
     * Description on the publisher&#39;s audience.
     */
    audienceDescription?: string;
    /**
     * Statement explaining what&#39;s unique about publisher&#39;s business,
     * and why buyers should partner with the publisher.
     */
    buyerPitchStatement?: string;
    /**
     * Contact information for direct reservation deals. This is free text
     * entered by the publisher and may include information like names, phone
     * numbers and email addresses.
     */
    directDealsContact?: string;
    /**
     * Name of the publisher profile.
     */
    displayName?: string;
    /**
     * The list of domains represented in this publisher profile. Empty if this
     * is a parent profile. These are top private domains, meaning that these
     * will not contain a string like &quot;photos.google.co.uk/123&quot;, but
     * will instead contain &quot;google.co.uk&quot;.
     */
    domains?: string[];
    /**
     * URL to publisher&#39;s Google+ page.
     */
    googlePlusUrl?: string;
    /**
     * A Google public URL to the logo for this publisher profile. The logo is
     * stored as a PNG, JPG, or GIF image.
     */
    logoUrl?: string;
    /**
     * URL to additional marketing and sales materials.
     */
    mediaKitUrl?: string;
    /**
     * Overview of the publisher.
     */
    overview?: string;
    /**
     * Contact information for programmatic deals. This is free text entered by
     * the publisher and may include information like names, phone numbers and
     * email addresses.
     */
    programmaticDealsContact?: string;
    /**
     * Unique ID for publisher profile.
     */
    publisherProfileId?: string;
    /**
     * URL to a publisher rate card.
     */
    rateCardInfoUrl?: string;
    /**
     * URL to a sample content page.
     */
    samplePageUrl?: string;
    /**
     * Seller of the publisher profile.
     */
    seller?: Schema$Seller;
    /**
     * Up to three key metrics and rankings. Max 100 characters each. For
     * example &quot;#1 Mobile News Site for 20 Straight Months&quot;.
     */
    topHeadlines?: string[];
  }
  /**
   * An open-ended realtime time range specified by the start timestamp. For
   * filter sets that specify a realtime time range RTB metrics continue to be
   * aggregated throughout the lifetime of the filter set.
   */
  export interface Schema$RealtimeTimeRange {
    /**
     * The start timestamp of the real-time RTB metrics aggregation.
     */
    startTimestamp?: string;
  }
  /**
   * A specific filtering status and how many times it occurred.
   */
  export interface Schema$Reason {
    /**
     * The number of times the creative was filtered for the status. The count
     * is aggregated across all publishers on the exchange.
     */
    count?: string;
    /**
     * The filtering status code. Please refer to the
     * [creative-status-codes.txt](https://storage.googleapis.com/adx-rtb-dictionaries/creative-status-codes.txt)
     * file for different statuses.
     */
    status?: number;
  }
  /**
   * A relative date range, specified by an offset and a duration. The supported
   * range of dates begins 30 days before today and ends today, i.e., the limits
   * for these values are: offset_days &gt;= 0 duration_days &gt;= 1 offset_days
   * + duration_days &lt;= 30
   */
  export interface Schema$RelativeDateRange {
    /**
     * The number of days in the requested date range, e.g., for a range
     * spanning today: 1. For a range spanning the last 7 days: 7.
     */
    durationDays?: number;
    /**
     * The end date of the filter set, specified as the number of days before
     * today, e.g., for a range where the last date is today: 0.
     */
    offsetDays?: number;
  }
  /**
   * A request for removing the association between a deal and a creative.
   */
  export interface Schema$RemoveDealAssociationRequest {
    /**
     * The association between a creative and a deal that should be removed.
     */
    association?: Schema$CreativeDealAssociation;
  }
  /**
   * Request message to resume (unpause) serving for an already-finalized
   * proposal.
   */
  export interface Schema$ResumeProposalRequest {}
  /**
   * A response may include multiple rows, breaking down along various
   * dimensions. Encapsulates the values of all dimensions for a given row.
   */
  export interface Schema$RowDimensions {
    /**
     * The publisher identifier for this row, if a breakdown by
     * BreakdownDimension.PUBLISHER_IDENTIFIER was requested.
     */
    publisherIdentifier?: string;
    /**
     * The time interval that this row represents.
     */
    timeInterval?: Schema$TimeInterval;
  }
  /**
   * @OutputOnly A security context.
   */
  export interface Schema$SecurityContext {
    /**
     * The security types in this context.
     */
    securities?: string[];
  }
  /**
   * Represents a seller of inventory. Each seller is identified by a unique Ad
   * Manager account ID.
   */
  export interface Schema$Seller {
    /**
     * The unique ID for the seller. The seller fills in this field. The seller
     * account ID is then available to buyer in the product.
     */
    accountId?: string;
    /**
     * Optional sub-account ID for the seller.
     */
    subAccountId?: string;
  }
  /**
   * The serving context for this restriction.
   */
  export interface Schema$ServingContext {
    /**
     * Matches all contexts.
     */
    all?: string;
    /**
     * Matches impressions for a particular app type.
     */
    appType?: Schema$AppContext;
    /**
     * Matches impressions for a particular auction type.
     */
    auctionType?: Schema$AuctionContext;
    /**
     * Matches impressions coming from users *or* publishers in a specific
     * location.
     */
    location?: Schema$LocationContext;
    /**
     * Matches impressions coming from a particular platform.
     */
    platform?: Schema$PlatformContext;
    /**
     * Matches impressions for a particular security type.
     */
    securityType?: Schema$SecurityContext;
  }
  /**
   * @OutputOnly A representation of the status of an ad in a specific context.
   * A context here relates to where something ultimately serves (for example, a
   * user or publisher geo, a platform, an HTTPS vs HTTP request, or the type of
   * auction).
   */
  export interface Schema$ServingRestriction {
    /**
     * The contexts for the restriction.
     */
    contexts?: Schema$ServingContext[];
    /**
     * Disapproval bound to this restriction. Only present if
     * status=DISAPPROVED. Can be used to filter the response of the
     * creatives.list method.
     */
    disapproval?: Schema$Disapproval;
    /**
     * Any disapprovals bound to this restriction. Only present if
     * status=DISAPPROVED. Can be used to filter the response of the
     * creatives.list method. Deprecated; please use disapproval field instead.
     */
    disapprovalReasons?: Schema$Disapproval[];
    /**
     * The status of the creative in this context (for example, it has been
     * explicitly disapproved or is pending review).
     */
    status?: string;
  }
  /**
   * Message depicting the size of the creative. The units of width and height
   * depend on the type of the targeting.
   */
  export interface Schema$Size {
    /**
     * The height of the creative.
     */
    height?: number;
    /**
     * The width of the creative
     */
    width?: number;
  }
  /**
   * A request for stopping notifications for changes to creative Status.
   */
  export interface Schema$StopWatchingCreativeRequest {}
  /**
   * Advertisers can target different attributes of an ad slot. For example,
   * they can choose to show ads only if the user is in the U.S. Such targeting
   * criteria can be specified as part of Shared Targeting.
   */
  export interface Schema$TargetingCriteria {
    /**
     * The list of values to exclude from targeting. Each value is AND&#39;d
     * together.
     */
    exclusions?: Schema$TargetingValue[];
    /**
     * The list of value to include as part of the targeting. Each value is
     * OR&#39;d together.
     */
    inclusions?: Schema$TargetingValue[];
    /**
     * The key representing the shared targeting criterion. Targeting criteria
     * defined by Google ad servers will begin with GOOG_. Third parties may
     * define their own keys. A list of permissible keys along with the
     * acceptable values will be provided as part of the external documentation.
     */
    key?: string;
  }
  /**
   * A polymorphic targeting value used as part of Shared Targeting.
   */
  export interface Schema$TargetingValue {
    /**
     * The creative size value to include/exclude. Filled in when key =
     * GOOG_CREATIVE_SIZE
     */
    creativeSizeValue?: Schema$CreativeSize;
    /**
     * The daypart targeting to include / exclude. Filled in when the key is
     * GOOG_DAYPART_TARGETING. The definition of this targeting is derived from
     * the structure used by Ad Manager.
     */
    dayPartTargetingValue?: Schema$DayPartTargeting;
    /**
     * The long value to include/exclude.
     */
    longValue?: string;
    /**
     * The string value to include/exclude.
     */
    stringValue?: string;
  }
  /**
   * Represents targeting about various types of technology.
   */
  export interface Schema$TechnologyTargeting {
    /**
     * IDs of device capabilities to be included/excluded.
     */
    deviceCapabilityTargeting?: Schema$CriteriaTargeting;
    /**
     * IDs of device categories to be included/excluded.
     */
    deviceCategoryTargeting?: Schema$CriteriaTargeting;
    /**
     * Operating system related targeting information.
     */
    operatingSystemTargeting?: Schema$OperatingSystemTargeting;
  }
  /**
   * An interval of time, with an absolute start and end.
   */
  export interface Schema$TimeInterval {
    /**
     * The timestamp marking the end of the range (exclusive) for which data is
     * included.
     */
    endTime?: string;
    /**
     * The timestamp marking the start of the range (inclusive) for which data
     * is included.
     */
    startTime?: string;
  }
  /**
   * Represents a time of day. The date and time zone are either not significant
   * or are specified elsewhere. An API may choose to allow leap seconds.
   * Related types are google.type.Date and `google.protobuf.Timestamp`.
   */
  export interface Schema$TimeOfDay {
    /**
     * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
     * to allow the value &quot;24:00:00&quot; for scenarios like business
     * closing time.
     */
    hours?: number;
    /**
     * Minutes of hour of day. Must be from 0 to 59.
     */
    minutes?: number;
    /**
     * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
     */
    nanos?: number;
    /**
     * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
     * allow the value 60 if it allows leap-seconds.
     */
    seconds?: number;
  }
  /**
   * Represents a list of targeted and excluded URLs (e.g., google.com). For
   * Private Auction and AdX Preferred Deals, URLs are either included or
   * excluded. For Programmatic Guaranteed and Preferred Deals, this doesn&#39;t
   * apply.
   */
  export interface Schema$UrlTargeting {
    /**
     * A list of URLs to be excluded.
     */
    excludedUrls?: string[];
    /**
     * A list of URLs to be included.
     */
    targetedUrls?: string[];
  }
  /**
   * Video content for a creative.
   */
  export interface Schema$VideoContent {
    /**
     * The URL to fetch a video ad.
     */
    videoUrl?: string;
    /**
     * The contents of a VAST document for a video ad. This document should
     * conform to the VAST 2.0 or 3.0 standard.
     */
    videoVastXml?: string;
  }
  /**
   * Represents targeting information about video.
   */
  export interface Schema$VideoTargeting {
    /**
     * A list of video positions to be excluded. Position types can either be
     * included or excluded (XOR).
     */
    excludedPositionTypes?: string[];
    /**
     * A list of video positions to be included. When the included list is
     * present, the excluded list must be empty. When the excluded list is
     * present, the included list must be empty.
     */
    targetedPositionTypes?: string[];
  }
  /**
   * A request for watching changes to creative Status.
   */
  export interface Schema$WatchCreativeRequest {
    /**
     * The Pub/Sub topic to publish notifications to. This topic must already
     * exist and must give permission to ad-exchange-buyside-reports@google.com
     * to write to the topic. This should be the full resource name in
     * &quot;projects/{project_id}/topics/{topic_id}&quot; format.
     */
    topic?: string;
  }


  export class Resource$Accounts {
    root: Adexchangebuyer2;
    clients: Resource$Accounts$Clients;
    creatives: Resource$Accounts$Creatives;
    finalizedProposals: Resource$Accounts$Finalizedproposals;
    products: Resource$Accounts$Products;
    proposals: Resource$Accounts$Proposals;
    publisherProfiles: Resource$Accounts$Publisherprofiles;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.clients = new Resource$Accounts$Clients(root);
      this.creatives = new Resource$Accounts$Creatives(root);
      this.finalizedProposals = new Resource$Accounts$Finalizedproposals(root);
      this.products = new Resource$Accounts$Products(root);
      this.proposals = new Resource$Accounts$Proposals(root);
      this.publisherProfiles = new Resource$Accounts$Publisherprofiles(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Accounts$Clients {
    root: Adexchangebuyer2;
    invitations: Resource$Accounts$Clients$Invitations;
    users: Resource$Accounts$Clients$Users;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.invitations = new Resource$Accounts$Clients$Invitations(root);
      this.users = new Resource$Accounts$Clients$Users(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.clients.create
     * @desc Creates a new client buyer.
     * @alias adexchangebuyer2.accounts.clients.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
     * @param {().Client} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Accounts$Clients$Create,
        options?: MethodOptions): AxiosPromise<Schema$Client>;
    create(
        params: Params$Resource$Accounts$Clients$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Client>,
        callback: BodyResponseCallback<Schema$Client>): void;
    create(
        params: Params$Resource$Accounts$Clients$Create,
        callback: BodyResponseCallback<Schema$Client>): void;
    create(callback: BodyResponseCallback<Schema$Client>): void;
    create(
        paramsOrCallback?: Params$Resource$Accounts$Clients$Create|
        BodyResponseCallback<Schema$Client>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Client>,
        callback?: BodyResponseCallback<Schema$Client>):
        void|AxiosPromise<Schema$Client> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Clients$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Client>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Client>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.clients.get
     * @desc Gets a client buyer with a given client account ID.
     * @alias adexchangebuyer2.accounts.clients.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId Numerical account ID of the client buyer to retrieve. (required)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Accounts$Clients$Get,
        options?: MethodOptions): AxiosPromise<Schema$Client>;
    get(params: Params$Resource$Accounts$Clients$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Client>,
        callback: BodyResponseCallback<Schema$Client>): void;
    get(params: Params$Resource$Accounts$Clients$Get,
        callback: BodyResponseCallback<Schema$Client>): void;
    get(callback: BodyResponseCallback<Schema$Client>): void;
    get(paramsOrCallback?: Params$Resource$Accounts$Clients$Get|
        BodyResponseCallback<Schema$Client>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Client>,
        callback?: BodyResponseCallback<Schema$Client>):
        void|AxiosPromise<Schema$Client> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Clients$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'clientAccountId'],
        pathParams: ['accountId', 'clientAccountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Client>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Client>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.clients.list
     * @desc Lists all the clients for the current sponsor buyer.
     * @alias adexchangebuyer2.accounts.clients.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Unique numerical account ID of the sponsor buyer to list the clients for.
     * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
     * @param {string=} params.partnerClientId Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Clients$List,
        options?: MethodOptions): AxiosPromise<Schema$ListClientsResponse>;
    list(
        params: Params$Resource$Accounts$Clients$List,
        options: MethodOptions|BodyResponseCallback<Schema$ListClientsResponse>,
        callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
    list(
        params: Params$Resource$Accounts$Clients$List,
        callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListClientsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$Clients$List|
        BodyResponseCallback<Schema$ListClientsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListClientsResponse>,
        callback?: BodyResponseCallback<Schema$ListClientsResponse>):
        void|AxiosPromise<Schema$ListClientsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Clients$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/accounts/{accountId}/clients')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListClientsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListClientsResponse>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.clients.update
     * @desc Updates an existing client buyer.
     * @alias adexchangebuyer2.accounts.clients.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
     * @param {string} params.clientAccountId Unique numerical account ID of the client to update. (required)
     * @param {().Client} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Accounts$Clients$Update,
        options?: MethodOptions): AxiosPromise<Schema$Client>;
    update(
        params: Params$Resource$Accounts$Clients$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Client>,
        callback: BodyResponseCallback<Schema$Client>): void;
    update(
        params: Params$Resource$Accounts$Clients$Update,
        callback: BodyResponseCallback<Schema$Client>): void;
    update(callback: BodyResponseCallback<Schema$Client>): void;
    update(
        paramsOrCallback?: Params$Resource$Accounts$Clients$Update|
        BodyResponseCallback<Schema$Client>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Client>,
        callback?: BodyResponseCallback<Schema$Client>):
        void|AxiosPromise<Schema$Client> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Clients$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/accounts/{accountId}/clients/{clientAccountId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['accountId', 'clientAccountId'],
        pathParams: ['accountId', 'clientAccountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Client>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Client>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Clients$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique numerical account ID for the buyer of which the client buyer is a
     * customer; the sponsor buyer to create a client for. (required)
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Client;
  }
  export interface Params$Resource$Accounts$Clients$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Numerical account ID of the client's sponsor buyer. (required)
     */
    accountId?: string;
    /**
     * Numerical account ID of the client buyer to retrieve. (required)
     */
    clientAccountId?: string;
  }
  export interface Params$Resource$Accounts$Clients$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique numerical account ID of the sponsor buyer to list the clients for.
     */
    accountId?: string;
    /**
     * Requested page size. The server may return fewer clients than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListClientsResponse.nextPageToken
     * returned from the previous call to the accounts.clients.list method.
     */
    pageToken?: string;
    /**
     * Optional unique identifier (from the standpoint of an Ad Exchange sponsor
     * buyer partner) of the client to return. If specified, at most one client
     * will be returned in the response.
     */
    partnerClientId?: string;
  }
  export interface Params$Resource$Accounts$Clients$Update extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Unique numerical account ID for the buyer of which the client buyer is a
     * customer; the sponsor buyer to update a client for. (required)
     */
    accountId?: string;
    /**
     * Unique numerical account ID of the client to update. (required)
     */
    clientAccountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Client;
  }

  export class Resource$Accounts$Clients$Invitations {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.clients.invitations.create
     * @desc Creates and sends out an email invitation to access an Ad Exchange
     * client buyer account.
     * @alias adexchangebuyer2.accounts.clients.invitations.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user should be associated with. (required)
     * @param {().ClientUserInvitation} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Accounts$Clients$Invitations$Create,
        options?: MethodOptions): AxiosPromise<Schema$ClientUserInvitation>;
    create(
        params: Params$Resource$Accounts$Clients$Invitations$Create,
        options: MethodOptions|
        BodyResponseCallback<Schema$ClientUserInvitation>,
        callback: BodyResponseCallback<Schema$ClientUserInvitation>): void;
    create(
        params: Params$Resource$Accounts$Clients$Invitations$Create,
        callback: BodyResponseCallback<Schema$ClientUserInvitation>): void;
    create(callback: BodyResponseCallback<Schema$ClientUserInvitation>): void;
    create(
        paramsOrCallback?: Params$Resource$Accounts$Clients$Invitations$Create|
        BodyResponseCallback<Schema$ClientUserInvitation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ClientUserInvitation>,
        callback?: BodyResponseCallback<Schema$ClientUserInvitation>):
        void|AxiosPromise<Schema$ClientUserInvitation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Clients$Invitations$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Invitations$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'clientAccountId'],
        pathParams: ['accountId', 'clientAccountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ClientUserInvitation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ClientUserInvitation>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.clients.invitations.get
     * @desc Retrieves an existing client user invitation.
     * @alias adexchangebuyer2.accounts.clients.invitations.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
     * @param {string} params.invitationId Numerical identifier of the user invitation to retrieve. (required)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Accounts$Clients$Invitations$Get,
        options?: MethodOptions): AxiosPromise<Schema$ClientUserInvitation>;
    get(params: Params$Resource$Accounts$Clients$Invitations$Get,
        options: MethodOptions|
        BodyResponseCallback<Schema$ClientUserInvitation>,
        callback: BodyResponseCallback<Schema$ClientUserInvitation>): void;
    get(params: Params$Resource$Accounts$Clients$Invitations$Get,
        callback: BodyResponseCallback<Schema$ClientUserInvitation>): void;
    get(callback: BodyResponseCallback<Schema$ClientUserInvitation>): void;
    get(paramsOrCallback?: Params$Resource$Accounts$Clients$Invitations$Get|
        BodyResponseCallback<Schema$ClientUserInvitation>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ClientUserInvitation>,
        callback?: BodyResponseCallback<Schema$ClientUserInvitation>):
        void|AxiosPromise<Schema$ClientUserInvitation> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Clients$Invitations$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Invitations$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'clientAccountId', 'invitationId'],
        pathParams: ['accountId', 'clientAccountId', 'invitationId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ClientUserInvitation>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ClientUserInvitation>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.clients.invitations.list
     * @desc Lists all the client users invitations for a client with a given
     * account ID.
     * @alias adexchangebuyer2.accounts.clients.invitations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
     * @param {integer=} params.pageSize Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Clients$Invitations$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListClientUserInvitationsResponse>;
    list(
        params: Params$Resource$Accounts$Clients$Invitations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListClientUserInvitationsResponse>,
        callback:
            BodyResponseCallback<Schema$ListClientUserInvitationsResponse>):
        void;
    list(
        params: Params$Resource$Accounts$Clients$Invitations$List,
        callback:
            BodyResponseCallback<Schema$ListClientUserInvitationsResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListClientUserInvitationsResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$Clients$Invitations$List|
        BodyResponseCallback<Schema$ListClientUserInvitationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListClientUserInvitationsResponse>,
        callback?:
            BodyResponseCallback<Schema$ListClientUserInvitationsResponse>):
        void|AxiosPromise<Schema$ListClientUserInvitationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Clients$Invitations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Invitations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'clientAccountId'],
        pathParams: ['accountId', 'clientAccountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListClientUserInvitationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListClientUserInvitationsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Clients$Invitations$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Numerical account ID of the client's sponsor buyer. (required)
     */
    accountId?: string;
    /**
     * Numerical account ID of the client buyer that the user should be
     * associated with. (required)
     */
    clientAccountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClientUserInvitation;
  }
  export interface Params$Resource$Accounts$Clients$Invitations$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Numerical account ID of the client's sponsor buyer. (required)
     */
    accountId?: string;
    /**
     * Numerical account ID of the client buyer that the user invitation to be
     * retrieved is associated with. (required)
     */
    clientAccountId?: string;
    /**
     * Numerical identifier of the user invitation to retrieve. (required)
     */
    invitationId?: string;
  }
  export interface Params$Resource$Accounts$Clients$Invitations$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Numerical account ID of the client's sponsor buyer. (required)
     */
    accountId?: string;
    /**
     * Numerical account ID of the client buyer to list invitations for.
     * (required) You must either specify a string representation of a numerical
     * account identifier or the `-` character to list all the invitations for
     * all the clients of a given sponsor buyer.
     */
    clientAccountId?: string;
    /**
     * Requested page size. Server may return fewer clients than requested. If
     * unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListClientUserInvitationsResponse.nextPageToken returned from the
     * previous call to the clients.invitations.list method.
     */
    pageToken?: string;
  }


  export class Resource$Accounts$Clients$Users {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.clients.users.get
     * @desc Retrieves an existing client user.
     * @alias adexchangebuyer2.accounts.clients.users.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
     * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Accounts$Clients$Users$Get,
        options?: MethodOptions): AxiosPromise<Schema$ClientUser>;
    get(params: Params$Resource$Accounts$Clients$Users$Get,
        options: MethodOptions|BodyResponseCallback<Schema$ClientUser>,
        callback: BodyResponseCallback<Schema$ClientUser>): void;
    get(params: Params$Resource$Accounts$Clients$Users$Get,
        callback: BodyResponseCallback<Schema$ClientUser>): void;
    get(callback: BodyResponseCallback<Schema$ClientUser>): void;
    get(paramsOrCallback?: Params$Resource$Accounts$Clients$Users$Get|
        BodyResponseCallback<Schema$ClientUser>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ClientUser>,
        callback?: BodyResponseCallback<Schema$ClientUser>):
        void|AxiosPromise<Schema$ClientUser> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Clients$Users$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Users$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'clientAccountId', 'userId'],
        pathParams: ['accountId', 'clientAccountId', 'userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ClientUser>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ClientUser>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.clients.users.list
     * @desc Lists all the known client users for a specified sponsor buyer
     * account ID.
     * @alias adexchangebuyer2.accounts.clients.users.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Numerical account ID of the sponsor buyer of the client to list users for. (required)
     * @param {string} params.clientAccountId The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
     * @param {integer=} params.pageSize Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Clients$Users$List,
        options?: MethodOptions): AxiosPromise<Schema$ListClientUsersResponse>;
    list(
        params: Params$Resource$Accounts$Clients$Users$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListClientUsersResponse>,
        callback: BodyResponseCallback<Schema$ListClientUsersResponse>): void;
    list(
        params: Params$Resource$Accounts$Clients$Users$List,
        callback: BodyResponseCallback<Schema$ListClientUsersResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListClientUsersResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$Clients$Users$List|
        BodyResponseCallback<Schema$ListClientUsersResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListClientUsersResponse>,
        callback?: BodyResponseCallback<Schema$ListClientUsersResponse>):
        void|AxiosPromise<Schema$ListClientUsersResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Clients$Users$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Users$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'clientAccountId'],
        pathParams: ['accountId', 'clientAccountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListClientUsersResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListClientUsersResponse>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.clients.users.update
     * @desc Updates an existing client user. Only the user status can be
     * changed on update.
     * @alias adexchangebuyer2.accounts.clients.users.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
     * @param {string} params.userId Numerical identifier of the user to retrieve. (required)
     * @param {().ClientUser} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Accounts$Clients$Users$Update,
        options?: MethodOptions): AxiosPromise<Schema$ClientUser>;
    update(
        params: Params$Resource$Accounts$Clients$Users$Update,
        options: MethodOptions|BodyResponseCallback<Schema$ClientUser>,
        callback: BodyResponseCallback<Schema$ClientUser>): void;
    update(
        params: Params$Resource$Accounts$Clients$Users$Update,
        callback: BodyResponseCallback<Schema$ClientUser>): void;
    update(callback: BodyResponseCallback<Schema$ClientUser>): void;
    update(
        paramsOrCallback?: Params$Resource$Accounts$Clients$Users$Update|
        BodyResponseCallback<Schema$ClientUser>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ClientUser>,
        callback?: BodyResponseCallback<Schema$ClientUser>):
        void|AxiosPromise<Schema$ClientUser> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Clients$Users$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Clients$Users$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['accountId', 'clientAccountId', 'userId'],
        pathParams: ['accountId', 'clientAccountId', 'userId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ClientUser>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ClientUser>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Clients$Users$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Numerical account ID of the client's sponsor buyer. (required)
     */
    accountId?: string;
    /**
     * Numerical account ID of the client buyer that the user to be retrieved is
     * associated with. (required)
     */
    clientAccountId?: string;
    /**
     * Numerical identifier of the user to retrieve. (required)
     */
    userId?: string;
  }
  export interface Params$Resource$Accounts$Clients$Users$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Numerical account ID of the sponsor buyer of the client to list users
     * for. (required)
     */
    accountId?: string;
    /**
     * The account ID of the client buyer to list users for. (required) You must
     * specify either a string representation of a numerical account identifier
     * or the `-` character to list all the client users for all the clients of
     * a given sponsor buyer.
     */
    clientAccountId?: string;
    /**
     * Requested page size. The server may return fewer clients than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListClientUsersResponse.nextPageToken
     * returned from the previous call to the accounts.clients.users.list
     * method.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Clients$Users$Update extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Numerical account ID of the client's sponsor buyer. (required)
     */
    accountId?: string;
    /**
     * Numerical account ID of the client buyer that the user to be retrieved is
     * associated with. (required)
     */
    clientAccountId?: string;
    /**
     * Numerical identifier of the user to retrieve. (required)
     */
    userId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ClientUser;
  }



  export class Resource$Accounts$Creatives {
    root: Adexchangebuyer2;
    dealAssociations: Resource$Accounts$Creatives$Dealassociations;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.dealAssociations =
          new Resource$Accounts$Creatives$Dealassociations(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.creatives.create
     * @desc Creates a creative.
     * @alias adexchangebuyer2.accounts.creatives.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
     * @param {string=} params.duplicateIdMode Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
     * @param {().Creative} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Accounts$Creatives$Create,
        options?: MethodOptions): AxiosPromise<Schema$Creative>;
    create(
        params: Params$Resource$Accounts$Creatives$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback: BodyResponseCallback<Schema$Creative>): void;
    create(
        params: Params$Resource$Accounts$Creatives$Create,
        callback: BodyResponseCallback<Schema$Creative>): void;
    create(callback: BodyResponseCallback<Schema$Creative>): void;
    create(
        paramsOrCallback?: Params$Resource$Accounts$Creatives$Create|
        BodyResponseCallback<Schema$Creative>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback?: BodyResponseCallback<Schema$Creative>):
        void|AxiosPromise<Schema$Creative> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Creatives$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Creatives$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.creatives.get
     * @desc Gets a creative.
     * @alias adexchangebuyer2.accounts.creatives.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account the creative belongs to.
     * @param {string} params.creativeId The ID of the creative to retrieve.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Accounts$Creatives$Get,
        options?: MethodOptions): AxiosPromise<Schema$Creative>;
    get(params: Params$Resource$Accounts$Creatives$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback: BodyResponseCallback<Schema$Creative>): void;
    get(params: Params$Resource$Accounts$Creatives$Get,
        callback: BodyResponseCallback<Schema$Creative>): void;
    get(callback: BodyResponseCallback<Schema$Creative>): void;
    get(paramsOrCallback?: Params$Resource$Accounts$Creatives$Get|
        BodyResponseCallback<Schema$Creative>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback?: BodyResponseCallback<Schema$Creative>):
        void|AxiosPromise<Schema$Creative> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Creatives$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Creatives$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'creativeId'],
        pathParams: ['accountId', 'creativeId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.creatives.list
     * @desc Lists creatives.
     * @alias adexchangebuyer2.accounts.creatives.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
     * @param {integer=} params.pageSize Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available via another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
     * @param {string=} params.query An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. <p>Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsStatus: {approved, conditionally_approved, disapproved,                    not_checked} <li>openAuctionStatus: {approved, conditionally_approved, disapproved,                           not_checked} <li>attribute: {a numeric attribute from the list of attributes} <li>disapprovalReason: {a reason from DisapprovalReason} </ul> Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Creatives$List,
        options?: MethodOptions): AxiosPromise<Schema$ListCreativesResponse>;
    list(
        params: Params$Resource$Accounts$Creatives$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListCreativesResponse>,
        callback: BodyResponseCallback<Schema$ListCreativesResponse>): void;
    list(
        params: Params$Resource$Accounts$Creatives$List,
        callback: BodyResponseCallback<Schema$ListCreativesResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListCreativesResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$Creatives$List|
        BodyResponseCallback<Schema$ListCreativesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListCreativesResponse>,
        callback?: BodyResponseCallback<Schema$ListCreativesResponse>):
        void|AxiosPromise<Schema$ListCreativesResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Creatives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Creatives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/accounts/{accountId}/creatives')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListCreativesResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListCreativesResponse>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.creatives.stopWatching
     * @desc Stops watching a creative. Will stop push notifications being sent
     * to the topics when the creative changes status.
     * @alias adexchangebuyer2.accounts.creatives.stopWatching
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account of the creative to stop notifications for.
     * @param {string} params.creativeId The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
     * @param {().StopWatchingCreativeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    stopWatching(
        params?: Params$Resource$Accounts$Creatives$Stopwatching,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    stopWatching(
        params: Params$Resource$Accounts$Creatives$Stopwatching,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    stopWatching(
        params: Params$Resource$Accounts$Creatives$Stopwatching,
        callback: BodyResponseCallback<Schema$Empty>): void;
    stopWatching(callback: BodyResponseCallback<Schema$Empty>): void;
    stopWatching(
        paramsOrCallback?: Params$Resource$Accounts$Creatives$Stopwatching|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Creatives$Stopwatching;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Creatives$Stopwatching;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'creativeId'],
        pathParams: ['accountId', 'creativeId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.creatives.update
     * @desc Updates a creative.
     * @alias adexchangebuyer2.accounts.creatives.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
     * @param {string} params.creativeId The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
     * @param {().Creative} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Accounts$Creatives$Update,
        options?: MethodOptions): AxiosPromise<Schema$Creative>;
    update(
        params: Params$Resource$Accounts$Creatives$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback: BodyResponseCallback<Schema$Creative>): void;
    update(
        params: Params$Resource$Accounts$Creatives$Update,
        callback: BodyResponseCallback<Schema$Creative>): void;
    update(callback: BodyResponseCallback<Schema$Creative>): void;
    update(
        paramsOrCallback?: Params$Resource$Accounts$Creatives$Update|
        BodyResponseCallback<Schema$Creative>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Creative>,
        callback?: BodyResponseCallback<Schema$Creative>):
        void|AxiosPromise<Schema$Creative> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Creatives$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Creatives$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/accounts/{accountId}/creatives/{creativeId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['accountId', 'creativeId'],
        pathParams: ['accountId', 'creativeId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Creative>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Creative>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.creatives.watch
     * @desc Watches a creative. Will result in push notifications being sent to
     * the topic when the creative changes status.
     * @alias adexchangebuyer2.accounts.creatives.watch
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account of the creative to watch.
     * @param {string} params.creativeId The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
     * @param {().WatchCreativeRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    watch(
        params?: Params$Resource$Accounts$Creatives$Watch,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    watch(
        params: Params$Resource$Accounts$Creatives$Watch,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    watch(
        params: Params$Resource$Accounts$Creatives$Watch,
        callback: BodyResponseCallback<Schema$Empty>): void;
    watch(callback: BodyResponseCallback<Schema$Empty>): void;
    watch(
        paramsOrCallback?: Params$Resource$Accounts$Creatives$Watch|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Creatives$Watch;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Creatives$Watch;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/creatives/{creativeId}:watch')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'creativeId'],
        pathParams: ['accountId', 'creativeId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Creatives$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account that this creative belongs to. Can be used to filter the
     * response of the creatives.list method.
     */
    accountId?: string;
    /**
     * Indicates if multiple creatives can share an ID or not. Default is
     * NO_DUPLICATES (one ID per creative).
     */
    duplicateIdMode?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }
  export interface Params$Resource$Accounts$Creatives$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account the creative belongs to.
     */
    accountId?: string;
    /**
     * The ID of the creative to retrieve.
     */
    creativeId?: string;
  }
  export interface Params$Resource$Accounts$Creatives$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account to list the creatives from. Specify "-" to list all creatives
     * the current user has access to.
     */
    accountId?: string;
    /**
     * Requested page size. The server may return fewer creatives than requested
     * (due to timeout constraint) even if more are available via another call.
     * If unspecified, server will pick an appropriate default. Acceptable
     * values are 1 to 1000, inclusive.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListCreativesResponse.next_page_token
     * returned from the previous call to 'ListCreatives' method.
     */
    pageToken?: string;
    /**
     * An optional query string to filter creatives. If no filter is specified,
     * all active creatives will be returned. <p>Supported queries are: <ul>
     * <li>accountId=<i>account_id_string</i>
     * <li>creativeId=<i>creative_id_string</i> <li>dealsStatus: {approved,
     * conditionally_approved, disapproved,                    not_checked}
     * <li>openAuctionStatus: {approved, conditionally_approved, disapproved,
     * not_checked} <li>attribute: {a numeric attribute from the list of
     * attributes} <li>disapprovalReason: {a reason from DisapprovalReason}
     * </ul> Example: 'accountId=12345 AND (dealsStatus:disapproved AND
     * disapprovalReason:unacceptable_content) OR attribute:47'
     */
    query?: string;
  }
  export interface Params$Resource$Accounts$Creatives$Stopwatching extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account of the creative to stop notifications for.
     */
    accountId?: string;
    /**
     * The creative ID of the creative to stop notifications for. Specify "-" to
     * specify stopping account level notifications.
     */
    creativeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$StopWatchingCreativeRequest;
  }
  export interface Params$Resource$Accounts$Creatives$Update extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account that this creative belongs to. Can be used to filter the
     * response of the creatives.list method.
     */
    accountId?: string;
    /**
     * The buyer-defined creative ID of this creative. Can be used to filter the
     * response of the creatives.list method.
     */
    creativeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Creative;
  }
  export interface Params$Resource$Accounts$Creatives$Watch extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account of the creative to watch.
     */
    accountId?: string;
    /**
     * The creative ID to watch for status changes. Specify "-" to watch all
     * creatives under the above account. If both creative-level and
     * account-level notifications are sent, only a single notification will be
     * sent to the creative-level notification topic.
     */
    creativeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$WatchCreativeRequest;
  }

  export class Resource$Accounts$Creatives$Dealassociations {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.creatives.dealAssociations.add
     * @desc Associate an existing deal with a creative.
     * @alias adexchangebuyer2.accounts.creatives.dealAssociations.add
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account the creative belongs to.
     * @param {string} params.creativeId The ID of the creative associated with the deal.
     * @param {().AddDealAssociationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    add(params?: Params$Resource$Accounts$Creatives$Dealassociations$Add,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    add(params: Params$Resource$Accounts$Creatives$Dealassociations$Add,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    add(params: Params$Resource$Accounts$Creatives$Dealassociations$Add,
        callback: BodyResponseCallback<Schema$Empty>): void;
    add(callback: BodyResponseCallback<Schema$Empty>): void;
    add(paramsOrCallback?:
            Params$Resource$Accounts$Creatives$Dealassociations$Add|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Creatives$Dealassociations$Add;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Creatives$Dealassociations$Add;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'creativeId'],
        pathParams: ['accountId', 'creativeId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.creatives.dealAssociations.list
     * @desc List all creative-deal associations.
     * @alias adexchangebuyer2.accounts.creatives.dealAssociations.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account to list the associations from. Specify "-" to list all creatives the current user has access to.
     * @param {string} params.creativeId The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
     * @param {integer=} params.pageSize Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
     * @param {string=} params.query An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: <ul> <li>accountId=<i>account_id_string</i> <li>creativeId=<i>creative_id_string</i> <li>dealsId=<i>deals_id_string</i> <li>dealsStatus:{approved, conditionally_approved, disapproved,                   not_checked} <li>openAuctionStatus:{approved, conditionally_approved, disapproved,                          not_checked} </ul> Example: 'dealsId=12345 AND dealsStatus:disapproved'
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Creatives$Dealassociations$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListDealAssociationsResponse>;
    list(
        params: Params$Resource$Accounts$Creatives$Dealassociations$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListDealAssociationsResponse>,
        callback: BodyResponseCallback<Schema$ListDealAssociationsResponse>):
        void;
    list(
        params: Params$Resource$Accounts$Creatives$Dealassociations$List,
        callback: BodyResponseCallback<Schema$ListDealAssociationsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListDealAssociationsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Accounts$Creatives$Dealassociations$List|
        BodyResponseCallback<Schema$ListDealAssociationsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListDealAssociationsResponse>,
        callback?: BodyResponseCallback<Schema$ListDealAssociationsResponse>):
        void|AxiosPromise<Schema$ListDealAssociationsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Creatives$Dealassociations$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Creatives$Dealassociations$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'creativeId'],
        pathParams: ['accountId', 'creativeId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListDealAssociationsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListDealAssociationsResponse>(
            parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.creatives.dealAssociations.remove
     * @desc Remove the association between a deal and a creative.
     * @alias adexchangebuyer2.accounts.creatives.dealAssociations.remove
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId The account the creative belongs to.
     * @param {string} params.creativeId The ID of the creative associated with the deal.
     * @param {().RemoveDealAssociationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    remove(
        params?: Params$Resource$Accounts$Creatives$Dealassociations$Remove,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    remove(
        params: Params$Resource$Accounts$Creatives$Dealassociations$Remove,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    remove(
        params: Params$Resource$Accounts$Creatives$Dealassociations$Remove,
        callback: BodyResponseCallback<Schema$Empty>): void;
    remove(callback: BodyResponseCallback<Schema$Empty>): void;
    remove(
        paramsOrCallback?:
            Params$Resource$Accounts$Creatives$Dealassociations$Remove|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Creatives$Dealassociations$Remove;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Accounts$Creatives$Dealassociations$Remove;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'creativeId'],
        pathParams: ['accountId', 'creativeId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Creatives$Dealassociations$Add
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account the creative belongs to.
     */
    accountId?: string;
    /**
     * The ID of the creative associated with the deal.
     */
    creativeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddDealAssociationRequest;
  }
  export interface Params$Resource$Accounts$Creatives$Dealassociations$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account to list the associations from. Specify "-" to list all
     * creatives the current user has access to.
     */
    accountId?: string;
    /**
     * The creative ID to list the associations from. Specify "-" to list all
     * creatives under the above account.
     */
    creativeId?: string;
    /**
     * Requested page size. Server may return fewer associations than requested.
     * If unspecified, server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListDealAssociationsResponse.next_page_token returned from the previous
     * call to 'ListDealAssociations' method.
     */
    pageToken?: string;
    /**
     * An optional query string to filter deal associations. If no filter is
     * specified, all associations will be returned. Supported queries are: <ul>
     * <li>accountId=<i>account_id_string</i>
     * <li>creativeId=<i>creative_id_string</i>
     * <li>dealsId=<i>deals_id_string</i> <li>dealsStatus:{approved,
     * conditionally_approved, disapproved,                   not_checked}
     * <li>openAuctionStatus:{approved, conditionally_approved, disapproved,
     * not_checked} </ul> Example: 'dealsId=12345 AND dealsStatus:disapproved'
     */
    query?: string;
  }
  export interface Params$Resource$Accounts$Creatives$Dealassociations$Remove
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The account the creative belongs to.
     */
    accountId?: string;
    /**
     * The ID of the creative associated with the deal.
     */
    creativeId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$RemoveDealAssociationRequest;
  }



  export class Resource$Accounts$Finalizedproposals {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.finalizedProposals.list
     * @desc List finalized proposals, regardless if a proposal is being
     * renegotiated. A filter expression (PQL query) may be specified to filter
     * the results. The notes will not be returned.
     * @alias adexchangebuyer2.accounts.finalizedProposals.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string=} params.filter An optional PQL filter query used to query for proposals.  Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
     * @param {string=} params.filterSyntax Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken The page token as returned from ListProposalsResponse.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Finalizedproposals$List,
        options?: MethodOptions): AxiosPromise<Schema$ListProposalsResponse>;
    list(
        params: Params$Resource$Accounts$Finalizedproposals$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListProposalsResponse>,
        callback: BodyResponseCallback<Schema$ListProposalsResponse>): void;
    list(
        params: Params$Resource$Accounts$Finalizedproposals$List,
        callback: BodyResponseCallback<Schema$ListProposalsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListProposalsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$Finalizedproposals$List|
        BodyResponseCallback<Schema$ListProposalsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListProposalsResponse>,
        callback?: BodyResponseCallback<Schema$ListProposalsResponse>):
        void|AxiosPromise<Schema$ListProposalsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Finalizedproposals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Finalizedproposals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v2beta1/accounts/{accountId}/finalizedProposals')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListProposalsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListProposalsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Finalizedproposals$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * An optional PQL filter query used to query for proposals.  Nested
     * repeated fields, such as proposal.deals.targetingCriterion, cannot be
     * filtered.
     */
    filter?: string;
    /**
     * Syntax the filter is written in. Current implementation defaults to PQL
     * but in the future it will be LIST_FILTER.
     */
    filterSyntax?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * The page token as returned from ListProposalsResponse.
     */
    pageToken?: string;
  }


  export class Resource$Accounts$Products {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.products.get
     * @desc Gets the requested product by ID.
     * @alias adexchangebuyer2.accounts.products.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.productId The ID for the product to get the head revision for.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Accounts$Products$Get,
        options?: MethodOptions): AxiosPromise<Schema$Product>;
    get(params: Params$Resource$Accounts$Products$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Product>,
        callback: BodyResponseCallback<Schema$Product>): void;
    get(params: Params$Resource$Accounts$Products$Get,
        callback: BodyResponseCallback<Schema$Product>): void;
    get(callback: BodyResponseCallback<Schema$Product>): void;
    get(paramsOrCallback?: Params$Resource$Accounts$Products$Get|
        BodyResponseCallback<Schema$Product>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Product>,
        callback?: BodyResponseCallback<Schema$Product>):
        void|AxiosPromise<Schema$Product> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Products$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/accounts/{accountId}/products/{productId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'productId'],
        pathParams: ['accountId', 'productId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Product>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Product>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.products.list
     * @desc List all products visible to the buyer (optionally filtered by the
     * specified PQL query).
     * @alias adexchangebuyer2.accounts.products.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string=} params.filter An optional PQL query used to query for products. See https://developers.google.com/ad-manager/docs/pqlreference for documentation about PQL and examples.  Nested repeated fields, such as product.targetingCriterion.inclusions, cannot be filtered.
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken The page token as returned from ListProductsResponse.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Products$List,
        options?: MethodOptions): AxiosPromise<Schema$ListProductsResponse>;
    list(
        params: Params$Resource$Accounts$Products$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListProductsResponse>,
        callback: BodyResponseCallback<Schema$ListProductsResponse>): void;
    list(
        params: Params$Resource$Accounts$Products$List,
        callback: BodyResponseCallback<Schema$ListProductsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListProductsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$Products$List|
        BodyResponseCallback<Schema$ListProductsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListProductsResponse>,
        callback?: BodyResponseCallback<Schema$ListProductsResponse>):
        void|AxiosPromise<Schema$ListProductsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Products$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Products$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/accounts/{accountId}/products')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListProductsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListProductsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Products$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The ID for the product to get the head revision for.
     */
    productId?: string;
  }
  export interface Params$Resource$Accounts$Products$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * An optional PQL query used to query for products. See
     * https://developers.google.com/ad-manager/docs/pqlreference for
     * documentation about PQL and examples.  Nested repeated fields, such as
     * product.targetingCriterion.inclusions, cannot be filtered.
     */
    filter?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * The page token as returned from ListProductsResponse.
     */
    pageToken?: string;
  }


  export class Resource$Accounts$Proposals {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.proposals.accept
     * @desc Mark the proposal as accepted at the given revision number. If the
     * number does not match the server's revision number an `ABORTED` error
     * message will be returned. This call updates the proposal_state from
     * `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`.
     * @alias adexchangebuyer2.accounts.proposals.accept
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.proposalId The ID of the proposal to accept.
     * @param {().AcceptProposalRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    accept(
        params?: Params$Resource$Accounts$Proposals$Accept,
        options?: MethodOptions): AxiosPromise<Schema$Proposal>;
    accept(
        params: Params$Resource$Accounts$Proposals$Accept,
        options: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    accept(
        params: Params$Resource$Accounts$Proposals$Accept,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    accept(callback: BodyResponseCallback<Schema$Proposal>): void;
    accept(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$Accept|
        BodyResponseCallback<Schema$Proposal>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback?: BodyResponseCallback<Schema$Proposal>):
        void|AxiosPromise<Schema$Proposal> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Proposals$Accept;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Accept;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/proposals/{proposalId}:accept')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'proposalId'],
        pathParams: ['accountId', 'proposalId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.addNote
     * @desc Create a new note and attach it to the proposal. The note is
     * assigned a unique ID by the server. The proposal revision number will not
     * increase when associated with a new note.
     * @alias adexchangebuyer2.accounts.proposals.addNote
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.proposalId The ID of the proposal to attach the note to.
     * @param {().AddNoteRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    addNote(
        params?: Params$Resource$Accounts$Proposals$Addnote,
        options?: MethodOptions): AxiosPromise<Schema$Note>;
    addNote(
        params: Params$Resource$Accounts$Proposals$Addnote,
        options: MethodOptions|BodyResponseCallback<Schema$Note>,
        callback: BodyResponseCallback<Schema$Note>): void;
    addNote(
        params: Params$Resource$Accounts$Proposals$Addnote,
        callback: BodyResponseCallback<Schema$Note>): void;
    addNote(callback: BodyResponseCallback<Schema$Note>): void;
    addNote(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$Addnote|
        BodyResponseCallback<Schema$Note>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Note>,
        callback?: BodyResponseCallback<Schema$Note>):
        void|AxiosPromise<Schema$Note> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Proposals$Addnote;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Addnote;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'proposalId'],
        pathParams: ['accountId', 'proposalId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Note>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Note>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.cancelNegotiation
     * @desc Cancel an ongoing negotiation on a proposal. This does not cancel
     * or end serving for the deals if the proposal has been finalized, but only
     * cancels a negotiation unilaterally.
     * @alias adexchangebuyer2.accounts.proposals.cancelNegotiation
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.proposalId The ID of the proposal to cancel negotiation for.
     * @param {().CancelNegotiationRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    cancelNegotiation(
        params?: Params$Resource$Accounts$Proposals$Cancelnegotiation,
        options?: MethodOptions): AxiosPromise<Schema$Proposal>;
    cancelNegotiation(
        params: Params$Resource$Accounts$Proposals$Cancelnegotiation,
        options: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    cancelNegotiation(
        params: Params$Resource$Accounts$Proposals$Cancelnegotiation,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    cancelNegotiation(callback: BodyResponseCallback<Schema$Proposal>): void;
    cancelNegotiation(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$Cancelnegotiation|
        BodyResponseCallback<Schema$Proposal>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback?: BodyResponseCallback<Schema$Proposal>):
        void|AxiosPromise<Schema$Proposal> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Proposals$Cancelnegotiation;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Cancelnegotiation;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'proposalId'],
        pathParams: ['accountId', 'proposalId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.completeSetup
     * @desc Update the given proposal to indicate that setup has been
     * completed. This method is called by the buyer when the line items have
     * been created on their end for a finalized proposal and all the required
     * creatives have been uploaded using the creatives API. This call updates
     * the `is_setup_completed` bit on the proposal and also notifies the
     * seller. The server will advance the revision number of the most recent
     * proposal.
     * @alias adexchangebuyer2.accounts.proposals.completeSetup
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.proposalId The ID of the proposal to mark as setup completed.
     * @param {().CompleteSetupRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    completeSetup(
        params?: Params$Resource$Accounts$Proposals$Completesetup,
        options?: MethodOptions): AxiosPromise<Schema$Proposal>;
    completeSetup(
        params: Params$Resource$Accounts$Proposals$Completesetup,
        options: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    completeSetup(
        params: Params$Resource$Accounts$Proposals$Completesetup,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    completeSetup(callback: BodyResponseCallback<Schema$Proposal>): void;
    completeSetup(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$Completesetup|
        BodyResponseCallback<Schema$Proposal>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback?: BodyResponseCallback<Schema$Proposal>):
        void|AxiosPromise<Schema$Proposal> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Proposals$Completesetup;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Completesetup;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'proposalId'],
        pathParams: ['accountId', 'proposalId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.create
     * @desc Create the given proposal. Each created proposal and any deals it
     * contains are assigned a unique ID by the server.
     * @alias adexchangebuyer2.accounts.proposals.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {().Proposal} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Accounts$Proposals$Create,
        options?: MethodOptions): AxiosPromise<Schema$Proposal>;
    create(
        params: Params$Resource$Accounts$Proposals$Create,
        options: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    create(
        params: Params$Resource$Accounts$Proposals$Create,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    create(callback: BodyResponseCallback<Schema$Proposal>): void;
    create(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$Create|
        BodyResponseCallback<Schema$Proposal>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback?: BodyResponseCallback<Schema$Proposal>):
        void|AxiosPromise<Schema$Proposal> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Proposals$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/accounts/{accountId}/proposals')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.get
     * @desc Gets a proposal given its ID. The proposal is returned at its head
     * revision.
     * @alias adexchangebuyer2.accounts.proposals.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.proposalId The unique ID of the proposal
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Accounts$Proposals$Get,
        options?: MethodOptions): AxiosPromise<Schema$Proposal>;
    get(params: Params$Resource$Accounts$Proposals$Get,
        options: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    get(params: Params$Resource$Accounts$Proposals$Get,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    get(callback: BodyResponseCallback<Schema$Proposal>): void;
    get(paramsOrCallback?: Params$Resource$Accounts$Proposals$Get|
        BodyResponseCallback<Schema$Proposal>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback?: BodyResponseCallback<Schema$Proposal>):
        void|AxiosPromise<Schema$Proposal> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Proposals$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/accounts/{accountId}/proposals/{proposalId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'proposalId'],
        pathParams: ['accountId', 'proposalId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.list
     * @desc List proposals. A filter expression (PQL query) may be specified to
     * filter the results. To retrieve all finalized proposals, regardless if a
     * proposal is being renegotiated, see the FinalizedProposals resource. Note
     * that Bidder/ChildSeat relationships differ from the usual behavior. A
     * Bidder account can only see its child seats' proposals by specifying the
     * ChildSeat's accountId in the request path.
     * @alias adexchangebuyer2.accounts.proposals.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string=} params.filter An optional PQL filter query used to query for proposals.  Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
     * @param {string=} params.filterSyntax Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken The page token as returned from ListProposalsResponse.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Proposals$List,
        options?: MethodOptions): AxiosPromise<Schema$ListProposalsResponse>;
    list(
        params: Params$Resource$Accounts$Proposals$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListProposalsResponse>,
        callback: BodyResponseCallback<Schema$ListProposalsResponse>): void;
    list(
        params: Params$Resource$Accounts$Proposals$List,
        callback: BodyResponseCallback<Schema$ListProposalsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListProposalsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$List|
        BodyResponseCallback<Schema$ListProposalsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListProposalsResponse>,
        callback?: BodyResponseCallback<Schema$ListProposalsResponse>):
        void|AxiosPromise<Schema$ListProposalsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Proposals$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/accounts/{accountId}/proposals')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListProposalsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListProposalsResponse>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.pause
     * @desc Update the given proposal to pause serving. This method will set
     * the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true
     * for all deals in the proposal.  It is a no-op to pause an already-paused
     * proposal. It is an error to call PauseProposal for a proposal that is not
     * finalized or renegotiating.
     * @alias adexchangebuyer2.accounts.proposals.pause
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.proposalId The ID of the proposal to pause.
     * @param {().PauseProposalRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    pause(
        params?: Params$Resource$Accounts$Proposals$Pause,
        options?: MethodOptions): AxiosPromise<Schema$Proposal>;
    pause(
        params: Params$Resource$Accounts$Proposals$Pause,
        options: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    pause(
        params: Params$Resource$Accounts$Proposals$Pause,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    pause(callback: BodyResponseCallback<Schema$Proposal>): void;
    pause(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$Pause|
        BodyResponseCallback<Schema$Proposal>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback?: BodyResponseCallback<Schema$Proposal>):
        void|AxiosPromise<Schema$Proposal> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Proposals$Pause;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Pause;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/proposals/{proposalId}:pause')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'proposalId'],
        pathParams: ['accountId', 'proposalId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.resume
     * @desc Update the given proposal to resume serving. This method will set
     * the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false
     * for all deals in the proposal.  Note that if the `has_seller_paused` bit
     * is also set, serving will not resume until the seller also resumes.  It
     * is a no-op to resume an already-running proposal. It is an error to call
     * ResumeProposal for a proposal that is not finalized or renegotiating.
     * @alias adexchangebuyer2.accounts.proposals.resume
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.proposalId The ID of the proposal to resume.
     * @param {().ResumeProposalRequest} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    resume(
        params?: Params$Resource$Accounts$Proposals$Resume,
        options?: MethodOptions): AxiosPromise<Schema$Proposal>;
    resume(
        params: Params$Resource$Accounts$Proposals$Resume,
        options: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    resume(
        params: Params$Resource$Accounts$Proposals$Resume,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    resume(callback: BodyResponseCallback<Schema$Proposal>): void;
    resume(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$Resume|
        BodyResponseCallback<Schema$Proposal>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback?: BodyResponseCallback<Schema$Proposal>):
        void|AxiosPromise<Schema$Proposal> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Proposals$Resume;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Resume;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/proposals/{proposalId}:resume')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['accountId', 'proposalId'],
        pathParams: ['accountId', 'proposalId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.proposals.update
     * @desc Update the given proposal at the client known revision number. If
     * the server revision has advanced since the passed-in
     * `proposal.proposal_revision`, an `ABORTED` error message will be
     * returned. Only the buyer-modifiable fields of the proposal will be
     * updated.  Note that the deals in the proposal will be updated to match
     * the passed-in copy. If a passed-in deal does not have a `deal_id`, the
     * server will assign a new unique ID and create the deal. If passed-in deal
     * has a `deal_id`, it will be updated to match the passed-in copy. Any
     * existing deals not present in the passed-in proposal will be deleted. It
     * is an error to pass in a deal with a `deal_id` not present at head.
     * @alias adexchangebuyer2.accounts.proposals.update
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.proposalId The unique ID of the proposal.
     * @param {().Proposal} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    update(
        params?: Params$Resource$Accounts$Proposals$Update,
        options?: MethodOptions): AxiosPromise<Schema$Proposal>;
    update(
        params: Params$Resource$Accounts$Proposals$Update,
        options: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    update(
        params: Params$Resource$Accounts$Proposals$Update,
        callback: BodyResponseCallback<Schema$Proposal>): void;
    update(callback: BodyResponseCallback<Schema$Proposal>): void;
    update(
        paramsOrCallback?: Params$Resource$Accounts$Proposals$Update|
        BodyResponseCallback<Schema$Proposal>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Proposal>,
        callback?: BodyResponseCallback<Schema$Proposal>):
        void|AxiosPromise<Schema$Proposal> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Accounts$Proposals$Update;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Proposals$Update;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/accounts/{accountId}/proposals/{proposalId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'PUT'
            },
            options),
        params,
        requiredParams: ['accountId', 'proposalId'],
        pathParams: ['accountId', 'proposalId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Proposal>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Proposal>(parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Proposals$Accept extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The ID of the proposal to accept.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AcceptProposalRequest;
  }
  export interface Params$Resource$Accounts$Proposals$Addnote extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The ID of the proposal to attach the note to.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$AddNoteRequest;
  }
  export interface Params$Resource$Accounts$Proposals$Cancelnegotiation extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The ID of the proposal to cancel negotiation for.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CancelNegotiationRequest;
  }
  export interface Params$Resource$Accounts$Proposals$Completesetup extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The ID of the proposal to mark as setup completed.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$CompleteSetupRequest;
  }
  export interface Params$Resource$Accounts$Proposals$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Proposal;
  }
  export interface Params$Resource$Accounts$Proposals$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The unique ID of the proposal
     */
    proposalId?: string;
  }
  export interface Params$Resource$Accounts$Proposals$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * An optional PQL filter query used to query for proposals.  Nested
     * repeated fields, such as proposal.deals.targetingCriterion, cannot be
     * filtered.
     */
    filter?: string;
    /**
     * Syntax the filter is written in. Current implementation defaults to PQL
     * but in the future it will be LIST_FILTER.
     */
    filterSyntax?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * The page token as returned from ListProposalsResponse.
     */
    pageToken?: string;
  }
  export interface Params$Resource$Accounts$Proposals$Pause extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The ID of the proposal to pause.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$PauseProposalRequest;
  }
  export interface Params$Resource$Accounts$Proposals$Resume extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The ID of the proposal to resume.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$ResumeProposalRequest;
  }
  export interface Params$Resource$Accounts$Proposals$Update extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The unique ID of the proposal.
     */
    proposalId?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$Proposal;
  }


  export class Resource$Accounts$Publisherprofiles {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.accounts.publisherProfiles.get
     * @desc Gets the requested publisher profile by id.
     * @alias adexchangebuyer2.accounts.publisherProfiles.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {string} params.publisherProfileId The id for the publisher profile to get.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Accounts$Publisherprofiles$Get,
        options?: MethodOptions): AxiosPromise<Schema$PublisherProfile>;
    get(params: Params$Resource$Accounts$Publisherprofiles$Get,
        options: MethodOptions|BodyResponseCallback<Schema$PublisherProfile>,
        callback: BodyResponseCallback<Schema$PublisherProfile>): void;
    get(params: Params$Resource$Accounts$Publisherprofiles$Get,
        callback: BodyResponseCallback<Schema$PublisherProfile>): void;
    get(callback: BodyResponseCallback<Schema$PublisherProfile>): void;
    get(paramsOrCallback?: Params$Resource$Accounts$Publisherprofiles$Get|
        BodyResponseCallback<Schema$PublisherProfile>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$PublisherProfile>,
        callback?: BodyResponseCallback<Schema$PublisherProfile>):
        void|AxiosPromise<Schema$PublisherProfile> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Publisherprofiles$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Publisherprofiles$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId', 'publisherProfileId'],
        pathParams: ['accountId', 'publisherProfileId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$PublisherProfile>(parameters, callback);
      } else {
        return createAPIRequest<Schema$PublisherProfile>(parameters);
      }
    }


    /**
     * adexchangebuyer2.accounts.publisherProfiles.list
     * @desc List all publisher profiles visible to the buyer
     * @alias adexchangebuyer2.accounts.publisherProfiles.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.accountId Account ID of the buyer.
     * @param {integer=} params.pageSize Specify the number of results to include per page.
     * @param {string=} params.pageToken The page token as return from ListPublisherProfilesResponse.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Accounts$Publisherprofiles$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListPublisherProfilesResponse>;
    list(
        params: Params$Resource$Accounts$Publisherprofiles$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListPublisherProfilesResponse>,
        callback: BodyResponseCallback<Schema$ListPublisherProfilesResponse>):
        void;
    list(
        params: Params$Resource$Accounts$Publisherprofiles$List,
        callback: BodyResponseCallback<Schema$ListPublisherProfilesResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListPublisherProfilesResponse>):
        void;
    list(
        paramsOrCallback?: Params$Resource$Accounts$Publisherprofiles$List|
        BodyResponseCallback<Schema$ListPublisherProfilesResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListPublisherProfilesResponse>,
        callback?: BodyResponseCallback<Schema$ListPublisherProfilesResponse>):
        void|AxiosPromise<Schema$ListPublisherProfilesResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Accounts$Publisherprofiles$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Accounts$Publisherprofiles$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/accounts/{accountId}/publisherProfiles')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['accountId'],
        pathParams: ['accountId'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListPublisherProfilesResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListPublisherProfilesResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Accounts$Publisherprofiles$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * The id for the publisher profile to get.
     */
    publisherProfileId?: string;
  }
  export interface Params$Resource$Accounts$Publisherprofiles$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Account ID of the buyer.
     */
    accountId?: string;
    /**
     * Specify the number of results to include per page.
     */
    pageSize?: number;
    /**
     * The page token as return from ListPublisherProfilesResponse.
     */
    pageToken?: string;
  }



  export class Resource$Bidders {
    root: Adexchangebuyer2;
    accounts: Resource$Bidders$Accounts;
    filterSets: Resource$Bidders$Filtersets;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.accounts = new Resource$Bidders$Accounts(root);
      this.filterSets = new Resource$Bidders$Filtersets(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Bidders$Accounts {
    root: Adexchangebuyer2;
    creatives: Resource$Bidders$Accounts$Creatives;
    filterSets: Resource$Bidders$Accounts$Filtersets;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.creatives = new Resource$Bidders$Accounts$Creatives(root);
      this.filterSets = new Resource$Bidders$Accounts$Filtersets(root);
    }

    getRoot() {
      return this.root;
    }
  }


  export class Resource$Bidders$Accounts$Creatives {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.creatives.delete
     * @desc Deletes a single creative.  A creative is deactivated upon deletion
     * and does not count against active snippet quota. A deleted creative
     * should not be used in bidding (all bids with that creative will be
     * rejected).
     * @alias adexchangebuyer2.bidders.accounts.creatives.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.creativeId The ID of the creative to delete.
     * @param {string} params.ownerName Name of the owner (bidder or account) of the creative to be deleted. For example:  - For an account-level creative for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level creative for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Bidders$Accounts$Creatives$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Bidders$Accounts$Creatives$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Bidders$Accounts$Creatives$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Bidders$Accounts$Creatives$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Creatives$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Accounts$Creatives$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+ownerName}/creatives/{creativeId}')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['ownerName', 'creativeId'],
        pathParams: ['creativeId', 'ownerName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Creatives$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the creative to delete.
     */
    creativeId?: string;
    /**
     * Name of the owner (bidder or account) of the creative to be deleted. For
     * example:  - For an account-level creative for the buyer account
     * representing bidder   123: `bidders/123/accounts/123`  - For an
     * account-level creative for the child seat buyer account 456   whose
     * bidder is 123: `bidders/123/accounts/456`
     */
    ownerName?: string;
  }


  export class Resource$Bidders$Accounts$Filtersets {
    root: Adexchangebuyer2;
    bidMetrics: Resource$Bidders$Accounts$Filtersets$Bidmetrics;
    bidResponseErrors: Resource$Bidders$Accounts$Filtersets$Bidresponseerrors;
    bidResponsesWithoutBids:
        Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids;
    filteredBidRequests:
        Resource$Bidders$Accounts$Filtersets$Filteredbidrequests;
    filteredBids: Resource$Bidders$Accounts$Filtersets$Filteredbids;
    impressionMetrics: Resource$Bidders$Accounts$Filtersets$Impressionmetrics;
    losingBids: Resource$Bidders$Accounts$Filtersets$Losingbids;
    nonBillableWinningBids:
        Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.bidMetrics =
          new Resource$Bidders$Accounts$Filtersets$Bidmetrics(root);
      this.bidResponseErrors =
          new Resource$Bidders$Accounts$Filtersets$Bidresponseerrors(root);
      this.bidResponsesWithoutBids =
          new Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids(
              root);
      this.filteredBidRequests =
          new Resource$Bidders$Accounts$Filtersets$Filteredbidrequests(root);
      this.filteredBids =
          new Resource$Bidders$Accounts$Filtersets$Filteredbids(root);
      this.impressionMetrics =
          new Resource$Bidders$Accounts$Filtersets$Impressionmetrics(root);
      this.losingBids =
          new Resource$Bidders$Accounts$Filtersets$Losingbids(root);
      this.nonBillableWinningBids =
          new Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.create
     * @desc Creates the specified filter set for the account with the given
     * account ID.
     * @alias adexchangebuyer2.bidders.accounts.filterSets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
     * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
     * @param {().FilterSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Bidders$Accounts$Filtersets$Create,
        options?: MethodOptions): AxiosPromise<Schema$FilterSet>;
    create(
        params: Params$Resource$Bidders$Accounts$Filtersets$Create,
        options: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
        callback: BodyResponseCallback<Schema$FilterSet>): void;
    create(
        params: Params$Resource$Bidders$Accounts$Filtersets$Create,
        callback: BodyResponseCallback<Schema$FilterSet>): void;
    create(callback: BodyResponseCallback<Schema$FilterSet>): void;
    create(
        paramsOrCallback?: Params$Resource$Bidders$Accounts$Filtersets$Create|
        BodyResponseCallback<Schema$FilterSet>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FilterSet>,
        callback?: BodyResponseCallback<Schema$FilterSet>):
        void|AxiosPromise<Schema$FilterSet> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Accounts$Filtersets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['ownerName'],
        pathParams: ['ownerName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FilterSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FilterSet>(parameters);
      }
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.delete
     * @desc Deletes the requested filter set from the account with the given
     * account ID.
     * @alias adexchangebuyer2.bidders.accounts.filterSets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Full name of the resource to delete. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Bidders$Accounts$Filtersets$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Bidders$Accounts$Filtersets$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Bidders$Accounts$Filtersets$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Bidders$Accounts$Filtersets$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Accounts$Filtersets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.get
     * @desc Retrieves the requested filter set for the account with the given
     * account ID.
     * @alias adexchangebuyer2.bidders.accounts.filterSets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Full name of the resource being requested. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Bidders$Accounts$Filtersets$Get,
        options?: MethodOptions): AxiosPromise<Schema$FilterSet>;
    get(params: Params$Resource$Bidders$Accounts$Filtersets$Get,
        options: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
        callback: BodyResponseCallback<Schema$FilterSet>): void;
    get(params: Params$Resource$Bidders$Accounts$Filtersets$Get,
        callback: BodyResponseCallback<Schema$FilterSet>): void;
    get(callback: BodyResponseCallback<Schema$FilterSet>): void;
    get(paramsOrCallback?: Params$Resource$Bidders$Accounts$Filtersets$Get|
        BodyResponseCallback<Schema$FilterSet>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FilterSet>,
        callback?: BodyResponseCallback<Schema$FilterSet>):
        void|AxiosPromise<Schema$FilterSet> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Accounts$Filtersets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FilterSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FilterSet>(parameters);
      }
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.list
     * @desc Lists all filter sets for the account with the given account ID.
     * @alias adexchangebuyer2.bidders.accounts.filterSets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Accounts$Filtersets$List,
        options?: MethodOptions): AxiosPromise<Schema$ListFilterSetsResponse>;
    list(
        params: Params$Resource$Bidders$Accounts$Filtersets$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListFilterSetsResponse>,
        callback: BodyResponseCallback<Schema$ListFilterSetsResponse>): void;
    list(
        params: Params$Resource$Bidders$Accounts$Filtersets$List,
        callback: BodyResponseCallback<Schema$ListFilterSetsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListFilterSetsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Bidders$Accounts$Filtersets$List|
        BodyResponseCallback<Schema$ListFilterSetsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListFilterSetsResponse>,
        callback?: BodyResponseCallback<Schema$ListFilterSetsResponse>):
        void|AxiosPromise<Schema$ListFilterSetsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Accounts$Filtersets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['ownerName'],
        pathParams: ['ownerName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListFilterSetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFilterSetsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Whether the filter set is transient, or should be persisted indefinitely.
     * By default, filter sets are not transient. If transient, it will be
     * available for at least 1 hour after creation.
     */
    isTransient?: boolean;
    /**
     * Name of the owner (bidder or account) of the filter set to be created.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123`  - For an account-level filter set for the buyer account
     * representing bidder   123: `bidders/123/accounts/123`  - For an
     * account-level filter set for the child seat buyer account 456   whose
     * bidder is 123: `bidders/123/accounts/456`
     */
    ownerName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FilterSet;
  }
  export interface Params$Resource$Bidders$Accounts$Filtersets$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Full name of the resource to delete. For example:  - For a bidder-level
     * filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an
     * account-level filter set for the buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$Accounts$Filtersets$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Full name of the resource being requested. For example:  - For a
     * bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  -
     * For an account-level filter set for the buyer account representing bidder
     * 123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level
     * filter set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$Accounts$Filtersets$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the owner (bidder or account) of the filter sets to be listed.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123`  - For an account-level filter set for the buyer account
     * representing bidder   123: `bidders/123/accounts/123`  - For an
     * account-level filter set for the child seat buyer account 456   whose
     * bidder is 123: `bidders/123/accounts/456`
     */
    ownerName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListFilterSetsResponse.nextPageToken
     * returned from the previous call to the accounts.filterSets.list method.
     */
    pageToken?: string;
  }

  export class Resource$Bidders$Accounts$Filtersets$Bidmetrics {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
     * @desc Lists all metrics that are measured in terms of number of bids.
     * @alias adexchangebuyer2.bidders.accounts.filterSets.bidMetrics.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Accounts$Filtersets$Bidmetrics$List,
        options?: MethodOptions): AxiosPromise<Schema$ListBidMetricsResponse>;
    list(
        params: Params$Resource$Bidders$Accounts$Filtersets$Bidmetrics$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListBidMetricsResponse>,
        callback: BodyResponseCallback<Schema$ListBidMetricsResponse>): void;
    list(
        params: Params$Resource$Bidders$Accounts$Filtersets$Bidmetrics$List,
        callback: BodyResponseCallback<Schema$ListBidMetricsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListBidMetricsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Bidmetrics$List|
        BodyResponseCallback<Schema$ListBidMetricsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListBidMetricsResponse>,
        callback?: BodyResponseCallback<Schema$ListBidMetricsResponse>):
        void|AxiosPromise<Schema$ListBidMetricsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Bidmetrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Bidmetrics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/bidMetrics')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListBidMetricsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBidMetricsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Bidmetrics$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListBidMetricsResponse.nextPageToken
     * returned from the previous call to the bidMetrics.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Accounts$Filtersets$Bidresponseerrors {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
     * @desc List all errors that occurred in bid responses, with the number of
     * bid responses affected for each reason.
     * @alias
     * adexchangebuyer2.bidders.accounts.filterSets.bidResponseErrors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseerrors$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListBidResponseErrorsResponse>;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseerrors$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
        callback: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
        void;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseerrors$List,
        callback: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseerrors$List|
        BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
        callback?: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
        void|AxiosPromise<Schema$ListBidResponseErrorsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Bidresponseerrors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseerrors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/bidResponseErrors')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListBidResponseErrorsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBidResponseErrorsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Bidresponseerrors$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListBidResponseErrorsResponse.nextPageToken returned from the previous
     * call to the bidResponseErrors.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
     * @desc List all reasons for which bid responses were considered to have no
     * applicable bids, with the number of bid responses affected for each
     * reason.
     * @alias
     * adexchangebuyer2.bidders.accounts.filterSets.bidResponsesWithoutBids.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListBidResponsesWithoutBidsResponse>;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
        callback:
            BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
        void;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids$List,
        callback:
            BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids$List|
        BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
        callback?:
            BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
        void|AxiosPromise<Schema$ListBidResponsesWithoutBidsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/{+filterSetName}/bidResponsesWithoutBids')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListBidResponsesWithoutBidsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBidResponsesWithoutBidsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Bidresponseswithoutbids$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListBidResponsesWithoutBidsResponse.nextPageToken returned from the
     * previous call to the bidResponsesWithoutBids.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Accounts$Filtersets$Filteredbidrequests {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
     * @desc List all reasons that caused a bid request not to be sent for an
     * impression, with the number of bid requests not sent for each reason.
     * @alias
     * adexchangebuyer2.bidders.accounts.filterSets.filteredBidRequests.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbidrequests$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListFilteredBidRequestsResponse>;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbidrequests$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
        callback: BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
        void;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbidrequests$List,
        callback: BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbidrequests$List|
        BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
        callback?:
            BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
        void|AxiosPromise<Schema$ListFilteredBidRequestsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Filteredbidrequests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbidrequests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBidRequests')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListFilteredBidRequestsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFilteredBidRequestsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Filteredbidrequests$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListFilteredBidRequestsResponse.nextPageToken returned from the previous
     * call to the filteredBidRequests.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Accounts$Filtersets$Filteredbids {
    root: Adexchangebuyer2;
    creatives: Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives;
    details: Resource$Bidders$Accounts$Filtersets$Filteredbids$Details;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.creatives =
          new Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives(root);
      this.details =
          new Resource$Bidders$Accounts$Filtersets$Filteredbids$Details(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
     * @desc List all reasons for which bids were filtered, with the number of
     * bids filtered for each reason.
     * @alias adexchangebuyer2.bidders.accounts.filterSets.filteredBids.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$List,
        options?: MethodOptions): AxiosPromise<Schema$ListFilteredBidsResponse>;
    list(
        params: Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListFilteredBidsResponse>,
        callback: BodyResponseCallback<Schema$ListFilteredBidsResponse>): void;
    list(
        params: Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$List,
        callback: BodyResponseCallback<Schema$ListFilteredBidsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListFilteredBidsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$List|
        BodyResponseCallback<Schema$ListFilteredBidsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListFilteredBidsResponse>,
        callback?: BodyResponseCallback<Schema$ListFilteredBidsResponse>):
        void|AxiosPromise<Schema$ListFilteredBidsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBids')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListFilteredBidsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFilteredBidsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListFilteredBidsResponse.nextPageToken
     * returned from the previous call to the filteredBids.list method.
     */
    pageToken?: string;
  }

  export class Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
     * @desc List all creatives associated with a specific reason for which bids
     * were filtered, with the number of bids filtered for each creative.
     * @alias
     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.creatives.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListCreativeStatusBreakdownByCreativeResponse>;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>,
        callback: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>): void;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives$List,
        callback: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$ListCreativeStatusBreakdownByCreativeResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives$List|
        BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>,
        callback?: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>): void|
        AxiosPromise<Schema$ListCreativeStatusBreakdownByCreativeResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName', 'creativeStatusId'],
        pathParams: ['creativeStatusId', 'filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListCreativeStatusBreakdownByCreativeResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Creatives$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the creative status for which to retrieve a breakdown by
     * creative. See
     * [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     */
    creativeStatusId?: number;
    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from
     * the previous call to the filteredBids.creatives.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Accounts$Filtersets$Filteredbids$Details {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
     * @desc List all details associated with a specific reason for which bids
     * were filtered, with the number of bids filtered for each detail.
     * @alias
     * adexchangebuyer2.bidders.accounts.filterSets.filteredBids.details.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Details$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListCreativeStatusBreakdownByDetailResponse>;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Details$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>,
        callback: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>): void;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Details$List,
        callback: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$ListCreativeStatusBreakdownByDetailResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Details$List|
        BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>,
        callback?: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>):
        void|AxiosPromise<Schema$ListCreativeStatusBreakdownByDetailResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Details$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Details$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName', 'creativeStatusId'],
        pathParams: ['creativeStatusId', 'filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListCreativeStatusBreakdownByDetailResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListCreativeStatusBreakdownByDetailResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Filteredbids$Details$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the creative status for which to retrieve a breakdown by
     * detail. See
     * [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * Details are only available for statuses 10, 14, 15, 17, 18, 19, 86,
     * and 87.
     */
    creativeStatusId?: number;
    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from
     * the previous call to the filteredBids.details.list method.
     */
    pageToken?: string;
  }



  export class Resource$Bidders$Accounts$Filtersets$Impressionmetrics {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
     * @desc Lists all metrics that are measured in terms of number of
     * impressions.
     * @alias
     * adexchangebuyer2.bidders.accounts.filterSets.impressionMetrics.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Bidders$Accounts$Filtersets$Impressionmetrics$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListImpressionMetricsResponse>;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Impressionmetrics$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
        callback: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
        void;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Impressionmetrics$List,
        callback: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Impressionmetrics$List|
        BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
        callback?: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
        void|AxiosPromise<Schema$ListImpressionMetricsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Impressionmetrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Impressionmetrics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/impressionMetrics')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListImpressionMetricsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListImpressionMetricsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Impressionmetrics$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListImpressionMetricsResponse.nextPageToken returned from the previous
     * call to the impressionMetrics.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Accounts$Filtersets$Losingbids {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
     * @desc List all reasons for which bids lost in the auction, with the
     * number of bids that lost for each reason.
     * @alias adexchangebuyer2.bidders.accounts.filterSets.losingBids.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Accounts$Filtersets$Losingbids$List,
        options?: MethodOptions): AxiosPromise<Schema$ListLosingBidsResponse>;
    list(
        params: Params$Resource$Bidders$Accounts$Filtersets$Losingbids$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLosingBidsResponse>,
        callback: BodyResponseCallback<Schema$ListLosingBidsResponse>): void;
    list(
        params: Params$Resource$Bidders$Accounts$Filtersets$Losingbids$List,
        callback: BodyResponseCallback<Schema$ListLosingBidsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLosingBidsResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Losingbids$List|
        BodyResponseCallback<Schema$ListLosingBidsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLosingBidsResponse>,
        callback?: BodyResponseCallback<Schema$ListLosingBidsResponse>):
        void|AxiosPromise<Schema$ListLosingBidsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Losingbids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Losingbids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/losingBids')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListLosingBidsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLosingBidsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Losingbids$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListLosingBidsResponse.nextPageToken
     * returned from the previous call to the losingBids.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
     * @desc List all reasons for which winning bids were not billable, with the
     * number of bids not billed for each reason.
     * @alias
     * adexchangebuyer2.bidders.accounts.filterSets.nonBillableWinningBids.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListNonBillableWinningBidsResponse>;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
        callback:
            BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
        void;
    list(
        params:
            Params$Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids$List,
        callback:
            BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids$List|
        BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
        callback?:
            BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
        void|AxiosPromise<Schema$ListNonBillableWinningBidsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v2beta1/{+filterSetName}/nonBillableWinningBids')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListNonBillableWinningBidsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListNonBillableWinningBidsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Accounts$Filtersets$Nonbillablewinningbids$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListNonBillableWinningBidsResponse.nextPageToken returned from the
     * previous call to the nonBillableWinningBids.list method.
     */
    pageToken?: string;
  }



  export class Resource$Bidders$Filtersets {
    root: Adexchangebuyer2;
    bidMetrics: Resource$Bidders$Filtersets$Bidmetrics;
    bidResponseErrors: Resource$Bidders$Filtersets$Bidresponseerrors;
    bidResponsesWithoutBids:
        Resource$Bidders$Filtersets$Bidresponseswithoutbids;
    filteredBidRequests: Resource$Bidders$Filtersets$Filteredbidrequests;
    filteredBids: Resource$Bidders$Filtersets$Filteredbids;
    impressionMetrics: Resource$Bidders$Filtersets$Impressionmetrics;
    losingBids: Resource$Bidders$Filtersets$Losingbids;
    nonBillableWinningBids: Resource$Bidders$Filtersets$Nonbillablewinningbids;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.bidMetrics = new Resource$Bidders$Filtersets$Bidmetrics(root);
      this.bidResponseErrors =
          new Resource$Bidders$Filtersets$Bidresponseerrors(root);
      this.bidResponsesWithoutBids =
          new Resource$Bidders$Filtersets$Bidresponseswithoutbids(root);
      this.filteredBidRequests =
          new Resource$Bidders$Filtersets$Filteredbidrequests(root);
      this.filteredBids = new Resource$Bidders$Filtersets$Filteredbids(root);
      this.impressionMetrics =
          new Resource$Bidders$Filtersets$Impressionmetrics(root);
      this.losingBids = new Resource$Bidders$Filtersets$Losingbids(root);
      this.nonBillableWinningBids =
          new Resource$Bidders$Filtersets$Nonbillablewinningbids(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.create
     * @desc Creates the specified filter set for the account with the given
     * account ID.
     * @alias adexchangebuyer2.bidders.filterSets.create
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {boolean=} params.isTransient Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
     * @param {string} params.ownerName Name of the owner (bidder or account) of the filter set to be created. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
     * @param {().FilterSet} params.resource Request body data
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    create(
        params?: Params$Resource$Bidders$Filtersets$Create,
        options?: MethodOptions): AxiosPromise<Schema$FilterSet>;
    create(
        params: Params$Resource$Bidders$Filtersets$Create,
        options: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
        callback: BodyResponseCallback<Schema$FilterSet>): void;
    create(
        params: Params$Resource$Bidders$Filtersets$Create,
        callback: BodyResponseCallback<Schema$FilterSet>): void;
    create(callback: BodyResponseCallback<Schema$FilterSet>): void;
    create(
        paramsOrCallback?: Params$Resource$Bidders$Filtersets$Create|
        BodyResponseCallback<Schema$FilterSet>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FilterSet>,
        callback?: BodyResponseCallback<Schema$FilterSet>):
        void|AxiosPromise<Schema$FilterSet> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Bidders$Filtersets$Create;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Filtersets$Create;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'POST'
            },
            options),
        params,
        requiredParams: ['ownerName'],
        pathParams: ['ownerName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FilterSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FilterSet>(parameters);
      }
    }


    /**
     * adexchangebuyer2.bidders.filterSets.delete
     * @desc Deletes the requested filter set from the account with the given
     * account ID.
     * @alias adexchangebuyer2.bidders.filterSets.delete
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Full name of the resource to delete. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    delete(
        params?: Params$Resource$Bidders$Filtersets$Delete,
        options?: MethodOptions): AxiosPromise<Schema$Empty>;
    delete(
        params: Params$Resource$Bidders$Filtersets$Delete,
        options: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        params: Params$Resource$Bidders$Filtersets$Delete,
        callback: BodyResponseCallback<Schema$Empty>): void;
    delete(callback: BodyResponseCallback<Schema$Empty>): void;
    delete(
        paramsOrCallback?: Params$Resource$Bidders$Filtersets$Delete|
        BodyResponseCallback<Schema$Empty>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<Schema$Empty>,
        callback?: BodyResponseCallback<Schema$Empty>):
        void|AxiosPromise<Schema$Empty> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Bidders$Filtersets$Delete;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Filtersets$Delete;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'DELETE'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$Empty>(parameters, callback);
      } else {
        return createAPIRequest<Schema$Empty>(parameters);
      }
    }


    /**
     * adexchangebuyer2.bidders.filterSets.get
     * @desc Retrieves the requested filter set for the account with the given
     * account ID.
     * @alias adexchangebuyer2.bidders.filterSets.get
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.name Full name of the resource being requested. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    get(params?: Params$Resource$Bidders$Filtersets$Get,
        options?: MethodOptions): AxiosPromise<Schema$FilterSet>;
    get(params: Params$Resource$Bidders$Filtersets$Get,
        options: MethodOptions|BodyResponseCallback<Schema$FilterSet>,
        callback: BodyResponseCallback<Schema$FilterSet>): void;
    get(params: Params$Resource$Bidders$Filtersets$Get,
        callback: BodyResponseCallback<Schema$FilterSet>): void;
    get(callback: BodyResponseCallback<Schema$FilterSet>): void;
    get(paramsOrCallback?: Params$Resource$Bidders$Filtersets$Get|
        BodyResponseCallback<Schema$FilterSet>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$FilterSet>,
        callback?: BodyResponseCallback<Schema$FilterSet>):
        void|AxiosPromise<Schema$FilterSet> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Bidders$Filtersets$Get;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Filtersets$Get;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['name'],
        pathParams: ['name'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$FilterSet>(parameters, callback);
      } else {
        return createAPIRequest<Schema$FilterSet>(parameters);
      }
    }


    /**
     * adexchangebuyer2.bidders.filterSets.list
     * @desc Lists all filter sets for the account with the given account ID.
     * @alias adexchangebuyer2.bidders.filterSets.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.ownerName Name of the owner (bidder or account) of the filter sets to be listed. For example:  - For a bidder-level filter set for bidder 123: `bidders/123`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$List,
        options?: MethodOptions): AxiosPromise<Schema$ListFilterSetsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListFilterSetsResponse>,
        callback: BodyResponseCallback<Schema$ListFilterSetsResponse>): void;
    list(
        params: Params$Resource$Bidders$Filtersets$List,
        callback: BodyResponseCallback<Schema$ListFilterSetsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListFilterSetsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Bidders$Filtersets$List|
        BodyResponseCallback<Schema$ListFilterSetsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListFilterSetsResponse>,
        callback?: BodyResponseCallback<Schema$ListFilterSetsResponse>):
        void|AxiosPromise<Schema$ListFilterSetsResponse> {
      let params =
          (paramsOrCallback || {}) as Params$Resource$Bidders$Filtersets$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Filtersets$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+ownerName}/filterSets')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['ownerName'],
        pathParams: ['ownerName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListFilterSetsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFilterSetsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Create extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Whether the filter set is transient, or should be persisted indefinitely.
     * By default, filter sets are not transient. If transient, it will be
     * available for at least 1 hour after creation.
     */
    isTransient?: boolean;
    /**
     * Name of the owner (bidder or account) of the filter set to be created.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123`  - For an account-level filter set for the buyer account
     * representing bidder   123: `bidders/123/accounts/123`  - For an
     * account-level filter set for the child seat buyer account 456   whose
     * bidder is 123: `bidders/123/accounts/456`
     */
    ownerName?: string;

    /**
     * Request body metadata
     */
    requestBody?: Schema$FilterSet;
  }
  export interface Params$Resource$Bidders$Filtersets$Delete extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Full name of the resource to delete. For example:  - For a bidder-level
     * filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an
     * account-level filter set for the buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$Filtersets$Get extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Full name of the resource being requested. For example:  - For a
     * bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  -
     * For an account-level filter set for the buyer account representing bidder
     * 123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level
     * filter set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    name?: string;
  }
  export interface Params$Resource$Bidders$Filtersets$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the owner (bidder or account) of the filter sets to be listed.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123`  - For an account-level filter set for the buyer account
     * representing bidder   123: `bidders/123/accounts/123`  - For an
     * account-level filter set for the child seat buyer account 456   whose
     * bidder is 123: `bidders/123/accounts/456`
     */
    ownerName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListFilterSetsResponse.nextPageToken
     * returned from the previous call to the accounts.filterSets.list method.
     */
    pageToken?: string;
  }

  export class Resource$Bidders$Filtersets$Bidmetrics {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.bidMetrics.list
     * @desc Lists all metrics that are measured in terms of number of bids.
     * @alias adexchangebuyer2.bidders.filterSets.bidMetrics.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Bidmetrics$List,
        options?: MethodOptions): AxiosPromise<Schema$ListBidMetricsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Bidmetrics$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListBidMetricsResponse>,
        callback: BodyResponseCallback<Schema$ListBidMetricsResponse>): void;
    list(
        params: Params$Resource$Bidders$Filtersets$Bidmetrics$List,
        callback: BodyResponseCallback<Schema$ListBidMetricsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListBidMetricsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Bidders$Filtersets$Bidmetrics$List|
        BodyResponseCallback<Schema$ListBidMetricsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListBidMetricsResponse>,
        callback?: BodyResponseCallback<Schema$ListBidMetricsResponse>):
        void|AxiosPromise<Schema$ListBidMetricsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Bidmetrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Filtersets$Bidmetrics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/bidMetrics')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListBidMetricsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBidMetricsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Bidmetrics$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListBidMetricsResponse.nextPageToken
     * returned from the previous call to the bidMetrics.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Filtersets$Bidresponseerrors {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
     * @desc List all errors that occurred in bid responses, with the number of
     * bid responses affected for each reason.
     * @alias adexchangebuyer2.bidders.filterSets.bidResponseErrors.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Bidresponseerrors$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListBidResponseErrorsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Bidresponseerrors$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
        callback: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
        void;
    list(
        params: Params$Resource$Bidders$Filtersets$Bidresponseerrors$List,
        callback: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Filtersets$Bidresponseerrors$List|
        BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListBidResponseErrorsResponse>,
        callback?: BodyResponseCallback<Schema$ListBidResponseErrorsResponse>):
        void|AxiosPromise<Schema$ListBidResponseErrorsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Bidresponseerrors$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Filtersets$Bidresponseerrors$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/bidResponseErrors')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListBidResponseErrorsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBidResponseErrorsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Bidresponseerrors$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListBidResponseErrorsResponse.nextPageToken returned from the previous
     * call to the bidResponseErrors.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Filtersets$Bidresponseswithoutbids {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
     * @desc List all reasons for which bid responses were considered to have no
     * applicable bids, with the number of bid responses affected for each
     * reason.
     * @alias adexchangebuyer2.bidders.filterSets.bidResponsesWithoutBids.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?:
            Params$Resource$Bidders$Filtersets$Bidresponseswithoutbids$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListBidResponsesWithoutBidsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Bidresponseswithoutbids$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
        callback:
            BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
        void;
    list(
        params: Params$Resource$Bidders$Filtersets$Bidresponseswithoutbids$List,
        callback:
            BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Filtersets$Bidresponseswithoutbids$List|
        BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>,
        callback?:
            BodyResponseCallback<Schema$ListBidResponsesWithoutBidsResponse>):
        void|AxiosPromise<Schema$ListBidResponsesWithoutBidsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Bidresponseswithoutbids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Filtersets$Bidresponseswithoutbids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl +
                    '/v2beta1/{+filterSetName}/bidResponsesWithoutBids')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListBidResponsesWithoutBidsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListBidResponsesWithoutBidsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Bidresponseswithoutbids$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListBidResponsesWithoutBidsResponse.nextPageToken returned from the
     * previous call to the bidResponsesWithoutBids.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Filtersets$Filteredbidrequests {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
     * @desc List all reasons that caused a bid request not to be sent for an
     * impression, with the number of bid requests not sent for each reason.
     * @alias adexchangebuyer2.bidders.filterSets.filteredBidRequests.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Filteredbidrequests$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListFilteredBidRequestsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Filteredbidrequests$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
        callback: BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
        void;
    list(
        params: Params$Resource$Bidders$Filtersets$Filteredbidrequests$List,
        callback: BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Filtersets$Filteredbidrequests$List|
        BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>,
        callback?:
            BodyResponseCallback<Schema$ListFilteredBidRequestsResponse>):
        void|AxiosPromise<Schema$ListFilteredBidRequestsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Filteredbidrequests$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Filtersets$Filteredbidrequests$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBidRequests')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListFilteredBidRequestsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFilteredBidRequestsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Filteredbidrequests$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListFilteredBidRequestsResponse.nextPageToken returned from the previous
     * call to the filteredBidRequests.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Filtersets$Filteredbids {
    root: Adexchangebuyer2;
    creatives: Resource$Bidders$Filtersets$Filteredbids$Creatives;
    details: Resource$Bidders$Filtersets$Filteredbids$Details;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
      this.creatives =
          new Resource$Bidders$Filtersets$Filteredbids$Creatives(root);
      this.details = new Resource$Bidders$Filtersets$Filteredbids$Details(root);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.filteredBids.list
     * @desc List all reasons for which bids were filtered, with the number of
     * bids filtered for each reason.
     * @alias adexchangebuyer2.bidders.filterSets.filteredBids.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Filteredbids$List,
        options?: MethodOptions): AxiosPromise<Schema$ListFilteredBidsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Filteredbids$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListFilteredBidsResponse>,
        callback: BodyResponseCallback<Schema$ListFilteredBidsResponse>): void;
    list(
        params: Params$Resource$Bidders$Filtersets$Filteredbids$List,
        callback: BodyResponseCallback<Schema$ListFilteredBidsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListFilteredBidsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Bidders$Filtersets$Filteredbids$List|
        BodyResponseCallback<Schema$ListFilteredBidsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListFilteredBidsResponse>,
        callback?: BodyResponseCallback<Schema$ListFilteredBidsResponse>):
        void|AxiosPromise<Schema$ListFilteredBidsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Filteredbids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Filtersets$Filteredbids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/filteredBids')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListFilteredBidsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListFilteredBidsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Filteredbids$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListFilteredBidsResponse.nextPageToken
     * returned from the previous call to the filteredBids.list method.
     */
    pageToken?: string;
  }

  export class Resource$Bidders$Filtersets$Filteredbids$Creatives {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
     * @desc List all creatives associated with a specific reason for which bids
     * were filtered, with the number of bids filtered for each creative.
     * @alias adexchangebuyer2.bidders.filterSets.filteredBids.creatives.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Filteredbids$Creatives$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListCreativeStatusBreakdownByCreativeResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Filteredbids$Creatives$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>,
        callback: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>): void;
    list(
        params: Params$Resource$Bidders$Filtersets$Filteredbids$Creatives$List,
        callback: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$ListCreativeStatusBreakdownByCreativeResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Filtersets$Filteredbids$Creatives$List|
        BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>,
        callback?: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>): void|
        AxiosPromise<Schema$ListCreativeStatusBreakdownByCreativeResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Filteredbids$Creatives$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Filtersets$Filteredbids$Creatives$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName', 'creativeStatusId'],
        pathParams: ['creativeStatusId', 'filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListCreativeStatusBreakdownByCreativeResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListCreativeStatusBreakdownByCreativeResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Filteredbids$Creatives$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the creative status for which to retrieve a breakdown by
     * creative. See
     * [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     */
    creativeStatusId?: number;
    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from
     * the previous call to the filteredBids.creatives.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Filtersets$Filteredbids$Details {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.filteredBids.details.list
     * @desc List all details associated with a specific reason for which bids
     * were filtered, with the number of bids filtered for each detail.
     * @alias adexchangebuyer2.bidders.filterSets.filteredBids.details.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {integer} params.creativeStatusId The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Filteredbids$Details$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListCreativeStatusBreakdownByDetailResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Filteredbids$Details$List,
        options: MethodOptions|BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>,
        callback: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>): void;
    list(
        params: Params$Resource$Bidders$Filtersets$Filteredbids$Details$List,
        callback: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>): void;
    list(callback: BodyResponseCallback<
         Schema$ListCreativeStatusBreakdownByDetailResponse>): void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Filtersets$Filteredbids$Details$List|
        BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>,
        optionsOrCallback?: MethodOptions|BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>,
        callback?: BodyResponseCallback<
            Schema$ListCreativeStatusBreakdownByDetailResponse>):
        void|AxiosPromise<Schema$ListCreativeStatusBreakdownByDetailResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Filteredbids$Details$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Filtersets$Filteredbids$Details$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl +
                   '/v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName', 'creativeStatusId'],
        pathParams: ['creativeStatusId', 'filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListCreativeStatusBreakdownByDetailResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<
            Schema$ListCreativeStatusBreakdownByDetailResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Filteredbids$Details$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * The ID of the creative status for which to retrieve a breakdown by
     * detail. See
     * [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * Details are only available for statuses 10, 14, 15, 17, 18, 19, 86,
     * and 87.
     */
    creativeStatusId?: number;
    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from
     * the previous call to the filteredBids.details.list method.
     */
    pageToken?: string;
  }



  export class Resource$Bidders$Filtersets$Impressionmetrics {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.impressionMetrics.list
     * @desc Lists all metrics that are measured in terms of number of
     * impressions.
     * @alias adexchangebuyer2.bidders.filterSets.impressionMetrics.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Impressionmetrics$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListImpressionMetricsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Impressionmetrics$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
        callback: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
        void;
    list(
        params: Params$Resource$Bidders$Filtersets$Impressionmetrics$List,
        callback: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
        void;
    list(callback: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Filtersets$Impressionmetrics$List|
        BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListImpressionMetricsResponse>,
        callback?: BodyResponseCallback<Schema$ListImpressionMetricsResponse>):
        void|AxiosPromise<Schema$ListImpressionMetricsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Impressionmetrics$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Filtersets$Impressionmetrics$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/impressionMetrics')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListImpressionMetricsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListImpressionMetricsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Impressionmetrics$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListImpressionMetricsResponse.nextPageToken returned from the previous
     * call to the impressionMetrics.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Filtersets$Losingbids {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.losingBids.list
     * @desc List all reasons for which bids lost in the auction, with the
     * number of bids that lost for each reason.
     * @alias adexchangebuyer2.bidders.filterSets.losingBids.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Losingbids$List,
        options?: MethodOptions): AxiosPromise<Schema$ListLosingBidsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Losingbids$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListLosingBidsResponse>,
        callback: BodyResponseCallback<Schema$ListLosingBidsResponse>): void;
    list(
        params: Params$Resource$Bidders$Filtersets$Losingbids$List,
        callback: BodyResponseCallback<Schema$ListLosingBidsResponse>): void;
    list(callback: BodyResponseCallback<Schema$ListLosingBidsResponse>): void;
    list(
        paramsOrCallback?: Params$Resource$Bidders$Filtersets$Losingbids$List|
        BodyResponseCallback<Schema$ListLosingBidsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListLosingBidsResponse>,
        callback?: BodyResponseCallback<Schema$ListLosingBidsResponse>):
        void|AxiosPromise<Schema$ListLosingBidsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Losingbids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as Params$Resource$Bidders$Filtersets$Losingbids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url: (rootUrl + '/v2beta1/{+filterSetName}/losingBids')
                       .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListLosingBidsResponse>(parameters, callback);
      } else {
        return createAPIRequest<Schema$ListLosingBidsResponse>(parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Losingbids$List extends
      StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of ListLosingBidsResponse.nextPageToken
     * returned from the previous call to the losingBids.list method.
     */
    pageToken?: string;
  }


  export class Resource$Bidders$Filtersets$Nonbillablewinningbids {
    root: Adexchangebuyer2;
    constructor(root: Adexchangebuyer2) {
      this.root = root;
      this.getRoot.bind(this);
    }

    getRoot() {
      return this.root;
    }


    /**
     * adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
     * @desc List all reasons for which winning bids were not billable, with the
     * number of bids not billed for each reason.
     * @alias adexchangebuyer2.bidders.filterSets.nonBillableWinningBids.list
     * @memberOf! ()
     *
     * @param {object} params Parameters for request
     * @param {string} params.filterSetName Name of the filter set that should be applied to the requested metrics. For example:  - For a bidder-level filter set for bidder 123:   `bidders/123/filterSets/abc`  - For an account-level filter set for the buyer account representing bidder   123: `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter set for the child seat buyer account 456   whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer=} params.pageSize Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string=} params.pageToken A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
     * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
     * @param {callback} callback The callback that handles the response.
     * @return {object} Request object
     */
    list(
        params?: Params$Resource$Bidders$Filtersets$Nonbillablewinningbids$List,
        options?: MethodOptions):
        AxiosPromise<Schema$ListNonBillableWinningBidsResponse>;
    list(
        params: Params$Resource$Bidders$Filtersets$Nonbillablewinningbids$List,
        options: MethodOptions|
        BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
        callback:
            BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
        void;
    list(
        params: Params$Resource$Bidders$Filtersets$Nonbillablewinningbids$List,
        callback:
            BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
        void;
    list(callback:
             BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
        void;
    list(
        paramsOrCallback?:
            Params$Resource$Bidders$Filtersets$Nonbillablewinningbids$List|
        BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
        optionsOrCallback?: MethodOptions|
        BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>,
        callback?:
            BodyResponseCallback<Schema$ListNonBillableWinningBidsResponse>):
        void|AxiosPromise<Schema$ListNonBillableWinningBidsResponse> {
      let params = (paramsOrCallback || {}) as
          Params$Resource$Bidders$Filtersets$Nonbillablewinningbids$List;
      let options = (optionsOrCallback || {}) as MethodOptions;

      if (typeof paramsOrCallback === 'function') {
        callback = paramsOrCallback;
        params = {} as
            Params$Resource$Bidders$Filtersets$Nonbillablewinningbids$List;
        options = {};
      }

      if (typeof optionsOrCallback === 'function') {
        callback = optionsOrCallback;
        options = {};
      }

      const rootUrl =
          options.rootUrl || 'https://adexchangebuyer.googleapis.com/';
      const parameters = {
        options: Object.assign(
            {
              url:
                  (rootUrl + '/v2beta1/{+filterSetName}/nonBillableWinningBids')
                      .replace(/([^:]\/)\/+/g, '$1'),
              method: 'GET'
            },
            options),
        params,
        requiredParams: ['filterSetName'],
        pathParams: ['filterSetName'],
        context: this.getRoot()
      };
      if (callback) {
        createAPIRequest<Schema$ListNonBillableWinningBidsResponse>(
            parameters, callback);
      } else {
        return createAPIRequest<Schema$ListNonBillableWinningBidsResponse>(
            parameters);
      }
    }
  }

  export interface Params$Resource$Bidders$Filtersets$Nonbillablewinningbids$List
      extends StandardParameters {
    /**
     * Auth client or API Key for the request
     */
    auth?: string|OAuth2Client|JWT|Compute|UserRefreshClient;

    /**
     * Name of the filter set that should be applied to the requested metrics.
     * For example:  - For a bidder-level filter set for bidder 123:
     * `bidders/123/filterSets/abc`  - For an account-level filter set for the
     * buyer account representing bidder   123:
     * `bidders/123/accounts/123/filterSets/abc`  - For an account-level filter
     * set for the child seat buyer account 456   whose bidder is 123:
     * `bidders/123/accounts/456/filterSets/abc`
     */
    filterSetName?: string;
    /**
     * Requested page size. The server may return fewer results than requested.
     * If unspecified, the server will pick an appropriate default.
     */
    pageSize?: number;
    /**
     * A token identifying a page of results the server should return.
     * Typically, this is the value of
     * ListNonBillableWinningBidsResponse.nextPageToken returned from the
     * previous call to the nonBillableWinningBids.list method.
     */
    pageToken?: string;
  }
}
