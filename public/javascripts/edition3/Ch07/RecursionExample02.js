//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/RecursionExample02.htm
//Recursion Example

    function factorial(num){
        if (num <= 1){
            return 1;
        } else {
            return num * arguments.callee(num-1);
        }
    }

    var anotherFactorial = factorial;
    factorial = null;
    print(anotherFactorial(4));  //24


