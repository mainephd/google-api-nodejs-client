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
const v1_1 = require("./v1");
const v2_1 = require("./v2");
exports.VERSIONS = {
    'v1': v1_1.tagmanager_v1.Tagmanager,
    'v2': v2_1.tagmanager_v2.Tagmanager,
};
function tagmanager(versionOrOptions) {
    return googleapis_common_1.getAPI('tagmanager', versionOrOptions, exports.VERSIONS, this);
}
exports.tagmanager = tagmanager;
//# sourceMappingURL=index.js.map