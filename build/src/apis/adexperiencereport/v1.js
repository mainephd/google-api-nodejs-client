"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_common_1 = require("googleapis-common");
// tslint:disable: no-any
// tslint:disable: class-name
// tslint:disable: variable-name
// tslint:disable: jsdoc-format
// tslint:disable: no-namespace
var adexperiencereport_v1;
(function (adexperiencereport_v1) {
    /**
     * Ad Experience Report API
     *
     * Views Ad Experience Report data, and gets a list of sites that have a
     * significant number of annoying ads.
     *
     * @example
     * const {google} = require('googleapis');
     * const adexperiencereport = google.adexperiencereport('v1');
     *
     * @namespace adexperiencereport
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Adexperiencereport
     */
    class Adexperiencereport {
        constructor(options, google) {
            this.root = this;
            this._options = options || {};
            this.google = google;
            this.getRoot.bind(this);
            this.sites = new Resource$Sites(this);
            this.violatingSites = new Resource$Violatingsites(this);
        }
        getRoot() {
            return this.root;
        }
    }
    adexperiencereport_v1.Adexperiencereport = Adexperiencereport;
    class Resource$Sites {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexperiencereport.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexperiencereport_v1.Resource$Sites = Resource$Sites;
    class Resource$Violatingsites {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://adexperiencereport.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/violatingSites')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: [],
                pathParams: [],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
    }
    adexperiencereport_v1.Resource$Violatingsites = Resource$Violatingsites;
})(adexperiencereport_v1 = exports.adexperiencereport_v1 || (exports.adexperiencereport_v1 = {}));
//# sourceMappingURL=v1.js.map