//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/DOMEventObjectExample02.htm
//DOM Event Object Example
document.body.onclick = function(event){
    print(event.currentTarget === document.body);   //true
    print(this === document.body);                  //true
    print(event.target === document.getElementById("myBtn")); //true
};       
    