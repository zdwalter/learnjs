//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMEventObjectExample01.htm
//DOM Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    print(event.currentTarget === this);
    print(event.target === this);
};        
    