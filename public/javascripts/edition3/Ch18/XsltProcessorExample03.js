//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/XsltProcessorExample03.htm
//XSLTProcessor Example
window.onload = function () {
    //use XHR to load
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "employees.xml", false);
    xmlhttp.send(null);
    var xmldom = xmlhttp.responseXML;
    
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("get", "employees2.xslt", false);
    xmlhttp.send(null);
    var xsltdom = xmlhttp.responseXML;  

    var processor = new XSLTProcessor();
    processor.importStylesheet(xsltdom);
    processor.setParameter(null, "message", "Hello World!");

    var fragment = processor.transformToFragment(xmldom, document);
    var div = document.getElementById("divResult");
    
    div.appendChild(fragment);            

}
    