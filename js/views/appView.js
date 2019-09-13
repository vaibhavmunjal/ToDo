define([
	'jquery',
	'underscore',
	'backbone',
	'../models/todo',
	'./todoView'],
	function($, _, Backbone, Todo, TodoView) {

		let AppView = Backbone.View.extend({

			el: '.todo',

			events: {
				'click .save-todo': 'callMe',
			},
			callMe : function() {
				const input = $('#new-todo').val();
				console.log(input);
				const todo = new Todo({title: input});
				const todoView = new TodoView({model: todo});
				this.$list = $('.todo-list');
				this.$list.append(todoView.render().$el);
			},

	});
	return AppView;
});

