//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch14/AssertExample.htm
//Assert Example
    
function assert(condition, message){
    if (!condition){
        throw new Error(message);
    }
}
    
function divide(num1, num2){
    assert(typeof num1 == "number" && typeof num2 == "number", 
           "divide(): Both arguments must be numbers.");
    return num1 / num2;
}

var result = divide(10, 23);
result = divide("hi", 3);

    