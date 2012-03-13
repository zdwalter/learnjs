//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/IFrameElementExample.htm
//DOM Level 2 IFrame Example
var iframe = document.getElementById("myIFrame");
var iframeDoc = iframe.contentDocument;   //won't work in IE < 8
print(iframeDoc);
    