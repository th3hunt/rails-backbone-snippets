var Book = Backbone.Model.extend({ 
		
		urlRoot: "books",

		isBig: function () {
			return this.get("pages") > 500;
		},

		validate: function(attrs, options) {
		    if (!attrs.title) {
		      return "title can't be empty";
		    }
		    if (!attrs.author) {
		      return "author can't be empty";
		    }
		}
	}),

	FantasyBook = Book.extend({
		
		memberOfSeries: function () {
			return !_.isEmpty(this.get("series"));
		},		

		memberOfTrilogy: function () {
			return this.memberOfSeries() && this.get("seriesLength") === 3;
		}
	}),

	ttt = new FantasyBook({
		author: "J.R.R. Tolkien",
		title: "The Two Towers"
		pages: 327,
		series: "The Lord Of The Rings",
		seriesLength: "3"
	});

ttt.save({
	success: function (model, response, options) {
		feedback.info("Saved Successfully");
	},
	error: function (model, xhr, options) {
		feedback.showErrors(xhr.responseText);
	}
});