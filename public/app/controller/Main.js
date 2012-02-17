Ext.define('ListDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['Bondgirl'],
    
    config: {
        refs: {
            'main'   : '#rootpanel',
        },
        control: {
            'list': {
                disclose: 'showDetail'
            }
        }
    },
    
    showDetail: function(list, record) {
        this.getMain().push({
            xtype: 'detailpanel',
            title: record.fullName(),
            data:  record.data
        });
    }

});
