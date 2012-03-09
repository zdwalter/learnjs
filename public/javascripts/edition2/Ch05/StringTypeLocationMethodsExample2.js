//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/StringTypeLocationMethodsExample2.htm
//String Type Location Methods Example 2
    
var stringValue = "Lorem ipsum dolor sit amet, consectetur adipisicing elit";
var positions = new Array();
var pos = stringValue.indexOf("e");

while(pos > -1){
    positions.push(pos);
    pos = stringValue.indexOf("e", pos + 1);
}
    
print(positions);    //"3,24,32,35,52"
    