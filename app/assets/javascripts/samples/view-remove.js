
// Backbone.View#remove

remove: function() {
	this.$el.remove();
	this.stopListening();
	// this.off();
	return this;
},