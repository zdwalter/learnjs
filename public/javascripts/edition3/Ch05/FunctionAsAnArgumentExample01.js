//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/FunctionAsAnArgumentExample01.htm
//Function as an Argument Example
function callSomeFunction(someFunction, someArgument){
    return someFunction(someArgument);
}

function add10(num){
    return num + 10;
}

var result1 = callSomeFunction(add10, 10);
print(result1);   //20

function getGreeting(name){
    return "Hello, " + name;
}

var result2 = callSomeFunction(getGreeting, "Nicholas");
print(result2);   //Hello, Nicholas

    