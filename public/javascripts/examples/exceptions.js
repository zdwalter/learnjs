// Tutorial code from Prof. Peter Wentworth
// Rhodes University, South Africa (http://www.ru.ac.za/)

// Demonstrate recursion that throws an exception
// at its base case, and the tracing of try ... finally.
//
// How many "survived!" messages will be printed???

function f(n) {
    try {
        if (n === 0) throw "divide by zero"
        x = 10 / n
        print("x is", x)
        f(n-1)
        print("survived!")
    }
    catch(e) {
        print("exception:", e)
    }
    finally {
        print("Bye from f where n =", n)
    }
}

f(4)
