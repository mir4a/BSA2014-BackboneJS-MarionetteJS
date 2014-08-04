var Film = Backbone.Model.extend({
  url : function() {
    return this.id ? '/api/films/' + this.id : '/api/films';
  },
	defaults:{
		year: 2014,
		name: '',
		id: undefined,
    poster: undefined,
    details0: undefined,
    details1: undefined,
    details2: undefined,
    details3: undefined,
    details4: undefined,
    details5: undefined,
    details6: undefined,
    details7: undefined,
    details8: undefined
	}
});

var filmModel = new Film();