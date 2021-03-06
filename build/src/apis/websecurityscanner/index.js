"use strict";
// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1alpha_1 = require("./v1alpha");
exports.VERSIONS = {
    'v1alpha': v1alpha_1.websecurityscanner_v1alpha.Websecurityscanner,
};
function websecurityscanner(versionOrOptions) {
    return googleapis_common_1.getAPI('websecurityscanner', versionOrOptions, exports.VERSIONS, this);
}
exports.websecurityscanner = websecurityscanner;
//# sourceMappingURL=index.js.map