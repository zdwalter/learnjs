// Functional programming with map
// Adapted from MIT 6.01 course notes (Section A.2.3)
// http://mit.edu/6.01/mercurial/spring10/www/handouts/readings.pdf

function map(func, lst) {
    if (lst.length === 0)
        return []
    else {
        return [func(lst[0])].concat(map(func, lst.slice(1)))
    }
}
    
function halveElements(lst) {
    return map(function(x) { return x / 2.0 }, lst)
}
  
input = [2, 4, 6, 8, 10]
output = halveElements(input)
print(JSON.stringify(output))
