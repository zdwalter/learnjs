//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/ClientCoordinatesExample01.htm
//Client coordinates Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
    event = EventUtil.getEvent(event);
    print("Client coordinates: " + event.clientX + "," + event.clientY);        
});
    