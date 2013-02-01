var Lannister = Character.extend({
	hasMoney: function () { return true; }	
});

tyrion = new Lannister({
	name: "Tyrion",
	mood: "thirsty"
});

tyrion.on("change", function (model) {
	console.log("Something happened to Tyrion")
});

tyrion.on("change:mood", function (model, mood) {
	console.log("Tyrion's mood changed to " + mood);
});

tyrion.set({ height: "short" }); 
// Something happened to Tyrion

tyrion.set({ mood: "drunk" }); 
// Something happened to Tyrion
// Tyrion's mood changed to drunk

tyrion.set({ mood: "sober" }, {silent: true});

