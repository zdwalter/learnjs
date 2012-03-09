//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/FunctionExample6.htm
//Function Example 6
function howManyArgs() {
    print(arguments.length);
}

howManyArgs("string", 45);    //2
howManyArgs();                //0
howManyArgs(12);              //1

    