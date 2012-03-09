//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/QNameTypeExample.htm
//QName Type Example
    
var wrox = new Namespace("wrox", "http://www.wrox.com/");
var wroxMessage = new QName(wrox, "message");    //represents "wrox:message"

print(wroxMessage.uri);        //"http://www.wrox.com/"
print(wroxMessage.localName);  //"message"
print(wroxMessage);            //"http://www.wrox.com/::message"

    