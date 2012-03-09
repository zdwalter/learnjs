//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/ArrayGenericsExample.htm
//Array Generics Example

function sortArgs(){
    var args = Array.slice(arguments);
    args.sort();
    return args;        
}

print(sortArgs(5,2,9,3));

    