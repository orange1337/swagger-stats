'use strict';

process.on('uncaughtException', (err) => {
    console.error(`======= UncaughtException swagger-stat :  ${err}`);
});

module.exports = require('./swsInterface');
