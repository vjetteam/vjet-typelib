Ext.require(['ExtTest.define.*']);

var bar = Ext.create('ExtTest.define.ConfigProp', {
						name : 'foo'
					});

// TODO VJET-80 expect getter/setter method proposals for 'name' & 'count' config property
// For type information of config property, VJET infers based on value type, except its specified using JSDoc/VJETDoc
// bar.<<proposal for getName()>>
// bar.<<proposal for setName(String)>>
// bar.<<proposal for getCount() i.e. derived config property>>
// bar.<<proposal for setCount(Number) i.e. derived config property>>
// bar.getXyz() <- VJET shall report this as error