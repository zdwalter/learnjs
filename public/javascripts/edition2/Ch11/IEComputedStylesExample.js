//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/IEComputedStylesExample.htm
//IE Computed Styles Example
function showComputedStyles(){
    var myDiv = document.getElementById("myDiv");
    var computedStyle = myDiv.currentStyle;
    print(computedStyle.backgroundColor);   //"red"
    print(computedStyle.width);             //"100px"
    print(computedStyle.height);            //"200px"
    print(computedStyle.border);            //"1px solid black"
    print(computedStyle.borderLeftWidth);   //"1px"
}
    