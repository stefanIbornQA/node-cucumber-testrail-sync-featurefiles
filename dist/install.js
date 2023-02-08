"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.install = exports.legacyInstall = void 0;
const readConfig_1 = require("./readConfig");
const ResultSynchronizer_1 = require("./ResultSynchronizer");
// tslint:disable-next-line:variable-name
const installHandlers = (registerHandler, After) => {
    const testResultSync = new ResultSynchronizer_1.ResultSynchronizer((0, readConfig_1.readConfig)());
    registerHandler('BeforeFeatures', (features, callback) => {
        testResultSync.readRemoteTestRuns(callback);
    });
    After((cucumberScenario, callback) => {
        const scenario = {
            tags: [],
            isPending: cucumberScenario.isPending(),
            isUndefined: cucumberScenario.isUndefined(),
            isSkipped: cucumberScenario.isSkipped(),
            isSuccessful: cucumberScenario.isSuccessful ? cucumberScenario.isSuccessful() : cucumberScenario.isPassed(),
            exception: null
        };
        // cucumber-js v1.x
        if (cucumberScenario.getTags) {
            scenario.tags = cucumberScenario.getTags().map((tag) => tag.getName());
            scenario.exception = cucumberScenario.getException();
        }
        else {
            // cucumber-js v2.x
            // Hooks now receive a ScenarioResult instead of the Scenario
            scenario.tags = cucumberScenario.scenario.tags.map((tag) => tag.name);
            scenario.exception = cucumberScenario.failureException;
        }
        testResultSync.saveTestResult(scenario, callback);
    });
    registerHandler('AfterFeatures', (features, callback) => {
        testResultSync.pushTestResults(callback);
    });
};
const legacyInstall = (cucumber) => {
    installHandlers(cucumber.registerHandler, cucumber.After);
};
exports.legacyInstall = legacyInstall;
const install = (cucumber) => {
    const testResultSync = new ResultSynchronizer_1.ResultSynchronizer((0, readConfig_1.readConfig)());
    cucumber.defineSupportCode((obj) => {
        installHandlers(obj.registerHandler, obj.After);
    });
};
exports.install = install;
//# sourceMappingURL=install.js.map