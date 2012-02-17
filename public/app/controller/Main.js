Ext.define('ListDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['Bondgirl'],
    
    config: {
        refs: {
            'main'   : '#rootpanel',
        },
        control: {
            'list': {
                itemtap: 'showDetail'
            }
        }
    },
    
    showDetail: function(list, index, node, record) {
        this.getMain().push({
            xtype: 'detailpanel',
            title: record.fullName(),
            data:  record.data
        });
    }

});
