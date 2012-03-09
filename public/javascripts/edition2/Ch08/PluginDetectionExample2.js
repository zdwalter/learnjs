//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/PluginDetectionExample2.htm
//IE Plugin Detection Example

    //plugin detection for IE
    function hasIEPlugin(name){
        try {
            new ActiveXObject(name);
            return true;
        } catch (ex){
            return false;
        }
    }
    
    //detect flash
    print(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
    
    //detect quicktime
    print(hasIEPlugin("QuickTime.QuickTime"));

