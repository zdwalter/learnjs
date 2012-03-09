//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMContentLoadedEventExample.htm
//DOMContentLoaded Event Example
    EventUtil.addHandler(window, "DOMContentLoaded", function(event){
print("Content loaded.");
    });
    EventUtil.addHandler(window, "load", function(event){
print("Window loaded.");
    });
    