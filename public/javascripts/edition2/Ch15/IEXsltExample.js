//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/IEXsltExample.htm
//IE XSLT Example

    function createDocument(){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.DOMDocument.6.0", "MSXML2.DOMDocument.3.0",
                            "MSXML2.DOMDocument"];
    
            for (var i=0,len=versions.length; i < len; i++){
                try {
                    var xmldom = new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    return xmldom;
                } catch (ex){
                    //skip
                }
            }
        }
    
        return new ActiveXObject(arguments.callee.activeXString);
    }         
    
    window.onload = function () {
        var xmldom = createDocument();
        var xsltdom = createDocument();
        
        xmldom.async = false;
        xsltdom.async = false;
        
        xmldom.load("employees.xml");
        xsltdom.load("employees.xslt");

        var result = xmldom.documentElement.transformNode(xsltdom);
        var div = document.getElementById("divResult");
        print(result);
        div.innerHTML = result;

    }
