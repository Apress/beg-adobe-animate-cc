(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: []
};



lib.ssMetadata = [];


// symbols:



(lib.square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(5,1,1).p("Al2F3IAArtILtAAIAALtg");
	this.shape.setTransform(37.5,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0099FF").s().p("Al2F2IAArsILsAAIAALsg");
	this.shape_1.setTransform(37.5,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000066").ss(5,1,1).p("AEsEsQh9B9ivAAQivAAh8h9Qh9h9AAivQAAivB9h8QB8h9CvAAQCvAAB9B9QB9B8AACvQAACvh9B9g");
	this.shape_2.setTransform(37.5,37.5,0.882,0.882);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099FF").s().p("AkrEsQh8h8AAiwQAAivB8h8QB9h8CuAAQCvAAB9B8QB8B8ABCvQgBCwh8B8Qh9B8ivAAQiuAAh9h8g");
	this.shape_3.setTransform(37.5,37.5,0.882,0.882);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,80,80);


// stage content:
(lib.Events = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		stage.enableMouseOver(20);
		this.box.addEventListener("click", clickHandler);
		this.box.addEventListener("mouseover", mouseOverHandler).bind(this);
		this.box.addEventListener("mouseout", mouseOutHandler);
		this.box.cursor = "pointer";
		
		function clickHandler(e) {
			console.log("You just clicked me!");
		}
		function mouseOverHandler(e) {
			e.currentTarget.gotoAndStop(1);
		}
		function mouseOutHandler(e) {
			e.currentTarget.gotoAndStop(0);
		}
		
		
		
		
		
		this.box.stop();
	}
	this.frame_49 = function() {
		/* this.gotoAndPlay(25);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(1));

	// content
	this.box = new lib.square();
	this.box.setTransform(63.8,56.4,1.02,1.02,0,0,0,37.6,37.6);

	this.timeline.addTween(cjs.Tween.get(this.box).to({regX:37.5,regY:37.5,scaleX:2,scaleY:2,x:457,y:93},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(297.9,215.5,81.7,81.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;