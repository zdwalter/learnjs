//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch04/ExecutionContextExample03.htm
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
      
    