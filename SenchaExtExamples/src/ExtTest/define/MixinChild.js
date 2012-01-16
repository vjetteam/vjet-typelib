// VJET-80 , VJET-71, VJET-94
Ext.define('ExtTest.define.MixinChild', {
	
	// TODO VJET-83 the outline view shall show list of functions

	// TODO expect code assist for extend
    // extend : 'Ctrl+space -> shows list of types'
	extend: 'ExtTest.define.ExtendBase',
	mixins: {
    	canSwim: 'ExtTest.define.MixinParentA',
    	canFly: 'ExtTest.define.MixinParentB'
    },
	
	boo : function() {
		// do something
	
		// TODO VJET-80 expect code assist for
        // this.<<proposal -> list of properties & functions from this class>>
        // this.<<proposal -> list of derived properties & functions (from ExtendBase + Ext.Base class)>>
        
        // TODO VJET-80 expect code assist for mixins
        // this.mixins is a special object holding references to all mixins' prototypes
        
        // this.mixins.<<proposal for specified mixins prototypes>>
        // this.mixins.<<proposal for specified mixins prototypes>>.<<proposal for mixins functions>>
        // e.g. this.mixins.canSwim.swim.apply(this, arguments);
        
	},
		
	swim : function() {
		// do something
		
		// TODO VJET-71 currently the mixin rules in VJET reports validation error when
		// the child class has same function as the mixin type
		// Enhance the VJET valiadation for ExtJS mixin and do NOT report validation error
		// for the code below
	    this.mixins.canSwim.swim.apply(this, arguments);
	    
	},
		
	moo : function(data) {
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