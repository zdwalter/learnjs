//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/DomXPathExample03.htm
//DOM XPath Example
    var xmldom = (new DOMParser()).parseFromString("<employees><employee title=\"Software Engineer\"><name>Nicholas C. Zakas</name></employee><employee title=\"Salesperson\"><name>Jim Smith</name></employee></employees>", "text/xml");
    var serializer = new XMLSerializer();
    var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);

    if (result != null){
        print(serializer.serializeToString(result.singleNodeValue));
    }
