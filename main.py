def on_overlap_tile(sprite, location):
    sprites.destroy(little_kid)
scene.on_overlap_tile(SpriteKind.enemy,
    assets.tile("""
        transparency16
        """),
    on_overlap_tile)

little_kid: Sprite = None
scene.set_background_image(assets.image("""
    Cloudy Day
    """))
# background music, created by Taha Zaza
music.play(music.string_playable("C5 B A G A B C F ", 500),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
little_kid = sprites.create(assets.image("""
    lil kid
    """), SpriteKind.enemy)
tiles.set_wall_at(tiles.get_tile_location(1, 160), True)
tiles.set_current_tilemap(tilemap("""
    level1
    """))
mySprite = sprites.create(assets.image("""
    swords man
    """), SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)
game.set_game_over_effect(True, effects.confetti)
little_kid.set_position(randint(1, 160), randint(1, 120))