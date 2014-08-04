var FilmCollectionView = Backbone.Marionette.CollectionView.extend({
	el: '#films-container',
  childView: FilmView,

	initialize: function(){
		this.collection.on('add', this.renderNewFilm, this);
	}

});

var filmsView = new FilmCollectionView({
	collection: films
});