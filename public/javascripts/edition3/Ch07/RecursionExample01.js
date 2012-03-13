//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/RecursionExample01.htm
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


