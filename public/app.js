Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'ListDemo',
    
    controllers: ['Main'],
    views: ['Main'],
    stores: ['Bondgirls'],
    
    launch: function() {
        Ext.Viewport.add({
            xclass: 'ListDemo.view.Main'
        });
    }
});
