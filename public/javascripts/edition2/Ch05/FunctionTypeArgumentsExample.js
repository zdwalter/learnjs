//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/FunctionTypeArgumentsExample.htm
//Function Type Arguments Example

function factorial(num){
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num-1)
    }
}

var trueFactorial = factorial;

factorial = function(){
    return 0;
};

print(trueFactorial(5));   //120
print(factorial(5));       //0


    