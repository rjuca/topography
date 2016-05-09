define(["marionette", "underscore", "topographyLayoutView", "topographyRootView", "topographyCollection"],
	function(Mnt, _, TopographyLayoutView, TopographyRootView, TopographyCollection) {
		var TopographyMainView = Mnt.CollectionView.extend({
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