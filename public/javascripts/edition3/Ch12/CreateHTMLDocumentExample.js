//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/CreateHTMLDocumentExample.htm
//DOM Level 2 CreateHTMLDocument Example
       
var htmldoc = document.implementation.createHTMLDocument("New Doc");
print(htmldoc.title);
print(typeof htmldoc.body);
    