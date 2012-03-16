//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/UserDataExample01.htm
//UserData Example

EventUtil.addHandler(window, "load", function(){

    var dataStore = document.getElementById("dataStore");
    dataStore.load("BookInfo");
    document.getElementById("name-value").innerHTML = dataStore.getAttribute("name");
    document.getElementById("book-value").innerHTML = dataStore.getAttribute("book");

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        dataStore.removeAttribute("name");
        dataStore.removeAttribute("book");      
        dataStore.save("BookInfo");
        //SubCookieUtil.unsetAll("data");      
    })
    
    //set some cookies
    dataStore.setAttribute("name", "Nicholas");
    dataStore.setAttribute("book", "Professional JavaScript");
    dataStore.save("BookInfo");
});



    