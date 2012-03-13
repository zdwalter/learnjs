//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/FunctionTypeArgumentsCallerExample01.htm
//Function Type Arguments Caller Example

function outer(){
    inner();
}

function inner(){
    print(inner.caller);
}

outer();


    