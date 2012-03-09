//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMEventObjectExample6.htm
//DOM Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
    print(event.eventPhase);   //2
};

document.body.addEventListener("click", function(event){
    print(event.eventPhase);   //1
}, true);

document.body.onclick = function(event){
    print(event.eventPhase);   //3
};

    