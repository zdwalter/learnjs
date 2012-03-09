//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/ArrayTypeExample11.htm
//Array Type Example 11
var colors = new Array();                      //create an array
var count = colors.push("red", "green");       //push two items
print(count);  //2

count = colors.push("black");                  //push another item on
print(count);  //3

var item = colors.shift();                     //get the first item
print(item);   //"red"
print(colors.length);  //2


    