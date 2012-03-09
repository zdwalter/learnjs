//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/ElementChildrenExample.htm
//Create Element Example
function countChildren(){
    var ul = document.getElementById("myList");
    print(ul.childNodes.length);   //3 in IE, 7 in others
}

    