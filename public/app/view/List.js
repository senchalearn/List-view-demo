Ext.define('ListDemo.view.List', {
    extend: 'Ext.List',
    xtype: 'listpanel',
    id: 'bondgirlList',
    requires: ['ListDemo.store.Presidents'],
    
    config: {
        grouped: true,
        itemTpl: '{firstName} {lastName}',
        store: 'Presidents',
        onItemDisclosure: true
    }
});
