//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/CrossBrowserEventObjectExample2.htm
//Cross-Browser Event Object Example
var link = document.getElementById("myLink");
link.onclick = function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
};    
    