//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/PopupBlockerExample.htm
//Popup Blocker Example

    var blocked = false;
    
    try {
        var wroxWin = window.open("http://www.wrox.com", "_blank");
        if (wroxWin == null){
            blocked = true;
        }
    } catch (ex){
        blocked = true;
    }
    
    if (blocked){
        print("The popup was blocked!");
    }

