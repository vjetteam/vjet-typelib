Ext.define('ExtTest.define.RequiresTest', {
	
	// TODO VJET-80 expect code assist for requires
    // requires : ['Ctrl+space -> shows list of types', 'Ctrl+space -> shows list of types', ...]
	requires: ['ExtTest.define.SingletonBubbleFactory', 'Ext.util.HashMap'],
	
    foo: function() {
		
		var map = new Ext.util.HashMap();
		map.add('key1', 1);
		map.add('key2', 2);
		map.add('key3', 3);

		alert(ExtTest.define.SingletonBubbleFactory.produce(5));

	}
	
});