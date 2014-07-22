var Film = Backbone.Model.extend({
  url       : '/api/films',
	defaults:{
		year: 2014,
		name: '',
		id: undefined
	}
});