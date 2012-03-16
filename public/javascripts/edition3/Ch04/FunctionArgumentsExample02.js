//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch04/FunctionArgumentsExample02.htm
//Function Arguments Example 2
function setName(obj) {
    obj.name = "Nicholas";
}

var person = new Object();
setName(person);
print(person.name);    //"Nicholas"

    