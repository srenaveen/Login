var database;
var gameState = 0;
var playerCount,form,game,player;


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
 
}

