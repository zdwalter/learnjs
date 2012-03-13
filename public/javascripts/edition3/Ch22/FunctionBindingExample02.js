//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/FunctionBindingExample02.htm
//Function Binding Example
var handler = {
    message: "Event handled",

    handleClick: function(event){
        print(this.message + ":" + event.type);
    }
};

var btn = document.getElementById("my-btn");
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler));


    