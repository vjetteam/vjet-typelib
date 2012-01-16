// VJET-80, VJET-83, VJET-93, VJET-94
Ext.define('ExtTest.define.ExtendChild', {
	
	// TODO VJET-83
	// - the outline view shall show list of functions

	// TODO VJET-80 expect code assist for extend
    // extend : 'Ctrl+space -> shows list of types'
	extend : 'ExtTest.define.ExtendBase',
	
	boo : function() {
		// do something
	
		// TODO VJET-93 expect code assist for
        // this.<<proposal -> list of properties & functions from this class>>
        // this.<<proposal -> list of derived properties & functions (from ExtendBase + Ext.Base class)>>
        // this.<<expect moo and zoo + (ExtendBase & Ext.Base functions & Properties) in proposals>> 
        // this.xyz() <-- VJET shall report error
        // this.pqr <-- VJET shall report error
        
        
		this.moo
		
	},
		
	moo : function(data, p2) {
		// do something
	
		// TODO VJET-94
		// TODO expect code assist and validation for overridden method
		// this.<<proposal -> propose the callParent(arguments) to call the overridden method>>
		// this.<<validate signature for callParent(arguments)>>
	},
	
	zoo : function(data) {
		// do something
	
    }


});