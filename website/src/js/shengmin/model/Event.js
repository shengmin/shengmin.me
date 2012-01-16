(function() {
	var model = Ext.ns('shengmin.model');

	model.Event = function(config) {
		Ext.apply(this, config);
		this.highlights = this.highlights || [];
	};

	model.Event.prototype = {
		/**
		 * @property {String}
		 */
		title : '',

		/**
		 * @property {String} [pictureUrl=img/content/no_pic.gif]
		 */
		pictureUrl : 'img/content/no_pic.gif',

		/**
		 * @property {String[]}
		 */
		highlights : null,

		/**
		 * @property {String} [location]
		 */
		location : ''
	}

})();
