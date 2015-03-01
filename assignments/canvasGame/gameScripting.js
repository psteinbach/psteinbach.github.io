// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 800;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "space.png";

// Hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
	heroReady = true;
};
heroImage.src = "player.png";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
	monsterReady = true;
};
monsterImage.src = "enemy.png";

var bltReady = false;
var bltImage = new Image();
bltImage.onload = function () {
	bltReady = true;
};
bltImage.src = "bullet.png";

// Background image
var ylReady = false;
var ylImage = new Image();
ylImage.onload = function () {
	ylReady = true;
};
ylImage.src = "youLose.png";


// Game State
var hero = {
	speed: 256 // movement in pixels per second
};
var spacebg = {
	speed:-10,
	autospeed:-15,
	x:-2048,
	y:-3200
};
var bullet = {
	speed:300
}

var monster = {};

var enemies = {};
var bullets = {};
var isGameOver;

var noLives = 3;
var score = 0;
var distFromCenter = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Reset the game when the player catches a monster
var reset = function () {
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;

	// Throw the monster somewhere on the screen randomly
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
};

// Update game objects
var update = function (modifier) {
	spacebg.y -= spacebg.autospeed * modifier;
	if (38 in keysDown) { // Player holding up
		hero.y -= hero.speed * modifier;
		spacebg.y -= spacebg.speed * modifier;
	}
	if (40 in keysDown) { // Player holding down
		hero.y += hero.speed * modifier;
		spacebg.y += spacebg.speed * modifier;
	}
	if (37 in keysDown) { // Player holding left
		hero.x -= hero.speed * modifier;
		spacebg.x -= spacebg.speed * modifier;
	}
	if (39 in keysDown) { // Player holding right
		hero.x += hero.speed * modifier;
		spacebg.x += spacebg.speed * modifier;
	}

	if (32 in keysDown) { // Player holding space
		fireWeapon(modifier);
	}

	// Are they touching?
	if (
		hero.x <= (monster.x + 32)
		&& monster.x <= (hero.x + 32)
		&& hero.y <= (monster.y + 32)
		&& monster.y <= (hero.y + 32)
	) {
		--noLives;
		if (noLives >= 0){
			reset();
		}
		else{
			if (ylReady) {
				ctx.drawImage(ylImage, 0,0);
			}
		}
	}
};

	var fireWeapon = function(modifier){
		if (bltReady) {
			ctx.drawImage(bltImage, hero.x+20, hero.y);
			bullet.y += bullet.speed * modifier;
		}
	}


// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, spacebg.x,spacebg.y);
	}

	if (heroReady) {
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady) {
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}
	
	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Lives: " + noLives, 32, 32);
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	update(delta / 1000);
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
reset();
main();