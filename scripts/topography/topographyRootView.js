define(["marionette", "handlebars", "topographyTreeView"],
	function(Mnt, Hbs, TopographyTreeView) {
		Hbs.registerHelper("addTopographyStyle", function(context, options) {
	    	var lastLevelOption = $("#topography-level option:last").val(),
	    		bufferSpace = 350;
	    	if (!isNaN(lastLevelOption)) {
	    		bufferSpace = (parseInt(lastLevelOption) * 25) + 25;
	    	}
	    	var leftPadding = this.level * 25,
	    		rightPadding = bufferSpace - leftPadding;
			return "padding: 0 " + rightPadding + "px 0 " + leftPadding + "px";
		});
		var TopographyRootView = Mnt.CollectionView.extend({
			childView: TopographyTreeView,
			tagName: "ul"
		});
		return TopographyRootView;
	}
);