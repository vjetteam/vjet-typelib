// VJET-79
Ext.ns('ExtTest.extend');

// TODO expect code proposals for instance type as first argument in Ext.extend()
ExtTest.extend.DataPanel = Ext.extend(Ext.grid.GridPanel, {
    title: "Company Data",
    store: "dataStore",
    width: 400,
    height: 250,
    initComponent: function() {
        this.columns = [ // Columns 
                       ];
        ExtTest.extend.DataPanel.superclass.initComponent.call(this);
    }
});

// Other samples
// http://docs.sencha.com/ext-js/4-0/source/CompositeElementLite.html#Ext-CompositeElementLite
// http://docs.sencha.com/ext-js/4-0/source/CompositeElement.html#Ext-CompositeElement

