import "phaser";

export default class Spencer extends Phaser.GameObjects.Sprite {
  constructor(scene, texture) {
    // scene, x, y, texture, defaultFrame
    super(scene, 100, 100, texture, 0);
    this.scene = scene;

    // enable physics
    this.scene.physics.world.enable(this);
    // add our player to the scene
    this.scene.add.existing(this);
    // modify size
    this.setScale(3);
    //modify hit box
    this.body.setSize(10, 28, false);
    this.body.setOffset(12, 3);

    // player movement - by click and tween
    this.scene.input.on("pointerdown", (pointer, z) => {
      console.log("pointer", pointer, z, this);
      // don't allow too fast of movement by canceling input if distance is too great
      if (
        Math.abs(pointer.downX - this.x) > 250 ||
        Math.abs(pointer.downY - this.y) > 250
      ) {
        return;
      }
      if (pointer.downX > this.x) this.setFlipX(true);
      if (pointer.downX < this.x) this.setFlipX(false);

      this.play("spencer-walk", false);
      let spencerWalkingTween = this.scene.tweens.add({
        targets: this,
        duration: 500,
        x: pointer.downX,
        y: pointer.downY,
        paused: false,
        callbackScope: this,
        onComplete: function(tween, sprites) {
          this.play("spencer-sit");
        },
      });
    });
  }
}
