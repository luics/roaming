const debug = require('debug');
const C = require('./const');

const log = debug(C.APP + ':log');
log.log = console.log.bind(console);
const error = debug(C.APP + ':error');

module.exports = {
    log
    , error
};