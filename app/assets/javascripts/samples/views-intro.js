var ItemView = new Backbone.View.extend({ 
		tagName: "li"
	}),
	
	itemView = new ItemView();

console.log(itemView.el);
// <li></li>