//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/SessionStorageExample01.htm
//Session Storage Example

EventUtil.addHandler(window, "load", function(){

    document.getElementById("name-value").innerHTML = sessionStorage.getItem("name");
    document.getElementById("book-value").innerHTML = sessionStorage.getItem("book");

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        //these don't work in webkit
        //delete sessionStorage.name;
        //delete sessionStorage.book;
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("book");    
    });
    
    EventUtil.addHandler(document.getElementById("see-btn"), "click", function(){
        var i, key, value;
        for (i=0, len = sessionStorage.length; i < len; i++){
            key = sessionStorage.key(i);
            value = sessionStorage.getItem(key);
            print(key + "=" + value);
        }            
    });
    
    //set some data
    sessionStorage.setItem("name", "Nicholas");
    sessionStorage.setItem("book", "Professional JavaScript");
});



    