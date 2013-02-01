var TodoItem = Backbone.Model.extend({}),

TodoView = Backbone.View.extend({
	tagName: 'article',
	id: 'todo-view',
	className: 'todo',

	render: function () {
		var html = '<h3>' + this.model.get('description') + '</h3>';
		$(this.el).html(html);
	}
}),

todoItem = new TodoItem({ 
	description: "Prepare BackboneJS slides #!@#!"
}),

todoView = new TodoView({ model: todoItem });

console.log(todoView.el);