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
export declare namespace games_v1 {
    interface Options extends GlobalOptions {
        version: 'v1';
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
     * Google Play Game Services API
     *
     * The API for Google Play Game Services.
     *
     * @example
     * const {google} = require('googleapis');
     * const games = google.games('v1');
     *
     * @namespace games
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Games
     */
    class Games {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        achievementDefinitions: Resource$Achievementdefinitions;
        achievements: Resource$Achievements;
        applications: Resource$Applications;
        events: Resource$Events;
        leaderboards: Resource$Leaderboards;
        metagame: Resource$Metagame;
        players: Resource$Players;
        pushtokens: Resource$Pushtokens;
        questMilestones: Resource$Questmilestones;
        quests: Resource$Quests;
        revisions: Resource$Revisions;
        rooms: Resource$Rooms;
        scores: Resource$Scores;
        snapshots: Resource$Snapshots;
        turnBasedMatches: Resource$Turnbasedmatches;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * This is a JSON template for an achievement definition object.
     */
    interface Schema$AchievementDefinition {
        /**
         * The type of the achievement. Possible values are:   -
         * &quot;STANDARD&quot; - Achievement is either locked or unlocked.  -
         * &quot;INCREMENTAL&quot; - Achievement is incremental.
         */
        achievementType?: string;
        /**
         * The description of the achievement.
         */
        description?: string;
        /**
         * Experience points which will be earned when unlocking this achievement.
         */
        experiencePoints?: string;
        /**
         * The total steps for an incremental achievement as a string.
         */
        formattedTotalSteps?: string;
        /**
         * The ID of the achievement.
         */
        id?: string;
        /**
         * The initial state of the achievement. Possible values are:   -
         * &quot;HIDDEN&quot; - Achievement is hidden.  - &quot;REVEALED&quot; -
         * Achievement is revealed.  - &quot;UNLOCKED&quot; - Achievement is
         * unlocked.
         */
        initialState?: string;
        /**
         * Indicates whether the revealed icon image being returned is a default
         * image, or is provided by the game.
         */
        isRevealedIconUrlDefault?: boolean;
        /**
         * Indicates whether the unlocked icon image being returned is a default
         * image, or is game-provided.
         */
        isUnlockedIconUrlDefault?: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementDefinition.
         */
        kind?: string;
        /**
         * The name of the achievement.
         */
        name?: string;
        /**
         * The image URL for the revealed achievement icon.
         */
        revealedIconUrl?: string;
        /**
         * The total steps for an incremental achievement.
         */
        totalSteps?: number;
        /**
         * The image URL for the unlocked achievement icon.
         */
        unlockedIconUrl?: string;
    }
    /**
     * This is a JSON template for a list of achievement definition objects.
     */
    interface Schema$AchievementDefinitionsListResponse {
        /**
         * The achievement definitions.
         */
        items?: Schema$AchievementDefinition[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementDefinitionsListResponse.
         */
        kind?: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for an achievement increment response
     */
    interface Schema$AchievementIncrementResponse {
        /**
         * The current steps recorded for this incremental achievement.
         */
        currentSteps?: number;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementIncrementResponse.
         */
        kind?: string;
        /**
         * Whether the current steps for the achievement has reached the number of
         * steps required to unlock.
         */
        newlyUnlocked?: boolean;
    }
    /**
     * This is a JSON template for an achievement reveal response
     */
    interface Schema$AchievementRevealResponse {
        /**
         * The current state of the achievement for which a reveal was attempted.
         * This might be UNLOCKED if the achievement was already unlocked. Possible
         * values are:   - &quot;REVEALED&quot; - Achievement is revealed.  -
         * &quot;UNLOCKED&quot; - Achievement is unlocked.
         */
        currentState?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementRevealResponse.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for an achievement set steps at least response.
     */
    interface Schema$AchievementSetStepsAtLeastResponse {
        /**
         * The current steps recorded for this incremental achievement.
         */
        currentSteps?: number;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementSetStepsAtLeastResponse.
         */
        kind?: string;
        /**
         * Whether the the current steps for the achievement has reached the number
         * of steps required to unlock.
         */
        newlyUnlocked?: boolean;
    }
    /**
     * This is a JSON template for an achievement unlock response
     */
    interface Schema$AchievementUnlockResponse {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementUnlockResponse.
         */
        kind?: string;
        /**
         * Whether this achievement was newly unlocked (that is, whether the unlock
         * request for the achievement was the first for the player).
         */
        newlyUnlocked?: boolean;
    }
    /**
     * This is a JSON template for a list of achievement update requests.
     */
    interface Schema$AchievementUpdateMultipleRequest {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementUpdateMultipleRequest.
         */
        kind?: string;
        /**
         * The individual achievement update requests.
         */
        updates?: Schema$AchievementUpdateRequest[];
    }
    /**
     * This is a JSON template for an achievement unlock response.
     */
    interface Schema$AchievementUpdateMultipleResponse {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementUpdateListResponse.
         */
        kind?: string;
        /**
         * The updated state of the achievements.
         */
        updatedAchievements?: Schema$AchievementUpdateResponse[];
    }
    /**
     * This is a JSON template for a request to update an achievement.
     */
    interface Schema$AchievementUpdateRequest {
        /**
         * The achievement this update is being applied to.
         */
        achievementId?: string;
        /**
         * The payload if an update of type INCREMENT was requested for the
         * achievement.
         */
        incrementPayload?: Schema$GamesAchievementIncrement;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementUpdateRequest.
         */
        kind?: string;
        /**
         * The payload if an update of type SET_STEPS_AT_LEAST was requested for the
         * achievement.
         */
        setStepsAtLeastPayload?: Schema$GamesAchievementSetStepsAtLeast;
        /**
         * The type of update being applied. Possible values are:   -
         * &quot;REVEAL&quot; - Achievement is revealed.  - &quot;UNLOCK&quot; -
         * Achievement is unlocked.  - &quot;INCREMENT&quot; - Achievement is
         * incremented.  - &quot;SET_STEPS_AT_LEAST&quot; - Achievement progress is
         * set to at least the passed value.
         */
        updateType?: string;
    }
    /**
     * This is a JSON template for an achievement update response.
     */
    interface Schema$AchievementUpdateResponse {
        /**
         * The achievement this update is was applied to.
         */
        achievementId?: string;
        /**
         * The current state of the achievement. Possible values are:   -
         * &quot;HIDDEN&quot; - Achievement is hidden.  - &quot;REVEALED&quot; -
         * Achievement is revealed.  - &quot;UNLOCKED&quot; - Achievement is
         * unlocked.
         */
        currentState?: string;
        /**
         * The current steps recorded for this achievement if it is incremental.
         */
        currentSteps?: number;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#achievementUpdateResponse.
         */
        kind?: string;
        /**
         * Whether this achievement was newly unlocked (that is, whether the unlock
         * request for the achievement was the first for the player).
         */
        newlyUnlocked?: boolean;
        /**
         * Whether the requested updates actually affected the achievement.
         */
        updateOccurred?: boolean;
    }
    /**
     * This is a JSON template for aggregate stats.
     */
    interface Schema$AggregateStats {
        /**
         * The number of messages sent between a pair of peers.
         */
        count?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#aggregateStats.
         */
        kind?: string;
        /**
         * The maximum amount.
         */
        max?: string;
        /**
         * The minimum amount.
         */
        min?: string;
        /**
         * The total number of bytes sent for messages between a pair of peers.
         */
        sum?: string;
    }
    /**
     * This is a JSON template for an anonymous player
     */
    interface Schema$AnonymousPlayer {
        /**
         * The base URL for the image to display for the anonymous player.
         */
        avatarImageUrl?: string;
        /**
         * The name to display for the anonymous player.
         */
        displayName?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#anonymousPlayer.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for the Application resource.
     */
    interface Schema$Application {
        /**
         * The number of achievements visible to the currently authenticated player.
         */
        achievement_count?: number;
        /**
         * The assets of the application.
         */
        assets?: Schema$ImageAsset[];
        /**
         * The author of the application.
         */
        author?: string;
        /**
         * The category of the application.
         */
        category?: Schema$ApplicationCategory;
        /**
         * The description of the application.
         */
        description?: string;
        /**
         * A list of features that have been enabled for the application. Possible
         * values are:   - &quot;SNAPSHOTS&quot; - Snapshots has been enabled
         */
        enabledFeatures?: string[];
        /**
         * The ID of the application.
         */
        id?: string;
        /**
         * The instances of the application.
         */
        instances?: Schema$Instance[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#application.
         */
        kind?: string;
        /**
         * The last updated timestamp of the application.
         */
        lastUpdatedTimestamp?: string;
        /**
         * The number of leaderboards visible to the currently authenticated player.
         */
        leaderboard_count?: number;
        /**
         * The name of the application.
         */
        name?: string;
        /**
         * A hint to the client UI for what color to use as an app-themed color. The
         * color is given as an RGB triplet (e.g. &quot;E0E0E0&quot;).
         */
        themeColor?: string;
    }
    /**
     * This is a JSON template for an application category object.
     */
    interface Schema$ApplicationCategory {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#applicationCategory.
         */
        kind?: string;
        /**
         * The primary category.
         */
        primary?: string;
        /**
         * The secondary category.
         */
        secondary?: string;
    }
    /**
     * This is a JSON template for a third party application verification response
     * resource.
     */
    interface Schema$ApplicationVerifyResponse {
        /**
         * An alternate ID that was once used for the player that was issued the
         * auth token used in this request. (This field is not normally populated.)
         */
        alternate_player_id?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#applicationVerifyResponse.
         */
        kind?: string;
        /**
         * The ID of the player that was issued the auth token used in this request.
         */
        player_id?: string;
    }
    /**
     * This is a JSON template for data related to individual game categories.
     */
    interface Schema$Category {
        /**
         * The category name.
         */
        category?: string;
        /**
         * Experience points earned in this category.
         */
        experiencePoints?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#category.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for a list of category data objects.
     */
    interface Schema$CategoryListResponse {
        /**
         * The list of categories with usage data.
         */
        items?: Schema$Category[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#categoryListResponse.
         */
        kind?: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for a batch update failure resource.
     */
    interface Schema$EventBatchRecordFailure {
        /**
         * The cause for the update failure. Possible values are:   -
         * &quot;TOO_LARGE&quot;: A batch request was issued with more events than
         * are allowed in a single batch.  - &quot;TIME_PERIOD_EXPIRED&quot;: A
         * batch was sent with data too far in the past to record.  -
         * &quot;TIME_PERIOD_SHORT&quot;: A batch was sent with a time range that
         * was too short.  - &quot;TIME_PERIOD_LONG&quot;: A batch was sent with a
         * time range that was too long.  - &quot;ALREADY_UPDATED&quot;: An attempt
         * was made to record a batch of data which was already seen.  -
         * &quot;RECORD_RATE_HIGH&quot;: An attempt was made to record data faster
         * than the server will apply updates.
         */
        failureCause?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventBatchRecordFailure.
         */
        kind?: string;
        /**
         * The time range which was rejected; empty for a request-wide failure.
         */
        range?: Schema$EventPeriodRange;
    }
    /**
     * This is a JSON template for an event child relationship resource.
     */
    interface Schema$EventChild {
        /**
         * The ID of the child event.
         */
        childId?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventChild.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for an event definition resource.
     */
    interface Schema$EventDefinition {
        /**
         * A list of events that are a child of this event.
         */
        childEvents?: Schema$EventChild[];
        /**
         * Description of what this event represents.
         */
        description?: string;
        /**
         * The name to display for the event.
         */
        displayName?: string;
        /**
         * The ID of the event.
         */
        id?: string;
        /**
         * The base URL for the image that represents the event.
         */
        imageUrl?: string;
        /**
         * Indicates whether the icon image being returned is a default image, or is
         * game-provided.
         */
        isDefaultImageUrl?: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventDefinition.
         */
        kind?: string;
        /**
         * The visibility of event being tracked in this definition. Possible values
         * are:   - &quot;REVEALED&quot;: This event should be visible to all users.
         * - &quot;HIDDEN&quot;: This event should only be shown to users that have
         * recorded this event at least once.
         */
        visibility?: string;
    }
    /**
     * This is a JSON template for a ListDefinitions response.
     */
    interface Schema$EventDefinitionListResponse {
        /**
         * The event definitions.
         */
        items?: Schema$EventDefinition[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventDefinitionListResponse.
         */
        kind?: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for an event period time range.
     */
    interface Schema$EventPeriodRange {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventPeriodRange.
         */
        kind?: string;
        /**
         * The time when this update period ends, in millis, since 1970 UTC (Unix
         * Epoch).
         */
        periodEndMillis?: string;
        /**
         * The time when this update period begins, in millis, since 1970 UTC (Unix
         * Epoch).
         */
        periodStartMillis?: string;
    }
    /**
     * This is a JSON template for an event period update resource.
     */
    interface Schema$EventPeriodUpdate {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventPeriodUpdate.
         */
        kind?: string;
        /**
         * The time period being covered by this update.
         */
        timePeriod?: Schema$EventPeriodRange;
        /**
         * The updates being made for this time period.
         */
        updates?: Schema$EventUpdateRequest[];
    }
    /**
     * This is a JSON template for an event update failure resource.
     */
    interface Schema$EventRecordFailure {
        /**
         * The ID of the event that was not updated.
         */
        eventId?: string;
        /**
         * The cause for the update failure. Possible values are:   -
         * &quot;NOT_FOUND&quot; - An attempt was made to set an event that was not
         * defined.  - &quot;INVALID_UPDATE_VALUE&quot; - An attempt was made to
         * increment an event by a non-positive value.
         */
        failureCause?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventRecordFailure.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for an event period update resource.
     */
    interface Schema$EventRecordRequest {
        /**
         * The current time when this update was sent, in milliseconds, since 1970
         * UTC (Unix Epoch).
         */
        currentTimeMillis?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventRecordRequest.
         */
        kind?: string;
        /**
         * The request ID used to identify this attempt to record events.
         */
        requestId?: string;
        /**
         * A list of the time period updates being made in this request.
         */
        timePeriods?: Schema$EventPeriodUpdate[];
    }
    /**
     * This is a JSON template for an event period update resource.
     */
    interface Schema$EventUpdateRequest {
        /**
         * The ID of the event being modified in this update.
         */
        definitionId?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventUpdateRequest.
         */
        kind?: string;
        /**
         * The number of times this event occurred in this time period.
         */
        updateCount?: string;
    }
    /**
     * This is a JSON template for an event period update resource.
     */
    interface Schema$EventUpdateResponse {
        /**
         * Any batch-wide failures which occurred applying updates.
         */
        batchFailures?: Schema$EventBatchRecordFailure[];
        /**
         * Any failures updating a particular event.
         */
        eventFailures?: Schema$EventRecordFailure[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#eventUpdateResponse.
         */
        kind?: string;
        /**
         * The current status of any updated events
         */
        playerEvents?: Schema$PlayerEvent[];
    }
    /**
     * This is a JSON template for the payload to request to increment an
     * achievement.
     */
    interface Schema$GamesAchievementIncrement {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#GamesAchievementIncrement.
         */
        kind?: string;
        /**
         * The requestId associated with an increment to an achievement.
         */
        requestId?: string;
        /**
         * The number of steps to be incremented.
         */
        steps?: number;
    }
    /**
     * This is a JSON template for the payload to request to increment an
     * achievement.
     */
    interface Schema$GamesAchievementSetStepsAtLeast {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#GamesAchievementSetStepsAtLeast.
         */
        kind?: string;
        /**
         * The minimum number of steps for the achievement to be set to.
         */
        steps?: number;
    }
    /**
     * This is a JSON template for an image asset object.
     */
    interface Schema$ImageAsset {
        /**
         * The height of the asset.
         */
        height?: number;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#imageAsset.
         */
        kind?: string;
        /**
         * The name of the asset.
         */
        name?: string;
        /**
         * The URL of the asset.
         */
        url?: string;
        /**
         * The width of the asset.
         */
        width?: number;
    }
    /**
     * This is a JSON template for the Instance resource.
     */
    interface Schema$Instance {
        /**
         * URI which shows where a user can acquire this instance.
         */
        acquisitionUri?: string;
        /**
         * Platform dependent details for Android.
         */
        androidInstance?: Schema$InstanceAndroidDetails;
        /**
         * Platform dependent details for iOS.
         */
        iosInstance?: Schema$InstanceIosDetails;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#instance.
         */
        kind?: string;
        /**
         * Localized display name.
         */
        name?: string;
        /**
         * The platform type. Possible values are:   - &quot;ANDROID&quot; -
         * Instance is for Android.  - &quot;IOS&quot; - Instance is for iOS  -
         * &quot;WEB_APP&quot; - Instance is for Web App.
         */
        platformType?: string;
        /**
         * Flag to show if this game instance supports realtime play.
         */
        realtimePlay?: boolean;
        /**
         * Flag to show if this game instance supports turn based play.
         */
        turnBasedPlay?: boolean;
        /**
         * Platform dependent details for Web.
         */
        webInstance?: Schema$InstanceWebDetails;
    }
    /**
     * This is a JSON template for the Android instance details resource.
     */
    interface Schema$InstanceAndroidDetails {
        /**
         * Flag indicating whether the anti-piracy check is enabled.
         */
        enablePiracyCheck?: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#instanceAndroidDetails.
         */
        kind?: string;
        /**
         * Android package name which maps to Google Play URL.
         */
        packageName?: string;
        /**
         * Indicates that this instance is the default for new installations.
         */
        preferred?: boolean;
    }
    /**
     * This is a JSON template for the iOS details resource.
     */
    interface Schema$InstanceIosDetails {
        /**
         * Bundle identifier.
         */
        bundleIdentifier?: string;
        /**
         * iTunes App ID.
         */
        itunesAppId?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#instanceIosDetails.
         */
        kind?: string;
        /**
         * Indicates that this instance is the default for new installations on iPad
         * devices.
         */
        preferredForIpad?: boolean;
        /**
         * Indicates that this instance is the default for new installations on
         * iPhone devices.
         */
        preferredForIphone?: boolean;
        /**
         * Flag to indicate if this instance supports iPad.
         */
        supportIpad?: boolean;
        /**
         * Flag to indicate if this instance supports iPhone.
         */
        supportIphone?: boolean;
    }
    /**
     * This is a JSON template for the Web details resource.
     */
    interface Schema$InstanceWebDetails {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#instanceWebDetails.
         */
        kind?: string;
        /**
         * Launch URL for the game.
         */
        launchUrl?: string;
        /**
         * Indicates that this instance is the default for new installations.
         */
        preferred?: boolean;
    }
    /**
     * This is a JSON template for the Leaderboard resource.
     */
    interface Schema$Leaderboard {
        /**
         * The icon for the leaderboard.
         */
        iconUrl?: string;
        /**
         * The leaderboard ID.
         */
        id?: string;
        /**
         * Indicates whether the icon image being returned is a default image, or is
         * game-provided.
         */
        isIconUrlDefault?: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#leaderboard.
         */
        kind?: string;
        /**
         * The name of the leaderboard.
         */
        name?: string;
        /**
         * How scores are ordered. Possible values are:   -
         * &quot;LARGER_IS_BETTER&quot; - Larger values are better; scores are
         * sorted in descending order.  - &quot;SMALLER_IS_BETTER&quot; - Smaller
         * values are better; scores are sorted in ascending order.
         */
        order?: string;
    }
    /**
     * This is a JSON template for the Leaderboard Entry resource.
     */
    interface Schema$LeaderboardEntry {
        /**
         * The localized string for the numerical value of this score.
         */
        formattedScore?: string;
        /**
         * The localized string for the rank of this score for this leaderboard.
         */
        formattedScoreRank?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#leaderboardEntry.
         */
        kind?: string;
        /**
         * The player who holds this score.
         */
        player?: Schema$Player;
        /**
         * The rank of this score for this leaderboard.
         */
        scoreRank?: string;
        /**
         * Additional information about the score. Values must contain no more than
         * 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag?: string;
        /**
         * The numerical value of this score.
         */
        scoreValue?: string;
        /**
         * The time span of this high score. Possible values are:   -
         * &quot;ALL_TIME&quot; - The score is an all-time high score.  -
         * &quot;WEEKLY&quot; - The score is a weekly high score.  -
         * &quot;DAILY&quot; - The score is a daily high score.
         */
        timeSpan?: string;
        /**
         * The timestamp at which this score was recorded, in milliseconds since the
         * epoch in UTC.
         */
        writeTimestampMillis?: string;
    }
    /**
     * This is a JSON template for a list of leaderboard objects.
     */
    interface Schema$LeaderboardListResponse {
        /**
         * The leaderboards.
         */
        items?: Schema$Leaderboard[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#leaderboardListResponse.
         */
        kind?: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for a score rank in a leaderboard.
     */
    interface Schema$LeaderboardScoreRank {
        /**
         * The number of scores in the leaderboard as a string.
         */
        formattedNumScores?: string;
        /**
         * The rank in the leaderboard as a string.
         */
        formattedRank?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#leaderboardScoreRank.
         */
        kind?: string;
        /**
         * The number of scores in the leaderboard.
         */
        numScores?: string;
        /**
         * The rank in the leaderboard.
         */
        rank?: string;
    }
    /**
     * This is a JSON template for a ListScores response.
     */
    interface Schema$LeaderboardScores {
        /**
         * The scores in the leaderboard.
         */
        items?: Schema$LeaderboardEntry[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#leaderboardScores.
         */
        kind?: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string;
        /**
         * The total number of scores in the leaderboard.
         */
        numScores?: string;
        /**
         * The score of the requesting player on the leaderboard. The player&#39;s
         * score may appear both here and in the list of scores above. If you are
         * viewing a public leaderboard and the player is not sharing their gameplay
         * information publicly, the scoreRank and formattedScoreRank values will
         * not be present.
         */
        playerScore?: Schema$LeaderboardEntry;
        /**
         * The pagination token for the previous page of results.
         */
        prevPageToken?: string;
    }
    /**
     * This is a JSON template for the metagame config resource
     */
    interface Schema$MetagameConfig {
        /**
         * Current version of the metagame configuration data. When this data is
         * updated, the version number will be increased by one.
         */
        currentVersion?: number;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#metagameConfig.
         */
        kind?: string;
        /**
         * The list of player levels.
         */
        playerLevels?: Schema$PlayerLevel[];
    }
    /**
     * This is a JSON template for network diagnostics reported for a client.
     */
    interface Schema$NetworkDiagnostics {
        /**
         * The Android network subtype.
         */
        androidNetworkSubtype?: number;
        /**
         * The Android network type.
         */
        androidNetworkType?: number;
        /**
         * iOS network type as defined in Reachability.h.
         */
        iosNetworkType?: number;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#networkDiagnostics.
         */
        kind?: string;
        /**
         * The MCC+MNC code for the client&#39;s network connection. On Android:
         * http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator()
         * On iOS, see:
         * https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
         */
        networkOperatorCode?: string;
        /**
         * The name of the carrier of the client&#39;s network connection. On
         * Android:
         * http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName()
         * On iOS:
         * https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
         */
        networkOperatorName?: string;
        /**
         * The amount of time in milliseconds it took for the client to establish a
         * connection with the XMPP server.
         */
        registrationLatencyMillis?: number;
    }
    /**
     * This is a JSON template for a result for a match participant.
     */
    interface Schema$ParticipantResult {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#participantResult.
         */
        kind?: string;
        /**
         * The ID of the participant.
         */
        participantId?: string;
        /**
         * The placement or ranking of the participant in the match results; a
         * number from one to the number of participants in the match. Multiple
         * participants may have the same placing value in case of a type.
         */
        placing?: number;
        /**
         * The result of the participant for this match. Possible values are:   -
         * &quot;MATCH_RESULT_WIN&quot; - The participant won the match.  -
         * &quot;MATCH_RESULT_LOSS&quot; - The participant lost the match.  -
         * &quot;MATCH_RESULT_TIE&quot; - The participant tied the match.  -
         * &quot;MATCH_RESULT_NONE&quot; - There was no winner for the match (nobody
         * wins or loses this kind of game.)  - &quot;MATCH_RESULT_DISCONNECT&quot;
         * - The participant disconnected / left during the match.  -
         * &quot;MATCH_RESULT_DISAGREED&quot; - Different clients reported different
         * results for this participant.
         */
        result?: string;
    }
    /**
     * This is a JSON template for peer channel diagnostics.
     */
    interface Schema$PeerChannelDiagnostics {
        /**
         * Number of bytes received.
         */
        bytesReceived?: Schema$AggregateStats;
        /**
         * Number of bytes sent.
         */
        bytesSent?: Schema$AggregateStats;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#peerChannelDiagnostics.
         */
        kind?: string;
        /**
         * Number of messages lost.
         */
        numMessagesLost?: number;
        /**
         * Number of messages received.
         */
        numMessagesReceived?: number;
        /**
         * Number of messages sent.
         */
        numMessagesSent?: number;
        /**
         * Number of send failures.
         */
        numSendFailures?: number;
        /**
         * Roundtrip latency stats in milliseconds.
         */
        roundtripLatencyMillis?: Schema$AggregateStats;
    }
    /**
     * This is a JSON template for peer session diagnostics.
     */
    interface Schema$PeerSessionDiagnostics {
        /**
         * Connected time in milliseconds.
         */
        connectedTimestampMillis?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#peerSessionDiagnostics.
         */
        kind?: string;
        /**
         * The participant ID of the peer.
         */
        participantId?: string;
        /**
         * Reliable channel diagnostics.
         */
        reliableChannel?: Schema$PeerChannelDiagnostics;
        /**
         * Unreliable channel diagnostics.
         */
        unreliableChannel?: Schema$PeerChannelDiagnostics;
    }
    /**
     * This is a JSON template for metadata about a player playing a game with the
     * currently authenticated user.
     */
    interface Schema$Played {
        /**
         * True if the player was auto-matched with the currently authenticated
         * user.
         */
        autoMatched?: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#played.
         */
        kind?: string;
        /**
         * The last time the player played the game in milliseconds since the epoch
         * in UTC.
         */
        timeMillis?: string;
    }
    /**
     * This is a JSON template for a Player resource.
     */
    interface Schema$Player {
        /**
         * The base URL for the image that represents the player.
         */
        avatarImageUrl?: string;
        /**
         * The url to the landscape mode player banner image.
         */
        bannerUrlLandscape?: string;
        /**
         * The url to the portrait mode player banner image.
         */
        bannerUrlPortrait?: string;
        /**
         * The name to display for the player.
         */
        displayName?: string;
        /**
         * An object to represent Play Game experience information for the player.
         */
        experienceInfo?: Schema$PlayerExperienceInfo;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#player.
         */
        kind?: string;
        /**
         * Details about the last time this player played a multiplayer game with
         * the currently authenticated player. Populated for PLAYED_WITH player
         * collection members.
         */
        lastPlayedWith?: Schema$Played;
        /**
         * An object representation of the individual components of the player&#39;s
         * name. For some players, these fields may not be present.
         */
        name?: any;
        /**
         * The player ID that was used for this player the first time they signed
         * into the game in question. This is only populated for calls to player.get
         * for the requesting player, only if the player ID has subsequently
         * changed, and only to clients that support remapping player IDs.
         */
        originalPlayerId?: string;
        /**
         * The ID of the player.
         */
        playerId?: string;
        /**
         * The player&#39;s profile settings. Controls whether or not the
         * player&#39;s profile is visible to other players.
         */
        profileSettings?: Schema$ProfileSettings;
        /**
         * The player&#39;s title rewarded for their game activities.
         */
        title?: string;
    }
    /**
     * This is a JSON template for an achievement object.
     */
    interface Schema$PlayerAchievement {
        /**
         * The state of the achievement. Possible values are:   - &quot;HIDDEN&quot;
         * - Achievement is hidden.  - &quot;REVEALED&quot; - Achievement is
         * revealed.  - &quot;UNLOCKED&quot; - Achievement is unlocked.
         */
        achievementState?: string;
        /**
         * The current steps for an incremental achievement.
         */
        currentSteps?: number;
        /**
         * Experience points earned for the achievement. This field is absent for
         * achievements that have not yet been unlocked and 0 for achievements that
         * have been unlocked by testers but that are unpublished.
         */
        experiencePoints?: string;
        /**
         * The current steps for an incremental achievement as a string.
         */
        formattedCurrentStepsString?: string;
        /**
         * The ID of the achievement.
         */
        id?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerAchievement.
         */
        kind?: string;
        /**
         * The timestamp of the last modification to this achievement&#39;s state.
         */
        lastUpdatedTimestamp?: string;
    }
    /**
     * This is a JSON template for a list of achievement objects.
     */
    interface Schema$PlayerAchievementListResponse {
        /**
         * The achievements.
         */
        items?: Schema$PlayerAchievement[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerAchievementListResponse.
         */
        kind?: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for an event status resource.
     */
    interface Schema$PlayerEvent {
        /**
         * The ID of the event definition.
         */
        definitionId?: string;
        /**
         * The current number of times this event has occurred, as a string. The
         * formatting of this string depends on the configuration of your event in
         * the Play Games Developer Console.
         */
        formattedNumEvents?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerEvent.
         */
        kind?: string;
        /**
         * The current number of times this event has occurred.
         */
        numEvents?: string;
        /**
         * The ID of the player.
         */
        playerId?: string;
    }
    /**
     * This is a JSON template for a ListByPlayer response.
     */
    interface Schema$PlayerEventListResponse {
        /**
         * The player events.
         */
        items?: Schema$PlayerEvent[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerEventListResponse.
         */
        kind?: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for 1P/3P metadata about the player&#39;s
     * experience.
     */
    interface Schema$PlayerExperienceInfo {
        /**
         * The current number of experience points for the player.
         */
        currentExperiencePoints?: string;
        /**
         * The current level of the player.
         */
        currentLevel?: Schema$PlayerLevel;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerExperienceInfo.
         */
        kind?: string;
        /**
         * The timestamp when the player was leveled up, in millis since Unix epoch
         * UTC.
         */
        lastLevelUpTimestampMillis?: string;
        /**
         * The next level of the player. If the current level is the maximum level,
         * this should be same as the current level.
         */
        nextLevel?: Schema$PlayerLevel;
    }
    /**
     * This is a JSON template for a player leaderboard score object.
     */
    interface Schema$PlayerLeaderboardScore {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerLeaderboardScore.
         */
        kind?: string;
        /**
         * The ID of the leaderboard this score is in.
         */
        leaderboard_id?: string;
        /**
         * The public rank of the score in this leaderboard. This object will not be
         * present if the user is not sharing their scores publicly.
         */
        publicRank?: Schema$LeaderboardScoreRank;
        /**
         * The formatted value of this score.
         */
        scoreString?: string;
        /**
         * Additional information about the score. Values must contain no more than
         * 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag?: string;
        /**
         * The numerical value of this score.
         */
        scoreValue?: string;
        /**
         * The social rank of the score in this leaderboard.
         */
        socialRank?: Schema$LeaderboardScoreRank;
        /**
         * The time span of this score. Possible values are:   -
         * &quot;ALL_TIME&quot; - The score is an all-time score.  -
         * &quot;WEEKLY&quot; - The score is a weekly score.  - &quot;DAILY&quot; -
         * The score is a daily score.
         */
        timeSpan?: string;
        /**
         * The timestamp at which this score was recorded, in milliseconds since the
         * epoch in UTC.
         */
        writeTimestamp?: string;
    }
    /**
     * This is a JSON template for a list of player leaderboard scores.
     */
    interface Schema$PlayerLeaderboardScoreListResponse {
        /**
         * The leaderboard scores.
         */
        items?: Schema$PlayerLeaderboardScore[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerLeaderboardScoreListResponse.
         */
        kind?: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string;
        /**
         * The Player resources for the owner of this score.
         */
        player?: Schema$Player;
    }
    /**
     * This is a JSON template for 1P/3P metadata about a user&#39;s level.
     */
    interface Schema$PlayerLevel {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerLevel.
         */
        kind?: string;
        /**
         * The level for the user.
         */
        level?: number;
        /**
         * The maximum experience points for this level.
         */
        maxExperiencePoints?: string;
        /**
         * The minimum experience points for this level.
         */
        minExperiencePoints?: string;
    }
    /**
     * This is a JSON template for a third party player list response.
     */
    interface Schema$PlayerListResponse {
        /**
         * The players.
         */
        items?: Schema$Player[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerListResponse.
         */
        kind?: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for a player score.
     */
    interface Schema$PlayerScore {
        /**
         * The formatted score for this player score.
         */
        formattedScore?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerScore.
         */
        kind?: string;
        /**
         * The numerical value for this player score.
         */
        score?: string;
        /**
         * Additional information about this score. Values will contain no more than
         * 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag?: string;
        /**
         * The time span for this player score. Possible values are:   -
         * &quot;ALL_TIME&quot; - The score is an all-time score.  -
         * &quot;WEEKLY&quot; - The score is a weekly score.  - &quot;DAILY&quot; -
         * The score is a daily score.
         */
        timeSpan?: string;
    }
    /**
     * This is a JSON template for a list of score submission statuses.
     */
    interface Schema$PlayerScoreListResponse {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerScoreListResponse.
         */
        kind?: string;
        /**
         * The score submissions statuses.
         */
        submittedScores?: Schema$PlayerScoreResponse[];
    }
    /**
     * This is a JSON template for a list of leaderboard entry resources.
     */
    interface Schema$PlayerScoreResponse {
        /**
         * The time spans where the submitted score is better than the existing
         * score for that time span. Possible values are:   - &quot;ALL_TIME&quot; -
         * The score is an all-time score.  - &quot;WEEKLY&quot; - The score is a
         * weekly score.  - &quot;DAILY&quot; - The score is a daily score.
         */
        beatenScoreTimeSpans?: string[];
        /**
         * The formatted value of the submitted score.
         */
        formattedScore?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerScoreResponse.
         */
        kind?: string;
        /**
         * The leaderboard ID that this score was submitted to.
         */
        leaderboardId?: string;
        /**
         * Additional information about this score. Values will contain no more than
         * 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag?: string;
        /**
         * The scores in time spans that have not been beaten. As an example, the
         * submitted score may be better than the player&#39;s DAILY score, but not
         * better than the player&#39;s scores for the WEEKLY or ALL_TIME time
         * spans.
         */
        unbeatenScores?: Schema$PlayerScore[];
    }
    /**
     * This is a JSON template for a list of score submission requests
     */
    interface Schema$PlayerScoreSubmissionList {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#playerScoreSubmissionList.
         */
        kind?: string;
        /**
         * The score submissions.
         */
        scores?: Schema$ScoreSubmission[];
    }
    /**
     * This is a JSON template for profile settings
     */
    interface Schema$ProfileSettings {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#profileSettings.
         */
        kind?: string;
        /**
         * The player&#39;s current profile visibility. This field is visible to
         * both 1P and 3P APIs.
         */
        profileVisible?: boolean;
    }
    /**
     * This is a JSON template for a push token resource.
     */
    interface Schema$PushToken {
        /**
         * The revision of the client SDK used by your application, in the same
         * format that&#39;s used by revisions.check. Used to send backward
         * compatible messages. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible
         * values of PLATFORM_TYPE are:   - IOS - Push token is for iOS
         */
        clientRevision?: string;
        /**
         * Unique identifier for this push token.
         */
        id?: Schema$PushTokenId;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#pushToken.
         */
        kind?: string;
        /**
         * The preferred language for notifications that are sent using this token.
         */
        language?: string;
    }
    /**
     * This is a JSON template for a push token ID resource.
     */
    interface Schema$PushTokenId {
        /**
         * A push token ID for iOS devices.
         */
        ios?: any;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#pushTokenId.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for a Quest resource.
     */
    interface Schema$Quest {
        /**
         * The timestamp at which the user accepted the quest in milliseconds since
         * the epoch in UTC. Only present if the player has accepted the quest.
         */
        acceptedTimestampMillis?: string;
        /**
         * The ID of the application this quest is part of.
         */
        applicationId?: string;
        /**
         * The banner image URL for the quest.
         */
        bannerUrl?: string;
        /**
         * The description of the quest.
         */
        description?: string;
        /**
         * The timestamp at which the quest ceases to be active in milliseconds
         * since the epoch in UTC.
         */
        endTimestampMillis?: string;
        /**
         * The icon image URL for the quest.
         */
        iconUrl?: string;
        /**
         * The ID of the quest.
         */
        id?: string;
        /**
         * Indicates whether the banner image being returned is a default image, or
         * is game-provided.
         */
        isDefaultBannerUrl?: boolean;
        /**
         * Indicates whether the icon image being returned is a default image, or is
         * game-provided.
         */
        isDefaultIconUrl?: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#quest.
         */
        kind?: string;
        /**
         * The timestamp at which the quest was last updated by the user in
         * milliseconds since the epoch in UTC. Only present if the player has
         * accepted the quest.
         */
        lastUpdatedTimestampMillis?: string;
        /**
         * The quest milestones.
         */
        milestones?: Schema$QuestMilestone[];
        /**
         * The name of the quest.
         */
        name?: string;
        /**
         * The timestamp at which the user should be notified that the quest will
         * end soon in milliseconds since the epoch in UTC.
         */
        notifyTimestampMillis?: string;
        /**
         * The timestamp at which the quest becomes active in milliseconds since the
         * epoch in UTC.
         */
        startTimestampMillis?: string;
        /**
         * The state of the quest. Possible values are:   - &quot;UPCOMING&quot;:
         * The quest is upcoming. The user can see the quest, but cannot accept it
         * until it is open.  - &quot;OPEN&quot;: The quest is currently open and
         * may be accepted at this time.  - &quot;ACCEPTED&quot;: The user is
         * currently participating in this quest.  - &quot;COMPLETED&quot;: The user
         * has completed the quest.  - &quot;FAILED&quot;: The quest was attempted
         * but was not completed before the deadline expired.  -
         * &quot;EXPIRED&quot;: The quest has expired and was not accepted.  -
         * &quot;DELETED&quot;: The quest should be deleted from the local database.
         */
        state?: string;
    }
    /**
     * This is a JSON template for a Quest Criterion Contribution resource.
     */
    interface Schema$QuestContribution {
        /**
         * The formatted value of the contribution as a string. Format depends on
         * the configuration for the associated event definition in the Play Games
         * Developer Console.
         */
        formattedValue?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#questContribution.
         */
        kind?: string;
        /**
         * The value of the contribution.
         */
        value?: string;
    }
    /**
     * This is a JSON template for a Quest Criterion resource.
     */
    interface Schema$QuestCriterion {
        /**
         * The total number of times the associated event must be incremented for
         * the player to complete this quest.
         */
        completionContribution?: Schema$QuestContribution;
        /**
         * The number of increments the player has made toward the completion count
         * event increments required to complete the quest. This value will not
         * exceed the completion contribution. There will be no currentContribution
         * until the player has accepted the quest.
         */
        currentContribution?: Schema$QuestContribution;
        /**
         * The ID of the event the criterion corresponds to.
         */
        eventId?: string;
        /**
         * The value of the event associated with this quest at the time that the
         * quest was accepted. This value may change if event increments that took
         * place before the start of quest are uploaded after the quest starts.
         * There will be no initialPlayerProgress until the player has accepted the
         * quest.
         */
        initialPlayerProgress?: Schema$QuestContribution;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#questCriterion.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for a list of quest objects.
     */
    interface Schema$QuestListResponse {
        /**
         * The quests.
         */
        items?: Schema$Quest[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#questListResponse.
         */
        kind?: string;
        /**
         * Token corresponding to the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for a Quest Milestone resource.
     */
    interface Schema$QuestMilestone {
        /**
         * The completion reward data of the milestone, represented as a
         * Base64-encoded string. This is a developer-specified binary blob with
         * size between 0 and 2 KB before encoding.
         */
        completionRewardData?: string;
        /**
         * The criteria of the milestone.
         */
        criteria?: Schema$QuestCriterion[];
        /**
         * The milestone ID.
         */
        id?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#questMilestone.
         */
        kind?: string;
        /**
         * The current state of the milestone. Possible values are:   -
         * &quot;COMPLETED_NOT_CLAIMED&quot; - The milestone is complete, but has
         * not yet been claimed.  - &quot;CLAIMED&quot; - The milestone is complete
         * and has been claimed.  - &quot;NOT_COMPLETED&quot; - The milestone has
         * not yet been completed.  - &quot;NOT_STARTED&quot; - The milestone is for
         * a quest that has not yet been accepted.
         */
        state?: string;
    }
    /**
     * This is a JSON template for the result of checking a revision.
     */
    interface Schema$RevisionCheckResponse {
        /**
         * The version of the API this client revision should use when calling API
         * methods.
         */
        apiVersion?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#revisionCheckResponse.
         */
        kind?: string;
        /**
         * The result of the revision check. Possible values are:   - &quot;OK&quot;
         * - The revision being used is current.  - &quot;DEPRECATED&quot; - There
         * is currently a newer version available, but the revision being used still
         * works.  - &quot;INVALID&quot; - The revision being used is not supported
         * in any released version.
         */
        revisionStatus?: string;
    }
    /**
     * This is a JSON template for a room resource object.
     */
    interface Schema$Room {
        /**
         * The ID of the application being played.
         */
        applicationId?: string;
        /**
         * Criteria for auto-matching players into this room.
         */
        autoMatchingCriteria?: Schema$RoomAutoMatchingCriteria;
        /**
         * Auto-matching status for this room. Not set if the room is not currently
         * in the auto-matching queue.
         */
        autoMatchingStatus?: Schema$RoomAutoMatchStatus;
        /**
         * Details about the room creation.
         */
        creationDetails?: Schema$RoomModification;
        /**
         * This short description is generated by our servers and worded relative to
         * the player requesting the room. It is intended to be displayed when the
         * room is shown in a list (that is, an invitation to a room.)
         */
        description?: string;
        /**
         * The ID of the participant that invited the user to the room. Not set if
         * the user was not invited to the room.
         */
        inviterId?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#room.
         */
        kind?: string;
        /**
         * Details about the last update to the room.
         */
        lastUpdateDetails?: Schema$RoomModification;
        /**
         * The participants involved in the room, along with their statuses.
         * Includes participants who have left or declined invitations.
         */
        participants?: Schema$RoomParticipant[];
        /**
         * Globally unique ID for a room.
         */
        roomId?: string;
        /**
         * The version of the room status: an increasing counter, used by the client
         * to ignore out-of-order updates to room status.
         */
        roomStatusVersion?: number;
        /**
         * The status of the room. Possible values are:   -
         * &quot;ROOM_INVITING&quot; - One or more players have been invited and not
         * responded.  - &quot;ROOM_AUTO_MATCHING&quot; - One or more slots need to
         * be filled by auto-matching.  - &quot;ROOM_CONNECTING&quot; - Players have
         * joined and are connecting to each other (either before or after
         * auto-matching).  - &quot;ROOM_ACTIVE&quot; - All players have joined and
         * connected to each other.  - &quot;ROOM_DELETED&quot; - The room should no
         * longer be shown on the client. Returned in sync calls when a player joins
         * a room (as a tombstone), or for rooms where all joined participants have
         * left.
         */
        status?: string;
        /**
         * The variant / mode of the application being played; can be any integer
         * value, or left blank.
         */
        variant?: number;
    }
    /**
     * This is a JSON template for a room auto-match criteria object.
     */
    interface Schema$RoomAutoMatchingCriteria {
        /**
         * A bitmask indicating when auto-matches are valid. When ANDed with other
         * exclusive bitmasks, the result must be zero. Can be used to support
         * exclusive roles within a game.
         */
        exclusiveBitmask?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomAutoMatchingCriteria.
         */
        kind?: string;
        /**
         * The maximum number of players that should be added to the room by
         * auto-matching.
         */
        maxAutoMatchingPlayers?: number;
        /**
         * The minimum number of players that should be added to the room by
         * auto-matching.
         */
        minAutoMatchingPlayers?: number;
    }
    /**
     * This is a JSON template for status of room automatching that is in
     * progress.
     */
    interface Schema$RoomAutoMatchStatus {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomAutoMatchStatus.
         */
        kind?: string;
        /**
         * An estimate for the amount of time (in seconds) that auto-matching is
         * expected to take to complete.
         */
        waitEstimateSeconds?: number;
    }
    /**
     * This is a JSON template for the client address when setting up a room.
     */
    interface Schema$RoomClientAddress {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomClientAddress.
         */
        kind?: string;
        /**
         * The XMPP address of the client on the Google Games XMPP network.
         */
        xmppAddress?: string;
    }
    /**
     * This is a JSON template for a room creation request.
     */
    interface Schema$RoomCreateRequest {
        /**
         * Criteria for auto-matching players into this room.
         */
        autoMatchingCriteria?: Schema$RoomAutoMatchingCriteria;
        /**
         * The capabilities that this client supports for realtime communication.
         */
        capabilities?: string[];
        /**
         * Client address for the player creating the room.
         */
        clientAddress?: Schema$RoomClientAddress;
        /**
         * The player IDs to invite to the room.
         */
        invitedPlayerIds?: string[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomCreateRequest.
         */
        kind?: string;
        /**
         * Network diagnostics for the client creating the room.
         */
        networkDiagnostics?: Schema$NetworkDiagnostics;
        /**
         * A randomly generated numeric ID. This number is used at the server to
         * ensure that the request is handled correctly across retries.
         */
        requestId?: string;
        /**
         * The variant / mode of the application to be played. This can be any
         * integer value, or left blank. You should use a small number of variants
         * to keep the auto-matching pool as large as possible.
         */
        variant?: number;
    }
    /**
     * This is a JSON template for a join room request.
     */
    interface Schema$RoomJoinRequest {
        /**
         * The capabilities that this client supports for realtime communication.
         */
        capabilities?: string[];
        /**
         * Client address for the player joining the room.
         */
        clientAddress?: Schema$RoomClientAddress;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomJoinRequest.
         */
        kind?: string;
        /**
         * Network diagnostics for the client joining the room.
         */
        networkDiagnostics?: Schema$NetworkDiagnostics;
    }
    /**
     * This is a JSON template for room leave diagnostics.
     */
    interface Schema$RoomLeaveDiagnostics {
        /**
         * Android network subtype.
         * http://developer.android.com/reference/android/net/NetworkInfo.html#getSubtype()
         */
        androidNetworkSubtype?: number;
        /**
         * Android network type.
         * http://developer.android.com/reference/android/net/NetworkInfo.html#getType()
         */
        androidNetworkType?: number;
        /**
         * iOS network type as defined in Reachability.h.
         */
        iosNetworkType?: number;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomLeaveDiagnostics.
         */
        kind?: string;
        /**
         * The MCC+MNC code for the client&#39;s network connection. On Android:
         * http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperator()
         * On iOS, see:
         * https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html
         */
        networkOperatorCode?: string;
        /**
         * The name of the carrier of the client&#39;s network connection. On
         * Android:
         * http://developer.android.com/reference/android/telephony/TelephonyManager.html#getNetworkOperatorName()
         * On iOS:
         * https://developer.apple.com/library/ios/documentation/NetworkingInternet/Reference/CTCarrier/Reference/Reference.html#//apple_ref/occ/instp/CTCarrier/carrierName
         */
        networkOperatorName?: string;
        /**
         * Diagnostics about all peer sessions.
         */
        peerSession?: Schema$PeerSessionDiagnostics[];
        /**
         * Whether or not sockets were used.
         */
        socketsUsed?: boolean;
    }
    /**
     * This is a JSON template for a leave room request.
     */
    interface Schema$RoomLeaveRequest {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomLeaveRequest.
         */
        kind?: string;
        /**
         * Diagnostics for a player leaving the room.
         */
        leaveDiagnostics?: Schema$RoomLeaveDiagnostics;
        /**
         * Reason for leaving the match. Possible values are:   -
         * &quot;PLAYER_LEFT&quot; - The player chose to leave the room..  -
         * &quot;GAME_LEFT&quot; - The game chose to remove the player from the
         * room.  - &quot;REALTIME_ABANDONED&quot; - The player switched to another
         * application and abandoned the room.  -
         * &quot;REALTIME_PEER_CONNECTION_FAILURE&quot; - The client was unable to
         * establish a connection to other peer(s).  -
         * &quot;REALTIME_SERVER_CONNECTION_FAILURE&quot; - The client was unable to
         * communicate with the server.  - &quot;REALTIME_SERVER_ERROR&quot; - The
         * client received an error response when it tried to communicate with the
         * server.  - &quot;REALTIME_TIMEOUT&quot; - The client timed out while
         * waiting for a room.  - &quot;REALTIME_CLIENT_DISCONNECTING&quot; - The
         * client disconnects without first calling Leave.  -
         * &quot;REALTIME_SIGN_OUT&quot; - The user signed out of G+ while in the
         * room.  - &quot;REALTIME_GAME_CRASHED&quot; - The game crashed.  -
         * &quot;REALTIME_ROOM_SERVICE_CRASHED&quot; - RoomAndroidService crashed.
         * - &quot;REALTIME_DIFFERENT_CLIENT_ROOM_OPERATION&quot; - Another client
         * is trying to enter a room.  -
         * &quot;REALTIME_SAME_CLIENT_ROOM_OPERATION&quot; - The same client is
         * trying to enter a new room.
         */
        reason?: string;
    }
    /**
     * This is a JSON template for a list of rooms.
     */
    interface Schema$RoomList {
        /**
         * The rooms.
         */
        items?: Schema$Room[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomList.
         */
        kind?: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for room modification metadata.
     */
    interface Schema$RoomModification {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomModification.
         */
        kind?: string;
        /**
         * The timestamp at which they modified the room, in milliseconds since the
         * epoch in UTC.
         */
        modifiedTimestampMillis?: string;
        /**
         * The ID of the participant that modified the room.
         */
        participantId?: string;
    }
    /**
     * This is a JSON template for an update on the status of a peer in a room.
     */
    interface Schema$RoomP2PStatus {
        /**
         * The amount of time in milliseconds it took to establish connections with
         * this peer.
         */
        connectionSetupLatencyMillis?: number;
        /**
         * The error code in event of a failure. Possible values are:   -
         * &quot;P2P_FAILED&quot; - The client failed to establish a P2P connection
         * with the peer.  - &quot;PRESENCE_FAILED&quot; - The client failed to
         * register to receive P2P connections.  - &quot;RELAY_SERVER_FAILED&quot; -
         * The client received an error when trying to use the relay server to
         * establish a P2P connection with the peer.
         */
        error?: string;
        /**
         * More detailed diagnostic message returned in event of a failure.
         */
        error_reason?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomP2PStatus.
         */
        kind?: string;
        /**
         * The ID of the participant.
         */
        participantId?: string;
        /**
         * The status of the peer in the room. Possible values are:   -
         * &quot;CONNECTION_ESTABLISHED&quot; - The client established a P2P
         * connection with the peer.  - &quot;CONNECTION_FAILED&quot; - The client
         * failed to establish directed presence with the peer.
         */
        status?: string;
        /**
         * The amount of time in milliseconds it took to send packets back and forth
         * on the unreliable channel with this peer.
         */
        unreliableRoundtripLatencyMillis?: number;
    }
    /**
     * This is a JSON template for an update on the status of peers in a room.
     */
    interface Schema$RoomP2PStatuses {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomP2PStatuses.
         */
        kind?: string;
        /**
         * The updates for the peers.
         */
        updates?: Schema$RoomP2PStatus[];
    }
    /**
     * This is a JSON template for a participant in a room.
     */
    interface Schema$RoomParticipant {
        /**
         * True if this participant was auto-matched with the requesting player.
         */
        autoMatched?: boolean;
        /**
         * Information about a player that has been anonymously auto-matched against
         * the requesting player. (Either player or autoMatchedPlayer will be set.)
         */
        autoMatchedPlayer?: Schema$AnonymousPlayer;
        /**
         * The capabilities which can be used when communicating with this
         * participant.
         */
        capabilities?: string[];
        /**
         * Client address for the participant.
         */
        clientAddress?: Schema$RoomClientAddress;
        /**
         * True if this participant is in the fully connected set of peers in the
         * room.
         */
        connected?: boolean;
        /**
         * An identifier for the participant in the scope of the room. Cannot be
         * used to identify a player across rooms or in other contexts.
         */
        id?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomParticipant.
         */
        kind?: string;
        /**
         * The reason the participant left the room; populated if the participant
         * status is PARTICIPANT_LEFT. Possible values are:   -
         * &quot;PLAYER_LEFT&quot; - The player explicitly chose to leave the room.
         * - &quot;GAME_LEFT&quot; - The game chose to remove the player from the
         * room.  - &quot;ABANDONED&quot; - The player switched to another
         * application and abandoned the room. - &quot;PEER_CONNECTION_FAILURE&quot;
         * - The client was unable to establish or maintain a connection to other
         * peer(s) in the room. - &quot;SERVER_ERROR&quot; - The client received an
         * error response when it tried to communicate with the server.  -
         * &quot;TIMEOUT&quot; - The client timed out while waiting for players to
         * join and connect.  - &quot;PRESENCE_FAILURE&quot; - The client&#39;s XMPP
         * connection ended abruptly.
         */
        leaveReason?: string;
        /**
         * Information about the player. Not populated if this player was
         * anonymously auto-matched against the requesting player. (Either player or
         * autoMatchedPlayer will be set.)
         */
        player?: Schema$Player;
        /**
         * The status of the participant with respect to the room. Possible values
         * are:   - &quot;PARTICIPANT_INVITED&quot; - The participant has been
         * invited to join the room, but has not yet responded.  -
         * &quot;PARTICIPANT_JOINED&quot; - The participant has joined the room
         * (either after creating it or accepting an invitation.)  -
         * &quot;PARTICIPANT_DECLINED&quot; - The participant declined an invitation
         * to join the room.  - &quot;PARTICIPANT_LEFT&quot; - The participant
         * joined the room and then left it.
         */
        status?: string;
    }
    /**
     * This is a JSON template for the status of a room that the player has
     * joined.
     */
    interface Schema$RoomStatus {
        /**
         * Auto-matching status for this room. Not set if the room is not currently
         * in the automatching queue.
         */
        autoMatchingStatus?: Schema$RoomAutoMatchStatus;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#roomStatus.
         */
        kind?: string;
        /**
         * The participants involved in the room, along with their statuses.
         * Includes participants who have left or declined invitations.
         */
        participants?: Schema$RoomParticipant[];
        /**
         * Globally unique ID for a room.
         */
        roomId?: string;
        /**
         * The status of the room. Possible values are:   -
         * &quot;ROOM_INVITING&quot; - One or more players have been invited and not
         * responded.  - &quot;ROOM_AUTO_MATCHING&quot; - One or more slots need to
         * be filled by auto-matching.  - &quot;ROOM_CONNECTING&quot; - Players have
         * joined are connecting to each other (either before or after
         * auto-matching).  - &quot;ROOM_ACTIVE&quot; - All players have joined and
         * connected to each other.  - &quot;ROOM_DELETED&quot; - All joined players
         * have left.
         */
        status?: string;
        /**
         * The version of the status for the room: an increasing counter, used by
         * the client to ignore out-of-order updates to room status.
         */
        statusVersion?: number;
    }
    /**
     * This is a JSON template for a request to submit a score to leaderboards.
     */
    interface Schema$ScoreSubmission {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#scoreSubmission.
         */
        kind?: string;
        /**
         * The leaderboard this score is being submitted to.
         */
        leaderboardId?: string;
        /**
         * The new score being submitted.
         */
        score?: string;
        /**
         * Additional information about this score. Values will contain no more than
         * 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         */
        scoreTag?: string;
        /**
         * Signature Values will contain URI-safe characters as defined by
         * section 2.3 of RFC 3986.
         */
        signature?: string;
    }
    /**
     * This is a JSON template for an snapshot object.
     */
    interface Schema$Snapshot {
        /**
         * The cover image of this snapshot. May be absent if there is no image.
         */
        coverImage?: Schema$SnapshotImage;
        /**
         * The description of this snapshot.
         */
        description?: string;
        /**
         * The ID of the file underlying this snapshot in the Drive API. Only
         * present if the snapshot is a view on a Drive file and the file is owned
         * by the caller.
         */
        driveId?: string;
        /**
         * The duration associated with this snapshot, in millis.
         */
        durationMillis?: string;
        /**
         * The ID of the snapshot.
         */
        id?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#snapshot.
         */
        kind?: string;
        /**
         * The timestamp (in millis since Unix epoch) of the last modification to
         * this snapshot.
         */
        lastModifiedMillis?: string;
        /**
         * The progress value (64-bit integer set by developer) associated with this
         * snapshot.
         */
        progressValue?: string;
        /**
         * The title of this snapshot.
         */
        title?: string;
        /**
         * The type of this snapshot. Possible values are:   - &quot;SAVE_GAME&quot;
         * - A snapshot representing a save game.
         */
        type?: string;
        /**
         * The unique name provided when the snapshot was created.
         */
        uniqueName?: string;
    }
    /**
     * This is a JSON template for an image of a snapshot.
     */
    interface Schema$SnapshotImage {
        /**
         * The height of the image.
         */
        height?: number;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#snapshotImage.
         */
        kind?: string;
        /**
         * The MIME type of the image.
         */
        mime_type?: string;
        /**
         * The URL of the image. This URL may be invalidated at any time and should
         * not be cached.
         */
        url?: string;
        /**
         * The width of the image.
         */
        width?: number;
    }
    /**
     * This is a JSON template for a list of snapshot objects.
     */
    interface Schema$SnapshotListResponse {
        /**
         * The snapshots.
         */
        items?: Schema$Snapshot[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#snapshotListResponse.
         */
        kind?: string;
        /**
         * Token corresponding to the next page of results. If there are no more
         * results, the token is omitted.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for an turn-based auto-match criteria object.
     */
    interface Schema$TurnBasedAutoMatchingCriteria {
        /**
         * A bitmask indicating when auto-matches are valid. When ANDed with other
         * exclusive bitmasks, the result must be zero. Can be used to support
         * exclusive roles within a game.
         */
        exclusiveBitmask?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedAutoMatchingCriteria.
         */
        kind?: string;
        /**
         * The maximum number of players that should be added to the match by
         * auto-matching.
         */
        maxAutoMatchingPlayers?: number;
        /**
         * The minimum number of players that should be added to the match by
         * auto-matching.
         */
        minAutoMatchingPlayers?: number;
    }
    /**
     * This is a JSON template for a turn-based match resource object.
     */
    interface Schema$TurnBasedMatch {
        /**
         * The ID of the application being played.
         */
        applicationId?: string;
        /**
         * Criteria for auto-matching players into this match.
         */
        autoMatchingCriteria?: Schema$TurnBasedAutoMatchingCriteria;
        /**
         * Details about the match creation.
         */
        creationDetails?: Schema$TurnBasedMatchModification;
        /**
         * The data / game state for this match.
         */
        data?: Schema$TurnBasedMatchData;
        /**
         * This short description is generated by our servers based on turn state
         * and is localized and worded relative to the player requesting the match.
         * It is intended to be displayed when the match is shown in a list.
         */
        description?: string;
        /**
         * The ID of the participant that invited the user to the match. Not set if
         * the user was not invited to the match.
         */
        inviterId?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatch.
         */
        kind?: string;
        /**
         * Details about the last update to the match.
         */
        lastUpdateDetails?: Schema$TurnBasedMatchModification;
        /**
         * Globally unique ID for a turn-based match.
         */
        matchId?: string;
        /**
         * The number of the match in a chain of rematches. Will be set to 1 for the
         * first match and incremented by 1 for each rematch.
         */
        matchNumber?: number;
        /**
         * The version of this match: an increasing counter, used to avoid
         * out-of-date updates to the match.
         */
        matchVersion?: number;
        /**
         * The participants involved in the match, along with their statuses.
         * Includes participants who have left or declined invitations.
         */
        participants?: Schema$TurnBasedMatchParticipant[];
        /**
         * The ID of the participant that is taking a turn.
         */
        pendingParticipantId?: string;
        /**
         * The data / game state for the previous match; set for the first turn of
         * rematches only.
         */
        previousMatchData?: Schema$TurnBasedMatchData;
        /**
         * The ID of a rematch of this match. Only set for completed matches that
         * have been rematched.
         */
        rematchId?: string;
        /**
         * The results reported for this match.
         */
        results?: Schema$ParticipantResult[];
        /**
         * The status of the match. Possible values are:   -
         * &quot;MATCH_AUTO_MATCHING&quot; - One or more slots need to be filled by
         * auto-matching; the match cannot be established until they are filled.  -
         * &quot;MATCH_ACTIVE&quot; - The match has started.  -
         * &quot;MATCH_COMPLETE&quot; - The match has finished.  -
         * &quot;MATCH_CANCELED&quot; - The match was canceled.  -
         * &quot;MATCH_EXPIRED&quot; - The match expired due to inactivity.  -
         * &quot;MATCH_DELETED&quot; - The match should no longer be shown on the
         * client. Returned only for tombstones for matches when sync is called.
         */
        status?: string;
        /**
         * The status of the current user in the match. Derived from the match type,
         * match status, the user&#39;s participant status, and the pending
         * participant for the match. Possible values are:   -
         * &quot;USER_INVITED&quot; - The user has been invited to join the match
         * and has not responded yet.  - &quot;USER_AWAITING_TURN&quot; - The user
         * is waiting for their turn.  - &quot;USER_TURN&quot; - The user has an
         * action to take in the match.  - &quot;USER_MATCH_COMPLETED&quot; - The
         * match has ended (it is completed, canceled, or expired.)
         */
        userMatchStatus?: string;
        /**
         * The variant / mode of the application being played; can be any integer
         * value, or left blank.
         */
        variant?: number;
        /**
         * The ID of another participant in the match that can be used when
         * describing the participants the user is playing with.
         */
        withParticipantId?: string;
    }
    /**
     * This is a JSON template for a turn-based match creation request.
     */
    interface Schema$TurnBasedMatchCreateRequest {
        /**
         * Criteria for auto-matching players into this match.
         */
        autoMatchingCriteria?: Schema$TurnBasedAutoMatchingCriteria;
        /**
         * The player ids to invite to the match.
         */
        invitedPlayerIds?: string[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchCreateRequest.
         */
        kind?: string;
        /**
         * A randomly generated numeric ID. This number is used at the server to
         * ensure that the request is handled correctly across retries.
         */
        requestId?: string;
        /**
         * The variant / mode of the application to be played. This can be any
         * integer value, or left blank. You should use a small number of variants
         * to keep the auto-matching pool as large as possible.
         */
        variant?: number;
    }
    /**
     * This is a JSON template for a turn-based match data object.
     */
    interface Schema$TurnBasedMatchData {
        /**
         * The byte representation of the data (limited to 128 kB), as a
         * Base64-encoded string with the URL_SAFE encoding option.
         */
        data?: string;
        /**
         * True if this match has data available but it wasn&#39;t returned in a
         * list response; fetching the match individually will retrieve this data.
         */
        dataAvailable?: boolean;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchData.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for sending a turn-based match data object.
     */
    interface Schema$TurnBasedMatchDataRequest {
        /**
         * The byte representation of the data (limited to 128 kB), as a
         * Base64-encoded string with the URL_SAFE encoding option.
         */
        data?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchDataRequest.
         */
        kind?: string;
    }
    /**
     * This is a JSON template for a list of turn-based matches.
     */
    interface Schema$TurnBasedMatchList {
        /**
         * The matches.
         */
        items?: Schema$TurnBasedMatch[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchList.
         */
        kind?: string;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for turn-based match modification metadata.
     */
    interface Schema$TurnBasedMatchModification {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchModification.
         */
        kind?: string;
        /**
         * The timestamp at which they modified the match, in milliseconds since the
         * epoch in UTC.
         */
        modifiedTimestampMillis?: string;
        /**
         * The ID of the participant that modified the match.
         */
        participantId?: string;
    }
    /**
     * This is a JSON template for a participant in a turn-based match.
     */
    interface Schema$TurnBasedMatchParticipant {
        /**
         * True if this participant was auto-matched with the requesting player.
         */
        autoMatched?: boolean;
        /**
         * Information about a player that has been anonymously auto-matched against
         * the requesting player. (Either player or autoMatchedPlayer will be set.)
         */
        autoMatchedPlayer?: Schema$AnonymousPlayer;
        /**
         * An identifier for the participant in the scope of the match. Cannot be
         * used to identify a player across matches or in other contexts.
         */
        id?: string;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchParticipant.
         */
        kind?: string;
        /**
         * Information about the player. Not populated if this player was
         * anonymously auto-matched against the requesting player. (Either player or
         * autoMatchedPlayer will be set.)
         */
        player?: Schema$Player;
        /**
         * The status of the participant with respect to the match. Possible values
         * are:   - &quot;PARTICIPANT_NOT_INVITED_YET&quot; - The participant is
         * slated to be invited to the match, but the invitation has not been sent;
         * the invite will be sent when it becomes their turn.  -
         * &quot;PARTICIPANT_INVITED&quot; - The participant has been invited to
         * join the match, but has not yet responded.  -
         * &quot;PARTICIPANT_JOINED&quot; - The participant has joined the match
         * (either after creating it or accepting an invitation.)  -
         * &quot;PARTICIPANT_DECLINED&quot; - The participant declined an invitation
         * to join the match.  - &quot;PARTICIPANT_LEFT&quot; - The participant
         * joined the match and then left it.  - &quot;PARTICIPANT_FINISHED&quot; -
         * The participant finished playing in the match.  -
         * &quot;PARTICIPANT_UNRESPONSIVE&quot; - The participant did not take their
         * turn in the allotted time.
         */
        status?: string;
    }
    /**
     * This is a JSON template for a rematch response.
     */
    interface Schema$TurnBasedMatchRematch {
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchRematch.
         */
        kind?: string;
        /**
         * The old match that the rematch was created from; will be updated such
         * that the rematchId field will point at the new match.
         */
        previousMatch?: Schema$TurnBasedMatch;
        /**
         * The newly created match; a rematch of the old match with the same
         * participants.
         */
        rematch?: Schema$TurnBasedMatch;
    }
    /**
     * This is a JSON template for a turn-based match results object.
     */
    interface Schema$TurnBasedMatchResults {
        /**
         * The final match data.
         */
        data?: Schema$TurnBasedMatchDataRequest;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchResults.
         */
        kind?: string;
        /**
         * The version of the match being updated.
         */
        matchVersion?: number;
        /**
         * The match results for the participants in the match.
         */
        results?: Schema$ParticipantResult[];
    }
    /**
     * This is a JSON template for a list of turn-based matches returned from a
     * sync.
     */
    interface Schema$TurnBasedMatchSync {
        /**
         * The matches.
         */
        items?: Schema$TurnBasedMatch[];
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchSync.
         */
        kind?: string;
        /**
         * True if there were more matches available to fetch at the time the
         * response was generated (which were not returned due to page size limits.)
         */
        moreAvailable?: boolean;
        /**
         * The pagination token for the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * This is a JSON template for the object representing a turn.
     */
    interface Schema$TurnBasedMatchTurn {
        /**
         * The shared game state data after the turn is over.
         */
        data?: Schema$TurnBasedMatchDataRequest;
        /**
         * Uniquely identifies the type of this resource. Value is always the fixed
         * string games#turnBasedMatchTurn.
         */
        kind?: string;
        /**
         * The version of this match: an increasing counter, used to avoid
         * out-of-date updates to the match.
         */
        matchVersion?: number;
        /**
         * The ID of the participant who should take their turn next. May be set to
         * the current player&#39;s participant ID to update match state without
         * changing the turn. If not set, the match will wait for other player(s) to
         * join via automatching; this is only valid if automatch criteria is set on
         * the match with remaining slots for automatched players.
         */
        pendingParticipantId?: string;
        /**
         * The match results for the participants in the match.
         */
        results?: Schema$ParticipantResult[];
    }
    class Resource$Achievementdefinitions {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.achievementDefinitions.list
         * @desc Lists all the achievement definitions for your application.
         * @alias games.achievementDefinitions.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Achievementdefinitions$List, options?: MethodOptions): AxiosPromise<Schema$AchievementDefinitionsListResponse>;
        list(params: Params$Resource$Achievementdefinitions$List, options: MethodOptions | BodyResponseCallback<Schema$AchievementDefinitionsListResponse>, callback: BodyResponseCallback<Schema$AchievementDefinitionsListResponse>): void;
        list(params: Params$Resource$Achievementdefinitions$List, callback: BodyResponseCallback<Schema$AchievementDefinitionsListResponse>): void;
        list(callback: BodyResponseCallback<Schema$AchievementDefinitionsListResponse>): void;
    }
    interface Params$Resource$Achievementdefinitions$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of achievement resources to return in the response,
         * used for paging. For any response, the actual number of achievement
         * resources returned may be less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Achievements {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.achievements.increment
         * @desc Increments the steps of the achievement with the given ID for the
         * currently authenticated player.
         * @alias games.achievements.increment
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.achievementId The ID of the achievement used by this method.
         * @param {string=} params.requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
         * @param {integer} params.stepsToIncrement The number of steps to increment.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        increment(params?: Params$Resource$Achievements$Increment, options?: MethodOptions): AxiosPromise<Schema$AchievementIncrementResponse>;
        increment(params: Params$Resource$Achievements$Increment, options: MethodOptions | BodyResponseCallback<Schema$AchievementIncrementResponse>, callback: BodyResponseCallback<Schema$AchievementIncrementResponse>): void;
        increment(params: Params$Resource$Achievements$Increment, callback: BodyResponseCallback<Schema$AchievementIncrementResponse>): void;
        increment(callback: BodyResponseCallback<Schema$AchievementIncrementResponse>): void;
        /**
         * games.achievements.list
         * @desc Lists the progress for all your application's achievements for the
         * currently authenticated player.
         * @alias games.achievements.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of achievement resources to return in the response, used for paging. For any response, the actual number of achievement resources returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {string=} params.state Tells the server to return only achievements with the specified state. If this parameter isn't specified, all achievements are returned.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Achievements$List, options?: MethodOptions): AxiosPromise<Schema$PlayerAchievementListResponse>;
        list(params: Params$Resource$Achievements$List, options: MethodOptions | BodyResponseCallback<Schema$PlayerAchievementListResponse>, callback: BodyResponseCallback<Schema$PlayerAchievementListResponse>): void;
        list(params: Params$Resource$Achievements$List, callback: BodyResponseCallback<Schema$PlayerAchievementListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PlayerAchievementListResponse>): void;
        /**
         * games.achievements.reveal
         * @desc Sets the state of the achievement with the given ID to REVEALED for
         * the currently authenticated player.
         * @alias games.achievements.reveal
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.achievementId The ID of the achievement used by this method.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reveal(params?: Params$Resource$Achievements$Reveal, options?: MethodOptions): AxiosPromise<Schema$AchievementRevealResponse>;
        reveal(params: Params$Resource$Achievements$Reveal, options: MethodOptions | BodyResponseCallback<Schema$AchievementRevealResponse>, callback: BodyResponseCallback<Schema$AchievementRevealResponse>): void;
        reveal(params: Params$Resource$Achievements$Reveal, callback: BodyResponseCallback<Schema$AchievementRevealResponse>): void;
        reveal(callback: BodyResponseCallback<Schema$AchievementRevealResponse>): void;
        /**
         * games.achievements.setStepsAtLeast
         * @desc Sets the steps for the currently authenticated player towards
         * unlocking an achievement. If the steps parameter is less than the current
         * number of steps that the player already gained for the achievement, the
         * achievement is not modified.
         * @alias games.achievements.setStepsAtLeast
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.achievementId The ID of the achievement used by this method.
         * @param {integer} params.steps The minimum value to set the steps to.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        setStepsAtLeast(params?: Params$Resource$Achievements$Setstepsatleast, options?: MethodOptions): AxiosPromise<Schema$AchievementSetStepsAtLeastResponse>;
        setStepsAtLeast(params: Params$Resource$Achievements$Setstepsatleast, options: MethodOptions | BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>, callback: BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>): void;
        setStepsAtLeast(params: Params$Resource$Achievements$Setstepsatleast, callback: BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>): void;
        setStepsAtLeast(callback: BodyResponseCallback<Schema$AchievementSetStepsAtLeastResponse>): void;
        /**
         * games.achievements.unlock
         * @desc Unlocks this achievement for the currently authenticated player.
         * @alias games.achievements.unlock
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.achievementId The ID of the achievement used by this method.
         * @param {string=} params.builtinGameId Override used only by built-in games in Play Games application.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        unlock(params?: Params$Resource$Achievements$Unlock, options?: MethodOptions): AxiosPromise<Schema$AchievementUnlockResponse>;
        unlock(params: Params$Resource$Achievements$Unlock, options: MethodOptions | BodyResponseCallback<Schema$AchievementUnlockResponse>, callback: BodyResponseCallback<Schema$AchievementUnlockResponse>): void;
        unlock(params: Params$Resource$Achievements$Unlock, callback: BodyResponseCallback<Schema$AchievementUnlockResponse>): void;
        unlock(callback: BodyResponseCallback<Schema$AchievementUnlockResponse>): void;
        /**
         * games.achievements.updateMultiple
         * @desc Updates multiple achievements for the currently authenticated
         * player.
         * @alias games.achievements.updateMultiple
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.builtinGameId Override used only by built-in games in Play Games application.
         * @param {().AchievementUpdateMultipleRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        updateMultiple(params?: Params$Resource$Achievements$Updatemultiple, options?: MethodOptions): AxiosPromise<Schema$AchievementUpdateMultipleResponse>;
        updateMultiple(params: Params$Resource$Achievements$Updatemultiple, options: MethodOptions | BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>, callback: BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>): void;
        updateMultiple(params: Params$Resource$Achievements$Updatemultiple, callback: BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>): void;
        updateMultiple(callback: BodyResponseCallback<Schema$AchievementUpdateMultipleResponse>): void;
    }
    interface Params$Resource$Achievements$Increment extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
        /**
         * A randomly generated numeric ID for each request specified by the caller.
         * This number is used at the server to ensure that the request is handled
         * correctly across retries.
         */
        requestId?: string;
        /**
         * The number of steps to increment.
         */
        stepsToIncrement?: number;
    }
    interface Params$Resource$Achievements$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of achievement resources to return in the response,
         * used for paging. For any response, the actual number of achievement
         * resources returned may be less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * A player ID. A value of me may be used in place of the authenticated
         * player's ID.
         */
        playerId?: string;
        /**
         * Tells the server to return only achievements with the specified state. If
         * this parameter isn't specified, all achievements are returned.
         */
        state?: string;
    }
    interface Params$Resource$Achievements$Reveal extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
    }
    interface Params$Resource$Achievements$Setstepsatleast extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
        /**
         * The minimum value to set the steps to.
         */
        steps?: number;
    }
    interface Params$Resource$Achievements$Unlock extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the achievement used by this method.
         */
        achievementId?: string;
        /**
         * Override used only by built-in games in Play Games application.
         */
        builtinGameId?: string;
    }
    interface Params$Resource$Achievements$Updatemultiple extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Override used only by built-in games in Play Games application.
         */
        builtinGameId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$AchievementUpdateMultipleRequest;
    }
    class Resource$Applications {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.applications.get
         * @desc Retrieves the metadata of the application with the given ID. If the
         * requested application is not available for the specified platformType,
         * the returned response will not include any instance data.
         * @alias games.applications.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId The application ID from the Google Play developer console.
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string=} params.platformType Restrict application details returned to the specific platform.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Applications$Get, options?: MethodOptions): AxiosPromise<Schema$Application>;
        get(params: Params$Resource$Applications$Get, options: MethodOptions | BodyResponseCallback<Schema$Application>, callback: BodyResponseCallback<Schema$Application>): void;
        get(params: Params$Resource$Applications$Get, callback: BodyResponseCallback<Schema$Application>): void;
        get(callback: BodyResponseCallback<Schema$Application>): void;
        /**
         * games.applications.played
         * @desc Indicate that the the currently authenticated user is playing your
         * application.
         * @alias games.applications.played
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.builtinGameId Override used only by built-in games in Play Games application.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        played(params?: Params$Resource$Applications$Played, options?: MethodOptions): AxiosPromise<void>;
        played(params: Params$Resource$Applications$Played, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        played(params: Params$Resource$Applications$Played, callback: BodyResponseCallback<void>): void;
        played(callback: BodyResponseCallback<void>): void;
        /**
         * games.applications.verify
         * @desc Verifies the auth token provided with this request is for the
         * application with the specified ID, and returns the ID of the player it
         * was granted for.
         * @alias games.applications.verify
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.applicationId The application ID from the Google Play developer console.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        verify(params?: Params$Resource$Applications$Verify, options?: MethodOptions): AxiosPromise<Schema$ApplicationVerifyResponse>;
        verify(params: Params$Resource$Applications$Verify, options: MethodOptions | BodyResponseCallback<Schema$ApplicationVerifyResponse>, callback: BodyResponseCallback<Schema$ApplicationVerifyResponse>): void;
        verify(params: Params$Resource$Applications$Verify, callback: BodyResponseCallback<Schema$ApplicationVerifyResponse>): void;
        verify(callback: BodyResponseCallback<Schema$ApplicationVerifyResponse>): void;
    }
    interface Params$Resource$Applications$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * Restrict application details returned to the specific platform.
         */
        platformType?: string;
    }
    interface Params$Resource$Applications$Played extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Override used only by built-in games in Play Games application.
         */
        builtinGameId?: string;
    }
    interface Params$Resource$Applications$Verify extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The application ID from the Google Play developer console.
         */
        applicationId?: string;
    }
    class Resource$Events {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.events.listByPlayer
         * @desc Returns a list showing the current progress on events in this
         * application for the currently authenticated user.
         * @alias games.events.listByPlayer
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of events to return in the response, used for paging. For any response, the actual number of events to return may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listByPlayer(params?: Params$Resource$Events$Listbyplayer, options?: MethodOptions): AxiosPromise<Schema$PlayerEventListResponse>;
        listByPlayer(params: Params$Resource$Events$Listbyplayer, options: MethodOptions | BodyResponseCallback<Schema$PlayerEventListResponse>, callback: BodyResponseCallback<Schema$PlayerEventListResponse>): void;
        listByPlayer(params: Params$Resource$Events$Listbyplayer, callback: BodyResponseCallback<Schema$PlayerEventListResponse>): void;
        listByPlayer(callback: BodyResponseCallback<Schema$PlayerEventListResponse>): void;
        /**
         * games.events.listDefinitions
         * @desc Returns a list of the event definitions in this application.
         * @alias games.events.listDefinitions
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of event definitions to return in the response, used for paging. For any response, the actual number of event definitions to return may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listDefinitions(params?: Params$Resource$Events$Listdefinitions, options?: MethodOptions): AxiosPromise<Schema$EventDefinitionListResponse>;
        listDefinitions(params: Params$Resource$Events$Listdefinitions, options: MethodOptions | BodyResponseCallback<Schema$EventDefinitionListResponse>, callback: BodyResponseCallback<Schema$EventDefinitionListResponse>): void;
        listDefinitions(params: Params$Resource$Events$Listdefinitions, callback: BodyResponseCallback<Schema$EventDefinitionListResponse>): void;
        listDefinitions(callback: BodyResponseCallback<Schema$EventDefinitionListResponse>): void;
        /**
         * games.events.record
         * @desc Records a batch of changes to the number of times events have
         * occurred for the currently authenticated user of this application.
         * @alias games.events.record
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {().EventRecordRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        record(params?: Params$Resource$Events$Record, options?: MethodOptions): AxiosPromise<Schema$EventUpdateResponse>;
        record(params: Params$Resource$Events$Record, options: MethodOptions | BodyResponseCallback<Schema$EventUpdateResponse>, callback: BodyResponseCallback<Schema$EventUpdateResponse>): void;
        record(params: Params$Resource$Events$Record, callback: BodyResponseCallback<Schema$EventUpdateResponse>): void;
        record(callback: BodyResponseCallback<Schema$EventUpdateResponse>): void;
    }
    interface Params$Resource$Events$Listbyplayer extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of events to return in the response, used for paging.
         * For any response, the actual number of events to return may be less than
         * the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Events$Listdefinitions extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of event definitions to return in the response, used
         * for paging. For any response, the actual number of event definitions to
         * return may be less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Events$Record extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$EventRecordRequest;
    }
    class Resource$Leaderboards {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.leaderboards.get
         * @desc Retrieves the metadata of the leaderboard with the given ID.
         * @alias games.leaderboards.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.leaderboardId The ID of the leaderboard.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Leaderboards$Get, options?: MethodOptions): AxiosPromise<Schema$Leaderboard>;
        get(params: Params$Resource$Leaderboards$Get, options: MethodOptions | BodyResponseCallback<Schema$Leaderboard>, callback: BodyResponseCallback<Schema$Leaderboard>): void;
        get(params: Params$Resource$Leaderboards$Get, callback: BodyResponseCallback<Schema$Leaderboard>): void;
        get(callback: BodyResponseCallback<Schema$Leaderboard>): void;
        /**
         * games.leaderboards.list
         * @desc Lists all the leaderboard metadata for your application.
         * @alias games.leaderboards.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of leaderboards to return in the response. For any response, the actual number of leaderboards returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Leaderboards$List, options?: MethodOptions): AxiosPromise<Schema$LeaderboardListResponse>;
        list(params: Params$Resource$Leaderboards$List, options: MethodOptions | BodyResponseCallback<Schema$LeaderboardListResponse>, callback: BodyResponseCallback<Schema$LeaderboardListResponse>): void;
        list(params: Params$Resource$Leaderboards$List, callback: BodyResponseCallback<Schema$LeaderboardListResponse>): void;
        list(callback: BodyResponseCallback<Schema$LeaderboardListResponse>): void;
    }
    interface Params$Resource$Leaderboards$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
    }
    interface Params$Resource$Leaderboards$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of leaderboards to return in the response. For any
         * response, the actual number of leaderboards returned may be less than the
         * specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Metagame {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.metagame.getMetagameConfig
         * @desc Return the metagame configuration data for the calling application.
         * @alias games.metagame.getMetagameConfig
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        getMetagameConfig(params?: Params$Resource$Metagame$Getmetagameconfig, options?: MethodOptions): AxiosPromise<Schema$MetagameConfig>;
        getMetagameConfig(params: Params$Resource$Metagame$Getmetagameconfig, options: MethodOptions | BodyResponseCallback<Schema$MetagameConfig>, callback: BodyResponseCallback<Schema$MetagameConfig>): void;
        getMetagameConfig(params: Params$Resource$Metagame$Getmetagameconfig, callback: BodyResponseCallback<Schema$MetagameConfig>): void;
        getMetagameConfig(callback: BodyResponseCallback<Schema$MetagameConfig>): void;
        /**
         * games.metagame.listCategoriesByPlayer
         * @desc List play data aggregated per category for the player corresponding
         * to playerId.
         * @alias games.metagame.listCategoriesByPlayer
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.collection The collection of categories for which data will be returned.
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of category resources to return in the response, used for paging. For any response, the actual number of category resources returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listCategoriesByPlayer(params?: Params$Resource$Metagame$Listcategoriesbyplayer, options?: MethodOptions): AxiosPromise<Schema$CategoryListResponse>;
        listCategoriesByPlayer(params: Params$Resource$Metagame$Listcategoriesbyplayer, options: MethodOptions | BodyResponseCallback<Schema$CategoryListResponse>, callback: BodyResponseCallback<Schema$CategoryListResponse>): void;
        listCategoriesByPlayer(params: Params$Resource$Metagame$Listcategoriesbyplayer, callback: BodyResponseCallback<Schema$CategoryListResponse>): void;
        listCategoriesByPlayer(callback: BodyResponseCallback<Schema$CategoryListResponse>): void;
    }
    interface Params$Resource$Metagame$Getmetagameconfig extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Metagame$Listcategoriesbyplayer extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The collection of categories for which data will be returned.
         */
        collection?: string;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of category resources to return in the response, used
         * for paging. For any response, the actual number of category resources
         * returned may be less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * A player ID. A value of me may be used in place of the authenticated
         * player's ID.
         */
        playerId?: string;
    }
    class Resource$Players {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.players.get
         * @desc Retrieves the Player resource with the given ID. To retrieve the
         * player for the currently authenticated user, set playerId to me.
         * @alias games.players.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Players$Get, options?: MethodOptions): AxiosPromise<Schema$Player>;
        get(params: Params$Resource$Players$Get, options: MethodOptions | BodyResponseCallback<Schema$Player>, callback: BodyResponseCallback<Schema$Player>): void;
        get(params: Params$Resource$Players$Get, callback: BodyResponseCallback<Schema$Player>): void;
        get(callback: BodyResponseCallback<Schema$Player>): void;
        /**
         * games.players.list
         * @desc Get the collection of players for the currently authenticated user.
         * @alias games.players.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.collection Collection of players being retrieved
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Players$List, options?: MethodOptions): AxiosPromise<Schema$PlayerListResponse>;
        list(params: Params$Resource$Players$List, options: MethodOptions | BodyResponseCallback<Schema$PlayerListResponse>, callback: BodyResponseCallback<Schema$PlayerListResponse>): void;
        list(params: Params$Resource$Players$List, callback: BodyResponseCallback<Schema$PlayerListResponse>): void;
        list(callback: BodyResponseCallback<Schema$PlayerListResponse>): void;
    }
    interface Params$Resource$Players$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * A player ID. A value of me may be used in place of the authenticated
         * player's ID.
         */
        playerId?: string;
    }
    interface Params$Resource$Players$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Collection of players being retrieved
         */
        collection?: string;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of player resources to return in the response, used
         * for paging. For any response, the actual number of player resources
         * returned may be less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    class Resource$Pushtokens {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.pushtokens.remove
         * @desc Removes a push token for the current user and application. Removing
         * a non-existent push token will report success.
         * @alias games.pushtokens.remove
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().PushTokenId} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        remove(params?: Params$Resource$Pushtokens$Remove, options?: MethodOptions): AxiosPromise<void>;
        remove(params: Params$Resource$Pushtokens$Remove, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        remove(params: Params$Resource$Pushtokens$Remove, callback: BodyResponseCallback<void>): void;
        remove(callback: BodyResponseCallback<void>): void;
        /**
         * games.pushtokens.update
         * @desc Registers a push token for the current user and application.
         * @alias games.pushtokens.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().PushToken} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Pushtokens$Update, options?: MethodOptions): AxiosPromise<void>;
        update(params: Params$Resource$Pushtokens$Update, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        update(params: Params$Resource$Pushtokens$Update, callback: BodyResponseCallback<void>): void;
        update(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Pushtokens$Remove extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PushTokenId;
    }
    interface Params$Resource$Pushtokens$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PushToken;
    }
    class Resource$Questmilestones {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.questMilestones.claim
         * @desc Report that a reward for the milestone corresponding to milestoneId
         * for the quest corresponding to questId has been claimed by the currently
         * authorized user.
         * @alias games.questMilestones.claim
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.milestoneId The ID of the milestone.
         * @param {string} params.questId The ID of the quest.
         * @param {string} params.requestId A numeric ID to ensure that the request is handled correctly across retries. Your client application must generate this ID randomly.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        claim(params?: Params$Resource$Questmilestones$Claim, options?: MethodOptions): AxiosPromise<void>;
        claim(params: Params$Resource$Questmilestones$Claim, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        claim(params: Params$Resource$Questmilestones$Claim, callback: BodyResponseCallback<void>): void;
        claim(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Questmilestones$Claim extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the milestone.
         */
        milestoneId?: string;
        /**
         * The ID of the quest.
         */
        questId?: string;
        /**
         * A numeric ID to ensure that the request is handled correctly across
         * retries. Your client application must generate this ID randomly.
         */
        requestId?: string;
    }
    class Resource$Quests {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.quests.accept
         * @desc Indicates that the currently authorized user will participate in
         * the quest.
         * @alias games.quests.accept
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.questId The ID of the quest.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        accept(params?: Params$Resource$Quests$Accept, options?: MethodOptions): AxiosPromise<Schema$Quest>;
        accept(params: Params$Resource$Quests$Accept, options: MethodOptions | BodyResponseCallback<Schema$Quest>, callback: BodyResponseCallback<Schema$Quest>): void;
        accept(params: Params$Resource$Quests$Accept, callback: BodyResponseCallback<Schema$Quest>): void;
        accept(callback: BodyResponseCallback<Schema$Quest>): void;
        /**
         * games.quests.list
         * @desc Get a list of quests for your application and the currently
         * authenticated player.
         * @alias games.quests.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of quest resources to return in the response, used for paging. For any response, the actual number of quest resources returned may be less than the specified maxResults. Acceptable values are 1 to 50, inclusive. (Default: 50).
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Quests$List, options?: MethodOptions): AxiosPromise<Schema$QuestListResponse>;
        list(params: Params$Resource$Quests$List, options: MethodOptions | BodyResponseCallback<Schema$QuestListResponse>, callback: BodyResponseCallback<Schema$QuestListResponse>): void;
        list(params: Params$Resource$Quests$List, callback: BodyResponseCallback<Schema$QuestListResponse>): void;
        list(callback: BodyResponseCallback<Schema$QuestListResponse>): void;
    }
    interface Params$Resource$Quests$Accept extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the quest.
         */
        questId?: string;
    }
    interface Params$Resource$Quests$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of quest resources to return in the response, used for
         * paging. For any response, the actual number of quest resources returned
         * may be less than the specified maxResults. Acceptable values are 1 to 50,
         * inclusive. (Default: 50).
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * A player ID. A value of me may be used in place of the authenticated
         * player's ID.
         */
        playerId?: string;
    }
    class Resource$Revisions {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.revisions.check
         * @desc Checks whether the games client is out of date.
         * @alias games.revisions.check
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientRevision The revision of the client SDK used by your application. Format: [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:   - "ANDROID" - Client is running the Android SDK.  - "IOS" - Client is running the iOS SDK.  - "WEB_APP" - Client is running as a Web App.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        check(params?: Params$Resource$Revisions$Check, options?: MethodOptions): AxiosPromise<Schema$RevisionCheckResponse>;
        check(params: Params$Resource$Revisions$Check, options: MethodOptions | BodyResponseCallback<Schema$RevisionCheckResponse>, callback: BodyResponseCallback<Schema$RevisionCheckResponse>): void;
        check(params: Params$Resource$Revisions$Check, callback: BodyResponseCallback<Schema$RevisionCheckResponse>): void;
        check(callback: BodyResponseCallback<Schema$RevisionCheckResponse>): void;
    }
    interface Params$Resource$Revisions$Check extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The revision of the client SDK used by your application. Format:
         * [PLATFORM_TYPE]:[VERSION_NUMBER]. Possible values of PLATFORM_TYPE are:
         * - "ANDROID" - Client is running the Android SDK.  - "IOS" - Client is
         * running the iOS SDK.  - "WEB_APP" - Client is running as a Web App.
         */
        clientRevision?: string;
    }
    class Resource$Rooms {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.rooms.create
         * @desc Create a room. For internal use by the Games SDK only. Calling this
         * method directly is unsupported.
         * @alias games.rooms.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {().RoomCreateRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Rooms$Create, options?: MethodOptions): AxiosPromise<Schema$Room>;
        create(params: Params$Resource$Rooms$Create, options: MethodOptions | BodyResponseCallback<Schema$Room>, callback: BodyResponseCallback<Schema$Room>): void;
        create(params: Params$Resource$Rooms$Create, callback: BodyResponseCallback<Schema$Room>): void;
        create(callback: BodyResponseCallback<Schema$Room>): void;
        /**
         * games.rooms.decline
         * @desc Decline an invitation to join a room. For internal use by the Games
         * SDK only. Calling this method directly is unsupported.
         * @alias games.rooms.decline
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.roomId The ID of the room.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        decline(params?: Params$Resource$Rooms$Decline, options?: MethodOptions): AxiosPromise<Schema$Room>;
        decline(params: Params$Resource$Rooms$Decline, options: MethodOptions | BodyResponseCallback<Schema$Room>, callback: BodyResponseCallback<Schema$Room>): void;
        decline(params: Params$Resource$Rooms$Decline, callback: BodyResponseCallback<Schema$Room>): void;
        decline(callback: BodyResponseCallback<Schema$Room>): void;
        /**
         * games.rooms.dismiss
         * @desc Dismiss an invitation to join a room. For internal use by the Games
         * SDK only. Calling this method directly is unsupported.
         * @alias games.rooms.dismiss
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.roomId The ID of the room.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        dismiss(params?: Params$Resource$Rooms$Dismiss, options?: MethodOptions): AxiosPromise<void>;
        dismiss(params: Params$Resource$Rooms$Dismiss, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        dismiss(params: Params$Resource$Rooms$Dismiss, callback: BodyResponseCallback<void>): void;
        dismiss(callback: BodyResponseCallback<void>): void;
        /**
         * games.rooms.get
         * @desc Get the data for a room.
         * @alias games.rooms.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.roomId The ID of the room.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Rooms$Get, options?: MethodOptions): AxiosPromise<Schema$Room>;
        get(params: Params$Resource$Rooms$Get, options: MethodOptions | BodyResponseCallback<Schema$Room>, callback: BodyResponseCallback<Schema$Room>): void;
        get(params: Params$Resource$Rooms$Get, callback: BodyResponseCallback<Schema$Room>): void;
        get(callback: BodyResponseCallback<Schema$Room>): void;
        /**
         * games.rooms.join
         * @desc Join a room. For internal use by the Games SDK only. Calling this
         * method directly is unsupported.
         * @alias games.rooms.join
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.roomId The ID of the room.
         * @param {().RoomJoinRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        join(params?: Params$Resource$Rooms$Join, options?: MethodOptions): AxiosPromise<Schema$Room>;
        join(params: Params$Resource$Rooms$Join, options: MethodOptions | BodyResponseCallback<Schema$Room>, callback: BodyResponseCallback<Schema$Room>): void;
        join(params: Params$Resource$Rooms$Join, callback: BodyResponseCallback<Schema$Room>): void;
        join(callback: BodyResponseCallback<Schema$Room>): void;
        /**
         * games.rooms.leave
         * @desc Leave a room. For internal use by the Games SDK only. Calling this
         * method directly is unsupported.
         * @alias games.rooms.leave
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.roomId The ID of the room.
         * @param {().RoomLeaveRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        leave(params?: Params$Resource$Rooms$Leave, options?: MethodOptions): AxiosPromise<Schema$Room>;
        leave(params: Params$Resource$Rooms$Leave, options: MethodOptions | BodyResponseCallback<Schema$Room>, callback: BodyResponseCallback<Schema$Room>): void;
        leave(params: Params$Resource$Rooms$Leave, callback: BodyResponseCallback<Schema$Room>): void;
        leave(callback: BodyResponseCallback<Schema$Room>): void;
        /**
         * games.rooms.list
         * @desc Returns invitations to join rooms.
         * @alias games.rooms.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of rooms to return in the response, used for paging. For any response, the actual number of rooms to return may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Rooms$List, options?: MethodOptions): AxiosPromise<Schema$RoomList>;
        list(params: Params$Resource$Rooms$List, options: MethodOptions | BodyResponseCallback<Schema$RoomList>, callback: BodyResponseCallback<Schema$RoomList>): void;
        list(params: Params$Resource$Rooms$List, callback: BodyResponseCallback<Schema$RoomList>): void;
        list(callback: BodyResponseCallback<Schema$RoomList>): void;
        /**
         * games.rooms.reportStatus
         * @desc Updates sent by a client reporting the status of peers in a room.
         * For internal use by the Games SDK only. Calling this method directly is
         * unsupported.
         * @alias games.rooms.reportStatus
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.roomId The ID of the room.
         * @param {().RoomP2PStatuses} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        reportStatus(params?: Params$Resource$Rooms$Reportstatus, options?: MethodOptions): AxiosPromise<Schema$RoomStatus>;
        reportStatus(params: Params$Resource$Rooms$Reportstatus, options: MethodOptions | BodyResponseCallback<Schema$RoomStatus>, callback: BodyResponseCallback<Schema$RoomStatus>): void;
        reportStatus(params: Params$Resource$Rooms$Reportstatus, callback: BodyResponseCallback<Schema$RoomStatus>): void;
        reportStatus(callback: BodyResponseCallback<Schema$RoomStatus>): void;
    }
    interface Params$Resource$Rooms$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RoomCreateRequest;
    }
    interface Params$Resource$Rooms$Decline extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the room.
         */
        roomId?: string;
    }
    interface Params$Resource$Rooms$Dismiss extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the room.
         */
        roomId?: string;
    }
    interface Params$Resource$Rooms$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the room.
         */
        roomId?: string;
    }
    interface Params$Resource$Rooms$Join extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the room.
         */
        roomId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RoomJoinRequest;
    }
    interface Params$Resource$Rooms$Leave extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the room.
         */
        roomId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RoomLeaveRequest;
    }
    interface Params$Resource$Rooms$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of rooms to return in the response, used for paging.
         * For any response, the actual number of rooms to return may be less than
         * the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Rooms$Reportstatus extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the room.
         */
        roomId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RoomP2PStatuses;
    }
    class Resource$Scores {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.scores.get
         * @desc Get high scores, and optionally ranks, in leaderboards for the
         * currently authenticated player. For a specific time span, leaderboardId
         * can be set to ALL to retrieve data for all leaderboards in a given time
         * span. NOTE: You cannot ask for 'ALL' leaderboards and 'ALL' timeSpans in
         * the same request; only one parameter may be set to 'ALL'.
         * @alias games.scores.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.includeRankType The types of ranks to return. If the parameter is omitted, no ranks will be returned.
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.leaderboardId The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all leaderboards for this application.
         * @param {integer=} params.maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {string} params.timeSpan The time span for the scores and ranks you're requesting.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Scores$Get, options?: MethodOptions): AxiosPromise<Schema$PlayerLeaderboardScoreListResponse>;
        get(params: Params$Resource$Scores$Get, options: MethodOptions | BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>, callback: BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>): void;
        get(params: Params$Resource$Scores$Get, callback: BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>): void;
        get(callback: BodyResponseCallback<Schema$PlayerLeaderboardScoreListResponse>): void;
        /**
         * games.scores.list
         * @desc Lists the scores in a leaderboard, starting from the top.
         * @alias games.scores.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.collection The collection of scores you're requesting.
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.leaderboardId The ID of the leaderboard.
         * @param {integer=} params.maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string} params.timeSpan The time span for the scores and ranks you're requesting.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Scores$List, options?: MethodOptions): AxiosPromise<Schema$LeaderboardScores>;
        list(params: Params$Resource$Scores$List, options: MethodOptions | BodyResponseCallback<Schema$LeaderboardScores>, callback: BodyResponseCallback<Schema$LeaderboardScores>): void;
        list(params: Params$Resource$Scores$List, callback: BodyResponseCallback<Schema$LeaderboardScores>): void;
        list(callback: BodyResponseCallback<Schema$LeaderboardScores>): void;
        /**
         * games.scores.listWindow
         * @desc Lists the scores in a leaderboard around (and including) a player's
         * score.
         * @alias games.scores.listWindow
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.collection The collection of scores you're requesting.
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.leaderboardId The ID of the leaderboard.
         * @param {integer=} params.maxResults The maximum number of leaderboard scores to return in the response. For any response, the actual number of leaderboard scores returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {integer=} params.resultsAbove The preferred number of scores to return above the player's score. More scores may be returned if the player is at the bottom of the leaderboard; fewer may be returned if the player is at the top. Must be less than or equal to maxResults.
         * @param {boolean=} params.returnTopIfAbsent True if the top scores should be returned when the player is not in the leaderboard. Defaults to true.
         * @param {string} params.timeSpan The time span for the scores and ranks you're requesting.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        listWindow(params?: Params$Resource$Scores$Listwindow, options?: MethodOptions): AxiosPromise<Schema$LeaderboardScores>;
        listWindow(params: Params$Resource$Scores$Listwindow, options: MethodOptions | BodyResponseCallback<Schema$LeaderboardScores>, callback: BodyResponseCallback<Schema$LeaderboardScores>): void;
        listWindow(params: Params$Resource$Scores$Listwindow, callback: BodyResponseCallback<Schema$LeaderboardScores>): void;
        listWindow(callback: BodyResponseCallback<Schema$LeaderboardScores>): void;
        /**
         * games.scores.submit
         * @desc Submits a score to the specified leaderboard.
         * @alias games.scores.submit
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.leaderboardId The ID of the leaderboard.
         * @param {string} params.score The score you're submitting. The submitted score is ignored if it is worse than a previously submitted score, where worse depends on the leaderboard sort order. The meaning of the score value depends on the leaderboard format type. For fixed-point, the score represents the raw value. For time, the score represents elapsed time in milliseconds. For currency, the score represents a value in micro units.
         * @param {string=} params.scoreTag Additional information about the score you're submitting. Values must contain no more than 64 URI-safe characters as defined by section 2.3 of RFC 3986.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        submit(params?: Params$Resource$Scores$Submit, options?: MethodOptions): AxiosPromise<Schema$PlayerScoreResponse>;
        submit(params: Params$Resource$Scores$Submit, options: MethodOptions | BodyResponseCallback<Schema$PlayerScoreResponse>, callback: BodyResponseCallback<Schema$PlayerScoreResponse>): void;
        submit(params: Params$Resource$Scores$Submit, callback: BodyResponseCallback<Schema$PlayerScoreResponse>): void;
        submit(callback: BodyResponseCallback<Schema$PlayerScoreResponse>): void;
        /**
         * games.scores.submitMultiple
         * @desc Submits multiple scores to leaderboards.
         * @alias games.scores.submitMultiple
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {().PlayerScoreSubmissionList} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        submitMultiple(params?: Params$Resource$Scores$Submitmultiple, options?: MethodOptions): AxiosPromise<Schema$PlayerScoreListResponse>;
        submitMultiple(params: Params$Resource$Scores$Submitmultiple, options: MethodOptions | BodyResponseCallback<Schema$PlayerScoreListResponse>, callback: BodyResponseCallback<Schema$PlayerScoreListResponse>): void;
        submitMultiple(params: Params$Resource$Scores$Submitmultiple, callback: BodyResponseCallback<Schema$PlayerScoreListResponse>): void;
        submitMultiple(callback: BodyResponseCallback<Schema$PlayerScoreListResponse>): void;
    }
    interface Params$Resource$Scores$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The types of ranks to return. If the parameter is omitted, no ranks will
         * be returned.
         */
        includeRankType?: string;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the leaderboard. Can be set to 'ALL' to retrieve data for all
         * leaderboards for this application.
         */
        leaderboardId?: string;
        /**
         * The maximum number of leaderboard scores to return in the response. For
         * any response, the actual number of leaderboard scores returned may be
         * less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * A player ID. A value of me may be used in place of the authenticated
         * player's ID.
         */
        playerId?: string;
        /**
         * The time span for the scores and ranks you're requesting.
         */
        timeSpan?: string;
    }
    interface Params$Resource$Scores$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The collection of scores you're requesting.
         */
        collection?: string;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
        /**
         * The maximum number of leaderboard scores to return in the response. For
         * any response, the actual number of leaderboard scores returned may be
         * less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * The time span for the scores and ranks you're requesting.
         */
        timeSpan?: string;
    }
    interface Params$Resource$Scores$Listwindow extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The collection of scores you're requesting.
         */
        collection?: string;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
        /**
         * The maximum number of leaderboard scores to return in the response. For
         * any response, the actual number of leaderboard scores returned may be
         * less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * The preferred number of scores to return above the player's score. More
         * scores may be returned if the player is at the bottom of the leaderboard;
         * fewer may be returned if the player is at the top. Must be less than or
         * equal to maxResults.
         */
        resultsAbove?: number;
        /**
         * True if the top scores should be returned when the player is not in the
         * leaderboard. Defaults to true.
         */
        returnTopIfAbsent?: boolean;
        /**
         * The time span for the scores and ranks you're requesting.
         */
        timeSpan?: string;
    }
    interface Params$Resource$Scores$Submit extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the leaderboard.
         */
        leaderboardId?: string;
        /**
         * The score you're submitting. The submitted score is ignored if it is
         * worse than a previously submitted score, where worse depends on the
         * leaderboard sort order. The meaning of the score value depends on the
         * leaderboard format type. For fixed-point, the score represents the raw
         * value. For time, the score represents elapsed time in milliseconds. For
         * currency, the score represents a value in micro units.
         */
        score?: string;
        /**
         * Additional information about the score you're submitting. Values must
         * contain no more than 64 URI-safe characters as defined by section 2.3 of
         * RFC 3986.
         */
        scoreTag?: string;
    }
    interface Params$Resource$Scores$Submitmultiple extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$PlayerScoreSubmissionList;
    }
    class Resource$Snapshots {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.snapshots.get
         * @desc Retrieves the metadata for a given snapshot ID.
         * @alias games.snapshots.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.snapshotId The ID of the snapshot.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Snapshots$Get, options?: MethodOptions): AxiosPromise<Schema$Snapshot>;
        get(params: Params$Resource$Snapshots$Get, options: MethodOptions | BodyResponseCallback<Schema$Snapshot>, callback: BodyResponseCallback<Schema$Snapshot>): void;
        get(params: Params$Resource$Snapshots$Get, callback: BodyResponseCallback<Schema$Snapshot>): void;
        get(callback: BodyResponseCallback<Schema$Snapshot>): void;
        /**
         * games.snapshots.list
         * @desc Retrieves a list of snapshots created by your application for the
         * player corresponding to the player ID.
         * @alias games.snapshots.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxResults The maximum number of snapshot resources to return in the response, used for paging. For any response, the actual number of snapshot resources returned may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {string} params.playerId A player ID. A value of me may be used in place of the authenticated player's ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Snapshots$List, options?: MethodOptions): AxiosPromise<Schema$SnapshotListResponse>;
        list(params: Params$Resource$Snapshots$List, options: MethodOptions | BodyResponseCallback<Schema$SnapshotListResponse>, callback: BodyResponseCallback<Schema$SnapshotListResponse>): void;
        list(params: Params$Resource$Snapshots$List, callback: BodyResponseCallback<Schema$SnapshotListResponse>): void;
        list(callback: BodyResponseCallback<Schema$SnapshotListResponse>): void;
    }
    interface Params$Resource$Snapshots$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the snapshot.
         */
        snapshotId?: string;
    }
    interface Params$Resource$Snapshots$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of snapshot resources to return in the response, used
         * for paging. For any response, the actual number of snapshot resources
         * returned may be less than the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
        /**
         * A player ID. A value of me may be used in place of the authenticated
         * player's ID.
         */
        playerId?: string;
    }
    class Resource$Turnbasedmatches {
        root: Games;
        constructor(root: Games);
        getRoot(): Games;
        /**
         * games.turnBasedMatches.cancel
         * @desc Cancel a turn-based match.
         * @alias games.turnBasedMatches.cancel
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.matchId The ID of the match.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        cancel(params?: Params$Resource$Turnbasedmatches$Cancel, options?: MethodOptions): AxiosPromise<void>;
        cancel(params: Params$Resource$Turnbasedmatches$Cancel, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        cancel(params: Params$Resource$Turnbasedmatches$Cancel, callback: BodyResponseCallback<void>): void;
        cancel(callback: BodyResponseCallback<void>): void;
        /**
         * games.turnBasedMatches.create
         * @desc Create a turn-based match.
         * @alias games.turnBasedMatches.create
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {().TurnBasedMatchCreateRequest} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        create(params?: Params$Resource$Turnbasedmatches$Create, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatch>;
        create(params: Params$Resource$Turnbasedmatches$Create, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        create(params: Params$Resource$Turnbasedmatches$Create, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        create(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        /**
         * games.turnBasedMatches.decline
         * @desc Decline an invitation to play a turn-based match.
         * @alias games.turnBasedMatches.decline
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.matchId The ID of the match.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        decline(params?: Params$Resource$Turnbasedmatches$Decline, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatch>;
        decline(params: Params$Resource$Turnbasedmatches$Decline, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        decline(params: Params$Resource$Turnbasedmatches$Decline, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        decline(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        /**
         * games.turnBasedMatches.dismiss
         * @desc Dismiss a turn-based match from the match list. The match will no
         * longer show up in the list and will not generate notifications.
         * @alias games.turnBasedMatches.dismiss
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.matchId The ID of the match.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        dismiss(params?: Params$Resource$Turnbasedmatches$Dismiss, options?: MethodOptions): AxiosPromise<void>;
        dismiss(params: Params$Resource$Turnbasedmatches$Dismiss, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        dismiss(params: Params$Resource$Turnbasedmatches$Dismiss, callback: BodyResponseCallback<void>): void;
        dismiss(callback: BodyResponseCallback<void>): void;
        /**
         * games.turnBasedMatches.finish
         * @desc Finish a turn-based match. Each player should make this call once,
         * after all results are in. Only the player whose turn it is may make the
         * first call to Finish, and can pass in the final match state.
         * @alias games.turnBasedMatches.finish
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.matchId The ID of the match.
         * @param {().TurnBasedMatchResults} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        finish(params?: Params$Resource$Turnbasedmatches$Finish, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatch>;
        finish(params: Params$Resource$Turnbasedmatches$Finish, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        finish(params: Params$Resource$Turnbasedmatches$Finish, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        finish(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        /**
         * games.turnBasedMatches.get
         * @desc Get the data for a turn-based match.
         * @alias games.turnBasedMatches.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {boolean=} params.includeMatchData Get match data along with metadata.
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.matchId The ID of the match.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Turnbasedmatches$Get, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatch>;
        get(params: Params$Resource$Turnbasedmatches$Get, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        get(params: Params$Resource$Turnbasedmatches$Get, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        get(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        /**
         * games.turnBasedMatches.join
         * @desc Join a turn-based match.
         * @alias games.turnBasedMatches.join
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.matchId The ID of the match.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        join(params?: Params$Resource$Turnbasedmatches$Join, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatch>;
        join(params: Params$Resource$Turnbasedmatches$Join, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        join(params: Params$Resource$Turnbasedmatches$Join, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        join(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        /**
         * games.turnBasedMatches.leave
         * @desc Leave a turn-based match when it is not the current player's turn,
         * without canceling the match.
         * @alias games.turnBasedMatches.leave
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.matchId The ID of the match.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        leave(params?: Params$Resource$Turnbasedmatches$Leave, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatch>;
        leave(params: Params$Resource$Turnbasedmatches$Leave, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        leave(params: Params$Resource$Turnbasedmatches$Leave, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        leave(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        /**
         * games.turnBasedMatches.leaveTurn
         * @desc Leave a turn-based match during the current player's turn, without
         * canceling the match.
         * @alias games.turnBasedMatches.leaveTurn
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.matchId The ID of the match.
         * @param {integer} params.matchVersion The version of the match being updated.
         * @param {string=} params.pendingParticipantId The ID of another participant who should take their turn next. If not set, the match will wait for other player(s) to join via automatching; this is only valid if automatch criteria is set on the match with remaining slots for automatched players.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        leaveTurn(params?: Params$Resource$Turnbasedmatches$Leaveturn, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatch>;
        leaveTurn(params: Params$Resource$Turnbasedmatches$Leaveturn, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        leaveTurn(params: Params$Resource$Turnbasedmatches$Leaveturn, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        leaveTurn(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        /**
         * games.turnBasedMatches.list
         * @desc Returns turn-based matches the player is or was involved in.
         * @alias games.turnBasedMatches.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {boolean=} params.includeMatchData True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxCompletedMatches The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
         * @param {integer=} params.maxResults The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Turnbasedmatches$List, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatchList>;
        list(params: Params$Resource$Turnbasedmatches$List, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatchList>, callback: BodyResponseCallback<Schema$TurnBasedMatchList>): void;
        list(params: Params$Resource$Turnbasedmatches$List, callback: BodyResponseCallback<Schema$TurnBasedMatchList>): void;
        list(callback: BodyResponseCallback<Schema$TurnBasedMatchList>): void;
        /**
         * games.turnBasedMatches.rematch
         * @desc Create a rematch of a match that was previously completed, with the
         * same participants. This can be called by only one player on a match still
         * in their list; the player must have called Finish first. Returns the
         * newly created match; it will be the caller's turn.
         * @alias games.turnBasedMatches.rematch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.matchId The ID of the match.
         * @param {string=} params.requestId A randomly generated numeric ID for each request specified by the caller. This number is used at the server to ensure that the request is handled correctly across retries.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rematch(params?: Params$Resource$Turnbasedmatches$Rematch, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatchRematch>;
        rematch(params: Params$Resource$Turnbasedmatches$Rematch, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatchRematch>, callback: BodyResponseCallback<Schema$TurnBasedMatchRematch>): void;
        rematch(params: Params$Resource$Turnbasedmatches$Rematch, callback: BodyResponseCallback<Schema$TurnBasedMatchRematch>): void;
        rematch(callback: BodyResponseCallback<Schema$TurnBasedMatchRematch>): void;
        /**
         * games.turnBasedMatches.sync
         * @desc Returns turn-based matches the player is or was involved in that
         * changed since the last sync call, with the least recent changes coming
         * first. Matches that should be removed from the local cache will have a
         * status of MATCH_DELETED.
         * @alias games.turnBasedMatches.sync
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {boolean=} params.includeMatchData True if match data should be returned in the response. Note that not all data will necessarily be returned if include_match_data is true; the server may decide to only return data for some of the matches to limit download size for the client. The remainder of the data for these matches will be retrievable on request.
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {integer=} params.maxCompletedMatches The maximum number of completed or canceled matches to return in the response. If not set, all matches returned could be completed or canceled.
         * @param {integer=} params.maxResults The maximum number of matches to return in the response, used for paging. For any response, the actual number of matches to return may be less than the specified maxResults.
         * @param {string=} params.pageToken The token returned by the previous request.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        sync(params?: Params$Resource$Turnbasedmatches$Sync, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatchSync>;
        sync(params: Params$Resource$Turnbasedmatches$Sync, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatchSync>, callback: BodyResponseCallback<Schema$TurnBasedMatchSync>): void;
        sync(params: Params$Resource$Turnbasedmatches$Sync, callback: BodyResponseCallback<Schema$TurnBasedMatchSync>): void;
        sync(callback: BodyResponseCallback<Schema$TurnBasedMatchSync>): void;
        /**
         * games.turnBasedMatches.takeTurn
         * @desc Commit the results of a player turn.
         * @alias games.turnBasedMatches.takeTurn
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.language The preferred language to use for strings returned by this method.
         * @param {string} params.matchId The ID of the match.
         * @param {().TurnBasedMatchTurn} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        takeTurn(params?: Params$Resource$Turnbasedmatches$Taketurn, options?: MethodOptions): AxiosPromise<Schema$TurnBasedMatch>;
        takeTurn(params: Params$Resource$Turnbasedmatches$Taketurn, options: MethodOptions | BodyResponseCallback<Schema$TurnBasedMatch>, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        takeTurn(params: Params$Resource$Turnbasedmatches$Taketurn, callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
        takeTurn(callback: BodyResponseCallback<Schema$TurnBasedMatch>): void;
    }
    interface Params$Resource$Turnbasedmatches$Cancel extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the match.
         */
        matchId?: string;
    }
    interface Params$Resource$Turnbasedmatches$Create extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TurnBasedMatchCreateRequest;
    }
    interface Params$Resource$Turnbasedmatches$Decline extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the match.
         */
        matchId?: string;
    }
    interface Params$Resource$Turnbasedmatches$Dismiss extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the match.
         */
        matchId?: string;
    }
    interface Params$Resource$Turnbasedmatches$Finish extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the match.
         */
        matchId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TurnBasedMatchResults;
    }
    interface Params$Resource$Turnbasedmatches$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Get match data along with metadata.
         */
        includeMatchData?: boolean;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the match.
         */
        matchId?: string;
    }
    interface Params$Resource$Turnbasedmatches$Join extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the match.
         */
        matchId?: string;
    }
    interface Params$Resource$Turnbasedmatches$Leave extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the match.
         */
        matchId?: string;
    }
    interface Params$Resource$Turnbasedmatches$Leaveturn extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the match.
         */
        matchId?: string;
        /**
         * The version of the match being updated.
         */
        matchVersion?: number;
        /**
         * The ID of another participant who should take their turn next. If not
         * set, the match will wait for other player(s) to join via automatching;
         * this is only valid if automatch criteria is set on the match with
         * remaining slots for automatched players.
         */
        pendingParticipantId?: string;
    }
    interface Params$Resource$Turnbasedmatches$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * True if match data should be returned in the response. Note that not all
         * data will necessarily be returned if include_match_data is true; the
         * server may decide to only return data for some of the matches to limit
         * download size for the client. The remainder of the data for these matches
         * will be retrievable on request.
         */
        includeMatchData?: boolean;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of completed or canceled matches to return in the
         * response. If not set, all matches returned could be completed or
         * canceled.
         */
        maxCompletedMatches?: number;
        /**
         * The maximum number of matches to return in the response, used for paging.
         * For any response, the actual number of matches to return may be less than
         * the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Turnbasedmatches$Rematch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the match.
         */
        matchId?: string;
        /**
         * A randomly generated numeric ID for each request specified by the caller.
         * This number is used at the server to ensure that the request is handled
         * correctly across retries.
         */
        requestId?: string;
    }
    interface Params$Resource$Turnbasedmatches$Sync extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * True if match data should be returned in the response. Note that not all
         * data will necessarily be returned if include_match_data is true; the
         * server may decide to only return data for some of the matches to limit
         * download size for the client. The remainder of the data for these matches
         * will be retrievable on request.
         */
        includeMatchData?: boolean;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The maximum number of completed or canceled matches to return in the
         * response. If not set, all matches returned could be completed or
         * canceled.
         */
        maxCompletedMatches?: number;
        /**
         * The maximum number of matches to return in the response, used for paging.
         * For any response, the actual number of matches to return may be less than
         * the specified maxResults.
         */
        maxResults?: number;
        /**
         * The token returned by the previous request.
         */
        pageToken?: string;
    }
    interface Params$Resource$Turnbasedmatches$Taketurn extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The preferred language to use for strings returned by this method.
         */
        language?: string;
        /**
         * The ID of the match.
         */
        matchId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TurnBasedMatchTurn;
    }
}
