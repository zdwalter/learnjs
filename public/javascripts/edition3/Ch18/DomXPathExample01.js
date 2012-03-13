//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch18/DomXPathExample01.htm
//DOM XPath Example
    var xmldom = (new DOMParser()).parseFromString("<employees><employee title=\"Software Engineer\"><name>Nicholas C. Zakas</name></employee><employee title=\"Salesperson\"><name>Jim Smith</name></employee></employees>", "text/xml");
    var serializer = new XMLSerializer();
    var result = xmldom.evaluate("employee/name", xmldom.documentElement, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

               
    var message = "";
    var count = 0;
    
    var element = result.iterateNext();
    while (element) {
        message += serializer.serializeToString(element) + "\n";
        count++;
        element = result.iterateNext()
    }
    
    message = "There are " + count + " matching nodes.\n" + message;
    
    print(message);
    
