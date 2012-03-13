//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/StorageEventExample01.htm
//Storage Event Example
function getLocalStorage(){
    if (typeof localStorage == "object"){
        return localStorage;
    } else if (typeof globalStorage == "object"){
        return globalStorage[location.host];
    } else {
        throw new Error("Local storage not available.");
    }
}

EventUtil.addHandler(window, "load", function(){
    
    var dataStore = getLocalStorage();
    document.getElementById("name-value").innerHTML = dataStore.getItem("name");
    document.getElementById("book-value").innerHTML = dataStore.getItem("book");

    EventUtil.addHandler(document, "storage", function(event){
        //most browsers haven't implemented this properties yet
        //print("Storage changed. Name '" + event.key + "' changed from '" + event.oldValue + "' to '" + event.newValue + "'");
        print("Storage changed for " + event.domain);            
    });

    EventUtil.addHandler(document.getElementById("delete-btn"), "click", function(){
        //these don't work in webkit
        //delete dataStore.name;
        //delete dataStore.book;
        dataStore.removeItem("name");
        dataStore.removeItem("book");     
    });
    
    EventUtil.addHandler(document.getElementById("see-btn"), "click", function(){
        var i, key, value;
        for (i=0, len = dataStore.length; i < len; i++){
            key = dataStore.key(i);
            value = dataStore.getItem(key);
            print(key + "=" + value);
        }            
    });
    
    //set some data
    dataStore.setItem("name", "Nicholas");
    dataStore.setItem("book", "Professional JavaScript");
});



    