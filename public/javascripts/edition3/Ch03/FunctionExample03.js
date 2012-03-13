//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/FunctionExample03.htm
//Function Example 3
function diff(num1, num2) {
    if (num1 < num2) {
        return num2 - num1;
    } else {
        return num1 - num2;
    }
}

var result = diff(7, 10);
print(result);
    