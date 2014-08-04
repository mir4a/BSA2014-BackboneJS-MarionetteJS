var FilmCompositeView = Backbone.Marionette.CompositeView.extend({
  template: '#app-template',

  childView: FilmView,

  childViewContainer: '#films-container'
});

var filmsView = new FilmCompositeView({
  model: filmModel,
  collection: films
});
