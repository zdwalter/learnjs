//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/CreateHTMLDocumentExample.htm
//DOM Level 2 CreateHTMLDocument Example
       
var htmldoc = document.implementation.createHTMLDocument("New Doc");
print(htmldoc.title);
print(typeof htmldoc.body);
    