import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload(){
    this.load.image('red', 'assets/red.jpg');
    this.load.image('green', 'assets/green.jpg');
    this.load.image('startButton', 'assets/start.jpg')
    //this.load.image('bg', 'assets/bg.jpg');
    //this.load.image('logo', 'assets/logo.jpg');
}

function create(){
    var red = this.add.image(400, 150, 'red');
    var green = this.add.image(400, 150, 'green');
    var startButton = this.add.image(400, 350, 'startButton');
    this.physics.addCollider(startButton, )
    //var logo = this.add.image(400, 150, 'logo');

    // this.tweens.add({
    //     targets: red,
    //     y: 450,
    //     duration: 2000,
    //     ease: 'Power2',
    //     yoyo: true,
    //     loop: -1
    // });

}

function timer(){
  //random num between 0 and 7
  var random = (Math.random() * 7)
  window.setTimeout()
}

function showGreen(){

}
