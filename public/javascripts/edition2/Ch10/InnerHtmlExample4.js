//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/InnerHtmlExample4.htm
//InnerHtml Example
function setInnerHTML(){
    var div = document.getElementById("content");
    
    //Opera, Firefox, and IE
    div.innerHTML = "_<style type=\"text/css\">body {background-color: red; }</style>";
    div.removeChild(div.firstChild);
    
    //Safari
    document.getElementsByTagName("head")[0].appendChild(div.firstChild);

}

    