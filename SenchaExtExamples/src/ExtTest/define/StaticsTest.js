Ext.define('ExtTest.define.StaticsTest', {
	
	// TODO VJET-83 outline view shall list the statics items
	
	// TODO VJET-80 expect code assist for 'statics' processors 
	// e.g. Ctrl+space shall list the 'statics' processors>>
    statics: {
        idSeed: 1000,
        getNextId: function() {
			// TODO VJET-80 this.<<proposal for other static properties / functions>>
            return this.idSeed++;
        }
    }
});
