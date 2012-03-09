//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMEventObjectExample.htm
//DOM Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    print(event.currentTarget === this);
    print(event.target === this);
};        
    