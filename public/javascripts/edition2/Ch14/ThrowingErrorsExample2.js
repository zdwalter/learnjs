//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch14/ThrowingErrorsExample2.htm
//Throwing Errors Example
    
function CustomError(message){       
    this.name = "CustomError";
    this.message = message;
}

CustomError.prototype = new Error();
    
function process(values){

    if (!(values instanceof Array)){
        throw new CustomError("process(): Argument must be an array.");
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
    