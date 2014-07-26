FIlmsRouter = Backbone.Marionette.AppRouter.extend({
  controller: Film,
  appRoutes: {
    "/api/films": "getFilms",
    "/api/films/:id": "getCurrentFilm"
  }
});