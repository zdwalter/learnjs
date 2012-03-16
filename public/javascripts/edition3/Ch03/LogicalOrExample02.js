//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/LogicalOrExample02.htm
//Logical OR Example 2
    
var found = false;
var result = (found || someUndeclaredVariable);    //error occurs here
print(result);    //this line never executes


    