//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/CrossBrowserEventHandlerExample01.htm
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

    