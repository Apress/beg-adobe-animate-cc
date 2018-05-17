(function($) {    

    $.anwidget("an.Video", {
        options: {
            left: 0,
            top: 0,
            width: 400,
            height: 300,
            source: "",
            autoplay: true,
			position: "absolute"
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "src", "controls", "autoplay", "loop", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "video" + _widgetID++ });
		},
		getCreateString: function() {
			return "<div><video/></div>";
		},
		getProperties: function() {
			return this._props;
		},
		attach: function() {
			if(this._attached)
				return;
			
			this._superApply(arguments);
			this._$div = $(this._element);
			this._$this = this._$div.find('video');			
			
			this.update(true);			
		},
		getAttributes: function() {
			return this._attrs;
		},
		show: function() {
			if(this._$div) this._$div.show();
		},
		hide: function() {
			if(this._$div) this._$div.hide();
		},
		update: function(force) {
			if(!this._$div)
				return;

			var updateSize = force || this._dirty["width"] || this._dirty["height"];
			this.applyProperties(this._$div, force);
			this.applyAttributes(this._$this, force);	

			if(updateSize) {
				// Copy the width and height from parent
				this._$this.css("width", this._$div.css("width"));
				this._$this.css("height", this._$div.css("height"));								
			}			
		}
    });   
})(jQuery);