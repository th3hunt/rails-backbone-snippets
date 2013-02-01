
// new Model([attributes], [options]) 

// Create a basic empty model
var nobody = new Backbone.Model();

// Create a basic model initialized with some data
var	jamie = new Backbone.Model({ 
	name: "Jamie", 
	surname: "Lannister" 
});

// Create a basic model initialized with some data
var lannisters = new Backbone.Collection(),
	jamie = new Backbone.Model(
	// attributes
	{ 
		name: "Jamie", 
		surname: "Lannister" 
	}, 
	// options
	{
		collection: lannisters
	});


