//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/MultiplePropertiesExample01.htm
//Multiple Properties Example

var book = {};

Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    
    edition: {
        value: 1
    },
    
    year: {            
        get: function(){
            return this._year;
        },
        
        set: function(newValue){
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }                  
        }            
    }        
});
   
book.year = 2005;
print(book.edition);   //2

    