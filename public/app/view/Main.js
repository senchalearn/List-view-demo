Ext.define('ListDemo.view.Main', {
    extend: 'Ext.List',
    id: 'rootpanel',
    requires: [
        'ListDemo.view.Detail',
        'ListDemo.view.List'
    ],
    
    config: {
        fullscreen: true,
        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {
                xtype: 'listpanel'
            },
            {
                xtype: 'detailpanel',
            },
            {
                xtype : 'titlebar',
                docked: 'top',
                title: 'Bond girls',
                items: [
                    {
                        text: 'back',
                        ui: 'back',
                        action: 'back',
                        hidden: true
                    }
                ]
            }
        ]
    }
});
