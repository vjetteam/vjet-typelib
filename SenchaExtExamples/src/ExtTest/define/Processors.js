// VJET-74, VJET-80
// TODO VJET-74 wiring for Ext.define code assist in VJET
Ext.define('ExtTest.define.Processors', {
    
	// TODO VJET-80
	// expect code assist for class processors like 
	// - alias
    // - alternateClassName
    // - config 
	// - extend 
    // - inheritableStatics
	// - mixins 
    // - requires 
    // - singleton
    // - statics 
	// - uses
    // e.g. Ctrl+space shall list the processors>>
    // 

	name: 'ProcessorsTest',
 
    constructor: function(config) { 
	   this.initConfig(config);
 
        return this;
	},
 
    foo: function(data) { 
	  // process data
    }
});