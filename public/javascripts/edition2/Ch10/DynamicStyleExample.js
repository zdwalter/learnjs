//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/DynamicStyleExample.htm
//Dynamic Style Example
    
function addStyle(){
    var style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode("body{background-color:red}"));  //error in IE
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}

    