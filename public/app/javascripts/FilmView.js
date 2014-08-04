var FilmView = Backbone.Marionette.ItemView.extend({
	className: 'film-container',
	template: '#film-template',
  ui: {
    name: '[data-change]',
    del_btn: '[data-remove]',
    details_btn: '[data-details]'
  },
  events: {
    'click @ui.name':'changeName',
    'blur @ui.name': 'finishChangeName',
    'click @ui.del_btn': 'deleteFilm',
    'click @ui.details_btn': 'showDetails'
  },

	initialize: function(){
		this.render();
	},

  onRender: function() {
    this.$el.append('<button data-remove="'+this.model.get('id')+'">delete</button> <button data-details="'+this.model.get('id')+'">details</button>');
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
  },

  deleteFilm: function () {
    console.log(this);
    if (confirm('Are you sure you want to delete "' + this.ui.name.text() + '" film?')) {
      this.$el.remove();
      this.model.destroy({success: function(model, response) {
        console.info('removed well');
        console.info(response);
      }, error: function(model, response) {
        console.log('something went wrong');
        console.log(response.status);
      }});
    } else {
      return false;
    }
  },

  showDetails: function () {
    console.log(this);
    FilmsApp.mainRegion.show(new FilmDetailsView({model: this.model}));
  }

});