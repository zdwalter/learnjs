//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/IFrameElementExample2.htm
//DOM Level 2 IFrame Example
var iframe = document.getElementById("myIframe");
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
print(iframeDoc);
    