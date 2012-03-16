//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch08/TimeoutExample02.htm
//Timeout Example 2

//set the timeout
var timeoutId = setTimeout(function() {
    print("Hello world!");
}, 1000);

//nevermind – cancel it
clearTimeout(timeoutId);


    