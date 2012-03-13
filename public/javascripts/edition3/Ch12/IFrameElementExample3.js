//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/IFrameElementExample3.htm
//DOM Level 2 IFrame Example
var iframe = document.getElementById("myIFrame");
var iframeDoc = iframe.contentWindow;   //works in IE
print(iframeDoc);
    