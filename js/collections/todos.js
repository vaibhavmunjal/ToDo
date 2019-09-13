define([
    'underscore',
    'backbone',
    '../models/todo'],
    function(_, Backbone, Todo) {
        let Todos = Backbone.Collection.extend({
            model: Todo,

            completed: function() {
                this.where({completed: true});
            },

            remaining: function(){
                this.where({completed: false});
            },

        })

        return Todos;
});