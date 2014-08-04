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
    FilmsApp.mainRegion.show(new FilmCollectionView());
  }

});
