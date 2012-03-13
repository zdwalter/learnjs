//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/SelectorsAPIExample03.htm
//Selectors API Example
    
function matchesSelector(element, selector){
    if (element.matchesSelector){
        return element.matchesSelector(selector);
    } else if (element.msMatchesSelector){
        return element.msMatchesSelector(selector);
    } else if (element.mozMatchesSelector){
        return element.mozMatchesSelector(selector);
    } else if (element.webkitMatchesSelector){
        return element.webkitMatchesSelector(selector);
    } else {
        throw new Error("Not supported.");
    }
}

if (matchesSelector(document.body, "body.page1")){
    print("It's page 1!");
}


    