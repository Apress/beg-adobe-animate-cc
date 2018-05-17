(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.an_Label = function(options) {
	this._element = new $.an.Label(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_Image = function(options) {
	this._element = new $.an.Image(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_CSS = function(options) {
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.an_Button = function(options) {
	this._element = new $.an.Button(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



// stage content:
(lib.slideshow_complete = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var photoArray = [];
		var currentImage = 0;
		
		$.ajax({
			type: 'GET',
			url: 'slideshow.xml',
			dataType: 'xml',
			success: function (xml) {
				$(xml).find("slide").each(function () {
					$slide = $(this);
					var photo = new Object();
					photo.data = $slide.attr("data");
					photo.caption = $slide.attr("caption");
					photoArray.push(photo);
					
					var select = $("#photoSelect")[0];
					select.add(new Option(photo.caption));
				});
				changePicture(0);
			}
		});
		
		
		function changePicture(slide) {
			$("#photoHolder")[0].src = 'photos/'+photoArray[slide].data;
			$("#captionLabel").text(photoArray[slide].caption);
		}
		
		if(!this.nextBtn_click_cbk) {
			function nextBtn_click(evt) {
				currentImage++;
				if (currentImage == photoArray.length) {
					currentImage = 0;
				}
				$("#photoSelect")[0].selectedIndex = currentImage;
				changePicture(currentImage);
			}
			$("#dom_overlay_container").on("click", "#nextBtn", nextBtn_click.bind(this));
			this.nextBtn_click_cbk = true;
		}
		
		if(!this.photoSelect_change_cbk) {
			function photoSelect_change(evt) {
				currentImage = evt.target.selectedIndex;
				changePicture(currentImage);
			}
			$("#dom_overlay_container").on("change", "#photoSelect", photoSelect_change.bind(this));
			this.photoSelect_change_cbk = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// UI
	this.captionLabel = new lib.an_Label({'id': 'captionLabel', 'label':'...', 'disabled':false, 'visible':true, 'class':'ui-label'});

	this.captionLabel.setTransform(160.3,431,3,1,0,0,0,50.1,11);

	this.instance = new lib.an_CSS({'id': '', 'href':'assets/slideshow.css'});

	this.instance.setTransform(524,358,1,1,0,0,0,50,11);

	this.photoSelect = new lib.an_ComboBox({'id': 'photoSelect', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 0', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.photoSelect.setTransform(105.2,463,1.9,1,0,0,0,50.1,11);

	this.nextBtn = new lib.an_Button({'id': 'nextBtn', 'label':'Next', 'disabled':false, 'visible':true, 'class':'ui-button'});

	this.nextBtn.setTransform(260,463,1,1,0,0,0,50,11);

	this.photoHolder = new lib.an_Image({'id': 'photoHolder', 'src':'images/', 'alt':'image', 'border':'0', 'visible':true, 'class':'ui-image'});

	this.photoHolder.setTransform(160,209.6,3,4,0,0,0,50,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.photoHolder},{t:this.nextBtn},{t:this.photoSelect},{t:this.instance},{t:this.captionLabel}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168.5,250.5,566,466.5);
// library properties:
lib.properties = {
	width: 320,
	height: 485,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1480038503452", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1480038503453", id:"sdk/anwidget.js"},
		{src:"components/ui/src/label.js?1480038503453", id:"an.Label"},
		{src:"components/ui/src/image.js?1480038503453", id:"an.Image"},
		{src:"components/ui/src/css.js?1480038503453", id:"an.CSS"},
		{src:"components/ui/src/combobox.js?1480038503453", id:"an.ComboBox"},
		{src:"components/ui/src/button.js?1480038503453", id:"an.Button"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;