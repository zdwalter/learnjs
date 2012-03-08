// Tutorial code from Prof. Peter Wentworth
// Rhodes University, South Africa (http://www.ru.ac.za/)

indentStr = "*************************************************"
function gcd(x, y, depth) {
    // this is how default value set
    depth = typeof depth !== 'undefined' ? depth : 1; 
    /* 
    Find the greatest common divisor of x, y
    Pre:  x >= y,  y >= 0, both x and y are int
    */
    result = x       // set provisional return value
    if (y != 0) {
        var indent = indentStr.slice(0,depth*2)
        print(indent + " About to recursively call gcd("+y+", "+(x%y)+")")
        result = gcd(y, x % y, depth+1)
        print(indent+" result is "+result)
    }
    return result
}

function main() {
    m = 77
    n = 28
    print("Finding gcd("+m+", "+n+")")
    g = gcd(m, n)
    print("Greatest common divisor of "+m+", "+n+" = "+g)
}

main()


