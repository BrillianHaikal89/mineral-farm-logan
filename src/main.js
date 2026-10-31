
import Phaser from 'phaser';
import './style.css';

class FarmScene extends Phaser.Scene {
  constructor() {
    super('FarmScene');
  }

  create() {
    this.cameras.main.setBackgroundColor('#75b95b');

    this.add.text(240, 90, 'MINERAL FARM', {
      fontSize: '28px',
      color: '#ffffff',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    this.add.text(240, 145, 'Welcome to your farm!', {
      fontSize: '14px',
      color: '#ffffff'
    }).setOrigin(0.5);

    this.add.text(240, 205, 'Game is running!', {
      fontSize: '12px',
      color: '#fff4c2'
    }).setOrigin(0.5);
  }
}

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 270,
  parent: 'game-container',
  backgroundColor: '#75b95b',
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [FarmScene]
};

new Phaser.Game(config);
