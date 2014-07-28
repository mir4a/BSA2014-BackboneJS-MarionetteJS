'use strict';

FilmsApp.module('View', function(View, App, Backbone, Films) {
  View.Film = Backbone.Marionette.ItemView.extend({
    template: '#film-template',
    model: Films.Film,

    ui: {
      film_name: '[data-change]'
    },

    events: {
      'dblclick @ui.film_name': 'changeName'
    },
    initialize: function() {
      console.log('View.Film init');
    },

    changeName: function (e) {
      console.log(e);
      console.log(this);
      var $el = $(e.target);
      $el.attr('contenteditable', true);
      $el.focus();
    }

  });

  View.Forms = Backbone.Marionette.ItemView.extend({
    template: '#add-new-film',

    ui: {
      title: '#film-title',
      poster: '#film-poster',
      year: '#film-year',
      submit: '#add-new'
    },

    events: {
      'click @ui.submit': 'addNewFilm'
    },

    initialize: function() {
      console.log('View.Forms init');
    },

    addNewFilm: function () {
      var title = this.ui.title.val(),
          year = this.ui.year.val(),
          poster = this.ui.poster.val(),
          collection = this.collection;

      console.log('addNewFilm()');
      console.info(title);
      console.info(year);
      console.info(poster);
      console.info(collection);
      console.info(new View.Films());

      if (title.length > 0 && year.length > 0) {
        var m = new FilmsApp.Film();
        m.save({'name': title, 'poster': poster, 'year': "(" + year + ")"}).done(function(model, response) {
          collection.fetch();
        });
      } else {
        this.$el.append('<small>Title and year should be filled</small>');
      }

    }

  });

  View.Films = Backbone.Collection.extend({
    model: Films.Film,
    url: '/api/films',
    initialize: function() {
      console.log('View.Films init');
//      console.log(new Films.Film);
    }
  });

  View.FilmsView = Backbone.Marionette.CollectionView.extend({
    collection: Films.FilmList,
    childView: View.Film,
    initialize: function() {
      console.log('View.FilmsView init');
      console.log(this);
    }

  });

  var a = new View.FilmsView;
  a.render();

  FilmsApp.films.show(a);
  FilmsApp.forms.show(new View.Forms);
});


//var FilmView = Backbone.View.extend({
//	className: 'film-container',
//	template: _.template($('#film-template').html()),
//  events: {
//    'click [data-change]':'changeName',
//    'blur [data-change]': 'finishChangeName',
//    'click [data-remove]': 'deleteFilm'
//  },
//
//	initialize: function(){
//		this.render();
//	},
//
//	render: function(){
//    var id = this.model.get('id'),
//        name = this.model.get('name'),
//        poster = this.model.get('poster'),
//        year = this.model.get('year');
//		this.$el.html(this.template({'name': name, id: id, 'poster': poster, 'year': year}) + '<button data-remove="'+id+'">delete</button>');
//		return this;
//	},
//
//  changeName: function (e) {
//    console.log(e);
//    console.log(this);
//    var $el = $(e.target);
//    $el.attr('contenteditable', true);
//    $el.focus();
//  },
//
//  finishChangeName: function (e) {
//    var $el = $(e.target),
//        name = $el.text(),
//        id = $el.data('change'),
//        model = this.model;
//    model.save({name: name});
//  },
//
//  deleteFilm: function () {
//    console.log(this);
//    this.$el.remove();
//    this.model.destroy({success: function(model, response) {
//      console.info('removed well');
//      console.info(response);
//    }, error: function(model, response) {
//      console.log('something went wrong');
//      console.log(response.status);
//    }});
//  }
//
//});