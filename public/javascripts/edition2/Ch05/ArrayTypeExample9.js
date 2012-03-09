//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/ArrayTypeExample9.htm
//Array Type Example 9
var colors = new Array();                      //create an array
var count = colors.push("red", "green");       //push two items
print(count);  //2

count = colors.push("black");                  //push another item on
print(count);  //3

var item = colors.pop();                       //get the last item
print(item);   //"black"
print(colors.length);  //2
    