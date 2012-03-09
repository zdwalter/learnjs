//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/SwitchStatementExample4.htm
//Switch Statement Example 4
var num = 25;
switch (true) {
    case num < 0: 
        print("Less than 0.");
        break;
    case num >= 0 && num <= 10: 
        print("Between 0 and 10.");
        break;
    case num > 10 && num <= 20: 
        print("Between 10 and 20.");
        break;
    default: 
        print("More than 20.");
}

    