// https://www.gameart2d.com/the-zombies-free-sprites.html
// https://www.gameart2d.com/free-graveyard-platformer-tileset.html
class SceneA extends Phaser.Scene {
  /** @type {Phaser.Tilemaps.Tilemap} */
  map
  /** @type {CustomSprite} */
  player
  /** @type {object} */
  playerStartPoint
  /** @type  {Phaser.Types.Input.Keyboard.CursorKeys} */
  cursors
  /** @type {boolean} */
  inPlay = false
  /** @type  {Phaser.Physics.Arcade.StaticGroup} */
  hearts
  /** @type  {Phaser.Physics.Arcade.Group} */
  bats
  /** @type {Phaser.Physics.Arcade.Collider} */
  batsCollider
  /** @type {Phaser.GameObjects.Image} */
  introScreen
  /** @type {Phaser.GameObjects.Image} */
  endScreen
  /** @type {number} */
  score = 0
  /** @type {Phaser.GameObjects.Text} */
  scoreText

  constructor() {
    super('SceneA')
  }
  preload() {
    // screens
    // images
    // tile data
    // spritesheets
  }
  create() {
    // background stuff
    // player stuff
    // enemies
    // collectibles
    // anims
    // controls
    // camera
    // end screen
    // score text
    // intro screen
  }
  update() {
  }
  collectHeart(player, heart) {
  }
  batAttack(player, bat) {
  }
  startGame() {
  }
  showEndScreen() {
  }
  restartGame() {
  }
  static FindPoint(map, layer, type, name) {
    var loc = map.findObject(layer, function (object) {
      if (object.type === type && object.name === name) {
        return object
      }
    })
    return loc
  }
  static FindPoints(map, layer, type) {
    var locs = map.filterObjects(layer, function (object) {
      if (object.type === type) {
        return object
      }
    })
    return locs
  }
}
