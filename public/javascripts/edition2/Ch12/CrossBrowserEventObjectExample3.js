//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/CrossBrowserEventObjectExample3.htm
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
    