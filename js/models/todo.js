define([
    'underscore',
    'backbone'],
    function(_, Backbone){
        let App = Backbone.Model.extend({
        
            defaults: {
                title: '',
                completed: false
            },
        
            toggle: function(){
                this.save({
                    completed: !this.get('completed')
                });
            },
        });

        return App;

});