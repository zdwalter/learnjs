// dumb recursive factorial
fact = function(n) {
    if (n <= 1)
        return 1
    else
        return n * fact(n - 1)
}

print(fact(6))

