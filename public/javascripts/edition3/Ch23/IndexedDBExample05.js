//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/IndexedDBExample05.htm
//IndexedDB Example
    (function(){
    
var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB,
    IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction,
    IDBCursor = window.IDBCursor || window.webkitIDBCursor,
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
        },
        {
            username: "foobar",
            firstName: "Michael",
            lastName: "Johnson",
            password: "secret"
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
            users.forEach(function(user){
                store.add(user);
            });        
            outputValues();
        };
    } else {
        outputValues();
    }
}
        
function outputValues(){
    var store = database.transaction("users").objectStore("users"),
        request = store.openCursor(null, IDBCursor.PREV);

    request.onsuccess = function(event){
        var cursor = event.target.result;
        if (cursor){  //always check
            console.log("Key: " + cursor.key + ", Value: " + JSON.stringify(cursor.value));
            cursor.continue();   //go to the next one
        } else {
            console.log("Done!");
        }
    };

    request.onfailure = function(event){
        console.error("Iteration did not succeed.");
    };
}
    
    })();

    