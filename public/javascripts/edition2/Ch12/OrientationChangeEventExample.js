//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/OrientationChangeEventExample.htm
//OrientationChange Event Example
EventUtil.addHandler(window, "load", function(event){
    var div = document.getElementById("myDiv");
    div.innerHTML = "Current orientation is " + window.orientation;
    
    EventUtil.addHandler(window, "orientationchange", function(event){
        div.innerHTML = "Current orientation is " + window.orientation;
    });
});

    