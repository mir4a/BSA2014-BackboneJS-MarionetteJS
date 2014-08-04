var FilmsApp = new Backbone.Marionette.Application();

FilmsApp.addRegions({
  mainRegion: '#films-container',
  addFormRegion: '#forms-container'
});

//FilmsApp.mainRegion.show(filmsView);
//FilmsApp.addForm.show(filmsView);