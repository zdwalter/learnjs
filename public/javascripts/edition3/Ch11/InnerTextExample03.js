//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/InnerTextExample03.htm
//InnerText Example 3
function setInnerText(){
    var div = document.getElementById("content");
    div.innerText = "Hello & welcome, <b>\"reader\"!</b>";   //works in IE, Safari, and Opera
}

    