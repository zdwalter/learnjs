//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/StyleSheetsExample2.htm
//Style Sheets Example
    
function getStyleSheet(element){
    return element.sheet || element.styleSheet;
}

    
function outputStyleSheet(){            
    //get the style sheet for the first <link/> element
    var link = document.getElementsByTagName("link")[0];
    var sheet = getStyleSheet(link);
    print(sheet.href);
}
    