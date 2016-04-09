'use strict';

var gcd = function (a, b) {
    if (!a) return null;
    if (!b) return a;
    return gcd(b, a % b);
};

module.exports = {
    gcd: gcd
};