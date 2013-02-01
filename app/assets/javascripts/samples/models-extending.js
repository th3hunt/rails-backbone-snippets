
// Extending Backbone.Model
var MyModelClass = Backbone.Model.extend({ 
	// "instance" methods 
}, { 
	// "class" methods 
});	

var Character = Backbone.Model.extend({ 
	
	urlRoot: "characters",

	initialize: function (attributes, options) {
		this.extraOptionX = options.optionX;
	},

	getFullname: function () {
		return this.get("name") + " " + this.get("surname");
	},

	isAdult: function () {
		return this.get("age") &&  this.get("age") > 18;
	}

}, { 
	extractFromText: function (text) {
		var persons = text && text.split("\n");		
		return _.map(persons, function () { ... });
	}
});	

var john = new Person({
	name: "John",
	surname: "Snow",
	age: "16",
	skill: 'skinChanger'
});
