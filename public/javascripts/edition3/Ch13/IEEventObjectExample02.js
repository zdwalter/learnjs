//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/IEEventObjectExample02.htm
//IE Event Object Example
var link = document.getElementById("myLink");
link.onclick = function(){
    window.event.returnValue = false;
};    
    