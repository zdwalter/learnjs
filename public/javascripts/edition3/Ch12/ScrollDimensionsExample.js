//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/ScrollDimensionsExample.htm
//Scroll Dimensions Example
    
function scrollToTop(element){
    if (element.scrollTop != 0){
        element.scrollTop = 0;
    }
}
    
    
function getDocumentDimensions(){
    var docHeight = Math.max(document.documentElement.scrollHeight,
                             document.documentElement.clientHeight);
    
    var docWidth = Math.max(document.documentElement.scrollWidth,
                            document.documentElement.clientWidth);
    print("Client: Width: " + document.documentElement.clientWidth + "\nheight: " + document.documentElement.clientHeight);
    print("Scroll: Width: " + document.documentElement.scrollWidth + "\nheight: " + document.documentElement.scrollHeight);
}
    
function setScrollTop(){
    scrollToTop(document.documentElement);
}

function getScrollTop(){
    print(document.documentElement.scrollTop);
}

    

    