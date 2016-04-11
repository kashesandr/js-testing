'use strict';

describe('The Web App', function() {
    
    it('should have a correct title', function() {
        browser.url('/').getTitle()
            .should.eventually.equal('Greatest Common Delimiter')  
    });

    it('should have a "Get Result" button', function() {
        browser.getText('#button')
            .should.eventually.equal('Get Result')
    });

    it('should calculate correctly', function() {
        browser
            .setValue('#num1', 10)
            .setValue('#num2', 5)
            .click('#button')
            .getValue('#result')
            .should.eventually.equal('5')
    });
    
});