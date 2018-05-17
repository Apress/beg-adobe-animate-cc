(function($) {    

    $.anwidget("an.Image", {
        options: {
			'visible': true,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "src", "alt", "class", "border"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "image" + _widgetID++ });
		},
		getCreateString: function() {
			return "<img>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		}    
	});   
})(jQuery);