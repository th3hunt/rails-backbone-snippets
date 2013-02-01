var TodoView = Backbone.View.extend({
	tagName: 'article',
	id: 'todo-view',
	className: 'todo',

	// declare DOM event listeners
	events: {
		"click a.save": "saveItem"
	}

	initialize: function (options) {
		// MEMORY LEAK!
		this.model.on("sync", this.onSaveSuccess, this);
		this.model.on("error", this.onSaveError, this);

		// OK
		this.listenTo(this.model, "sync", this.onSaveSuccess);
		this.listenTo(this.model, "error", this.onSaveError);
	},

	onSaveSuccess: function () {...}

	onSaveError: function () {...}

	saveItem: function () {
		// this = view
		this.model.save();
	},

	render: function () {
		var html = "";
		html += '<h3>' + this.model.get('description') + '</h3>';
		html += "<a class='save'>Save</a>";
		this.$el.html(html); // $el is el as jQuery or Zepto object
	}	
});

