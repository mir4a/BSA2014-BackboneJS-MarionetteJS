var FilmCompositeView = Backbone.Marionette.CompositeView.extend({
  template: '#app-template',

  childView: FilmView,

  childViewContainer: '#films-container',

  ui: {
    title: '#film-title',
    year: '#film-year',
    poster: '#film-poster',
    add_btn: '#add-new'
  },

  events: {
    'click @ui.add_btn': 'addNewFilm'
  },


  addNewFilm: function () {
    var title = this.ui.title.val(),
        year = this.ui.year.val(),
        poster = this.ui.poster.val(),
        collection = this.collection;

    if (title.length > 0 && year.length > 0) {
      var m = new Film();
      m.save({'name': title, 'poster': poster, 'year': "(" + year + ")"}).done(function(model, response) {
        collection.fetch(); // This works better than that below
      });
    } else {
      this.$el.append('<small>Title and year should be filled</small>');
    }

  }
});

var filmsView = new FilmCompositeView({
  model: filmModel,
  collection: films
});
