(function() {
	var model = Ext.ns('shengmin.model');

	model.Event = function(config) {
		Ext.apply(this, config);
		this.highlights = this.highlights || [];
		this.pictureUrl = this.pictureUrl || 'img/content/no_pic.gif';
	};

	Event.prototype = {
		/**
		 * @property {String}
		 */
		title : '',

		/**
		 * @property {String} [pictureUrl=img/content/no_pic.gif]
		 */
		pictureUrl : '',

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
