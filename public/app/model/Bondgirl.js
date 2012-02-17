Ext.define('ListDemo.model.Bondgirl', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['firstName', 'lastName']
    },
    fullName: function() {
        return this.data.firstName + " " + this.data.lastName;
    }
});
