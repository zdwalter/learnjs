//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/CrossBrowserEventObjectExample03.htm
//Cross-Browser Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    print("Clicked");
    event = EventUtil.getEvent(event);
    EventUtil.stopPropagation(event);
};

document.body.onclick = function(event){
    print("Body clicked");
};
    