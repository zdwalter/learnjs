//Exercise 32: Loops And Lists
the_count = [1, 2, 3, 4, 5]
fruits = ['apples', 'oranges', 'pears', 'apricots']
change = [1, 'pennies', 2, 'dimes', 3, 'quarters']

// this first kind of for-loop goes through a list
for (var number in the_count)
    print("This is count " + the_count[number])

// same as above
for (var fruit in fruits)
    print("A fruit of type: " + fruits[fruit])

// also we can go through mixed lists too
// notice we have to use %r since we don't know what's in it
for (var i in change)
    print("I got " + change[i])

// we can also build lists, first start with an empty one
elements = []

function range(start, end) {
    var list = [];
    while(start < end) {
        list.push(start);
        start++;
    }
    return list
}
// then use the range function to do 0 to 5 counts
for (var i in range(0, 6)) {
    print("Adding "+i+" to the list.")
    // append is a function that lists understand
    elements.push(i)
}

// now we can print(them out too
for (var i in elements)
    print("Element was: " + elements[i])
