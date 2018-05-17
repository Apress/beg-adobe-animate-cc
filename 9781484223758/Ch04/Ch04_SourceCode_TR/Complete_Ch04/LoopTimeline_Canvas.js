(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



// stage content:
(lib.LoopTimeline_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loop = 0;
	}
	this.frame_29 = function() {
		this.loop++;
		
		if (this.loop < 3) {
			this.gotoAndPlay(1);
		} else {
			this.stop();
		}
		
		console.log(this.loop);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29).call(this.frame_29).wait(1));

	// shape
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("Aj5D6IAAnzIHzAAIAAHzg");
	this.shape.setTransform(43,43);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AicCdIAAk5IE5AAIAAE5g");
	this.shape_1.setTransform(43,43,1.587,1.587);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AkKELIAAoVIIVAAIAAIVg");
	this.shape_2.setTransform(44.8,44.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AkcEdIAAo5II5AAIAAI5g");
	this.shape_3.setTransform(46.6,46.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AkuEvIAApdIJdAAIAAJdg");
	this.shape_4.setTransform(48.4,48.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AlAFBIAAqBIKBAAIAAKBg");
	this.shape_5.setTransform(50.2,50.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AlSFTIAAqlIKlAAIAAKlg");
	this.shape_6.setTransform(51.9,51.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AlkFlIAArJILJAAIAALJg");
	this.shape_7.setTransform(53.7,53.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("Al2F2IAArsILsAAIAALsg");
	this.shape_8.setTransform(55.5,55.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AmHGIIAAsPIMPAAIAAMPg");
	this.shape_9.setTransform(57.3,57.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AmZGaIAAszIMzAAIAAMzg");
	this.shape_10.setTransform(59.1,59.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AmrGsIAAtXINXAAIAANXg");
	this.shape_11.setTransform(60.9,60.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("Am9G+IAAt7IN7AAIAAN7g");
	this.shape_12.setTransform(62.7,62.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AnPHQIAAufIOfAAIAAOfg");
	this.shape_13.setTransform(64.4,64.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AnhHiIAAvDIPDAAIAAPDg");
	this.shape_14.setTransform(66.2,66.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AnzHzIAAvmIPmAAIAAPmg");
	this.shape_15.setTransform(68,68);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AoEIFIAAwJIQJAAIAAQJg");
	this.shape_16.setTransform(69.8,69.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AoWIXIAAwtIQtAAIAAQtg");
	this.shape_17.setTransform(71.6,71.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AooIpIAAxRIRRAAIAARRg");
	this.shape_18.setTransform(73.4,73.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("Ao6I7IAAx1IR1AAIAAR1g");
	this.shape_19.setTransform(75.2,75.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("ApMJNIAAyZISZAAIAASZg");
	this.shape_20.setTransform(76.9,76.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("ApeJfIAAy9IS9AAIAAS9g");
	this.shape_21.setTransform(78.7,78.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("ApwJxIAAzhIThAAIAAThg");
	this.shape_22.setTransform(80.5,80.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AqBKCIAA0DIUDAAIAAUDg");
	this.shape_23.setTransform(82.3,82.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AqTKUIAA0nIUnAAIAAUng");
	this.shape_24.setTransform(84.1,84.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AqlKmIAA1LIVLAAIAAVLg");
	this.shape_25.setTransform(85.9,85.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("Aq3K4IAA1vIVvAAIAAVvg");
	this.shape_26.setTransform(87.7,87.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("ArJLKIAA2TIWTAAIAAWTg");
	this.shape_27.setTransform(89.4,89.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("ArbLcIAA23IW3AAIAAW3g");
	this.shape_28.setTransform(91.2,91.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("ArtLuIAA3bIXbAAIAAXbg");
	this.shape_29.setTransform(93,93);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(293,218,50,50);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;