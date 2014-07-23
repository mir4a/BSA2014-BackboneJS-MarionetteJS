var AddFilmView = Backbone.View.extend({
  className: 'add-film-form',
  el       : '#forms-container',
  url: '/api/films',

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
        collection = this.collection.models,
        colectionId = _.compact(_.pluck(collection, 'id')),
        colection_id = _.compact(_.pluck(collection, '_id')),
        collectionMaxId = _.max(_.union(colection_id, colectionId));

    if (title.length > 0 && year.length > 0) {
      var m = new Film();
      var _collection = this.collection;
      m.save({'name': title, 'poster': poster, 'year': "(" + year + ")", '_id': collectionMaxId + 1}).done(function(model, response) {
        _collection.fetch(); // This works better than that below
      });
//        this.collection.add(m);
//      this.collection.create(m, {wait: true});
    } else {
      this.$el.append('<small>Title and year should be filled</small>');
    }

  }

});

var addFilmsView = new AddFilmView({
  collection: films
});