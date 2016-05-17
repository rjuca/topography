define(["backbone", "underscore", "topographyModel"],
	function(Backbone, _, TopographyModel) {
		var topographyCollection = Backbone.Collection.extend({
			model: TopographyModel,
			url: "http://www.mocky.io/v2/573b3a350f0000f71cdcccd7",
			parse: function(response) {
				return _.isEmpty(response.data) ? {} : response.data;
			}
		});
		return topographyCollection;
	}
);