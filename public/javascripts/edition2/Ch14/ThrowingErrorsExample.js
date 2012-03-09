//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch14/ThrowingErrorsExample.htm
//Throwing Errors Example
function process(values){

    if (!(values instanceof Array)){
        throw new Error("process(): Argument must be an array.");
    }

    values.sort();

    for (var i=0, len=values.length; i < len; i++){
        if (values[i] > 100){
            return values[i];
        }
    }

    return -1;
}

process("string");
    