//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/NamespaceTypeExample02.htm
//Namespace Type Example
    
var xml = <wrox:root xmlns:wrox="http://www.wrox.com/">
            <wrox:message>Hello World!</wrox:message>
          </wrox:root>;

var wrox = xml.namespace("wrox");
print(wrox.uri);
print(wrox.prefix);
    