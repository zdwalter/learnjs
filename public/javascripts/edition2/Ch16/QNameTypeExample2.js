//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/QNameTypeExample2.htm
//QName Type Example
    
var xml = <wrox:root xmlns:wrox="http://www.wrox.com/">
            <wrox:message>Hello World!</wrox:message>
          </wrox:root>;

var wroxRoot = xml.name();
print(wroxRoot.uri);
print(wroxRoot.localName);
    