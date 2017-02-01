/**
 * jQuery Utility Helper
 * @type {object}
 */
var jQueryHelper = (function(){

	// return module of jQueryHelper
	return {

		/**
		 * Encode Html
		 * @param  {string} str - Html
		 * @return {string}    Encoded Html
		 */
		encodeHtml: function(str){
			return $("<div/>").text(str).html();
		},

		/**
		 * Decode Html
		 * @param  {string} str - Encoded Html
		 * @return {string}     Decoded Html
		 */
		decodeHtml: function(str){
			return $("<div/>").html(str).text();
		}
	};
})();
