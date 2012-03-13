//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch20/JSONStringifyExample02.htm
//JSON Stringify Example
var book = {
                title: "Professional JavaScript",
                authors: [
                    "Nicholas C. Zakas"
                ],
                edition: 3,
                year: 2011
           };

var jsonText = JSON.stringify(book, function(key, value){
    switch(key){
        case "authors":
            return value.join(",")
         
        case "year":
            return 5000;
            
        case "edition":
            return undefined;
            
        default:
            return value;
    }
});
print(jsonText);

    