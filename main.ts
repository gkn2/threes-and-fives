let my_sprite = sprites.create(assets.image`mc`, SpriteKind.Player)
let num = game.askForNumber("Enter any number between 1 and 100")
if (num % 3 == 0 && num % 5 == 0) {
    my_sprite.sayText("FizzBuzz")
} else if (num % 3 == 0) {
    my_sprite.sayText("Fizz")
} else if (num % 5 == 0) {
    my_sprite.sayText("Buzz")
} else {
    my_sprite.sayText(num)
}

