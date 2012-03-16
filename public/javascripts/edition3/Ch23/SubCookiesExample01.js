//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/SubCookiesExample01.htm
//SubCookies Example

EventUtil.addHandler(window, "load", function(){

    document.getElementById("name-value").innerHTML = SubCookieUtil.get("data", "name");
    document.getElementById("book-value").innerHTML = SubCookieUtil.get("data", "book");

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        SubCookieUtil.unset("data", "name");
        SubCookieUtil.unset("data", "book");      
        //SubCookieUtil.unsetAll("data");      
    })
    
    //set some cookies
    SubCookieUtil.set("data", "name", "Nicholas");
    SubCookieUtil.set("data", "book", "Professional JavaScript");
});



    