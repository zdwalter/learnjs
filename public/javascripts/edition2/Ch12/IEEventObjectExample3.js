//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/IEEventObjectExample3.htm
//IE Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(){
    print("Clicked");
    window.event.cancelBubble = true;
};

document.body.onclick = function(event){
    print("Body clicked");
};
    