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
export declare namespace admin_directory_v1 {
    interface Options extends GlobalOptions {
        version: 'directory_v1';
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
     * Admin Directory API
     *
     * Manages enterprise resources such as users and groups, administrative
     * notifications, security features, and more.
     *
     * @example
     * const {google} = require('googleapis');
     * const admin = google.admin('directory_v1');
     *
     * @namespace admin
     * @type {Function}
     * @version directory_v1
     * @variation directory_v1
     * @param {object=} options Options for Admin
     */
    class Admin {
        _options: GlobalOptions;
        google?: GoogleConfigurable;
        root: this;
        asps: Resource$Asps;
        channels: Resource$Channels;
        chromeosdevices: Resource$Chromeosdevices;
        customers: Resource$Customers;
        domainAliases: Resource$Domainaliases;
        domains: Resource$Domains;
        groups: Resource$Groups;
        members: Resource$Members;
        mobiledevices: Resource$Mobiledevices;
        notifications: Resource$Notifications;
        orgunits: Resource$Orgunits;
        privileges: Resource$Privileges;
        resolvedAppAccessSettings: Resource$Resolvedappaccesssettings;
        resources: Resource$Resources;
        roleAssignments: Resource$Roleassignments;
        roles: Resource$Roles;
        schemas: Resource$Schemas;
        tokens: Resource$Tokens;
        users: Resource$Users;
        verificationCodes: Resource$Verificationcodes;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
        getRoot(): this;
    }
    /**
     * JSON template for Alias object in Directory API.
     */
    interface Schema$Alias {
        /**
         * A alias email
         */
        alias?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Unique id of the group (Read-only) Unique id of the user (Read-only)
         */
        id?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Group&#39;s primary email (Read-only) User&#39;s primary email
         * (Read-only)
         */
        primaryEmail?: string;
    }
    /**
     * JSON response template to list aliases in Directory API.
     */
    interface Schema$Aliases {
        /**
         * List of alias objects.
         */
        aliases?: any[];
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
    }
    /**
     * JSON template for App Access Collections Resource object in Directory API.
     */
    interface Schema$AppAccessCollections {
        /**
         * List of blocked api access buckets.
         */
        blockedApiAccessBuckets?: string[];
        /**
         * Boolean to indicate whether to enforce app access settings on Android
         * Drive or not.
         */
        enforceSettingsForAndroidDrive?: boolean;
        /**
         * Error message provided by the Admin that will be shown to the user when
         * an app is blocked.
         */
        errorMessage?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Identifies the resource as an app access collection. Value:
         * admin#directory#appaccesscollection
         */
        kind?: string;
        /**
         * Unique ID of app access collection. (Readonly)
         */
        resourceId?: string;
        /**
         * Resource name given by the customer while creating/updating. Should be
         * unique under given customer.
         */
        resourceName?: string;
        /**
         * Boolean that indicates whether to trust domain owned apps.
         */
        trustDomainOwnedApps?: boolean;
    }
    /**
     * The template that returns individual ASP (Access Code) data.
     */
    interface Schema$Asp {
        /**
         * The unique ID of the ASP.
         */
        codeId?: number;
        /**
         * The time when the ASP was created. Expressed in Unix time format.
         */
        creationTime?: string;
        /**
         * ETag of the ASP.
         */
        etag?: string;
        /**
         * The type of the API resource. This is always admin#directory#asp.
         */
        kind?: string;
        /**
         * The time when the ASP was last used. Expressed in Unix time format.
         */
        lastTimeUsed?: string;
        /**
         * The name of the application that the user, represented by their userId,
         * entered when the ASP was created.
         */
        name?: string;
        /**
         * The unique ID of the user who issued the ASP.
         */
        userKey?: string;
    }
    interface Schema$Asps {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * A list of ASP resources.
         */
        items?: Schema$Asp[];
        /**
         * The type of the API resource. This is always admin#directory#aspList.
         */
        kind?: string;
    }
    /**
     * JSON template for Building object in Directory API.
     */
    interface Schema$Building {
        /**
         * Unique identifier for the building. The maximum length is 100 characters.
         */
        buildingId?: string;
        /**
         * The building name as seen by users in Calendar. Must be unique for the
         * customer. For example, &quot;NYC-CHEL&quot;. The maximum length is 100
         * characters.
         */
        buildingName?: string;
        /**
         * The geographic coordinates of the center of the building, expressed as
         * latitude and longitude in decimal degrees.
         */
        coordinates?: Schema$BuildingCoordinates;
        /**
         * A brief description of the building. For example, &quot;Chelsea
         * Market&quot;.
         */
        description?: string;
        /**
         * ETag of the resource.
         */
        etags?: string;
        /**
         * The display names for all floors in this building. The floors are
         * expected to be sorted in ascending order, from lowest floor to highest
         * floor. For example, [&quot;B2&quot;, &quot;B1&quot;, &quot;L&quot;,
         * &quot;1&quot;, &quot;2&quot;, &quot;2M&quot;, &quot;3&quot;,
         * &quot;PH&quot;] Must contain at least one entry.
         */
        floorNames?: string[];
        /**
         * Kind of resource this is.
         */
        kind?: string;
    }
    /**
     * JSON template for coordinates of a building in Directory API.
     */
    interface Schema$BuildingCoordinates {
        /**
         * Latitude in decimal degrees.
         */
        latitude?: number;
        /**
         * Longitude in decimal degrees.
         */
        longitude?: number;
    }
    /**
     * JSON template for Building List Response object in Directory API.
     */
    interface Schema$Buildings {
        /**
         * The Buildings in this page of results.
         */
        buildings?: Schema$Building[];
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * The continuation token, used to page through large result sets. Provide
         * this value in a subsequent request to return the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * JSON template for Calendar Resource object in Directory API.
     */
    interface Schema$CalendarResource {
        /**
         * Unique ID for the building a resource is located in.
         */
        buildingId?: string;
        /**
         * Capacity of a resource, number of seats in a room.
         */
        capacity?: number;
        /**
         * ETag of the resource.
         */
        etags?: string;
        featureInstances?: any;
        /**
         * Name of the floor a resource is located on.
         */
        floorName?: string;
        /**
         * Name of the section within a floor a resource is located in.
         */
        floorSection?: string;
        /**
         * The read-only auto-generated name of the calendar resource which includes
         * metadata about the resource such as building name, floor, capacity, etc.
         * For example, &quot;NYC-2-Training Room 1A (16)&quot;.
         */
        generatedResourceName?: string;
        /**
         * The type of the resource. For calendar resources, the value is
         * admin#directory#resources#calendars#CalendarResource.
         */
        kind?: string;
        /**
         * The category of the calendar resource. Either CONFERENCE_ROOM or OTHER.
         * Legacy data is set to CATEGORY_UNKNOWN.
         */
        resourceCategory?: string;
        /**
         * Description of the resource, visible only to admins.
         */
        resourceDescription?: string;
        /**
         * The read-only email for the calendar resource. Generated as part of
         * creating a new calendar resource.
         */
        resourceEmail?: string;
        /**
         * The unique ID for the calendar resource.
         */
        resourceId?: string;
        /**
         * The name of the calendar resource. For example, &quot;Training Room
         * 1A&quot;.
         */
        resourceName?: string;
        /**
         * The type of the calendar resource, intended for non-room resources.
         */
        resourceType?: string;
        /**
         * Description of the resource, visible to users and admins.
         */
        userVisibleDescription?: string;
    }
    /**
     * JSON template for Calendar Resource List Response object in Directory API.
     */
    interface Schema$CalendarResources {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * The CalendarResources in this page of results.
         */
        items?: Schema$CalendarResource[];
        /**
         * Identifies this as a collection of CalendarResources. This is always
         * admin#directory#resources#calendars#calendarResourcesList.
         */
        kind?: string;
        /**
         * The continuation token, used to page through large result sets. Provide
         * this value in a subsequent request to return the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * An notification channel used to watch for resource changes.
     */
    interface Schema$Channel {
        /**
         * The address where notifications are delivered for this channel.
         */
        address?: string;
        /**
         * Date and time of notification channel expiration, expressed as a Unix
         * timestamp, in milliseconds. Optional.
         */
        expiration?: string;
        /**
         * A UUID or similar unique string that identifies this channel.
         */
        id?: string;
        /**
         * Identifies this as a notification channel used to watch for changes to a
         * resource. Value: the fixed string &quot;api#channel&quot;.
         */
        kind?: string;
        /**
         * Additional parameters controlling delivery channel behavior. Optional.
         */
        params?: any;
        /**
         * A Boolean value to indicate whether payload is wanted. Optional.
         */
        payload?: boolean;
        /**
         * An opaque ID that identifies the resource being watched on this channel.
         * Stable across different API versions.
         */
        resourceId?: string;
        /**
         * A version-specific identifier for the watched resource.
         */
        resourceUri?: string;
        /**
         * An arbitrary string delivered to the target address with each
         * notification delivered over this channel. Optional.
         */
        token?: string;
        /**
         * The type of delivery mechanism used for this channel.
         */
        type?: string;
    }
    /**
     * JSON template for Chrome Os Device resource in Directory API.
     */
    interface Schema$ChromeOsDevice {
        /**
         * List of active time ranges (Read-only)
         */
        activeTimeRanges?: any[];
        /**
         * AssetId specified during enrollment or through later annotation
         */
        annotatedAssetId?: string;
        /**
         * Address or location of the device as noted by the administrator
         */
        annotatedLocation?: string;
        /**
         * User of the device
         */
        annotatedUser?: string;
        /**
         * Chromebook boot mode (Read-only)
         */
        bootMode?: string;
        /**
         * Reports of CPU utilization and temperature (Read-only)
         */
        cpuStatusReports?: any[];
        /**
         * List of device files to download (Read-only)
         */
        deviceFiles?: any[];
        /**
         * Unique identifier of Chrome OS Device (Read-only)
         */
        deviceId?: string;
        /**
         * Reports of disk space and other info about mounted/connected volumes.
         */
        diskVolumeReports?: any[];
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Chromebook Mac Address on ethernet network interface (Read-only)
         */
        ethernetMacAddress?: string;
        /**
         * Chromebook firmware version (Read-only)
         */
        firmwareVersion?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Date and time the device was last enrolled (Read-only)
         */
        lastEnrollmentTime?: string;
        /**
         * Date and time the device was last synchronized with the policy settings
         * in the G Suite administrator control panel (Read-only)
         */
        lastSync?: string;
        /**
         * Chromebook Mac Address on wifi network interface (Read-only)
         */
        macAddress?: string;
        /**
         * Mobile Equipment identifier for the 3G mobile card in the Chromebook
         * (Read-only)
         */
        meid?: string;
        /**
         * Chromebook Model (Read-only)
         */
        model?: string;
        /**
         * Notes added by the administrator
         */
        notes?: string;
        /**
         * Chromebook order number (Read-only)
         */
        orderNumber?: string;
        /**
         * OrgUnit of the device
         */
        orgUnitPath?: string;
        /**
         * Chromebook Os Version (Read-only)
         */
        osVersion?: string;
        /**
         * Chromebook platform version (Read-only)
         */
        platformVersion?: string;
        /**
         * List of recent device users, in descending order by last login time
         * (Read-only)
         */
        recentUsers?: any[];
        /**
         * Chromebook serial number (Read-only)
         */
        serialNumber?: string;
        /**
         * status of the device (Read-only)
         */
        status?: string;
        /**
         * Final date the device will be supported (Read-only)
         */
        supportEndDate?: string;
        /**
         * Reports of amounts of available RAM memory (Read-only)
         */
        systemRamFreeReports?: any[];
        /**
         * Total RAM on the device [in bytes] (Read-only)
         */
        systemRamTotal?: string;
        /**
         * Trusted Platform Module (TPM) (Read-only)
         */
        tpmVersionInfo?: any;
        /**
         * Will Chromebook auto renew after support end date (Read-only)
         */
        willAutoRenew?: boolean;
    }
    /**
     * JSON request template for firing actions on ChromeOs Device in Directory
     * Devices API.
     */
    interface Schema$ChromeOsDeviceAction {
        /**
         * Action to be taken on the ChromeOs Device
         */
        action?: string;
        deprovisionReason?: string;
    }
    /**
     * JSON response template for List Chrome OS Devices operation in Directory
     * API.
     */
    interface Schema$ChromeOsDevices {
        /**
         * List of Chrome OS Device objects.
         */
        chromeosdevices?: Schema$ChromeOsDevice[];
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Token used to access next page of this result.
         */
        nextPageToken?: string;
    }
    /**
     * JSON request template for moving ChromeOs Device to given OU in Directory
     * Devices API.
     */
    interface Schema$ChromeOsMoveDevicesToOu {
        /**
         * ChromeOs Devices to be moved to OU
         */
        deviceIds?: string[];
    }
    /**
     * JSON template for Customer Resource object in Directory API.
     */
    interface Schema$Customer {
        /**
         * The customer&#39;s secondary contact email address. This email address
         * cannot be on the same domain as the customerDomain
         */
        alternateEmail?: string;
        /**
         * The customer&#39;s creation time (Readonly)
         */
        customerCreationTime?: string;
        /**
         * The customer&#39;s primary domain name string. Do not include the www
         * prefix when creating a new customer.
         */
        customerDomain?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * The unique ID for the customer&#39;s G Suite account. (Readonly)
         */
        id?: string;
        /**
         * Identifies the resource as a customer. Value: admin#directory#customer
         */
        kind?: string;
        /**
         * The customer&#39;s ISO 639-2 language code. The default value is en-US
         */
        language?: string;
        /**
         * The customer&#39;s contact phone number in E.164 format.
         */
        phoneNumber?: string;
        /**
         * The customer&#39;s postal address information.
         */
        postalAddress?: Schema$CustomerPostalAddress;
    }
    /**
     * JSON template for postal address of a customer.
     */
    interface Schema$CustomerPostalAddress {
        /**
         * A customer&#39;s physical address. The address can be composed of one to
         * three lines.
         */
        addressLine1?: string;
        /**
         * Address line 2 of the address.
         */
        addressLine2?: string;
        /**
         * Address line 3 of the address.
         */
        addressLine3?: string;
        /**
         * The customer contact&#39;s name.
         */
        contactName?: string;
        /**
         * This is a required property. For countryCode information see the ISO 3166
         * country code elements.
         */
        countryCode?: string;
        /**
         * Name of the locality. An example of a locality value is the city of San
         * Francisco.
         */
        locality?: string;
        /**
         * The company or company division name.
         */
        organizationName?: string;
        /**
         * The postal code. A postalCode example is a postal zip code such as 10009.
         * This is in accordance with -
         * http://portablecontacts.net/draft-spec.html#address_element.
         */
        postalCode?: string;
        /**
         * Name of the region. An example of a region value is NY for the state of
         * New York.
         */
        region?: string;
    }
    /**
     * JSON template for Domain Alias object in Directory API.
     */
    interface Schema$DomainAlias {
        /**
         * The creation time of the domain alias. (Read-only).
         */
        creationTime?: string;
        /**
         * The domain alias name.
         */
        domainAliasName?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * The parent domain name that the domain alias is associated with. This can
         * either be a primary or secondary domain name within a customer.
         */
        parentDomainName?: string;
        /**
         * Indicates the verification state of a domain alias. (Read-only)
         */
        verified?: boolean;
    }
    /**
     * JSON response template to list domain aliases in Directory API.
     */
    interface Schema$DomainAliases {
        /**
         * List of domain alias objects.
         */
        domainAliases?: Schema$DomainAlias[];
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
    }
    /**
     * JSON template for Domain object in Directory API.
     */
    interface Schema$Domains {
        /**
         * Creation time of the domain. (Read-only).
         */
        creationTime?: string;
        /**
         * List of domain alias objects. (Read-only)
         */
        domainAliases?: Schema$DomainAlias[];
        /**
         * The domain name of the customer.
         */
        domainName?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Indicates if the domain is a primary domain (Read-only).
         */
        isPrimary?: boolean;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Indicates the verification state of a domain. (Read-only).
         */
        verified?: boolean;
    }
    /**
     * JSON response template to list Domains in Directory API.
     */
    interface Schema$Domains2 {
        /**
         * List of domain objects.
         */
        domains?: Schema$Domains[];
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
    }
    /**
     * JSON template for Feature object in Directory API.
     */
    interface Schema$Feature {
        /**
         * ETag of the resource.
         */
        etags?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * The name of the feature.
         */
        name?: string;
    }
    /**
     * JSON template for a &quot;feature instance&quot;.
     */
    interface Schema$FeatureInstance {
        /**
         * The feature that this is an instance of. A calendar resource may have
         * multiple instances of a feature.
         */
        feature?: Schema$Feature;
    }
    /**
     * JSON request template for renaming a feature.
     */
    interface Schema$FeatureRename {
        /**
         * New name of the feature.
         */
        newName?: string;
    }
    /**
     * JSON template for Feature List Response object in Directory API.
     */
    interface Schema$Features {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * The Features in this page of results.
         */
        features?: Schema$Feature[];
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * The continuation token, used to page through large result sets. Provide
         * this value in a subsequent request to return the next page of results.
         */
        nextPageToken?: string;
    }
    /**
     * JSON template for Group resource in Directory API.
     */
    interface Schema$Group {
        /**
         * Is the group created by admin (Read-only) *
         */
        adminCreated?: boolean;
        /**
         * List of aliases (Read-only)
         */
        aliases?: string[];
        /**
         * Description of the group
         */
        description?: string;
        /**
         * Group direct members count
         */
        directMembersCount?: string;
        /**
         * Email of Group
         */
        email?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Unique identifier of Group (Read-only)
         */
        id?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Group name
         */
        name?: string;
        /**
         * List of non editable aliases (Read-only)
         */
        nonEditableAliases?: string[];
    }
    /**
     * JSON response template for List Groups operation in Directory API.
     */
    interface Schema$Groups {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * List of group objects.
         */
        groups?: Schema$Group[];
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Token used to access next page of this result.
         */
        nextPageToken?: string;
    }
    /**
     * JSON template for Member resource in Directory API.
     */
    interface Schema$Member {
        /**
         * Delivery settings of member
         */
        delivery_settings?: string;
        /**
         * Email of member (Read-only)
         */
        email?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Unique identifier of customer member (Read-only) Unique identifier of
         * group (Read-only) Unique identifier of member (Read-only)
         */
        id?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Role of member
         */
        role?: string;
        /**
         * Status of member (Immutable)
         */
        status?: string;
        /**
         * Type of member (Immutable)
         */
        type?: string;
    }
    /**
     * JSON response template for List Members operation in Directory API.
     */
    interface Schema$Members {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * List of member objects.
         */
        members?: Schema$Member[];
        /**
         * Token used to access next page of this result.
         */
        nextPageToken?: string;
    }
    /**
     * JSON template for Has Member response in Directory API.
     */
    interface Schema$MembersHasMember {
        /**
         * Identifies whether the given user is a member of the group. Membership
         * can be direct or nested.
         */
        isMember?: boolean;
    }
    /**
     * JSON template for Mobile Device resource in Directory API.
     */
    interface Schema$MobileDevice {
        /**
         * Adb (USB debugging) enabled or disabled on device (Read-only)
         */
        adbStatus?: boolean;
        /**
         * List of applications installed on Mobile Device
         */
        applications?: any[];
        /**
         * Mobile Device Baseband version (Read-only)
         */
        basebandVersion?: string;
        /**
         * Mobile Device Bootloader version (Read-only)
         */
        bootloaderVersion?: string;
        /**
         * Mobile Device Brand (Read-only)
         */
        brand?: string;
        /**
         * Mobile Device Build number (Read-only)
         */
        buildNumber?: string;
        /**
         * The default locale used on the Mobile Device (Read-only)
         */
        defaultLanguage?: string;
        /**
         * Developer options enabled or disabled on device (Read-only)
         */
        developerOptionsStatus?: boolean;
        /**
         * Mobile Device compromised status (Read-only)
         */
        deviceCompromisedStatus?: string;
        /**
         * Mobile Device serial number (Read-only)
         */
        deviceId?: string;
        /**
         * DevicePasswordStatus (Read-only)
         */
        devicePasswordStatus?: string;
        /**
         * List of owner user&#39;s email addresses (Read-only)
         */
        email?: string[];
        /**
         * Mobile Device Encryption Status (Read-only)
         */
        encryptionStatus?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Date and time the device was first synchronized with the policy settings
         * in the G Suite administrator control panel (Read-only)
         */
        firstSync?: string;
        /**
         * Mobile Device Hardware (Read-only)
         */
        hardware?: string;
        /**
         * Mobile Device Hardware Id (Read-only)
         */
        hardwareId?: string;
        /**
         * Mobile Device IMEI number (Read-only)
         */
        imei?: string;
        /**
         * Mobile Device Kernel version (Read-only)
         */
        kernelVersion?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Date and time the device was last synchronized with the policy settings
         * in the G Suite administrator control panel (Read-only)
         */
        lastSync?: string;
        /**
         * Boolean indicating if this account is on owner/primary profile or not
         * (Read-only)
         */
        managedAccountIsOnOwnerProfile?: boolean;
        /**
         * Mobile Device manufacturer (Read-only)
         */
        manufacturer?: string;
        /**
         * Mobile Device MEID number (Read-only)
         */
        meid?: string;
        /**
         * Name of the model of the device
         */
        model?: string;
        /**
         * List of owner user&#39;s names (Read-only)
         */
        name?: string[];
        /**
         * Mobile Device mobile or network operator (if available) (Read-only)
         */
        networkOperator?: string;
        /**
         * Name of the mobile operating system
         */
        os?: string;
        /**
         * List of accounts added on device (Read-only)
         */
        otherAccountsInfo?: string[];
        /**
         * DMAgentPermission (Read-only)
         */
        privilege?: string;
        /**
         * Mobile Device release version version (Read-only)
         */
        releaseVersion?: string;
        /**
         * Unique identifier of Mobile Device (Read-only)
         */
        resourceId?: string;
        /**
         * Mobile Device Security patch level (Read-only)
         */
        securityPatchLevel?: string;
        /**
         * Mobile Device SSN or Serial Number (Read-only)
         */
        serialNumber?: string;
        /**
         * Status of the device (Read-only)
         */
        status?: string;
        /**
         * Work profile supported on device (Read-only)
         */
        supportsWorkProfile?: boolean;
        /**
         * The type of device (Read-only)
         */
        type?: string;
        /**
         * Unknown sources enabled or disabled on device (Read-only)
         */
        unknownSourcesStatus?: boolean;
        /**
         * Mobile Device user agent
         */
        userAgent?: string;
        /**
         * Mobile Device WiFi MAC address (Read-only)
         */
        wifiMacAddress?: string;
    }
    /**
     * JSON request template for firing commands on Mobile Device in Directory
     * Devices API.
     */
    interface Schema$MobileDeviceAction {
        /**
         * Action to be taken on the Mobile Device
         */
        action?: string;
    }
    /**
     * JSON response template for List Mobile Devices operation in Directory API.
     */
    interface Schema$MobileDevices {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * List of Mobile Device objects.
         */
        mobiledevices?: Schema$MobileDevice[];
        /**
         * Token used to access next page of this result.
         */
        nextPageToken?: string;
    }
    /**
     * Template for a notification resource.
     */
    interface Schema$Notification {
        /**
         * Body of the notification (Read-only)
         */
        body?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Address from which the notification is received (Read-only)
         */
        fromAddress?: string;
        /**
         * Boolean indicating whether the notification is unread or not.
         */
        isUnread?: boolean;
        /**
         * The type of the resource.
         */
        kind?: string;
        notificationId?: string;
        /**
         * Time at which notification was sent (Read-only)
         */
        sendTime?: string;
        /**
         * Subject of the notification (Read-only)
         */
        subject?: string;
    }
    /**
     * Template for notifications list response.
     */
    interface Schema$Notifications {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * List of notifications in this page.
         */
        items?: Schema$Notification[];
        /**
         * The type of the resource.
         */
        kind?: string;
        /**
         * Token for fetching the next page of notifications.
         */
        nextPageToken?: string;
        /**
         * Number of unread notification for the domain.
         */
        unreadNotificationsCount?: number;
    }
    /**
     * JSON template for Org Unit resource in Directory API.
     */
    interface Schema$OrgUnit {
        /**
         * Should block inheritance
         */
        blockInheritance?: boolean;
        /**
         * Description of OrgUnit
         */
        description?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Name of OrgUnit
         */
        name?: string;
        /**
         * Id of OrgUnit
         */
        orgUnitId?: string;
        /**
         * Path of OrgUnit
         */
        orgUnitPath?: string;
        /**
         * Id of parent OrgUnit
         */
        parentOrgUnitId?: string;
        /**
         * Path of parent OrgUnit
         */
        parentOrgUnitPath?: string;
    }
    /**
     * JSON response template for List Organization Units operation in Directory
     * API.
     */
    interface Schema$OrgUnits {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * List of user objects.
         */
        organizationUnits?: Schema$OrgUnit[];
    }
    /**
     * JSON template for privilege resource in Directory API.
     */
    interface Schema$Privilege {
        /**
         * A list of child privileges. Privileges for a service form a tree. Each
         * privilege can have a list of child privileges; this list is empty for a
         * leaf privilege.
         */
        childPrivileges?: Schema$Privilege[];
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * If the privilege can be restricted to an organization unit.
         */
        isOuScopable?: boolean;
        /**
         * The type of the API resource. This is always admin#directory#privilege.
         */
        kind?: string;
        /**
         * The name of the privilege.
         */
        privilegeName?: string;
        /**
         * The obfuscated ID of the service this privilege is for.
         */
        serviceId?: string;
        /**
         * The name of the service this privilege is for.
         */
        serviceName?: string;
    }
    /**
     * JSON response template for List privileges operation in Directory API.
     */
    interface Schema$Privileges {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * A list of Privilege resources.
         */
        items?: Schema$Privilege[];
        /**
         * The type of the API resource. This is always admin#directory#privileges.
         */
        kind?: string;
    }
    /**
     * JSON template for role resource in Directory API.
     */
    interface Schema$Role {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Returns true if the role is a super admin role.
         */
        isSuperAdminRole?: boolean;
        /**
         * Returns true if this is a pre-defined system role.
         */
        isSystemRole?: boolean;
        /**
         * The type of the API resource. This is always admin#directory#role.
         */
        kind?: string;
        /**
         * A short description of the role.
         */
        roleDescription?: string;
        /**
         * ID of the role.
         */
        roleId?: string;
        /**
         * Name of the role.
         */
        roleName?: string;
        /**
         * The set of privileges that are granted to this role.
         */
        rolePrivileges?: any[];
    }
    /**
     * JSON template for roleAssignment resource in Directory API.
     */
    interface Schema$RoleAssignment {
        /**
         * The unique ID of the user this role is assigned to.
         */
        assignedTo?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * The type of the API resource. This is always
         * admin#directory#roleAssignment.
         */
        kind?: string;
        /**
         * If the role is restricted to an organization unit, this contains the ID
         * for the organization unit the exercise of this role is restricted to.
         */
        orgUnitId?: string;
        /**
         * ID of this roleAssignment.
         */
        roleAssignmentId?: string;
        /**
         * The ID of the role that is assigned.
         */
        roleId?: string;
        /**
         * The scope in which this role is assigned. Possible values are:  -
         * CUSTOMER - ORG_UNIT
         */
        scopeType?: string;
    }
    /**
     * JSON response template for List roleAssignments operation in Directory API.
     */
    interface Schema$RoleAssignments {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * A list of RoleAssignment resources.
         */
        items?: Schema$RoleAssignment[];
        /**
         * The type of the API resource. This is always
         * admin#directory#roleAssignments.
         */
        kind?: string;
        nextPageToken?: string;
    }
    /**
     * JSON response template for List roles operation in Directory API.
     */
    interface Schema$Roles {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * A list of Role resources.
         */
        items?: Schema$Role[];
        /**
         * The type of the API resource. This is always admin#directory#roles.
         */
        kind?: string;
        nextPageToken?: string;
    }
    /**
     * JSON template for Schema resource in Directory API.
     */
    interface Schema$Schema {
        /**
         * Display name for the schema.
         */
        displayName?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Fields of Schema
         */
        fields?: Schema$SchemaFieldSpec[];
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Unique identifier of Schema (Read-only)
         */
        schemaId?: string;
        /**
         * Schema name
         */
        schemaName?: string;
    }
    /**
     * JSON template for FieldSpec resource for Schemas in Directory API.
     */
    interface Schema$SchemaFieldSpec {
        /**
         * Display Name of the field.
         */
        displayName?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Unique identifier of Field (Read-only)
         */
        fieldId?: string;
        /**
         * Name of the field.
         */
        fieldName?: string;
        /**
         * Type of the field.
         */
        fieldType?: string;
        /**
         * Boolean specifying whether the field is indexed or not.
         */
        indexed?: boolean;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Boolean specifying whether this is a multi-valued field or not.
         */
        multiValued?: boolean;
        /**
         * Indexing spec for a numeric field. By default, only exact match queries
         * will be supported for numeric fields. Setting the numericIndexingSpec
         * allows range queries to be supported.
         */
        numericIndexingSpec?: any;
        /**
         * Read ACLs on the field specifying who can view values of this field.
         * Valid values are &quot;ALL_DOMAIN_USERS&quot; and
         * &quot;ADMINS_AND_SELF&quot;.
         */
        readAccessType?: string;
    }
    /**
     * JSON response template for List Schema operation in Directory API.
     */
    interface Schema$Schemas {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * List of UserSchema objects.
         */
        schemas?: Schema$Schema[];
    }
    /**
     * JSON template for token resource in Directory API.
     */
    interface Schema$Token {
        /**
         * Whether the application is registered with Google. The value is true if
         * the application has an anonymous Client ID.
         */
        anonymous?: boolean;
        /**
         * The Client ID of the application the token is issued to.
         */
        clientId?: string;
        /**
         * The displayable name of the application the token is issued to.
         */
        displayText?: string;
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * The type of the API resource. This is always admin#directory#token.
         */
        kind?: string;
        /**
         * Whether the token is issued to an installed application. The value is
         * true if the application is installed to a desktop or mobile device.
         */
        nativeApp?: boolean;
        /**
         * A list of authorization scopes the application is granted.
         */
        scopes?: string[];
        /**
         * The unique ID of the user that issued the token.
         */
        userKey?: string;
    }
    /**
     * JSON response template for List tokens operation in Directory API.
     */
    interface Schema$Tokens {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * A list of Token resources.
         */
        items?: Schema$Token[];
        /**
         * The type of the API resource. This is always admin#directory#tokenList.
         */
        kind?: string;
    }
    /**
     * JSON template for Trusted App Ids Resource object in Directory API.
     */
    interface Schema$TrustedAppId {
        /**
         * Android package name.
         */
        androidPackageName?: string;
        /**
         * SHA1 signature of the app certificate.
         */
        certificateHashSHA1?: string;
        /**
         * SHA256 signature of the app certificate.
         */
        certificateHashSHA256?: string;
        etag?: string;
        /**
         * Identifies the resource as a trusted AppId.
         */
        kind?: string;
    }
    /**
     * JSON template for Trusted Apps response object of a user in Directory API.
     */
    interface Schema$TrustedApps {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Identifies the resource as trusted apps response.
         */
        kind?: string;
        nextPageToken?: string;
        /**
         * Trusted Apps list.
         */
        trustedApps?: Schema$TrustedAppId[];
    }
    /**
     * JSON template for User object in Directory API.
     */
    interface Schema$User {
        addresses?: any;
        /**
         * Indicates if user has agreed to terms (Read-only)
         */
        agreedToTerms?: boolean;
        /**
         * List of aliases (Read-only)
         */
        aliases?: string[];
        /**
         * Indicates if user is archived.
         */
        archived?: boolean;
        /**
         * Boolean indicating if the user should change password in next login
         */
        changePasswordAtNextLogin?: boolean;
        /**
         * User&#39;s G Suite account creation time. (Read-only)
         */
        creationTime?: string;
        /**
         * CustomerId of User (Read-only)
         */
        customerId?: string;
        /**
         * Custom fields of the user.
         */
        customSchemas?: any;
        deletionTime?: string;
        emails?: any;
        /**
         * ETag of the resource.
         */
        etag?: string;
        externalIds?: any;
        gender?: any;
        /**
         * Hash function name for password. Supported are MD5, SHA-1 and crypt
         */
        hashFunction?: string;
        /**
         * Unique identifier of User (Read-only)
         */
        id?: string;
        ims?: any;
        /**
         * Boolean indicating if user is included in Global Address List
         */
        includeInGlobalAddressList?: boolean;
        /**
         * Boolean indicating if ip is whitelisted
         */
        ipWhitelisted?: boolean;
        /**
         * Boolean indicating if the user is admin (Read-only)
         */
        isAdmin?: boolean;
        /**
         * Boolean indicating if the user is delegated admin (Read-only)
         */
        isDelegatedAdmin?: boolean;
        /**
         * Is 2-step verification enforced (Read-only)
         */
        isEnforcedIn2Sv?: boolean;
        /**
         * Is enrolled in 2-step verification (Read-only)
         */
        isEnrolledIn2Sv?: boolean;
        /**
         * Is mailbox setup (Read-only)
         */
        isMailboxSetup?: boolean;
        keywords?: any;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        languages?: any;
        /**
         * User&#39;s last login time. (Read-only)
         */
        lastLoginTime?: string;
        locations?: any;
        /**
         * User&#39;s name
         */
        name?: Schema$UserName;
        /**
         * List of non editable aliases (Read-only)
         */
        nonEditableAliases?: string[];
        notes?: any;
        organizations?: any;
        /**
         * OrgUnit of User
         */
        orgUnitPath?: string;
        /**
         * User&#39;s password
         */
        password?: string;
        phones?: any;
        posixAccounts?: any;
        /**
         * username of User
         */
        primaryEmail?: string;
        relations?: any;
        sshPublicKeys?: any;
        /**
         * Indicates if user is suspended.
         */
        suspended?: boolean;
        /**
         * Suspension reason if user is suspended (Read-only)
         */
        suspensionReason?: string;
        /**
         * ETag of the user&#39;s photo (Read-only)
         */
        thumbnailPhotoEtag?: string;
        /**
         * Photo Url of the user (Read-only)
         */
        thumbnailPhotoUrl?: string;
        websites?: any;
    }
    /**
     * JSON template for About (notes) of a user in Directory API.
     */
    interface Schema$UserAbout {
        /**
         * About entry can have a type which indicates the content type. It can
         * either be plain or html. By default, notes contents are assumed to
         * contain plain text.
         */
        contentType?: string;
        /**
         * Actual value of notes.
         */
        value?: string;
    }
    /**
     * JSON template for address.
     */
    interface Schema$UserAddress {
        /**
         * Country.
         */
        country?: string;
        /**
         * Country code.
         */
        countryCode?: string;
        /**
         * Custom type.
         */
        customType?: string;
        /**
         * Extended Address.
         */
        extendedAddress?: string;
        /**
         * Formatted address.
         */
        formatted?: string;
        /**
         * Locality.
         */
        locality?: string;
        /**
         * Other parts of address.
         */
        poBox?: string;
        /**
         * Postal code.
         */
        postalCode?: string;
        /**
         * If this is user&#39;s primary address. Only one entry could be marked as
         * primary.
         */
        primary?: boolean;
        /**
         * Region.
         */
        region?: string;
        /**
         * User supplied address was structured. Structured addresses are NOT
         * supported at this time. You might be able to write structured addresses,
         * but any values will eventually be clobbered.
         */
        sourceIsStructured?: boolean;
        /**
         * Street.
         */
        streetAddress?: string;
        /**
         * Each entry can have a type which indicates standard values of that entry.
         * For example address could be of home, work etc. In addition to the
         * standard type, an entry can have a custom type and can take any value.
         * Such type should have the CUSTOM value as type and also have a customType
         * value.
         */
        type?: string;
    }
    /**
     * JSON template for a set of custom properties (i.e. all fields in a
     * particular schema)
     */
    interface Schema$UserCustomProperties {
    }
    /**
     * JSON template for an email.
     */
    interface Schema$UserEmail {
        /**
         * Email id of the user.
         */
        address?: string;
        /**
         * Custom Type.
         */
        customType?: string;
        /**
         * If this is user&#39;s primary email. Only one entry could be marked as
         * primary.
         */
        primary?: boolean;
        /**
         * Each entry can have a type which indicates standard types of that entry.
         * For example email could be of home, work etc. In addition to the standard
         * type, an entry can have a custom type and can take any value Such types
         * should have the CUSTOM value as type and also have a customType value.
         */
        type?: string;
    }
    /**
     * JSON template for an externalId entry.
     */
    interface Schema$UserExternalId {
        /**
         * Custom type.
         */
        customType?: string;
        /**
         * The type of the Id.
         */
        type?: string;
        /**
         * The value of the id.
         */
        value?: string;
    }
    interface Schema$UserGender {
        /**
         * AddressMeAs. A human-readable string containing the proper way to refer
         * to the profile owner by humans, for example &quot;he/him/his&quot; or
         * &quot;they/them/their&quot;.
         */
        addressMeAs?: string;
        /**
         * Custom gender.
         */
        customGender?: string;
        /**
         * Gender.
         */
        type?: string;
    }
    /**
     * JSON template for instant messenger of an user.
     */
    interface Schema$UserIm {
        /**
         * Custom protocol.
         */
        customProtocol?: string;
        /**
         * Custom type.
         */
        customType?: string;
        /**
         * Instant messenger id.
         */
        im?: string;
        /**
         * If this is user&#39;s primary im. Only one entry could be marked as
         * primary.
         */
        primary?: boolean;
        /**
         * Protocol used in the instant messenger. It should be one of the values
         * from ImProtocolTypes map. Similar to type, it can take a CUSTOM value and
         * specify the custom name in customProtocol field.
         */
        protocol?: string;
        /**
         * Each entry can have a type which indicates standard types of that entry.
         * For example instant messengers could be of home, work etc. In addition to
         * the standard type, an entry can have a custom type and can take any
         * value. Such types should have the CUSTOM value as type and also have a
         * customType value.
         */
        type?: string;
    }
    /**
     * JSON template for a keyword entry.
     */
    interface Schema$UserKeyword {
        /**
         * Custom Type.
         */
        customType?: string;
        /**
         * Each entry can have a type which indicates standard type of that entry.
         * For example, keyword could be of type occupation or outlook. In addition
         * to the standard type, an entry can have a custom type and can give it any
         * name. Such types should have the CUSTOM value as type and also have a
         * customType value.
         */
        type?: string;
        /**
         * Keyword.
         */
        value?: string;
    }
    /**
     * JSON template for a language entry.
     */
    interface Schema$UserLanguage {
        /**
         * Other language. User can provide own language name if there is no
         * corresponding Google III language code. If this is set LanguageCode
         * can&#39;t be set
         */
        customLanguage?: string;
        /**
         * Language Code. Should be used for storing Google III LanguageCode string
         * representation for language. Illegal values cause SchemaException.
         */
        languageCode?: string;
    }
    /**
     * JSON template for a location entry.
     */
    interface Schema$UserLocation {
        /**
         * Textual location. This is most useful for display purposes to concisely
         * describe the location. For example, &quot;Mountain View, CA&quot;,
         * &quot;Near Seattle&quot;, &quot;US-NYC-9TH 9A209A&quot;.
         */
        area?: string;
        /**
         * Building Identifier.
         */
        buildingId?: string;
        /**
         * Custom Type.
         */
        customType?: string;
        /**
         * Most specific textual code of individual desk location.
         */
        deskCode?: string;
        /**
         * Floor name/number.
         */
        floorName?: string;
        /**
         * Floor section. More specific location within the floor. For example, if a
         * floor is divided into sections &quot;A&quot;, &quot;B&quot;, and
         * &quot;C&quot;, this field would identify one of those values.
         */
        floorSection?: string;
        /**
         * Each entry can have a type which indicates standard types of that entry.
         * For example location could be of types default and desk. In addition to
         * standard type, an entry can have a custom type and can give it any name.
         * Such types should have &quot;custom&quot; as type and also have a
         * customType value.
         */
        type?: string;
    }
    /**
     * JSON request template for setting/revoking admin status of a user in
     * Directory API.
     */
    interface Schema$UserMakeAdmin {
        /**
         * Boolean indicating new admin status of the user
         */
        status?: boolean;
    }
    /**
     * JSON template for name of a user in Directory API.
     */
    interface Schema$UserName {
        /**
         * Last Name
         */
        familyName?: string;
        /**
         * Full Name
         */
        fullName?: string;
        /**
         * First Name
         */
        givenName?: string;
    }
    /**
     * JSON template for an organization entry.
     */
    interface Schema$UserOrganization {
        /**
         * The cost center of the users department.
         */
        costCenter?: string;
        /**
         * Custom type.
         */
        customType?: string;
        /**
         * Department within the organization.
         */
        department?: string;
        /**
         * Description of the organization.
         */
        description?: string;
        /**
         * The domain to which the organization belongs to.
         */
        domain?: string;
        /**
         * The full-time equivalent percent within the organization (100000 = 100%).
         */
        fullTimeEquivalent?: number;
        /**
         * Location of the organization. This need not be fully qualified address.
         */
        location?: string;
        /**
         * Name of the organization
         */
        name?: string;
        /**
         * If it user&#39;s primary organization.
         */
        primary?: boolean;
        /**
         * Symbol of the organization.
         */
        symbol?: string;
        /**
         * Title (designation) of the user in the organization.
         */
        title?: string;
        /**
         * Each entry can have a type which indicates standard types of that entry.
         * For example organization could be of school, work etc. In addition to the
         * standard type, an entry can have a custom type and can give it any name.
         * Such types should have the CUSTOM value as type and also have a
         * CustomType value.
         */
        type?: string;
    }
    /**
     * JSON template for a phone entry.
     */
    interface Schema$UserPhone {
        /**
         * Custom Type.
         */
        customType?: string;
        /**
         * If this is user&#39;s primary phone or not.
         */
        primary?: boolean;
        /**
         * Each entry can have a type which indicates standard types of that entry.
         * For example phone could be of home_fax, work, mobile etc. In addition to
         * the standard type, an entry can have a custom type and can give it any
         * name. Such types should have the CUSTOM value as type and also have a
         * customType value.
         */
        type?: string;
        /**
         * Phone number.
         */
        value?: string;
    }
    /**
     * JSON template for Photo object in Directory API.
     */
    interface Schema$UserPhoto {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Height in pixels of the photo
         */
        height?: number;
        /**
         * Unique identifier of User (Read-only)
         */
        id?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Mime Type of the photo
         */
        mimeType?: string;
        /**
         * Base64 encoded photo data
         */
        photoData?: string;
        /**
         * Primary email of User (Read-only)
         */
        primaryEmail?: string;
        /**
         * Width in pixels of the photo
         */
        width?: number;
    }
    /**
     * JSON template for a POSIX account entry. Description of the field family:
     * go/fbs-posix.
     */
    interface Schema$UserPosixAccount {
        /**
         * A POSIX account field identifier. (Read-only)
         */
        accountId?: string;
        /**
         * The GECOS (user information) for this account.
         */
        gecos?: string;
        /**
         * The default group ID.
         */
        gid?: string;
        /**
         * The path to the home directory for this account.
         */
        homeDirectory?: string;
        /**
         * The operating system type for this account.
         */
        operatingSystemType?: string;
        /**
         * If this is user&#39;s primary account within the SystemId.
         */
        primary?: boolean;
        /**
         * The path to the login shell for this account.
         */
        shell?: string;
        /**
         * System identifier for which account Username or Uid apply to.
         */
        systemId?: string;
        /**
         * The POSIX compliant user ID.
         */
        uid?: string;
        /**
         * The username of the account.
         */
        username?: string;
    }
    /**
     * JSON template for a relation entry.
     */
    interface Schema$UserRelation {
        /**
         * Custom Type.
         */
        customType?: string;
        /**
         * The relation of the user. Some of the possible values are mother, father,
         * sister, brother, manager, assistant, partner.
         */
        type?: string;
        /**
         * The name of the relation.
         */
        value?: string;
    }
    /**
     * JSON response template for List Users operation in Apps Directory API.
     */
    interface Schema$Users {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * Kind of resource this is.
         */
        kind?: string;
        /**
         * Token used to access next page of this result.
         */
        nextPageToken?: string;
        /**
         * Event that triggered this response (only used in case of Push Response)
         */
        trigger_event?: string;
        /**
         * List of user objects.
         */
        users?: Schema$User[];
    }
    /**
     * JSON template for a POSIX account entry.
     */
    interface Schema$UserSshPublicKey {
        /**
         * An expiration time in microseconds since epoch.
         */
        expirationTimeUsec?: string;
        /**
         * A SHA-256 fingerprint of the SSH public key. (Read-only)
         */
        fingerprint?: string;
        /**
         * An SSH public key.
         */
        key?: string;
    }
    /**
     * JSON request template to undelete a user in Directory API.
     */
    interface Schema$UserUndelete {
        /**
         * OrgUnit of User
         */
        orgUnitPath?: string;
    }
    /**
     * JSON template for a website entry.
     */
    interface Schema$UserWebsite {
        /**
         * Custom Type.
         */
        customType?: string;
        /**
         * If this is user&#39;s primary website or not.
         */
        primary?: boolean;
        /**
         * Each entry can have a type which indicates standard types of that entry.
         * For example website could be of home, work, blog etc. In addition to the
         * standard type, an entry can have a custom type and can give it any name.
         * Such types should have the CUSTOM value as type and also have a
         * customType value.
         */
        type?: string;
        /**
         * Website.
         */
        value?: string;
    }
    /**
     * JSON template for verification codes in Directory API.
     */
    interface Schema$VerificationCode {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * The type of the resource. This is always
         * admin#directory#verificationCode.
         */
        kind?: string;
        /**
         * The obfuscated unique ID of the user.
         */
        userId?: string;
        /**
         * A current verification code for the user. Invalidated or used
         * verification codes are not returned as part of the result.
         */
        verificationCode?: string;
    }
    /**
     * JSON response template for List verification codes operation in Directory
     * API.
     */
    interface Schema$VerificationCodes {
        /**
         * ETag of the resource.
         */
        etag?: string;
        /**
         * A list of verification code resources.
         */
        items?: Schema$VerificationCode[];
        /**
         * The type of the resource. This is always
         * admin#directory#verificationCodesList.
         */
        kind?: string;
    }
    class Resource$Asps {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.asps.delete
         * @desc Delete an ASP issued by a user.
         * @alias directory.asps.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer} params.codeId The unique ID of the ASP to be deleted.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Asps$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Asps$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Asps$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.asps.get
         * @desc Get information about an ASP issued by a user.
         * @alias directory.asps.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {integer} params.codeId The unique ID of the ASP.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Asps$Get, options?: MethodOptions): AxiosPromise<Schema$Asp>;
        get(params: Params$Resource$Asps$Get, options: MethodOptions | BodyResponseCallback<Schema$Asp>, callback: BodyResponseCallback<Schema$Asp>): void;
        get(params: Params$Resource$Asps$Get, callback: BodyResponseCallback<Schema$Asp>): void;
        get(callback: BodyResponseCallback<Schema$Asp>): void;
        /**
         * directory.asps.list
         * @desc List the ASPs issued by a user.
         * @alias directory.asps.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Asps$List, options?: MethodOptions): AxiosPromise<Schema$Asps>;
        list(params: Params$Resource$Asps$List, options: MethodOptions | BodyResponseCallback<Schema$Asps>, callback: BodyResponseCallback<Schema$Asps>): void;
        list(params: Params$Resource$Asps$List, callback: BodyResponseCallback<Schema$Asps>): void;
        list(callback: BodyResponseCallback<Schema$Asps>): void;
    }
    interface Params$Resource$Asps$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID of the ASP to be deleted.
         */
        codeId?: number;
        /**
         * Identifies the user in the API request. The value can be the user's
         * primary email address, alias email address, or unique user ID.
         */
        userKey?: string;
    }
    interface Params$Resource$Asps$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID of the ASP.
         */
        codeId?: number;
        /**
         * Identifies the user in the API request. The value can be the user's
         * primary email address, alias email address, or unique user ID.
         */
        userKey?: string;
    }
    interface Params$Resource$Asps$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Identifies the user in the API request. The value can be the user's
         * primary email address, alias email address, or unique user ID.
         */
        userKey?: string;
    }
    class Resource$Channels {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * admin.channels.stop
         * @desc Stop watching resources through this channel
         * @alias admin.channels.stop
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        stop(params?: Params$Resource$Channels$Stop, options?: MethodOptions): AxiosPromise<void>;
        stop(params: Params$Resource$Channels$Stop, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        stop(params: Params$Resource$Channels$Stop, callback: BodyResponseCallback<void>): void;
        stop(callback: BodyResponseCallback<void>): void;
    }
    interface Params$Resource$Channels$Stop extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Channel;
    }
    class Resource$Chromeosdevices {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.chromeosdevices.action
         * @desc Take action on Chrome OS Device
         * @alias directory.chromeosdevices.action
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.resourceId Immutable ID of Chrome OS Device
         * @param {().ChromeOsDeviceAction} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        action(params?: Params$Resource$Chromeosdevices$Action, options?: MethodOptions): AxiosPromise<void>;
        action(params: Params$Resource$Chromeosdevices$Action, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        action(params: Params$Resource$Chromeosdevices$Action, callback: BodyResponseCallback<void>): void;
        action(callback: BodyResponseCallback<void>): void;
        /**
         * directory.chromeosdevices.get
         * @desc Retrieve Chrome OS Device
         * @alias directory.chromeosdevices.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.deviceId Immutable ID of Chrome OS Device
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Chromeosdevices$Get, options?: MethodOptions): AxiosPromise<Schema$ChromeOsDevice>;
        get(params: Params$Resource$Chromeosdevices$Get, options: MethodOptions | BodyResponseCallback<Schema$ChromeOsDevice>, callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
        get(params: Params$Resource$Chromeosdevices$Get, callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
        get(callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
        /**
         * directory.chromeosdevices.list
         * @desc Retrieve all Chrome OS Devices of a customer (paginated)
         * @alias directory.chromeosdevices.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.orgUnitPath Full path of the organizational unit or its ID
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {string=} params.query Search string in the format given at http://support.google.com/chromeos/a/bin/answer.py?answer=1698333
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Chromeosdevices$List, options?: MethodOptions): AxiosPromise<Schema$ChromeOsDevices>;
        list(params: Params$Resource$Chromeosdevices$List, options: MethodOptions | BodyResponseCallback<Schema$ChromeOsDevices>, callback: BodyResponseCallback<Schema$ChromeOsDevices>): void;
        list(params: Params$Resource$Chromeosdevices$List, callback: BodyResponseCallback<Schema$ChromeOsDevices>): void;
        list(callback: BodyResponseCallback<Schema$ChromeOsDevices>): void;
        /**
         * directory.chromeosdevices.moveDevicesToOu
         * @desc Move or insert multiple Chrome OS Devices to organizational unit
         * @alias directory.chromeosdevices.moveDevicesToOu
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the target organizational unit or its ID
         * @param {().ChromeOsMoveDevicesToOu} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        moveDevicesToOu(params?: Params$Resource$Chromeosdevices$Movedevicestoou, options?: MethodOptions): AxiosPromise<void>;
        moveDevicesToOu(params: Params$Resource$Chromeosdevices$Movedevicestoou, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        moveDevicesToOu(params: Params$Resource$Chromeosdevices$Movedevicestoou, callback: BodyResponseCallback<void>): void;
        moveDevicesToOu(callback: BodyResponseCallback<void>): void;
        /**
         * directory.chromeosdevices.patch
         * @desc Update Chrome OS Device. This method supports patch semantics.
         * @alias directory.chromeosdevices.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.deviceId Immutable ID of Chrome OS Device
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {().ChromeOsDevice} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Chromeosdevices$Patch, options?: MethodOptions): AxiosPromise<Schema$ChromeOsDevice>;
        patch(params: Params$Resource$Chromeosdevices$Patch, options: MethodOptions | BodyResponseCallback<Schema$ChromeOsDevice>, callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
        patch(params: Params$Resource$Chromeosdevices$Patch, callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
        patch(callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
        /**
         * directory.chromeosdevices.update
         * @desc Update Chrome OS Device
         * @alias directory.chromeosdevices.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.deviceId Immutable ID of Chrome OS Device
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {().ChromeOsDevice} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Chromeosdevices$Update, options?: MethodOptions): AxiosPromise<Schema$ChromeOsDevice>;
        update(params: Params$Resource$Chromeosdevices$Update, options: MethodOptions | BodyResponseCallback<Schema$ChromeOsDevice>, callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
        update(params: Params$Resource$Chromeosdevices$Update, callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
        update(callback: BodyResponseCallback<Schema$ChromeOsDevice>): void;
    }
    interface Params$Resource$Chromeosdevices$Action extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Immutable ID of Chrome OS Device
         */
        resourceId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ChromeOsDeviceAction;
    }
    interface Params$Resource$Chromeosdevices$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Immutable ID of Chrome OS Device
         */
        deviceId?: string;
        /**
         * Restrict information returned to a set of selected fields.
         */
        projection?: string;
    }
    interface Params$Resource$Chromeosdevices$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Maximum number of results to return. Default is 100
         */
        maxResults?: number;
        /**
         * Column to use for sorting results
         */
        orderBy?: string;
        /**
         * Full path of the organizational unit or its ID
         */
        orgUnitPath?: string;
        /**
         * Token to specify next page in the list
         */
        pageToken?: string;
        /**
         * Restrict information returned to a set of selected fields.
         */
        projection?: string;
        /**
         * Search string in the format given at
         * http://support.google.com/chromeos/a/bin/answer.py?answer=1698333
         */
        query?: string;
        /**
         * Whether to return results in ascending or descending order. Only of use
         * when orderBy is also used
         */
        sortOrder?: string;
    }
    interface Params$Resource$Chromeosdevices$Movedevicestoou extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Full path of the target organizational unit or its ID
         */
        orgUnitPath?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ChromeOsMoveDevicesToOu;
    }
    interface Params$Resource$Chromeosdevices$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Immutable ID of Chrome OS Device
         */
        deviceId?: string;
        /**
         * Restrict information returned to a set of selected fields.
         */
        projection?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ChromeOsDevice;
    }
    interface Params$Resource$Chromeosdevices$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Immutable ID of Chrome OS Device
         */
        deviceId?: string;
        /**
         * Restrict information returned to a set of selected fields.
         */
        projection?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ChromeOsDevice;
    }
    class Resource$Customers {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.customers.get
         * @desc Retrieves a customer.
         * @alias directory.customers.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerKey Id of the customer to be retrieved
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Customers$Get, options?: MethodOptions): AxiosPromise<Schema$Customer>;
        get(params: Params$Resource$Customers$Get, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        get(params: Params$Resource$Customers$Get, callback: BodyResponseCallback<Schema$Customer>): void;
        get(callback: BodyResponseCallback<Schema$Customer>): void;
        /**
         * directory.customers.patch
         * @desc Updates a customer. This method supports patch semantics.
         * @alias directory.customers.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerKey Id of the customer to be updated
         * @param {().Customer} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Customers$Patch, options?: MethodOptions): AxiosPromise<Schema$Customer>;
        patch(params: Params$Resource$Customers$Patch, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        patch(params: Params$Resource$Customers$Patch, callback: BodyResponseCallback<Schema$Customer>): void;
        patch(callback: BodyResponseCallback<Schema$Customer>): void;
        /**
         * directory.customers.update
         * @desc Updates a customer.
         * @alias directory.customers.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerKey Id of the customer to be updated
         * @param {().Customer} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Customers$Update, options?: MethodOptions): AxiosPromise<Schema$Customer>;
        update(params: Params$Resource$Customers$Update, options: MethodOptions | BodyResponseCallback<Schema$Customer>, callback: BodyResponseCallback<Schema$Customer>): void;
        update(params: Params$Resource$Customers$Update, callback: BodyResponseCallback<Schema$Customer>): void;
        update(callback: BodyResponseCallback<Schema$Customer>): void;
    }
    interface Params$Resource$Customers$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Id of the customer to be retrieved
         */
        customerKey?: string;
    }
    interface Params$Resource$Customers$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Id of the customer to be updated
         */
        customerKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Customer;
    }
    interface Params$Resource$Customers$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Id of the customer to be updated
         */
        customerKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Customer;
    }
    class Resource$Domainaliases {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.domainAliases.delete
         * @desc Deletes a Domain Alias of the customer.
         * @alias directory.domainAliases.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainAliasName Name of domain alias to be retrieved.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Domainaliases$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Domainaliases$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Domainaliases$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.domainAliases.get
         * @desc Retrieves a domain alias of the customer.
         * @alias directory.domainAliases.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainAliasName Name of domain alias to be retrieved.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Domainaliases$Get, options?: MethodOptions): AxiosPromise<Schema$DomainAlias>;
        get(params: Params$Resource$Domainaliases$Get, options: MethodOptions | BodyResponseCallback<Schema$DomainAlias>, callback: BodyResponseCallback<Schema$DomainAlias>): void;
        get(params: Params$Resource$Domainaliases$Get, callback: BodyResponseCallback<Schema$DomainAlias>): void;
        get(callback: BodyResponseCallback<Schema$DomainAlias>): void;
        /**
         * directory.domainAliases.insert
         * @desc Inserts a Domain alias of the customer.
         * @alias directory.domainAliases.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {().DomainAlias} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Domainaliases$Insert, options?: MethodOptions): AxiosPromise<Schema$DomainAlias>;
        insert(params: Params$Resource$Domainaliases$Insert, options: MethodOptions | BodyResponseCallback<Schema$DomainAlias>, callback: BodyResponseCallback<Schema$DomainAlias>): void;
        insert(params: Params$Resource$Domainaliases$Insert, callback: BodyResponseCallback<Schema$DomainAlias>): void;
        insert(callback: BodyResponseCallback<Schema$DomainAlias>): void;
        /**
         * directory.domainAliases.list
         * @desc Lists the domain aliases of the customer.
         * @alias directory.domainAliases.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string=} params.parentDomainName Name of the parent domain for which domain aliases are to be fetched.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Domainaliases$List, options?: MethodOptions): AxiosPromise<Schema$DomainAliases>;
        list(params: Params$Resource$Domainaliases$List, options: MethodOptions | BodyResponseCallback<Schema$DomainAliases>, callback: BodyResponseCallback<Schema$DomainAliases>): void;
        list(params: Params$Resource$Domainaliases$List, callback: BodyResponseCallback<Schema$DomainAliases>): void;
        list(callback: BodyResponseCallback<Schema$DomainAliases>): void;
    }
    interface Params$Resource$Domainaliases$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Name of domain alias to be retrieved.
         */
        domainAliasName?: string;
    }
    interface Params$Resource$Domainaliases$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Name of domain alias to be retrieved.
         */
        domainAliasName?: string;
    }
    interface Params$Resource$Domainaliases$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$DomainAlias;
    }
    interface Params$Resource$Domainaliases$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Name of the parent domain for which domain aliases are to be fetched.
         */
        parentDomainName?: string;
    }
    class Resource$Domains {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.domains.delete
         * @desc Deletes a domain of the customer.
         * @alias directory.domains.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainName Name of domain to be deleted
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Domains$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Domains$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Domains$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.domains.get
         * @desc Retrieves a domain of the customer.
         * @alias directory.domains.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.domainName Name of domain to be retrieved
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Domains$Get, options?: MethodOptions): AxiosPromise<Schema$Domains>;
        get(params: Params$Resource$Domains$Get, options: MethodOptions | BodyResponseCallback<Schema$Domains>, callback: BodyResponseCallback<Schema$Domains>): void;
        get(params: Params$Resource$Domains$Get, callback: BodyResponseCallback<Schema$Domains>): void;
        get(callback: BodyResponseCallback<Schema$Domains>): void;
        /**
         * directory.domains.insert
         * @desc Inserts a domain of the customer.
         * @alias directory.domains.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {().Domains} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Domains$Insert, options?: MethodOptions): AxiosPromise<Schema$Domains>;
        insert(params: Params$Resource$Domains$Insert, options: MethodOptions | BodyResponseCallback<Schema$Domains>, callback: BodyResponseCallback<Schema$Domains>): void;
        insert(params: Params$Resource$Domains$Insert, callback: BodyResponseCallback<Schema$Domains>): void;
        insert(callback: BodyResponseCallback<Schema$Domains>): void;
        /**
         * directory.domains.list
         * @desc Lists the domains of the customer.
         * @alias directory.domains.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Domains$List, options?: MethodOptions): AxiosPromise<Schema$Domains2>;
        list(params: Params$Resource$Domains$List, options: MethodOptions | BodyResponseCallback<Schema$Domains2>, callback: BodyResponseCallback<Schema$Domains2>): void;
        list(params: Params$Resource$Domains$List, callback: BodyResponseCallback<Schema$Domains2>): void;
        list(callback: BodyResponseCallback<Schema$Domains2>): void;
    }
    interface Params$Resource$Domains$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Name of domain to be deleted
         */
        domainName?: string;
    }
    interface Params$Resource$Domains$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Name of domain to be retrieved
         */
        domainName?: string;
    }
    interface Params$Resource$Domains$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Domains;
    }
    interface Params$Resource$Domains$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
    }
    class Resource$Groups {
        root: Admin;
        aliases: Resource$Groups$Aliases;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.groups.delete
         * @desc Delete Group
         * @alias directory.groups.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Groups$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Groups$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Groups$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.groups.get
         * @desc Retrieve Group
         * @alias directory.groups.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Groups$Get, options?: MethodOptions): AxiosPromise<Schema$Group>;
        get(params: Params$Resource$Groups$Get, options: MethodOptions | BodyResponseCallback<Schema$Group>, callback: BodyResponseCallback<Schema$Group>): void;
        get(params: Params$Resource$Groups$Get, callback: BodyResponseCallback<Schema$Group>): void;
        get(callback: BodyResponseCallback<Schema$Group>): void;
        /**
         * directory.groups.insert
         * @desc Create Group
         * @alias directory.groups.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().Group} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Groups$Insert, options?: MethodOptions): AxiosPromise<Schema$Group>;
        insert(params: Params$Resource$Groups$Insert, options: MethodOptions | BodyResponseCallback<Schema$Group>, callback: BodyResponseCallback<Schema$Group>): void;
        insert(params: Params$Resource$Groups$Insert, callback: BodyResponseCallback<Schema$Group>): void;
        insert(callback: BodyResponseCallback<Schema$Group>): void;
        /**
         * directory.groups.list
         * @desc Retrieve all groups of a domain or of a user given a userKey
         * (paginated)
         * @alias directory.groups.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all groups for a customer, fill this field instead of domain.
         * @param {string=} params.domain Name of the domain. Fill this field to get groups from only this domain. To return all groups in a multi-domain fill customer field instead.
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 200
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-groups
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
         * @param {string=} params.userKey Email or immutable Id of the user if only those groups are to be listed, the given user is a member of. If Id, it should match with id of user object
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Groups$List, options?: MethodOptions): AxiosPromise<Schema$Groups>;
        list(params: Params$Resource$Groups$List, options: MethodOptions | BodyResponseCallback<Schema$Groups>, callback: BodyResponseCallback<Schema$Groups>): void;
        list(params: Params$Resource$Groups$List, callback: BodyResponseCallback<Schema$Groups>): void;
        list(callback: BodyResponseCallback<Schema$Groups>): void;
        /**
         * directory.groups.patch
         * @desc Update Group. This method supports patch semantics.
         * @alias directory.groups.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group. If ID, it should match with id of group object
         * @param {().Group} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Groups$Patch, options?: MethodOptions): AxiosPromise<Schema$Group>;
        patch(params: Params$Resource$Groups$Patch, options: MethodOptions | BodyResponseCallback<Schema$Group>, callback: BodyResponseCallback<Schema$Group>): void;
        patch(params: Params$Resource$Groups$Patch, callback: BodyResponseCallback<Schema$Group>): void;
        patch(callback: BodyResponseCallback<Schema$Group>): void;
        /**
         * directory.groups.update
         * @desc Update Group
         * @alias directory.groups.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group. If ID, it should match with id of group object
         * @param {().Group} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Groups$Update, options?: MethodOptions): AxiosPromise<Schema$Group>;
        update(params: Params$Resource$Groups$Update, options: MethodOptions | BodyResponseCallback<Schema$Group>, callback: BodyResponseCallback<Schema$Group>): void;
        update(params: Params$Resource$Groups$Update, callback: BodyResponseCallback<Schema$Group>): void;
        update(callback: BodyResponseCallback<Schema$Group>): void;
    }
    interface Params$Resource$Groups$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
    }
    interface Params$Resource$Groups$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
    }
    interface Params$Resource$Groups$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Group;
    }
    interface Params$Resource$Groups$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account. In case of multi-domain, to fetch
         * all groups for a customer, fill this field instead of domain.
         */
        customer?: string;
        /**
         * Name of the domain. Fill this field to get groups from only this domain.
         * To return all groups in a multi-domain fill customer field instead.
         */
        domain?: string;
        /**
         * Maximum number of results to return. Default is 200
         */
        maxResults?: number;
        /**
         * Column to use for sorting results
         */
        orderBy?: string;
        /**
         * Token to specify next page in the list
         */
        pageToken?: string;
        /**
         * Query string search. Should be of the form "". Complete documentation is
         * at
         * https://developers.google.com/admin-sdk/directory/v1/guides/search-groups
         */
        query?: string;
        /**
         * Whether to return results in ascending or descending order. Only of use
         * when orderBy is also used
         */
        sortOrder?: string;
        /**
         * Email or immutable Id of the user if only those groups are to be listed,
         * the given user is a member of. If Id, it should match with id of user
         * object
         */
        userKey?: string;
    }
    interface Params$Resource$Groups$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group. If ID, it should match with id of
         * group object
         */
        groupKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Group;
    }
    interface Params$Resource$Groups$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group. If ID, it should match with id of
         * group object
         */
        groupKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Group;
    }
    class Resource$Groups$Aliases {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.groups.aliases.delete
         * @desc Remove a alias for the group
         * @alias directory.groups.aliases.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.alias The alias to be removed
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Groups$Aliases$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Groups$Aliases$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Groups$Aliases$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.groups.aliases.insert
         * @desc Add a alias for the group
         * @alias directory.groups.aliases.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {().Alias} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Groups$Aliases$Insert, options?: MethodOptions): AxiosPromise<Schema$Alias>;
        insert(params: Params$Resource$Groups$Aliases$Insert, options: MethodOptions | BodyResponseCallback<Schema$Alias>, callback: BodyResponseCallback<Schema$Alias>): void;
        insert(params: Params$Resource$Groups$Aliases$Insert, callback: BodyResponseCallback<Schema$Alias>): void;
        insert(callback: BodyResponseCallback<Schema$Alias>): void;
        /**
         * directory.groups.aliases.list
         * @desc List all aliases for a group
         * @alias directory.groups.aliases.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Groups$Aliases$List, options?: MethodOptions): AxiosPromise<Schema$Aliases>;
        list(params: Params$Resource$Groups$Aliases$List, options: MethodOptions | BodyResponseCallback<Schema$Aliases>, callback: BodyResponseCallback<Schema$Aliases>): void;
        list(params: Params$Resource$Groups$Aliases$List, callback: BodyResponseCallback<Schema$Aliases>): void;
        list(callback: BodyResponseCallback<Schema$Aliases>): void;
    }
    interface Params$Resource$Groups$Aliases$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The alias to be removed
         */
        alias?: string;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
    }
    interface Params$Resource$Groups$Aliases$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Alias;
    }
    interface Params$Resource$Groups$Aliases$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
    }
    class Resource$Members {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.members.delete
         * @desc Remove membership.
         * @alias directory.members.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {string} params.memberKey Email or immutable ID of the member
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Members$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Members$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Members$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.members.get
         * @desc Retrieve Group Member
         * @alias directory.members.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {string} params.memberKey Email or immutable ID of the member
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Members$Get, options?: MethodOptions): AxiosPromise<Schema$Member>;
        get(params: Params$Resource$Members$Get, options: MethodOptions | BodyResponseCallback<Schema$Member>, callback: BodyResponseCallback<Schema$Member>): void;
        get(params: Params$Resource$Members$Get, callback: BodyResponseCallback<Schema$Member>): void;
        get(callback: BodyResponseCallback<Schema$Member>): void;
        /**
         * directory.members.hasMember
         * @desc Checks whether the given user is a member of the group. Membership
         * can be direct or nested.
         * @alias directory.members.hasMember
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.
         * @param {string} params.memberKey Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        hasMember(params?: Params$Resource$Members$Hasmember, options?: MethodOptions): AxiosPromise<Schema$MembersHasMember>;
        hasMember(params: Params$Resource$Members$Hasmember, options: MethodOptions | BodyResponseCallback<Schema$MembersHasMember>, callback: BodyResponseCallback<Schema$MembersHasMember>): void;
        hasMember(params: Params$Resource$Members$Hasmember, callback: BodyResponseCallback<Schema$MembersHasMember>): void;
        hasMember(callback: BodyResponseCallback<Schema$MembersHasMember>): void;
        /**
         * directory.members.insert
         * @desc Add user to the specified group.
         * @alias directory.members.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {().Member} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Members$Insert, options?: MethodOptions): AxiosPromise<Schema$Member>;
        insert(params: Params$Resource$Members$Insert, options: MethodOptions | BodyResponseCallback<Schema$Member>, callback: BodyResponseCallback<Schema$Member>): void;
        insert(params: Params$Resource$Members$Insert, callback: BodyResponseCallback<Schema$Member>): void;
        insert(callback: BodyResponseCallback<Schema$Member>): void;
        /**
         * directory.members.list
         * @desc Retrieve all members in a group (paginated)
         * @alias directory.members.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group
         * @param {boolean=} params.includeDerivedMembership Whether to list indirect memberships. Default: false.
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 200
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.roles Comma separated role values to filter list results on.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Members$List, options?: MethodOptions): AxiosPromise<Schema$Members>;
        list(params: Params$Resource$Members$List, options: MethodOptions | BodyResponseCallback<Schema$Members>, callback: BodyResponseCallback<Schema$Members>): void;
        list(params: Params$Resource$Members$List, callback: BodyResponseCallback<Schema$Members>): void;
        list(callback: BodyResponseCallback<Schema$Members>): void;
        /**
         * directory.members.patch
         * @desc Update membership of a user in the specified group. This method
         * supports patch semantics.
         * @alias directory.members.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group. If ID, it should match with id of group object
         * @param {string} params.memberKey Email or immutable ID of the user. If ID, it should match with id of member object
         * @param {().Member} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Members$Patch, options?: MethodOptions): AxiosPromise<Schema$Member>;
        patch(params: Params$Resource$Members$Patch, options: MethodOptions | BodyResponseCallback<Schema$Member>, callback: BodyResponseCallback<Schema$Member>): void;
        patch(params: Params$Resource$Members$Patch, callback: BodyResponseCallback<Schema$Member>): void;
        patch(callback: BodyResponseCallback<Schema$Member>): void;
        /**
         * directory.members.update
         * @desc Update membership of a user in the specified group.
         * @alias directory.members.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.groupKey Email or immutable ID of the group. If ID, it should match with id of group object
         * @param {string} params.memberKey Email or immutable ID of the user. If ID, it should match with id of member object
         * @param {().Member} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Members$Update, options?: MethodOptions): AxiosPromise<Schema$Member>;
        update(params: Params$Resource$Members$Update, options: MethodOptions | BodyResponseCallback<Schema$Member>, callback: BodyResponseCallback<Schema$Member>): void;
        update(params: Params$Resource$Members$Update, callback: BodyResponseCallback<Schema$Member>): void;
        update(callback: BodyResponseCallback<Schema$Member>): void;
    }
    interface Params$Resource$Members$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
        /**
         * Email or immutable ID of the member
         */
        memberKey?: string;
    }
    interface Params$Resource$Members$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
        /**
         * Email or immutable ID of the member
         */
        memberKey?: string;
    }
    interface Params$Resource$Members$Hasmember extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Identifies the group in the API request. The value can be the group's
         * email address, group alias, or the unique group ID.
         */
        groupKey?: string;
        /**
         * Identifies the user member in the API request. The value can be the
         * user's primary email address, alias, or unique ID.
         */
        memberKey?: string;
    }
    interface Params$Resource$Members$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Member;
    }
    interface Params$Resource$Members$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group
         */
        groupKey?: string;
        /**
         * Whether to list indirect memberships. Default: false.
         */
        includeDerivedMembership?: boolean;
        /**
         * Maximum number of results to return. Default is 200
         */
        maxResults?: number;
        /**
         * Token to specify next page in the list
         */
        pageToken?: string;
        /**
         * Comma separated role values to filter list results on.
         */
        roles?: string;
    }
    interface Params$Resource$Members$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group. If ID, it should match with id of
         * group object
         */
        groupKey?: string;
        /**
         * Email or immutable ID of the user. If ID, it should match with id of
         * member object
         */
        memberKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Member;
    }
    interface Params$Resource$Members$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the group. If ID, it should match with id of
         * group object
         */
        groupKey?: string;
        /**
         * Email or immutable ID of the user. If ID, it should match with id of
         * member object
         */
        memberKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Member;
    }
    class Resource$Mobiledevices {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.mobiledevices.action
         * @desc Take action on Mobile Device
         * @alias directory.mobiledevices.action
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.resourceId Immutable ID of Mobile Device
         * @param {().MobileDeviceAction} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        action(params?: Params$Resource$Mobiledevices$Action, options?: MethodOptions): AxiosPromise<void>;
        action(params: Params$Resource$Mobiledevices$Action, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        action(params: Params$Resource$Mobiledevices$Action, callback: BodyResponseCallback<void>): void;
        action(callback: BodyResponseCallback<void>): void;
        /**
         * directory.mobiledevices.delete
         * @desc Delete Mobile Device
         * @alias directory.mobiledevices.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.resourceId Immutable ID of Mobile Device
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Mobiledevices$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Mobiledevices$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Mobiledevices$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.mobiledevices.get
         * @desc Retrieve Mobile Device
         * @alias directory.mobiledevices.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {string} params.resourceId Immutable ID of Mobile Device
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Mobiledevices$Get, options?: MethodOptions): AxiosPromise<Schema$MobileDevice>;
        get(params: Params$Resource$Mobiledevices$Get, options: MethodOptions | BodyResponseCallback<Schema$MobileDevice>, callback: BodyResponseCallback<Schema$MobileDevice>): void;
        get(params: Params$Resource$Mobiledevices$Get, callback: BodyResponseCallback<Schema$MobileDevice>): void;
        get(callback: BodyResponseCallback<Schema$MobileDevice>): void;
        /**
         * directory.mobiledevices.list
         * @desc Retrieve all Mobile Devices of a customer (paginated)
         * @alias directory.mobiledevices.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.projection Restrict information returned to a set of selected fields.
         * @param {string=} params.query Search string in the format given at http://support.google.com/a/bin/answer.py?answer=1408863#search
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order. Only of use when orderBy is also used
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Mobiledevices$List, options?: MethodOptions): AxiosPromise<Schema$MobileDevices>;
        list(params: Params$Resource$Mobiledevices$List, options: MethodOptions | BodyResponseCallback<Schema$MobileDevices>, callback: BodyResponseCallback<Schema$MobileDevices>): void;
        list(params: Params$Resource$Mobiledevices$List, callback: BodyResponseCallback<Schema$MobileDevices>): void;
        list(callback: BodyResponseCallback<Schema$MobileDevices>): void;
    }
    interface Params$Resource$Mobiledevices$Action extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Immutable ID of Mobile Device
         */
        resourceId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$MobileDeviceAction;
    }
    interface Params$Resource$Mobiledevices$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Immutable ID of Mobile Device
         */
        resourceId?: string;
    }
    interface Params$Resource$Mobiledevices$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Restrict information returned to a set of selected fields.
         */
        projection?: string;
        /**
         * Immutable ID of Mobile Device
         */
        resourceId?: string;
    }
    interface Params$Resource$Mobiledevices$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Maximum number of results to return. Default is 100
         */
        maxResults?: number;
        /**
         * Column to use for sorting results
         */
        orderBy?: string;
        /**
         * Token to specify next page in the list
         */
        pageToken?: string;
        /**
         * Restrict information returned to a set of selected fields.
         */
        projection?: string;
        /**
         * Search string in the format given at
         * http://support.google.com/a/bin/answer.py?answer=1408863#search
         */
        query?: string;
        /**
         * Whether to return results in ascending or descending order. Only of use
         * when orderBy is also used
         */
        sortOrder?: string;
    }
    class Resource$Notifications {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.notifications.delete
         * @desc Deletes a notification
         * @alias directory.notifications.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
         * @param {string} params.notificationId The unique ID of the notification.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Notifications$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Notifications$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Notifications$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.notifications.get
         * @desc Retrieves a notification.
         * @alias directory.notifications.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. The customerId is also returned as part of the Users resource.
         * @param {string} params.notificationId The unique ID of the notification.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Notifications$Get, options?: MethodOptions): AxiosPromise<Schema$Notification>;
        get(params: Params$Resource$Notifications$Get, options: MethodOptions | BodyResponseCallback<Schema$Notification>, callback: BodyResponseCallback<Schema$Notification>): void;
        get(params: Params$Resource$Notifications$Get, callback: BodyResponseCallback<Schema$Notification>): void;
        get(callback: BodyResponseCallback<Schema$Notification>): void;
        /**
         * directory.notifications.list
         * @desc Retrieves a list of notifications.
         * @alias directory.notifications.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account.
         * @param {string=} params.language The ISO 639-1 code of the language notifications are returned in. The default is English (en).
         * @param {integer=} params.maxResults Maximum number of notifications to return per page. The default is 100.
         * @param {string=} params.pageToken The token to specify the page of results to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Notifications$List, options?: MethodOptions): AxiosPromise<Schema$Notifications>;
        list(params: Params$Resource$Notifications$List, options: MethodOptions | BodyResponseCallback<Schema$Notifications>, callback: BodyResponseCallback<Schema$Notifications>): void;
        list(params: Params$Resource$Notifications$List, callback: BodyResponseCallback<Schema$Notifications>): void;
        list(callback: BodyResponseCallback<Schema$Notifications>): void;
        /**
         * directory.notifications.patch
         * @desc Updates a notification. This method supports patch semantics.
         * @alias directory.notifications.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account.
         * @param {string} params.notificationId The unique ID of the notification.
         * @param {().Notification} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Notifications$Patch, options?: MethodOptions): AxiosPromise<Schema$Notification>;
        patch(params: Params$Resource$Notifications$Patch, options: MethodOptions | BodyResponseCallback<Schema$Notification>, callback: BodyResponseCallback<Schema$Notification>): void;
        patch(params: Params$Resource$Notifications$Patch, callback: BodyResponseCallback<Schema$Notification>): void;
        patch(callback: BodyResponseCallback<Schema$Notification>): void;
        /**
         * directory.notifications.update
         * @desc Updates a notification.
         * @alias directory.notifications.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account.
         * @param {string} params.notificationId The unique ID of the notification.
         * @param {().Notification} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Notifications$Update, options?: MethodOptions): AxiosPromise<Schema$Notification>;
        update(params: Params$Resource$Notifications$Update, options: MethodOptions | BodyResponseCallback<Schema$Notification>, callback: BodyResponseCallback<Schema$Notification>): void;
        update(params: Params$Resource$Notifications$Update, callback: BodyResponseCallback<Schema$Notification>): void;
        update(callback: BodyResponseCallback<Schema$Notification>): void;
    }
    interface Params$Resource$Notifications$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. The customerId is also
         * returned as part of the Users resource.
         */
        customer?: string;
        /**
         * The unique ID of the notification.
         */
        notificationId?: string;
    }
    interface Params$Resource$Notifications$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. The customerId is also
         * returned as part of the Users resource.
         */
        customer?: string;
        /**
         * The unique ID of the notification.
         */
        notificationId?: string;
    }
    interface Params$Resource$Notifications$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account.
         */
        customer?: string;
        /**
         * The ISO 639-1 code of the language notifications are returned in. The
         * default is English (en).
         */
        language?: string;
        /**
         * Maximum number of notifications to return per page. The default is 100.
         */
        maxResults?: number;
        /**
         * The token to specify the page of results to retrieve.
         */
        pageToken?: string;
    }
    interface Params$Resource$Notifications$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account.
         */
        customer?: string;
        /**
         * The unique ID of the notification.
         */
        notificationId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Notification;
    }
    interface Params$Resource$Notifications$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account.
         */
        customer?: string;
        /**
         * The unique ID of the notification.
         */
        notificationId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Notification;
    }
    class Resource$Orgunits {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.orgunits.delete
         * @desc Remove organizational unit
         * @alias directory.orgunits.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Orgunits$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Orgunits$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Orgunits$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.orgunits.get
         * @desc Retrieve organizational unit
         * @alias directory.orgunits.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Orgunits$Get, options?: MethodOptions): AxiosPromise<Schema$OrgUnit>;
        get(params: Params$Resource$Orgunits$Get, options: MethodOptions | BodyResponseCallback<Schema$OrgUnit>, callback: BodyResponseCallback<Schema$OrgUnit>): void;
        get(params: Params$Resource$Orgunits$Get, callback: BodyResponseCallback<Schema$OrgUnit>): void;
        get(callback: BodyResponseCallback<Schema$OrgUnit>): void;
        /**
         * directory.orgunits.insert
         * @desc Add organizational unit
         * @alias directory.orgunits.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {().OrgUnit} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Orgunits$Insert, options?: MethodOptions): AxiosPromise<Schema$OrgUnit>;
        insert(params: Params$Resource$Orgunits$Insert, options: MethodOptions | BodyResponseCallback<Schema$OrgUnit>, callback: BodyResponseCallback<Schema$OrgUnit>): void;
        insert(params: Params$Resource$Orgunits$Insert, callback: BodyResponseCallback<Schema$OrgUnit>): void;
        insert(callback: BodyResponseCallback<Schema$OrgUnit>): void;
        /**
         * directory.orgunits.list
         * @desc Retrieve all organizational units
         * @alias directory.orgunits.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string=} params.orgUnitPath the URL-encoded organizational unit's path or its ID
         * @param {string=} params.type Whether to return all sub-organizations or just immediate children
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Orgunits$List, options?: MethodOptions): AxiosPromise<Schema$OrgUnits>;
        list(params: Params$Resource$Orgunits$List, options: MethodOptions | BodyResponseCallback<Schema$OrgUnits>, callback: BodyResponseCallback<Schema$OrgUnits>): void;
        list(params: Params$Resource$Orgunits$List, callback: BodyResponseCallback<Schema$OrgUnits>): void;
        list(callback: BodyResponseCallback<Schema$OrgUnits>): void;
        /**
         * directory.orgunits.patch
         * @desc Update organizational unit. This method supports patch semantics.
         * @alias directory.orgunits.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
         * @param {().OrgUnit} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Orgunits$Patch, options?: MethodOptions): AxiosPromise<Schema$OrgUnit>;
        patch(params: Params$Resource$Orgunits$Patch, options: MethodOptions | BodyResponseCallback<Schema$OrgUnit>, callback: BodyResponseCallback<Schema$OrgUnit>): void;
        patch(params: Params$Resource$Orgunits$Patch, callback: BodyResponseCallback<Schema$OrgUnit>): void;
        patch(callback: BodyResponseCallback<Schema$OrgUnit>): void;
        /**
         * directory.orgunits.update
         * @desc Update organizational unit
         * @alias directory.orgunits.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.orgUnitPath Full path of the organizational unit or its ID
         * @param {().OrgUnit} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Orgunits$Update, options?: MethodOptions): AxiosPromise<Schema$OrgUnit>;
        update(params: Params$Resource$Orgunits$Update, options: MethodOptions | BodyResponseCallback<Schema$OrgUnit>, callback: BodyResponseCallback<Schema$OrgUnit>): void;
        update(params: Params$Resource$Orgunits$Update, callback: BodyResponseCallback<Schema$OrgUnit>): void;
        update(callback: BodyResponseCallback<Schema$OrgUnit>): void;
    }
    interface Params$Resource$Orgunits$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Full path of the organizational unit or its ID
         */
        orgUnitPath?: string;
    }
    interface Params$Resource$Orgunits$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Full path of the organizational unit or its ID
         */
        orgUnitPath?: string;
    }
    interface Params$Resource$Orgunits$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrgUnit;
    }
    interface Params$Resource$Orgunits$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * the URL-encoded organizational unit's path or its ID
         */
        orgUnitPath?: string;
        /**
         * Whether to return all sub-organizations or just immediate children
         */
        type?: string;
    }
    interface Params$Resource$Orgunits$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Full path of the organizational unit or its ID
         */
        orgUnitPath?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrgUnit;
    }
    interface Params$Resource$Orgunits$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Full path of the organizational unit or its ID
         */
        orgUnitPath?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$OrgUnit;
    }
    class Resource$Privileges {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.privileges.list
         * @desc Retrieves a paginated list of all privileges for a customer.
         * @alias directory.privileges.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Privileges$List, options?: MethodOptions): AxiosPromise<Schema$Privileges>;
        list(params: Params$Resource$Privileges$List, options: MethodOptions | BodyResponseCallback<Schema$Privileges>, callback: BodyResponseCallback<Schema$Privileges>): void;
        list(params: Params$Resource$Privileges$List, callback: BodyResponseCallback<Schema$Privileges>): void;
        list(callback: BodyResponseCallback<Schema$Privileges>): void;
    }
    interface Params$Resource$Privileges$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
    }
    class Resource$Resolvedappaccesssettings {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.resolvedAppAccessSettings.GetSettings
         * @desc Retrieves resolved app access settings of the logged in user.
         * @alias directory.resolvedAppAccessSettings.GetSettings
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        GetSettings(params?: Params$Resource$Resolvedappaccesssettings$Getsettings, options?: MethodOptions): AxiosPromise<Schema$AppAccessCollections>;
        GetSettings(params: Params$Resource$Resolvedappaccesssettings$Getsettings, options: MethodOptions | BodyResponseCallback<Schema$AppAccessCollections>, callback: BodyResponseCallback<Schema$AppAccessCollections>): void;
        GetSettings(params: Params$Resource$Resolvedappaccesssettings$Getsettings, callback: BodyResponseCallback<Schema$AppAccessCollections>): void;
        GetSettings(callback: BodyResponseCallback<Schema$AppAccessCollections>): void;
        /**
         * directory.resolvedAppAccessSettings.ListTrustedApps
         * @desc Retrieves the list of apps trusted by the admin of the logged in
         * user.
         * @alias directory.resolvedAppAccessSettings.ListTrustedApps
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        ListTrustedApps(params?: Params$Resource$Resolvedappaccesssettings$Listtrustedapps, options?: MethodOptions): AxiosPromise<Schema$TrustedApps>;
        ListTrustedApps(params: Params$Resource$Resolvedappaccesssettings$Listtrustedapps, options: MethodOptions | BodyResponseCallback<Schema$TrustedApps>, callback: BodyResponseCallback<Schema$TrustedApps>): void;
        ListTrustedApps(params: Params$Resource$Resolvedappaccesssettings$Listtrustedapps, callback: BodyResponseCallback<Schema$TrustedApps>): void;
        ListTrustedApps(callback: BodyResponseCallback<Schema$TrustedApps>): void;
    }
    interface Params$Resource$Resolvedappaccesssettings$Getsettings extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    interface Params$Resource$Resolvedappaccesssettings$Listtrustedapps extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
    }
    class Resource$Resources {
        root: Admin;
        buildings: Resource$Resources$Buildings;
        calendars: Resource$Resources$Calendars;
        features: Resource$Resources$Features;
        constructor(root: Admin);
        getRoot(): Admin;
    }
    class Resource$Resources$Buildings {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.resources.buildings.delete
         * @desc Deletes a building.
         * @alias directory.resources.buildings.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.buildingId The ID of the building to delete.
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Resources$Buildings$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Resources$Buildings$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Resources$Buildings$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.resources.buildings.get
         * @desc Retrieves a building.
         * @alias directory.resources.buildings.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.buildingId The unique ID of the building to retrieve.
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Resources$Buildings$Get, options?: MethodOptions): AxiosPromise<Schema$Building>;
        get(params: Params$Resource$Resources$Buildings$Get, options: MethodOptions | BodyResponseCallback<Schema$Building>, callback: BodyResponseCallback<Schema$Building>): void;
        get(params: Params$Resource$Resources$Buildings$Get, callback: BodyResponseCallback<Schema$Building>): void;
        get(callback: BodyResponseCallback<Schema$Building>): void;
        /**
         * directory.resources.buildings.insert
         * @desc Inserts a building.
         * @alias directory.resources.buildings.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {().Building} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Resources$Buildings$Insert, options?: MethodOptions): AxiosPromise<Schema$Building>;
        insert(params: Params$Resource$Resources$Buildings$Insert, options: MethodOptions | BodyResponseCallback<Schema$Building>, callback: BodyResponseCallback<Schema$Building>): void;
        insert(params: Params$Resource$Resources$Buildings$Insert, callback: BodyResponseCallback<Schema$Building>): void;
        insert(callback: BodyResponseCallback<Schema$Building>): void;
        /**
         * directory.resources.buildings.list
         * @desc Retrieves a list of buildings for an account.
         * @alias directory.resources.buildings.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Token to specify the next page in the list.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Resources$Buildings$List, options?: MethodOptions): AxiosPromise<Schema$Buildings>;
        list(params: Params$Resource$Resources$Buildings$List, options: MethodOptions | BodyResponseCallback<Schema$Buildings>, callback: BodyResponseCallback<Schema$Buildings>): void;
        list(params: Params$Resource$Resources$Buildings$List, callback: BodyResponseCallback<Schema$Buildings>): void;
        list(callback: BodyResponseCallback<Schema$Buildings>): void;
        /**
         * directory.resources.buildings.patch
         * @desc Updates a building. This method supports patch semantics.
         * @alias directory.resources.buildings.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.buildingId The ID of the building to update.
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {().Building} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Resources$Buildings$Patch, options?: MethodOptions): AxiosPromise<Schema$Building>;
        patch(params: Params$Resource$Resources$Buildings$Patch, options: MethodOptions | BodyResponseCallback<Schema$Building>, callback: BodyResponseCallback<Schema$Building>): void;
        patch(params: Params$Resource$Resources$Buildings$Patch, callback: BodyResponseCallback<Schema$Building>): void;
        patch(callback: BodyResponseCallback<Schema$Building>): void;
        /**
         * directory.resources.buildings.update
         * @desc Updates a building.
         * @alias directory.resources.buildings.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.buildingId The ID of the building to update.
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {().Building} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Resources$Buildings$Update, options?: MethodOptions): AxiosPromise<Schema$Building>;
        update(params: Params$Resource$Resources$Buildings$Update, options: MethodOptions | BodyResponseCallback<Schema$Building>, callback: BodyResponseCallback<Schema$Building>): void;
        update(params: Params$Resource$Resources$Buildings$Update, callback: BodyResponseCallback<Schema$Building>): void;
        update(callback: BodyResponseCallback<Schema$Building>): void;
    }
    interface Params$Resource$Resources$Buildings$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the building to delete.
         */
        buildingId?: string;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
    }
    interface Params$Resource$Resources$Buildings$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID of the building to retrieve.
         */
        buildingId?: string;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
    }
    interface Params$Resource$Resources$Buildings$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Building;
    }
    interface Params$Resource$Resources$Buildings$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Token to specify the next page in the list.
         */
        pageToken?: string;
    }
    interface Params$Resource$Resources$Buildings$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the building to update.
         */
        buildingId?: string;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Building;
    }
    interface Params$Resource$Resources$Buildings$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The ID of the building to update.
         */
        buildingId?: string;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Building;
    }
    class Resource$Resources$Calendars {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.resources.calendars.delete
         * @desc Deletes a calendar resource.
         * @alias directory.resources.calendars.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.calendarResourceId The unique ID of the calendar resource to delete.
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Resources$Calendars$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Resources$Calendars$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Resources$Calendars$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.resources.calendars.get
         * @desc Retrieves a calendar resource.
         * @alias directory.resources.calendars.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.calendarResourceId The unique ID of the calendar resource to retrieve.
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Resources$Calendars$Get, options?: MethodOptions): AxiosPromise<Schema$CalendarResource>;
        get(params: Params$Resource$Resources$Calendars$Get, options: MethodOptions | BodyResponseCallback<Schema$CalendarResource>, callback: BodyResponseCallback<Schema$CalendarResource>): void;
        get(params: Params$Resource$Resources$Calendars$Get, callback: BodyResponseCallback<Schema$CalendarResource>): void;
        get(callback: BodyResponseCallback<Schema$CalendarResource>): void;
        /**
         * directory.resources.calendars.insert
         * @desc Inserts a calendar resource.
         * @alias directory.resources.calendars.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {().CalendarResource} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Resources$Calendars$Insert, options?: MethodOptions): AxiosPromise<Schema$CalendarResource>;
        insert(params: Params$Resource$Resources$Calendars$Insert, options: MethodOptions | BodyResponseCallback<Schema$CalendarResource>, callback: BodyResponseCallback<Schema$CalendarResource>): void;
        insert(params: Params$Resource$Resources$Calendars$Insert, callback: BodyResponseCallback<Schema$CalendarResource>): void;
        insert(callback: BodyResponseCallback<Schema$CalendarResource>): void;
        /**
         * directory.resources.calendars.list
         * @desc Retrieves a list of calendar resources for an account.
         * @alias directory.resources.calendars.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.orderBy Field(s) to sort results by in either ascending or descending order. Supported fields include resourceId, resourceName, capacity, buildingId, and floorName. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example buildingId, capacity desc would return results sorted first by buildingId in ascending order then by capacity in descending order.
         * @param {string=} params.pageToken Token to specify the next page in the list.
         * @param {string=} params.query String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Supported fields include generatedResourceName, name, buildingId, featureInstances.feature.name. For example buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Resources$Calendars$List, options?: MethodOptions): AxiosPromise<Schema$CalendarResources>;
        list(params: Params$Resource$Resources$Calendars$List, options: MethodOptions | BodyResponseCallback<Schema$CalendarResources>, callback: BodyResponseCallback<Schema$CalendarResources>): void;
        list(params: Params$Resource$Resources$Calendars$List, callback: BodyResponseCallback<Schema$CalendarResources>): void;
        list(callback: BodyResponseCallback<Schema$CalendarResources>): void;
        /**
         * directory.resources.calendars.patch
         * @desc Updates a calendar resource.  This method supports patch semantics,
         * meaning you only need to include the fields you wish to update. Fields
         * that are not present in the request will be preserved. This method
         * supports patch semantics.
         * @alias directory.resources.calendars.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.calendarResourceId The unique ID of the calendar resource to update.
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {().CalendarResource} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Resources$Calendars$Patch, options?: MethodOptions): AxiosPromise<Schema$CalendarResource>;
        patch(params: Params$Resource$Resources$Calendars$Patch, options: MethodOptions | BodyResponseCallback<Schema$CalendarResource>, callback: BodyResponseCallback<Schema$CalendarResource>): void;
        patch(params: Params$Resource$Resources$Calendars$Patch, callback: BodyResponseCallback<Schema$CalendarResource>): void;
        patch(callback: BodyResponseCallback<Schema$CalendarResource>): void;
        /**
         * directory.resources.calendars.update
         * @desc Updates a calendar resource.  This method supports patch semantics,
         * meaning you only need to include the fields you wish to update. Fields
         * that are not present in the request will be preserved.
         * @alias directory.resources.calendars.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.calendarResourceId The unique ID of the calendar resource to update.
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {().CalendarResource} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Resources$Calendars$Update, options?: MethodOptions): AxiosPromise<Schema$CalendarResource>;
        update(params: Params$Resource$Resources$Calendars$Update, options: MethodOptions | BodyResponseCallback<Schema$CalendarResource>, callback: BodyResponseCallback<Schema$CalendarResource>): void;
        update(params: Params$Resource$Resources$Calendars$Update, callback: BodyResponseCallback<Schema$CalendarResource>): void;
        update(callback: BodyResponseCallback<Schema$CalendarResource>): void;
    }
    interface Params$Resource$Resources$Calendars$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID of the calendar resource to delete.
         */
        calendarResourceId?: string;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
    }
    interface Params$Resource$Resources$Calendars$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID of the calendar resource to retrieve.
         */
        calendarResourceId?: string;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
    }
    interface Params$Resource$Resources$Calendars$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CalendarResource;
    }
    interface Params$Resource$Resources$Calendars$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Field(s) to sort results by in either ascending or descending order.
         * Supported fields include resourceId, resourceName, capacity, buildingId,
         * and floorName. If no order is specified, defaults to ascending. Should be
         * of the form "field [asc|desc], field [asc|desc], ...". For example
         * buildingId, capacity desc would return results sorted first by buildingId
         * in ascending order then by capacity in descending order.
         */
        orderBy?: string;
        /**
         * Token to specify the next page in the list.
         */
        pageToken?: string;
        /**
         * String query used to filter results. Should be of the form "field
         * operator value" where field can be any of supported fields and operators
         * can be any of supported operations. Operators include '=' for exact match
         * and ':' for prefix match or HAS match where applicable. For prefix match,
         * the value should always be followed by a *. Supported fields include
         * generatedResourceName, name, buildingId, featureInstances.feature.name.
         * For example buildingId=US-NYC-9TH AND
         * featureInstances.feature.name:Phone.
         */
        query?: string;
    }
    interface Params$Resource$Resources$Calendars$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID of the calendar resource to update.
         */
        calendarResourceId?: string;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CalendarResource;
    }
    interface Params$Resource$Resources$Calendars$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID of the calendar resource to update.
         */
        calendarResourceId?: string;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CalendarResource;
    }
    class Resource$Resources$Features {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.resources.features.delete
         * @desc Deletes a feature.
         * @alias directory.resources.features.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {string} params.featureKey The unique ID of the feature to delete.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Resources$Features$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Resources$Features$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Resources$Features$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.resources.features.get
         * @desc Retrieves a feature.
         * @alias directory.resources.features.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {string} params.featureKey The unique ID of the feature to retrieve.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Resources$Features$Get, options?: MethodOptions): AxiosPromise<Schema$Feature>;
        get(params: Params$Resource$Resources$Features$Get, options: MethodOptions | BodyResponseCallback<Schema$Feature>, callback: BodyResponseCallback<Schema$Feature>): void;
        get(params: Params$Resource$Resources$Features$Get, callback: BodyResponseCallback<Schema$Feature>): void;
        get(callback: BodyResponseCallback<Schema$Feature>): void;
        /**
         * directory.resources.features.insert
         * @desc Inserts a feature.
         * @alias directory.resources.features.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {().Feature} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Resources$Features$Insert, options?: MethodOptions): AxiosPromise<Schema$Feature>;
        insert(params: Params$Resource$Resources$Features$Insert, options: MethodOptions | BodyResponseCallback<Schema$Feature>, callback: BodyResponseCallback<Schema$Feature>): void;
        insert(params: Params$Resource$Resources$Features$Insert, callback: BodyResponseCallback<Schema$Feature>): void;
        insert(callback: BodyResponseCallback<Schema$Feature>): void;
        /**
         * directory.resources.features.list
         * @desc Retrieves a list of features for an account.
         * @alias directory.resources.features.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Token to specify the next page in the list.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Resources$Features$List, options?: MethodOptions): AxiosPromise<Schema$Features>;
        list(params: Params$Resource$Resources$Features$List, options: MethodOptions | BodyResponseCallback<Schema$Features>, callback: BodyResponseCallback<Schema$Features>): void;
        list(params: Params$Resource$Resources$Features$List, callback: BodyResponseCallback<Schema$Features>): void;
        list(callback: BodyResponseCallback<Schema$Features>): void;
        /**
         * directory.resources.features.patch
         * @desc Updates a feature. This method supports patch semantics.
         * @alias directory.resources.features.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {string} params.featureKey The unique ID of the feature to update.
         * @param {().Feature} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Resources$Features$Patch, options?: MethodOptions): AxiosPromise<Schema$Feature>;
        patch(params: Params$Resource$Resources$Features$Patch, options: MethodOptions | BodyResponseCallback<Schema$Feature>, callback: BodyResponseCallback<Schema$Feature>): void;
        patch(params: Params$Resource$Resources$Features$Patch, callback: BodyResponseCallback<Schema$Feature>): void;
        patch(callback: BodyResponseCallback<Schema$Feature>): void;
        /**
         * directory.resources.features.rename
         * @desc Renames a feature.
         * @alias directory.resources.features.rename
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {string} params.oldName The unique ID of the feature to rename.
         * @param {().FeatureRename} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        rename(params?: Params$Resource$Resources$Features$Rename, options?: MethodOptions): AxiosPromise<void>;
        rename(params: Params$Resource$Resources$Features$Rename, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        rename(params: Params$Resource$Resources$Features$Rename, callback: BodyResponseCallback<void>): void;
        rename(callback: BodyResponseCallback<void>): void;
        /**
         * directory.resources.features.update
         * @desc Updates a feature.
         * @alias directory.resources.features.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer The unique ID for the customer's G Suite account. As an account administrator, you can also use the my_customer alias to represent your account's customer ID.
         * @param {string} params.featureKey The unique ID of the feature to update.
         * @param {().Feature} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Resources$Features$Update, options?: MethodOptions): AxiosPromise<Schema$Feature>;
        update(params: Params$Resource$Resources$Features$Update, options: MethodOptions | BodyResponseCallback<Schema$Feature>, callback: BodyResponseCallback<Schema$Feature>): void;
        update(params: Params$Resource$Resources$Features$Update, callback: BodyResponseCallback<Schema$Feature>): void;
        update(callback: BodyResponseCallback<Schema$Feature>): void;
    }
    interface Params$Resource$Resources$Features$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * The unique ID of the feature to delete.
         */
        featureKey?: string;
    }
    interface Params$Resource$Resources$Features$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * The unique ID of the feature to retrieve.
         */
        featureKey?: string;
    }
    interface Params$Resource$Resources$Features$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Feature;
    }
    interface Params$Resource$Resources$Features$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Token to specify the next page in the list.
         */
        pageToken?: string;
    }
    interface Params$Resource$Resources$Features$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * The unique ID of the feature to update.
         */
        featureKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Feature;
    }
    interface Params$Resource$Resources$Features$Rename extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * The unique ID of the feature to rename.
         */
        oldName?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$FeatureRename;
    }
    interface Params$Resource$Resources$Features$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The unique ID for the customer's G Suite account. As an account
         * administrator, you can also use the my_customer alias to represent your
         * account's customer ID.
         */
        customer?: string;
        /**
         * The unique ID of the feature to update.
         */
        featureKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Feature;
    }
    class Resource$Roleassignments {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.roleAssignments.delete
         * @desc Deletes a role assignment.
         * @alias directory.roleAssignments.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Roleassignments$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Roleassignments$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Roleassignments$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.roleAssignments.get
         * @desc Retrieve a role assignment.
         * @alias directory.roleAssignments.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleAssignmentId Immutable ID of the role assignment.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Roleassignments$Get, options?: MethodOptions): AxiosPromise<Schema$RoleAssignment>;
        get(params: Params$Resource$Roleassignments$Get, options: MethodOptions | BodyResponseCallback<Schema$RoleAssignment>, callback: BodyResponseCallback<Schema$RoleAssignment>): void;
        get(params: Params$Resource$Roleassignments$Get, callback: BodyResponseCallback<Schema$RoleAssignment>): void;
        get(callback: BodyResponseCallback<Schema$RoleAssignment>): void;
        /**
         * directory.roleAssignments.insert
         * @desc Creates a role assignment.
         * @alias directory.roleAssignments.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {().RoleAssignment} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Roleassignments$Insert, options?: MethodOptions): AxiosPromise<Schema$RoleAssignment>;
        insert(params: Params$Resource$Roleassignments$Insert, options: MethodOptions | BodyResponseCallback<Schema$RoleAssignment>, callback: BodyResponseCallback<Schema$RoleAssignment>): void;
        insert(params: Params$Resource$Roleassignments$Insert, callback: BodyResponseCallback<Schema$RoleAssignment>): void;
        insert(callback: BodyResponseCallback<Schema$RoleAssignment>): void;
        /**
         * directory.roleAssignments.list
         * @desc Retrieves a paginated list of all roleAssignments.
         * @alias directory.roleAssignments.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Token to specify the next page in the list.
         * @param {string=} params.roleId Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.
         * @param {string=} params.userKey The user's primary email address, alias email address, or unique user ID. If included in the request, returns role assignments only for this user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Roleassignments$List, options?: MethodOptions): AxiosPromise<Schema$RoleAssignments>;
        list(params: Params$Resource$Roleassignments$List, options: MethodOptions | BodyResponseCallback<Schema$RoleAssignments>, callback: BodyResponseCallback<Schema$RoleAssignments>): void;
        list(params: Params$Resource$Roleassignments$List, callback: BodyResponseCallback<Schema$RoleAssignments>): void;
        list(callback: BodyResponseCallback<Schema$RoleAssignments>): void;
    }
    interface Params$Resource$Roleassignments$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Immutable ID of the role assignment.
         */
        roleAssignmentId?: string;
    }
    interface Params$Resource$Roleassignments$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Immutable ID of the role assignment.
         */
        roleAssignmentId?: string;
    }
    interface Params$Resource$Roleassignments$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RoleAssignment;
    }
    interface Params$Resource$Roleassignments$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Token to specify the next page in the list.
         */
        pageToken?: string;
        /**
         * Immutable ID of a role. If included in the request, returns only role
         * assignments containing this role ID.
         */
        roleId?: string;
        /**
         * The user's primary email address, alias email address, or unique user ID.
         * If included in the request, returns role assignments only for this user.
         */
        userKey?: string;
    }
    class Resource$Roles {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.roles.delete
         * @desc Deletes a role.
         * @alias directory.roles.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Roles$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Roles$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Roles$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.roles.get
         * @desc Retrieves a role.
         * @alias directory.roles.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Roles$Get, options?: MethodOptions): AxiosPromise<Schema$Role>;
        get(params: Params$Resource$Roles$Get, options: MethodOptions | BodyResponseCallback<Schema$Role>, callback: BodyResponseCallback<Schema$Role>): void;
        get(params: Params$Resource$Roles$Get, callback: BodyResponseCallback<Schema$Role>): void;
        get(callback: BodyResponseCallback<Schema$Role>): void;
        /**
         * directory.roles.insert
         * @desc Creates a role.
         * @alias directory.roles.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {().Role} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Roles$Insert, options?: MethodOptions): AxiosPromise<Schema$Role>;
        insert(params: Params$Resource$Roles$Insert, options: MethodOptions | BodyResponseCallback<Schema$Role>, callback: BodyResponseCallback<Schema$Role>): void;
        insert(params: Params$Resource$Roles$Insert, callback: BodyResponseCallback<Schema$Role>): void;
        insert(callback: BodyResponseCallback<Schema$Role>): void;
        /**
         * directory.roles.list
         * @desc Retrieves a paginated list of all the roles in a domain.
         * @alias directory.roles.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {integer=} params.maxResults Maximum number of results to return.
         * @param {string=} params.pageToken Token to specify the next page in the list.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Roles$List, options?: MethodOptions): AxiosPromise<Schema$Roles>;
        list(params: Params$Resource$Roles$List, options: MethodOptions | BodyResponseCallback<Schema$Roles>, callback: BodyResponseCallback<Schema$Roles>): void;
        list(params: Params$Resource$Roles$List, callback: BodyResponseCallback<Schema$Roles>): void;
        list(callback: BodyResponseCallback<Schema$Roles>): void;
        /**
         * directory.roles.patch
         * @desc Updates a role. This method supports patch semantics.
         * @alias directory.roles.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
         * @param {().Role} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Roles$Patch, options?: MethodOptions): AxiosPromise<Schema$Role>;
        patch(params: Params$Resource$Roles$Patch, options: MethodOptions | BodyResponseCallback<Schema$Role>, callback: BodyResponseCallback<Schema$Role>): void;
        patch(params: Params$Resource$Roles$Patch, callback: BodyResponseCallback<Schema$Role>): void;
        patch(callback: BodyResponseCallback<Schema$Role>): void;
        /**
         * directory.roles.update
         * @desc Updates a role.
         * @alias directory.roles.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customer Immutable ID of the G Suite account.
         * @param {string} params.roleId Immutable ID of the role.
         * @param {().Role} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Roles$Update, options?: MethodOptions): AxiosPromise<Schema$Role>;
        update(params: Params$Resource$Roles$Update, options: MethodOptions | BodyResponseCallback<Schema$Role>, callback: BodyResponseCallback<Schema$Role>): void;
        update(params: Params$Resource$Roles$Update, callback: BodyResponseCallback<Schema$Role>): void;
        update(callback: BodyResponseCallback<Schema$Role>): void;
    }
    interface Params$Resource$Roles$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Immutable ID of the role.
         */
        roleId?: string;
    }
    interface Params$Resource$Roles$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Immutable ID of the role.
         */
        roleId?: string;
    }
    interface Params$Resource$Roles$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Role;
    }
    interface Params$Resource$Roles$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Maximum number of results to return.
         */
        maxResults?: number;
        /**
         * Token to specify the next page in the list.
         */
        pageToken?: string;
    }
    interface Params$Resource$Roles$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Immutable ID of the role.
         */
        roleId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Role;
    }
    interface Params$Resource$Roles$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account.
         */
        customer?: string;
        /**
         * Immutable ID of the role.
         */
        roleId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Role;
    }
    class Resource$Schemas {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.schemas.delete
         * @desc Delete schema
         * @alias directory.schemas.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable ID of the schema
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Schemas$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Schemas$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Schemas$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.schemas.get
         * @desc Retrieve schema
         * @alias directory.schemas.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable ID of the schema
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Schemas$Get, options?: MethodOptions): AxiosPromise<Schema$Schema>;
        get(params: Params$Resource$Schemas$Get, options: MethodOptions | BodyResponseCallback<Schema$Schema>, callback: BodyResponseCallback<Schema$Schema>): void;
        get(params: Params$Resource$Schemas$Get, callback: BodyResponseCallback<Schema$Schema>): void;
        get(callback: BodyResponseCallback<Schema$Schema>): void;
        /**
         * directory.schemas.insert
         * @desc Create schema.
         * @alias directory.schemas.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {().Schema} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Schemas$Insert, options?: MethodOptions): AxiosPromise<Schema$Schema>;
        insert(params: Params$Resource$Schemas$Insert, options: MethodOptions | BodyResponseCallback<Schema$Schema>, callback: BodyResponseCallback<Schema$Schema>): void;
        insert(params: Params$Resource$Schemas$Insert, callback: BodyResponseCallback<Schema$Schema>): void;
        insert(callback: BodyResponseCallback<Schema$Schema>): void;
        /**
         * directory.schemas.list
         * @desc Retrieve all schemas for a customer
         * @alias directory.schemas.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Schemas$List, options?: MethodOptions): AxiosPromise<Schema$Schemas>;
        list(params: Params$Resource$Schemas$List, options: MethodOptions | BodyResponseCallback<Schema$Schemas>, callback: BodyResponseCallback<Schema$Schemas>): void;
        list(params: Params$Resource$Schemas$List, callback: BodyResponseCallback<Schema$Schemas>): void;
        list(callback: BodyResponseCallback<Schema$Schemas>): void;
        /**
         * directory.schemas.patch
         * @desc Update schema. This method supports patch semantics.
         * @alias directory.schemas.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable ID of the schema.
         * @param {().Schema} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Schemas$Patch, options?: MethodOptions): AxiosPromise<Schema$Schema>;
        patch(params: Params$Resource$Schemas$Patch, options: MethodOptions | BodyResponseCallback<Schema$Schema>, callback: BodyResponseCallback<Schema$Schema>): void;
        patch(params: Params$Resource$Schemas$Patch, callback: BodyResponseCallback<Schema$Schema>): void;
        patch(callback: BodyResponseCallback<Schema$Schema>): void;
        /**
         * directory.schemas.update
         * @desc Update schema
         * @alias directory.schemas.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.customerId Immutable ID of the G Suite account
         * @param {string} params.schemaKey Name or immutable ID of the schema.
         * @param {().Schema} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Schemas$Update, options?: MethodOptions): AxiosPromise<Schema$Schema>;
        update(params: Params$Resource$Schemas$Update, options: MethodOptions | BodyResponseCallback<Schema$Schema>, callback: BodyResponseCallback<Schema$Schema>): void;
        update(params: Params$Resource$Schemas$Update, callback: BodyResponseCallback<Schema$Schema>): void;
        update(callback: BodyResponseCallback<Schema$Schema>): void;
    }
    interface Params$Resource$Schemas$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Name or immutable ID of the schema
         */
        schemaKey?: string;
    }
    interface Params$Resource$Schemas$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Name or immutable ID of the schema
         */
        schemaKey?: string;
    }
    interface Params$Resource$Schemas$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Schema;
    }
    interface Params$Resource$Schemas$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
    }
    interface Params$Resource$Schemas$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Name or immutable ID of the schema.
         */
        schemaKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Schema;
    }
    interface Params$Resource$Schemas$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account
         */
        customerId?: string;
        /**
         * Name or immutable ID of the schema.
         */
        schemaKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Schema;
    }
    class Resource$Tokens {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.tokens.delete
         * @desc Delete all access tokens issued by a user for an application.
         * @alias directory.tokens.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientId The Client ID of the application the token is issued to.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Tokens$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Tokens$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Tokens$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.tokens.get
         * @desc Get information about an access token issued by a user.
         * @alias directory.tokens.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.clientId The Client ID of the application the token is issued to.
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Tokens$Get, options?: MethodOptions): AxiosPromise<Schema$Token>;
        get(params: Params$Resource$Tokens$Get, options: MethodOptions | BodyResponseCallback<Schema$Token>, callback: BodyResponseCallback<Schema$Token>): void;
        get(params: Params$Resource$Tokens$Get, callback: BodyResponseCallback<Schema$Token>): void;
        get(callback: BodyResponseCallback<Schema$Token>): void;
        /**
         * directory.tokens.list
         * @desc Returns the set of tokens specified user has issued to 3rd party
         * applications.
         * @alias directory.tokens.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Tokens$List, options?: MethodOptions): AxiosPromise<Schema$Tokens>;
        list(params: Params$Resource$Tokens$List, options: MethodOptions | BodyResponseCallback<Schema$Tokens>, callback: BodyResponseCallback<Schema$Tokens>): void;
        list(params: Params$Resource$Tokens$List, callback: BodyResponseCallback<Schema$Tokens>): void;
        list(callback: BodyResponseCallback<Schema$Tokens>): void;
    }
    interface Params$Resource$Tokens$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Client ID of the application the token is issued to.
         */
        clientId?: string;
        /**
         * Identifies the user in the API request. The value can be the user's
         * primary email address, alias email address, or unique user ID.
         */
        userKey?: string;
    }
    interface Params$Resource$Tokens$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The Client ID of the application the token is issued to.
         */
        clientId?: string;
        /**
         * Identifies the user in the API request. The value can be the user's
         * primary email address, alias email address, or unique user ID.
         */
        userKey?: string;
    }
    interface Params$Resource$Tokens$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Identifies the user in the API request. The value can be the user's
         * primary email address, alias email address, or unique user ID.
         */
        userKey?: string;
    }
    class Resource$Users {
        root: Admin;
        aliases: Resource$Users$Aliases;
        photos: Resource$Users$Photos;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.users.delete
         * @desc Delete user
         * @alias directory.users.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Users$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Users$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Users$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.users.get
         * @desc retrieve user
         * @alias directory.users.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
         * @param {string=} params.projection What subset of fields to fetch for this user.
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Users$Get, options?: MethodOptions): AxiosPromise<Schema$User>;
        get(params: Params$Resource$Users$Get, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        get(params: Params$Resource$Users$Get, callback: BodyResponseCallback<Schema$User>): void;
        get(callback: BodyResponseCallback<Schema$User>): void;
        /**
         * directory.users.insert
         * @desc create user.
         * @alias directory.users.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {().User} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Users$Insert, options?: MethodOptions): AxiosPromise<Schema$User>;
        insert(params: Params$Resource$Users$Insert, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        insert(params: Params$Resource$Users$Insert, callback: BodyResponseCallback<Schema$User>): void;
        insert(callback: BodyResponseCallback<Schema$User>): void;
        /**
         * directory.users.list
         * @desc Retrieve either deleted users or all users in a domain (paginated)
         * @alias directory.users.list
         * @memberOf! ()
         *
         * @param {object=} params Parameters for request
         * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
         * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
         * @param {string=} params.domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
         * @param {string=} params.event Event on which subscription is intended (if subscribing)
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100. Max allowed is 500
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.projection What subset of fields to fetch for this user.
         * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
         * @param {string=} params.showDeleted If set to true retrieves the list of deleted users. Default is false
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order.
         * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Users$List, options?: MethodOptions): AxiosPromise<Schema$Users>;
        list(params: Params$Resource$Users$List, options: MethodOptions | BodyResponseCallback<Schema$Users>, callback: BodyResponseCallback<Schema$Users>): void;
        list(params: Params$Resource$Users$List, callback: BodyResponseCallback<Schema$Users>): void;
        list(callback: BodyResponseCallback<Schema$Users>): void;
        /**
         * directory.users.makeAdmin
         * @desc change admin status of a user
         * @alias directory.users.makeAdmin
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user as admin
         * @param {().UserMakeAdmin} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        makeAdmin(params?: Params$Resource$Users$Makeadmin, options?: MethodOptions): AxiosPromise<void>;
        makeAdmin(params: Params$Resource$Users$Makeadmin, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        makeAdmin(params: Params$Resource$Users$Makeadmin, callback: BodyResponseCallback<void>): void;
        makeAdmin(callback: BodyResponseCallback<void>): void;
        /**
         * directory.users.patch
         * @desc update user. This method supports patch semantics.
         * @alias directory.users.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user. If ID, it should match with id of user object
         * @param {().User} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Users$Patch, options?: MethodOptions): AxiosPromise<Schema$User>;
        patch(params: Params$Resource$Users$Patch, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        patch(params: Params$Resource$Users$Patch, callback: BodyResponseCallback<Schema$User>): void;
        patch(callback: BodyResponseCallback<Schema$User>): void;
        /**
         * directory.users.undelete
         * @desc Undelete a deleted user
         * @alias directory.users.undelete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey The immutable id of the user
         * @param {().UserUndelete} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        undelete(params?: Params$Resource$Users$Undelete, options?: MethodOptions): AxiosPromise<void>;
        undelete(params: Params$Resource$Users$Undelete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        undelete(params: Params$Resource$Users$Undelete, callback: BodyResponseCallback<void>): void;
        undelete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.users.update
         * @desc update user
         * @alias directory.users.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user. If ID, it should match with id of user object
         * @param {().User} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Users$Update, options?: MethodOptions): AxiosPromise<Schema$User>;
        update(params: Params$Resource$Users$Update, options: MethodOptions | BodyResponseCallback<Schema$User>, callback: BodyResponseCallback<Schema$User>): void;
        update(params: Params$Resource$Users$Update, callback: BodyResponseCallback<Schema$User>): void;
        update(callback: BodyResponseCallback<Schema$User>): void;
        /**
         * directory.users.watch
         * @desc Watch for changes in users list
         * @alias directory.users.watch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.customer Immutable ID of the G Suite account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.
         * @param {string=} params.customFieldMask Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.
         * @param {string=} params.domain Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead.
         * @param {string=} params.event Event on which subscription is intended (if subscribing)
         * @param {integer=} params.maxResults Maximum number of results to return. Default is 100. Max allowed is 500
         * @param {string=} params.orderBy Column to use for sorting results
         * @param {string=} params.pageToken Token to specify next page in the list
         * @param {string=} params.projection What subset of fields to fetch for this user.
         * @param {string=} params.query Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/admin-sdk/directory/v1/guides/search-users
         * @param {string=} params.showDeleted If set to true retrieves the list of deleted users. Default is false
         * @param {string=} params.sortOrder Whether to return results in ascending or descending order.
         * @param {string=} params.viewType Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
         * @param {().Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watch(params?: Params$Resource$Users$Watch, options?: MethodOptions): AxiosPromise<Schema$Channel>;
        watch(params: Params$Resource$Users$Watch, options: MethodOptions | BodyResponseCallback<Schema$Channel>, callback: BodyResponseCallback<Schema$Channel>): void;
        watch(params: Params$Resource$Users$Watch, callback: BodyResponseCallback<Schema$Channel>): void;
        watch(callback: BodyResponseCallback<Schema$Channel>): void;
    }
    interface Params$Resource$Users$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
    }
    interface Params$Resource$Users$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Comma-separated list of schema names. All fields from these schemas are
         * fetched. This should only be set when projection=custom.
         */
        customFieldMask?: string;
        /**
         * What subset of fields to fetch for this user.
         */
        projection?: string;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
        /**
         * Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
         */
        viewType?: string;
    }
    interface Params$Resource$Users$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
    }
    interface Params$Resource$Users$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account. In case of multi-domain, to fetch
         * all users for a customer, fill this field instead of domain.
         */
        customer?: string;
        /**
         * Comma-separated list of schema names. All fields from these schemas are
         * fetched. This should only be set when projection=custom.
         */
        customFieldMask?: string;
        /**
         * Name of the domain. Fill this field to get users from only this domain.
         * To return all users in a multi-domain fill customer field instead.
         */
        domain?: string;
        /**
         * Event on which subscription is intended (if subscribing)
         */
        event?: string;
        /**
         * Maximum number of results to return. Default is 100. Max allowed is 500
         */
        maxResults?: number;
        /**
         * Column to use for sorting results
         */
        orderBy?: string;
        /**
         * Token to specify next page in the list
         */
        pageToken?: string;
        /**
         * What subset of fields to fetch for this user.
         */
        projection?: string;
        /**
         * Query string search. Should be of the form "". Complete documentation is
         * at
         * https://developers.google.com/admin-sdk/directory/v1/guides/search-users
         */
        query?: string;
        /**
         * If set to true retrieves the list of deleted users. Default is false
         */
        showDeleted?: string;
        /**
         * Whether to return results in ascending or descending order.
         */
        sortOrder?: string;
        /**
         * Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
         */
        viewType?: string;
    }
    interface Params$Resource$Users$Makeadmin extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user as admin
         */
        userKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserMakeAdmin;
    }
    interface Params$Resource$Users$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user. If ID, it should match with id of user
         * object
         */
        userKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
    }
    interface Params$Resource$Users$Undelete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The immutable id of the user
         */
        userKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserUndelete;
    }
    interface Params$Resource$Users$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user. If ID, it should match with id of user
         * object
         */
        userKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$User;
    }
    interface Params$Resource$Users$Watch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Immutable ID of the G Suite account. In case of multi-domain, to fetch
         * all users for a customer, fill this field instead of domain.
         */
        customer?: string;
        /**
         * Comma-separated list of schema names. All fields from these schemas are
         * fetched. This should only be set when projection=custom.
         */
        customFieldMask?: string;
        /**
         * Name of the domain. Fill this field to get users from only this domain.
         * To return all users in a multi-domain fill customer field instead.
         */
        domain?: string;
        /**
         * Event on which subscription is intended (if subscribing)
         */
        event?: string;
        /**
         * Maximum number of results to return. Default is 100. Max allowed is 500
         */
        maxResults?: number;
        /**
         * Column to use for sorting results
         */
        orderBy?: string;
        /**
         * Token to specify next page in the list
         */
        pageToken?: string;
        /**
         * What subset of fields to fetch for this user.
         */
        projection?: string;
        /**
         * Query string search. Should be of the form "". Complete documentation is
         * at
         * https://developers.google.com/admin-sdk/directory/v1/guides/search-users
         */
        query?: string;
        /**
         * If set to true retrieves the list of deleted users. Default is false
         */
        showDeleted?: string;
        /**
         * Whether to return results in ascending or descending order.
         */
        sortOrder?: string;
        /**
         * Whether to fetch the ADMIN_VIEW or DOMAIN_PUBLIC view of the user.
         */
        viewType?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Channel;
    }
    class Resource$Users$Aliases {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.users.aliases.delete
         * @desc Remove a alias for the user
         * @alias directory.users.aliases.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.alias The alias to be removed
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Users$Aliases$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Users$Aliases$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Users$Aliases$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.users.aliases.insert
         * @desc Add a alias for the user
         * @alias directory.users.aliases.insert
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {().Alias} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        insert(params?: Params$Resource$Users$Aliases$Insert, options?: MethodOptions): AxiosPromise<Schema$Alias>;
        insert(params: Params$Resource$Users$Aliases$Insert, options: MethodOptions | BodyResponseCallback<Schema$Alias>, callback: BodyResponseCallback<Schema$Alias>): void;
        insert(params: Params$Resource$Users$Aliases$Insert, callback: BodyResponseCallback<Schema$Alias>): void;
        insert(callback: BodyResponseCallback<Schema$Alias>): void;
        /**
         * directory.users.aliases.list
         * @desc List all aliases for a user
         * @alias directory.users.aliases.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.event Event on which subscription is intended (if subscribing)
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Users$Aliases$List, options?: MethodOptions): AxiosPromise<Schema$Aliases>;
        list(params: Params$Resource$Users$Aliases$List, options: MethodOptions | BodyResponseCallback<Schema$Aliases>, callback: BodyResponseCallback<Schema$Aliases>): void;
        list(params: Params$Resource$Users$Aliases$List, callback: BodyResponseCallback<Schema$Aliases>): void;
        list(callback: BodyResponseCallback<Schema$Aliases>): void;
        /**
         * directory.users.aliases.watch
         * @desc Watch for changes in user aliases list
         * @alias directory.users.aliases.watch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string=} params.event Event on which subscription is intended (if subscribing)
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {().Channel} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        watch(params?: Params$Resource$Users$Aliases$Watch, options?: MethodOptions): AxiosPromise<Schema$Channel>;
        watch(params: Params$Resource$Users$Aliases$Watch, options: MethodOptions | BodyResponseCallback<Schema$Channel>, callback: BodyResponseCallback<Schema$Channel>): void;
        watch(params: Params$Resource$Users$Aliases$Watch, callback: BodyResponseCallback<Schema$Channel>): void;
        watch(callback: BodyResponseCallback<Schema$Channel>): void;
    }
    interface Params$Resource$Users$Aliases$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * The alias to be removed
         */
        alias?: string;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
    }
    interface Params$Resource$Users$Aliases$Insert extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Alias;
    }
    interface Params$Resource$Users$Aliases$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Event on which subscription is intended (if subscribing)
         */
        event?: string;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
    }
    interface Params$Resource$Users$Aliases$Watch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Event on which subscription is intended (if subscribing)
         */
        event?: string;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Channel;
    }
    class Resource$Users$Photos {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.users.photos.delete
         * @desc Remove photos for the user
         * @alias directory.users.photos.delete
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        delete(params?: Params$Resource$Users$Photos$Delete, options?: MethodOptions): AxiosPromise<void>;
        delete(params: Params$Resource$Users$Photos$Delete, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        delete(params: Params$Resource$Users$Photos$Delete, callback: BodyResponseCallback<void>): void;
        delete(callback: BodyResponseCallback<void>): void;
        /**
         * directory.users.photos.get
         * @desc Retrieve photo of a user
         * @alias directory.users.photos.get
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        get(params?: Params$Resource$Users$Photos$Get, options?: MethodOptions): AxiosPromise<Schema$UserPhoto>;
        get(params: Params$Resource$Users$Photos$Get, options: MethodOptions | BodyResponseCallback<Schema$UserPhoto>, callback: BodyResponseCallback<Schema$UserPhoto>): void;
        get(params: Params$Resource$Users$Photos$Get, callback: BodyResponseCallback<Schema$UserPhoto>): void;
        get(callback: BodyResponseCallback<Schema$UserPhoto>): void;
        /**
         * directory.users.photos.patch
         * @desc Add a photo for the user. This method supports patch semantics.
         * @alias directory.users.photos.patch
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {().UserPhoto} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        patch(params?: Params$Resource$Users$Photos$Patch, options?: MethodOptions): AxiosPromise<Schema$UserPhoto>;
        patch(params: Params$Resource$Users$Photos$Patch, options: MethodOptions | BodyResponseCallback<Schema$UserPhoto>, callback: BodyResponseCallback<Schema$UserPhoto>): void;
        patch(params: Params$Resource$Users$Photos$Patch, callback: BodyResponseCallback<Schema$UserPhoto>): void;
        patch(callback: BodyResponseCallback<Schema$UserPhoto>): void;
        /**
         * directory.users.photos.update
         * @desc Add a photo for the user
         * @alias directory.users.photos.update
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {().UserPhoto} params.resource Request body data
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        update(params?: Params$Resource$Users$Photos$Update, options?: MethodOptions): AxiosPromise<Schema$UserPhoto>;
        update(params: Params$Resource$Users$Photos$Update, options: MethodOptions | BodyResponseCallback<Schema$UserPhoto>, callback: BodyResponseCallback<Schema$UserPhoto>): void;
        update(params: Params$Resource$Users$Photos$Update, callback: BodyResponseCallback<Schema$UserPhoto>): void;
        update(callback: BodyResponseCallback<Schema$UserPhoto>): void;
    }
    interface Params$Resource$Users$Photos$Delete extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
    }
    interface Params$Resource$Users$Photos$Get extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
    }
    interface Params$Resource$Users$Photos$Patch extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserPhoto;
    }
    interface Params$Resource$Users$Photos$Update extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$UserPhoto;
    }
    class Resource$Verificationcodes {
        root: Admin;
        constructor(root: Admin);
        getRoot(): Admin;
        /**
         * directory.verificationCodes.generate
         * @desc Generate new backup verification codes for the user.
         * @alias directory.verificationCodes.generate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        generate(params?: Params$Resource$Verificationcodes$Generate, options?: MethodOptions): AxiosPromise<void>;
        generate(params: Params$Resource$Verificationcodes$Generate, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        generate(params: Params$Resource$Verificationcodes$Generate, callback: BodyResponseCallback<void>): void;
        generate(callback: BodyResponseCallback<void>): void;
        /**
         * directory.verificationCodes.invalidate
         * @desc Invalidate the current backup verification codes for the user.
         * @alias directory.verificationCodes.invalidate
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Email or immutable ID of the user
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        invalidate(params?: Params$Resource$Verificationcodes$Invalidate, options?: MethodOptions): AxiosPromise<void>;
        invalidate(params: Params$Resource$Verificationcodes$Invalidate, options: MethodOptions | BodyResponseCallback<void>, callback: BodyResponseCallback<void>): void;
        invalidate(params: Params$Resource$Verificationcodes$Invalidate, callback: BodyResponseCallback<void>): void;
        invalidate(callback: BodyResponseCallback<void>): void;
        /**
         * directory.verificationCodes.list
         * @desc Returns the current set of valid backup verification codes for the
         * specified user.
         * @alias directory.verificationCodes.list
         * @memberOf! ()
         *
         * @param {object} params Parameters for request
         * @param {string} params.userKey Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.
         * @param {object} [options] Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param {callback} callback The callback that handles the response.
         * @return {object} Request object
         */
        list(params?: Params$Resource$Verificationcodes$List, options?: MethodOptions): AxiosPromise<Schema$VerificationCodes>;
        list(params: Params$Resource$Verificationcodes$List, options: MethodOptions | BodyResponseCallback<Schema$VerificationCodes>, callback: BodyResponseCallback<Schema$VerificationCodes>): void;
        list(params: Params$Resource$Verificationcodes$List, callback: BodyResponseCallback<Schema$VerificationCodes>): void;
        list(callback: BodyResponseCallback<Schema$VerificationCodes>): void;
    }
    interface Params$Resource$Verificationcodes$Generate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
    }
    interface Params$Resource$Verificationcodes$Invalidate extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Email or immutable ID of the user
         */
        userKey?: string;
    }
    interface Params$Resource$Verificationcodes$List extends StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient;
        /**
         * Identifies the user in the API request. The value can be the user's
         * primary email address, alias email address, or unique user ID.
         */
        userKey?: string;
    }
}
