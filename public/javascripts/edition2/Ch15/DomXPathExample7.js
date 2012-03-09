//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch15/DomXPathExample7.htm
//DOM XPath Example

    var xmldom = (new DOMParser()).parseFromString("<?xml version=\"1.0\"?><wrox:books xmlns:wrox=\"http://www.wrox.com/\"><wrox:book><wrox:title>Professional JavaScript for Web Developers</wrox:title><wrox:author>Nicholas C. Zakas</wrox:author></wrox:book><wrox:book><wrox:title>Professional Ajax</wrox:title><wrox:author>Nicholas C. Zakas</wrox:author><wrox:author>Jeremy McPeak</wrox:author><wrox:author>Joe Fawcett</wrox:author></wrox:book></wrox:books>", "text/xml");
    var nsresolver = xmldom.createNSResolver(xmldom.documentElement);
    var result = xmldom.evaluate("wrox:book/wrox:author", 
                                 xmldom.documentElement, nsresolver,
                                 XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    
    print(result.snapshotLength);            
