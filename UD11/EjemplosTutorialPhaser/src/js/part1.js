/* global Phaser */
/* La línea anterior es para que no de error al no encontrar la variable Phaser,
obtenida a través de un CDN */
"use strict";

const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload () {
  game.load.image('sky', 'assets/sky.png');
}

function create () {
}

function update () {
}
