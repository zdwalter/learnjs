//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/RecursionExample1.htm
//Recursion Example

    function factorial(num){
        if (num <= 1){
            return 1;
        } else {
            return num * factorial(num-1);
        }
    }

    var anotherFactorial = factorial;
    factorial = null;
    print(anotherFactorial(4));  //error!


