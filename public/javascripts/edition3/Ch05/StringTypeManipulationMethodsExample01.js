//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/StringTypeManipulationMethodsExample01.htm
//String Type Manipulation Methods Example
    
var stringValue = "hello world";
print(stringValue.slice(3));        //"lo world"
print(stringValue.substring(3));    //"lo world"
print(stringValue.substr(3));       //"lo world"
print(stringValue.slice(3, 7));     //"lo w"
print(stringValue.substring(3,7));  //"lo w"
print(stringValue.substr(3, 7));    //"lo worl"

print(stringValue.slice(-3));         //"rld"
print(stringValue.substring(-3));     //"hello world"
print(stringValue.substr(-3));        //"rld"
print(stringValue.slice(3, -4));      //"lo w"
print(stringValue.substring(3, -4));  //"hel"
print(stringValue.substr(3, -4));     //"" (empty string)

    