require.config({
	paths: {
		jquery: 'https://code.jquery.com/jquery-3.4.1.min',
		underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min',
		backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min'
	}
});


define(['app'],
	function(App) {
		App.initialize();

});
