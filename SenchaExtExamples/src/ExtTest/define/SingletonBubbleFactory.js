Ext.define('ExtTest.define.SingletonBubbleFactory', {
	
	// TODO VJET-80
	// Ctrl+space -> expect code proposal for 'singleton' class processor 
	singleton: true,
 
    produce: function(number) {
        return number + ' of bubbles';
    }
 
});
