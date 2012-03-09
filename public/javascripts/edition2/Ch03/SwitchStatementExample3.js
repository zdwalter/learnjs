//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/SwitchStatementExample3.htm
//Switch Statement Example 3
switch ("hello world") {
    case "hello" + " world": 
        print("Greeting was found.");
        break;
    case "goodbye": 
        print("Closing was found.");
        break;
    default: 
        print("Unexpected message was found.");
}

    