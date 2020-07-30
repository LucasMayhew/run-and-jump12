namespace SpriteKind {
    export const coin = SpriteKind.create()
    export const thepet = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const minyboss221 = SpriteKind.create()
    export const life1 = SpriteKind.create()
    export const mushorm = SpriteKind.create()
    export const morei = SpriteKind.create()
    export const boss111 = SpriteKind.create()
    export const fire = SpriteKind.create()
    export const woter = SpriteKind.create()
    export const Cheepcheep = SpriteKind.create()
    export const firethay = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        if (sprites.readDataNumber(otherSprite, "life") <= 0) {
            boss_fight = 2
            otherSprite.destroy(effects.fire, 100)
            music.baDing.play()
            info.changeScoreBy(1)
            info.changeLifeBy(1)
            for (let index = 0; index < 36; index++) {
                mySprite.y += -1
                pause(1)
            }
            game.over(true)
        } else {
            sprites.setDataSprite(otherSprite, "imig", sprites.create(otherSprite.image.clone(), SpriteKind.coin))
            sprites.readDataSprite(otherSprite, "imig").setFlag(SpriteFlag.Invisible, true)
            otherSprite.image.fill(2)
            for (let index = 0; index < 36; index++) {
                mySprite.y += -1
                pause(1)
            }
            otherSprite.follow(mySprite, -10)
            if (Math.percentChance(50)) {
                for (let index = 0; index < 36; index++) {
                    otherSprite.vx += -1
                    pause(1)
                }
            } else {
                for (let index = 0; index < 36; index++) {
                    otherSprite.vx += 1
                    pause(1)
                }
            }
            otherSprite.follow(mySprite, 60)
            otherSprite.setImage(sprites.readDataSprite(otherSprite, "imig").image.clone())
            sprites.changeDataNumberBy(otherSprite, "life", -1)
            sprites.readDataSprite(otherSprite, "imig").destroy()
            sprites.setDataSprite(otherSprite, "cion", sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.coin))
            animation.runImageAnimation(
            sprites.readDataSprite(otherSprite, "cion"),
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
            sprites.readDataSprite(otherSprite, "cion").x = otherSprite.x
            sprites.readDataSprite(otherSprite, "cion").y = otherSprite.y
        }
    } else {
        info.changeLifeBy(-1)
        music.powerDown.playUntilDone()
    }
})
function pet () {
    leist2 = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . 4 4 4 . . . . 4 4 4 . . . . 
        . 4 5 5 5 e . . e 5 5 5 4 . . . 
        4 5 5 5 5 5 e e 5 5 5 5 5 4 . . 
        4 5 5 4 4 5 5 5 5 4 4 5 5 4 . . 
        e 5 4 4 5 5 5 5 5 5 4 4 5 e . . 
        . e e 5 5 5 5 5 5 5 5 e e . . . 
        . . e 5 f 5 5 5 5 f 5 e . . . . 
        . . f 5 5 5 4 4 5 5 5 f . . f f 
        . . f 4 5 5 f f 5 5 6 f . f 5 f 
        . . . f 6 6 6 6 6 6 4 4 f 5 5 f 
        . . . f 4 5 5 5 5 5 5 4 4 5 f . 
        . . . f 5 5 5 5 5 4 5 5 f f . . 
        . . . f 5 f f f 5 f f 5 f . . . 
        . . . f f . . f f . . f f . . . 
        `,
    img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . b 5 5 b . . . 
        . . . . . . b b b b b b . . . . 
        . . . . . b b 5 5 5 5 5 b . . . 
        . b b b b b 5 5 5 5 5 5 5 b . . 
        . b d 5 b 5 5 5 5 5 5 5 5 b . . 
        . . b 5 5 b 5 d 1 f 5 d 4 f . . 
        . . b d 5 5 b 1 f f 5 4 4 c . . 
        b b d b 5 5 5 d f b 4 4 4 4 b . 
        b d d c d 5 5 b 5 4 4 4 4 4 4 b 
        c d d d c c b 5 5 5 5 5 5 5 b . 
        c b d d d d d 5 5 5 5 5 5 5 b . 
        . c d d d d d d 5 5 5 5 5 d b . 
        . . c b d d d d d 5 5 5 b b . . 
        . . . c c c c c c c c b b . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c c . . . 
        . . . . . . c c 5 5 5 5 5 c . . 
        . . . . . c 5 5 5 5 5 5 5 5 c . 
        . . . . c b b b b b b 5 5 5 c . 
        . . . . c 1 1 b b 1 b b c c . . 
        . . . c 1 1 1 b b 1 1 1 c . . . 
        . . . c 1 1 1 1 b 1 1 1 c . c c 
        . . . c d 1 1 1 b 1 1 1 b b 5 c 
        . . c c d 1 c 1 b 1 b 1 5 5 5 c 
        . c c d d 1 1 1 1 1 b 1 b b 5 c 
        f d d d 1 1 1 1 1 b b 1 f . c c 
        f f f 1 1 1 1 1 1 b b b f . . . 
        . . . f f 1 1 1 b b b 5 5 f . . 
        . . . . . f f f 5 5 5 5 5 f . . 
        . . . . . . . . f f f f f f . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . c c c c . . . . 
        . . . . . . c c d d d d c . . . 
        . . . . . c c c c c c d c . . . 
        . . . . c c 4 4 4 4 d c c . . . 
        . . . c 4 d 4 4 4 4 4 1 c . c c 
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
        . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
        f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
        f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
        f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
        . f 4 4 4 4 1 c 4 f 4 d f f f f 
        . . f f 4 d 4 4 f f 4 c f c . . 
        . . . . f f 4 4 4 4 c d b c . . 
        . . . . . . f f f f d d d c . . 
        . . . . . . . . . . c c c . . . 
        `,
    img`
        . . . . . . . . . . . . . c c f f f . . . . . . . . . . . . . . 
        . . . . . . . . . . . c c d d b c f . . . . . . . . . . . . . . 
        . . . . . . . . . . c c d d b b f . . . . . . . . . . . . . . . 
        . . . . . . . . . . f c c b b c f . . . . . . . . . . . . . . . 
        . . . . . f f f f f c c c c c c f f . . . . . . . . . c c c . . 
        . . . f f b b b b b b b c b b b b c f f f . . . . c c b b c . . 
        . . f b b b b b b b b c b c b b b b c c c f f . c d b b c . . . 
        f f b b b b b b f f b b c b c b b b c c c c c f c d b b f . . . 
        f b c b b b 1 1 f f 1 b c b b b b b c c c c c f f b b f . . . . 
        f b b b 1 1 1 1 1 1 1 1 b b b b b c c c c c c c b b c f . . . . 
        . f b 1 1 1 3 3 c c 1 1 b b b b c c c c c c c c c c c f . . . . 
        . . f c c c 3 1 c 1 1 1 b b b c c c c c b d b f f b b c f . . . 
        . . . f c 1 3 c 1 1 1 c b b b f c d d d d c c . . f b b f . . . 
        . . . . f c c c 1 1 1 f b d b b c c d c c . . . . . f b b f . . 
        . . . . . . . . c c c c f c d b b c c . . . . . . . . f f f . . 
        . . . . . . . . . . . . . f f f f f . . . . . . . . . . . . . . 
        `,
    img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . . . . c c . . . 
        . . . . . . . . . . . . . . . c c c c 6 3 c . . 
        . . . . . . . . . . . . . . c 6 3 3 3 3 6 c . . 
        . . . . . . . . . . c c . c 6 c c 3 3 3 3 3 c . 
        . . . . . . . . . b 5 5 c 6 c 5 5 c 3 3 3 3 3 c 
        . . . . . . . . . f f 5 c 6 c 5 f f 3 3 3 3 3 c 
        . . . . . . . . . f f 5 c 6 c 5 f f 6 3 3 3 c c 
        . . . . . . . . . b 5 5 3 c 3 5 5 c 6 6 6 6 c c 
        . . . . . . . . . . b 5 5 3 5 5 c 3 3 3 3 3 3 c 
        . . . . . . . . . c c 5 5 5 5 5 b c c 3 3 3 3 c 
        . . . . . . . . c 5 5 4 5 5 5 4 b 5 5 c 3 3 c . 
        . . . . . . . . b 5 4 b 4 4 4 4 b b 5 c b b . . 
        . . . . . . . . c 4 5 5 b 4 b 5 5 5 4 c 4 5 b . 
        . . . . . . . . c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
        . . . . . . . . c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
        . . . . . . . . . c c c c c c c c c . . c c c . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . d . . . . . . . . 
        . . . . . . . d d . . . . . . . 
        . . . . . . . d d d . . . . . . 
        . . . . . . . d d d d . . . . . 
        d . . . . . . d 1 f d . . . . . 
        d d . . . . . d 1 f d . . . . . 
        . d . . . . . d d d d . . . . . 
        . d . . . . . . d . . . . . . . 
        . d d d d d d d d . . . . . . . 
        . . . d d d d d d d . . . . . . 
        . . . d . . . . d . . . . . . . 
        `
    ]
    pet12 = sprites.create(leist2[game.askForNumber("pet", 1)], SpriteKind.thepet)
    scene.placeOnRandomTile(pet12, 1)
    pet12.follow(mySprite, 50)
}
scene.onHitWall(SpriteKind.minyboss221, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.setImage(img`
            . . . . 2 2 2 2 2 e . . . . . . 
            . . . 2 2 2 2 d 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 e f f c c . . . 
            . . e e 2 2 e f f f f b c . . . 
            . e e e f e 2 b f f f d c . . . 
            e e 2 2 d f 2 1 1 1 1 b c . . . 
            e e 2 2 d f e e c c c . . . . . 
            b 1 1 d e 2 2 e e c . . . . . . 
            . f f e 2 2 2 2 e . . . . . . . 
            . . f f d d 2 2 f f d d . . . . 
            . . f f d d e e f f d d . . . . 
            . . . f f f f . . . . . . . . . 
            . . e e e f f f . . . . . . . . 
            . . e e e e f f f . . . . . . . 
            `)
        sprite.vx = 90
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -90
        sprite.setImage(img`
            . . . . 2 2 2 2 2 e . . . . . . 
            . . . 2 2 2 2 d 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 2 2 e . . . . . 
            . . e 2 2 2 2 2 e f f c c . . . 
            . . e e 2 2 e f f f f b c . . . 
            . e e e f e 2 b f f f d c . . . 
            e e 2 2 d f 2 1 1 1 1 b c . . . 
            e e 2 2 d f e e c c c . . . . . 
            b 1 1 d e 2 2 e e c . . . . . . 
            . f f e 2 2 2 2 e . . . . . . . 
            . . f f d d 2 2 f f d d . . . . 
            . . f f d d e e f f d d . . . . 
            . . . f f f f . . . . . . . . . 
            . . e e e f f f . . . . . . . . 
            . . e e e e f f f . . . . . . . 
            `)
        sprite.image.flipX()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.minyboss221, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        if (sprites.readDataNumber(otherSprite, "life") <= 0) {
            otherSprite.destroy(effects.fire, 100)
            music.baDing.play()
            info.changeScoreBy(1)
            info.changeLifeBy(1)
            for (let index = 0; index < 36; index++) {
                mySprite.y += -1
                pause(1)
            }
        } else {
            sprites.setDataSprite(otherSprite, "imig", sprites.create(otherSprite.image.clone(), SpriteKind.coin))
            sprites.readDataSprite(otherSprite, "imig").setFlag(SpriteFlag.Invisible, true)
            otherSprite.image.fill(2)
            for (let index = 0; index < 36; index++) {
                mySprite.y += -1
                pause(1)
            }
            otherSprite.setImage(sprites.readDataSprite(otherSprite, "imig").image.clone())
            sprites.changeDataNumberBy(otherSprite, "life", -1)
            sprites.readDataSprite(otherSprite, "imig").destroy()
            sprites.setDataSprite(otherSprite, "cion", sprites.create(img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `, SpriteKind.coin))
            animation.runImageAnimation(
            sprites.readDataSprite(otherSprite, "cion"),
            [img`
                . . b b b b . . 
                . b 5 5 5 5 b . 
                b 5 d 3 3 d 5 b 
                b 5 3 5 5 1 5 b 
                c 5 3 5 5 1 d c 
                c d d 1 1 d d c 
                . f d d d d f . 
                . . f f f f . . 
                `,img`
                . . b b b . . . 
                . b 5 5 5 b . . 
                b 5 d 3 d 5 b . 
                b 5 3 5 1 5 b . 
                c 5 3 5 1 d c . 
                c 5 d 1 d d c . 
                . f d d d f . . 
                . . f f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 d 1 5 b . 
                . b 5 3 1 5 b . 
                . c 5 3 1 d c . 
                . c 5 1 d d c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . . b 1 1 b . . 
                . . b 5 5 b . . 
                . . b d d b . . 
                . . c d d c . . 
                . . c 3 3 c . . 
                . . . f f . . . 
                `,img`
                . . . b b . . . 
                . . b 5 5 b . . 
                . b 5 1 d 5 b . 
                . b 5 1 3 5 b . 
                . c d 1 3 5 c . 
                . c d d 1 5 c . 
                . . f d d f . . 
                . . . f f . . . 
                `,img`
                . . . b b b . . 
                . . b 5 5 5 b . 
                . b 5 d 3 d 5 b 
                . b 5 1 5 3 5 b 
                . c d 1 5 3 5 c 
                . c d d 1 d 5 c 
                . . f d d d f . 
                . . . f f f . . 
                `],
            100,
            true
            )
            sprites.readDataSprite(otherSprite, "cion").x = otherSprite.x
            sprites.readDataSprite(otherSprite, "cion").y = otherSprite.y
            for (let index = 0; index < 26; index++) {
                sprites.readDataSprite(otherSprite, "cion").y += 1
                pause(1)
            }
        }
    } else {
        info.changeLifeBy(-1)
        music.powerDown.playUntilDone()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.ay = 100
        for (let index = 0; index < 35; index++) {
            mySprite.y += -1
        }
    } else {
        if (mySprite.isHittingTile(CollisionDirection.Left)) {
            for (let index = 0; index < 15; index++) {
                for (let index = 0; index < 3; index++) {
                    mySprite.x += 1
                }
                for (let index = 0; index < 3; index++) {
                    mySprite.y += -1
                }
            }
        } else {
            if (mySprite.isHittingTile(CollisionDirection.Right)) {
                for (let index = 0; index < 15; index++) {
                    for (let index = 0; index < 3; index++) {
                        mySprite.x += -1
                    }
                    for (let index = 0; index < 3; index++) {
                        mySprite.y += -1
                    }
                }
            }
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(level >= 17)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 2 2 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `)
    } else {
        if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
            mySprite.setImage(img`
                . . . 2 2 2 2 2 2 . . . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . e e e 4 4 e 4 4 . . . . . 
                . e 4 e 4 4 4 e 4 4 4 4 . . . 
                . e 4 e e 4 4 4 e 4 4 4 4 . . 
                . e e 4 4 4 4 e e e e e . . . 
                . . . 4 4 4 4 4 4 4 4 . . . . 
                . . e e 2 e e e e . . . . . . 
                . e e e 2 e e 2 e e e e . . . 
                e e e e 2 2 2 2 e e e e e . . 
                4 4 e 2 4 2 2 4 2 e 4 4 4 . . 
                4 4 4 2 2 2 2 2 2 4 4 4 4 . . 
                4 4 2 2 2 2 2 2 2 2 4 4 4 . . 
                . . 2 2 2 2 . 2 2 2 2 . . . . 
                . e e e e . . . e e e e . . . 
                e e e e e . . . e e e e e . . 
                . . . . . . . . . . . . . . . 
                `)
            mySprite.image.flipX()
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.firethay, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.powerDown.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.mushorm, function (sprite, otherSprite) {
    otherSprite.destroy(effects.hearts, 100)
    music.baDing.play()
    info.changeLifeBy(1)
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fire, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
    music.powerDown.playUntilDone()
})
scene.onHitWall(SpriteKind.Cheepcheep, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
        sprite.setImage(img`
            . . . . . . . . 4 4 4 4 . . . 
            . . . . . . 4 4 4 4 4 . . . . 
            . . . . . 4 2 2 2 2 2 2 . . . 
            . . . . . 2 2 2 2 2 1 1 2 1 . 
            . 1 1 1 2 2 2 2 2 1 1 1 1 1 1 
            1 1 1 1 1 2 2 2 2 1 1 2 1 2 1 
            1 1 1 1 1 1 2 2 2 1 1 2 1 2 1 
            . 1 1 1 1 1 1 2 2 1 1 1 1 1 1 
            . 1 1 1 1 1 1 2 2 2 1 1 2 1 . 
            4 . 2 2 2 2 2 2 2 2 2 2 4 4 4 
            4 4 2 2 2 2 2 2 2 2 2 4 4 2 . 
            4 4 2 2 2 2 2 2 2 2 4 4 2 . . 
            . 4 2 2 2 2 2 2 1 1 4 4 2 . . 
            . 4 4 2 2 2 2 1 1 1 4 4 4 4 . 
            . . 4 . 2 1 1 1 1 1 1 1 1 . . 
            . . . . . . 1 1 1 1 1 . . . . 
            `)
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
        sprite.setImage(img`
            . . . 4 4 4 4 . . . . . . . . 
            . . . . 4 4 4 4 4 . . . . . . 
            . . . 2 2 2 2 2 2 4 . . . . . 
            . 1 2 1 1 2 2 2 2 2 . . . . . 
            1 1 1 1 1 1 2 2 2 2 2 1 1 1 . 
            1 2 1 2 1 1 2 2 2 2 1 1 1 1 1 
            1 2 1 2 1 1 2 2 2 1 1 1 1 1 1 
            1 1 1 1 1 1 2 2 1 1 1 1 1 1 . 
            . 1 2 1 1 2 2 2 1 1 1 1 1 1 . 
            4 4 4 2 2 2 2 2 2 2 2 2 2 . 4 
            . 2 4 4 2 2 2 2 2 2 2 2 2 4 4 
            . . 2 4 4 2 2 2 2 2 2 2 2 4 4 
            . . 2 4 4 1 1 2 2 2 2 2 2 4 . 
            . 4 4 4 4 1 1 1 2 2 2 2 4 4 . 
            . . 1 1 1 1 1 1 1 1 2 . 4 . . 
            . . . . 1 1 1 1 1 . . . . . . 
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(level >= 17)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . 4 d d e 4 4 4 e f . . . 
            . . . . e d d e 2 2 2 2 f . . . 
            . . . . f e e f 4 4 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `)
    } else {
        if (!(mySprite.isHittingTile(CollisionDirection.Bottom))) {
            mySprite.setImage(img`
                . . . 2 2 2 2 2 2 . . . . . . 
                . . 2 2 2 2 2 2 2 2 2 2 . . . 
                . . e e e 4 4 e 4 4 . . . . . 
                . e 4 e 4 4 4 e 4 4 4 4 . . . 
                . e 4 e e 4 4 4 e 4 4 4 4 . . 
                . e e 4 4 4 4 e e e e e . . . 
                . . . 4 4 4 4 4 4 4 4 . . . . 
                . . e e 2 e e e e . . . . . . 
                . e e e 2 e e 2 e e e e . . . 
                e e e e 2 2 2 2 e e e e e . . 
                4 4 e 2 4 2 2 4 2 e 4 4 4 . . 
                4 4 4 2 2 2 2 2 2 4 4 4 4 . . 
                4 4 2 2 2 2 2 2 2 2 4 4 4 . . 
                . . 2 2 2 2 . 2 2 2 2 . . . . 
                . e e e e . . . e e e e . . . 
                e e e e e . . . e e e e e . . 
                . . . . . . . . . . . . . . . 
                `)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.woter, function (sprite, otherSprite) {
    sprite.ay = 20
    if (controller.A.isPressed()) {
        if (level >= 34) {
            for (let index = 0; index < 4; index++) {
                mySprite.y += -1
                pause(1)
            }
        } else {
            for (let index = 0; index < 16; index++) {
                mySprite.y += -1
                pause(1)
            }
        }
    }
})
function doSomething () {
    mySprite3 = image.create(20, 20)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), randint(10, 20), randint(10, 20), 8)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), randint(10, 20), randint(10, 20), 5)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), randint(10, 20), randint(10, 20), 2)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), randint(10, 20), randint(10, 20), 13)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), randint(10, 20), randint(10, 20), 8)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), randint(10, 20), randint(10, 20), 11)
    mySprite3.fillRect(randint(1, 50), randint(40, 50), randint(10, 20), randint(10, 20), 10)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), randint(10, 20), randint(10, 20), 6)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), 1, 1, 1)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), 1, 1, 13)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), 1, 1, 2)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), 1, 1, 12)
    mySprite3.fillRect(randint(1, 10), randint(1, 10), 1, 1, 3)
    mySprite3.fillRect(randint(1, 50), randint(40, 50), randint(0, 20), 1, 4)
    mySprite3.fillRect(randint(1, 30), randint(40, 50), 50, 1, 10)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
function junp () {
    for (let value of sprites.allOfKind(SpriteKind.woter)) {
        if (level >= 17 && mySprite.overlapsWith(value)) {
            for (let index = 0; index < 20; index++) {
                for (let index = 0; index < 5; index++) {
                    mySprite.y += -1
                }
                pause(1)
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Cheepcheep, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.fire, 100)
        music.baDing.play()
        info.changeScoreBy(1)
        for (let index = 0; index < 36; index++) {
            mySprite.y += -1
            pause(1)
        }
    } else {
        info.changeLifeBy(-1)
        music.powerDown.playUntilDone()
    }
})
scene.onHitTile(SpriteKind.Player, 4, function (sprite) {
    game.over(false)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.morei, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.fire, 100)
        music.baDing.play()
        info.changeScoreBy(1)
        for (let index = 0; index < 36; index++) {
            mySprite.y += -1
            pause(1)
        }
    } else {
        info.changeLifeBy(-1)
        music.powerDown.playUntilDone()
    }
})
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    if (level == 10) {
        info.setLife(4)
        scene.setTile(15, img`
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f 1 1 e e e e e e e e e e e e f 
            f 1 e 1 e e 1 1 e e e 1 e e 1 f 
            f 1 1 e e 1 e e 1 e 1 e e 1 e f 
            f 1 e 1 e 1 e e 1 e e 1 e e 1 f 
            f 1 1 e e e 1 1 e e 1 e e 1 e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            `, false)
        for (let value2 of scene.getTilesByType(2)) {
            theboss = sprites.create(img`
                . . . . 1 1 . . 1 1 . . . . . . 
                . . . . 5 1 5 5 1 5 . . . . . . 
                . . . . 5 5 5 5 5 5 . . . . . . 
                . b . . 1 1 1 1 1 1 . . . . . . 
                . b . . 1 1 1 1 1 1 . . . . . . 
                . b . . 1 d 1 1 d 1 . . . . . . 
                . b . . 1 d 1 1 d 1 . . . . . . 
                . b . . 1 1 1 1 1 1 . . . . . . 
                . b . . 1 1 d d 1 1 . . . . . . 
                b b b . 1 d 1 1 d 1 . b b b . . 
                . b 1 1 1 1 1 1 1 1 1 b b b . . 
                . b . . 1 1 1 1 1 1 . . b . . . 
                . . . . 1 1 1 1 1 1 . . . . . . 
                . . . . 1 1 1 1 1 1 1 . . . . . 
                . . . . . 1 1 1 1 1 1 1 . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.boss)
            boss_fight = 1
            scene.place(value2, theboss)
            sprites.setDataNumber(theboss, "life", 2)
            theboss.follow(mySprite, 50)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(5)
    music.baDing.play()
})
scene.onHitWall(SpriteKind.mushorm, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.boss111, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.powerDown.playUntilDone()
})
scene.onHitWall(SpriteKind.morei, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
    }
})
function mareo () {
    if (level >= 17) {
        if (level == 20 || level == 32 || level == 28) {
            scene.setBackgroundColor(12)
        }
        mySprite.setImage(img`
            . . . 2 2 2 2 2 2 . . . . . . 
            . . 2 2 2 2 2 2 2 2 2 2 . . . 
            . . e e e 4 4 e 4 4 . . . . . 
            . e 4 e 4 4 4 e 4 4 4 4 . . . 
            . e 4 e e 4 4 4 e 4 4 4 4 . . 
            . e e 4 4 4 4 e e e e e . . . 
            . . . 4 4 4 4 4 4 4 4 . . . . 
            . . e e 2 e e e e . . . . . . 
            . e e e 2 e e 2 e e e e . . . 
            e e e e 2 2 2 2 e e e e e . . 
            4 4 e 2 4 2 2 4 2 e 4 4 4 . . 
            4 4 4 2 2 2 2 2 2 4 4 4 4 . . 
            4 4 2 2 2 2 2 2 2 2 4 4 4 . . 
            . . 2 2 2 2 . 2 2 2 2 . . . . 
            . e e e e . . . e e e e . . . 
            e e e e e . . . e e e e e . . 
            . . . . . . . . . . . . . . . 
            `)
        scene.setTile(8, img`
            e f e e e e e e e f e e e e e e 
            e f e e e e e e e f e e e e e e 
            e f e e e e e e e f e e e e e e 
            f f f f f f f f f f f f f f f f 
            e e e e e f e e e e e e e f e e 
            e e e e e f e e e e e e e f e e 
            e e e e e f e e e e e e e f e e 
            f f f f f f f f f f f f f f f f 
            e f e e e e e e e f e e e e e e 
            e f e e e e e e e f e e e e e e 
            e f e e e e e e e f e e e e e e 
            f f f f f f f f f f f f f f f f 
            e e e e e f e e e e e e e f e e 
            e e e e e f e e e e e e e f e e 
            e e e e e f e e e e e e e f e e 
            f f f f f f f f f f f f f f f f 
            `, true)
        scene.setTile(15, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, true)
        for (let value5 of scene.getTilesByType(15)) {
            mySprite2 = sprites.create(img`
                f f f f f f f f f f f f f f f f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
                f 5 5 5 5 4 4 4 4 4 4 f 5 5 5 f 
                f 5 5 5 5 4 4 4 4 4 4 f 5 5 5 f 
                f 5 5 5 5 4 4 f 5 4 4 f 5 5 5 f 
                f 5 5 5 5 4 4 f 5 4 4 f 5 5 5 f 
                f 5 5 5 5 5 5 5 5 4 4 f 5 5 5 f 
                f 5 5 5 5 5 5 4 4 4 4 f 5 5 5 f 
                f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
                f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
                f 5 5 5 5 5 5 4 4 f 5 5 5 5 5 f 
                f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f f f f f f f f f f f f f f f f 
                `, SpriteKind.life1)
            scene.place(value5, mySprite2)
            mySprite2.y += 1
        }
        for (let value22 of scene.getTilesByType(2)) {
            mySprite2 = sprites.create(img`
                . . . . . . 2 2 2 2 . . . . . . 
                . . . . 2 2 3 3 3 3 2 e . . . . 
                . . . 2 3 d 1 1 d d 3 2 e . . . 
                . . 2 3 1 d 3 3 3 d d 3 e . . . 
                . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
                . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
                2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
                2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
                2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
                2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
                e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
                e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
                e 3 d 3 3 1 d d 3 d 1 b b e e . 
                . e 3 1 1 d d 1 1 1 b b e e e . 
                . . e 3 3 3 3 3 3 b e e e e . . 
                . . . e e e e e e e e e e . . . 
                `, SpriteKind.morei)
            mySprite2.image.fill(0)
            animation.runImageAnimation(
            mySprite2,
            [img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                . . 4 f f 4 4 4 4 4 4 f f 4 . . 
                . 4 4 4 d f 4 4 4 4 f d 4 4 4 . 
                . 4 4 4 d f f f f f f d 4 4 4 . 
                4 4 4 4 d f d 4 4 d f d 4 4 4 4 
                4 4 4 4 d d d 4 4 d d d 4 4 4 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . 4 4 4 4 d d d d d d 4 4 4 4 . 
                . . . . d d d d d d d d . . . . 
                . . f f d d d d d d d d . . . . 
                . f f f f f d d d d d f f . . . 
                . f f f f f f d d d f f f . . . 
                . . f f f f f . . f f f . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . 4 4 4 4 . . . . . . 
                . . . . . 4 4 4 4 4 4 . . . . . 
                . . . . 4 4 4 4 4 4 4 4 . . . . 
                . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                . . 4 f f 4 4 4 4 4 4 f f 4 . . 
                . 4 4 4 d f 4 4 4 4 f d 4 4 4 . 
                . 4 4 4 d f f f f f f d 4 4 4 . 
                4 4 4 4 d f d 4 4 d f d 4 4 4 4 
                4 4 4 4 d d d 4 4 d d d 4 4 4 4 
                4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
                . 4 4 4 4 d d d d d d 4 4 4 4 . 
                . . . . d d d d d d d d . . . . 
                . . . . d d d d d d d d f f . . 
                . . . f f d d d d d f f f f f . 
                . . . f f f d d d f f f f f f . 
                . . . . f f f . . f f f f f . . 
                . . . . . . . . . . . . . . . . 
                `],
            500,
            true
            )
            scene.place(value22, mySprite2)
            mySprite2.ay = 100
            if (Math.percentChance(50)) {
                mySprite2.vx = 50
            } else {
                mySprite2.vx = -50
            }
        }
        for (let value3 of scene.getTilesByType(3)) {
            boss121212 = sprites.create(img`
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 7 7 1 1 1 4 . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 7 7 7 1 1 4 4 . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . 1 1 7 7 7 7 4 4 7 . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . 4 . . 7 1 1 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . 4 f 4 7 7 1 1 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . 
                . . . . . 4 4 4 1 1 1 7 7 7 4 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . 
                . . . . . 4 4 4 4 1 7 7 7 4 4 4 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . 
                . . . . . 1 4 4 4 7 7 4 4 1 7 4 7 7 7 7 1 1 7 7 7 1 . . . . . . . . . . . . . . . 
                . . . . . . 1 . 4 4 4 4 7 7 7 4 7 7 7 7 1 1 7 7 1 1 4 7 . . . . . . . . . . . . . 
                . . . . . . 1 . 1 1 7 1 7 7 1 4 7 7 7 7 1 1 7 1 1 1 4 4 7 1 1 1 . . . . . . . . . 
                . . . . . . . . . 1 . . . 7 4 4 7 7 7 1 1 1 7 7 1 4 4 7 7 1 1 4 . . . . . . . . . 
                . . . . . . . . . . . . . 1 4 4 7 7 1 1 1 7 7 7 7 7 7 7 7 7 4 4 7 1 . . . . . . . 
                . . . . . . . . . . . . . 4 4 7 7 1 1 1 7 7 7 7 7 7 7 7 7 7 7 7 7 1 . . . . . . . 
                . . . . . . . . . . . 1 4 4 4 7 7 1 1 1 7 7 7 7 7 7 1 1 1 7 7 7 7 7 . . . . . . . 
                . . . . . . . . . . . . 4 4 . . 7 7 1 1 1 1 1 1 7 7 1 1 4 7 7 7 1 1 1 . . . . . . 
                . . . . . . . . . . . . . . . . . . 7 7 4 4 4 1 1 7 7 4 4 7 7 7 1 1 4 . . . . . . 
                . . . . . . . . . . . . . . 4 4 4 . . 1 f 4 4 4 1 1 7 7 7 7 7 7 7 4 4 . . . . . . 
                . . . . . . . . . . . . . 4 4 1 f 4 4 4 f 1 4 4 7 1 7 7 7 7 7 7 7 7 7 1 . . . . . 
                . . . . . . . . . . . . . 4 4 f f 4 4 4 4 f f 7 7 1 7 7 7 1 1 1 7 7 7 4 1 . . . . 
                . . . . . . . . . . . . . 4 1 f 4 4 4 4 4 4 1 7 7 1 1 7 7 1 1 4 7 7 7 . . . . . . 
                . . . . . . . . . . . . . 4 f f 4 4 4 4 4 7 7 7 7 1 1 7 7 7 4 4 7 7 1 1 . . . . . 
                . . . . . . . . . . . . . . 1 f 4 4 4 4 4 7 7 7 7 1 1 7 7 7 7 7 7 7 1 1 1 . . . . 
                . . . . . . . . . . . . . . f f 1 4 4 4 . 7 7 7 7 7 1 7 7 7 7 1 1 7 4 4 . . . . . 
                . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 1 1 7 7 7 4 7 7 4 7 . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 1 1 1 7 7 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 1 1 1 1 7 7 7 7 . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . 4 7 7 7 7 7 7 1 1 1 1 1 1 1 . . . . 
                . . . . . . . . . . . . . . . . . . . . . . 1 1 4 4 7 7 4 4 4 4 1 1 1 1 1 . . . . 
                . . . . . . . . . . . . . . . . . . . . . 1 1 1 4 4 4 4 4 4 4 4 4 4 1 1 . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 4 4 1 1 4 4 4 4 . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 4 1 1 1 4 4 4 4 4 . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                `, SpriteKind.boss111)
            scene.place(value3, boss121212)
            boss121212.ay = 100
        }
        for (let value53 of scene.getTilesByType(13)) {
            mySprite2 = sprites.create(img`
                . . . 4 4 4 4 . . . . . . . . 
                . . . . 4 4 4 4 4 . . . . . . 
                . . . 2 2 2 2 2 2 4 . . . . . 
                . 1 2 1 1 2 2 2 2 2 . . . . . 
                1 1 1 1 1 1 2 2 2 2 2 1 1 1 . 
                1 2 1 2 1 1 2 2 2 2 1 1 1 1 1 
                1 2 1 2 1 1 2 2 2 1 1 1 1 1 1 
                1 1 1 1 1 1 2 2 1 1 1 1 1 1 . 
                . 1 2 1 1 2 2 2 1 1 1 1 1 1 . 
                4 4 4 2 2 2 2 2 2 2 2 2 2 . 4 
                . 2 4 4 2 2 2 2 2 2 2 2 2 4 4 
                . . 2 4 4 2 2 2 2 2 2 2 2 4 4 
                . . 2 4 4 1 1 2 2 2 2 2 2 4 . 
                . 4 4 4 4 1 1 1 2 2 2 2 4 4 . 
                . . 1 1 1 1 1 1 1 1 2 . 4 . . 
                . . . . 1 1 1 1 1 . . . . . . 
                `, SpriteKind.Cheepcheep)
            mySprite2.vx = -50
            scene.place(value53, mySprite2)
            mySprite2 = sprites.create(img`
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                `, SpriteKind.woter)
            scene.place(value53, mySprite2)
        }
        for (let value52 of scene.getTilesByType(6)) {
            mySprite2 = sprites.create(img`
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
                `, SpriteKind.woter)
            scene.place(value52, mySprite2)
        }
        if (level == 30) {
            for (let value54 of scene.getTilesByType(14)) {
                scene.setBackgroundColor(12)
                scene.setTile(14, img`
                    b d d d d d d c b d d d d d d c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b b d b b b b b b b 
                    c c c c c c b a c c c c c c b a 
                    b d d d d d d c b d d d d d d c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b c d b b b b b b c 
                    d b b b b b b b d b b b b b b b 
                    c c c c c c b a b c c c c c c a 
                    `, true)
                mySprite2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . f f 1 1 1 1 f f . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . f d d d 1 1 1 1 d d d f . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . f b d b f d d f b d b f . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . f c d c f 1 1 f c d c f . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . f f f c d b 1 b d f f f f . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . f b f b f f f f f f b f b f b f . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f f f f . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . f f f . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `, SpriteKind.firethay)
                animation.runImageAnimation(
                mySprite2,
                [img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . 2 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
                    `],
                500,
                true
                )
                scene.place(value54, mySprite2)
                mySprite2.y += 1
            }
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.life1, function (sprite, otherSprite) {
    otherSprite.setKind(SpriteKind.Projectile)
    otherSprite.setImage(img`
        f f f f f f f f f f f f f f f f 
        f e e e e e e e e e e e e e e f 
        f e f e e e e e e e e e e f e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f e f e e e e e e e e e e f e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        `)
    sprites.setDataSprite(otherSprite, "mushrom", sprites.create(img`
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . 4 4 4 4 2 2 . . . . . 
        . . . . 4 4 4 4 2 2 2 2 . . . . 
        . . . 4 4 4 4 4 2 2 2 2 2 . . . 
        . . 4 4 4 4 4 4 4 2 2 2 4 4 . . 
        . 4 4 2 2 2 4 4 4 4 4 4 4 4 4 . 
        . 4 2 2 2 2 2 4 4 4 4 4 4 4 4 . 
        4 4 2 2 2 2 2 4 4 4 4 4 2 2 4 4 
        4 4 2 2 2 2 2 4 4 4 4 4 2 2 2 4 
        4 4 4 2 2 2 4 4 4 4 4 4 4 2 2 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        . 4 2 2 2 1 1 1 1 1 1 2 2 2 4 . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . 1 1 1 1 1 1 4 1 . . . . 
        . . . . 1 1 1 1 1 1 4 1 . . . . 
        . . . . . 1 1 1 1 4 1 . . . . . 
        `, SpriteKind.mushorm))
    sprites.readDataSprite(otherSprite, "mushrom").x = otherSprite.x
    sprites.readDataSprite(otherSprite, "mushrom").y = otherSprite.y
    sprites.readDataSprite(otherSprite, "mushrom").y += -16
    sprites.readDataSprite(otherSprite, "mushrom").vx = 50
    sprites.readDataSprite(otherSprite, "mushrom").ay = 300
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.fire, 100)
        music.baDing.play()
        info.changeScoreBy(1)
        for (let index = 0; index < 36; index++) {
            mySprite.y += -1
            pause(1)
        }
    } else {
        info.changeLifeBy(-1)
        music.powerDown.playUntilDone()
    }
})
let myentywww: Sprite = null
let projectile: Sprite = null
let sprite_list: Sprite[] = []
let boss121212: Sprite = null
let theboss: Sprite = null
let pet12: Sprite = null
let leist2: Image[] = []
let boss_fight = 0
let mySprite2: Sprite = null
let mySprite: Sprite = null
let level = 0
let mySprite3: Image = null
doSomething()
let list = [
img`
    . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . c . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    . . . . . . . . . . . . . . . . . . . . . . . b . . . . b b b b b b b b b b b b b b b b b b b b b 
    . . . . . . . . . . . . . . . . . . . . . . . b . . b . . b . . . . . . . . . . . . . . . . . . b 
    . . . . . . . . . . . . . . . . . . . . . . . b . 3 . . . b . . . 3 . 5 . 3 . 5 . 5 . 5 . . . . b 
    . . . . . . . . . . . . . . . . . . . . . . . b b . . . . b . . . . . . . . . . . . . . . 5 . b b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . b b b b b b b b b b b b b 5 . b b 
    . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b . . b . . . . . . . . . . b b 5 . b b 
    . . . . . . . . . . . . . . 2 . . 2 . . b . b b b b b b b b . . b . 5 5 5 5 . . . . . b b 5 . b b 
    . . . . . . . . . . . . . b b b b b b b . . . b b b b b b b . b b . . . . . . . a . . b b 5 . b b 
    . . . . b . b . b . b b b . . . . . . . . . . b b b b b b b . . b . . b b b b b b b b b b 5 . b b 
    . . b . . . . . . . . . . . . . . . . . . . . . b b b b b b . . b . . b . . . . . . . . . . . b b 
    . . . b . . . . . . . . . . . . . . . . . . . . . . 3 3 . b . . b . . . . 5 5 5 5 5 5 5 . . . b b 
    . . . . b . . . . . . . . . . . . . . . . . . . . 5 5 5 5 . . . b . . . . . . . . . . . . . . b b 
    . 1 . . . b . . . . . . . . . . . . . 2 . . 2 . . . . . . . . . b b b b b b b b b b b b b b b b b 
    . . . . . . . . 7 7 6 6 6 6 6 6 6 6 7 7 7 7 7 7 7 . . . . 7 7 7 b b b b b b b b b b b b b b b b b 
    7 7 7 7 7 7 7 7 e e e 6 6 6 6 6 6 e e e e e e e e . . . . e e e b b b b b b b b b b b b b b b b b 
    e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 e e e b b b b b b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 5 . . . . 
    . . . . . . . . . . . 5 . . 5 . . . a . 
    . . . . . . . 5 . . 5 . . . . . b b b b 
    . . . 5 . . 5 . . . . . b b . . b b b b 
    1 . 5 . . . . . b b . . b b . . b b b b 
    . . . . 7 7 . . b b . . b b . . b b b b 
    7 7 . . e e . . b b . . c c . . b b b b 
    e e 4 4 e e 4 4 b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 . 5 5 . . . . 5 . . . . . 
    . . . . . . . . . . . 5 . . . . 
    c 7 7 7 . . 7 7 7 . . . . . . . 
    . e e e . . e e e . . . 7 7 . . 
    . e e e . . e e e . . . e e . . 
    4 e e e 4 4 e e e 4 4 4 e e . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . a . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 7 7 7 . . 7 7 7 . . . 7 7 7 7 
    . e e e . . e e e . . . e e e e 
    4 e e e 4 4 e e e 4 4 4 e e e e 
    4 e e e 4 4 e e e 4 4 4 e e e e 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . c . . . . . . . . . . . . . b b b . . . . 
    . . . . . . . . . . . . . b . 5 . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . b . b . 5 . . . . 5 b . . . 3 . 3 . . . . 
    . . . . . . . . . . . . . . . b . b . . b b 5 b . . . . . . . . . . 
    . . . . . . b . . . . . . . . . . b . . b b 5 b . . . . . . . . . c 
    . . . . . . b . d . . . . 5 5 . . . . . b b 5 b b b b b b b b b b b 
    . . . . . . b . . . . . . . . . 7 7 7 7 b b 5 b b b b . . . . . . . 
    . 1 . . . . . . . . . . . . 7 7 e e e e b b 5 5 5 5 5 . . . . . . . 
    . . . . . . . . . . . 7 7 7 e e e e e e b b . . . . . . . 2 . 2 . a 
    7 7 7 7 7 7 7 7 7 7 7 e e e e e e e e e b b b b b b b b b b b b b b 
    e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b 
    e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e e e e b b . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b e e b b b b e e b . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b e b b e e e e b b e b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e b b e b b b b e b b e b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . . . . . d b e b e b e e e e b e b e b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . . . b b b b e b b e b b b b e b b e b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . . . . . d b b e b b e e e e b b e b b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . b b b b b b b b e e b b b b e e b b b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 5 . . . . . . b b b b b e e e e b b b b b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . 3 . . . . . 3 . . b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . 5 5 5 5 5 5 5 5 5 . . b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 b b b b b b b b b b b b 7 . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e b b 5 5 5 . . . . e e 7 . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e e e e 5 5 5 . . . . e e e 7 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e e b e e 5 5 5 . d . . e e e e 7 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e b b e e 5 5 5 3 c 3 . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e e 5 5 5 . d . . . . b b b b b b b b . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e b b b b b b b b b b b b b b b b . . . . . 2 . . 5 5 . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . b . . . . b b b . . 5 . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . b d . . . . . . . . . d 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . b . . . . . 5 5 . b b b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . c b . . . . . 5 . . . . 3 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . d . . . . . . . . . . . b b . . . . b b b . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . c . . . . . . . . . . . . . . . . . b . . . 5 5 . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 b b b b b b b b b b b b e . . . 5 b . . . 5 . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . 7 e e e b b b b b b b b b e e 7 . . 5 b . . b b b 5 5 . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . 7 e e e e e e b b b b e e e e e e 7 . 5 b . . . . . . 5 . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . 7 e e e b b e e e e e e e e e e e e e . 5 b . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . e e e b b e e e b b e e e e e e e e . 5 b b b b . . b b b . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . 5 b b e e b b b b e e b b . . b . 5 . . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . 2 . . . . b b e b b b b b b e b b . . b . . . . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . b b b b b b b b b b b b . . b b b b b b b b b b b b b b b b 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . 3 . . b . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . b . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . 1 . 7 b b b b b b b b b b b b 7 . . . . . . . . . . . . . . . . . 
    b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b 7 e e e b b b b b b b b b e e 7 . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 e e e e e b b b b e e e e e e 7 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e b b e e e e e e e e e e e e e 6 . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e b b b e e e b b e e e e e e e e . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e e b b b b e e b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e b b b b b b e b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b f 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 4 4 6 b b b b b b b b b 6 7 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 4 4 6 6 7 b b b b b 6 7 6 6 7 7 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 4 4 6 b b 7 7 7 7 7 7 7 7 6 6 7 7 7 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 6 8 b b 7 7 b b b b 7 7 8 8 6 6 6 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 7 7 b b b b b 7 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    4 4 4 4 4 4 4 . 4 4 4 4 4 4 4 4 
    4 4 4 4 6 6 6 6 6 6 6 6 4 4 4 4 
    4 4 4 6 9 6 6 1 6 6 6 5 6 4 4 4 
    4 4 6 5 9 6 6 6 6 6 6 5 5 6 4 4 
    4 6 5 5 9 9 9 6 6 6 6 5 5 9 6 d 
    4 6 5 6 8 8 8 8 8 8 8 b 5 9 6 6 
    4 6 6 8 b b 8 b b b 8 8 b 9 6 6 
    4 6 8 b b b 8 b b b b 8 6 6 6 6 
    4 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
    4 8 8 8 8 8 8 b b b b b 8 6 d d 
    4 8 8 8 8 8 8 b b b b 8 8 8 6 d 
    4 8 8 8 8 8 8 b b b 8 8 8 8 8 8 
    4 8 b b 8 b 8 8 8 8 b b 8 8 8 8 
    4 4 b b c b b 8 8 b b a 8 b 8 4 
    4 4 4 b b b 4 4 4 4 b b b b 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `,
img`
    . 3 . . . . 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . b . . . . . . 
    . . . . . . b b b b f b b b . 5 . . . . . . . . . . . . . . . . . b . . . . . . 
    1 . . b b b b f b b f f f b b 5 5 . . . . . . . . . . . . . . . . b . . . . . . 
    . . b b b f f f b b b f f b b b 5 . . . . . . . . . . . . . . . . b . . . . . . 
    b b b b f f f f b b b b b b b b 5 . . . . . . . . . . . . . . . . b . . . . . . 
    b b b b f f f 8 b b b b b b b b 5 . . . . . . . . . . . . . . . . b b . . . . . 
    b b b b b b b b b b b b b b b b 5 . . . . . . . . . . . . b b b 5 b b . . . . . 
    b b b b b b b b b b b b b f f b 5 . . . . . . . . b b b . . . . 5 . . . . . . . 
    b b b b b b b b b b b b f f f b . . . . . b b b . . . . . . . . 5 . . . . . . . 
    b b b b b b b b b b b f f f b b . . . . . . . . . . . . . . . . 5 . . . . . . . 
    . b b b b b f f b b b b f f b b b b b b . . . . . . . . . . . . 5 . . . . . . . 
    . . b b b b f f f b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 . 5 . 5 . . . . . 
    . . . b b b b f f b b b b b b . . . . . . . . . . . . . . . . 5 5 5 . . . . . . 
    . . . b b b b b b b b b b b b . . . . . . . . . . . . . . . . . 5 . . . . . . . 
    . . . . b b b b b b b b . b . . . . . . . 3 . . 3 . . . . . . . . . . . . . . . 
    . . . . . b b b b b b . b d b b b b b b . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b . . c . . . . b b . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b . b d b . . . . . . . . . 5 . . . b b b b b . . . . . . . 
    . . . . . . . . . . b . . b . b . . . . . . 5 . . . . b . . . . . b . . . . . . 
    . . . . . 5 . . . . b b b b b b b b b b b . . . b b b b . . . . . . b . . . . . 
    . . . . . . . . . . . . . . . . 5 . . . . . . b b . . . . . . . . . . b b . . . 
    . . . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . b . . . 
    . . . . . b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . b . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b c 5 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b 
    . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . b b b b b b b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 . . b b b b 
    b b b b b b b b b b b b b 6 6 6 6 b b b b . . . . . . . . . . . . . . . b b b b 
    . . . . . . . . . . . . . b 6 6 6 6 b b b b b . . . . . . . . . . . . . b b b b 
    . . . . . . . . . . . . . . b 6 6 6 b b b b b b b . . . . . . . . . 3 . . . . . 
    . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b . 3 . a . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . b . . b . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . 
    . . b b b b . . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . . . 
    . . 3 b b 3 . . 1 . . . . . . . b b d b . . . . . . . . . . . . . . . . . . . . 
    . . b b b b . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . 
    . . . b b . . . . . . . . . . b b . . b . . . . . . . . . . . . . . . . . . . . 
    . . . b b b e b e b e b e b e b . b . b e b e b e b e b b b . . . . . . . . . . 
    . . . b b b b b b b b b . . . . . b . b b b b b b b b . . . . . . . . . . . . . 
    . . . b . b . . . b . b . . . . . b . b . . . . b . b . . . . . . . . . . . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 4 4 4 4 4 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    e e e e e e e e e e e e e e e e e e 5 e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e 5 e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e 
    e e e e e e e e e e e e e e e e e b 5 5 5 e e e e e e e e e 5 5 5 e e e e e e e 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e e e c 5 5 e e e e e e 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b b e b b b e b b b e 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b e e b e b e e b e e 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b e e b b b e e b e e 
    e e e e e e e e e e e b b b b b b b 5 b b b b b b b b e e b b e b e b e e b e e 
    e e e e e e e e e e e b 3 5 5 5 5 5 5 5 5 5 5 5 5 3 b e e e e e e e e e e e e e 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b e e e b b b b b b b b b b 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b 5 5 5 5 5 5 5 5 d 
    e e e e e e e e e e e b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 5 5 b b b b b b b 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 d b c 5 5 5 5 5 5 5 5 5 5 5 5 
    e e e e e e e e e e e b c d 5 5 5 5 5 5 5 5 5 b b b b 5 5 5 5 5 5 5 5 5 a 5 5 5 
    e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . b . . b . . . . . . . . . . . . b b . . . . . . . . . . . . b . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . b b b b . . . . . . . . . . b b b b . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . 3 b b 3 . . 1 . . . . . . . b b d b . . . . . . . . . . . . 3 b b 3 . . . . . . . . . . b 5 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . b b b b . . . . . . . . . . . . b b . . . . . . . . . . . . b b b b . . . . . . . . . b . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . b b . . . . . 2 . . 2 . b b . . . . . 2 . . . . 2 . . . . . . . . . . 2 . 2 . . . b . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . b b b e b e b e b e b e b . b b b e b e b e b e b b b . b b b b b b b b b b b b b . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . b b b b b b b b b . . . . . b b b b b b b b b b . . . . . . b b b b b b b b b b . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . b . b . . . b . b . . . . . b . b . . . . b . b . . . . . . . . b . . . . b . b . . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e e 5 e e e e e e e e e e e e e e e e e e e e e 7 e e 7 7 7 . 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e e 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e 7 7 7 . . 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e e e 7 . . 5 . . . . . . . b . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b 5 5 5 b e e e e e e e e 5 5 5 e e e e e e e e e e e e e e e e e 7 7 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b 5 b b e e e e e e e e e e c 5 5 e e e e e e e e e e e e e e e e e e 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b b e b b b e b b b e e e e e e e e e e e e e e 7 . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b e e b e b e e b e e e e e e e e e e e e e e e e 7 7 . . . . 3 . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b e e b b b e e b e e e e e e e e e e e e e e e e e e 7 . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e b b b b b b b 5 b b b b b b b b e e b b e b e b e e b e e e e e e e e e e e e e e e e e e e 7 7 d . . . . . . . . . . . . . . . . . . d b 
    e e e e e e e e e e e b 3 5 5 5 5 5 5 5 5 5 5 5 5 3 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 7 7 7 . . 2 . 2 . 2 . . . . . . . . . . . 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b e e e b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e 7 7 7 7 7 7 7 . . . . . . . . . . . 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b 5 5 5 5 5 5 5 5 d b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 7 7 7 7 7 7 7 . a . . 
    e e e e e e e e e e e b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 7 7 7 7 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 5 5 b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 d b c 5 5 5 5 5 5 5 5 5 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b c d 5 5 5 5 5 5 5 5 5 b b b b 5 5 5 5 5 5 5 5 5 a 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 . . . . . 3 . . 3 . . 3 . . . . . . b b b b . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . 
    . . b . . b . . . . . . . . . . . . b b . . . . . . . . . . . . b . . b . . . . . . . . . . . . . 5 . . . . . . . . . . . . d . b b c 5 5 5 . . . . . . . . . . 
    . . b b b b . . . . . . . . . . b b b b . . . . . . . . . . . . b b b b . . . . . . . . . . . . 5 . b b b b b b b b b b b b b b b b 5 5 5 5 . . . . . . . . . . 
    . . 3 b b 3 . . 1 . . . . . . . b b d b . . . . . . . . . . . . 3 b b 3 . . . . . . . . . . b b b . . b b b b b b b b b b b b b b b b b b 5 . . . . . . . . . . 
    . . b b b b . . . . . . . . . . . . b b . . . . . . . . . . . . b b b b . . . . . . . . . b 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b . . . . . . . b b b 
    . . . b b . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . b b b b b b b b b b b b b b b b . . . . . . . b b b b 
    . . . b b b e b e b e b e b e b . b b b e b e b e b e b b b . b b b b b b b b b b b b b . . . b . . . . . . . . . . . . . . . . . . 5 5 5 5 . . . . . b b b b b 
    . . . b b b b b b b b b . . . . . b b b b b b b b b b . . . . . . b b b b b b b b b b . . . . b 3 3 b b b b b b b . . . . . . . . 5 5 . b b b b b b b b b b b b 
    . . . b . b . . . b . b . . . . . b . b . . . . b . b . . . . . . . . b . . . . b . b . . . . b 5 5 b . . . . . b b b . . . . . . 5 . . . b b b b b b b b b b b 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 5 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . b 5 5 b . . . . . . b b b b . . . . 5 . . . . b b b b b b b b b b 
    e e e e e e e e e e e e e e e e e e 5 e e e e e e e e e e e e e e e e e e e e e 7 e e 7 7 7 . b 5 5 b . . . . . . . . b b b b b c b . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e e 5 e e e e e e e e e e e e e e e e e e e e e e e e e e e 7 b 5 5 b . . . . . . . 4 . . . . . b . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e e 5 5 5 5 5 5 5 5 5 5 5 5 5 e e e e e e e e e e e e e e e e b 5 5 b . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    e e e e e e e e e e e e e e e e e b 5 5 5 b e e e e e e e e 5 5 5 e e e e e e e e e e e e e e b 5 5 b 7 . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 
    e e e e e e e e e e e e e e e e e b 5 b b e e e e e e e e e e c 5 5 e e e e e e e e e e e e e b 5 5 b e 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b b e b b b e b b b e e e e e e e e b 5 5 b e e 7 . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b e e b e b e e b e e e e e e e e e b 5 5 b e e e 7 7 . . . . 3 . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b 5 b e e e e e e e e e b e e b b b e e b e e e e e e e e e b 5 5 b e e e e e 7 . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e b b b b b b b 5 b b b b b b b b e e b b e b e b e e b e e e e e e e e e b 5 5 b e e e e e e 7 7 d . . . . . . . . . . . . . . . . . . d b 
    e e e e e e e e e e e b 3 5 5 5 5 5 5 5 5 5 5 5 5 3 b e e e e e e e e e e e e e e e e e e e e b 3 3 b e e e e e e e e 7 7 7 . . 2 . 2 . 2 . . . . . . . . . . . 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b e e e b b b b b b b b b b b e e e e e e b 5 5 b e e e e b b b b b b b 7 7 7 7 7 7 7 . . . . . . . . . . . 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b 5 5 5 5 5 5 5 5 d b e e e e e e b 5 5 b e e e e b c 5 5 5 5 b e e e e e e e 7 7 7 7 7 7 7 . . . . 
    e e e e e e e e e e e b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b e e e e e e b 5 5 b e e e e b 5 5 5 5 d b e e e e e e e e e e e e e e 7 7 7 7 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 5 5 b b b b b b b b e e e e e e b 5 5 b b b b b b d 5 5 5 5 b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 d b c 5 5 5 5 5 5 5 5 5 5 5 5 b e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 d b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b c d 5 5 5 5 5 5 5 5 5 b b b b 5 5 5 5 5 5 5 5 5 a 5 5 5 b e e e e e e b d 5 5 5 5 5 5 5 5 5 a 5 5 b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b . . . . . . . . . . . . . . . . . . . . 
    . . b . . b . . . . . . . . . . . . b b . . . . . . . . . . . . b . . b . . . . . . . . . . . . . 5 . . . . . . . . . . . . d . b b 5 5 5 5 . . . . . . . . . . . . . . . . . . . . 
    . . b b b b . . . . . . . . . . b b b b . . . . . . . . . . . . b b b b . . . . . . . . . . . . 5 . b b b b b b b b b b b b b b b b 5 5 5 5 . . . . . . . . . . . . . . . . . . . . 
    . . 3 b b 3 . . . . . . . . . . b b d b . . . . . . . . . . . . 3 b b 3 . . . . . . . . . . b b b . . b b b b b b b b b b b b b b b b b b 5 . . . . . . . . . . . . . . . . . . . . 
    . . b b b b . . . . . . . . . . . . b b . . . . . . . . . . . . b b b b . . . . . . . . . b 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b . . . . . . . b b b . . . . . . . . . . 
    . . . b b . . . 1 . . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . b b b b b b b b b b b b b b b b . . . . . . . b b b b . . . . . . . . . . 
    . . . b b b e b e b e b e b e b . b b b e b e b e b e b b b . b b b b b b b b b b b b b . . . b . . . . . . . . . . . . . . . . . . 5 5 5 5 . . . . . b b b b b . . . . . . . . . . 
    . . . b b b b b b b b b . . . . . b b b b b b b b b b . . . . . . b b b b b b b b b b . . . . b 5 5 b b b b b b b . . . . . . . . 5 5 . b b b b b b b b b b b b . . . . . . . . . . 
    . . . b . b . . . b . b . . . . . b . b . . . . b . b . . . . . . . . b . . . . b . b . . . . b 5 5 b . . . . . b b b . . . . . . 5 . . . b b b b b b b b b b b . . . . . . . . . . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . b 5 5 b . . . . . . b b b b . . . . 5 . . . . b b b b b b b b b b . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e e . e e e e e e e e e e e e e e e e e e e e e 7 e e 7 7 7 . b 5 5 b . . . . . . . . b b b b b 5 b . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e e . e e e e e e e e e e e e e e e e e e e e e e e e e e e 7 b 5 5 b . . . . . . . 4 . . . . . b . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e e . . . e e e e e e e e e e e e e e e e e e e e e e e e e e b 5 5 b . . . . . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    e e e e e e e e e e e e e e e e e b . . . b e e e e e e e e e e e e e e e e e e e e e e e e e b 5 5 b 7 . . . . . . . . . . . . . . . . . . . . . . . . . . 4 4 . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b . b b e e e e e e e e e e e e e e e e e e e e e e e e e e b 5 5 b e 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b . b e e e e e e e e e b b e b b b e b b b e e e e e e e e b 5 5 b e e 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b . b e e e e e e e e e b e e b e b e e b e e e e e e e e e b 5 5 b e e e 7 7 . . . . 3 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e e e e e e e b . b e e e e e e e e e b e e b b b e e b e e e e e e e e e b 5 5 b e e e e e 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e b b b b b b b . b b b b b b b b e e b b e b e b e e b e e e e e e e e e b 5 5 b e e e e e e 7 7 d . . . . . . . . . . . . . . . . . . d b . . . . . . . . . . 
    e e e e e e e e e e e b . . . . . . . . . . . . . . b e e e e e e e e e e e e e e e e e e e e b 5 5 b e e e e e e e e 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e b . . . . . . . . . . . . . . b e e e b b b b b b b b b b b e e e e e e b 5 5 b e e e e b b b b b b b 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . 
    e e e e e e e e e e e b . . . . . . . . . . . . . . b b b b b . . . . . . . . . b e e e e e e b 5 5 b e e e e b c 5 5 5 5 b e e e e e e e 7 7 7 7 7 7 7 . . . . . . . . . . . . . . 
    e e e e e e e e e e e b . . . . . . . . . . . . . . . . . . . . . . . . . . . . b e e e e e e b 5 5 b e e e e b 5 5 5 5 d b e e e e e e e e e e e e e e 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    e e e e e e e e e e e b . . . . . . . . . . . . . b b b b b b . . b b b b b b b b e e e e e e b 5 5 b b b b b b 5 5 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b . . . . . . . . . . . . . d b . . . . . . . . . . . . . b e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b . . . . . . . . . . . b b b b . . . . . . . . . . . . . b e e e e e e b 5 5 5 5 5 5 5 5 5 5 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e b b b b b b b b b b b 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b e b e e e e e e e e e e e e b 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b e e e e e e e e e e e e b 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 3 b 3 e e e e e e e e e e e e b 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 e e b b b e e e e e e e e e e e e b 5 5 5 b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 e e e b e e e e e e e e e e e e e b 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 e e e b e e b b e e e e e e e e e b 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . c e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 6 6 e e b b b b b e e e e e e e e e b 5 5 5 b e e e b b e e e e e e e e e e e e e e e . . . e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b e e b b e e e e e e e e e b 5 5 5 b e e b e e e e e b b e e e b e e b e e e . . e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 6 e e e b e e e e e e e e e e e e e b 5 5 5 b e e b e b b e b e e b e b e e b b b e e . . . e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e e e e e e e b 5 5 5 b e e b e e b e b e e b e e b e e b e e e . . . e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b e b e e e e e e e e e e e e b 5 5 5 b e e e b b e e e b b e e b e e e b e e e . . e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b 5 5 5 b e e e e e e e e e e e e e e e e e e e e . . . e e e e e 
    e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e b 5 5 5 b e e e e e e e e e e e e e e e e e e e e . . . e e e e e 
    e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b e e e e b 5 5 5 b e e e e e e e e e e e e e e e e e e e e . . e e e e e e 
    e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 5 5 5 b . . . . . . . . . . . . . . . . . . . . . . . e e e e e 
    e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . b . . . . . . . . . . . . . . . . . . . . . . . e e e e e 
    e e e e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . e e b b e e e b e e e b e e e b e e e e e e e e e e 
    e e e e e e e e e e e e e . . . . . . . . . . . . . . . . . . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . b e e e e b e b e b b b e b e e e e e e e e e e e 
    e e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . b e e e e b b b e e b e e e b e e e e e e e e e e 
    e e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . e e b b e e b e b e e b e e b e e e e e e e e e e e 
    e e e e e e e e e e . . . . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . e e e e e e e e e e e e e e e e e e b b b b b b b e 
    e e e e e e e e e e . . . . e b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . e e e e e e e e e e e e e e e e e b e e e e e e e b 
    e e e e e e e e e e . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e . . e e e e e e e e e e e e b e e b e b e e e b e e e b 
    e e e e e e e e e . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e . . . . . . . . . . . . e e b e e b e b e b b b b b e b 
    e e e e e e e e e . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e . . . . . . . . . . . c e e b e e b e b e e b b b e e b 
    e e e e e e e e e e . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b e b e e b e b e e b 
    e e e e e e e e e e . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b e b e e e e e e e b 
    e e e e e e e e e . . . e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b e b e e e e e e e b 
    e e e e e e e e e . . . e e e e e e e . . . . . . . . . . . . . . b . . . b . . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b b b b b b b e 
    e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . . b b . . b b . . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e . . . . . . . . . . . . . . . . . . . . . b b b b b b b b . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e . . 7 7 7 7 7 7 7 7 . . 7 7 b b b b b b b b . . . . e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e . . . . . . . . . . . . . b b d b b d b b . . . . e e e e b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e . . . . . . . . . . . . b b b b b b b b . 6 . . e e e e b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e . . . . . . . . . . . b b b b b b b b . 6 . . e e e e b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e . . . . . . . . . . b b e e e e b b . 6 . . e e e e b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e . . . . . 7 7 . . b b b b b b b b . 6 . . . e e e b b 5 . . . . . . . . . . . . . . . . . . . 5 b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e . . . . . . . . . b b b b b b . . 6 . . . e e e b b . 5 . . . . . . . . . . . . . . . . . 5 . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e . . . . . b . b b b b b b c 6 6 6 . . e e e b . . . 5 . . . . . . . . . . . . . . . 5 . . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b 6 . . . e e . . . . . . . . . . . . . . . . . . . . . . . . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b . . 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b . . . . . . . f . . . . . . . . . . . . . 2 . . . . . . . . . . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e e e b . . . . . . e e . . . . . . . . . . . . . c . . . . . . . . . . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e e e b e e e e e e e e b . . . . . . . . . . . . . . . . . . . . . . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b . . . 5 . . . . . . . . . . . . . . . 5 . . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b . 5 . . . . . . . . . . . . . . . . . 5 . b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b 5 . . . . . . . . . . . . . . . . . . . 5 b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . 3 . 3 . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . 3 . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . c . . . . . . 
    . . . . . . . . . . . . . . . . . b b b d . . . c a c . . . d b 
    . . . . . . . . . . . . . . . . . 3 3 3 b b b b b b b b b 5 5 . 
    b . . d . . . . . . d . . . . . . . . . . . . . d . . . . . 5 b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 b b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . b b b . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . . 3 . 3 . . . . 5 . 5 5 5 5 5 5 
    . . . . . . . . . . . . . . . . . . . . . . . b b b . . c 5 5 . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 b 5 5 5 
    . . . . . . . . . . . . . . . . . . . . . . b . . . 5 5 5 5 . b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . 
    . . . . . . . . . . . . . . . . . 3 . 3 . . c . b . . . . . . . 
    . . . . . . . . 1 1 . . . 5 b b b b b b b b b b . . . . . . . . 
    . . . . . . . . . . . . 5 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . 
    . . . . . . b b b b b b . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    `,
img`
    . . 1 . . 2 2 2 2 2 e . . . . . . . . . 
    . . . 2 2 2 2 d 2 d e . . . . . . . . . 
    . . e 2 2 2 2 2 2 d e . . . . . . . . . 
    . . e 2 2 2 2 2 2 d e . . . . . . . . . 
    . . e 2 2 2 2 2 e f f c c . . . . . . . 
    . . e e 2 2 e f f f f b c . . . . . . . 
    . e e e f e 2 b f f f d c . . . . . . . 
    e e 2 2 d f 2 . . . . b c . . . . . . . 
    e e 2 2 a a a a c c c . . . . . . . . . 
    b . . d a a a a e c . . . . . . . . 1 1 
    . f f e a a a a e . . . . . . . . . 1 1 
    d d f f a a a a b f f f . . . . . . 1 1 
    d d f f d . . . b f f f . . . . . . 1 1 
    d d d 5 5 5 5 5 5 5 5 d d d d d . . 1 1 
    d d e e e d d d d d d d d d d d b b . . 
    d d e e e e b b b b . . . . . . . . . . 
    . . . . . . . b b . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . b b b b 
    . . . . . . . . . . . . . . . . b b . . 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b . . . . 
    `,
img`
    3 3 3 3 3 . . . . . . . . . . . . . . . . . . . 
    b b b b b . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . f f f f . . . . . . . . . . 
    . . . . . . . . f f 7 3 3 7 f f . . . . . . . . 
    . . . . . . . f b 7 7 7 7 7 7 b f . . . . . . . 
    3 3 3 3 3 . . f 7 7 7 7 7 7 7 7 f . . . . . . . 
    . . . . . . f d 7 7 7 7 7 7 7 7 d f . . . . . . 
    . . . . . . f d 7 7 7 7 7 7 7 7 d f . . . . . . 
    . . . . . . f d d d 7 7 7 7 d d d f . . . . . . 
    . . . . . . f b d b f 7 7 f b d b f . . . . . . 
    . . . . . . f c d c f 7 7 f c d c f . . . . . . 
    . . . . . . . f b 7 7 7 7 7 7 b f . . . . . . . 
    . . . . . . f f f c d b 7 b d f f f b d d d d d 
    . . . . f c 7 7 7 c . . . . . 7 7 7 c f d d d d 
    3 3 3 3 f 7 b 7 b 7 7 7 7 7 7 b 7 b 7 f a a a a 
    b b b b f b f b f f f f f f 7 f b f b f b b b b 
    . . . . . . . . . f f f f f f . . . . . . . . . 
    . . . . . . . . . . . f f f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . 3 . 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . b b b . . . . . . 
    d . . . d d d d . . . d d d . . 
    d . . . d d d d . . . d d d . . 
    d . . . d d d d . . . d d d . . 
    d . . . d d d d . . . d d d . . 
    d . . . d d d d . . . d d d . . 
    d . . . d d d d . . . d d d . . 
    d . . . d d d d . . . d d d . . 
    d . . . d d d d . . . d 3 d . . 
    4 4 4 4 4 4 4 4 4 4 4 a a 4 4 4 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . a . 
    . . . . . . . . . . . . b b b b 
    . . 2 . 2 . . b b b b . . . . . 
    . b b b b b . . . . . . . . . . 
    d . . . . . . . . . . . . . . . 
    b 5 5 5 5 5 5 5 5 5 5 . . . . . 
    b b b b b . b . b . b 5 5 . . . 
    . . . . . . . . . . . . b b . . 
    . 3 . 3 . . . . . . . . . . . b 
    1 . . . . . . . . . . . . . . b 
    . . . . . . . . . . . . . . b b 
    . . . . . . . . . . . . . b b b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . a . 2 . . . . . . . . . . . . 
    b b b b b . . . . . . . . . . . 
    . . . . . b . 2 2 . . . . . . . 
    . . . . . . b b b b . . . . . . 
    c . . . . . . . . . . . . . . . 
    b b b b b . . . . . . b b b b b 
    . . . . . . . d d . . . . . . . 
    . . . . . . b b b b . . . . . . 
    . . b b b . . . . . . b b b . . 
    b . . 3 . . . 1 1 . . . 3 . . b 
    b . . . . . . . . . . . . . . b 
    b b . . . . . . . . . . . . b b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . 5 5 5 5 . . . . . 5 5 5 . . . . . . 5 5 5 5 . . . . 8 . . 2 . . . 2 . 8 . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . 1 . . . . . 5 . . . . 5 . . . 5 . . . 5 . . . . 5 . . . . 5 . . 8 . 8 8 8 8 f 8 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 . . . . . . . . . . 
    7 7 7 7 7 7 7 . . . . . 7 7 7 7 . . . . 7 7 7 7 7 . . . . . 7 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . 5 . . . 5 . . . . . . . . . 
    e e e e e e e . . . . . e e e e b . . . e e e e e . . . . . e e e e e e 7 7 7 7 7 7 . . . . 2 . . . 2 . . 7 7 7 7 . . . 7 7 7 2 . 2 . . . a 
    e e e e e e e . . . . . e e e b b b . . . . . . . . . . . . . . . e e e e e e e e e 7 7 7 7 7 7 7 7 7 7 7 e e e e . . . e e e 7 7 7 7 7 7 7 
    e e e e e e e . . . . . e e e e b b b . . . . . . . . . . . . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e e b b b b . . . . . . . . . . . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e e b b b b b . . . . . . . . . . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e e b b b b b b . . . . . . . . . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e e b b b b b b b . . . . . . . . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e b b b b b b b b b . . . . . . . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e b b b b b b b b b b b . . . . . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e e b b b b b b b b b b b b . . . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e e b b b b b b b b b b b b b b . . . . . . . . . . b e e e e e e e e e e e e e e e e . . . e e e e e e e e e e 
    e e e e e e e . . . . . e e e e b b b b b b b b b b b b b b b . . . . . . . . . b e e e e e e e e e e e e e e e e 4 4 4 e e e e e e e e e e 
    e e e e e e e . . . . . e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . 2 . 2 . b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e . . . . . e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . 8 8 8 8 8 8 b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e . . . . . e e e e 8 8 8 8 8 8 8 8 . . . . . . . . . . 8 8 8 8 8 8 b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 8 8 8 8 b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b . . . . . . 8 8 8 8 8 8 8 8 b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b b . . . . . 8 8 8 8 8 8 8 8 b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b b b . . b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b b b . . b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b b b . . b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b b b . . b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b b b . . b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b b b c . b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e e e e e e e e e e b b b b b b b b b b b b b b b b b e e e e e e e e e e e e e e e e e e e e e e e e e e e e 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . 1 . . . . . . . . . . . . . . 
    . . . . 2 . . . . . . . . . . . 
    b b b b b b b b b b . . . b . . 
    b b b b b b b b . . . . . b . . 
    b b b b b b b . . . . . . b . . 
    b b b b b . . . . . . . . b . . 
    . . . . . . . . c . . . . b . . 
    . . b b b b b b b . . . . b . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 b . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 . . 2 . . . . 
    b b b b b . . b b b b b b b b b 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . b . . 
    b b b b b b b b b b b b b b . . 
    a . . . . . . . . . . . . . . . 
    a . . . . . . . 2 . . 2 . . . b 
    a . . . . . b b b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . a . . . . . . . . . . . . c . 
    8 8 8 8 . . . . . . . 8 8 8 8 8 
    8 8 8 8 . . . . . 8 8 . . . . . 
    8 8 8 8 8 . . . . . . . . . . . 
    8 8 8 8 8 . . . . . . . . . . . 
    8 8 8 8 8 8 8 8 8 . . . 8 8 8 8 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 8 . . 2 . . 
    . . . . . . . . . . . . 8 8 8 8 
    8 8 8 . . . 8 8 8 . . 8 8 8 8 8 
    . . . . . . . . . . . . . . . . 
    1 . . . . . 2 . . . . 2 . . . . 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `,
img`
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . b 8 8 8 8 8 8 8 8 8 8 b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b c . . . . . . . b 8 . . . . . . . . 8 b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . b b 8 . . . . 8 . . . 8 b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . 1 . 8 f 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b . . b b 8 . . . . . . . . 8 b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b . . b b 8 . . . 8 f 8 . . 8 b b . . . b b . . . . . . . . b b . . . b b . . . b b . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . . . b b b . . . b b . . . b b . . . b b . . . b b . . . b b b b b b b b b . . . . . . . . . . . . . . . . . b b b b b 
    b b b b b b b b . . . . . . . 5 5 . . . 5 . . . 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . b b b b b 
    b b b b b b b b b b b b b . . b b . . . b . . . b . b . b . b . b . b . . 2 . . . . 2 . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b 
    b b b b b b b b b b b b b . . b b . . . b . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b 
    b b b b b b b b b b b b b 4 4 b b 4 4 4 b 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 f 8 8 . . . . . . . . . . . a 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    . . . . . . . . . . . . . . . . . . . . . . . . 5 5 . . . . . . . . . . . . . . . . . . . . . . . a 
    . . . . . . . . . . . . . . . . 5 5 5 . . . . 5 . . . . . . . . . b b b b b b b . . 2 . . . 2 . . a 
    1 . . . . . . . . . . . . . . 5 . . . 5 . . 5 . . . . . . . . . b b b b b b b b b b b b b b b b b b 
    . . . . . . . . . . . 2 . . . . . . . . . . . . . b b b b . . . . b b b b b b b b b b b b b b b b b 
    . . . . . . . 2 . 7 7 7 7 7 7 7 . . . b b b b . . . b b . . . . . b b b b b b b b b b b b b b b b b 
    7 7 7 7 7 7 7 7 7 e e e e e e . . . . . b b . . . . b b . . . . . b b b b b b . . . . . . . . . . . 
    e e e e e e e e e e e e e e e . . . . . b b . . . . b b . . . . . 5 5 5 5 5 5 . . . . . . . . . . a 
    e e e e e e e e e e e e e e e . . . . . b b . . . . b b . . . . . 5 5 5 5 5 5 . b b b b b b b b b b 
    e e e e e e e e e e e e e e e . . . . . b b . . . . b b . . . . . 5 5 5 c 5 5 b b b b b b b b b b b 
    e e e e e e e e e e e e e e e . . . . . b b . . . . b b . . . . . b b b b b b b b b b b b b b b b b 
    e e e e e e e e e e e e e e e 4 4 4 4 4 b b 4 4 4 4 b b 4 4 4 4 4 b b b b b b b b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 8 8 . . . 8 8 8 . . . 8 8 8 . . . 8 8 8 8 . . 8 8 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . 8 f 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 e e e e e . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . . . . . . . . . . . . . . . a . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . e e e e e e 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d e e e e e . . . . 8 8 . . . . 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 . 8 . . 8 . . 8 . 8 . 8 . 8 . . 8 . . 8 8 8 8 7 e e e e e e 8 8 6 d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 c e e e . . . . 8 8 . . . . e e e e e e e e e e e e 
    e e e e e e e e e e e . 8 . . 8 . . 8 . 8 . 8 . 8 . . 8 . . 8 8 8 8 e e e e e e e 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 5 5 e e e 4 4 4 4 8 8 4 4 4 4 e e e e e e e e e e e e 
    e e e e e e e e e e e . 8 . . 8 . . 8 . 8 . 8 . 8 . . 8 . . 8 8 8 8 e e e e e e e 8 8 8 d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e e e e e 4 4 4 4 8 8 4 4 4 4 e e e e e e e e e e e e 
    e e e e e e e e e e e . 8 . . 8 . . 8 . 8 . 8 . 8 . . 8 . . 8 8 8 8 e e e e e e e 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d e e e e e 4 4 4 4 8 8 4 4 4 4 e e e e e e e e e e e e 
    e e e e e e e e e e e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e e 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 e e e e e 4 4 4 4 8 8 4 4 4 4 e e e e e e e e e e e e 
    `,
img`
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d 6 6 6 6 6 6 6 6 6 6 d 6 6 6 6 6 6 6 6 6 6 6 6 d a 
    d 6 . . . . . . . . . . . . . . . . . . . . . . . . . . d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d 6 6 6 6 6 6 6 6 6 6 d 6 6 6 6 6 6 6 6 6 6 6 6 d a 
    d 6 . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 . . 8 8 . . 8 8 . . . 8 8 . . . . 8 8 8 . . . . 8 8 8 . 8 . 8 . 8 . 8 . 8 8 . 8 . 7 7 . . . . 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 7 7 6 6 6 6 6 7 7 7 7 7 7 
    d 6 . . 1 . . . . . . . 7 7 7 e e e e e e e e e e . . 8 8 . . 8 8 . . . 8 8 . . . . 8 8 8 . . . . 8 8 8 . 8 . 8 . 8 . 8 . 8 8 . 8 . e e . . . . e e e e e 6 6 6 6 6 e e e e e e e 6 6 6 6 6 e e e e e e 
    d 6 . . . . 7 7 7 7 7 7 e e e e e e e e e e e e e . . 8 8 . . 8 8 . . . 8 8 . . . . 8 8 8 . . . . 8 8 8 . 8 . 8 . 8 . 8 . 8 8 . 8 . e e . . . . e e e e e 6 6 6 6 6 e e e e e e e 6 6 6 6 6 e e e e e e 
    6 6 7 7 7 7 e e e e e e e e e e e e e e e e e e e 4 4 8 8 4 4 8 8 4 4 4 8 8 4 4 4 4 8 8 8 4 4 4 4 8 8 8 4 8 4 8 4 8 4 8 4 8 8 4 8 4 e e 4 4 4 4 e e e e e 4 4 4 4 4 e e e e e e e 4 4 4 4 4 e e e e e e 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    d . . . . . . . . . . . . . . d 
    d 6 . . . . . . . . . . . . 6 d 
    d 6 6 . . . . . . . . . . 6 6 d 
    a b b b b b b b b b b . . 6 6 6 
    b . . . . . . . . . . . . 6 6 6 
    . . . . . . . . . b b b b 6 6 6 
    . . . . . . . . . . . . . 6 6 6 
    . 2 . . . . . . . . . . 2 6 6 6 
    b b b b b b b b b b . . b b b b 
    . . . . . . . . . . . . . . . . 
    1 . . . . . . . . . . . . . . . 
    . . . . . . . . b b b b b b b b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    . . . . 6 6 6 6 6 . . . . . . . 
    . . . . 6 6 6 6 6 . . . . . . . 
    . . . . 6 6 6 6 6 . . . . . . . 
    . . . . 6 6 6 6 d 6 . . . . . . 
    . . . . 6 6 6 6 6 6 6 . . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . . . 6 d 6 6 6 6 6 6 . . . . 
    . . . . . 6 6 6 6 6 6 6 . . . . 
    . . . . . . . 6 6 6 6 6 . . . . 
    . . . . . . . 6 6 6 6 d . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 6 6 6 6 6 . . . . 
    . . . 6 6 6 6 d 6 . . . . . . . 
    . . . 6 6 6 6 6 . . . . . . . . 
    . . . 6 6 6 6 6 . . . . . . . . 
    . . . 6 6 6 6 6 6 . . . . . . . 
    . . . 6 6 6 6 6 6 . . . . d . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    . . . 6 6 6 6 6 6 6 . . . . . . 
    d . . . 6 6 6 6 6 6 . . . . . . 
    . . . . 6 6 6 6 6 6 . . . 8 f 8 
    . . . . . 6 6 6 6 6 . . . . . . 
    1 . . . . . 6 d 6 6 . . . . . . 
    . . . . . . 6 6 6 6 . . . b b b 
    b b b b b b b b b b b b b b b b 
    `,
img`
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 . . . . . . . . . . . 
    b b b b b b b b b b b b b b b b b b . . 8 f 8 f 8 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . a 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b 6 6 b b b b b 6 6 b b b b b b b b b b . . . . . . . . . . . b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 . . . . . 6 6 . . . b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 . . . . . 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 6 6 6 6 6 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . 6 6 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . 6 6 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b d . . . . . . . . 6 6 . . . d . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . 6 6 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b 6 6 6 6 6 6 6 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 . . . . . 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 . . . . . 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 . . . . . 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 6 6 6 6 6 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b d . . . . . . . 6 6 6 . . . . . d b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 6 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 6 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 6 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b d . . . . 6 6 6 6 6 6 6 6 6 . . d b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 . . . . . 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 . . . . . 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 . . . . . 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . 6 6 6 6 6 6 6 6 6 . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b d . . . . . . . 6 6 . . . . . . d b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . d . . . . . . 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . b b . . d . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . b b b b . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b d . . . . . . . . . . . . . . . d b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . b b b b b b b b . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . b b . . . . . b b . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b d . . . . . . . 6 6 . . . . . . d b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b 8 8 8 8 8 8 8 8 6 6 8 8 8 8 8 8 8 b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . 8 6 6 8 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . 8 6 6 8 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . 8 6 6 8 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . 8 6 6 8 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . 8 6 6 8 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . 8 6 6 8 . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . 8 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . c . . . 8 6 6 . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . 8 8 8 . . 8 8 8 . . 8 8 8 . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b 8 . . . . . . . . . . . . . . . 8 b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . 8 8 8 . . . . . . . . . 8 8 8 . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b . . . . 8 8 8 . 1 . 8 8 8 . . . . b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b d . . . . . . . . . . . . . . . d b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b d . . . . . . 8 8 8 . . . . . . d b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    `,
img`
    b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 
    b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 
    b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 
    b b . . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 
    b b . . 5 a 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . b b b b b 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b 
    d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d 
    . . b b b b b b b b . . . . . . . . . 6 6 . . . . . . . . . . b b b b b b b b b 
    c . b b b b b b b b b . . . . . . 2 b 6 6 b 2 . . . . . . . b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b 6 6 b b b b b b b b b b b b b b b b b b b 
    . . . . . . . . . . . . . . . . . . . 6 6 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 6 6 . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . b b b b b b . . . . . . . . . . . . . . . . . 
    d . . . . . . . . . . . . . . . b b b b b b b b . . 8 f 8 . . . . . . . . . . d 
    d . . . . . . . . . . . . . . . b b b b b b b b . . . . . . . . . . c . . . . d 
    6 b b b b 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    6 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    6 . . . . . . . . . . . . . . . . . . 8 f 8 . . . . . . . . . . . . . . . . . . 
    6 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b b . . 2 . . . . . 2 . . . . b b b b b b b b b . . . . . . . . . . . . . . 
    b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 b b b b b b b b b b 6 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6 
    . . . . 8 f 8 . . . b . . b . . . . . . . . b . . . b . . . . . . . . . . . . 6 
    . . . 1 . . . . . b b . . b b . . . . . 2 b b . . . b b . . . . . . . . . . . 6 
    . . . . . . . . b b b . c b b b b b b b b b b . . . b b b . . . . . . . . . . 6 
    b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 b b b b b b b b b b b b b b 
    `,
img`
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . 8 f 8 . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . 5 5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . 5 5 c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b . . . . 2 . . . . . . . . . . . . . . a . 
    . . . . . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b . . b b . . b b . . b b . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b . . . . . . . . . . . . . b b b 
    b b b b . . b b . . b b 4 4 b b 4 4 4 b b . . b b . b . b . b . b . b . b . b . b . b . b . b b b b b b . . . b b . . . b b . . . . b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b 
    b b b b . . b b 4 4 b b 4 4 b b 4 4 4 b b . . b b . b . b . b . b . b . b . b . b . b . b . b b b b b b . . . b b . . . b b . . . . b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b 
    b b b b 4 4 b b 4 4 b b 4 4 b b 4 4 4 b b 4 4 b b 4 b 4 b 4 b 4 b 4 b 4 b 4 b 4 b 4 b 4 b 4 b b b b b b 4 4 4 b b 4 4 4 b b 4 4 4 4 b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b 
    `,
img`
    . . 6 6 . . . . . . 
    . . 6 6 . . . a . . 
    b b 6 6 b b b b b b 
    . . 6 6 . . . . . . 
    . . 6 6 . . . . . . 
    . . 6 6 . . . . . c 
    d . 6 6 6 6 6 6 6 6 
    . . 6 6 6 6 6 6 6 6 
    . . . . . . . . 6 6 
    . . . . . . . . 6 6 
    . . . . . . . . 6 6 
    d . . . . . . . 6 6 
    . . . . . . . . 6 6 
    . . . . . . . . 6 6 
    . . . . . . . . 6 6 
    . . . . . . . . 6 6 
    . . . . . . . . 6 6 
    . . . . . . . . 6 6 
    c . . . . . . . 6 d 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 . . . . . . . 
    6 6 6 . . . . . . d 
    6 6 6 . . . . . . . 
    6 6 6 . . . . . . . 
    6 d 6 . . . . . . . 
    6 6 6 . . . . . . . 
    6 6 6 . . . . . . c 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 d 
    6 6 6 . . . . 6 6 6 
    6 6 6 . . . . 6 6 6 
    6 6 6 . . . . 6 6 6 
    6 6 6 . . . . 6 6 6 
    6 6 6 . . . . 6 6 6 
    6 6 6 . . . . 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    d 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 
    . . . . 6 6 6 . . . 
    . . . . 6 6 d . . . 
    . . . . 6 6 6 . . . 
    . . . . 6 6 6 . . . 
    . . . . 6 6 6 . . . 
    . . 1 . 8 f 8 . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    b b b b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . a 
    b . . b b b b e b b b e b b b b 
    b . . . . . . . . . . . . . . . 
    b b . . . . . . . . . . . . . . 
    c . . . . . . . . . . . . . . . 
    b b b b b b b b e b b b b b . b 
    . . . 1 . . . . . . . . . . . b 
    . . . . . . . . . . . . . . b b 
    . . . . . . . . . . . . . . b b 
    b b b b b b b b e b b b b b b b 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 1 . . . . . . . . . . . . . . 
    7 7 7 . . . . . . 6 . . . . . . 
    e e e . . . 7 7 7 6 . . . . . . 
    e e e . . . e e e 6 . . . . . . 
    e e e . . . e e e 6 . . . . . . 
    e e e . . . e e e 6 . . . . . . 
    5 5 5 . . . e e e 6 . . . . . . 
    5 5 5 . . . e e e 6 . . . . . c 
    a 5 5 . . . e e e 7 7 7 7 7 7 7 
    e e e . . . e e e e e e e e e e 
    e e e 4 4 4 e e e e e e e e e e 
    `,
img`
    . . . . . b . . . . . . . . . . . . c b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . b . . . . . . f . . b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . b . . . . . . . . b . . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . b . . . . . . . b . . . . . b . . . . . . . . . . . . . . . . . . . . . c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . b . . . . . . b . . . . . . b . . . . . . . . . . . . . . . . . . b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . b . . . . . b . . . . . . . b . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . b . . . . b . . . . . . . . b . . . . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . b . . . b . . . . . . . . . b . . . . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . b . . . . . . . . 5 b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . b b . . b b . . . b b . . . . . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . 1 . . b . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8 f 8 . . . . . b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b . . b 4 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    b b b . . b 4 . . . . . b b . . . b b . . b . . b . b b b . . . . . . . . . . . . . . . . . . . . . . b . . . . b . . . b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3 . . . . . . . a 
    b b b . . b 4 . . . . . . . . . . b b 4 4 b 4 4 b 4 b b b . . . . b b . b . . . . b . . b b b . . . . b . . . . b . . . b . . . . b b . b b . . b b . . b b b . . b b . . b b b b b b b b b b b b b b b 
    b b b 4 4 b 4 b b b b . . . . b b b b 4 4 b 4 4 b 4 b b b . . . . b b . b . . . . b . . b b b . . . . b . . . . . . . . . . . . . b b . b b . . b b . . b b b . . b b . . b b . . . . . . . . . . . . . 
    b b b 4 4 b 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 b 4 4 b 4 b b b 4 4 4 4 b b 4 b 4 4 4 4 b 4 4 b b b . . b b . . . . . . . . . . . . . . b b 4 b b 4 4 b b 4 4 b b b 4 4 b b 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 d b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 6 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 6 c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    `,
img`
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 5 . . . . . . . . c . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 5 . 4 4 . 5 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . d d 6 6 . . . . . . . . . . . . . . . . . . . . . . . a . . 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 7 . . 2 . . . . . . . . . . . f 7 7 7 7 7 7 4 4 4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 8 . . . . b b b b b . b . b . b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 7 7 7 7 7 7 
    d d . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 6 6 6 6 6 6 6 6 6 6 d 7 7 7 7 . . . . . 7 e e e 7 7 7 7 7 . . . 2 . . . . . . e e e e e e 4 4 4 4 e e e e e e e e e e e e e e e e 8 8 8 8 8 4 4 4 4 4 b b b b b 4 b 4 b 4 b b b d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 e e e e e e 
    d d . . . . 1 . . . . . . . . . . . . . . . . . . . . . . 7 7 . . e e d 6 6 6 6 6 6 6 6 6 6 e e e e . . . . . e e e e e e e e e 7 7 7 7 7 7 7 7 7 7 e e e e e e 4 4 4 4 e e e e e e e e e e e e e e e e 8 8 8 8 4 4 4 4 4 4 b b b b b 4 b 4 b 4 b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d e e e e e e 
    d d c . . . . . . . 7 7 7 7 7 7 . . . . 7 7 7 . . 7 7 . . e e . . e e d 6 6 6 6 6 6 6 6 6 6 e e e e 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 e e e e e e e e e e e e e e e e 8 8 8 4 4 4 4 4 4 4 b b b b b 4 b 4 b 4 b b b d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 5 5 e e e e 
    7 7 7 7 7 7 7 7 7 7 e e e e e e . . . . e e e . . e e . . e e 4 4 e e 6 6 6 6 6 6 6 6 6 6 d e e e e 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 e e e e e e e e e e e e e e e e 8 8 4 4 4 4 4 4 4 4 b b b b b 4 b 4 b 4 b b b 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 5 c e e e e 
    e e e e e e e e e e e e e e e e 4 4 4 4 e e e 4 4 e e 4 4 e e 4 4 e e 4 4 4 4 4 4 4 4 4 4 4 e e e e 4 4 4 4 4 e e e e e e e e e e e e e e e e e e e e e e e e e 4 4 4 4 e e e e e e e e e e e e e e e e 8 4 4 4 4 4 4 4 4 4 b b b b b 4 b 4 b 4 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e e e e e 
    `,
img`
    a a 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    c 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 6 6 
    d 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 d 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    1 . 6 6 6 6 6 6 6 6 6 6 6 6 6 d 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `,
mySprite3,
mySprite3
]
level = game.askForNumber("level", 2)
scene.setTileMap(list[level])
scene.setBackgroundColor(8)
scene.setTile(1, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(3, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(5, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(2, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(12, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(13, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
scene.setTile(10, img`
    f f f f f f f f f f f f f f f f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 f 5 f 5 f 5 f 5 f f 5 5 5 f 
    f 5 f 5 f 5 f 5 5 5 f 5 f 5 5 f 
    f 5 f 5 f 5 f 5 f 5 f 5 f 5 5 f 
    f 5 f 5 f 5 f 5 f 5 f 5 f 5 5 f 
    f 5 f 5 f 5 f 5 f 5 f 5 f 5 5 f 
    f 5 f 5 f 5 f 5 f 5 f 5 f 5 5 f 
    f 5 5 f 5 f 5 5 f 5 f 5 f 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 f 5 5 5 5 5 5 5 5 5 5 f 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f f f f f f f f f f f f f f f f 
    `, true)
scene.setTile(7, img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    e 7 7 7 e 7 7 7 e 7 7 7 e 7 7 7 
    e e 7 e e e 7 e e e 7 e e e 7 e 
    e e e e e e e e e e e e e e e e 
    e 4 e e 4 e e e 4 e e e 4 e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e 4 e e e 
    e e e 4 e e e 4 e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e 4 e e e e e 4 e e 
    e e e 4 e e e e e e e e e e e e 
    e e e e e e e e e e 4 e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `, true)
scene.setTile(14, img`
    e e e e e e e e e e e e e e e e 
    e e e e e 4 e e e e e 4 e e e e 
    e e e e e e e e e e e e e e 4 e 
    e e 4 e e e e e 4 e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e 4 e e 4 e e e 4 e e e 4 e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e 4 e e e 
    e e e 4 e e e 4 e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e 4 e e e e e 4 e e 
    e e e 4 e e e e e e e e e e e e 
    e e e e e e e e e e 4 e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    `, true)
scene.setTile(6, img`
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 6 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 6 6 6 
    6 6 6 9 9 9 6 6 6 9 9 9 9 6 6 6 
    9 9 6 6 6 9 9 9 9 9 9 6 6 6 6 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, false)
scene.setTile(11, img`
    b d d d d d d d d d d d d d d c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    d b b b b b b b b b b b b b b c 
    c c c c c c c c c c c c c c c a 
    `, true)
scene.setTile(4, img`
    5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
    4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
    4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
    2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
    2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
    4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
    2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
    4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
    5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
    4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
    4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
    5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
    5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
    4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
    4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
    4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
    `, true)
scene.setTile(6, img`
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
    . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 . 
    `, false)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f f f f d d d d d e e f . . 
    . f d d d d f 4 4 4 e e f . . . 
    . f b b b b f 2 2 2 2 f 4 e . . 
    . f b b b b f 2 2 2 2 f d 4 . . 
    . . f c c f 4 5 5 4 4 f 4 4 . . 
    . . . f f f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
info.setLife(3)
mySprite.ay = 100
scene.cameraFollowSprite(mySprite)
scene.placeOnRandomTile(mySprite, 1)
controller.moveSprite(mySprite, 100, 0)
for (let value4 of scene.getTilesByType(5)) {
    mySprite2 = sprites.create(img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `, SpriteKind.coin)
    scene.place(value4, mySprite2)
    animation.runImageAnimation(
    mySprite2,
    [img`
        . . b b b b . . 
        . b 5 5 5 5 b . 
        b 5 d 3 3 d 5 b 
        b 5 3 5 5 1 5 b 
        c 5 3 5 5 1 d c 
        c d d 1 1 d d c 
        . f d d d d f . 
        . . f f f f . . 
        `,img`
        . . b b b . . . 
        . b 5 5 5 b . . 
        b 5 d 3 d 5 b . 
        b 5 3 5 1 5 b . 
        c 5 3 5 1 d c . 
        c 5 d 1 d d c . 
        . f d d d f . . 
        . . f f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 d 1 5 b . 
        . b 5 3 1 5 b . 
        . c 5 3 1 d c . 
        . c 5 1 d d c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . b 5 1 d 5 b . 
        . b 5 1 3 5 b . 
        . c d 1 3 5 c . 
        . c d d 1 5 c . 
        . . f d d f . . 
        . . . f f . . . 
        `,img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `],
    100,
    true
    )
}
if (level == 10) {
    info.setLife(4)
} else {
    if (!(level >= 17)) {
        for (let value222 of scene.getTilesByType(2)) {
            mySprite2 = sprites.create(img`
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . f f f f . . . . . . . . . . 
                . . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
                . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
                . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . . 
                . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
                . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . . 
                . . . . . . f d d d 1 1 1 1 d d d f . . . . . . 
                . . . . . . f b d b f d d f b d b f . . . . . . 
                . . . . . . f c d c f 1 1 f c d c f . . . . . . 
                . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
                . . . . . . f f f c d b 1 b d f f f f . . . . . 
                . . . . f c 1 1 1 c b f b f c 1 1 1 c f . . . . 
                . . . . f 1 b 1 b 1 f f f f 1 b 1 b 1 f . . . . 
                . . . . f b f b f f f f f f b f b f b f . . . . 
                . . . . . . . . . f f f f f f . . . . . . . . . 
                . . . . . . . . . . . f f f . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            scene.place(value222, mySprite2)
            mySprite2.ay = 100
        }
    }
}
if (!(level >= 17)) {
    for (let value32 of scene.getTilesByType(3)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.place(value32, mySprite2)
        mySprite2.vy = 50
        mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
    }
    for (let value42 of scene.getTilesByType(13)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        scene.place(value42, mySprite2)
        mySprite2.vx = 50
        mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
    }
}
for (let value522 of scene.getTilesByType(12)) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . 
        . . 3 3 3 3 3 3 3 . 
        . 3 3 5 5 4 5 5 3 3 
        . 3 5 5 4 4 4 5 5 3 
        . 3 4 4 4 4 4 4 4 3 
        . 3 5 4 4 4 4 4 5 3 
        . 3 5 5 4 4 4 5 5 3 
        . 3 5 5 4 5 4 5 5 3 
        . 3 3 5 5 5 5 5 3 3 
        . . 3 3 3 3 3 3 3 . 
        `, SpriteKind.Food)
    scene.place(value522, mySprite2)
}
mareo()
if (game.ask("pet")) {
    pet()
}
game.onUpdateInterval(5000, function () {
    if (boss_fight == 1) {
        music.pewPew.play()
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.vx = 50
        mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
        mySprite2.x = theboss.x
        mySprite2.y = theboss.y
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.vx = -50
        mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
        mySprite2.x = theboss.x
        mySprite2.y = theboss.y
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.vy = 50
        mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
        mySprite2.x = theboss.x
        mySprite2.y = theboss.y
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        mySprite2.vy = -50
        mySprite2.setFlag(SpriteFlag.DestroyOnWall, true)
        mySprite2.x = theboss.x
        mySprite2.y = theboss.y
    }
})
game.onUpdateInterval(5000, function () {
    if (level >= 17) {
        sprite_list = sprites.allOfKind(SpriteKind.boss111)
        if (sprite_list.length >= 1) {
            for (let value6 of sprite_list) {
                for (let index = 0; index < 47; index++) {
                    value6.y += -1
                }
            }
        }
    }
})
game.onUpdateInterval(2000, function () {
    if (level >= 17) {
        sprite_list = sprites.allOfKind(SpriteKind.boss111)
        if (sprite_list.length >= 1) {
            for (let value7 of sprite_list) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 2 2 2 2 2 2 2 2 . . . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
                    . 2 2 2 2 4 4 4 4 4 5 2 2 . . . 
                    . 2 2 2 4 4 4 4 4 4 5 5 2 2 . . 
                    . 2 2 2 4 4 4 4 4 4 5 5 2 2 . . 
                    . 2 2 2 2 4 4 4 4 4 5 2 2 . . . 
                    . . 2 2 2 2 2 2 2 2 2 2 . . . . 
                    . . . 2 2 2 2 2 2 2 2 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value7, -55, 0)
                projectile.setKind(SpriteKind.fire)
                projectile.setFlag(SpriteFlag.AutoDestroy, false)
                if (Math.percentChance(50)) {
                    projectile.y += -8
                } else {
                    projectile.y += 6
                }
            }
        }
    }
})
forever(function () {
	
})
forever(function () {
    if (controller.B.isPressed() && mySprite.isHittingTile(CollisionDirection.Bottom)) {
        controller.moveSprite(mySprite, 150, 0)
    } else {
        controller.moveSprite(mySprite, 100, 0)
    }
})
forever(function () {
    if (level >= 17) {
        if (controller.A.isPressed()) {
            pause(1)
        } else {
            if (!(controller.A.isPressed()) && mySprite.isHittingTile(CollisionDirection.Bottom)) {
                if (controller.right.isPressed()) {
                    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                    animation.runImageAnimation(
                    mySprite,
                    [img`
                        . . . 2 2 2 2 2 2 . . . . . . 
                        . . 2 2 2 2 2 2 2 2 2 2 . . . 
                        . . e e e 4 4 e 4 4 . . . . . 
                        . e 4 e 4 4 4 e 4 4 4 4 . . . 
                        . e 4 e e 4 4 4 e 4 4 4 4 . . 
                        . e e 4 4 4 4 e e e e e . . . 
                        . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . e e 2 e e e e . . . . . . 
                        . e e e 2 e e 2 e e e e . . . 
                        e e e e 2 2 2 2 e e e e e . . 
                        4 4 e 2 4 2 2 4 2 e 4 4 4 . . 
                        4 4 4 2 2 2 2 2 2 4 4 4 4 . . 
                        4 4 2 2 2 2 2 2 2 2 4 4 4 . . 
                        . . 2 2 2 2 . 2 2 2 2 . . . . 
                        . e e e e . . . e e e e . . . 
                        e e e e e . . . e e e e e . . 
                        . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . 2 2 2 2 2 2 . . . . . 
                        . . . 2 2 2 2 2 2 2 2 2 2 . . 
                        . . . e e e 4 4 e 4 4 . . . . 
                        . . e 4 e 4 4 4 e 4 4 4 4 . . 
                        . . e 4 e e 4 4 4 e 4 4 4 4 . 
                        . . e e 4 4 4 4 e e e e e . . 
                        . . . . 4 4 4 4 4 4 4 4 . . . 
                        . . . e e e e 2 e e 4 4 . . . 
                        . . 4 e e e e e e 4 4 4 4 . . 
                        . 4 4 2 e e e e e 4 4 4 . . . 
                        . e e 2 2 2 2 2 2 2 2 . . . . 
                        . e 2 2 2 2 2 2 2 2 2 . . . . 
                        e e 2 2 2 2 2 2 2 2 . . . . . 
                        e e . . . e e e e . . . . . . 
                        . . . . . e e e e e . . . . . 
                        . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . 
                        `,img`
                        . . . 2 2 2 2 2 2 . . . . . . 
                        . . 2 2 2 2 2 2 2 2 2 2 . . . 
                        . . e e e 4 4 e 4 4 . . . . . 
                        . e 4 e 4 4 4 e 4 4 4 4 . . . 
                        . e 4 e e 4 4 4 e 4 4 4 4 . . 
                        . e e 4 4 4 4 e e e e e . . . 
                        . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . e e 2 e e e e . . . . . . 
                        . e e e e 2 2 e e e . . . . . 
                        . e e e 2 2 4 2 2 4 4 . . . . 
                        . e e e e 2 2 2 2 2 2 . . . . 
                        . 2 e e 4 4 4 2 2 2 2 . . . . 
                        . . 2 e 4 4 2 2 2 2 . . . . . 
                        . . . 2 2 2 e e e e . . . . . 
                        . . . e e e e e e e e . . . . 
                        . . . e e e e e . . . . . . . 
                        . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . 2 2 2 2 2 2 . . . . 
                        . . . . 2 2 2 2 2 2 2 2 2 2 . 
                        . . . . e e e 4 4 e 4 4 . . . 
                        . . . e 4 e 4 4 4 e 4 4 4 4 . 
                        . . . e 4 e e 4 4 4 e 4 4 4 4 
                        . . . e e 4 4 4 4 e e e e e . 
                        . . . . . 4 4 4 4 4 4 4 4 . . 
                        . . e e e e 2 2 e e e . . . . 
                        4 4 e e e e 2 2 2 e e e 4 4 . 
                        4 4 4 4 e e 2 4 2 2 2 e e 4 . 
                        4 4 4 . 2 2 2 2 2 2 2 2 . e . 
                        . . . 2 2 2 2 2 2 2 2 2 e e . 
                        . . 2 2 2 2 2 2 2 2 2 2 e e . 
                        . e e 2 2 2 2 . . 2 2 2 e e . 
                        . e e e e . . . . . . . . . . 
                        . . e e e e . . . . . . . . . 
                        . . . . . . . . . . . . . . . 
                        `],
                    100,
                    false
                    )
                    pause(400)
                } else if (controller.left.isPressed()) {
                    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                    animation.runImageAnimation(
                    mySprite,
                    [img`
                        . . . . . . 2 2 2 2 2 2 . . . 
                        . . . 2 2 2 2 2 2 2 2 2 2 . . 
                        . . . . . 4 e 4 4 e e e e . . 
                        . . . 4 4 4 e 4 4 4 e 4 e e . 
                        . . 4 4 4 e 4 4 4 e e 4 e e . 
                        . . . e e e e 4 4 4 4 e e e . 
                        . . . . 4 4 4 4 4 4 4 4 . . . 
                        . . . . . . e e e 2 e e e . . 
                        . . . e e e 2 e e 2 e e e e . 
                        . . e e e e 2 2 2 2 e e e e e 
                        . . 4 4 e 2 4 2 2 4 2 e 4 4 4 
                        . . 4 4 4 2 2 2 2 2 2 4 4 4 4 
                        . . 4 4 2 2 2 2 2 2 2 2 4 4 4 
                        . . . . 2 2 2 2 . 2 2 2 2 . . 
                        . . . e e e e . . . e e e e . 
                        . . e e e e e . . . e e e e e 
                        . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . 2 2 2 2 2 2 . . . . . 
                        . 2 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 4 e 4 4 e e e e . . . . 
                        . 4 4 4 e 4 4 4 e 4 e e . . . 
                        4 4 4 e 4 4 4 e e 4 e e . . . 
                        . e e e e 4 4 4 4 e e e . . . 
                        . . 4 4 4 4 4 4 4 4 . . . . . 
                        . . 4 4 e 2 e e e e e . . . . 
                        . 4 4 4 e e e e e e 4 4 . . . 
                        . . 4 4 e e e e e 2 4 4 4 . . 
                        . . . 2 2 2 2 2 2 2 e e e . . 
                        . . . 2 2 2 2 2 2 2 2 e e . . 
                        . . . . 2 2 2 2 2 2 2 e e e . 
                        . . . . . e e e e . . . e e . 
                        . . . . e e e e e . . . . . . 
                        . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . 2 2 2 2 2 2 . . . . . 
                        . 2 2 2 2 2 2 2 2 2 2 . . . . 
                        . . . 4 e 4 4 e e e e . . . . 
                        . 4 4 4 e 4 4 4 e 4 e e . . . 
                        4 4 4 e 4 4 4 e e 4 e e . . . 
                        . e e e e 4 4 4 4 e e e . . . 
                        . . 4 4 4 4 4 4 4 4 . . . . . 
                        . . . . e e e 2 e e e . . . . 
                        . . . e e 2 2 e e e e e . . . 
                        . . 4 2 2 4 2 2 e e e e . . . 
                        . . 2 2 2 2 2 e e e e e . . . 
                        . . 2 2 2 4 4 4 e e 2 2 . . . 
                        . . . 2 2 2 4 4 e 2 2 . . . . 
                        . . . e e e 2 2 2 2 . . . . . 
                        . . e e e e e e e e . . . . . 
                        . . . . . e e e e e . . . . . 
                        . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . 2 2 2 2 2 2 . . . . 
                        . . 2 2 2 2 2 2 2 2 2 2 . . . 
                        . . . . 4 e 4 4 e e e e . . . 
                        . . 4 4 4 e 4 4 4 e 4 e e . . 
                        . 4 4 4 e 4 4 4 e e 4 e e . . 
                        . . e e e e 4 4 4 4 e e e . . 
                        . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . . . . e e 2 2 e e e e e . 
                        4 4 4 e e e 2 2 2 e e e e 4 4 
                        4 4 e e 2 2 2 4 2 e e e 4 4 4 
                        . e e . 2 2 2 2 2 2 2 2 . 4 4 
                        . e e 2 2 2 2 2 2 2 2 2 2 . . 
                        . e e 2 2 2 2 2 2 2 2 2 2 2 . 
                        . e e 2 2 2 2 . . 2 2 2 e e e 
                        . . . . . . . . . . . e e e e 
                        . . . . . . . . . . e e e e . 
                        . . . . . . . . . . . . . . . 
                        `],
                    100,
                    false
                    )
                    pause(400)
                } else {
                    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
                    mySprite.setImage(img`
                        . . . 2 2 2 2 2 2 . . . . . . 
                        . . 2 2 2 2 2 2 2 2 2 2 . . . 
                        . . e e e 4 4 e 4 4 . . . . . 
                        . e 4 e 4 4 4 e 4 4 4 4 . . . 
                        . e 4 e e 4 4 4 e 4 4 4 4 . . 
                        . e e 4 4 4 4 e e e e e . . . 
                        . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . e e 2 e e e e . . . . . . 
                        . e e e 2 e e 2 e e e e . . . 
                        e e e e 2 2 2 2 e e e e e . . 
                        4 4 e 2 4 2 2 4 2 e 4 4 4 . . 
                        4 4 4 2 2 2 2 2 2 4 4 4 4 . . 
                        4 4 2 2 2 2 2 2 2 2 4 4 4 . . 
                        . . 2 2 2 2 . 2 2 2 2 . . . . 
                        . e e e e . . . e e e e . . . 
                        e e e e e . . . e e e e e . . 
                        . . . . . . . . . . . . . . . 
                        `)
                }
            }
        }
    }
})
game.onUpdateInterval(10000, function () {
    if (level == 10) {
        scene.setTile(8, img`
            . . . . . 1 1 . . 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 d 1 1 d 1 . . . . . 
            . . . . . 1 d 1 1 d 1 . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 d d 1 1 . . . . . 
            . . . . 1 1 d 1 1 d 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . 1 1 1 1 1 1 1 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, false)
        scene.setTile(15, img`
            f f f f f f f f f f f f f f f f 
            f e e e e e e e e e e e e e e f 
            f 1 1 e e e e e e e e e e e e f 
            f 1 e 1 e e 1 1 e e e 1 e e 1 f 
            f 1 1 e e 1 e e 1 e 1 e e 1 e f 
            f 1 e 1 e 1 e e 1 e e 1 e e 1 f 
            f 1 1 e e e 1 1 e e 1 e e 1 e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            . . . . . . f e e f . . . . . . 
            `, true)
        scene.setTile(6, img`
            d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            1 d d d d d d d d d d d d d d b 
            b b b b b b b b b b b b b b b b 
            `, true)
        if (boss_fight == 0) {
            music.pewPew.play()
            for (let value5222 of scene.getTilesByType(8)) {
                myentywww = sprites.create(img`
                    . . . . 2 2 2 2 2 e . . . . . . 
                    . . . 2 2 2 2 d 2 2 e . . . . . 
                    . . e 2 2 2 2 2 2 2 e . . . . . 
                    . . e 2 2 2 2 2 2 2 e . . . . . 
                    . . e 2 2 2 2 2 e f f c c . . . 
                    . . e e 2 2 e f f f f b c . . . 
                    . e e e f e 2 b f f f d c . . . 
                    e e 2 2 d f 2 1 1 1 1 b c . . . 
                    e e 2 2 d f e e c c c . . . . . 
                    b 1 1 d e 2 2 e e c . . . . . . 
                    . f f e 2 2 2 2 e . . . . . . . 
                    . . f f d d 2 2 f f d d . . . . 
                    . . f f d d e e f f d d . . . . 
                    . . . f f f f . . . . . . . . . 
                    . . e e e f f f . . . . . . . . 
                    . . e e e e f f f . . . . . . . 
                    `, SpriteKind.minyboss221)
                sprites.setDataNumber(myentywww, "life", 2)
                scene.place(value5222, myentywww)
                myentywww.vx = 90
                myentywww.ay = 100
            }
        }
    }
})
