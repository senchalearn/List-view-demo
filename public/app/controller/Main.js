Ext.define('ListDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['Bondgirl'],
    
    config: {
        refs: {
            'viewport'   : '#rootpanel',
        },
        control: {
            'list': {
                select: 'showDetail'
            }
        }
    },
    
    showDetail: function(dataview, record) {
        var viewport = this.getViewport(),
            detail = Ext.create('ListDemo.view.Detail');

        detail.setData(record.data)
        viewport.push(detail);
    }

});
