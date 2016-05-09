define(["marionette", "handlebars", "underscore", "topographyCollection"],
	function(Mnt, Hbs, _, TopographyCollection) {
		var TopographyTreeView = Mnt.CompositeView.extend({
			template: Hbs.compile($("#item").html()),
			tagName: "li",
			childViewContainer: ".subcategories",
			initialize: function(options) {
				_.extend(this, options);
				if (_.isEmpty(this.collection)) {
					var children = this.model.get("children");
					this.collection = _.isEmpty(children) ? null : new TopographyCollection(children);
				}
			},
			onRender: function() {
				this.$(".subcategories:first").sortable({
					axis: "y"
				});
			}
		});
		return TopographyTreeView;
	}
);