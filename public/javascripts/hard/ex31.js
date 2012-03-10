//Exercise 31: Making Decisions

print("You enter a dark room with two doors.  Do you go through door #1 or door #2?")

function go(door, opt) {
if (door == "1") {
    print("There's a giant bear here eating a cheese cake.  What do you do?")
    print("1. Take the cake.")
    print("2. Scream at the bear.")

    bear = opt

    if (bear == "1")
        print("The bear eats your face off.  Good job!")
    else if (bear == "2")
        print("The bear eats your legs off.  Good job!")
    else
        print("Well, doing "+bear+" is probably better.  Bear runs away.")
} else if (door == "2") {
    print("You stare into the endless abyss at Cthulhu's retina.")
    print("1. Blueberries.")
    print("2. Yellow jacket clothespins.")
    print("3. Understanding revolvers yelling melodies.")

    insanity = opt
    
    if (insanity == "1" || insanity == "2")
        print("Your body survives powered by a mind of jello.  Good job!")
    else
        print("The insanity rots your eyes into a pool of muck.  Good job!")
} else
    print("You stumble around and fall on a knife and die.  Good job!")
}

print("choose:", "1", "1")
go("1", "1")
print("choose:", "1", "2")
go("1", "2")
print("choose:", "1", "3")
go("1", "3")
print("choose:", "2", "1")
go("2", "1")
print("choose:", "2", "2")
go("2", "2")
print("choose:", "2", "3")
go("2", "3")
print("choose:", "3")
go("3")

