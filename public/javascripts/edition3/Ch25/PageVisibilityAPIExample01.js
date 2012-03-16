//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch25/PageVisibilityAPIExample01.htm
//Page Visibility Example
function isHiddenSupported(){
    return typeof (document.hidden || document.msHidden || document.webkitHidden) != "undefined";
}    

function handleVisibilityChange(){
    var output = document.getElementById("output"),
        msg;
        
    if (document.hidden || document.msHidden || document.webkitHidden){
        msg = "Page is now hidden." + (new Date()) + "<br>";
    } else {
        msg = "Page is now visible." + (new Date()) + "<br>";
    }
    
    output.innerHTML += msg;
    
}

//need to add to both
EventUtil.addHandler(document, "msvisibilitychange", handleVisibilityChange);
EventUtil.addHandler(document, "webkitvisibilitychange", handleVisibilityChange);

    document.write(isHiddenSupported() ? "Your browser supports the Page Visibility API." : "Your browser does not support the Page Visibility API.");