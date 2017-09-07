// define variables
var game;
var player;
var platforms;
var tokens;
var items;
var cursors;
var jumpButton;
var text;
var winningMessage;
var won = false;
var currentScore = 0;
var winningScore = 100;

// add collectable items to the game
function addItems() {
  items = game.add.physicsGroup();
  createItem(400, 200, 'coin');
  createItem(320, 450, 'coin');
  createItem(220, 510, 'coin');
  createItem(650, 360, 'coin');
  createItem(50, 300, 'coin');
  createItem(630, 30, 'coin');
  createItem(500, 200, 'coin');
  createItem(550, 200, 'coin');
  createItem(600, 200, 'coin');  
  createItem(100, 150, 'coin');
  createItem(100, 150, 'coin');
  createItem(300, 50, 'poison');
  createItem(300, 300, 'poison');
  createItem(452, 200, 'poison');
  createItem(125, 40, 'star');
}

// add platforms to the game
function addPlatforms() {
  platforms = game.add.physicsGroup();
  platforms.create(350, 250, 'platform2');
  platforms.create(270, 500, 'platform');
  platforms.create(170, 560, 'platform');
  platforms.create(600, 410, 'platform2');
  platforms.create(0, 350, 'platform2');
  platforms.create(580, 80, 'platform');
  platforms.create(518, 250, 'platform2');
  platforms.create(50, 200, 'platform2');
  platforms.create(250, 100, 'platform2');
  platforms.create(0, 80, 'platform2');    
  platforms.setAll('body.immovable', true);
}

// create a single animated item and add to screen
function createItem(left, top, image) {
  var item = items.create(left, top, image);
  item.animations.add('spin');
  item.animations.play('spin', 10, true);
}

// create the winning token and add to screen
function createtoken() {
  tokens = game.add.physicsGroup();
  var token = tokens.create(740, 500, 'token');
  token.animations.add('spin');
  token.animations.play('spin', 10, true);
}

// when the player collects an item on the screen
function itemHandler(player, item) {
  item.kill();
  if (item.key === 'coin') {
    currentScore = currentScore + 10;
  } else if (item.key === 'poison') {
    currentScore = currentScore - 10;
  } else if (item.key === 'star') {
    currentScore = currentScore + 25;
  }
  if (currentScore >= winningScore) {
      createtoken();
  }
}

// when the player collects the token at the end of the game
function tokenHandler(player, token) {
  token.kill();
  won = true;
}

// setup game when the web page loads
window.onload = function () {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
  
  // before the game begins
  function preload() {
    game.load.image('background', 'img/background.gif');
    
    //Load images
    game.load.image('platform', 'img/platform_1.png');
    game.load.image('platform2', 'img/platform_2.png');
    
    //Load spritesheets
    game.load.spritesheet('player', 'img/metalslug.png', 39, 41);
    game.load.spritesheet('coin', 'img/coin.png', 36, 44);
    game.load.spritesheet('token', 'img/token.png', 60, 55);
    game.load.spritesheet('poison', 'img/poison.png', 32, 32);
    game.load.spritesheet('star', 'img/star.png', 32, 32);
  }

  // initial game set up
  function create() {
	game.add.tileSprite(0, 0, 800, 600, 'background');
    player = game.add.sprite(50, 600, 'player');
    player.animations.add('walk');
    player.anchor.setTo(0.5, 1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    addItems();
    addPlatforms();

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    text = game.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 24px Arial", fill: "white" });
    winningMessage = game.add.text(game.world.centerX, 275, "", { font: "bold 48px Arial", fill: "white" });
    winningMessage.anchor.setTo(0.5, 1);
  }

  // while the game is running
  function update() {
    text.text = "SCORE: " + currentScore;
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, items, itemHandler);
    game.physics.arcade.overlap(player, tokens, tokenHandler);
    player.body.velocity.x = 0;

    // is the left cursor key presssed?
    if (cursors.left.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = -300;
      player.scale.x = - 1;
    }
    // is the right cursor key pressed?
    else if (cursors.right.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = 300;
      player.scale.x = 1;
    }
    // player doesn't move
    else {
      player.animations.stop();
    }
    
    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -400;
    }
    // when the player wins the game
    if (won) {
      winningMessage.text = "YOU WIN!!!";
    }
  }

  function render() {

  }

};
