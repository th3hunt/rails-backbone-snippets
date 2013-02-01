// Using UnderscoreJS chain api

var collection = new Backbone.Collection([
		{name: ’Tim’, age: 5 },
		{name: ’Ida’, age: 26 },
		{name: ’Rob’, age: 55 }
	]);


var filteredNames = collection.chain()
	.filter(function(item) { return item.get(’age’) > 10; })
	.map(function(item) { return item.get(’name’); })
	.value();
