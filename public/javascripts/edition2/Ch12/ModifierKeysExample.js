//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/ModifierKeysExample.htm
//Modifier Keys Example
var div = document.getElementById("myDiv");
EventUtil.addHandler(div, "click", function(event){
    event = EventUtil.getEvent(event);
    var keys = new Array();

    if (event.shiftKey){
        keys.push("shift");
    }

    if (event.ctrlKey){
        keys.push("ctrl");
    }

    if (event.altKey){
        keys.push("alt");
    }

    if (event.metaKey){
        keys.push("meta");
    }

    print("Keys: " + keys.join(","));

}); 

    