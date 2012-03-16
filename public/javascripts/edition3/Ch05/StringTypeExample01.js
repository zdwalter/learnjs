//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/StringTypeExample01.htm
//String Type Example
    
var stringObject = new String("hello world");
var stringValue = "hello world";

print(typeof stringObject);   //"object"
print(typeof stringValue);    //"string"
print(stringObject instanceof String);  //true
print(stringValue instanceof String);   //false

    