//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/ArrayTypeSpliceExample01.htm
//Array Type Splice Example
    
var colors = ["red", "green", "blue"];
var removed = colors.splice(0,1);              //remove the first item
print(colors);     //green,blue
print(removed);    //red - one item array

removed = colors.splice(1, 0, "yellow", "orange");  //insert two items at position 1
print(colors);     //green,yellow,orange,blue
print(removed);    //empty array

removed = colors.splice(1, 1, "red", "purple");    //insert two values, remove one
print(colors);     //green,red,purple,orange,blue
print(removed);    //yellow - one item array


    