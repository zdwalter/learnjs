//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch19/LocalStorageExample.htm
//Local Storage Example

EventUtil.addHandler(window, "load", function(){
    
    document.getElementById("name-value").innerHTML = localStorage.name;
    document.getElementById("book-value").innerHTML = localStorage.book;

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        //these don't work in webkit
        //delete localStorage.name;
        //delete localStorage.book;
        localStorage.removeItem("name");
        localStorage.removeItem("book");     
    });
    
    EventUtil.addHandler(document.getElementById("see-btn"), "click", function(){
        for (var i=0, len = localStorage.length; i < len; i++){
            var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            print(key + "=" + value);
        }            
    });
    
    //set some data
    localStorage.name =  "Nicholas";
    localStorage.book = "Professional JavaScript";
});



    