//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/AccessorPropertiesExample02.htm
//Accessor Properties Example

var book = {
    _year: 2004,
    edition: 1
};
  
//legacy accessor support
book.__defineGetter__("year", function(){
    return this._year;    
});

book.__defineSetter__("year", function(newValue){
    if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
    }    
});


book.year = 2005;
print(book.edition);   //2

    