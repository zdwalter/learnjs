//Exercise 42: Gothons Are Getting Classy
TheThing = function() {
    var self = this
    self.number = 0

    self.some_function = function() {
        print("I got called.")
    }

    self.add_me_up = function(more) {
        self.number += more
        return self.number
    }
}

// two different things
a = new TheThing()
b = new TheThing()

a.some_function()
b.some_function()

print(a.add_me_up(20))
print(a.add_me_up(20))
print(b.add_me_up(30))
print(b.add_me_up(30))

print(a.number)
print(b.number)
