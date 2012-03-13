//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/OrientationChangeEventExample01.htm
//OrientationChange Event Example
EventUtil.addHandler(window, "load", function(event){
    var div = document.getElementById("myDiv");
    div.innerHTML = "Current orientation is " + window.orientation;
    
    EventUtil.addHandler(window, "orientationchange", function(event){
        div.innerHTML = "Current orientation is " + window.orientation;
    });
});

    