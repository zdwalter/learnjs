//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/DomXPathExample02.htm
//DOM XPath Example
    var xmldom = (new DOMParser()).parseFromString("<employees><employee title=\"Software Engineer\"><name>Nicholas C. Zakas</name></employee><employee title=\"Salesperson\"><name>Jim Smith</name></employee></employees>", "text/xml");
    var serializer = new XMLSerializer();
    var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    var message = "There are " + result.snapshotLength + " matching nodes.\n";
    var count = 0;
               
    if (result != null){
        for (var i=0; i < result.snapshotLength; i++) {                       
            message += serializer.serializeToString(result.snapshotItem(i)) + "\n";
        }
    }
               
    print(message);
    
