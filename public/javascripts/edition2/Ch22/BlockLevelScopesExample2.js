//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/BlockLevelScopesExample2.htm
//Block Level Scopes Example
for (var i=0; i < 10; i++) {
    //do something
}

print(i);    //10

for (let j=0; j < 10; j++) {
    //do something
}

print(j);    //Error!
    