define([
    'underscore',
    'backbone'],
    function(_, Backbone){
        let Todo = Backbone.Model.extend({

            defaults: {
                title: '',
                completed: false
            },
            url: 'fake',


            toggle: function(){
                this.set({
                    completed: !this.get('completed')
                });
                console.log(this.get('completed'));
            },
        });

        return Todo;

});