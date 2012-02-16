Ext.define('ListDemo.view.Main', {
    extend: 'Ext.navigation.View',
    id: 'rootpanel',
    requires: [
        'ListDemo.view.Detail',
        'ListDemo.view.List',
        'Ext.TitleBar',
    ],

    config: {

        layout: {
            type: 'card',
            animation: 'slide'
        },
        items: [
            {
                xtype: 'listpanel',
                title: 'Bond girls'
            }
        ]
    }
});
