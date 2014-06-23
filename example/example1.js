var Dribbble = require('dribbble').Dribbble;
var d = new Dribbble();

// "id", cb
d.shot(21603, function(data){
  console.log(data);
});

// "id"; rebounds | comments, cb
d.shot(43424).rebounds(function(data){
  console.log(data);
});

d.shot(43424).rebounds(1, 3, function(data){
  console.log(data);
});



d.shot(21603).comments(function(data){
  console.log(data.total);
});

d.shot(21603).comments(1, 15, function(data){
  console.log(data);
});

d.shots("everyone", 1, 15, function(data){
  console.log(data);
});

d.shots("debuts", 1, 15, function(data){
  console.log(data);
});

d.shots("popular", 1, 15, function(data){
  console.log(data);
});

// Player can be id or user name
d.player("simplebits", function(data){
  console.log(data);
});

d.player("simplebits").followers(function(data){
  console.log(data);
});

d.player("simplebits").following(function(data){
  console.log(data);
});

d.player("simplebits").draftees(function(data){
  console.log(data);
});

d.player("simplebits").shots(1, 15, function(data){
  console.log(data);
});

d.player("simplebits").followingShots(1, 15, function(data){
  console.log(data);
});

d.player("simplebits").likes(1, 15, function(data){
  console.log(data);
});
