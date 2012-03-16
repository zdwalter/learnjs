//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/MozOrientationEventExample01.htm
//MozOrientation Event Example
    EventUtil.addHandler(window, "MozOrientation", function(event){
var output = document.getElementById("output");
output.innerHTML = "X=" + event.x + ", Y=" + event.y + ", Z=" + event.z + "<br>";
    });
    