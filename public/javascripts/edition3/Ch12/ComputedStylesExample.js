//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/ComputedStylesExample.htm
//Computed Styles Example
function showComputedStyles(){
    var myDiv = document.getElementById("myDiv");
    var computedStyle = document.defaultView.getComputedStyle(myDiv, null);
    print(computedStyle.backgroundColor);   //"red"
    print(computedStyle.width);             //"100px"
    print(computedStyle.height);            //"200px"
    print(computedStyle.border);            //"1px solid black"
    print(computedStyle.borderLeftWidth);   //"1px"
    print(computedStyle.visibility);
}
    