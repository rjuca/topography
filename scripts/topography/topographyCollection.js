define(["backbone", "underscore", "topographyModel"],
	function(Backbone, _, TopographyModel) {
		var topographyCollection = Backbone.Collection.extend({
			model: TopographyModel,
			url: "http://www.mocky.io/v2/5729100d0f00007323e293fd",
			// url: "http://mdc2brc0405:9280/CAT-UI/category/category/topography.html?categoryId=78054&context=DESKTOP&levels=2&showFuture=false&showExpired=false&showSuppressed=false&_=1462373017820",
			// url: "http://localhost:8980/category-service/v1/categories/1/treeview.json?tenant=MCOM&contextType=DESKTOP&levels=1&showFuture=false&showExpired=false&showSuppressed=false",
			parse: function(response) {
				return _.isEmpty(response.data) ? {} : response.data;
			}
		});
		return topographyCollection;
	}
);