//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/FunctionTypeExample.htm
//Function Type Example
    
function sum(num1, num2){
    return num1 + num2;
}        
print(sum(10,10));    //20

var anotherSum = sum;        
print(anotherSum(10,10));  //20

sum = null;        
print(anotherSum(10,10));  //20

    