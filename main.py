my_sprite = sprites.create(assets.image("""mc"""), SpriteKind.player)

num = game.ask_for_number ("Enter any number between 1 and 100")

if (num % 3 == 0) and (num % 5 == 0): 
    my_sprite.say_text("FizzBuzz")
elif num % 3 == 0:
    my_sprite.say_text("Fizz")
elif num % 5 == 0:
    my_sprite.say_text ("Buzz")
else:
    my_sprite.say_text(num)