define([
    'jquery',
    'underscore',
    'backbone',
    '../models/todo'],
    function($, _, Backbone) {
        let AppView = Backbone.View.extend({
            render: function() {
                this.$el.html(this.model.get('title'));

                return this;
            }
        });
    
        return AppView;
});