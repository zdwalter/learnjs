//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/CrossBrowserXsltExample01.htm
//Cross-Browser XSLT Example
    
    function transform(context, xslt){
        if (typeof XSLTProcessor != "undefined"){
            var processor = new XSLTProcessor();
            processor.importStylesheet(xslt);
    
            var result = processor.transformToDocument(context);
            return (new XMLSerializer()).serializeToString(result);
    
        } else if (typeof context.transformNode != "undefined") {
            return context.transformNode(xslt);
        } else {
            throw new Error("No XSLT processor available.");
        }
    }
    
    window.onload = function () {
        //use XHR to load
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("get", "employees.xml", false);
        xmlhttp.send(null);
        var xmldom = xmlhttp.responseXML;
        
        xmlhttp = new XMLHttpRequest();
        xmlhttp.open("get", "employees.xslt", false);
        xmlhttp.send(null);
        var xsltdom = xmlhttp.responseXML; 

        var result = transform(xmldom, xsltdom);
        print(result);

    }
