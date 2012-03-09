//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch04/ExecutionContextExample3.htm
//Execution Context Example 3
  
function buildUrl() {
    var qs = "?debug=true";

    with(location){
        var url = href + qs;        
    }

    return url;
}

var result = buildUrl();
print(result);
      
    