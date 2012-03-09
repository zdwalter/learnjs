//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/ArrayTypeExample2.htm
//Array Type Example 2

var colors = ["red", "blue", "green"]; //creates an array with three strings
var names = [];                        //creates an empty array
var values = [1,2,];                   //AVOID! Creates an array with 2 or 3 items
var options = [,,,,,];                 //AVOID! creates an array with 5 or 6 items

print(colors.length);    //3
print(names.length);     //0
print(values.length);    //2 (FF, Safari, Opera) or 3 (IE)
print(options.length);   //5 (FF, Safari, Opera) or 6 (IE)


    