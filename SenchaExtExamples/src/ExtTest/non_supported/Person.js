/**
 * TODO code assist won't be supported for classes defined using Ext.Class()
 */
		
Ext.ns('ExtTest.non_supported');
ExtTest.non_supported.Person = new Ext.Class({
    name: 'Mr. Unknown',
    walk: function(steps) {
        alert(this.name + ' is walking ' + steps + ' steps');
    }
});