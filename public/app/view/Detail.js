Ext.define('ListDemo.view.Detail', {
    extend: 'Ext.Panel',
    xtype: 'detailpanel',
    id: 'bondgirlDetail',

    config: {
        title: 'Details',
        styleHtmlContent: true,
        tpl: [
            'Hello {firstName}!'
        ]
    }
});
