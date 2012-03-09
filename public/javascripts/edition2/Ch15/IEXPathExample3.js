//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/IEXPathExample3.htm
//IE XPath Example
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


    var xmldom = createDocument();
    xmldom.loadXML("<?xml version=\"1.0\"?><wrox:books xmlns:wrox=\"http://www.wrox.com/\"><wrox:book><wrox:title>Professional JavaScript for Web Developers</wrox:title><wrox:author>Nicholas C. Zakas</wrox:author></wrox:book><wrox:book><wrox:title>Professional Ajax</wrox:title><wrox:author>Nicholas C. Zakas</wrox:author><wrox:author>Jeremy McPeak</wrox:author><wrox:author>Joe Fawcett</wrox:author></wrox:book></wrox:books>");
    //xmldom.setProperty("SelectionNamespaces", "xmlns:wrox='http://www.wrox.com/'");

    var result = xmldom.documentElement.selectNodes("wrox:book/wrox:author");            
    print(result.length);            
