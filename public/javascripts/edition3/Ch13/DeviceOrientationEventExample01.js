//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DeviceOrientationEventExample01.htm
//Device Orientation Event Example
    EventUtil.addHandler(window, "deviceorientation", function(event){
var output = document.getElementById("output");
var arrow = document.getElementById("arrow");
arrow.style.webkitTransform = "rotate(" + Math.round(event.alpha) + "deg)";
output.innerHTML = "Alpha=" + event.alpha + ", Beta=" + event.beta + ", Gamma=" + event.gamma + "<br>";
    });

    