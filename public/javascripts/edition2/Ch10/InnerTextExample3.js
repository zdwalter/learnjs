//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/InnerTextExample3.htm
//InnerText Example 3
function setInnerText(){
    var div = document.getElementById("content");
    div.innerText = "Hello & welcome, <b>\"reader\"!</b>";   //works in IE, Safari, and Opera
}

    