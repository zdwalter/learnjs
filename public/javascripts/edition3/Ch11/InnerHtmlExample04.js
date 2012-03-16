//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/InnerHtmlExample04.htm
//InnerHtml Example
function setInnerHTML(){
    var div = document.getElementById("content");
    
    //Opera, Firefox, and IE
    div.innerHTML = "_<style type=\"text/css\">body {background-color: red; }</style>";
    div.removeChild(div.firstChild);
    
    //Safari
    document.getElementsByTagName("head")[0].appendChild(div.firstChild);

}

    