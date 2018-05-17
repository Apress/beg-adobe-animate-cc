(function($) {    

    $.anwidget("an.ComboBox", {
        options: {
			'visible': true,
			'disabled': false,
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "list" + _widgetID++ });
		},
		getCreateString: function() {
			return "<select>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		},	
		update: function(force) {
			this._superApply(arguments);
			if(force || this._dirty['items']) {
				this._$this.empty();

				var items = this._options['items'];
				if(items) {
					items = items.split(", ");
					if(items.length < 13)
						return;
					
					items = items.splice(13);
				}

				if(this._options["label"] != "") {
					this._$this.append($('<option value>').text(this._options["label"]));										
				}
				for(var i=0; i<items.length; i+=2) {
					this._$this.append($("<option value='" + items[i+1] + "'>").text(items[i]));					
				}
				if(force || _this._dirty["value"]) {
					this._$this.val(this._options["value"]);
				}				
			}
		}
    });   
})(jQuery);