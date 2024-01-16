var canvas;
var bgImage;
var bgImg;
var database;
var form, player,game;
var playerCount = 0,gameState = 0;

function preload() {
  bgImage = loadImage("./assets/planodefundo.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //database = firebase.database();
  game = new Game();
  game.start();

}

function draw() {
  background(bgImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
