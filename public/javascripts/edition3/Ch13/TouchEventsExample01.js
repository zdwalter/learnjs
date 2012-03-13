//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/TouchEventsExample01.htm
//Touch Events Example
function handleTouchEvent(event){
    
    //only for one touch
    if (event.touches.length == 1){

        var output = document.getElementById("output");
        switch(event.type){
            case "touchstart":
                output.innerHTML = "Touch started (" + event.touches[0].clientX + "," + event.touches[0].clientY + ")";
                break;
            case "touchend":
                output.innerHTML += "<br>Touch ended (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                break;
            case "touchmove":
                event.preventDefault();  //prevent scrolling
                output.innerHTML += "<br>Touch moved (" + event.changedTouches[0].clientX + "," + event.changedTouches[0].clientY + ")";
                break;
        }
    }
}

document.addEventListener("touchstart", handleTouchEvent, false);
document.addEventListener("touchend", handleTouchEvent, false);
document.addEventListener("touchmove", handleTouchEvent, false);

    