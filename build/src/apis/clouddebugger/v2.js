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
var clouddebugger_v2;
(function (clouddebugger_v2) {
    /**
     * Stackdriver Debugger API
     *
     * Examines the call stack and variables of a running application without
     * stopping or slowing it down.
     *
     * @example
     * const {google} = require('googleapis');
     * const clouddebugger = google.clouddebugger('v2');
     *
     * @namespace clouddebugger
     * @type {Function}
     * @version v2
     * @variation v2
     * @param {object=} options Options for Clouddebugger
     */
    class Clouddebugger {
        constructor(options, google) {
            this.root = this;
            this._options = options || {};
            this.google = google;
            this.getRoot.bind(this);
            this.controller = new Resource$Controller(this);
            this.debugger = new Resource$Debugger(this);
        }
        getRoot() {
            return this.root;
        }
    }
    clouddebugger_v2.Clouddebugger = Clouddebugger;
    class Resource$Controller {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.debuggees = new Resource$Controller$Debuggees(root);
        }
        getRoot() {
            return this.root;
        }
    }
    clouddebugger_v2.Resource$Controller = Resource$Controller;
    class Resource$Controller$Debuggees {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.breakpoints = new Resource$Controller$Debuggees$Breakpoints(root);
        }
        getRoot() {
            return this.root;
        }
        register(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2/controller/debuggees/register')
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
    clouddebugger_v2.Resource$Controller$Debuggees = Resource$Controller$Debuggees;
    class Resource$Controller$Debuggees$Breakpoints {
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
            const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2/controller/debuggees/{debuggeeId}/breakpoints')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['debuggeeId'],
                pathParams: ['debuggeeId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        update(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2/controller/debuggees/{debuggeeId}/breakpoints/{id}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'PUT'
                }, options),
                params,
                requiredParams: ['debuggeeId', 'id'],
                pathParams: ['debuggeeId', 'id'],
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
    clouddebugger_v2.Resource$Controller$Debuggees$Breakpoints = Resource$Controller$Debuggees$Breakpoints;
    class Resource$Debugger {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.debuggees = new Resource$Debugger$Debuggees(root);
        }
        getRoot() {
            return this.root;
        }
    }
    clouddebugger_v2.Resource$Debugger = Resource$Debugger;
    class Resource$Debugger$Debuggees {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
            this.breakpoints = new Resource$Debugger$Debuggees$Breakpoints(root);
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
            const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2/debugger/debuggees')
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
    clouddebugger_v2.Resource$Debugger$Debuggees = Resource$Debugger$Debuggees;
    class Resource$Debugger$Debuggees$Breakpoints {
        constructor(root) {
            this.root = root;
            this.getRoot.bind(this);
        }
        getRoot() {
            return this.root;
        }
        delete(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'DELETE'
                }, options),
                params,
                requiredParams: ['debuggeeId', 'breakpointId'],
                pathParams: ['breakpointId', 'debuggeeId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
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
            const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2/debugger/debuggees/{debuggeeId}/breakpoints/{breakpointId}')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['debuggeeId', 'breakpointId'],
                pathParams: ['breakpointId', 'debuggeeId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
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
            const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v2/debugger/debuggees/{debuggeeId}/breakpoints')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET'
                }, options),
                params,
                requiredParams: ['debuggeeId'],
                pathParams: ['debuggeeId'],
                context: this.getRoot()
            };
            if (callback) {
                googleapis_common_1.createAPIRequest(parameters, callback);
            }
            else {
                return googleapis_common_1.createAPIRequest(parameters);
            }
        }
        set(paramsOrCallback, optionsOrCallback, callback) {
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
            const rootUrl = options.rootUrl || 'https://clouddebugger.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl +
                        '/v2/debugger/debuggees/{debuggeeId}/breakpoints/set')
                        .replace(/([^:]\/)\/+/g, '$1'),
                    method: 'POST'
                }, options),
                params,
                requiredParams: ['debuggeeId'],
                pathParams: ['debuggeeId'],
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
    clouddebugger_v2.Resource$Debugger$Debuggees$Breakpoints = Resource$Debugger$Debuggees$Breakpoints;
})(clouddebugger_v2 = exports.clouddebugger_v2 || (exports.clouddebugger_v2 = {}));
//# sourceMappingURL=v2.js.map