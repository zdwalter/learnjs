// Example of aliasing
x = [1, 2, 3]
y = x
x.push(4)
y.push(5)
z = [1, 2, 3, 4, 5]
x.push(6)
y.push(7)
y = "hello"

foo = function(lst) {
    lst.push("hello")
    bar(lst)
}

bar = function(myLst) {
    print(myLst)
}

foo(x)
foo(z)
