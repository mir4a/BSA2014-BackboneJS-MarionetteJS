'use strict';

window.FilmsApp = new Backbone.Marionette.Application();

FilmsApp.addRegions({
  films: '#films-container',
  forms: '#forms-container'
});

FilmsApp.on('initialize:after', function(){
  Backbone.history.start();
});

