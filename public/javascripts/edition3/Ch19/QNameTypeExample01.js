//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/QNameTypeExample01.htm
//QName Type Example
    
var wrox = new Namespace("wrox", "http://www.wrox.com/");
var wroxMessage = new QName(wrox, "message");    //represents "wrox:message"

print(wroxMessage.uri);        //"http://www.wrox.com/"
print(wroxMessage.localName);  //"message"
print(wroxMessage);            //"http://www.wrox.com/::message"

    