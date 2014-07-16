var AddFilmView = Backbone.View.extend({
  className: 'add-film-form',
  el       : '#forms-container',

  events: {
    'click #add-new': 'addNewFilm'
  },

  template: _.template($('#add-new-film').html()),

  initialize: function () {
    console.log(this);
    this.render();
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  addNewFilm: function () {
    var title = $('#film-title').val(),
        year = $('#film-year').val(),
        poster = $('#film-poster').val();

    if (title.length > 0 && year.length > 0) {
      var collection = this.collection,
          collection_length = collection.length;
      console.log(this);
      collection.add({name: title, year: "(" + year + ")", id: 1+collection_length});

      this.render();
    } else {
      this.$el.append('<small>Title and year should be filled</small>');
    }

  }
});

var addFilmsView = new AddFilmView({
  collection: films
});