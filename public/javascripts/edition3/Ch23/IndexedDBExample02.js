//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/IndexedDBExample02.htm
//IndexedDB Example
    (function(){
    
var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB,
    request,
    store,
    database,
    users = [
        {
            username: "007",
            firstName: "James",
            lastName: "Bond",
            password: "foo"
        },
        {
            username: "ace",
            firstName: "John",
            lastName: "Smith",
            password: "bar"
        }                
    ];
    
request = indexedDB.open("example");
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
            store = database.createObjectStore("users", { keyPath: "username" });
            var i=0,
                len = users.length;

            while(i < len){
                store.add(users[i++]);
            }

            print("Database initialized for first time. Database name: " + database.name + ", Version: " + database.version);
        };
    } else {
        print("Database already initialized. Database name: " + database.name + ", Version: " + database.version);
        request = database.transaction("users").objectStore("users").get("007");
        request.onsuccess = function(event){
            print(event.target.result.firstName);
        };
    }
}
    
    })();

    