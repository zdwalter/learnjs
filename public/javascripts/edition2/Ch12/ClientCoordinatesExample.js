//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/ClientCoordinatesExample.htm
//Client coordinates Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
    event = EventUtil.getEvent(event);
    print("Client coordinates: " + event.clientX + "," + event.clientY);        
});
    