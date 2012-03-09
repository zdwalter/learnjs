//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/IEEventObjectExample2.htm
//IE Event Object Example
var link = document.getElementById("myLink");
link.onclick = function(){
    window.event.returnValue = false;
};    
    