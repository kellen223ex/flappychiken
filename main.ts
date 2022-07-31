
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . 2 2 2 2 .
    . . . . . . . . . . . . 1 1 1 .
    . . . . . . . . . . . . 1 f 1 5
    . . . . . . . . . . . . 1 1 1 .
    . . . . . . . . . . . . 1 1 1 .
    . . . . . . . . . . 1 1 1 1 1 .
    . . . . . . . . . . 1 1 1 1 1 .
    . . . . . . . . . 1 1 1 1 1 1 .
    . 1 1 . . 1 1 1 1 1 1 1 1 1 1 .
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
    . 1 1 1 1 1 1 1 1 1 1 1 1 1 . .
    . . 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . . . . 1 1 1 1 1 1 1 . . . .
    . . . . . . . 4 . . . 4 . . . .
    . . . . . . . 4 . . . 4 . . . .
    . . . . . . 4 4 . . . 4 4 . . .
`, SpriteKind.Player)
mySprite.x = 20
mySprite.ay = 300 // vertical acceleration


controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
 mySprite.vy = -100
})


game.onUpdateInterval(1000, function() {
let projectile = sprites.createProjectileFromSide(img`
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    ccccccccccc77ccc
    ccccccccc77c77cc
    c7777cc7777777cc
    c77777777eee777c
    77ee7777777e777c
    77e77ee777e77777
    7ee777777eeeeeee
    7777777777777777
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    7777777777777777
    7777777777777777
    eeeee7777777eee7
    777eeeeeeeee77e7
    77777eee777eeee7
    7777777eeee77777
    7777777ccccccccc
    cc777ccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
    cccccccccccccccc
`, -100, 0)
projectile.y = Math.randomRange(50, 70)
})




sprites.onOverlap(SpriteKind.Player, SpriteKind. Projectile, function(sprite: Sprite, otherSprite: Sprite) {
    game.over()
})

game.onUpdate(function() {
 if(mySprite.top < 0 || mySprite.bottom>120)
 game.over()
    info.changeScoreBy(1)
})







