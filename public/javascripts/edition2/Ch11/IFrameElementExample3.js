//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/IFrameElementExample3.htm
//DOM Level 2 IFrame Example
var iframe = document.getElementById("myIFrame");
var iframeDoc = iframe.contentWindow;   //won't work in IE
print(iframeDoc);
    