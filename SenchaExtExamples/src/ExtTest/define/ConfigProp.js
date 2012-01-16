// VJET-80 
Ext.define('ExtTest.define.ConfigProp', {
	
	extend : 'ExtTest.define.ExtendBase',
	
	// TODO VJET-80 expect code assist for 'config'
    // Ctrl+space shall propose 'config'
	config : {
    	name : 'Boo',
    	age: 10
    },
	    
	constructor: function(config) {
	    this.initConfig(config);
	
	    return this;
	}
	
});
