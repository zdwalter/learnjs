//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/IEEventObjectExample03.htm
//IE Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(){
    print("Clicked");
    window.event.cancelBubble = true;
};

document.body.onclick = function(event){
    print("Body clicked");
};
    