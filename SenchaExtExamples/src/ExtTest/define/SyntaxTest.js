// VJET-82
// TODO VJET-82
Ext.define('ExtTest.define.ExtendBase', {
	
	config : {
		count : 1
	},

	foo : function() {
		// do something
		
		// TODO VJET-82
		// this.<<proposal for moo even though moo() has syntax error>>
		
	},
	
	moo : function(data) {
		// do something
		
		// TODO VJET-82
		
		// syntax errors for missing right-side braces, bracket, method invocation expression, loops and conditional expression, 
		// some examples below
		
		// VJET should report following statement as an error
		//this.  ; 
		
		// VJET should report following statement as an error
		// this.foo(;
		
		// VJET should report following block with missing closing brace as an error
		// if(data) {
		//	 alert(data);
		
		// code assist shall attempt to work for other functions
		
	}
	

});
		
	
