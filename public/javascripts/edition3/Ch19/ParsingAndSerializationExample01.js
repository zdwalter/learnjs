//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/ParsingAndSerializationExample01.htm
//Parsing and Serialization Example
    
var employees = <employees>
    <employee position="Software Engineer">
        <name>Nicholas C. Zakas</name>
    </employee>
    <employee position="Salesperson">
        <name>Jim Smith</name>
    </employee>
</employees>;

var settings = XML.settings();
print(settings.ignoreWhitespace);    //true
print(settings.ignoreComments);      //true

settings.prettyIndent = 8;

XML.setSettings(settings);

print(employees);

    