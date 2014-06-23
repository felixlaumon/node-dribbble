var http = require('http');
var querystring = require('querystring');

var HOST = "api.dribbble.com";

function Dribbble() {}

Dribbble.prototype = {
  _request: function(path, query, cb) {
    var options = {
      host: HOST,
      port: 80,
      path: path + "?" + querystring.stringify(query),
      method: 'GET'
    };

    var req = http.request(options, function(res) {
      var json = "";
      res.on('data', function(junk) {
        json += junk;
      });
      res.on('end', function() {
        cb(JSON.parse(json));
      });
      res.on('error', function(e) {
        cb(undefined);
      });
    });
    req.on('error', function(e) {
      cb(undefined);
    });
    req.end();
  },
  _handlePaginationArgs: function(args) {
    var query = {};
    var cb;
    if (typeof args[0] === "number" && typeof args[1] === "number") {
      query.page = args[0];
      query.per_page = args[1];
      cb = args[2];
    } else {
      cb = args[0];
    }
    return { query: query, cb: cb };
  },

  // shot(id, cb), shot(id).rebounds(), shot(id).comments()
  shot: function() {
    var that = this;
    if (arguments[1]) {
      this._getShotById.apply(this, arguments);
    } else {
      var id = arguments[0];
      return {
        rebounds: function() {
          var opts = that._handlePaginationArgs(arguments);
          return that._getReboundsOfShotById.call(that, id, opts);
        },
        comments: function() {
          var opts = that._handlePaginationArgs(arguments);
          return that._getCommentsOfShotById.call(that, id, opts);
        }
      };
    }
  },
  _getShotById: function(id, cb) {
    id = parseInt(id);
    this._request('/shots/' + id, undefined, cb);
  },
  _getReboundsOfShotById: function(id, opts) {
    this._request('/shots/' + id + '/rebounds', opts.query, opts.cb);
  },
  _getCommentsOfShotById: function(id, opts) {
    this._request('/shots/' + id + '/comments', opts.query, opts.cb);
  },

  // shots("everyone"), shots("popular"), shots("debuts")
  shots: function(list, cb) {
    var args = Array.prototype.slice.call(arguments, 0);
    var list = args.shift();
    var opts = this._handlePaginationArgs(args);
    if (list === 'popular') {
      this._getPopularShots(opts);
    } else if (list === 'everyone') {
      this._getEveryoneShots(opts);
    } else if (list === 'debuts') {
      this._getDebutsShots(opts);
    } else {
      throw new Error("Shot list type not supported");
    }
  },
  _getPopularShots: function(opts) {
    this._request('/shots/popular', opts.query, opts.cb);
  },
  _getDebutsShots: function(opts) {
    this._request('/shots/debuts', opts.query, opts.cb);
  },
  _getEveryoneShots: function(opts) {
    this._request('/shots/everyone', opts.query, opts.cb);
  },

  // player(id), player(id).followers, player(id).following, player(id).draftees,
  // player(id).shots, player(id).followingShots, player(id).likes
  player: function() {
    var that = this;
    if (arguments[1]) {
      this._getPlayerById.apply(this, arguments);
    } else {
      var id = arguments[0];
      return {
        followers: function() {
          var opts = that._handlePaginationArgs(arguments);
          return that._getPlayerFollowersById.call(that, id, opts);
        },
        following: function() {
          var opts = that._handlePaginationArgs(arguments);
          return that._getPlayerFollowingById.call(that, id, opts);
        },
        draftees: function() {
          var opts = that._handlePaginationArgs(arguments);
          return that._getPlayerDrafteesById.call(that, id, opts);
        },
        shots: function() {
          var opts = that._handlePaginationArgs(arguments);
          return that._getPlayerShotsById.call(that, id, opts);
        },
        followingShots: function() {
          var opts = that._handlePaginationArgs(arguments);
          return that._getPlayerFollowingShotsById.call(that, id, opts);
        },
        likes: function() {
          var opts = that._handlePaginationArgs(arguments);
          return that._getPlayerLikesById.call(that, id, opts);
        }
      };
    }
  },
  _getPlayerById: function(id, cb) {
    this._request('/players/' + id, undefined, cb);
  },
  _getPlayerFollowersById: function(id, opts) {
    this._request('/players/' + id + '/followers', opts.query, opts.cb);
  },
  _getPlayerFollowingById: function(id, opts) {
    this._request('/players/' + id + '/following', opts.query, opts.cb);
  },
  _getPlayerDrafteesById: function(id, opts) {
    this._request('/players/' + id + '/draftees', opts.query, opts.cb);
  },
  _getPlayerShotsById: function(id, opts) {
    this._request('/players/' + id + '/shots', opts.query, opts.cb);
  },
  _getPlayerFollowingShotsById: function(id, opts) {
    this._request('/players/' + id + '/shots/following', opts.query, opts.cb);
  },
  _getPlayerLikesById: function(id, opts) {
    this._request('/players/' + id + '/shots/likes', opts.query, opts.cb);
  },
};

exports.Dribbble = Dribbble;
