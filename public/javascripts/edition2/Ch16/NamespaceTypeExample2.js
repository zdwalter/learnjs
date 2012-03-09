//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/NamespaceTypeExample2.htm
//Namespace Type Example
    
var xml = <wrox:root xmlns:wrox="http://www.wrox.com/">
            <wrox:message>Hello World!</wrox:message>
          </wrox:root>;

var wrox = xml.namespace("wrox");
print(wrox.uri);
print(wrox.prefix);
    