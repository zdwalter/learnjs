//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/CrossBrowserEventObjectExample01.htm
//Cross-Browser Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    
    print(target.tagName);
};

EventUtil.addHandler(btn, "click", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    
    print(target.tagName);
});
      
    