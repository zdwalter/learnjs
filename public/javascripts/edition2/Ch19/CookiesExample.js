//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch19/CookiesExample.htm
//Cookies Example

EventUtil.addHandler(window, "load", function(){

    document.getElementById("name-value").innerHTML = CookieUtil.get("name");
    document.getElementById("book-value").innerHTML = CookieUtil.get("book");

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        CookieUtil.unset("name");
        CookieUtil.unset("book");            
    })
    
    //set some cookies
    CookieUtil.set("name", "Nicholas");
    CookieUtil.set("book", "Professional JavaScript");
});



    