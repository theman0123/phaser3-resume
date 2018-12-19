export default {
  type: Phaser.AUTO,
  parent: "Resume Adventure",
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: "OxA7E15C",
  pixelArt: true,
  roundPixels: true,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
};
