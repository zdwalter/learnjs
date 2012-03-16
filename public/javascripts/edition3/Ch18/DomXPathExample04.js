//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/DomXPathExample04.htm
//DOM XPath Example
    var xmldom = (new DOMParser()).parseFromString("<employees><employee title=\"Software Engineer\"><name>Nicholas C. Zakas</name></employee><employee title=\"Salesperson\"><name>Jim Smith</name></employee></employees>", "text/xml");
    var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.BOOLEAN_TYPE, null);

    print(result.booleanValue);
    
