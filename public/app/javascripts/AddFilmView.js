var AddFilmView = Backbone.View.extend({
  className: 'add-film-form',
  el       : '#forms-container',

  events: {
    'click #add-new': 'addNewFilm'
  },

  template: _.template($('#add-new-film').html()),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  addNewFilm: function () {
    var title = $('#film-title').val(),
        year = $('#film-year').val(),
        poster = $('#film-poster').val(),
        collection = this.collection,
        collection_length = collection.length;

    if (title.length > 0 && year.length > 0) {
      console.log(this);
      var m = new Film({'name': title, 'poster': poster, 'year': "(" + year + ")", '_id': collection_length + 1}); // TODO: Fix missing id feature
      this.collection.create(m);
    } else {
      this.$el.append('<small>Title and year should be filled</small>');
    }

  }

});

var addFilmsView = new AddFilmView({
  collection: films
});