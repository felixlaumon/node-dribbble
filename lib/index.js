'use strict';

var request = require('./request');
var promise = require('bluebird');

var dribbble = {};
dribbble.jsonp = false;

dribbble.shot = function (id, opts) {
  var promise = request('/shots/' + id, opts);

  promise.rebounds = function (opts) {
    return request('/shots/' + id + '/rebounds', opts);
  };

  promise.comments = function (opts) {
    return request('/shots/' + id + '/comments', opts);
  };

  return promise;
};

dribbble.shots = function (name, opts) {
  return request('/shots/' + name, opts);
};

dribbble.player = function (id, opts) {
  var promise = request('/players/' + id, opts);

  promise.shots = function (opts) {
    return request('/players/' + id + '/shots', opts);
  };

  promise.followingShots = function (opts) {
    return request('/players/' + id + '/shots/following', opts);
  };

  promise.likes = function (opts) {
    return request('/players/' + id + '/likes', opts);
  };

  promise.followers = function (opts) {
    return request('/players/' + id + '/followers', opts);
  };

  promise.followingPlayers = function (opts) {
    return request('/players/' + id + '/following', opts);
  };

  promise.draftees = function (opts) {
    return request('/players/' + id + '/draftees', opts);
  };

  return promise;
};

module.exports = dribbble;
