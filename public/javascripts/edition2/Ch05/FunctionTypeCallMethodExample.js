//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/FunctionTypeCallMethodExample.htm
//Function Type call() Method Example

function sum(num1, num2){
    return num1 + num2;
}

function callSum(num1, num2){
    return sum.call(this, num1, num2);
}

print(callSum(10,10));   //20

    