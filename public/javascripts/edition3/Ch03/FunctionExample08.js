//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/FunctionExample08.htm
//Function Example 8
function doAdd(num1, num2) {
    if(arguments.length == 1) {
        print(num1 + 10);
    } else if (arguments.length == 2) {
        print(arguments[0] + num2);
    }
}


doAdd(10);        //20
doAdd(30, 20);    //50

    