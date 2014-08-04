var AppLayout = Backbone.Marionette.LayoutView.extend({
	template: '#app-layout-template',

  regions: {
    mainRegion: '#app'
  }
});

appContainer = new Backbone.Marionette.Region({
  el: '#container'
});
var layoutView = new AppLayout();
appContainer.show(layoutView);
layoutView.mainRegion.show(filmsView);