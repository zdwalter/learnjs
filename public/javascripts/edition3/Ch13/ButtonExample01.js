//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/ButtonExample01.htm
//Button Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "mousedown", function(event){
    event = EventUtil.getEvent(event);
    print(EventUtil.getButton(event));       
});
    