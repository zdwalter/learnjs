//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/FunctionBindingExample.htm
//Function Binding Example
function bind(fn, context){
    return function(){
        return fn.apply(context, arguments);
    };
}
    
var handler = {
    message: "Event handled",

    handleClick: function(event){
        print(this.message + ":" + event.type);
    }
};

var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));


    