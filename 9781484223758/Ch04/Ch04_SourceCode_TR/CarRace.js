(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"CarRace_atlas_", frames: [[0,0,210,128],[0,130,197,113]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["CarRace_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["CarRace_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.redcar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.752,0.753);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,196.2,113);


(lib.bluecar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-104.6,-63.9,0.75,0.748);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-63.9,209.2,127.9);


(lib.car2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.parent.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Car
	this.instance = new lib.redcar();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,0,1,1,0,0,0,98.1,56.5);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-98.6,-56.5,0.752,0.753);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-168.6},0).wait(1).to({x:-305.7},0).wait(1).to({x:-417.1},0).wait(1).to({x:-507.9},0).wait(1).to({x:-582.4},0).wait(1).to({x:-644.1},0).wait(1).to({x:-696.1},0).wait(1).to({x:-740.8},0).wait(1).to({x:-780.4},0).wait(1).to({x:-816.5},0).wait(1).to({x:-850.3},0).wait(1).to({x:-882.5},0).wait(1).to({x:-914.1},0).wait(1).to({x:-945.2},0).wait(1).to({x:-976.2},0).wait(1).to({x:-1007.2},0).wait(1).to({x:-1038.2},0).wait(1).to({x:-1069.2},0).wait(1).to({x:-1100.2},0).wait(1).to({x:-1131.4},0).wait(1).to({x:-1162.9},0).wait(1).to({x:-1195.2},0).wait(1).to({x:-1228.9},0).wait(1).to({x:-1265},0).wait(1).to({x:-1304.6},0).wait(1).to({x:-1349.3},0).wait(1).to({x:-1401.3},0).wait(1).to({x:-1463},0).wait(1).to({x:-1537.5},0).wait(1).to({x:-1628.3},0).wait(1).to({x:-1739.8},0).wait(1).to({x:-1876.8},0).wait(1).to({x:-2045},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.6,-56.5,196.2,113);


(lib.car1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		this.parent.gotoAndStop(9);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// truck
	this.instance = new lib.bluecar("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-286.6,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:-250.3},0).wait(1).to({x:-217.2},0).wait(1).to({x:-187},0).wait(1).to({x:-159.5},0).wait(1).to({x:-134.6},0).wait(1).to({x:-112.1},0).wait(1).to({x:-91.8},0).wait(1).to({x:-73.4},0).wait(1).to({x:-56.8},0).wait(1).to({x:-41.8},0).wait(1).to({x:-28.1},0).wait(1).to({x:-15.6},0).wait(1).to({x:-4.1},0).wait(1).to({x:6.6},0).wait(1).to({x:16.7},0).wait(1).to({x:26.4},0).wait(1).to({x:35.9},0).wait(1).to({x:45.4},0).wait(1).to({x:55.1},0).wait(1).to({x:65.2},0).wait(1).to({x:75.9},0).wait(1).to({x:87.4},0).wait(1).to({x:99.9},0).wait(1).to({x:113.5},0).wait(1).to({x:128.6},0).wait(1).to({x:145.2},0).wait(1).to({x:163.6},0).wait(1).to({x:183.9},0).wait(1).to({x:206.4},0).wait(1).to({x:231.3},0).wait(1).to({x:258.7},0).wait(1).to({x:288.9},0).wait(1).to({x:322.1},0).wait(1).to({x:358.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-391.2,-67.6,209.2,127.9);


// stage content:
(lib.CarRace = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer 1
	this.instance = new lib.car1();
	this.instance.parent = this;
	this.instance.setTransform(215.5,247);

	this.instance_1 = new lib.car2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(647,204.3,1,1,0,0,0,-0.5,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.3,379.4,209.2,127.9);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CarRace_atlas_.png?1480705092078", id:"CarRace_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;