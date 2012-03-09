//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/InnerHtmlExample3.htm
//InnerHtml Example
function setInnerHTML(){
    var div = document.getElementById("content");
    div.innerHTML = "<div>&nbsp;</div><script defer>print('hi');</scr" + "ipt>";
    div.removeChild(div.firstChild);
}

    