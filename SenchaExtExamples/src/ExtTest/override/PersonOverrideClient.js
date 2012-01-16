// VJET-69, VJET-81

// TODO VJET-69
// TODO VJET-81
// Ext.<<proposal for override function>>
// Ext.override(<<proposal for available types>>, ...);
// Ext.override(cls, { << proposal for functions to override based on type specified in first argument >> }) ;

//VJET shall give validation failure if
//- the function signature does not match the overridden function
//- the function specified does not exist in class specified

Ext.override(ExtTest.override.Person, {
	// Does NOT support proposal for derived functions
	// proposal for only the functions of ExtTest.override.Person class
    speak: function() {
        alert('About to speak my name...');

        this.callOverridden();
    }
});

var john = Ext.create('ExtTest.override.Person', {
				name : 'john'
			});
john.speak(); // alerts 'About to speak my name...'
              // alerts 'john'