//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMEventObjectExample04.htm
//DOM Event Object Example
var link = document.getElementById("myLink");
link.onclick = function(event){
    event.preventDefault();
};    
    