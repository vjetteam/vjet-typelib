// VJET-74, VJET-75, VJET-70, VJET-73
// TODO VJET-74, VJET-75 wiring for Ext.define code assist in VJET
Ext.define('ExtTest.define.ExtendBase', {
	
	config : {
		count : 1,
		init_name: 'some_name'
	},

	foo : function() {
		// do something
	
		// TODO VJET-93 expect code assist 
        // this.<<proposal -> list of properties & functions from this class>>
        // this.<<proposal -> list of derived properties & functions (from Ext.Base class)>>
        // this.<<expect moo(), too() and get/setCount() + (Ext.Base functions & Properties) in proposals>> 
        // this.xyz() <-- VJET cannot report error since that could be dynamically added
        // this.pqr <-- VJET cannot report error since that could be dynamically added
        
        // To provide type information for the arguments, VJET requires JSDoc or VJETDoc, otherwise defaults to Object type 
		// this.too();
        

        // TODO VJET-70 
		// valiation 
        // this.<<proposal -> shall NOT list of derived properties & functions from vjo.Object class)>>
		
        // TODO VJET-73 
		// valiation to NOT list .vjo$
        // this.<<vjo$>>
		
	},
	
	moo : function(data) {
		// do something
	
    },
    
    // TODO 
    // To provide type information for the arguments, VJET requires JSDoc or VJETDoc, otherwise defaults to Object type 
    too: function(arg1, arg2, arg3) {
    	// do something
}


});