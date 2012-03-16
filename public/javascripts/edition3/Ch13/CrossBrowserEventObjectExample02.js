//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/CrossBrowserEventObjectExample02.htm
//Cross-Browser Event Object Example
var link = document.getElementById("myLink");
link.onclick = function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
};    
    