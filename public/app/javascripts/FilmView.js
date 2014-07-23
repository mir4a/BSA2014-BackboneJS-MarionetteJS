var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),
  events: {
    'click [data-change]':'changeName',
    'blur [data-change]': 'finishChangeName'
  },

	initialize: function(){
		this.render();
	},

	render: function(){
    console.log(this);
    var _id = this.model.get('_id') || this.model.get('id'),
        name = this.model.get('name'),
        poster = this.model.get('poster'),
        year = this.model.get('year');
		this.$el.html(this.template({'name': name, id: _id, 'poster': poster, 'year': year}) + '<button id="film_' + _id + '" data-remove="'+ _id +'">delete</button>');
		return this;
	},

  changeName: function (e) {
    console.log(e);
    console.log(this);
    var $el = $(e.target);
    $el.attr('contenteditable', true);
    $el.focus();
  },

  finishChangeName: function (e) {
    var $el = $(e.target),
        name = $el.text(),
        id = $el.data('change'),
        model = this.model;
    model.save({name: name});
    this.render();
//    this.model.collection.set({this.model}, {remove: false});
    console.log(this);
    console.log(model);
//    console.log(this.syncArgs.method);
  }

});