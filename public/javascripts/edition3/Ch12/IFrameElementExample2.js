//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch12/IFrameElementExample2.htm
//DOM Level 2 IFrame Example
var iframe = document.getElementById("myIframe");
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
print(iframeDoc);
    