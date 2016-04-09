var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

exports.config = {

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './test/integration/**/*.spec.js'
    ],
    host: 'localhost',
    port: 4444,
    // Patterns to exclude.
    //exclude: [
    //    'test/spec/multibrowser/**',
    //    'test/spec/mobile/**'
    //],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude option in
    // order to group specific specs to a specific capability.
    //
    // First you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox and Safari) and you have
    // set maxInstances to 1, wdio will spawn 3 processes. Therefor if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property basically handles how many capabilities
    // from the same test should run tests.
    //
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
        browserName: 'chrome'
    }],
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Per default WebdriverIO commands getting executed in a synchronous way using
    // the wdio-sync package. If you still want to run your tests in an async way
    // using promises you can set the sync command to false.
    sync: false,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Saves a screenshot to a given path if a command fails.
    //screenshotPath: './test/integration/screens/',
    //
    // Set a base URL in order to shorten url command calls. If your url parameter starts
    // with "/", the base url gets prepended.
    baseUrl: 'http://localhost:8081',
    //
    // Default timeout for all waitForXXX commands.
    waitforTimeout: 16000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The following are supported: dot (default), spec and xunit
    // see also: http://webdriver.io/guide/testrunner/reporters.html
    reporters: ['dot'],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd'
    },
    // If you are using Cucumber you need to specify where your step definitions are located.
    // See also: https://github.com/webdriverio/wdio-cucumber-framework#cucumberopts-options
    //
    //cucumberOpts: {
    //    require: [],        // <string[]> (file/dir) require files before executing features
    //    backtrace: false,   // <boolean> show full backtrace for errors
    //    compiler: [],       // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    //    dryRun: false,      // <boolean> invoke formatters without executing steps
    //    failFast: false,    // <boolean> abort the run on first failure
    //    format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    //    colors: true,       // <boolean> disable colors in formatter output
    //    snippets: true,     // <boolean> hide step definition snippets for pending steps
    //    source: true,       // <boolean> hide source URIs
    //    profile: [],        // <string[]> (name) specify the profile to use
    //    strict: false,      // <boolean> fail if there are any undefined or pending steps
    //    tags: [],           // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    //    timeout: 20000,      // <number> timeout for step definitions
    //    ignoreUndefinedDefinitions: false // <boolean> Enable this config to treat undefined definitions as warnings.
    //},
    //
    // =====
    // Hooks
    // =====
    // WedriverIO provides a several hooks you can use to intefere the test process in order to enhance
    // it and build services around it. You can either apply a single function to it or an array of
    // methods. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    //
    // Gets executed once before all workers get launched.
    // onPrepare: function (config, capabilities) {
    // },
    //
    // Gets executed before test execution begins. At this point you can access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function (capabilties, specs) {
        chai.Should();
        chai.use(chaiAsPromised);
        chaiAsPromised.transferPromiseness = browser.transferPromiseness;
    }
};