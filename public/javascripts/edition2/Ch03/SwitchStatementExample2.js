//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/SwitchStatementExample2.htm
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


    