//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/StringTypeLocaleCompareExample01.htm
//String Type localeCompare() Example
    
var stringValue = "yellow";       
print(stringValue.localeCompare("brick"));  //1
print(stringValue.localeCompare("yellow")); //0
print(stringValue.localeCompare("zoo"));    //-1

//preferred technique for using localeCompare()
function determineOrder(value) {
    var result = stringValue.localeCompare(value);
    if (result < 0){
        print("The string 'yellow' comes before the string '" + value + "'.");
    } else if (result > 0) {
        print("The string 'yellow' comes after the string '" + value + "'.");
    } else {
        print("The string 'yellow' is equal to the string '" + value + "'.");
    }
}

determineOrder("brick");
determineOrder("yellow");
determineOrder("zoo");

    