//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/SwitchStatementExample02.htm
//Switch Statement Example 2
var i = 25;

switch (i) {
    case 25: 
        /* falls through */
    case 35: 
        print("25 or 35");
        break;
    case 45: 
        print("45");
        break;
    default: 
        print("Other");
}


    