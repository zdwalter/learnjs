//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch08/DeleteOperatorExample01.htm
//Delete Operator Example

var age = 29;
window.color = "red";

//throws an error in IE < 9, returns false in all other browsers
delete window.age;

//throws an error in IE < 9, returns true in all other browsers
delete window.color;    //returns true

print(window.age);      //29
print(window.color);    //undefined

    