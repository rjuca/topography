define(["marionette", "handlebars"],
	function(Mnt, Hbs) {
		var TopographyLayoutView = Mnt.LayoutView.extend({
			template: Hbs.compile($("#global").html()),
			el: "body",
			regions: {
				header: "#header",
				content: "#content"
			}
		});
		return TopographyLayoutView;
	}
);