//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/WindowPositionExample.htm
//Window Position Example
    var leftPos = (typeof window.screenLeft == "number") ? 
                      window.screenLeft : window.screenX;
    var topPos = (typeof window.screenTop == "number") ? 
                      window.screenTop : window.screenY;

    print("Left: " + leftPos);
    print("Top: " + topPos);
