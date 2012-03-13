//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/ElementAttributesExample02.htm
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

    