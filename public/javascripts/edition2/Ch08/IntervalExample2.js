//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/IntervalExample2.htm
//Interval Example 2

    var num = 0;
    var max = 10;
    var intervalId = null;
    
    function incrementNumber() {
        num++;
    
        //if the max has been reached, cancel all pending executions
        if (num == max) {
            clearInterval(intervalId);
            print("Done");
        }
    }
    
    intervalId = setInterval(incrementNumber, 500);


