var FilmDetailsView = Backbone.Marionette.ItemView.extend({
	className: 'film-details-container',
	template: '#film-details-template',
  ui: {
    go_back: '#go-back'
  },
  events: {
    'click @ui.go_back':'goBack'
  },

  goBack: function(){
    layoutView.mainRegion.show(new FilmCompositeView({
      model: filmModel,
      collection: films
    }));
  }

});
