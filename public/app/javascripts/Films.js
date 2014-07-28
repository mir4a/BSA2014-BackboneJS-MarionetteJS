'use strict';

FilmsApp.module('Films', function (Films, App, Backbone) {

  /**
   * Film model
   */
  Films.Film = Backbone.Model.extend({

    /**
     * Handle for add new film or update current film with id
     * @returns {string}
     */
    url: function () {
      return this.id ? '/api/films/' + this.id : '/api/films';
    },

    /**
     * Default values for model
     */
    defaults: {
      year: 2014,
      name: '',
      id  : undefined
    }
  });

  /**
   * Films collection
   */
  Films.FilmList = Backbone.Collection.extend({
    url  : '/api/films',
    model: Films.Film,
//    localStorage: new Backbone.localStorage('films-backbone-marionette'),

    initialize: function () {
      console.log('this.fetch();');
      this.fetch();
    }

  });

});
