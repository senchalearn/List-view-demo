Ext.define('ListDemo.view.Main', {
    extend: 'Ext.navigation.View',
    id: 'rootpanel',
    requires: ['ListDemo.view.List','ListDemo.view.Detail'],

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
