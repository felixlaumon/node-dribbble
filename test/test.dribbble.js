var Dribbble;
var d;

describe("Dribbble", function(){
  it("should be initialized", function() {
    Dribbble = require('../lib/dribbble').Dribbble;
    d = new Dribbble();
  });
});

describe("Dribbble.Shot", function(){

  it("should get shot by id", function(done) {
    d.shot(21603, function(data){
      data.id.should.equal(21603);
      done();
    });
  });

  it("should get rebounds of a shot by id", function(done) {
    d.shot(43424).rebounds(function(data){
      data.total.should.be.ok;
      done();
    });
  });

  it("should get rebounds of a shot by id with pagination", function(done) {
    d.shot(43424).rebounds(1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

  it("should get comments of a shot by id", function(done) {
    d.shot(21603).comments(function(data){
      data.total.should.be.ok;
      done();
    });
  });

  it("should get comments of a shot by id with pagination", function(done) {
    d.shot(21603).comments(1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

});

describe("Dribbble.Shots", function(){
  it("should get popular shots", function(done) {
    d.shots("popular", function(data){
      data.total.should.be.ok;
      data.shots.should.be.ok;
      done();
    });
  });

  it("should get popular shots by pagination", function(done) {
    d.shots("popular", 1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

  it("should get debuts shots", function(done) {
    d.shots("debuts", function(data){
      data.total.should.be.ok;
      data.shots.should.be.ok;
      done();
    });
  });

  it("should get debuts shots by pagination", function(done) {
    d.shots("debuts", 1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

  it("should get everyone shots", function(done) {
    d.shots("everyone", function(data){
      data.total.should.be.ok;
      data.shots.should.be.ok;
      done();
    });
  });

  it("should get everyone shots by pagination", function(done) {
    d.shots("everyone", 1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });
});

describe("Dribbble.Player", function() {

  // Player ID
  it("should get player by username", function(done) {
    d.player("simplebits", function(data){
      data.id.should.equal(1);
      done();
    });
  });

  it("should get player by id", function(done) {
    d.player(1, function(data){
      data.username.should.equal("simplebits");
      done();
    });
  });

  // Player's Followers
  it("should get player's follower by id", function(done) {
    d.player(1).followers(function(data){
      data.total.should.be.ok;
      data.players.should.be.ok;
      done();
    });
  });

  it("should get player's follower by id with pagination", function(done) {
    d.player(1).followers(1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

  // Player's Following
  it("should get player's following by id", function(done) {
    d.player(1).following(function(data){
      data.total.should.be.ok;
      data.players.should.be.ok;
      done();
    });
  });

  it("should get player's following by id with pagination", function(done) {
    d.player(1).following(1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

  // Player's Draftees
  it("should get player's draftees by id", function(done) {
    d.player(1).draftees(function(data){
      data.total.should.be.ok;
      data.players.should.be.ok;
      done();
    });
  });

  it("should get player's draftees by id with pagination", function(done) {
    d.player(1).draftees(1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

  // Player's Shots
  it("should get player's shots by id", function(done) {
    d.player(1).shots(function(data){
      data.total.should.be.ok;
      data.shots.should.be.ok;
      done();
    });
  });

  it("should get player's shots by id with pagination", function(done) {
    d.player(1).shots(1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

  // Player's Following Users' Shots
  it("should get player's followingShots by id", function(done) {
    d.player(1).followingShots(function(data){
      data.total.should.be.ok;
      data.shots.should.be.ok;
      done();
    });
  });

  it("should get player's followingShots by id with pagination", function(done) {
    d.player(1).followingShots(1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });

   // Player's Likes
  it("should get player's likes by id", function(done) {
    d.player(1).likes(function(data){
      data.total.should.be.ok;
      data.shots.should.be.ok;
      done();
    });
  });

  it("should get player's likes by id with pagination", function(done) {
    d.player(1).likes(1, 5, function(data){
      data.page.should.equal(1);
      data.per_page.should.equal(5);
      done();
    });
  });
});
