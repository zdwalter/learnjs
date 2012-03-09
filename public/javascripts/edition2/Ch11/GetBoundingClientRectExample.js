//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/GetBoundingClientRectExample.htm
//getBoundingClientRect() Example
    
function getElementLeft(element){
    var actualLeft = element.offsetLeft;
    var current = element.offsetParent;

    while (current !== null){        
        actualLeft += current.offsetLeft;
        current = current.offsetParent;
    }

    return actualLeft;
}
    
function getElementTop(element){
    var actualTop = element.offsetTop;
    var current = element.offsetParent;

    while (current !== null){        
        actualTop += current. offsetTop;
        current = current.offsetParent;
    }

    return actualTop;
}
    
    function getBoundingClientRect(element){
    
var scrollTop = document.documentElement.scrollTop;
var scrollLeft = document.documentElement.scrollLeft;

if (element.getBoundingClientRect){
    if (typeof arguments.callee.offset != "number"){
        var temp = document.createElement("div");
        temp.style.cssText = "position:absolute;left:0;top:0;";
        document.body.appendChild(temp);
        arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
        document.body.removeChild(temp);
        temp = null;
    }
    
    var rect = element.getBoundingClientRect();
    var offset = arguments.callee.offset;
    
    return {
        left: rect.left + offset,
        right: rect.right + offset,
        top: rect.top + offset,
        bottom: rect.bottom + offset
    
    };
} else {
    
    var actualLeft = getElementLeft(element);
    var actualTop = getElementTop(element);
    
   return {
        left: actualLeft - scrollLeft,
        right: actualLeft + element.offsetWidth - scrollLeft,
        top: actualTop - scrollTop,
        bottom: actualTop + element.offsetHeight - scrollTop
    }
}
    }

    
function getDimensions(){
    var rect = getBoundingClientRect(document.getElementById("myDiv"));
    print("left: " + rect.left + "\nright: " + rect.right  + "\ntop: " + rect.top + "\nbottom: " + rect.bottom);        
}


    

    