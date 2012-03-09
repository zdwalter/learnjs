//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/IFrameElementExample.htm
//DOM Level 2 IFrame Example
var iframe = document.getElementById("myIFrame");
var iframeDoc = iframe.contentDocument;   //won't work in IE
print(iframeDoc);
    