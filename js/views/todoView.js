define([
    'jquery',
    'underscore',
    'backbone',
    '../models/todo'],
    function($, _, Backbone) {
        let TodoView = Backbone.View.extend({
            tagName: 'li',

            events: {
                'click .destroy': 'deleteTodo',
                'dbclick label': 'editTxt',
                'click .toggle': 'todoStaus',
                'keypress .edit': 'editTodo',
                'click .toggle': 'updateTodo'
            },

            initialize: function() {
                this.listenTo(this.model, 'change', this.render);
            },

            render: function() {
            const template = _.template($('#todo-item').html());
			this.$el.html(template(this.model.toJSON()));
			this.$el.toggleClass('completed', this.model.get('completed'));
			this.$input = this.$('.edit');
			return this;
            },

            deleteTodo: function() {
                this.remove();
            },

            editTxt: function() {

            },

            updateTodo: function() {
                this.model.toggle();
            },

            editTodo: function(e) {
                if (e.which === 13) {
                    console.log(this.$input.val());
                    console.log(this.model.get('title'));
                    value = this.$input.val();
                    this.model.set({title: value});
                }
            },

            todoStatus: function() {
                this.model.toogle();
            }

        });

        return TodoView;
});