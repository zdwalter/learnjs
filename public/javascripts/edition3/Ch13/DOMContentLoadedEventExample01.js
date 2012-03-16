//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMContentLoadedEventExample01.htm
//DOMContentLoaded Event Example
    EventUtil.addHandler(window, "DOMContentLoaded", function(event){
print("Content loaded.");
    });
    EventUtil.addHandler(window, "load", function(event){
print("Window loaded.");
    });
    