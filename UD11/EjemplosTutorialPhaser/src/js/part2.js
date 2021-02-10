/* global Phaser */
/* La línea anterior es para que no de error al no encontrar la variable Phaser,
obtenida a través de un CDN */
"use strict";

const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload () {
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
}

function create () {
}

function update () {
}
