Ext.define('ListDemo.view.Main', {
    extend: 'Ext.Container',
    id: 'rootpanel',
    requires: [
        'ListDemo.view.Detail',
        'ListDemo.view.List',
        'Ext.TitleBar',
    ],
    
    config: {
        fullscreen: true,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {xtype: 'listpanel'}
        ]
    }
});
