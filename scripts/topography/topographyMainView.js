define(["marionette", "underscore", "topographyLayoutView", "topographyHeaderView", "topographyRootView", "topographyCollection"],
	function(Mnt, _, TopographyLayoutView, TopographyHeaderView, TopographyRootView, TopographyCollection) {
		var TopographyMainView = Mnt.ItemView.extend({
			template: false,
			initialize: function(options) {
				_.extend(this, options);
				this.mainLayout = new TopographyLayoutView({
					el: this.el
				});
				this.mainLayout.render();
			},
			onRender: function() {
				var _this = this;
				var topographyCollection = new TopographyCollection();
				this.mainLayout.header.show(new TopographyHeaderView());
				topographyCollection.fetch({
					dataType: "jsonp",
					success: function(col, response) {
						var topographyRootView = new TopographyRootView({
							collection: col
						});
						_this.mainLayout.content.show(topographyRootView);
					}
				});
			}
		});
		return TopographyMainView;
	}
);