// VJET-78, VJET-24, VJET-39
Ext.require('ExtTest.create.Person');

// TODO VJET-78 , VJET-24
// Code assist for config options in Ext.create() method
// Ext.create('<< VJET-78 -> Ctrl+space -> proposals for available types>>', 
//             { << VJET-24 -> Ctrl+space -> proposals for config properties based on the type specified in first argument>>
//              , << VJET-24 -> Ctrl+space -> proposals for config properties based on the type specified in first argument>>
//              , << Validate invalid config options >>
//				, ... });

var bob = Ext.create('ExtTest.create.Person', // TODO VJET-78 
	                {
    					name: 'Bob', // TODO VJET-24
    					age: 30
    					//, <<Ctrl+space -> proposals for config properties based on the type specified in first argument>>
    					//, << Validate invalid config options >>
    					//, xyz_pqr: some_junk <= show error
    					// NO_SUPPORT based jsdoc for required config options 
					});

// TODO VJET-39
// Code assist for config options when creating new instance. Constructor missing code assist and validation for otype
var peter = new ExtTest.create.Person({
    					name: 'Peter', // TODO VJET-24
    					age: 20
    					//, <<Ctrl+space -> proposals for config properties based on the type>>
    					//, << Validate invalid config options >>
    					//, xyz_pqr: some_junk <= show error
					});