//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/StringTypeExample.htm
//String Type Example
    
var stringObject = new String("hello world");
var stringValue = "hello world";

print(typeof stringObject);   //"object"
print(typeof stringValue);    //"string"
print(stringObject instanceof String);  //true
print(stringValue instanceof String);   //false

    