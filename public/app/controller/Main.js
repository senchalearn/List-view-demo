Ext.define('ListDemo.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['Bondgirl'],
    
    config: {
        refs: {
            'viewport'   : '#rootpanel',
            'detailpanel': '#bondgirlDetail',
            'backButton' : 'button[action=back]'
        },
        control: {
            'button[action=back]': {
                tap: 'showList'
            },
            'list': {
                select: 'showDetail'
            }
        }
    },
    
    showList: function() {
        var viewport = this.getViewport();

        viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'right'
        });
        viewport.setActiveItem('bondgirlList');
        this.getBackButton().hide();
    },

    showDetail: function(dataview, record) {
        var viewport = this.getViewport();

        this.getDetailpanel().setData(record.data);
        viewport.getLayout().setAnimation({
            type: 'slide',
            direction: 'left'
        });
        viewport.setActiveItem('bondgirlDetail');
        this.getBackButton().show();
    }

});
