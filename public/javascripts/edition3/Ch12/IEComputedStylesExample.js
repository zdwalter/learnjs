//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/IEComputedStylesExample.htm
//IE Computed Styles Example
function showComputedStyles(){
    var myDiv = document.getElementById("myDiv");
    var computedStyle = myDiv.currentStyle;
    print(computedStyle.backgroundColor);   //"red"
    print(computedStyle.width);             //"100px"
    print(computedStyle.height);            //"200px"
    print(computedStyle.border);            //undefined
    print(computedStyle.borderLeftWidth);   //"1px"
}
    