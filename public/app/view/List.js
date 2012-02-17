Ext.define('ListDemo.view.List', {
    extend: 'Ext.List',
    xtype: 'listpanel',
    id: 'bondgirlList',
    requires: ['ListDemo.store.Bondgirls'],
    
    config: {
        grouped: true,
        itemTpl: '{firstName} {lastName}',
        store: 'Bondgirls',
        onItemDisclosure: true
    }
});
