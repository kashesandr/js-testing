'use strict';

var utils = require('../../src/utils.js');

describe('Greatest common delimiter', function() {
    
    it('should exist', function () {
        expect(utils).to.exist;
        expect(utils.gcd).to.exist;
    });

    it('should calculate correctly', function () {
        utils.gcd(1,1).should.equal(1, '1 and 1');
        utils.gcd(1,2).should.equal(1, '1 and 2');
        utils.gcd(5,10).should.equal(5, '5 and 10');
    });

    it('should calculate correctly', function () {
        expect(utils.gcd(undefined,2)).to.equal(null);
    });
    
});

