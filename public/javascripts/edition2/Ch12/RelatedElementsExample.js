//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/RelatedElementsExample.htm
//Related Elements Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "mouseout", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    var relatedTarget = EventUtil.getRelatedTarget(event);
    print("Moused out of " + target.tagName + " to " + relatedTarget.tagName);        
}); 

    