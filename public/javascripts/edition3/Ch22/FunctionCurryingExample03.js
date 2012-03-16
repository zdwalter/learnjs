//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/FunctionCurryingExample03.htm
//Function Currying Example
   
var handler = {
    message: "Event handled",

    handleClick: function(name, event){
        print(this.message + ":" + name + ":" + event.type);
    }
};

var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler, "my-btn"));

    