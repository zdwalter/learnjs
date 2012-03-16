//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/IndexedDBExample01.htm
//IndexedDB Example
    (function(){
    
var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB,
    request,
    database;
    
request = indexedDB.open("admin");
request.onerror = function(event){
    print("Something bad happened while trying to open: " + event.target.errorCode);
};
request.onsuccess = function(event){
    database = event.target.result;
    initializeDatabase();
};    
    
function initializeDatabase(){
    if (database.version != "1.0"){
        request = database.setVersion("1.0");
        request.onerror = function(event){
            print("Something bad happened while trying to set version: " + event.target.errorCode);
        };
        request.onsuccess = function(event){
            print("Database initialization complete. Database name: " + database.name + ", Version: " + database.version);
        };
    } else {
        print("Database already initialized. Database name: " + database.name + ", Version: " + database.version);
    }
}
    
    })();

    