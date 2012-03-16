//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch20/JSONStringifyExample05.htm
//JSON Stringify Example
var book = {
               "title": "Professional JavaScript",
                "authors": [
                    "Nicholas C. Zakas"
                ],
                edition: 3,
                year: 2011,
                toJSON: function(){
                    return this.title;
                }
           };

var jsonText = JSON.stringify(book);
print(jsonText);

    