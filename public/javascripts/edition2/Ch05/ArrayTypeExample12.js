//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/ArrayTypeExample12.htm
//Array Type Example 12
var colors = new Array();                      //create an array
var count = colors.unshift("red", "green");    //push two items
print(count);  //2

count = colors.unshift("black");               //push another item on
print(count);  //3

var item = colors.pop();                     //get the first item
print(item);   //"green"
print(colors.length);  //2



    