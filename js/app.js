define([
	'models/todo',
	'views/todo-view'],
	function(App, AppView) {

		let initialize = function() {
			const app = new App({title: 'new todo'});
			const appView = new AppView({el: '#container', model: app});
			appView.render();
		}

        // this returning pattern (revealing pattern) 
        // is used to make the initialize method public (accessible) for outers.
		return {
			initialize: initialize
		};

});

