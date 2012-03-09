//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMEventObjectExample4.htm
//DOM Event Object Example
var link = document.getElementById("myLink");
link.onclick = function(event){
    event.preventDefault();
};    
    