//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/NumberTypeExample01.htm
//Number Type Example
var numberObject = new Number(10);
var numberValue = 99;

//toString() using a radix
print(numberObject.toString());       //"10"
print(numberObject.toString(2));      //"1010"
print(numberObject.toString(8));      //"12"
print(numberObject.toString(10));     //"10"
print(numberObject.toString(16));     //"a"

//toFixed()
print(numberObject.toFixed(2));    //outputs "10.00"

numberObject = new Number(99);
print(numberObject.toPrecision(1));    //"1e+2"
print(numberObject.toPrecision(2));    //"99"
print(numberObject.toPrecision(3));    //"99.0"
   
print(typeof numberObject);   //object
print(typeof numberValue);    //number
print(numberObject instanceof Number);  //true
print(numberValue instanceof Number);   //false

    