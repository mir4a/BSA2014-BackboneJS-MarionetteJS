var FilmCollectionView = Backbone.Marionette.CollectionView.extend({
  childView: FilmView,
	collection: films
});

var filmsView = new FilmCollectionView();
FilmsApp.mainRegion.show(filmsView);