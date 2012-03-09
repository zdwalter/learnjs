//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DomXPathExample3.htm
//DOM XPath Example
    var xmldom = (new DOMParser()).parseFromString("<employees><employee title=\"Software Engineer\"><name>Nicholas C. Zakas</name></employee><employee title=\"Salesperson\"><name>Jim Smith</name></employee></employees>", "text/xml");
    var serializer = new XMLSerializer();
    var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    print(serializer.serializeToString(result.singleNodeValue));
    
