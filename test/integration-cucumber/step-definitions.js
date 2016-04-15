var assert = require('assert');
var SELECTORS = require('./mapper');

var getSelector = function (elementName) {
    return SELECTORS[elementName];
};

module.exports = function() {

    this.Given(/go on the website "([^"]*)"/, function (url) {
        return browser.url(url);
    });
    
    this.When(/set a value "([^"]*)" for the "([^"]*)"/,
        function (value, elementName) {
            var selector = getSelector(elementName);
            return browser.setValue(selector, value);
        }
    );
    
    this.When(/click on the "([^"]*)"/, function (elementName) {
        var selector = getSelector(elementName);
        return browser.click(selector);
    });

    this.Then(/see the value "([^"]*)" in the "([^"]*)" element/,
        function (expected, elementName) {
            var selector = getSelector(elementName);
            return browser.getValue(selector).then(function (value) {
                assert.equal(value, expected)
            })
        }
    );

    this.Then(/should the title of the page be "([^"]*)"/, 
        function (expected) {
            return browser.getTitle().then(function (title) {
                assert.equal(title, expected)
            })
        }
    );

    this.Then(/should see speakers/, function (list) {

        var speakers = list.split('\n');

        return browser
            .getSource()
            .then(function (source) {
                speakers.forEach(function (speaker) {
                    source.toString().indexOf(speaker)
                        .should.be.greaterThan(-1);
                });
            });
    });
    
};