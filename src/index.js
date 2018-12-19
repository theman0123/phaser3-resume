import "phaser";
import config from "./config";
import BootScene from "./Scenes/Boot";
import WorldScene from "./Scenes/World";

class Game extends Phaser.Game {
  // placing config in constructor will break config
  constructor() {
    super(config);
    this.scene.add("Boot", BootScene);
    this.scene.add("World", WorldScene);
    // this.scene.add('Boot', BootScene);
    this.scene.start("Boot");
  }
}

window.game = new Game();
window.addEventListener("resize", event => {
  window.game.resize(window.innerWidth, window.innerHeight);
});
