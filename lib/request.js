const process = require('process');
const request = require('request');
const log = require('./log').log;

//const debug = require('debug')(C.APP+':log');

const PROXY = 'http://127.0.0.1:8888';

module.exports =
    process.env.DEBUG == 'roaming'
        ? request.defaults({'proxy': PROXY})
        : request;


log(`use proxy ${PROXY}`);