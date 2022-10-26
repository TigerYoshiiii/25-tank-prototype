input.onButtonPressed(Button.AB, function () {
    Left_fire = game.createSprite(0, Tank_1.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        Left_fire.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    Left_fire.delete()
})
let Left_fire: game.LedSprite = null
let Tank_1: game.LedSprite = null
Tank_1 = game.createSprite(0, 2)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && !(input.buttonIsPressed(Button.AB))) {
        Tank_1.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B) && !(input.buttonIsPressed(Button.AB))) {
        Tank_1.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
})
