//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/ButtonExample.htm
//Button Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "mousedown", function(event){
    event = EventUtil.getEvent(event);
    print(EventUtil.getButton(event));       
});
    