// Model definition
var Model = Backbone.Model = function(attributes, options) {
    var defaults;
    var attrs = attributes || {};
    this.cid = _.uniqueId('c');
    this.attributes = {};
    if (options && options.collection) this.collection = options.collection;
    if (options && options.parse) attrs = this.parse(attrs, options) || {};
    if (defaults = _.result(this, 'defaults')) {
      attrs = _.defaults({}, attrs, defaults);
    }
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
};

_.extend(Model.prototype, Events, {
 	...
});


// Collection definition
_.extend(Collection.prototype, Events, {
	...
});


// View definition
_.extend(View.prototype, Events, {
  	...
});


// Router definition
_.extend(Router.prototype, Events, {
  	...
});