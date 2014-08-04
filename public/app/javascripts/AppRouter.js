FilmsRouter = Backbone.Marionette.AppRouter.extend({
  appRoutes: {
    "/api/films": "getFilms",
    "/api/films/:id": "getCurrentFilm"
  }
});