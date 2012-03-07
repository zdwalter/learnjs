// Calculating square roots by Newton's method, inspired by SICP
//   http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-10.html#%_sec_1.1.7

sqrt = function(x) {
    average = function(a, b) {
        return (a + b) / 2.0
    }
    is_good_enough = function(guess) {
        return (Math.abs((guess * guess) - x) < 0.001)
    }
    improve = function(guess) {
        return average(guess, x / guess)
    }
    sqrt_iter = function(guess) {
        if (is_good_enough(guess))
            return guess
        else
            return sqrt_iter(improve(guess))
    }
    return sqrt_iter(1.0)
}
ans = sqrt(9)
