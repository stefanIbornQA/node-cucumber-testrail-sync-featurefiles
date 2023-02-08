"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readConfig = void 0;
const path = require("path");
const _ = require("lodash");
const readConfig = () => {
    const dir = process.cwd();
    const defaultOptions = {
        featuresDir: path.resolve(dir, 'features'),
        stepDefinitionsDir: path.resolve(dir, 'features', 'step_definitions')
    };
    const options = require(path.resolve(dir, '.testrail-sync.js'));
    if (options.featuresDir) {
        defaultOptions.stepDefinitionsDir = path.resolve(options.featuresDir, 'step_definitions');
    }
    return _.defaultsDeep(options, defaultOptions);
};
exports.readConfig = readConfig;
//# sourceMappingURL=readConfig.js.map