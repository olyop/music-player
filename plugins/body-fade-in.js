var bodyFadeIn = {
	init: function () {
		this.cacheDom();
		this.render();
	},
	cacheDom: function () { this.$body = $('body'); },
	render: function () { this.$body.fadeIn(1000); }
};