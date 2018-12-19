import "phaser";

export default class Boot extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  preload() {
    // office map
    this.load.image("office-pack", "assets/images/office-tileset.png");
    this.load.tilemapTiledJSON("office", "assets/tilemaps/office.json");

    // world-landing map
    this.load.image("city-pack", "assets/images/city_32x32.png");
    this.load.image("work", "assets/images/home.png");
    this.load.tilemapTiledJSON("world", "assets/tilemaps/world.json");

    // me
    this.load.spritesheet("spencer", "assets/images/spencer.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    this.anims.create({
      key: "spencer-walk",
      frames: this.anims.generateFrameNames("spencer", {
        frames: [0, 1, 2, 3, 0],
      }),
      frameRate: 4,
      yoyo: false,
    });
    this.anims.create({
      key: "spencer-sit",
      frames: this.anims.generateFrameNames("spencer", {
        frames: [0, 4, 5],
      }),
      frameRate: 4,
      yoyo: false,
    });
    this.scene.start("World");
  }
}
