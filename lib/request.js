'use strict';

var http = require('http');
var querystring = require('querystring');
var Promise = require('bluebird');

var HOST = 'api.dribbble.com';

/**
 * Request wrapper for Dribbble API. The request only starts after `then`,
 * `done`, `catch`, or `finally` is called to allow chained API.
 *
 * @param  {String} uri Endpoint
 * @param  {Object} opts Options
 * @param  {Number} [opts.page = 1] Page of result to retrieve
 * @param  {Number} [opts.per_page = 15] Number of results per page (Max = 30)
 * @return {Promise} Promise
 */
module.exports = function request (uri, opts) {
  opts = opts || {};
  opts.page = opts.page || 1;
  opts.per_page = opts.per_page || 15;

  var requestStarted = false;
  var query = {
    page: opts.page,
    per_page: opts.per_page
  };
  var requestOpts = {
    host: HOST,
    path: uri + '?' + querystring.stringify(query),
    method: 'GET'
  };
  var pseudopromise = {};

  ['then', 'done', 'catch', 'finally'].forEach(function (fn) {
    pseudopromise[fn] = function () {
      if (requestStarted) {
        return;
      }

      requestStarted = true;
      // console.log('sending', requestOpts.path);
      var promise = new Promise(function (resolve, reject) {
        var req = http.request(requestOpts, function (res) {
          var data = '';
          res.on('data', function(chunk) {
            data += chunk;
          });
          res.on('end', function() {
            var json;
            try {
              json = JSON.parse(data);
            } catch (err) {
              return reject('JSON is invalid: ' + err);
            }

            if (json.message && json.message[0] === 404) {
              return reject('Not found', json);
            }

            if (json.name === 'Error') {
              return reject('Internal error', json);
            }

            resolve(json);
          });
          res.on('error', function(e) {
            reject(e);
          });
        });
        req.on('error', function(e) {
          reject(e);
        });
        req.end();
      });

      return promise[fn].apply(promise, arguments);
    };
  });

  return pseudopromise;
};
