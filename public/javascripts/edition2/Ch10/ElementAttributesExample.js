//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/ElementAttributesExample.htm
//Element Attributes Example
var div = null;
function getValues(){
    if (div == null) {
        div = document.getElementById("myDiv");
    }
    print(div.getAttribute("id"));         //"myDiv"
    print(div.getAttribute("class"));      //"bd"
    print(div.getAttribute("title"));      //"Body text"
    print(div.getAttribute("lang"));       //"en"
    print(div.getAttribute("dir"));        //"ltr"
    print(div.getAttribute("my_special_attribute"));   //"hello!"
}    

function setValues(){
    if (div == null) {
        div = document.getElementById("myDiv");
    }

    div.setAttribute("id", "someOtherId");
    div.setAttribute("class", "ft");
    div.setAttribute("title", "Some other text");
    div.setAttribute("lang","fr");
    div.setAttribute("dir", "rtl");        
    div.setAttribute("class", "change");
}
    