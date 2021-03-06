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
var searchconsole_v1;
(function (searchconsole_v1) {
    /**
     * Google Search Console URL Testing Tools API
     *
     * Provides tools for running validation tests against single URLs
     *
     * @example
     * const {google} = require('googleapis');
     * const searchconsole = google.searchconsole('v1');
     *
     * @namespace searchconsole
     * @type {Function}
     * @version v1
     * @variation v1
     * @param {object=} options Options for Searchconsole
     */
    class Searchconsole {
        constructor(options, google) {
            this.root = this;
            this._options = options || {};
            this.google = google;
            this.getRoot.bind(this);
            this.urlTestingTools = new Resource$Urltestingtools(this);
        }
        getRoot() {
            return this.root;
        }
    }
    searchconsole_v1.Searchconsole = Searchconsole;
    class Resource$Urltestingtools {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.mobileFriendlyTest =
                new Resource$Urltestingtools$Mobilefriendlytest(root);
        }
        getRoot() {
            return this.root;
        }
    }
    searchconsole_v1.Resource$Urltestingtools = Resource$Urltestingtools;
    class Resource$Urltestingtools$Mobilefriendlytest {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        run(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://searchconsole.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1/urlTestingTools/mobileFriendlyTest:run')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
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
    searchconsole_v1.Resource$Urltestingtools$Mobilefriendlytest = Resource$Urltestingtools$Mobilefriendlytest;
})(searchconsole_v1 = exports.searchconsole_v1 || (exports.searchconsole_v1 = {}));
//# sourceMappingURL=v1.js.map