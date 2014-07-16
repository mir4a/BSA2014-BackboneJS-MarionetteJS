var FilmCollectionView = Backbone.View.extend({
	el: '#films-container',

  events: {
    'click #add-new': 'addNewFilm'
  },

	initialize: function(){
    this.createButtonAdd();
		this.collection.on('add', this.renderNewFilm, this);
	},

	renderNewFilm: function(model){
		var view = new FilmView({
			model: model
		});
		this.$el.append(view.$el);
	},

  createButtonAdd: function() {
    this.$el.append('<button id="add-new">Add new</button>');
  },

  addNewFilm: function(){
    console.log('added new film');
  },

  addNewFilmForm: function() {
    console.log('there should be a new form view');
  }

});

var filmsView = new FilmCollectionView({
	collection: films
});