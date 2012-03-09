//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/TimeoutExample2.htm
//Timeout Example 2

    //set the timeout
    var timeoutId = setTimeout(function() {
        print("Hello world!");
    }, 1000);
    
    //nevermind – cancel it
    clearTimeout(timeoutId);


