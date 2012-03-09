//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/FunctionExample7.htm
//Function Example 7
function doAdd() {
    if(arguments.length == 1) {
        print(arguments[0] + 10);
    } else if (arguments.length == 2) {
        print(arguments[0] + arguments[1]);
    }
}

doAdd(10);        //20
doAdd(30, 20);    //50

    