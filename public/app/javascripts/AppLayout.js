var AppLayout = Backbone.Marionette.LayoutView.extend({
	template: '#app-template',

  regions: {
    mainRegion: '#films-container'
  }
});

appContainer = new Backbone.Marionette.Region({
  el: '#app'
});
var layoutView = new AppLayout();
appContainer.show(layoutView);
layoutView.mainRegion.show(filmsView);