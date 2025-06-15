info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`transparency16`, function () {
    sprites.destroy(little_kid)
})
browserEvents.R.onEvent(browserEvents.KeyEvent.Pressed, function () {
	
})
let little_kid: Sprite = null
scene.setBackgroundImage(assets.image`Cloudy Day`)
// background music, created by Taha Zaza
music.play(music.stringPlayable("C5 B A G A B C F ", 500), music.PlaybackMode.LoopingInBackground)
little_kid = sprites.create(assets.image`lil kid`, SpriteKind.Enemy)
tiles.setWallAt(tiles.getTileLocation(1, 160), true)
tiles.setCurrentTilemap(tilemap`level1`)
let mySprite: tiles.Location = sprites.create(assets.image`swords man`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
game.setGameOverEffect(true, effects.confetti)
little_kid.setPosition(randint(1, 160), randint(1, 120))
info.startCountdown(20)
