Ext.define('ExtTest.define.UsesTest', {
	
	// TODO VJET-80 expect code assist for uses
    // uses : ['Ctrl+space -> shows list of types', 'Ctrl+space -> shows list of types', ...]
	uses: ['ExtTest.define.SingletonBubbleFactory', 'Ext.util.HashMap'],
	
    foo: function() {
		
		var map = new Ext.util.HashMap();
		map.add('key1', 1);
		map.add('key2', 2);
		map.add('key3', 3);

		alert(ExtTest.define.SingletonBubbleFactory.produce(5));

	}
	
});