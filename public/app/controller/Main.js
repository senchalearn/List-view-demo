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
        var detailCard = Ext.create('ListDemo.view.Detail');
        detailCard.setData(record.data);
        this.getMain().push(detailCard);
    }

});
