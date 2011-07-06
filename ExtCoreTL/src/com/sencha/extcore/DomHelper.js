vjo.ctype('com.sencha.extcore.DomHelper') //< public
.globals({
    DomHelper : null //< DomHelper
}, Ext) // Make child of Ext global
.props({
    data : vjo.otype().defs({
        elementSpec : {
            'id'   : null //< public String?
          , 'tag'  : null //< public String
          , 'cls'  : null //< public String?
          , 'html' : null //< public String?
          , 'children' : null //< public Array?
        }
    }).endType()
})
.protos({
    
})
.options({
    metatype : true
})
.endType()