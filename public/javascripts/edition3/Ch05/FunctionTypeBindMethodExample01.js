//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/FunctionTypeBindMethodExample01.htm
//Function Type bind() Method Example

window.color = "red";
var o = { color: "blue" };
                   
function sayColor(){
    print(this.color);
}
var objectSayColor = sayColor.bind(o);
objectSayColor();   //blue


    