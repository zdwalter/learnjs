//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch17/XDomainRequestExample.htm
//XDomainRequest Example
    
var xdr = new XDomainRequest();
xdr.onload = function(){
    print(xdr.responseText);
};
xdr.onerror = function(){
    print("Error!");
};

//you'll need to replace this URL with something that works
xdr.open("get", "http://www.somewhere-else.com/xdr.php");
xdr.send(null);    

    