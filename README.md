# Dribbble API Wrapper for Node and CommonJS

![Dribbble](http://dribbble.com/images/dribbble-ball-big.png?1336176471)

[![Build Status](https://secure.travis-ci.org/felixlaumon/node-dribbble.png)](http://travis-ci.org/felixlaumon/node-dribbble)

`node-dribbble` is a simple Javascript Wrapper for Dribbble's API. Supports pagination. Simple interface.

## Installation

````
npm install dribbble
````

## Usage

Make a new object by

````javascript
var Dribbble = require('../lib/dribbble').Dribbble;
var dribbble = new Dribbble();
````

## Example

````javascript

// dribbble.shot
dribbble.shot(21603, function(data){});

dribbble.shot(21603).rebound(function(data){});
dribbble.shot(21603).comments(function(data){});
dribbble.shot(21603).comments(1, 15, function(data){}); // 1 is the # of page, 15 is results per page

// dribbble.shots
dribbble.shots("popular", function(data){});
dribbble.shots("everyone", function(data){});
dribbble.shots("debuts", function(data){});

// dribbble.player
dribbble.player(1, function(data){});
dribbble.player("simplebits", function(data){});

dribbble.player("simplebits").followers(function(data){});
dribbble.player("simplebits").following(function(data){});
dribbble.player("simplebits").drfatees(function(data){});
dribbble.player("simplebits").shots(function(data){});
dribbble.player("simplebits").followingShots(function(data){}); // Player's Following Users' Shots
dribbble.player("simplebits").likes(function(data){});
````
