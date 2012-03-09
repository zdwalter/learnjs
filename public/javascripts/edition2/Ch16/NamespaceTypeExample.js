//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/NamespaceTypeExample.htm
//Namespace Type Example
    
var ns = new Namespace("http://www.wrox.com");    //default namespace
var wrox = new Namespace("wrox", "http://www.wrox.com");  //wrox namespace

print(ns.uri);
print(ns.prefix);
print(wrox.uri);
print(wrox.prefix);
    