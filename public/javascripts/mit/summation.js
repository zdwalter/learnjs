// Higher-order functions
// Adapted from MIT 6.01 course notes (Section A.2.2)
// http://mit.edu/6.01/mercurial/spring10/www/handouts/readings.pdf

function summation(low, high, f, next) {
    s = 0
    x = low
    while (x <= high) {
        s = s + f(x)
        x = next(x)
    }
    return s
}

function sumsquares(low, high) {
    return summation(low, high, 
        function(x) { return x*x}, 
        function(x) { return x+1})
}

print(sumsquares(1, 10))

