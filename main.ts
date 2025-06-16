info.onCountdownEnd(function () {
    game.gameOver(false)
})
info.onScore(500, function () {
    game.gameOver(true)
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.setScore(info.score() + 20)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(little_kid, effects.spray, 500)
    info.stopCountdown()
})
let little_kid: Sprite = null
scene.setBackgroundImage(assets.image`Cloudy Day`)
info.setScore(0.0001)
// background music, created by Taha Zaza
music.play(music.stringPlayable("C5 B A G A B C F ", 500), music.PlaybackMode.LoopingInBackground)
for (let index = 0; index < 4; index++) {
    little_kid = sprites.create(assets.image`lil kid1`, SpriteKind.Enemy)
    little_kid.setVelocity(randint(1, 50), randint(1, 50))
    little_kid.setPosition(randint(1, 160), randint(1, 120))
    pause(2000)
    little_kid = sprites.create(assets.image`lil kid1`, SpriteKind.Enemy)
    little_kid.setVelocity(randint(1, 50), randint(1, 50))
    little_kid.setPosition(randint(1, 160), randint(1, 120))
}
tiles.setWallAt(tiles.getTileLocation(1, 160), true)
let mySprite = sprites.create(assets.image`balloon swords man`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
game.setGameOverEffect(true, effects.confetti)
game.setGameOverEffect(false, effects.dissolve)
info.startCountdown(5)
