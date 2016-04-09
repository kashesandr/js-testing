'use strict';

var path = require('path');

module.exports = {
    entry: './src/utils.js',
    output: {
        filename: './static/utils.js',
        library: 'MyUtils'
    },
    colors: true
};