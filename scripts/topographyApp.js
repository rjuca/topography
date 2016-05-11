define(["marionette", "topographyMainView"],
	function (Mnt, TopographyMainView) {
		var app = new Mnt.Application();
		app.addRegions({
			body: "body"
		});
		app.on("start", function() {
			var mainView = new TopographyMainView();
			this.body.show(mainView);
		});
		return app;
	}
);