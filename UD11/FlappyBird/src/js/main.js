/* global Phaser */
/* La línea anterior es para que no de error al no encontrar la variable Phaser,
obtenida a través de un CDN */

"use strict";
// Creamos el juego con el motor Phaser
const game = new Phaser.Game(288, 505, Phaser.AUTO, '', { preload: preload, create: create, update: update });

// letiables globales

let asset = null;
// let ready = false;
let ground;
let titleGroup;
let title;
let bird;
let startButton;
let flapKey;
let menu = true;
let pipes;
let pipeGenerator = null;
let topPipe;
let bottomPipe;
let pipeY;
let pipeGroup;

// Funcion de pre-carga del juego, cargando los distintos recursos

function preload () {
  asset = game.add.sprite(game.width / 2, game.height / 2, 'preloader');
  asset.anchor.setTo(0.5, 0.5);

  game.load.onLoadComplete.addOnce(onLoadComplete, this);
  game.load.setPreloadSprite(asset);
  game.load.image('background', 'assets/background.png');
  game.load.image('ground', 'assets/ground.png');
  game.load.image('title', 'assets/title.png');
  game.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
  game.load.spritesheet('pipe', 'assets/pipes.png', 54, 320, 2);
  game.load.image('startButton', 'assets/start-button.png');
  game.load.image('gameOver', 'assets/gameover.png');
}

// Función de creacion del juego

function create () {
  asset.cropEnabled = false;

  // add the background sprite
  game.add.sprite(0, 0, 'background');

  // add the ground sprite as a tile
  // and start scrolling in the negative x direction
  ground = game.add.tileSprite(0, 400, 335, 112, 'ground');
  ground.autoScroll(-200, 0);

  /** STEP 1 **/
  // create a group to put the title assets in
  // so they can be manipulated as a whole
  titleGroup = game.add.group()

  /** STEP 2 **/
  // create the title sprite
  // and add it to the group
  title = this.add.sprite(0, 0, 'title');
  titleGroup.add(title);

  /** STEP 3 **/
  // create the bird sprite
  // and add it to the title group
  bird = this.add.sprite(200, 5, 'bird');
  titleGroup.add(bird);

  /** STEP 4 **/
  // add an animation to the bird
  // and begin the animation
  bird.animations.add('flap');
  bird.animations.play('flap', 12, true);

  /** STEP 5 **/
  // Set the originating location of the group
  titleGroup.x = 30;
  titleGroup.y = 100;

  /** STEP 6 **/
  //  create an oscillating animation tween for the group
  game.add.tween(titleGroup).to({ y: 115 }, 350, Phaser.Easing.Linear.NONE, true, 0, 1000, true);

  // add our start button with a callback
  startButton = game.add.button(game.width / 2, 300, 'startButton', startClick, this);
  startButton.anchor.setTo(0.5, 0.5);
}

// Funcion que se ejecuta cada frame

function update () {
  // enable collisions between the bird and the ground
  game.physics.arcade.collide(bird, ground);
  game.physics.arcade.collide(bird, ground, deathHandler, null, this);
  // enable collisions between the bird and each group in the pipes group
  if (!menu) { pipes.forEach(function (pipeGroup) { game.physics.arcade.collide(bird, pipeGroup, deathHandler, null, this); }, this); }

  if (bird.angle < 90 && !menu) {
    bird.angle += 2.5;
  }
}

// Marcamos que al cargarse completamente el juego, esta disponible
function onLoadComplete () {
  // ready = true;
}

// Funcion que cuando empezamos, activa las fisicas para que pase de la "pantalla de intro"
// a el juego en si

function startClick () {
// eliminamos el boton una vez pulsado
  startButton.destroy()

  menu = false;
  // Part 2---------------------------------------
  // Play

  // start the phaser arcade physics engine
  game.physics.startSystem(Phaser.Physics.ARCADE);

  // give our world an initial gravity of 1200 <-- change
  game.physics.arcade.gravity.y = 1200;

  // add the background sprite
  game.add.sprite(0, 0, 'background');

  // Bird
  bird = game.add.sprite(100, game.height / 2, 'bird');

  bird.anchor.setTo(0.5, 0.5);

  // add flap animation and begin playing it
  bird.animations.add('flap');
  bird.animations.play('flap', 12, true);

  // enable physics on the bird
  game.physics.arcade.enableBody(bird);

  // Ground

  ground = game.add.tileSprite(0, 400, 335, 112, 'ground');
  // start scrolling our ground
  ground.autoScroll(-200, 0);

  // enable physics on the ground sprite
  // this is needed for collision detection
  game.physics.arcade.enableBody(ground);

  // we don't want the ground's body
  // to be affected by gravity or external forces
  ground.body.allowGravity = false;
  ground.body.immovable = true;

  // Part 4 ---------------------------
  pipes = game.add.group();

  // add a timer if is not set, else stop it
  if (pipeGenerator === null) {
    pipeGenerator = game.time.events.loop(Phaser.Timer.SECOND * 1.25, generatePipes, this);
  } else {
    pipeGenerator.stop();
  }
  pipeGenerator.timer.start();

  // Part 3------------------------------
  flapKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
  flapKey.onDown.add(birdFlap, this);

  // add mouse/touch controls
  game.input.onDown.add(birdFlap, this);

  // keep the spacebar from propogating up to the browser
  game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);
}

// Funcion que hace un "flapeo" (Salto) del pajaro

function birdFlap () {
  // cause our bird to "jump" upward
  bird.body.velocity.y = -400;
  // rotate the bird to -40 degrees
  game.add.tween(bird).to({ angle: -40 }, 100).start();
}

// Funciones para generar tubieras aleatoriamente y que entre ella siempre haya un hueco constante
function generatePipes () {
  pipeY = game.rnd.integerInRange(-100, 100);
  pipeGroup = pipes.getFirstExists(false);
  if (!pipeGroup) {
    pipeGroup = game.add.group(pipes);

    topPipe = pipeGroup.create(0, 0, 'pipe');
    topPipe.frame = 0;

    topPipe.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enableBody(topPipe);

    topPipe.body.allowGravity = false;
    topPipe.body.immovable = true;

    bottomPipe = pipeGroup.create(0, 0, 'pipe');
    bottomPipe.frame = 1;

    bottomPipe.anchor.setTo(0.5, 0.5);
    game.physics.arcade.enableBody(bottomPipe);

    bottomPipe.body.allowGravity = false;
    bottomPipe.body.immovable = true;

    pipeGroup.setAll('body.velocity.x', -200);
  }
  resetPipeGroup(game.width, pipeY);
}

function resetPipeGroup (x, y) {
  topPipe.reset(0, 0);
  bottomPipe.reset(0, 440);

  pipeGroup.x = x;
  pipeGroup.y = y;
  pipeGroup.setAll('body.velocity.x', -200);
  pipeGroup.hasScored = false;
  pipeGroup.exists = true;
}

// Funcion no realizada para manejar "la muerte" del pajaro (ejemplo un game over)
function deathHandler () {
  game.time.events.add(Phaser.Timer.SECOND * 0.05, shutdown, this);
}

// Funcion auxiliar para si cerraramos el juego (no usada)
function shutdown () {
  // Volvemos a crear el boton de start y lo llevamos al frente
  startButton = game.add.button(game.width / 2, 300, 'startButton', startClick, this);
  startButton.anchor.setTo(0.5, 0.5);
  // Ponemos imagen Game Over
  this.add.sprite(50, 200, 'gameOver');
}
