//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch20/JSONObjectExample01.htm
//JSON Object Example
var book = {
               "title": "Professional JavaScript",
                "authors": [
                    "Nicholas C. Zakas"
                ],
                edition: 3,
                year: 2011
           };

var jsonText = JSON.stringify(book);
print(jsonText);

var bookCopy = JSON.parse(jsonText);
print(bookCopy.title);
    