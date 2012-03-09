//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/OffsetDimensionsExample.htm
//Offset Dimensions Example
    
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
    
    
function getOffsetHeight(){
    print(document.getElementById("myDiv").offsetHeight);
}
    
function getOffsetWidth(){
    print(document.getElementById("myDiv").offsetWidth);
}
    
function getOffsetLeft(){
    print(document.getElementById("myDiv").offsetLeft);
}
    
function getOffsetTop(){
    print(document.getElementById("myDiv").offsetTop);
}

function getActualLeft(){
    print(getElementLeft(document.getElementById("myDiv")));
}

function getActualTop(){
    print(getElementTop(document.getElementById("myDiv")));
}


    

    