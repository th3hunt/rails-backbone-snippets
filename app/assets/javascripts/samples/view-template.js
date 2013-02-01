var TodoView = Backbone.View.extend({
	template: _.template('<h3><%= description %></h3>'),
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	}
});

var TodoView = Backbone.View.extend({
	template: JST["todos/item"], // using JST with Hamlc, Eco 
	render: function() {
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
	}
});