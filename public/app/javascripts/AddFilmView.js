var AddFilmView = Backbone.Marionette.ItemView.extend({
  className: 'add-film-form',
  url: '/api/films',
  collection: films,

  ui: {
    add_new: '#add-new'
  },

  events: {
    'click @ui.add_new': 'addNewFilm'
  },

  template: '#add-new-film',

  addNewFilm: function () {
    var title = $('#film-title').val(),
        year = $('#film-year').val(),
        poster = $('#film-poster').val(),
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

var addNew = new AddFilmView;
