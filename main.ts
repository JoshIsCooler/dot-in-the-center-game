input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
basic.forever(function () {

})
basic.forever(function () {
    if (game.score() == 0) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(3000)
    } else if (game.score() == 1) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(1000)
    } else if (game.score() == 2) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(500)
    } else if (game.score() == 3) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(300)
    } else if (game.score() == 4) {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(100)
    } else {
        sprite.move(1)
        sprite.ifOnEdgeBounce()
        basic.pause(50)
    }
})