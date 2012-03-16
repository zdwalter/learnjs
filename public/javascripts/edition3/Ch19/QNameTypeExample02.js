//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/QNameTypeExample02.htm
//QName Type Example
    
var xml = <wrox:root xmlns:wrox="http://www.wrox.com/">
            <wrox:message>Hello World!</wrox:message>
          </wrox:root>;

var wroxRoot = xml.name();
print(wroxRoot.uri);
print(wroxRoot.localName);
    