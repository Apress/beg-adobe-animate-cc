(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 400,
	height: 400,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



// stage content:
(lib.AddSnippet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var numItems = 60;
		
		for (var i = 0; i < numItems; ++i) {
			var circle_radius = Math.floor(Math.random() * 80);
			var xLoc = Math.floor(Math.random() * 400);
			var yLoc = Math.floor(Math.random() * 400);
			var shape = new createjs.Shape(new createjs.Graphics().beginFill("#ff0000").drawCircle(xLoc, yLoc, circle_radius));
			shape.alpha = Math.random() * 1;
			this.addChild(shape);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;