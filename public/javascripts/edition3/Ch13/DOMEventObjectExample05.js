//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMEventObjectExample05.htm
//DOM Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    print("Clicked");
    event.stopPropagation();
};

document.body.onclick = function(event){
    print("Body clicked");
};
    