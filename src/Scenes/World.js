import "phaser";
import Spencer from "../Sprites/Spencer";

export default class World extends Phaser.Scene {
  constructor(key) {
    super(key);
  }

  create() {
    this.createMap();

    this.player = new Spencer(this, "spencer");
    // this.cameras.main.startFollow(this.player);
  }

  createMap() {
    // add water background
    // this.add.tileSprite(0, 0, 8000, 8000, "office-tileset", 31);
    // create the tilemap
    this.map = this.make.tilemap({
      key: "world",
      // width: 30,
      // height: 30,
    });
    this.tileset = this.map.addTilesetImage("city_32x32", "city-pack");
    // this.tileset = this.map.addTilesetImage("home", "home");

    this.computers = this.map.createStaticLayer("grass", this.tileset, 0, 0);
    this.treesAndBuildings = this.map.createStaticLayer(
      "trees&buildings",
      this.tileset,
      0,
      0,
    );

    // this.desksAndChairs = this.map.createStaticLayer(
    //   "desks",
    //   this.tileset,
    //   0,
    //   0,
    // );
    // create the tilemap
    // this.map = this.make.tilemap({
    //   key: "office",
    //   tileWidth: 8,
    //   tileHeight: 8,
    //   width: 16,
    //   height: 16,
    // });
    // this.tileset = this.map.addTilesetImage("office-tileset", "office-pack");
    // this.computers = this.map.createStaticLayer(
    //   "computers",
    //   this.tileset,
    //   0,
    //   0,
    // );

    // this.desksAndChairs = this.map.createStaticLayer(
    //   "desks",
    //   this.tileset,
    //   0,
    //   0,
    // );
    // this.floorAndWalls = this.map.createStaticLayer(
    //   "floor&walls",
    //   this.tileset,
    //   500,
    //   500,
    // );
    // //add tileset image
    // this.tiles = this.map.addTilesetImage("office-tileset");
    // create layers (from tiled)
    // take this map, use these tiles, and place the map at these coordinates
    // this.backgroundLayer = this.map.createStaticLayer(
    //   "Background",
    //   this.tiles,
    //   0,
    //   0,
    // );
    // this.blockedLayer = this.map.createStaticLayer("Blocked", this.tiles, 0, 0);
    // set collision with blocked layer
    // this.blockedLayer.setCollisionByExclusion([-1]);
    // this.cameras.main.startFollow(this.player);
  }
}
