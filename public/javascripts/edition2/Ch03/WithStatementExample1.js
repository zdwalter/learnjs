//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch03/WithStatementExample1.htm
//With Statement Example 1
    
with(location){
    var qs = search.substring(1);
    var hostName = hostname;      //unavailable when viewing from a local file
    var url = href;
}

print(qs);
print(hostName);
print(url);



    