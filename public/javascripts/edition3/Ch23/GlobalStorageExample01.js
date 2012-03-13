//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/GlobalStorageExample01.htm
//Global Storage Example

EventUtil.addHandler(window, "load", function(){
    
    var dataStore = globalStorage[location.host];
    document.getElementById("name-value").innerHTML = dataStore.getItem("name");
    document.getElementById("book-value").innerHTML = dataStore.getItem("book");

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        //these don't work in webkit
        //delete dataStore.name;
        //delete dataStore.book;
        dataStore.removeItem("name");
        dataStore.removeItem("book");     
    });
    
    EventUtil.addHandler(document.getElementById("see-btn"), "click", function(){
        for (var i=0, len = dataStore.length; i < len; i++){
            var key = dataStore.key(i);
            var value = dataStore.getItem(key);
            print(key + "=" + value);
        }            
    });
    
    //set some data
    dataStore.setItem("name",  "Nicholas");
    dataStore.setItem("book", "Professional JavaScript");
});



    