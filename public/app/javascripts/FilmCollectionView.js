var FilmCollectionView = Backbone.View.extend({
	el: '#films-container',

	initialize: function(){
		this.collection.on('add', this.renderNewFilm, this);
	},

	renderNewFilm: function(model){
    console.log('this');
    console.log(this);
		var view = new FilmView({
			model: model
		});
    console.log('view');
    console.log(view);

		this.$el.append(view.$el);
    return this;
	}

});

var filmsView = new FilmCollectionView({
	collection: films
});