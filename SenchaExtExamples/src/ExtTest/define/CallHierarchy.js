// VJET-76
Ext.define('ExtTest.define.CallHierarchy', {
	
	requires: ['Ext.tab.*',
				'Ext.window.*',
			    'Ext.tip.*',
			    'Ext.layout.container.Border'],
	
	showWindow: function() {
		
		var win = Ext.create('widget.window', {
		        title: 'Layout Window',
		        closable: true,
		        closeAction: 'hide',
		        //animateTarget: this,
		        width: 600,
		        height: 350,
		        layout: 'border',
		        bodyStyle: 'padding: 5px;',
		        items: [{
				            region: 'west',
				            title: 'Navigation',
				            width: 200,
				            split: true,
				            collapsible: true,
				            floatable: false
			        	}, {
				            region: 'center',
				            xtype: 'tabpanel',
				            items: [{
				            			title: 'Bogus Tab',
				            			html: 'Hello world 1'
				            		}, {
				            			title: 'Another Tab',
						                html: 'Hello world 2'
				            		}, {
					            	title: 'Closable Tab',
					                html: 'Hello world 3',
					                closable: true
				            		}]
			        	}]
		    });
		
		// TODO VJET-76
		// - code proposals for win object
		// win.<<proposal for properties and functions of Window object>>
		// VJET will ONLY support items described using jsdoc
		win.show(this, function() {
		        button.dom.disabled = false;
		    });
	}

});