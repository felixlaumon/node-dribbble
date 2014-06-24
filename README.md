# node-dribbble

> Dribble API wrapper for node.js with Promise

[![Build Status](https://secure.travis-ci.org/felixlaumon/node-dribbble.png)](http://travis-ci.org/felixlaumon/node-dribbble)

## Installation

````
npm install node-dribbble
````

## Getting Started

````javascript
var dribbble = require('node-dribbble');
dribbble.shots('popular', { page: 3, per_page: 30 }).then(function (data) {
  return data.shots
});
````

## API

Pagination is supported through the `opts` object. E.g. `{ page: 3, per_page: 30 }`

### .shot(id)

`/shot/:id`. Returns details for a shot specified by :id.

#### .shot(id).rebounds()

`/shots/:id/rebounds`. Returns the set of rebounds (shots in response to a shot) for the shot specified by :id.

#### .shot(id).comments()

`/shots/:id/comments`. Returns the set of comments for the shot specified by :id.

---

### .shots(list, opts)

`/shots/:list`. Returns the specified list of shots where :list has one of the following values: `debuts`, `everyone`, `popular`

---

### .player(id)

`/players/:id`. Returns profile details for a player specified by :id.

#### .player(id).shots()

`/players/:id/shots`. Returns the most recent shots for the player specified by :id

#### .player(id).followingShots()

`/players/:id/shots/following`. Returns the most recent shots published by those the player specified by :id is following.

#### .player(id).likes()

`/players/:id/shots/likes`. Returns shots liked by the player specified by :id.

#### .player(id).followers()

`/players/:id/followers`. Returns the list of followers for a player specified by :id.

#### .player(id).followingPlayers()

`/players/:id/following`. Returns the list of players followed by the player specified by :id.

#### .player(id).draftees()

`/players/:id/draftees`. Returns the list of players drafted by the player specified by :id.

## Roadmap

- browser support (jsonp and browserify)
