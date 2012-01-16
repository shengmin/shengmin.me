(function() {
	var model = Ext.ns('shengmin.model');

	model.Event = function(config) {
		config.highlights = config.highlights || [];
		
		Ext.apply(this, config);
		
	};

	Event.prototype = {
		/**
		 * @property {String}
		 */
		title : '',

		/**
		 * @property {String} [pictureUrl]
		 */
		pictureUrl : 'img/content/no_pic.gif',

		/**
		 * @property {String[]}
		 */
		highlights : null,

		/**
		 * @property {Integer}
		 */
		year : -1,

		/**
		 * @property {Integer} [month]
		 */
		month : -1,

		/**
		 * @property {String} [location]
		 */
		location : ''
	}

})();
