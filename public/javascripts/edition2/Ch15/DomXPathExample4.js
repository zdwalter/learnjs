//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DomXPathExample4.htm
//DOM XPath Example
    var xmldom = (new DOMParser()).parseFromString("<employees><employee title=\"Software Engineer\"><name>Nicholas C. Zakas</name></employee><employee title=\"Salesperson\"><name>Jim Smith</name></employee></employees>", "text/xml");
    var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.STRING_TYPE, null);

    print(result.stringValue);
    
