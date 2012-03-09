//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/FunctionCurryingExample.htm
//Function Currying Example
function curry(fn){
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(null, finalArgs);
    };
}
    
function add(num1, num2){
    return num1 + num2;
}

var curriedAdd = curry(add, 5);
print(curriedAdd(3));   //8

var curriedAdd2 = curry(add, 5, 12);
print(curriedAdd2());   //17

    