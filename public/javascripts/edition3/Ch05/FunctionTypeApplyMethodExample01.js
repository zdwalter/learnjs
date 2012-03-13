//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/FunctionTypeApplyMethodExample01.htm
//Function Type apply() Method Example

function sum(num1, num2){
    return num1 + num2;
}

function callSum1(num1, num2){
    return sum.apply(this, arguments);
}

function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]);
}

print(callSum1(10,10));   //20
print(callSum2(10,10));   //20

    