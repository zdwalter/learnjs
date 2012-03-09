//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/InnerTextExample5.htm
//InnerText Example 5
function getInnerText(element){
    return (typeof element.textContent == "string") ? 
        element.textContent : element.innerText;
}

function setInnerText(element, text){
    if (typeof element.textContent == "string"){
        element.textContent = text;
    } else {
        element.innerText = text;
    }
}
    
function replaceTextSimple(){
    var div = document.getElementById("content");            
    setInnerText(div, "Hello world!");
    print(getInnerText(div));
}

function replaceTextComplex(){
    var div = document.getElementById("content");            
    setInnerText(div, "Hello & welcome, <b>\"reader\"!</b>");
    print(getInnerText(div));
}

    