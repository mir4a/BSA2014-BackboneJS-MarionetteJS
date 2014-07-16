var FilmCollection = Backbone.Collection.extend({
	url: '/api/films',
  events: {
    'add': 'updateCollection'
  },
	model: Film,
	initialize: function(){
		this.fetch();
	},

  updateCollection: function() {
    console.log('Updating collection…');
    console.log(this);
    this.sync('update', this);
    console.log(this);
  }

});

var films = new FilmCollection();