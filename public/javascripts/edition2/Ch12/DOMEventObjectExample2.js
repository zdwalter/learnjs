//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/DOMEventObjectExample2.htm
//DOM Event Object Example
document.body.onclick = function(event){
    print(event.currentTarget === document.body);   //true
    print(this === document.body);                  //true
    print(event.target === document.getElementById("myBtn")); //true
};       
    