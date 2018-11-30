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
var digitalassetlinks_v1;
(function (digitalassetlinks_v1) {
    /**
     * Digital Asset Links API
     *
     * Discovers relationships between online assets such as websites or mobile
     * apps.
     *
     * @example
     * const {google} = require('googleapis');
     * const digitalassetlinks = google.digitalassetlinks('v1');
     *
     * @namespace digitalassetlinks
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Digitalassetlinks
     */
    class Digitalassetlinks {
        constructor(options, google) {
            this.root = this;
            this._options = options || {};
            this.google = google;
            this.getRoot.bind(this);
            this.assetlinks = new Resource$Assetlinks(this);
            this.statements = new Resource$Statements(this);
        }
        getRoot() {
            return this.root;
        }
    }
    digitalassetlinks_v1.Digitalassetlinks = Digitalassetlinks;
    class Resource$Assetlinks {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        check(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://digitalassetlinks.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/assetlinks:check')
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
    digitalassetlinks_v1.Resource$Assetlinks = Resource$Assetlinks;
    class Resource$Statements {
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
            const rootUrl = options.rootUrl || 'https://digitalassetlinks.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/statements:list')
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
    digitalassetlinks_v1.Resource$Statements = Resource$Statements;
})(digitalassetlinks_v1 = exports.digitalassetlinks_v1 || (exports.digitalassetlinks_v1 = {}));
//# sourceMappingURL=v1.js.map