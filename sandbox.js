var request = require('./lib/request');
const log = require('./lib/log').log;
const error = require('./lib/log').error;

log('start');

// cookies
//request({url: 'http://www.google.com', jar: true}, function(err, res) {
//    debug('http://www.google.com', res.headers['set-cookie']);
//
//    request({url: 'http://images.google.com', jar: true}, function() {
//        debug('http://images.google.com');
//    })
//});

//var FileCookieStore = require('tough-cookie-filestore');
//// NOTE - currently the 'cookies.json' file must already exist! 
//var j = request.jar(new FileCookieStore('cookies.json'));
//request = request.defaults({ jar : j });
//request('http://www.google.com', function() {
//    request('http://images.google.com')
//});

request
//.get('http://img.alicdn.com')
    .get(`http://img.alicdn.com/tps/i2/TB1bNE7LFXXXXaOXFXXwFSA1XXX-292-116.png`)
    .on('error', function(err) {
        error(`error ${err}`);
    })
    .on('response', function(response) {
        log('response');
        log(`response ${response.statusCode} ${response.statusMessage} ${response.headers['content-type']}`);
    })
    .on('data', function(data) {
        log('data');
        log('decoded chunk: ' + data.length)
    })
    .on('body', function(body) {
        log('body');
        log(`body ${body.length}`);
    });


//var j = request.jar();
//var cookie = request.cookie('key1=value1');
//var url = 'http://www.google.com';
//j.setCookie(cookie, url);
//request({url: url, jar: j}, function () {
//    request('http://images.google.com')
//})
