define(["jquery"], function($){
	// console.log('myModule');

	var module = (function($, window, document){
		var PLUGIN_IDENTIFIER = "module";
		var module = function( element, options ) {
			this.element = $(element);
			this.$els = options;
			
			// This next line takes advantage of HTML5 data attributes
			// to support customization of the plugin on a per-element
			// basis. For example,
			// <div class='myModule' data-module-options='{"message":"Goodbye World!"}'></div>
			this.metadata = $(this.element).data('module-options');

		};

		module.prototype = {
			defaults: {
				el: '#content',
				item: '.my-module-trigger'
			},

			trigger: {
				trigger: '<button class="button my-module-trigger">Click me, I do JavaScript</button>'
			},

			colors: {
				bgColor: '#d6d6d6',
				target: '#content .wrapper'
			},

			init: function() {
				console.log('Initializing module component.');

				// Merge the various way of providing options
				this.$els = $.extend( {},
					this.defaults,
					this.trigger,
					this.colors,
					this.options,
					this.metadata
				);

				var self = this;

				this._setup();
				this._addColor();

			},

			_setup: function() {
				var self = this;
				$(this.$els.target).append(this.$els.trigger);
				$(this.$els.item).on('click', function() {
					self._toggle();
				});
			},

			_toggle: function() {
				this.on ? this._reset() : this._addColor();
			},

			_addColor: function() {
				$(this.$els.el).css('background-color', this.$els.bgColor);
				this.on = true;
			},

			_reset: function() {
				$(this.$els.el).css('background-color', '');
				this.on = false;
			}

		};

		// prevent duplicate instantiation
		$.fn.module = function(options) {
			return this.each(function() {
				var instance = $(this).data(PLUGIN_IDENTIFIER);
				if(!instance) {
					instance = new module(this, options).init();
					$(this).data(PLUGIN_IDENTIFIER,instance);
				}
			});
		};

	})(jQuery, window, document);

});