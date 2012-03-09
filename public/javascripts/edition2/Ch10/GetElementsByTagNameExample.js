//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/GetElementsByTagNameExample.htm
//getElementsByTagName() Example
function getAllElements(){
    var elements = document.getElementsByTagName("*"); //12 in most browsers, 15 in IE because it includes comments
    print(elements.length);
    print(elements[4].outerHTML);
}
    
    