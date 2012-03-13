//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/LocalStorageExample01.htm
//Local Storage Example

EventUtil.addHandler(window, "load", function(){
    
    document.getElementById("name-value").innerHTML = localStorage.getItem("name");
    document.getElementById("book-value").innerHTML = localStorage.getItem("book");

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        //these don't work in webkit
        //delete localStorage.name;
        //delete localStorage.book;
        localStorage.removeItem("name");
        localStorage.removeItem("book");     
    });
    
    EventUtil.addHandler(document.getElementById("see-btn"), "click", function(){
        var i, key, value;
        for (i=0, len = localStorage.length; i < len; i++){
            key = localStorage.key(i);
            value = localStorage.getItem(key);
            print(key + "=" + value);
        }            
    });
    
    //set some data
    localStorage.setItem("name", "Nicholas");
    localStorage.setItem("book", "Professional JavaScript");
});



    