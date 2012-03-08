// Tutorial code from Prof. Peter Wentworth
// Rhodes University, South Africa (http://www.ru.ac.za/)

sumList = function(xs){
    /* 
    Sum a list that can contain nested lists.
    Precondition: All leaf elements are numbers.
    */
    var sum = 0
    for (var i in xs) {
        var e = xs[i];
        if (Object.prototype.toString.call(e) === '[object Array]') {
            print("Calling sumList("+JSON.stringify(e)+") recursively")
            var v = sumList(e)
            print("sumList("+JSON.stringify(e)+") returned "+v)
            sum += v
        }
        else
            sum += e
    }   
    return sum
}


testData = [10, [20, 30, [40], 50], 60]
print("Calling sumList("+JSON.stringify(testData)+")")
result = sumList(testData)
print("Final sum of all numbers in initial list is "+result)
