//Exercise 39: Doing Things To Lists
ten_things = "Apples Oranges Crows Telephone Light Sugar"

print("Wait there's not 10 things in that list, let's fix that.")

stuff = ten_things.split(' ')
more_stuff = ["Day", "Night", "Song", "Frisbee", "Corn", "Banana", "Girl", "Boy"]

while (stuff.length != 10){
    next_one = more_stuff.pop()
    print("Adding: ", next_one)
    stuff.push(next_one)
    print("There's "+stuff.length+" items now.")
}

print("There we go: ", stuff)

print("Let's do some things with stuff.")

print(stuff[1])
print(stuff.slice(-1)) // whoa! fancy
print(stuff.pop())
print(stuff.join(' ')) // what? cool!
print(stuff.slice(3,5).join('#')) // super stellar!
