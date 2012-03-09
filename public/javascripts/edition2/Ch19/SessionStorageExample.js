//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch19/SessionStorageExample.htm
//Session Storage Example

EventUtil.addHandler(window, "load", function(){

    document.getElementById("name-value").innerHTML = sessionStorage.name;
    document.getElementById("book-value").innerHTML = sessionStorage.book;

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        //these don't work in webkit
        //delete sessionStorage.name;
        //delete sessionStorage.book;
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("book");    
    });
    
    EventUtil.addHandler(document.getElementById("see-btn"), "click", function(){
        for (var i=0, len = sessionStorage.length; i < len; i++){
            var key = sessionStorage.key(i);
            var value = sessionStorage.getItem(key);
            print(key + "=" + value);
        }            
    });
    
    //set some data
    sessionStorage.name =  "Nicholas";
    sessionStorage.book = "Professional JavaScript";
});



    