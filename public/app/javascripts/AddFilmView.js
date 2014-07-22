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
        poster = $('#film-poster').val(),
        collection = this.collection,
        collection_length = collection.length,
        data = {};

    if (title.length > 0 && year.length > 0) {
      console.log(this);
//      this.newFilm(data);
      var m = new Film({'name': title, 'poster': poster, 'year': "(" + year + ")"});
//      m.save();
      this.collection.create(m);
//      this.collection.sync('create', m);
//      this.render();
    } else {
      this.$el.append('<small>Title and year should be filled</small>');
    }

  }

});

var addFilmsView = new AddFilmView({
  collection: films
});