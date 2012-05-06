# Dribbble API Wrapper for Node and CommonJS

![Dribbble](http://dribbble.com/images/dribbble-ball-big.png?1336176471)

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
dribbble.shot(21603, function(){});

dribbble.shot(21603).rebound(function(){});
dribbble.shot(21603).comments(function(){});
dribbble.shot(21603).comments(1, 15, function(){}); // 1 is the # of page, 15 is results per page

// dribbble.shots
dribbble.shots("popular", function(){});
dribbble.shots("everyone", function(){});
dribbble.shots("debuts", function(){});

// dribbble.player
dribbble.player(1, function(){});
dribbble.player("simplebits", function(){});

dribbble.player("simplebits").followers(function(){});
dribbble.player("simplebits").following(function(){});
dribbble.player("simplebits").drfatees(function(){});
dribbble.player("simplebits").shots(function(){});
dribbble.player("simplebits").followingShots(function(){}); // Player's Following Users' Shots
dribbble.player("simplebits").likes(function(){});
````
