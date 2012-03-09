//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/NodeKindExample.htm
//Attributes Example
XML.ignoreComments = false;
XML.ignoreProcessingInstructions = false;

var employees = <employees>
    <?Dont forget the donuts?>
    <employee position="Software Engineer">
        <name>Nicholas C. Zakas</name>
    </employee>
    <!-- just added -->
    <employee position="Salesperson">
        <name>Jim Smith</name>
    </employee>
</employees>;

                
print(employees.nodeKind());
print(employees.*[0].nodeKind());
print(employees.employee[0].@position.nodeKind());
print(employees.employee[0].nodeKind());
print(employees.child(2).nodeKind());
print(employees.employee[0].name.*[0].nodeKind());
    