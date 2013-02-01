var Chapter = Backbone.Model.extend({		
		// no urlRoot ???		
		isPrologue: function () {...},		

		isEpilogue: function () {...},

		getTitle : function () {
			return this.get("title");
		}
	}),
	
	ChapterCollection = Backbone.Collection.extend({

		url: "chapters",

		model: Chapter

		initialize: function(models, options) {
			this.comparator = options.comparator || 
				function(chapter) { return chapter.get("page"); };
		}
	}),

	chapters = new ChapterCollection();

chapters.on("change:title", function (model, title) {
	console.log("OMG! The title on page " + 
		model.get("page") + " changed to '" + title + "'");
});

chapters.add(new Chapter({
	page: 9,
	title: "The End"
}));

chapters.add(new Chapter({
	page: 1,
	title: "The Beginning"
}));

var chapter1 = chapters.first();
console.log(chapter1.getTitle()); 
// The Beginning
chapter1.set({title: "The Very Beginning"});
// OMG! The title on page 1 changed to 'The Very Beginning'