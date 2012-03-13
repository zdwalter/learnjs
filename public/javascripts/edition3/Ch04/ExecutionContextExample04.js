//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch04/ExecutionContextExample04.htm
//Execution Context Example 4
  
function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

var result = add(10, 20);  //30
print(sum);                //causes an error since sum is not a valid variable

      
    