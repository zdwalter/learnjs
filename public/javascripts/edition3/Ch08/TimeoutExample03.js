//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch08/TimeoutExample03.htm
//Timeout Example 3

var num = 0;
var max = 100;

function incrementNumber() {
    num++;

    //if the max has not been reached, set another timeout
    if (num < max) {
        setTimeout(incrementNumber, 500);
    } else {
        print("Done");
    }
}

setTimeout(incrementNumber, 500);



    