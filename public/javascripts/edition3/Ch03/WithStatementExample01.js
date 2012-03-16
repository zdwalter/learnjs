//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/WithStatementExample01.htm
//With Statement Example 1
    
with(location){
    var qs = search.substring(1);
    var hostName = hostname;      //unavailable when viewing from a local file
    var url = href;
}

print(qs);
print(hostName);
print(url);



    