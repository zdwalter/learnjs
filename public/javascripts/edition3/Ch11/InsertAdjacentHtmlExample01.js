//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/InsertAdjacentHtmlExample01.htm
//InnerHtml Example
function addHTML(){
    var div = document.getElementById("content");
    if (div.insertAdjacentHTML){
        div.insertAdjacentHTML("beforeend", "<p>Hello world!</p>");
    } else {
        print("insertAdjacentHTML() not supported in this browser");
    }
}

    