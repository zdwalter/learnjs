//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/FunctionExample09.htm
//Function Example 9
function doAdd(num1, num2) {
    //if(arguments.length == 1) {
        arguments[1] = 10;
    //}
    print(arguments[0] + num2);
}

doAdd(10, 20);        //20
doAdd(30, 20);    //50

    