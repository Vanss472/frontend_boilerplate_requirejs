define(["jquery", "domReady"], function($, domReady){
	$(function(){
		domReady(function(){
			// start here
			base.init();
		});
	});
});

var base = {

	init: function() {
		var self = this;

		// Initialize Modules
		var myModule = $('.myModule');
		if (myModule.length > 0) {
			require(['modules/myModule'], function(){
				myModule.module();
			});
		};
	}

};