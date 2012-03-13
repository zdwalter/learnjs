//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/NamespaceExample01.htm
//Namespace Example
    
var messages = <messages>
    <message>Hello world!</message>
</messages>;
var wrox = new Namespace("wrox", "http://www.wrox.com/");
messages.setNamespace(wrox);
messages.message.setNamespace(wrox);

print(messages);

print(messages.wrox::message);
    