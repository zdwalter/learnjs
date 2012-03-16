//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/IEEventObjectExample01.htm
//IE Event Object Example
var btn = document.getElementById("myBtn");
btn.onclick = function(){
    print(window.event.srcElement === this);      //true
};

btn.attachEvent("onclick", function(event){
    print(event.srcElement === this);             //false
});
      
    