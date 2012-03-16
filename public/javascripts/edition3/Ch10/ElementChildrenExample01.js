//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/ElementChildrenExample01.htm
//Create Element Example
function countChildren(){
    var ul = document.getElementById("myList");
    print(ul.childNodes.length);   //3 in IE, 7 in others
}

    