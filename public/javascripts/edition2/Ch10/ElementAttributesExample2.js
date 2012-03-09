//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/ElementAttributesExample2.htm
//Element Attributes Example 2
var div = null;
function getValues(){
    if (div == null) {
        div = document.getElementById("myDiv");
    }
    print(div.id);                     //"myDiv"
    print(div.my_special_attribute);   //"hello!" (IE only)
    print(div.align);                  //"left"
}    

    