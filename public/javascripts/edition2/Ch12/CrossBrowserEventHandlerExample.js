//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/CrossBrowserEventHandlerExample.htm
//Cross-Browser Event Handler Example
var btn = document.getElementById("myBtn");
var handler = function(){
    print("Clicked");
};
EventUtil.addHandler(btn, "click", handler); 

var removeBtn = document.getElementById("myRemoveBtn");
EventUtil.addHandler(removeBtn, "click", function(){
    EventUtil.removeHandler(btn, "click", handler); 
});

    