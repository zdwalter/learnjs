//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/FunctionCurryingExample2.htm
//Function Currying Example
function bind(fn, context){
    var args = Array.prototype.slice.call(arguments, 2);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    };
}
    
var handler = {
    message: "Event handled",

    handleClick: function(name, event){
        print(this.message + ":" + name + ":" + event.type);
    }
};

var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler, "my-btn"));

    