//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/PageCoordinatesExample01.htm
//Client coordinates Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
    event = EventUtil.getEvent(event);
    var pageX = event.pageX,
        pageY = event.pageY;

    if (pageX === undefined){
        pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
    }

    if (pageY === undefined){
        pageY = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
    }

    print("Page coordinates: " + event.pageX + "|" + pageX + "," + event.pageY + "|"+pageY);        
});

    