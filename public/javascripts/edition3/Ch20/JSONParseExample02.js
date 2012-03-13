//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch20/JSONParseExample02.htm
//JSON Parse Example
var book = {
               "title": "Professional JavaScript",
                "authors": [
                    "Nicholas C. Zakas"
                ],
                edition: 3,
                year: 2011,
                releaseDate: new Date(2011, 11, 1)
           };

var jsonText = JSON.stringify(book);
print(jsonText);

var bookCopy = JSON.parse(jsonText, function(key, value){
    if (key == "releaseDate"){
        return undefined;
    } else {
        return value;
    }
});

print("releaseDate" in bookCopy);

    