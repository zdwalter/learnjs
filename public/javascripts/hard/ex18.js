//Exercise 18: Names, Variables, Code, Functions
// this one is like your scripts with argv
function print_two() {
    arg1 = arguments[0]
    arg2 = arguments[1]
    print("arg1: "+arg1+", arg2: "+arg2)
}

// ok, that *args is actually pointless, we can just do this
function print_two_again(arg1, arg2) {
    print("arg1: "+arg1+", arg2: "+arg2)
}

// this just takes one argument
function print_one(arg1) {
    print("arg1: ", arg1)
}

// this one takes no arguments
function print_none() {
    print("I got nothin'.")
}


print_two("Zed","Shaw")
print_two_again("Zed","Shaw")
print_one("First!")
print_none()
