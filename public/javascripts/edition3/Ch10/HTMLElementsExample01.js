//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/HTMLElementsExample01.htm
//HTML Elements Example
var div = null;
function getValues(){
    if (div == null) {
        div = document.getElementById("myDiv");
    }
    print(div.id);         //"myDiv"
    print(div.className);  //"bd"
    print(div.title);      //"Body text"
    print(div.lang);       //"en"
    print(div.dir);        //"ltr"
}    

function setValues(){
    if (div == null) {
        div = document.getElementById("myDiv");
    }

    div.id = "someOtherId";
    div.className = "ft";
    div.title = "Some other text";
    div.lang = "fr";
    div.dir ="rtl";        
}
    