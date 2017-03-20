(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 800,
	height: 450,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Timeline_atlas_.png", id:"Timeline_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"Timeline_atlas_", frames: [[0,0,800,448],[802,0,135,257]]}
];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Branch = function() {
	this.spriteSheet = ss["Timeline_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Leaf = function() {
	this.spriteSheet = ss["Timeline_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leaf();
	this.instance.setTransform(0,0,0.734,0.948);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,257);


(lib.LEAF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(67.5,128.5,1,1,0,0,0,67.5,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,135,257);


// stage content:
(lib.Timeline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Leaf
	this.instance = new lib.LEAF();
	this.instance.setTransform(149.5,-140.5,1,1,0,0,0,67.5,128.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1.3,x:149.4,y:-130.2},0).wait(1).to({rotation:-2.6,x:149.2,y:-120.1},0).wait(1).to({rotation:-3.9,x:149,y:-109.8},0).wait(1).to({rotation:-5.1,x:148.8,y:-99.6},0).wait(1).to({rotation:-6.4,x:148.6,y:-89.4},0).wait(1).to({rotation:-7.7,x:148.5,y:-79.2},0).wait(1).to({rotation:-9,x:148.3,y:-69},0).wait(1).to({rotation:-10.3,x:148.1,y:-58.7},0).wait(1).to({rotation:-11.6,x:148,y:-48.6},0).wait(1).to({rotation:-12.9,x:147.8,y:-38.3},0).wait(1).to({rotation:-14.1,x:147.6,y:-28.1},0).wait(1).to({rotation:-15.4,x:147.4,y:-17.9},0).wait(1).to({rotation:-16.7,x:147.3,y:-7.7},0).wait(1).to({rotation:-18,x:147.1,y:2.5},0).wait(1).to({rotation:-19.3,x:146.9,y:12.7},0).wait(1).to({rotation:-20.6,x:146.8,y:23},0).wait(1).to({rotation:-21.9,x:146.6,y:33.1},0).wait(1).to({rotation:-23.1,x:146.4,y:43.3},0).wait(1).to({rotation:-24.4,x:146.2,y:53.6},0).wait(1).to({rotation:-25.7,x:146.1,y:63.7},0).wait(1).to({rotation:-27,x:145.9,y:74},0).wait(1).to({rotation:-28.3,x:145.7,y:84.1},0).wait(1).to({rotation:-29.6,x:145.5,y:94.4},0).wait(1).to({rotation:-30.9,x:145.4,y:104.6},0).wait(1).to({rotation:-32.1,x:145.2,y:114.8},0).wait(1).to({rotation:-33.4,x:145.1,y:125},0).wait(1).to({rotation:-34.7,x:144.9,y:135.2},0).wait(1).to({rotation:-36,x:144.7,y:145.4},0).wait(1).to({rotation:-37.3,x:144.5,y:155.6},0).wait(1).to({rotation:-38.6,x:144.3,y:165.8},0).wait(1).to({rotation:-39.9,x:144.2,y:176.1},0).wait(1).to({rotation:-41.1,x:144,y:186.3},0).wait(1).to({rotation:-42.4,x:143.8,y:196.5},0).wait(1).to({rotation:-43.7,x:143.7,y:206.7},0).wait(1).to({rotation:-45,x:143.5,y:216.9},0).wait(1).to({rotation:-42.6,x:144.7,y:227.1},0).wait(1).to({rotation:-40.3,x:145.8,y:237.4},0).wait(1).to({rotation:-37.9,x:146.9,y:247.5},0).wait(1).to({rotation:-35.5,x:148.1,y:257.8},0).wait(1).to({rotation:-33.2,x:149.2,y:268},0).wait(1).to({rotation:-30.8,x:150.4,y:278.2},0).wait(1).to({rotation:-28.4,x:151.5,y:288.4},0).wait(1).to({rotation:-26,x:152.7,y:298.6},0).wait(1).to({rotation:-23.7,x:153.8,y:308.8},0).wait(1).to({rotation:-21.3,x:155,y:319},0).wait(1).to({rotation:-18.9,x:156.2,y:329.3},0).wait(1).to({rotation:-16.6,x:157.3,y:339.4},0).wait(1).to({rotation:-14.2,x:158.5,y:349.7},0).wait(1).to({rotation:-11.8,x:159.6,y:359.8},0).wait(1).to({rotation:-9.5,x:160.8,y:370.1},0).wait(1).to({rotation:-7.1,x:161.9,y:380.3},0).wait(1).to({rotation:-4.7,x:163.1,y:390.5},0).wait(1).to({rotation:-2.4,x:164.2,y:400.8},0).wait(1).to({rotation:0,x:165.4,y:410.9},0).wait(1).to({rotation:2.4,x:166.6,y:421.2},0).wait(1).to({rotation:4.8,x:167.7,y:431.4},0).wait(1).to({rotation:7.1,x:168.9,y:441.5},0).wait(1).to({rotation:9.5,x:170,y:451.8},0).wait(1).to({rotation:11.9,x:171.2,y:462},0).wait(1).to({rotation:14.2,x:172.3,y:472.2},0).wait(1).to({rotation:16.6,x:173.5,y:482.4},0).wait(1).to({rotation:19,x:174.7,y:492.6},0).wait(1).to({rotation:21.3,x:175.8,y:502.8},0).wait(1).to({rotation:23.7,x:176.9,y:513.1},0).wait(1).to({rotation:26.1,x:178.1,y:523.2},0).wait(1).to({rotation:28.4,x:179.2,y:533.5},0).wait(1).to({rotation:30.8,x:180.3,y:543.7},0).wait(1).to({rotation:33.2,x:181.5,y:553.9},0).wait(1).to({rotation:35.6,x:182.7,y:564.1},0).wait(1).to({rotation:37.9,x:183.8,y:574.3},0).wait(1).to({rotation:40.3,x:185,y:584.5},0).wait(1).to({rotation:42.7,x:186.1,y:594.8},0).wait(1).to({rotation:45,x:187.3,y:604.9},0).wait(1).to({rotation:47.4,x:188.4,y:615.2},0).wait(1).to({rotation:49.8,x:189.6,y:625.4},0).wait(1).to({rotation:52.1,x:190.8,y:635.6},0).wait(1));

	// Background
	this.instance_1 = new lib.Branch();
	this.instance_1.setTransform(0,0,1,1.004);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(400,-44,800,719);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;