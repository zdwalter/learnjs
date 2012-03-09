//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/LogicalOrExample2.htm
//Logical OR Example 2
    
var found = false;
var result = (found || someUndefinedVariable);    //error occurs here
print(result);    //this line never executes


    