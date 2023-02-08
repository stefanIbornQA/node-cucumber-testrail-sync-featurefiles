"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.legacyInstall = exports.install = exports.readConfig = exports.ResultSynchronizer = exports.ScenarioSynchronizer = void 0;
// tslint:disable-next-line:no-reference
/// <reference path="../typings.d.ts" />
var ScenarioSynchronizer_1 = require("./ScenarioSynchronizer");
Object.defineProperty(exports, "ScenarioSynchronizer", { enumerable: true, get: function () { return ScenarioSynchronizer_1.ScenarioSynchronizer; } });
var ResultSynchronizer_1 = require("./ResultSynchronizer");
Object.defineProperty(exports, "ResultSynchronizer", { enumerable: true, get: function () { return ResultSynchronizer_1.ResultSynchronizer; } });
var readConfig_1 = require("./readConfig");
Object.defineProperty(exports, "readConfig", { enumerable: true, get: function () { return readConfig_1.readConfig; } });
var install_1 = require("./install");
Object.defineProperty(exports, "install", { enumerable: true, get: function () { return install_1.install; } });
Object.defineProperty(exports, "legacyInstall", { enumerable: true, get: function () { return install_1.legacyInstall; } });
//# sourceMappingURL=index.js.map