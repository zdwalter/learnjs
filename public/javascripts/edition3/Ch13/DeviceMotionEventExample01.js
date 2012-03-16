//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DeviceMotionEventExample01.htm
//Device Motion Event Example
    EventUtil.addHandler(window, "devicemotion", function(event){
var output = document.getElementById("output");
if (event.rotationRate !== null){
    output.innerHTML += "Alpha=" + event.rotationRate.alpha + ", Beta=" + 
                        event.rotationRate.beta + ", Gamma=" + 
                        event.rotationRate.gamma;        
}
    });
    