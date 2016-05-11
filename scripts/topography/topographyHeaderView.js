define(["marionette"],
	function(Mnt) {
		var TopographyHeaderView = Mnt.ItemView.extend({
			template: false,
			onRender: function() {
				this.$el.append("Topography");
			}
		});
		return TopographyHeaderView;
	}
);