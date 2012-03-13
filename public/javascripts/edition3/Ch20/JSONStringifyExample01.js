//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch20/JSONStringifyExample01.htm
//JSON Stringify Example
var book = {
                title: "Professional JavaScript",
                authors: [
                    "Nicholas C. Zakas"
                ],
                edition: 3,
                year: 2011
           };

var jsonText = JSON.stringify(book, ["title", "edition"]);
print(jsonText);

    