Ext.define('ExtTest.create.Person', { 
	alias: 'person',
	config: { 
		name: '',
		age: 20,
		gender: 'male' },

	constructor: function(config) {
		this.initConfig(config);

		return this;
	},

	speak: function() {
		alert(this.getName());
	}
});