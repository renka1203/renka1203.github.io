(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AhfBgQgognAAg5QAAg3AogoQAngoA4AAQA4AAAoAoQAoAoAAA3QAAA5goAnQgoAog4AAQg4AAgngog");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-13.6,27.2,27.2);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AHxjbIjxGwIjyhkIhygxIJVkbIrwD6IjxhAgAjgDcIB8icAj/AfIAfC9IDuhr");
	this.shape.setTransform(-2.7648,-4.6666,0.846,0.846,14.9962);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AAEhNIB0AxIjvBqg");
	this.shape_1.setTransform(-14.4748,4.6339,0.846,0.846,14.9962);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("Al4AfILxj6IpWEbIh7Ccg");
	this.shape_2.setTransform(7.0624,-2.0341,0.846,0.846,14.9962);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.6,-19.3,87.30000000000001,38.7);


(lib.Tryagain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAlQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAgBABAAQAAAAABgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAABAAQABAAAAAAQABAAAAABQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAgBAAQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBgBAAAAgAgLARQgFgFAAgGIACgGIAEgFIAJgEQAGgDACgDQADgCgBgEQABgDgDgCQgDgDgEAAQgHAAgCAMIgJAAQABgLAFgFQAFgFAHAAQAIAAAGAFQAGAFgBAHQAAAGgDAEQgCAFgNAGIgFACQgBABAAAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAAAABABQAAAAAAAAQABAAAAABQABAAABAAQAAAAABAAQAFAAACgIIAKAAQgCAJgFAFQgFADgFABQgHgBgEgDg");
	this.shape.setTransform(49.65,9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_1.setTransform(44.725,10.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAkIAAgvIAJAAIAAAvgAgEgWQgDgCAAgDQAAgEADgCQACgCACAAQADAAADACQACACAAAEQAAADgCACQgDADgDAAQgCAAgCgDg");
	this.shape_2.setTransform(40.775,9.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSASQgHgIAAgKQAAgKAHgHQAHgIAJAAQAFABAFADQAFACADAGIAAgKIAKAAIAAAvIgKAAIAAgJQgIALgKgBQgJAAgHgHgAgJgLQgFAFAAAGQAAAHAFAFQAEAEAGAAQAHAAAEgEQAFgGAAgGQAAgGgFgFQgEgEgHAAQgFAAgFAEg");
	this.shape_3.setTransform(36.075,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgLAgQgHgEgDgJIALAAQAFAJAHgBQAGAAAEgEQAEgEAAgGIAAgJQgIALgKAAQgJAAgHgIQgHgHAAgKQAAgLAHgGQAHgIAJAAQALAAAHALIAAgKIAKAAIAAAtQAAALgHAHQgHAHgKAAQgHAAgGgEgAgJgVQgFAFAAAGQAAAHAEADQAFAFAGABQAHgBAEgFQAFgDAAgHQAAgHgEgEQgFgEgHgBQgGABgEAEg");
	this.shape_4.setTransform(29.725,11.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSASQgHgIAAgKQAAgKAHgHQAHgIAJAAQAFABAFADQAFACADAGIAAgKIAKAAIAAAvIgKAAIAAgJQgIALgKgBQgJAAgHgHgAgJgLQgFAFAAAGQAAAHAFAFQAEAEAGAAQAHAAAEgEQAFgGAAgGQAAgGgFgFQgEgEgHAAQgFAAgFAEg");
	this.shape_5.setTransform(23.175,10.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAjIAQgiIgYgjIAMAAIARAaIAMgaIAKAAIggBFg");
	this.shape_6.setTransform(13.65,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAZIAAgwIAKAAIAAAKQAEgGACgCQADgDAGAAIAEABIgDAKIgEgBQgFAAgDAEQgDAEAAAFIAAAag");
	this.shape_7.setTransform(8.975,10.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgEAlIAAg/IgSAAIAAgKIAtAAIAAAKIgSAAIAAA/g");
	this.shape_8.setTransform(4.65,9.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.1,17.8);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AAAgEIgMAeIgYgxIAJAAIAPAdIAMgfIAOAfIAOgdIAJAAIgYAxg");
	this.shape.setTransform(7.125,1.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AgRARQgIgHAAgKQAAgJAIgIQAHgIAKABQAKgBAIAIQAIAIAAAJQAAAKgIAHQgHAJgLgBQgJABgIgJgAgKgKQgFAEAAAGQAAAGAFAFQAFAEAFAAQAGAAAFgEQAFgFAAgGQAAgFgFgFQgFgFgGABQgFgBgFAFg");
	this.shape_1.setTransform(0.5,1.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_2.setTransform(-3.825,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AgVAlIAAhJIALAAQALAAAIAFQAHAFAAAHQAAAKgLAGQARAFAAAOQAAAJgJAGQgJAGgNAAgAgLAcIAAAAQANAAAEgEQAGgEAAgFQgBgGgFgDQgGgDgHAAIgEAAgAgLgFQAIAAAEgEQAEgDAAgFQAAgFgEgDQgDgCgGAAIgDAAg");
	this.shape_3.setTransform(-8,0.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-76.3,-8.9,152.7,17.8), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRCGIAAjmIhAAAIAAglICjAAIAAAlIhAAAIAADmg");
	this.shape.setTransform(101.075,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABACGIAAiBIh/AAIAACBIgkAAIAAkLIAkAAIAABnIB/AAIAAhnIAkAAIAAELg");
	this.shape_1.setTransform(78.725,0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhpBjQgpgsgBg3QABg6AqgqQAqgqA8AAQAiABAeAKQAeALAeAeIgbAbQgogpg2AAQgvABgeAeQggAeAAAsQAAAoAfAfQAeAgA0ABQBQAAAUhGIhIAAIAAgjIBzAAQgBAagDAQQgEAQgLAUQgMAUgTAQQgUAPgVAHQgWAGgfABQhEAAgpgsg");
	this.shape_2.setTransform(49.05,0.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRCGIAAkLIAjAAIAAELg");
	this.shape_3.setTransform(27.75,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag9CGIAAkLIAlAAIAADnIBWAAIAAAkg");
	this.shape_4.setTransform(16.125,0.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhJCGIAAkLICTAAIAAAlIhvAAIAABDIBvAAIAAAjIhuAAIAACAg");
	this.shape_5.setTransform(-2.3,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhJCGIAAkLICTAAIAAAlIhvAAIAABDIBvAAIAAAjIhvAAIAABcIBvAAIAAAkg");
	this.shape_6.setTransform(-33,0.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA2CGIh1iDIAACDIglAAIAAkLIAlAAIAABtIBwhtIAzAAIiAB8ICBCPg");
	this.shape_7.setTransform(-53.775,0.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABYCLIgfhEIhxAAIgfBEIgmAAIB9kVIB+EVgAgqAoIBVAAIgrheg");
	this.shape_8.setTransform(-79.775,-0.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRCGIAAjmIhAAAIAAglICjAAIAAAlIhAAAIAADmg");
	this.shape_9.setTransform(-101.275,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-199.6,-25.4,399.29999999999995,50.8), null);


(lib.Sunray = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bumble_bee_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFECC2").s().p("AgrB2QgIgEACgKIBRjdIASAHIhQDdQgCAHgHAAg");
	this.shape.setTransform(1718.4216,153.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFECC2").s().p("AhFCnIB4lNQACgEADgBQAEgCAEABQAEACACAEQABADgBAEIh4FMg");
	this.shape_1.setTransform(1759.7875,39.0679);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFECC2").s().p("AiSChIETlJQADgDAEAAQAEgBADADQAEACAAAFQAAAEgCADIkTFHg");
	this.shape_2.setTransform(1780.125,45.6208);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFECC2").s().p("Ah1CNQgDgCgBgFQAAgEADgDIDikNIANAOIjgEMQgCADgGAAQgEAAgCgCg");
	this.shape_3.setTransform(1696.35,145.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFECC2").s().p("AiWBLIEeikQAEgCAEABQAEABACADQACAEgBAEQgCAEgDACIkcCjIgMgQg");
	this.shape_4.setTransform(1791.1167,63.9583);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFECC2").s().p("AhPAvQgCgDABgEQACgEADgCICUhVIAIASIiSBUIgFABQgGAAgDgFg");
	this.shape_5.setTransform(1690.4333,121.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFECC2").s().p("AikAkQgDgCAAgDQgBgFACgDQADgDAEgBIFHg5IABAUIlFA5IgCAAQgDAAgDgDg");
	this.shape_6.setTransform(1677.695,104.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFECC2").s().p("AjVAbIGfhIQAEgBAEADQADACABAEQABAEgDAEQgCADgEABImdBIg");
	this.shape_7.setTransform(1804.6643,82.0458);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFECC2").s().p("ACIAjIkagxIABgUIEcAxQAEABADADQACAEgBAEQgBAIgIAAg");
	this.shape_8.setTransform(1800.3893,103.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFECC2").s().p("AjlgeQgEgBgCgDQgCgDAAgEQABgEADgDQAEgCAEABIHPBQIgHAUg");
	this.shape_9.setTransform(1673.2208,81.645);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFECC2").s().p("ABrBLIjliEIAIgSIDnCFQAEACABAEQABAEgCADQgDAFgGAAg");
	this.shape_10.setTransform(1793.9667,124.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFECC2").s().p("AiRhIQgDgCgCgEQgBgEACgEQADgDAEgBQAEgBADACIEeCkIgMAQg");
	this.shape_11.setTransform(1689.1333,63.9583);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFECC2").s().p("ABwCWIjxkgIAOgPIDzEiQAGAIgIAGQgCACgEAAQgFABgDgEg");
	this.shape_12.setTransform(1784.7333,146.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFECC2").s().p("AiQibQgCgDAAgEQAAgFADgCQAEgCAEAAQAEAAACADIEUFJIgQALg");
	this.shape_13.setTransform(1700.125,45.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFECC2").s().p("AAcBmIhKjKIASgHIBLDKQABAEgBADQgCAEgEACIgEAAQgGAAgDgGg");
	this.shape_14.setTransform(1761.3875,152.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFECC2").s().p("AgvhhQgCgEACgEQACgEAEgBQADgCAEACQAEACACAEIBNDRIgTAHg");
	this.shape_15.setTransform(1721.7375,45.5179);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFECC2").s().p("AAHBLQgDgDgEAAQgDAAgDADQgDADAAAEIAAiZQAAgEADgDQADgDADAAQAEAAADADQADADAAAEIAACZQAAgEgDgDg");
	this.shape_16.setTransform(1740.1,45.5875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFECC2").s().p("AgGBPQgDgDAAgEIAAiZQAAAEADADQADADADAAQAEAAADgDQADgDAAgEIAACZQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_17.setTransform(1740.1,170.2875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1649.5,21.8,176.5999999999999,156.7);


(lib.grassAibackgroundai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#789248").s().p("AgBAHIgCgIQADgBAAgFQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABAAIABATIgBAAQgDAAgBgDg");
	this.shape.setTransform(392.85,28.5153);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#417545").s().p("AARBBQAChLgBgUIgEgkIgCAAIgTBUQgOA4gCAZQgCAaACAMQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAgBIgBgUQgBgBAAAAQgBAAAAABQgBAAAAAAQAAABAAABQAAAEgDACQgEgJgEgBIAhiJQAThZAdgvIgOArIgLAkIAEAZQAEAbgBANIAACiIgDAJQgBADgGAAQACgSAChMg");
	this.shape_1.setTransform(395.825,15.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8DFAD").s().p("AgEgJIgBgNQAAgFADAGQAFAMACAMQADASgIAEIgEgig");
	this.shape_2.setTransform(407.9179,28.3286);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3C553A").s().p("AAAAoIgJAAIAEhPQAMABACACQABACABAKIgEA/QgCABgEAAIgBAAg");
	this.shape_3.setTransform(411.95,71.23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C8E09F").s().p("AAAgWQAAgHABgBQAFAvgDAIIgGAGQgCgSAFgjg");
	this.shape_4.setTransform(448.9527,26.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ECE4C1").s().p("AgGA7QgEg3AMg5IAEgQQABgCAAANQACAZgCAeQgCAhgEAUQgCAQgCAEQgCgCgBgJg");
	this.shape_5.setTransform(377.2154,23.1612);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#59924C").s().p("AABAkQgFgBgDAAQAHgtAAgaIAFABQABACAAAyIABAAIAAATIgCABIgEgBg");
	this.shape_6.setTransform(373.2,26.3875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#59924C").s().p("AAFA9QABgJgFgCQgIgBgHgCQAIgVAGgeIAIg1QADACABgDQABAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAQgNA7AEA1QACAJACACg");
	this.shape_7.setTransform(375.95,23.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#59924C").s().p("AACBPQgEgMgIgDQAEgUACgiQACgdgCgZQAFADgBgMIgCgRQAAgCADgIIADgIIgEAQIAEBSQACA3AFAYQgEAAgFgKg");
	this.shape_8.setTransform(378.425,21.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7AAC4D").s().p("AgBD/IAAgqQABgqgCgOIgCAAIgGApQgDAaAAAQQgBgBgDgSIgGgwQgIhKgGhLQgHhmAChOQACgYAAgMQAEgCAFgkIABgHQACAAAGABQAGACABgCQADgDACgLQAHADAHABQAGACgBAJIADABQACgEAEgQQAIADAFALQAFAKADAAIACAHQABAFACABIgEAZQgZBUgGB+IgHDVIgCAVIAAADIgBAAg");
	this.shape_9.setTransform(375.5868,53.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F603C").s().p("AABByIgHgCIABhyQABhGADgtIADB0QACBJADApIAAAFQgCgDgEgBg");
	this.shape_10.setTransform(430.425,58.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#314436").s().p("AAAAbQgGgBgFABIACg5IAIACQAEABACADQACAYAFAfQgDgDgJgBg");
	this.shape_11.setTransform(430.675,73.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3C553A").s().p("AgCALIACgGIADgUIAAABQgDAYgBAGQgCAAABgFg");
	this.shape_12.setTransform(377.53,81.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#314436").s().p("AAFAwIgLgCIAAgQQAAgPAEgZIAEgqIACAAQADAOgBApIgBAqIACAAIgBAIIgBgFg");
	this.shape_13.setTransform(374.825,74.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#314436").s().p("AADBFIgCgFQgGgGgBgCIgBgKQAAgIgEAAIACgVIARACQABgIAAgnQAAgmABgEIACgBIgBBCQAAAqgBAOIgEAVIAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_14.setTransform(376.775,75.0286);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#314436").s().p("AgDAgIgDAFQgBAAAAABQAAAAgBAAQAAAAAAAAQgBABAAgBQADgygBgaIAEgCQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAGAvQgBANAEARQAAABAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQgDAAgJgJg");
	this.shape_15.setTransform(373.078,74.9122);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3C553A").s().p("AgCBzIgEgsQgFg4AEhtQAFgDgBgHQgBgKABgDQAFBLAIBJQgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgEADQABAagCAzIAAAIIAAABIgCgDg");
	this.shape_16.setTransform(372.1611,67.8931);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3D5041").s().p("AAAABIgDgWIABgBIADAWQAEAOgBAJQgCgIgCgOg");
	this.shape_17.setTransform(407.8781,79.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#314436").s().p("AgBgBQABgZABABQADATgEAhIgBgcg");
	this.shape_18.setTransform(412.0813,84.0995);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3C553A").s().p("AAAAwQgCgDAAgsQAAgqACgFQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAIAAAuQAAAdgCASg");
	this.shape_19.setTransform(410.325,83.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2E3835").s().p("AhSBbQAHgZgMg2QgLg9gBgFIADgMQABgFgBgFQABAAABgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQADAQAIAhIAFAXQABANADAIQABgJgEgPIgFgVIgBgMQAFAEgBgMQgDgNAFABIAOAqQADABgBgMQgCgLADABQADARABgFIACgUIACAlQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQgCAFAAAqQAAArACAEIADAAQACgSAAgdIAAgvIAAgHQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAHIADACIgBACQABADAJADQADAAABgEIAAgHQABgCABgIQABAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAIgBAEQACADAFACIAAAGIABAEIAJgdQAGgTADgLQADAFgCAKIgDAOIgBAaQgBAVADgEIAaglQgFATgFAgIADABIAVg/QANgnAMgXQgFAVgMAsQgJAlAEAbQAAABABAAQAAgBAAAAQABAAAAAAQABgBAAgBIAHglQAGgmADgHIgBAhQgCAjAHADQADAAALgiQABARAJAfQALAhgBARg");
	this.shape_20.setTransform(415.5,79.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#314436").s().p("AAAAfQgFgCgCgDIABgEQAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAgBAAQAFgYALghQABAfgJAsIAAgHg");
	this.shape_21.setTransform(413.6,76.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#314436").s().p("AAFAcQgIgDgBgDIABgDIgDgCIAAgHQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIADghIAIABQAFAAADgCIgCAzQAAABAAAAQgBABAAABQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_22.setTransform(411.65,77.8775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#789248").s().p("AADAYQgFgegCgYIAAgFIAFABQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAABgBIABBNg");
	this.shape_23.setTransform(431.65,73.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#516749").s().p("AAAgDIABAAIgBAHIAAgHg");
	this.shape_24.setTransform(450.55,78.525);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D7E9BE").s().p("AgBAGIABgPQABgDAAgBQABgCAAAAQAAgBAAABQAAAAAAACQABAHgBAIIgCAPQgDAAACgLg");
	this.shape_25.setTransform(389.27,26.947);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#314436").s().p("AAAgQQACAEABAKQAAAJACADQgBAHgIAAg");
	this.shape_26.setTransform(378.35,78.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D8DFAD").s().p("AgDAPQAAhEADgBIACAQQACAmAAANQgBAOgGAbg");
	this.shape_27.setTransform(390.3292,26.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D8DFAD").s().p("AgEAZQACgkAFgXIACBGg");
	this.shape_28.setTransform(444.85,25.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#6E9E4C","#84B54D"],[0,1],1.6,-20.3,0.1,1.4).s().p("AAPDKIgIgRQgDgKgCgaIgCglIgLh5QgNihACgQQAAgIAEgKIAFgSIARASIACB2QAABHADAuIAGBhIAIBgQgBgIgHgOg");
	this.shape_29.setTransform(444.917,49.25);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2E3835").s().p("AgDAGQgBgNAEACQACACACAJg");
	this.shape_30.setTransform(444.0546,88.2677);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2E3835").s().p("AgFAMIAAgXIALAXg");
	this.shape_31.setTransform(445.25,87.725);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#3E603C","#374739"],[0.118,1],-0.8,-19.7,0.3,40.7).s().p("AAqGwIgMgXIgBAXIgBAAQgCgKgDgCQgEgCABAOIgEAAQgEgFAAgJIgBgOQgEgagMgPIgOgMQgCgGAKgpQALgrAAgIQgSAkgKA5IgDAWIgFgXIgLAaQgGgTAIgkQAKgtAAgLIgmBwIgDAAQADgXALgjQgFADgFAHIgJALQAEgxAAiPQAAh4ANhGQADgQARhBQAXhIADgVQAEgVADg4QADg7ADgVQADBbgFCEQgCgBgCAGIgKAoQgRBAgHA4QgHA5AABCQAKgTAFgpIAHhCIAYiSQAQgsAVhmQAThhAVgxQgHAUgOBCQgNBCAAANIAFAyIACBCIADALQADAsAKBXIAWD8QgEAAgBABQgBACAAAgQAAAeABAIIgCAAQgDgHgGgcQgDgMAAARQAHAjgHAtIgFg1QgEgegKgVIAGAyQADAdgBAUQgMg8gLgcQABAKALBFQAHAwgEAfg");
	this.shape_32.setTransform(441.675,45.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#516749").s().p("AAAgCIAAAAIAAAGIAAgGg");
	this.shape_33.setTransform(393.1,77.65);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#638245").s().p("AAAAaQAAgqgBgRIgCgDIAAgJIACADQABABADgCIABAiQABATgBAOQgBAUgBACIgBAAQgBAAAAgUg");
	this.shape_34.setTransform(394.2417,74.8287);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7AAC4D").s().p("AgFAAIAPhYIADAAIgKBcQgEA5gLAdQgBgmAIg0g");
	this.shape_35.setTransform(401.8697,44.75);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#417545").s().p("AgCgHQABAAAEANIgDACIgCgPg");
	this.shape_36.setTransform(390.475,21.675);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#C8E09F").s().p("AgDAPIADgdQABAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQgBAEABACIgEAWg");
	this.shape_37.setTransform(403.2528,34.2719);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#59924C").s().p("AAGAXIgBgQQgHgDgCAEQgDAFgCgBQAJgZAEgNIADgBIADADQgFAiACASIgBAAQgBAAABgFg");
	this.shape_38.setTransform(447.9,26.4461);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#417545").s().p("AgFAWQADgPABggQAGAEAAAHIABANIAAASIgDAHQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgFgEg");
	this.shape_39.setTransform(417.55,30.8092);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#59924C").s().p("AAEAhQAAgEgHgBQADgIgFgvIAAgEQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAHAaQACAPABAfQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBg");
	this.shape_40.setTransform(449.625,25.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#59924C").s().p("AAAAYIACgDQgGgLgCABIAGglQAEADABAEIACAIIgCAmQgFgCAAgBg");
	this.shape_41.setTransform(451.375,26.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#498148").s().p("AgKAiIARhOQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAAAQAAABABAAQgLAzgBAhQAAgJgJgDg");
	this.shape_42.setTransform(433.5278,22.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#59924C").s().p("AADAWQgBgFgKgDQAEgZABgeIAEgBIADAzIACABIADAhIgCAAIgEgVg");
	this.shape_43.setTransform(435.525,25.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#7AAC4D").s().p("AghDqQAAgggFhAIgFhfQABhegBgwIgGiRIAEABIACASQABACAEgIQAKgWgBgXIAOAsIABAIQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAFQAAABABAAQAAAAAAgBQABAAAAgBQABgBABgBQACgDAJggQAIAEABAIQgBAoAEgFQAEgEAFgiQALADACAEIAEAWIACgBQACAVADALIACABQgRBAgDAQQgNBHAAB4QAACOgEAyQgGhIgGgRIgBgDQAAAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAABAAABQAAAAgBABQAAABAAAAQgBAAAAAAIgGAAQgDgqgChKIgFhzQgDAsAABHIgCBzIgCA5IgCAig");
	this.shape_44.setTransform(432.175,51.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#417545").s().p("AgDBLIgEABQACgMABgUIACghQAGg6ACgeQADAIgCAnIgEAwQgDAlABAGQAAABgBAAQAAAAAAABQAAAAAAABQAAABAAAAIAAAFQgBABAAAHIgCgDg");
	this.shape_45.setTransform(449.0531,16.125);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#59924C").s().p("AgIAgQAFgVABgyIADAEQADgIAAAQIABAdQACAPABAAIABAWQgJgBgIgGg");
	this.shape_46.setTransform(454,24.95);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7AAC4D").s().p("AALCcIgCABQgGAdgEA6IgBAAIgGhQIgWj8QgKhXgDgsIgDgLIAIgdQADAAACgEQACgEAIADIABAPQgBAIACgCIAHgGQAHABABAEQAAABAAAAQABABAAABQAAAAAAAAQABABAAAAIAEgQQABgBAHALIgCADQgBABAGACQAAAOAEgGQAEgGAEgQQAJAGAKABQACAcADAIIgRBQQgIAqgCAqQgBAhAABgQAABSgEA7QgDAhgCALg");
	this.shape_47.setTransform(450.775,53.6857);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#417545").s().p("AgJBHQAAgKgNgkQgOglgKgJQAQAOAJAXQAFANAIAgIAXhLQAPgrARgcQgTA+gUA7IgKAfIgCAOQgBAFgHABIADgQg");
	this.shape_48.setTransform(418.4125,8.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#417545").s().p("AgNBaIAHghQABgDgJgbQgJgZgDgFIgSgfQAPAOAKAWQAHAPAIAcQAbhjARgdQAGgKgCAGIgFAOQgVBJgLAkIgDAIQgEAIAAADIACAQQACAMgFgDQgBgMAAACIgFAPQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIgCgBg");
	this.shape_49.setTransform(378.15,9.2275);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#498148").s().p("AgYBYIARhRQAHgfAEgRQAHAAABgGIACgOIALgeIgGAVIgGASIAAA8QACA9gBAVIgBgNQABgHgIgDIABg0IABgyIgCgBQgFAXgGArQgIAyABAMQgGgGgGACg");
	this.shape_50.setTransform(416.7,21.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#417545").s().p("AgLB2QAAgLgDAAQAAgCAAAAQAAgBAAABQAAAAgBACQAAABgBADIgCAQIgNgCQAFgMAKg9QANhBADgVQALgtASgyIACAAIgKAeIgPBJQgLA5gBANIgBAQQgDABABBFQgDgCABgKg");
	this.shape_51.setTransform(391,14.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#417545").s().p("AgECCIgCg0IgGABQAAg4gEAeQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBABAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQAKgiAAgEQAAgJgJgeQgLgigIgIQAPAMAIAfIAIAbQAHgVAMgsQAOgpANgVIgXBUIgXBGQgBAHACAsIAFA3IgDgBg");
	this.shape_52.setTransform(436.35,13.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#498148").s().p("AAGB3IgBgfQAAgQgDAIIgDgDQABg0gCAGQgCACgKA2IgDAlIgCgIQgBgEgEgDIAJguIAJgpQAAgGgQglQgRgmgGgIQAWAYASA4QAZhoAagpQgGASgSA6QgSA9gBAGIACA5IAEBBIAAAAQgBAAgCgOg");
	this.shape_53.setTransform(453.9,13.3258);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#7AAC4D").s().p("AgPAVQAHg4AQhAIAKgnQACgHACACQgBAKACAGIgXCRIgHBDQgFAogKAUQAAhDAHg5g");
	this.shape_54.setTransform(438.675,44.5359);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7AAC4D").s().p("AgJgfQACgTAHgtQAIgoACgYQABABACAJQABAIACACIAAACQgJArgFBrQgDBkgOAvQgCh9AIhCg");
	this.shape_55.setTransform(425.555,38.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#7AAC4D").s().p("AABhfIANg+IACgBIAAAmIACAAIgJBaIgIBYQgBAZgBA6IgHAJIgJAJQgDiLAVhzg");
	this.shape_56.setTransform(420.362,45.125);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#7AAC4D").s().p("AgWBKQAChaAIgzQADgXAJgqQAJgnAIgZQAHgVACABQgCASABAQQgRAugIBcQgIBDgCBLIABBWIgIAQQgHAPgBADIADiQg");
	this.shape_57.setTransform(398.625,51.2994);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#7AAC4D").s().p("AgZDyIABgPIAEiyQADhpAMhHIANg7QAKglADgXIABAAIAEADQgDAWgDAsIgJAvIgJAvQgIA1gDBeQgEBlgGAwIgFAiIAAAAQgBAAAAgFg");
	this.shape_58.setTransform(456.5438,55.9882);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#7AAC4D").s().p("AACCrQgCgXgKidQgCg4gChwIAEgqIAJAJIABAOIACAWQACAiAABAIABBhIADBgQADBGADAUIABAMIgBABQgJghgDgQg");
	this.shape_59.setTransform(406.05,55.425);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#7AAC4D").s().p("AgbD0QABgNAAgrIAAhCQAFiZAVhlIAPhDIAIgtQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAGACABIgGBBQgDAWgIAnIgLA8QgHAvgFBRQgGBfgEAjIgFAiIAAAEg");
	this.shape_60.setTransform(380.65,55.655);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#3F603C").s().p("AgSCpQgCgCgNgBQAMigAVhbIAJgjQAHgYACgKIAEgVQAJAGAAgEIADgHIgDAaQgCAcgIAfIgMAzQgOBKgLCXQgBgKgBgCg");
	this.shape_61.setTransform(414.75,50.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#7AAC4D").s().p("AADCZQgCgRgCgqIgJiOQgEgogBgUQAAgSADg3QAKgRACgMIAMACQgBALADAAIgIBZQgEA+AFBhIAJCgQgIgZgFghg");
	this.shape_62.setTransform(387.8464,48.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7AAC4D").s().p("AgQDgQAJguAAgfQgMAhgFAaQgBAHgCADIAFhrQAMiWAOhLIAMg0QAIgeACgcIACABQgBAVgFAmQgFApgBASQgCAfgBBAIgDBgQgEA9gFAWQgBAMgHATIgJAdIAAgDg");
	this.shape_63.setTransform(415.275,57.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#41623C","#3C4E39"],[0,1],2.8,-6.1,-8.7,19.2).s().p("AAOEmIgOgrQgEgBACANQABAMgFgEQgCgUgDhGIgEhgIgBhhQABhAgCgiIgCgWIgCgOQgBgMADgVIAEghIAAgoIgBgpIADAbQgCAGAIAQQAGAPgCABQgDgGAAAFIABANIgFABQgEAkAGArIALBKQAIA6AFBmIAGCmIgCAUQAAAGgEgSQgCgBABALQABAMgCAAIAAAAg");
	this.shape_64.setTransform(408.0714,49.001);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#40683F","#374A36"],[0,1],9.9,-11.3,-15.6,20.4).s().p("AgPFNIAAgNQgPAAgCgBQAEg6AAhTQAAhhACghQABgqAJgoIAQhRIALgwQAGgdADgTQACgUADgvQACgrAEgYQADAygDBlIABAiQACAXgCAKIgBABQgDAWgKAlIgOA8QgLBGgDBqIgECxQgBgDAAgKg");
	this.shape_65.setTransform(455.5375,44.025);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#42683F","#384936"],[0,1],9.9,-7.2,-17.5,14.6).s().p("AgkFVIAHjWQAFh+AZhTIADgZQAPg5AEgcQADgZADgyQADgzADgXQACAfgBAyIgCBRIADBAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgIAsIgQBEQgTBkgGCaIgBAAQgBAEAAAnQAAAngCAIg");
	this.shape_66.setTransform(379.525,42.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7AAC4D").s().p("AgCETIgEggQgFgqgEg/IgGhqIgLhqQgGhFAFgkQAGgbABgPQABgNgDgmIADgCQACAIACAUIACAeQAAAFAEgMQADABAEAJIACAIQACAEADAAIAAABQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAFQAAABAAAAQAAAAABAAQAAAAAAAAQABgBAAgBIAHgXIAHgUQACgNAAgTIACABQgFAxAUA8IgIAeQgHAYgDAPQgJA6gBBaIADCWQgEACgBAAIgCgDIABAIQgEAVgCApg");
	this.shape_67.setTransform(393.3536,49.775);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#7AAC4D").s().p("AgKEbIgCglIgGimQgFhmgIg6IgMhKQgGgrAEgkIAFgBIAFAjQAHgEgDgSQgCgNgFgMQACgBgGgPQgIgQACgGQACAPAMAYQANAbADAMQAFgKACgeQACgTADAQIACAaQABASACgBQACgJACgcQABgOADARIADAfIAOg5QABABABA9QAGgBAGAGIAGATQAFARABAHQgCALgIAXIgJAjQgVBbgLCgIgHB5QgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_68.setTransform(411.5875,50.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#466C40","#3A5A3A","#384939"],[0,0.224,1],-1.5,-20.7,2.7,32).s().p("AAWFJQgBAPgJALQgIAJgCgDIAEg0QADgfgBgWIgCAAQgGAqAAAVQgHACgCgDQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgOArgEAIIgDAAQgBgCAEgaQAEgZACgGQgGAEgLgEQAGgwAEhmQADhfAJg1IAJgtIAJgvQACgsADgWQACgQAGgRIAIgeQAJgkADg4IAFhcQAECUgFBTIgFAhQAAAKACAzIgEAAIAAA3IADA7QADApAAAUQACA+gBB8IADArIgBAeQAAASACALIgBABg");
	this.shape_69.setTransform(458.625,46.425);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2E3835").s().p("AgCALQgFgXACACIALAVg");
	this.shape_70.setTransform(405.8563,87.7675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#417545").s().p("AgDAOIAAgdIABABQACAFAEAWQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_71.setTransform(370.875,29.0021);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#789248").s().p("AAAAFIgBgsQABgBAAgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAABAAIAABhQgCgSAAgag");
	this.shape_72.setTransform(463.325,63.1722);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7AAC4D").s().p("AAAA1IgFhiQgDgyABgLIAEghIALgMIAAEmQAAAAgBAAQgBAAAAABQAAAAgBABQAAABAAABQABAEgBABQgBghgEhCg");
	this.shape_73.setTransform(462.6708,44);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#314436").s().p("AAADbIABgDQgFgJgCACIAAmuQAGADABgEQADAUgBAUQAAAMgCAYQgBBOAGBmQgBAEABAJQABAHgFADQgDBvAEA3QgEgBABgDg");
	this.shape_74.setTransform(371.1577,52.65);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2E3835").s().p("AhUBSIAAiZQABgBAGAJIgCADQAAADAEABIAEAsQABACABAAQABABAAABQAAAAABgBQAAAAAAgBIgCgIQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBIADgFQAQAPgBgIQgFgSABgMQADASABABIAAAQIALACIABAFIABgIIABgDQAEAAABAIIAAAJQABACAIAFIABAGQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIgBAHQgBAFABAAQACgHAEgYIAAgEQAJAAABgHIAQgTIgGAYQgEAPAAAGIAAAHIACgDQAIgKAIgjIAKgyQACAcgIA9IACAAQAFgnASgzIADAAIgLAxQgEAcABAVQABADAHgIIAJgJQgCAJAGANIAJAWIADAVQAEALAIgRIAAAUg");
	this.shape_75.setTransform(379.05,80.675);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2E3835").s().p("AhTBfQACgLgDgXQgDgBABgJQAGALAEATQAFgPgEgYQgHgagBgNIgCgfQgBgbADALIAGAnQAFAeAFAOQgBgPADgbIADgoIgCgBIAIABIAEArIACgiQAGgBAHABQAIABAEADIACAPIgBhPQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIABADQAGARAGBIIAJgMQAEgHAFgDQgKAjgCAXIACAAIAlhwQAAALgKAtQgIAjAGATIALgZIAGAXIADgXQAKg3ASglQgBAIgLAsQgKAoADAGIANALQANAPAFAaIAAAPQABAJADAFg");
	this.shape_76.setTransform(434.525,79.4188);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2E3835").s().p("AhPD4QAEgggHgwQgLhFAAgKQAKAdAMA8QACgVgEgdIgFgyQAJAVAEAfIAGA1QAGgugHgjQAAgRADAMQAGAdADAGIACAAQgBgIAAgeQAAgfABgDQABgBAFAAIAGBRIAAAIIABgIQAEg7AHgdIABgBIgBBvQADgLACghQACABAPAAIAAANQAAAKAAADIAAAPQAAAHAAgBIAEgiQAMAEAGgEQgCAGgEAZQgFAaACACIACAAQAFgJANgqQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQADADAGgCQACgVAGgqIABAAQACAWgDAfIgEA0QACADAIgJQAJgLAAgQIATBDIABgBQgCgMAAgRIABgeIgDgsQABh6gCg/QgBgTgDgpIgCg8IAAg3IAEAAIAGBjQAEBBABAiIABAsQAAAZACASIAADRg");
	this.shape_77.setTransform(454.05,64.15);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#466D41","#3A5A3A","#3A5939","#364639"],[0,0.184,0.22,1],6.1,-18.5,-1.9,40.4).s().p("AAVGuIAAgVQgIARgDgKIgDgWIgIgVQgGgNABgKIgJAKQgGAHgCgDQgBgWAFgcIALgxIgDAAQgTAzgEApIgCAAQAHg/gCgcIgKAzQgIAjgHAKIgDADIAAgGQAAgHAFgQIAFgYIgRAUQgCgEAAgKQAAgJgCgEQAEgjAGhfQAEhSAIgwIAMg7QAHgnAEgVIAGhBQADgQAGgVIAKgjQADgSAMhZQAKhIANgnQgUBxgICgQgDA3ABASQAAAUAEAoIAJCOQADAqADARQAEAhAIAZIgJigQgFhhAEg+IAIhZIACgPQACgJgBgHQADAAAAALQgBALADABIAAAoQgFAkAGBEIAKBrIAHBpQAEBAAFAqQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBACABAaIAAAdIgDACQgCgBAAgbQAAgbgIgCIAAA+IgDAAQgBgcgGgpIgCgBIgBBUIgPhVQgGAeANA8QALAwgOARg");
	this.shape_78.setTransform(385.5,45.925);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#456C40","#374738"],[0,1],7.7,-17.2,-6.2,36.1).s().p("AAWGzQAAgRgKggQgKggAAgSQgLAjgCAAQgIgDACgjIABgiQgDAIgGAmIgHAmQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgEgcAJgmQANgsAEgVQgMAXgNAnIgUBAIgEgBQAFggAGgUIgcAmQgDAEABgUIABgbIAEgPQADgKgFgFQAFgXAEg8IADhhQABhBACgeQABgRAFgpQAFgmABgWQABgaAQgtQASgvACgXIACgBIAABSIgCABIgNA+QgWBzADCLIAJgJIAHgJQABg6ACgZIAIhYIAJhaQADgVALgfIARg0IAIgkIAHgkQAYhaAXgtQgPAqgNAxIgMA2QgJAsAAAFIADAKIACAYQgCgCgBgIQgCgJgBgBQgCAYgIAoQgIAtgCATQgIBDACB8QAOgvAEhjQAFhsAJgrQABAIADAPIgEgBIAGCRQABAvgBBfIAFBfQAFBAAAAgIgIgBIACABIgDAoQgDAcABAPQgFgOgEgfIgHgnQgDgLABAbIACAgQACANAGAaQAFAYgFAPQgFgTgFgLQgCAJADABQAEAXgDALg");
	this.shape_79.setTransform(423.2964,45.425);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#456E41","#384839","#2D3835"],[0,0.761,1],15.2,-7,-18.9,33.2).s().p("ABXG0IgMgXQgCgCAFAZIipAAQAOgRgLgwQgNg8AGgeIAPBVIABhUIACABQAGApABAcIADAAIABg+QAHACAAAbQAAAbACABIADgCIAAgdQgBgaABgCQAAAAABAAQAAAAAAAAQABAAAAAAQABAAABAAIAEAgIAAAHIABgHQADgpAEgVIACADQABARAAArQABAVABgBQACgCABgUQABgOgBgUIgCgiIgDiXQABhbAJg5QADgPAHgYIAIgeIABgQQAGgBABgCIACgJQArhkABgLQgBgZACgSQAGg7AjhNQgVA5gPBlIABAAQAHgXAMgeIAXg0IACAAQgMAbgNArIgVBHIADAWQABAmgCgGQgCgFgBgkIgCgBQgMAwgDAYQgCAAgHAVQgHAYgKAoQgJAqgDAWQgHAzgCBaIgDCQQAAgDAIgPIAHgPIgBhWQAChMAHhDQAKhbAQguQAKgbARgeQAAAXgFAgIgEAeIgQBZQgIAzABAmQALgdAFg3IAKheIAFgYQAGgfAHgTQACAUgCAeIgEAqQACBvACA4QAKCeADAXQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAABQgBAAAAAAQABAFgCAGIgCALQAAAFAMA+QALA2gHAZg");
	this.shape_80.setTransform(397.7682,45.325);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#D8DFAD").s().p("AgGAVIgBgFQgCgNACgZIAJAHQACACAFgJIgHAUIgGAWIgCADIAAgCg");
	this.shape_81.setTransform(394.175,28.0521);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#498148").s().p("AAAAVIgBgFQACgmABABQABABgBAmIgCAEIAAgBg");
	this.shape_82.setTransform(431.0333,27.5175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#498148").s().p("AAAg3QAEApgEBGQgDgzADg8g");
	this.shape_83.setTransform(422.95,14.55);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#498148").s().p("AACBhQAAgzgBgCIgEgBIAChFQAAgsABgaIAEDBg");
	this.shape_84.setTransform(373.55,18.35);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#789248").s().p("AgBAHIgBgFIgBgDQADgCAAgEQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAIABATIgBAAQgDAAgBgDg");
	this.shape_85.setTransform(300.225,28.5153);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#417545").s().p("AAQBBQAChLgBgUIgDgkIgCAAIgTBUQgOA4gCAZQgDAWADAQQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAgBIgBgUQgBgBAAAAQgBAAAAABQgBAAAAAAQAAABAAABQAAAEgDACQgFgJgCgBIAfiJQAUhYAdgwQgDAOgXBBQAKAqgCAXIAACiIgCAJQgBADgHAAQACgSABhMg");
	this.shape_86.setTransform(303.2,15.95);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D8DFAD").s().p("AgEgJIgBgNQAAgFADAGQAFAMACAMQACASgHAEIgEgig");
	this.shape_87.setTransform(315.3063,28.3286);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3C553A").s().p("AAAAoIgJAAQABgoADgnQANABABACIABAMIgDA/QgCABgEAAIgBAAg");
	this.shape_88.setTransform(319.35,71.23);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C8E09F").s().p("AAAgWIABgIQAFAwgDAHIgFAGQgCgQAEglg");
	this.shape_89.setTransform(356.3413,26.175);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#ECE4C1").s().p("AgGA7QgEg3AMg5IAEgQQABgCABANQABAYgCAfQgBAggFAVIgBAKQgBAGgCAEQgDgDAAgIg");
	this.shape_90.setTransform(284.5888,23.1548);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#59924C").s().p("AABAkQgFgBgDAAQAGgtABgaIAFABQABACAAAyIACAAIAAATIgCABIgFgBg");
	this.shape_91.setTransform(280.575,26.3875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#59924C").s().p("AAFA9QABgJgFgCQgIgBgHgCQAHgVAGgeIAIg1QAEACABgDQAAAAABgBQAAgBAAAAQABgBAAAAQAAAAAAAAQgNA6AEA2QAAAIADADg");
	this.shape_92.setTransform(283.35,23.95);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#59924C").s().p("AACBPQgEgLgIgEQAFgUABgiQACgegBgYQADADAAgMIgCgQIAHgTIgFARQABAQACBBQADA3AFAYQgEAAgFgKg");
	this.shape_93.setTransform(285.8,21.725);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7AAC4D").s().p("AgCD/IABgqQABgqgDgOIgBAAIgGApQgDAaAAAQQgCgBgBgGIgBgMIgGgwQgKhWgEg/QgGhdAAhXIADgkQADgCAFgkIABgHQADAAAGABQAGACABgCIAFgOQAHADAHABQAGACgBAJIADABQACgEABgGIACgKQAIADAGALQAEAKAEAAQACALADACQgCAIgCARQgaBUgFB+IgHDVIgCAVIAAADg");
	this.shape_94.setTransform(282.9731,53.675);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3F603C").s().p("AABByIgHgCIABhyQABhGADgtIADB0QACBJADApIAAAFQgCgDgEgBg");
	this.shape_95.setTransform(337.825,58.95);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#314436").s().p("AABAbQgGgBgGABIADg5IAIACQADABACADQACAXAFAgQgDgDgIgBg");
	this.shape_96.setTransform(338.025,73.25);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3C553A").s().p("AAAAFIACgUIABABQgDAVgCAJQgCAAAEgLg");
	this.shape_97.setTransform(284.9019,81.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#314436").s().p("AAEAwIgKgCIAAgQQAAgQAEgYIAEgqIACAAQADAOgBApIgBAqIACAAIgCAIIgBgFg");
	this.shape_98.setTransform(282.225,74.65);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#314436").s().p("AADBFIgCgFQgHgGAAgCQAAgSgFAAIACgVIARACQABgIAAgnQAAgmABgEIACgBIgBBCQAAArgBANIgEAVIAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_99.setTransform(284.175,75.0286);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#314436").s().p("AgDAgQgCABgBAEQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAgBIABgmIAAgmIAFgCQABAAAAAAQABAAABAAQAAAAAAABQAAAAABAAIAGAvIADAeQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgDAAgJgJg");
	this.shape_100.setTransform(280.4531,74.9122);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3C553A").s().p("AgCBzIgFgsQgEgzADhyQAGgDgBgHQgCgKACgDQADA/AKBVQgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgFADIAAAmIAAAnIAAAIIAAABIgCgDg");
	this.shape_101.setTransform(279.5607,67.8931);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#3D5041").s().p("AAAABQgBgOgCgIIABgBIADAWQADAOAAAJIgEgWg");
	this.shape_102.setTransform(315.2536,79.625);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#314436").s().p("AAAgBQgBgZACABQACASgDAiQgBgKABgSg");
	this.shape_103.setTransform(319.45,84.0995);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#3C553A").s().p("AgBAwQgBgDAAgsQAAgqABgFQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIAAAuQAAAdgCASg");
	this.shape_104.setTransform(317.725,83.925);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#2E3835").s().p("AhSBbQAGgZgKg2QgMg8gBgGIADgMQABgFgBgFQABAAAAgBQABAAAAAAQAAAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAAAABAAQAAABAAAAQAEAQAIAhQADAIACAPIADAVQABgJgDgPIgFgVIgCgMQAGAEgBgMQgCgNAEABIAOAqQACABgBgMQgBgLADABQAEARAAgFIABgUIADAlQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQgBAFAAAqQAAArABAEIADAAQACgSAAgdIABgvIAAgHQAAAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAHIACACIAAACQABADAKADQAAAAAAAAQABAAAAgBQAAAAABgBQAAgBAAgBIABgHQABgCABgIQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgBAEQABADAGACIAAAGIABAEQACgJAHgUIAIgeQAEAFgDAKIgCAOQgDAwADgFIAbglQgHAYgDAbIADABIAVg/QANgoAMgWQgEAVgNAsQgJAlAEAbQAAABAAAAQAAgBABAAQAAAAABAAQAAgBABgBQALhEAEgOQABAAgBAhQgDAjAIADQADAAALgiQABARAJAfQAKAhAAARg");
	this.shape_105.setTransform(322.9,79.85);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#314436").s().p("AAAAfQgGgCgBgDIABgEQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAFgVAMgkQAAAZgJAyIAAgHg");
	this.shape_106.setTransform(320.975,76.45);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#314436").s().p("AAFAcQgJgDAAgDIAAgDIgCgCIAAgHQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIADghIAIABQAFAAADgCIgCArIgBAIQAAABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIAAAAg");
	this.shape_107.setTransform(319.05,77.8775);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#789248").s().p("AACAYQgEgfgCgXIAAgFIAFABQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIACBNg");
	this.shape_108.setTransform(339.05,73.875);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#516749").s().p("AAAgDIAAAAQABAHgBAAIAAgHg");
	this.shape_109.setTransform(357.9583,78.525);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#D7E9BE").s().p("AgBAFQABgIACgLQABAGgBAIIgCAPQgBAAAAgKg");
	this.shape_110.setTransform(296.645,27.075);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#314436").s().p("AAAgQQACAEABAKQAAAJACADQgBAHgIAAg");
	this.shape_111.setTransform(285.75,78.075);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#D8DFAD").s().p("AgCAPQAAhEACgBIACAQQACApAAAKQgBAOgFAbQgBgNABgag");
	this.shape_112.setTransform(297.6792,26.35);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D8DFAD").s().p("AgEAZQADggAEgbIACBGIgJgLg");
	this.shape_113.setTransform(352.2,25.15);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#6E9E4C","#84B54D"],[0,1],1.6,-20.3,0.1,1.4).s().p("AAPDKIgIgRQgDgKgBgaIgCglQgJhRgDgoIgHheQgFhHABgMQABgIADgKIAFgSIAIAHIAJALIACB2QABBJACAsQADBAALCBQgBgHgHgPg");
	this.shape_114.setTransform(352.2827,49.25);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#2E3835").s().p("AgCAGQgCgNAEACQACACACAJg");
	this.shape_115.setTransform(351.4275,88.2677);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#2E3835").s().p("AgFAMIAAgXIALAXg");
	this.shape_116.setTransform(352.625,87.725);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#3E603C","#374739"],[0.118,1],-0.8,-19.7,0.3,40.7).s().p("AAqGwIgMgXIAAAXIgCAAQgCgKgDgCQgEgCACAOIgFAAQgEgFAAgJIgBgOQgEgagMgPQgNgKAAgCQgDgGAKgpQALgrAAgIQgRAkgKA5IgEAWIgFgXIgLAaQgGgTAIgkQAKgsAAgMIgmBwIgDAAQACgSAMgoQgFADgFAHIgJALQAFgygBiOQAAh4ANhGQADgQARhBQAXhIADgVQAEgUADg5QADg6AEgWQACBTgFCMQgBgBgCAGIgLAoQgRBAgHA4QgHA5AABCQAKgTAFgpIAIhCIAXiSQAQgtAVhlQAUhhAUgxQgHAUgNBCQgOBCAAANIACAUIADAeIABAhIABAhIADALIANCDIAWD8QgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBACAAAgQAAAeABAIIgDAAQgCgHgGgcQgDgMgBARQAHAlgGArQgDgjgCgSQgFgegJgVIAFAyQADAdgBAUQgMg8gKgcQABANAKBCQAIAwgFAfg");
	this.shape_117.setTransform(349.025,45.675);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#516749").s().p("AAAgCIABAAIgBAGIAAgGg");
	this.shape_118.setTransform(300.45,77.65);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#638245").s().p("AAAAaQAAgqgBgRIgCgDIgBgJIACADQABABADgCIACAiQABAUgBANQgBAUgBACIAAAAQgCAAAAgUg");
	this.shape_119.setTransform(301.6188,74.8287);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7AAC4D").s().p("AgEAAIAOhYIAEAAQgCALgIBRQgFA5gLAdQgBgmAJg0g");
	this.shape_120.setTransform(309.2486,44.75);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#417545").s().p("AgCgHQABAAAEANIgDACIgCgPg");
	this.shape_121.setTransform(297.875,21.675);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C8E09F").s().p("AgDAPIADgdQABAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQgBAFABABIgEAWg");
	this.shape_122.setTransform(310.6275,34.2719);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#59924C").s().p("AAFAXIAAgQQgHgDgCAEQgDAFgCgBQAKgZACgNIAFgBQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAABQgFAkADAQIgBAAQgCAAAAgFg");
	this.shape_123.setTransform(355.25,26.4461);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#417545").s().p("AgEAWIADgvQAGAEAAAHIAAANIAAASQgBABgBAGQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAQgBAAgEgEg");
	this.shape_124.setTransform(324.925,30.8092);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#59924C").s().p("AAEAhQgBgEgGgBQADgIgFgvQgBgHACgCIAGAaQADAPABAfQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_125.setTransform(357.0083,25.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#59924C").s().p("AAAAYIADgDQgGgLgDABIAHglQADADABAEIACAIQgCAaAAAMQgFgCAAgBg");
	this.shape_126.setTransform(358.75,26.875);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#498148").s().p("AgKAiQAFgPAEgYIAIgnQABAAABAAQABAAAAAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAQgLAxgBAjQgBgJgIgDg");
	this.shape_127.setTransform(340.9,22.45);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#59924C").s().p("AADAWQgBgFgKgDQAEgaAAgdIAFgBIADAzIABABIAEAhIgCAAIgEgVg");
	this.shape_128.setTransform(342.9,25.275);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#7AAC4D").s().p("AghDqQAAgggFhAIgFhfQgBgZABgtIAAhIIgGiRIADABIADASQABACAEgIQAKgWgCgXIAOAsQABACAAAGQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAFQAAABABAAQAAAAAAgBQABAAAAgBQABgBABgBIAGgRIAEgSQAIADACAJQgBAoAEgFQAEgEAFgiQALADABAEIAFAWIABgBIAGAgIACABQgRBAgDAQQgNBHAAB4QAACOgFAyQgGhIgFgRQgBgEgBAAQAAABgBABQAAAAAAABQAAABgBAAQAAAAgBAAIgFAAQgDgqgChKIgFhzQgDAsgBBHIgBBzIgDA5QAAAXgBALg");
	this.shape_129.setTransform(339.575,51.625);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#417545").s().p("AgDBLIgEABQADgNABgTIABghQAHg6ABgeQADAIgCAnIgEAwQgDAlABAGQgBACAAAHIgBAIQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_130.setTransform(356.4031,16.125);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#59924C").s().p("AABAlQgEgCgGgDQAFgVACgyIACAEQADgIACAQIAAAdQAAAPADAAIABAWIgIgCg");
	this.shape_131.setTransform(361.4,24.95);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7AAC4D").s().p("AALCcIgCABQgFAZgFA+IgBAAIgclMIgOiDIgCgLIAIgdQACAAADgEQACgEAIADIAAAPQAAAIACgCIAGgGQAIABAAAEQAAABABAAQAAABAAABQAAAAABAAQAAABAAAAQADgFACgLQABgBAHALIgCADQgBABAGACQABAaALgoQAFADAFACIAJACQACAcADAIIgRBQQgJAqgBAqQgBAfAABiQAABSgFA7QgCAhgCALg");
	this.shape_132.setTransform(358.175,53.6857);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#417545").s().p("AgIBHQgBgKgNgkQgPglgJgJQAQAOAJAXQAFALAIAiIAXhLQAPgrARgcQgNAtgaBMIgKAfIgCAOQgBAFgHABIAEgQg");
	this.shape_133.setTransform(325.7625,8.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#417545").s().p("AgOBaIAJghQAAgDgJgbQgIgZgDgFQgEgJgPgWQAPAOAKAWQAHAPAIAcQAdhnAPgZQAGgKgCAGIgFAOIggBtIgHATIACAQQABAMgEgDQAAgNgCADIgDAPQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgDgBg");
	this.shape_134.setTransform(285.515,9.2275);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#498148").s().p("AgYBYIAJgoIAHgpQAJgfADgRQAHAAABgGIACgOIALgeIgGAVIgFASIAAA8QABA9gBAVIAAgNQAAgHgHgDIABg0QgBgfACgTIgCgBQgGAYgGAqQgIAyABAMQgGgFgGABg");
	this.shape_135.setTransform(324.05,21.575);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#417545").s().p("AgLB2QAAgLgDAAQgEALgBAJIgLgCQAEgMAKg9QAMhBAEgVQANgzAQgsIACAAIgKAeIgPBJQgKA4gCAOIgBAQQgCABAABFQgDgCABgKg");
	this.shape_136.setTransform(298.375,14.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#417545").s().p("AgECCIgCg0IgGABQAAg5gEAfQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQAKgiAAgEQAAgJgKgeQgKgigIgIQAPAMAIAfIAHAbQAIgVAMgsQAOgpANgVIgYBUIgWBGQgBAHADAsIADA3IgCgBg");
	this.shape_137.setTransform(343.725,13.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#498148").s().p("AAGB3IAAgfQgBgQgDAIIgDgDQABg0gCAGQgCACgJA2IgEAlIgCgIQgBgEgDgDIAIguIAKgpQAAgGgRglQgQgmgIgIQAZAaAQA2QAZhoAbgpQgHAQgRA8QgTA9AAAGQgBAKAGBwIAAAAQgCAAgBgOg");
	this.shape_138.setTransform(361.25,13.3258);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7AAC4D").s().p("AgPAVQAHg4AQhAIALgnQACgHABACQAAANABADIgXCRIgHBDQgFAogKAUQAAhDAHg5g");
	this.shape_139.setTransform(346.025,44.5359);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#7AAC4D").s().p("AgJgfQACgTAHgtQAIgoACgYQACACABAIQABAIACACIAAACQgJArgFBrQgDBkgOAvQgDh1AJhKg");
	this.shape_140.setTransform(332.9234,38.725);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7AAC4D").s().p("AABhfIAOg+IACgBIAAAmIABAAIgJBaQgGA3gCAhQgBAZgBA6IgHAJIgJAJQgDiKAVh0g");
	this.shape_141.setTransform(327.732,45.125);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#7AAC4D").s().p("AgWBKQAChaAIgzQADgXAJgqQAJgnAIgZQAGgVADABQgCAOABAUQgQAugKBcQgHBEgDBKIABBWIgHAQQgIAPAAADIADiQg");
	this.shape_142.setTransform(306,51.2994);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#7AAC4D").s().p("AgZDyIABgPIAEiyQAChoANhIQADgQAKgrQAKglACgXIACAAIAEADQgDAWgDAsIgJAvIgKAvQgHA1gEBeQgDBmgGAvIgFAiIAAAAQgBAAAAgFg");
	this.shape_143.setTransform(363.9188,55.9882);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#7AAC4D").s().p("AACCrQgCgQgEhHIgGhdQgCg4gChwIAEgqIAIAJQADAZABALQACAkAAA+IAABhIAEBgQADBHACATIACAMIgBABQgJghgDgQg");
	this.shape_144.setTransform(313.45,55.425);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7AAC4D").s().p("AgcD0QABgNAAgrIABhCQAGicAUhiIAPhDIAIgtQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQABAHACAAIgDAeQgCAXgCAMQgDAWgIAnIgLA8QgHAvgFBRQgGBegEAkIgFAiIAAAEg");
	this.shape_145.setTransform(288.025,55.655);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3F603C").s().p("AgSCpQgBgCgNgBQALigAVhbQAOgxAEgUIAFgVQAIAGABgEQAAgHABAAQABAOgCAMQgDAcgHAfIgNAzQgPBSgKCPIgCgMg");
	this.shape_146.setTransform(322.1,50.65);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#7AAC4D").s().p("AADCZIgFg7IgIiOQgFgoAAgUIAAglIADgkQAIgOAEgPIAMACQAAALACAAIgIBZQgEA/AFBgIAJCgQgJgZgEghg");
	this.shape_147.setTransform(295.2167,48.425);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#7AAC4D").s().p("AgQDgQAJgzAAgaQgNAkgEAXQgBAHgCADIAFhrQALiOAPhTIAMg0QAIgeACgcIACABQgBAVgFAmQgGApgBASQgBAcgBBDQgBBBgCAfQgDA1gGAeIgHAfQgIATgBAKIgBgDg");
	this.shape_148.setTransform(322.65,57.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#41623C","#3C4E39"],[0,1],2.9,-6.1,-8.7,19.2).s().p("AAOEmIgOgrQgEgBACANQACAMgGgEQgCgTgDhHIgEhgIAAhhQAAg+gCgkQAAgLgEgZQgBgMADgVIAEghQABgPgBgZIgBgpIADAbQgCAGAIAQQAGAPgCABQgDgGAAAFIABANIgEABQgFAkAGArIALBKQAIA6AFBmIAGCmIgBAUQgBAGgEgSQgCgBABALQABAMgCAAIAAAAg");
	this.shape_149.setTransform(315.4214,49.001);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#40683F","#374A36"],[0,1],9.9,-11.3,-15.6,20.4).s().p("AgOFNIAAgNQgQAAgCgBQAFg6AAhTQAAhiABggQABgqAJgoIAQhRQAQhBAEgfQADgTACgwQACgrAEgYQACAegBAtIgCBMIACAiQABAXgBAKIgCABQgCAWgJAlQgMArgDARQgMBGgCBqIgECxQgBgDABgKg");
	this.shape_150.setTransform(362.9,44.025);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#42683F","#384936"],[0,1],9.9,-7.2,-17.5,14.6).s().p("AgkFVIAHjWQAFh+AZhTQACgRACgIIAKgrIAIgqQADgZADgyQADgzADgXQADAegCAzQgCA9ABAUQAAAhACAfQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgJAsIgQBEQgTBggFCeIgCAAQgBAEAAAnQAAAngBAIg");
	this.shape_151.setTransform(286.875,42.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#7AAC4D").s().p("AgCETIgEggQgFgqgEg/IgGhqIgKhqQgGhFAEgkQAGgbABgPQABgJgDgqIADgCQADAMACAQIABAeQABAFADgMQADABAEAJIABADIABAFQADAEADAAIAAABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAKACgGQABgHAGgQIAHgUQADgMAAgUIABABQgFAvAUA+IgIAeQgHAYgCAPQgKA5AABbIACCWQgEACgBAAIgCgDIABAIQgFAZgBAlg");
	this.shape_152.setTransform(300.7286,49.775);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#7AAC4D").s().p("AgKEbIgCglIgHimQgFhmgHg6IgMhKQgGgrAEgkIAFgBIAEAjQAIgEgDgSQgCgNgFgMQACgBgHgPQgHgQACgGQACAPAMAYQANAbADAMQAEgKADgeQABgTADAQIADAaQABASABgBQACgJADgcQABgOADARIABAQQABAJABAGIAOg5QABABABA9QAFgBAHAGIAFATQAGARABAHQgFAVgPAwQgVBbgKCgQgDAngCApIgCAhIAAAIQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_153.setTransform(318.979,50.825);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#466C40","#3A5A3A","#384939"],[0,0.224,1],-1.5,-20.7,2.7,32).s().p("AAWFJQgBAPgJALQgIAJgCgDIAEg0QADgfgBgWIgCAAIgGA/QgHACgCgDQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgOArgFAIIgCAAQgBgCAEgaQAEgZACgGQgGAEgLgEQAGgvADhnQAEheAIg2IAKgtIAJgvQACgsADgWQACgQAFgRIAJgeQAJgkADg4IAFhcQAECOgFBZIgFAhIAAAfIACAeIgFAAIAAA3IAEA7IADA9QABAfgBA+IABBdQAAAOACAdIAAAeQAAASACALIgCABg");
	this.shape_154.setTransform(366.025,46.425);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#2E3835").s().p("AgCALQgFgXACACIALAVg");
	this.shape_155.setTransform(313.2077,87.7706);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#417545").s().p("AgCAOIAAgdIABABQABAEAEAXQgBABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgCgCg");
	this.shape_156.setTransform(278.25,29.0021);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#789248").s().p("AAAAFIgBgsQABgBAAgEQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAABAAIAABhQgCgSAAgag");
	this.shape_157.setTransform(370.675,63.1722);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#7AAC4D").s().p("AAAA1IgGhiIgBgeIAAgfIAEghIALgMQABCUgBCSQgBAAAAAAQgBAAAAABQAAAAAAABQgBABAAABQABAEgCABIgEhjg");
	this.shape_158.setTransform(370.0625,44);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#314436").s().p("AAADbIABgDQgFgJgBACIAAmuQAFADABgEQADATAAAVIgDAkQgBBXAGBdQgBAEABAJQABAHgFADQgCB0ADAyQgEgBABgDg");
	this.shape_159.setTransform(278.5327,52.65);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#2E3835").s().p("AhUBSIAAiZQABgBAGAJIgCADQgBADAFABIAEAsQABACABAAQAAABABABQAAAAAAgBQAAAAAAgBIgBgIQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABgDACgCQAPAPgBgIIgDgeIACAMQABAGABABIAAAQIALACIABAFIADgLQAFAAgBARQABACAHAFIACAGQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAQgEAMACAAQADgKADgVIAAgEQAJAAABgHIAQgTIgGAYQgEAPAAAGIAAAHIACgDQAHgKAJgjIAKgyQACAUgDAZIgFAsIACAAQAFgqATgwIACAAIgKAxQgGAcACAVQABADAHgIIAIgJQgBAJAGANIAJAWIAEAVQADALAHgRIAAAUg");
	this.shape_160.setTransform(286.425,80.675);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#2E3835").s().p("AhTBfQADgOgEgUQgDgBACgJIAKAeQAFgQgFgXQgGgagCgNIgCgfQgBgbADALIAGAnQAFAfAFANQgBgPADgbQADgeAAgKIgCgBIAIABIAFArQABgLAAgXQAGgBAHABQAJABADADIADAPIgChPQABAAACAEQAFARAGBIIAJgMQAFgHAEgDQgKAogCASIADAAIAkhwQAAAMgKAsQgIAjAGATIALgZIAGAXIADgXQAKg3ATglQgBAIgMAsQgJAoACAGQABABAMAKQAOAPAEAaIAAAPQABAJADAFg");
	this.shape_161.setTransform(341.885,79.4225);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#2E3835").s().p("AhPD4QAFgggIgwQgKhCgBgNQAKAdAMA8QABgVgDgdIgFgyQAJAVAFAfQACARADAkQAGgsgHglQABgRADAMQAGAdACAGIADAAQgBgIAAgeQAAgfABgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAHBRIAAAIQABAAAAgIQAFg/AFgZIACgBIgBBvQACgLADghQACABAPAAIAAANQAAAKAAADIAAAPQAAAHAAgBIAFgiQALAEAGgEQgCAGgEAZQgEAaABACIACAAQAFgJAOgqQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABABQACADAHgCIAHg/IACAAQABAWgDAfIgEA0QACADAIgJQAJgLABgQIARBDIACgBQgCgMAAgRIAAgeQgCgdAAgPIgBhcQABg9gBggIgDg8IgEg8IAAg3IAFAAIAFBjIAGBjIABAsQAAAZACASIAADRg");
	this.shape_162.setTransform(361.425,64.15);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.lf(["#466D41","#3A5A3A","#3A5939","#364639"],[0,0.184,0.22,1],6.1,-18.5,-1.9,40.4).s().p("AAVGuIAAgVQgIARgDgKIgEgWIgIgVQgFgNABgKIgJAKQgGAHgCgDQgBgWAFgcIALgxIgDAAQgSAwgFAsIgCAAIAFgtQACgagBgUIgLAzQgIAjgHAKIgDADIAAgGQABgHAEgQIAFgYIgQAUQgCgEgBgKQAAgJgDgEQAEgkAGheQAGhSAHgwIALg7QAJgnADgVQACgNABgXIADgdQACgQAHgVIAKgjQADgSAMhZQAKhIAOgnQgVBsgIClIgCAkIgBAlQABAUAFAoIAICOIAGA7QAEAhAJAZIgKigQgEhgADg/IAIhZIACgPQACgJgBgHQADAAAAALQgBALADABQgBAaABAOQgFAkAGBEIAKBrIAHBpQAEA/AFArQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBACABAaIAAAdIgDACQgCgBAAgbQAAgbgIgCIAAA+IgDAAQgBgcgGgpIgCgBIgBBUIgQhVQgFAeANA8QALAwgOARg");
	this.shape_163.setTransform(292.875,45.925);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#456C40","#374738"],[0,1],7.7,-17.2,-6.2,36.1).s().p("AAWGzQgBgRgJggQgKggAAgSQgLAjgDAAQgHgDACgjQACgigBAAQgFAOgLBGQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAAAQgEgcAJgmQANgsAEgVQgMAXgNAnIgVBAIgDgBQADgbAIgZIgcAmQgEAGADgxIAEgPQACgKgEgFQAGgeADg1QACggABhBQABhDABgcQABgRAGgpQAFgmABgWQABgaAQgtQASgvACgXIACgBIAABSIgCABIgNA+QgWB0ADCKIAJgJIAHgJQABg6ACgZQACghAGg3IAJhaQADgUAKggIASg0QAJgxAGgXQAWhYAYgvQgQAvgLAsIgMA2QgJAsAAAFIADAKIACAYQgCgCgBgIQgCgIgCgCQgCAYgHAoQgJAtgCATQgIBLADB0QAOgvAEhjQAEhsAKgrIADAXIgDgBIAGCRIAABHQgBAuABAZIAFBfQAFBAAAAgIgIgBIACABQAAAKgDAeQgDAcABAPQgFgNgFggIgGgnQgDgLABAbIACAgQACANAGAaQAFAXgFAQIgKgeQgCAJADABQAEAUgDAOg");
	this.shape_164.setTransform(330.6607,45.425);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#456E41","#384839","#2D3835"],[0,0.761,1],15.3,-7,-18.9,33.2).s().p("ABXG0IgMgXQgCgBAFAYIipAAQAOgRgLgwQgNg8AGgeIAQBVIAAhUIACABQAHApABAcIACAAIABg+QAIACAAAbQAAAbABABIAEgCIgBgdQAAgaABgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAEAgIAAAHIABgHQACglAFgZIACADQABARAAArQABAVACgBQABgCABgUQABgNgBgVIgCgiIgCiXQAAhbAKg5QACgPAHgYIAIgeIACgQQAFgBABgCIADgJIAYg7QASgtABgHQgBgZACgSQAGg7AkhNQgXA8gOBiIACAAQAGgXANgeIAWg0IACAAQgLAbgNArIgWBHQADARAAAFQACAmgCgGQgDgGgBgjIgCgBQgNAzgBAVQgEAAgFAVQgIAYgJAoQgJAqgDAWQgIAzgCBaIgDCQQAAgDAIgPIAHgPIgBhWQAChLAHhEQAKhbARguQAHgVATgkQAAAXgFAgIgEAeIgPBZQgJAzABAmQALgdAGg3QAIhTACgLIAEgYQAHgeAGgUQADATgCAfIgFAqQACBvADA4IAFBeQAFBHACAQQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAABQgBAAAAAAQABAFgBAGIgDALQAAAGAMA9QALA2gGAZg");
	this.shape_165.setTransform(305.1432,45.325);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D8DFAD").s().p("AgGAQQgDgQADgWIAIAHQACACAFgJIgHAUQgFAPgBAHIgBADQgBAAAAgHg");
	this.shape_166.setTransform(301.525,28.0508);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#498148").s().p("AAAAWIgBgFQAEhPgBBRIgCADIAAAAg");
	this.shape_167.setTransform(338.4327,27.4434);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#498148").s().p("AABg3QADAlgDBKQgFgzAFg8g");
	this.shape_168.setTransform(330.3,14.55);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#498148").s().p("AACBhQABgzgCgCIgEgBQABgPAAg2QAAgrACgbIAEDBg");
	this.shape_169.setTransform(280.95,18.35);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#789248").s().p("AgBAHIgBgFIAAgDQACgCAAgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIABATIgBAAQgDAAgBgDg");
	this.shape_170.setTransform(207.6,28.5153);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#417545").s().p("AARBBIABhfIgEgkIgCAAIgTBUQgOA4gCAZQgCAaACAMQgBABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAgBIAAgBIgBgUQgBgBAAAAQgBAAAAABQgBAAAAAAQAAABAAABQAAAEgDACQgEgJgEgBIAhiJQAThZAdgvQgDAOgWBBIAEAZQAEAbgBANIAACiIgDAJQAAADgHAAQACgUAChKg");
	this.shape_171.setTransform(210.575,15.95);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#D8DFAD").s().p("AgDgJIgCgNQAAgFADAGQAFAMACAMQADASgIAEIgDgig");
	this.shape_172.setTransform(222.6679,28.3286);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#3C553A").s().p("AgBAoIgIAAQABgoADgnQAMABACACQABACAAAKIgDA/QgDABgEAAIgBAAg");
	this.shape_173.setTransform(226.725,71.23);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#C8E09F").s().p("AAAgWQAAgHABgBQAFAvgDAIIgGAGQgCgSAFgjg");
	this.shape_174.setTransform(263.7027,26.175);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#ECE4C1").s().p("AgGA7QgEg3AMg5IAEgQQABgCAAANQACAZgCAeQgCAhgEAUQgCAQgCAEQgCgCgBgJg");
	this.shape_175.setTransform(191.9654,23.1548);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#59924C").s().p("AABAkQgFgBgDAAQAGgtABgaIAFABQABACAAAyIACAAIAAATIgDABIgEgBg");
	this.shape_176.setTransform(187.95,26.3875);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#59924C").s().p("AAGA9QAAgJgGgCQgHgBgGgCQAGgVAGgeIAIg1QAFACABgDQAAAAAAgBQAAgBABAAQAAgBAAAAQAAAAAAAAQgMA7AEA1QABAJABACg");
	this.shape_177.setTransform(190.7,23.95);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#59924C").s().p("AADBPQgFgLgIgEQAEgUACgiQACgdgCgZQAFADgBgMIgCgQIAHgTIgFARQABARADBAQACA3AFAYQgEAAgEgKg");
	this.shape_178.setTransform(193.175,21.725);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#7AAC4D").s().p("AgBD/IAAgqQABgqgCgOIgCAAIgGApQgDAaAAAQQgBgBgDgSIgGgwQgIhKgGhLQgHhmAChOQACgYAAgMQAEgCAFgkIABgHQACAAAGABQAGACABgCQADgDACgLQAHADAHABQAGACgBAJIADABQACgEAEgQQAIADAFALQAFAKADAAIACAHQABAFACABIgEAZQgZBUgGB+IgHDVIgCAVIAAADIgBAAg");
	this.shape_179.setTransform(190.3368,53.675);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#3F603C").s().p("AABByIgHgCIABhyQABhGADgtIADB0IAFByIAAAFQgCgDgEgBg");
	this.shape_180.setTransform(245.175,58.95);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#314436").s().p("AAAAbQgGgBgFABIACg5IAIACQAEABACADQACAYAFAfQgDgDgJgBg");
	this.shape_181.setTransform(245.425,73.25);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#3C553A").s().p("AgCALIABgGIADgUIABABIgFAeQgBAAABgFg");
	this.shape_182.setTransform(192.305,81.725);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#314436").s().p("AAFAwIgLgCIAAgQQAAgPAEgZIAEgqIACAAQADAOgBApIgBAqIACAAIgBAIIgBgFg");
	this.shape_183.setTransform(189.575,74.65);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#314436").s().p("AADBFIgCgFQgGgGgBgCIgBgKQAAgIgEAAIACgVIARACQABgIAAgnQAAgmABgEIACgBIgBBCQAAAqgBAOIgEAVIAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_184.setTransform(191.525,75.0286);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#314436").s().p("AgDAgIgDAFQgBAAAAABQAAAAgBAAQAAAAAAAAQgBABAAgBQADgygBgaIAEgCQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAGAvQgBANAEARQAAABAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQgDAAgJgJg");
	this.shape_185.setTransform(187.828,74.9122);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#3C553A").s().p("AgCBzIgEgsQgFg4AEhtQAFgDgBgHQgBgKABgDQAFBLAIBJQgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgEADQABAagCAzIAAAIIAAABIgCgDg");
	this.shape_186.setTransform(186.9111,67.8931);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#3D5041").s().p("AAAABIgDgWIAAgBIAEAWQADAOAAAJQgDgIgBgOg");
	this.shape_187.setTransform(222.6531,79.625);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#314436").s().p("AgBgBQABgZABABQADATgEAhIgBgcg");
	this.shape_188.setTransform(226.8313,84.0995);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#3C553A").s().p("AAAAwQgCgDAAgsQAAgqACgFQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAIAAAuQAAAdgCASg");
	this.shape_189.setTransform(225.075,83.925);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#2E3835").s().p("AhSBbQAHgZgMg2QgMg9ABgFQgBgDADgJQACgFgCgFQABAAABgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAAAABABQAAAAAAAAQAAABABAAQADAQAJAhIAEAXQABANADAIQAAgJgDgPIgEgVIgCgMQAGAEgDgMQgBgNAEABIAOAqQACABgBgMQAAgLACABQADARABgFIACgUIABAlQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQgCAFAAAqQAAArACAEIACAAQACgSAAgdIAAgvIAAgHQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAHQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIgBACQABADAJADQABAAABAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgHQADgCABgIQAAAAABAAQAAABAAAAQAAAAABAAQAAABgBAAIAAAEQAAADAHACIAAAGIAAAEIAJgdQAHgTACgLQAEAFgDAKIgDAOIgCAaQAAAVADgEIAbglQgHAYgEAbIAEABIAUg/QANgnAMgXQgFAVgMAsQgJAlAEAbQAAABABAAQAAgBAAAAQABAAAAAAQABgBAAgBIAHglQAGgmADgHIgCAhQgBAjAHADQADAAAMgiQAAARAKAfQAKAhAAARg");
	this.shape_190.setTransform(230.25,79.85);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#314436").s().p("AAAAfQgGgCAAgDIAAgEQABAAAAgBQgBAAAAAAQAAAAAAgBQgBAAAAAAQAEgYAMghQgBAfgIAsIAAgHg");
	this.shape_191.setTransform(228.35,76.45);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#314436").s().p("AAFAcQgIgDgCgDIACgDQgBAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAgHQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIADghIAHABQAGAAADgCIgCAzQAAABAAAAQgBABAAABQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_192.setTransform(226.4,77.8775);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#789248").s().p("AADAYQgFgegCgYIAAgFIAFABQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIABBNg");
	this.shape_193.setTransform(246.4,73.875);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#516749").s().p("AAAgDIAAAAIAAAHIAAgHg");
	this.shape_194.setTransform(265.3,78.525);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#D7E9BE").s().p("AgBAGIABgPQABgDAAgBQABgCAAAAQAAgBAAABQAAAAAAACQACALgEATQgDAAACgLg");
	this.shape_195.setTransform(204.023,26.947);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#314436").s().p("AAAgQQACAEABAKQAAAJACADQgBAHgIAAg");
	this.shape_196.setTransform(193.15,78.075);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#D8DFAD").s().p("AgDAPQAAhEADgBIACAQQACAmAAANQgBAOgGAbg");
	this.shape_197.setTransform(205.0792,26.35);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#D8DFAD").s().p("AgEAZQACgkAFgXIACBGg");
	this.shape_198.setTransform(259.6,25.15);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.lf(["#6E9E4C","#84B54D"],[0,1],1.6,-20.3,0.1,1.4).s().p("AAPDKIgIgRQgDgKgCgaIgBglQgJhRgDgoQgNihACgQQAAgIAEgKIAFgSIARASIACB2QAABHADAuIAGBhIAIBgQgBgIgHgOg");
	this.shape_199.setTransform(259.667,49.25);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#2E3835").s().p("AgDAGQgBgNAEACQACACACAJg");
	this.shape_200.setTransform(258.8046,88.2677);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#2E3835").s().p("AgFAMIAAgXIALAXg");
	this.shape_201.setTransform(260,87.725);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#3E603C","#374739"],[0.118,1],-0.8,-19.7,0.3,40.7).s().p("AAqGwIgMgXIgBAXIgBAAQgCgKgDgCQgEgCABAOIgEAAQgEgFAAgJIgBgOQgEgagMgPIgOgMQgCgGAKgpQALgrAAgIQgSAkgKA5IgDAWIgFgXIgLAaQgGgTAIgkQAKgtAAgLIgmBwIgDAAQADgXALgjQgFADgFAHIgJALQAFgzgBiNQAAh5ANhFQADgQARhBQAXhIADgVQAEgVADg4QADg7ADgVQADBbgFCEQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgBADIgLAoQgRBAgHA4QgHA5AABCQAKgTAFgpIAHhCIAYiSQAQgsAVhmQAThhAVgxQgHAUgOBCQgNBCAAANIAFAyIACBCIADALQADAsAKBXIAWD8QgEAAgBABQgBACAAAgQAAAeABAIIgCAAQgDgHgGgcQgCgMgBARQAHAjgHAtIgFg1QgEgegKgVIAGAyQADAdgBAUQgMg8gLgcQABAKALBFQAHAwgEAfg");
	this.shape_202.setTransform(256.425,45.675);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#516749").s().p("AAAgCIAAAAIAAAGIAAgGg");
	this.shape_203.setTransform(207.85,77.65);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#638245").s().p("AAAAaQAAgqgBgRIgCgDIAAgJIACADQABABADgCIABAiQABATgBAOQgBAUgBACIgBAAQgBAAAAgUg");
	this.shape_204.setTransform(208.9917,74.8287);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#7AAC4D").s().p("AgFAAIAPhYIADAAIgKBcQgEA5gLAdQgBgmAIg0g");
	this.shape_205.setTransform(216.6197,44.75);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#417545").s().p("AgCgHQABAAACAGIACAHIgDACIgCgPg");
	this.shape_206.setTransform(205.225,21.675);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C8E09F").s().p("AgDAPIADgdQABAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQgBAEABACIgEAWg");
	this.shape_207.setTransform(218.0028,34.2719);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#59924C").s().p("AAFAXIAAgQQgHgDgDAEQgCAFgCgBQAKgZACgNIAFgBIACADQgFAiACASIgBAAQgBAAAAgFg");
	this.shape_208.setTransform(262.65,26.4461);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#417545").s().p("AgFAWQADgPABggQAGAEAAAHIAAANIAAASIgCAHQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgFgEg");
	this.shape_209.setTransform(232.3,30.8092);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#59924C").s().p("AAEAhQAAgEgHgBQADgIgFgvQAAgIABgBIAHAaQACAPABAfQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_210.setTransform(264.4,25.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#59924C").s().p("AAAAYIACgDQgFgLgDABIAGglQAEADABAEIACAIIgCAmQgFgCAAgBg");
	this.shape_211.setTransform(266.125,26.875);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#498148").s().p("AgKAiIARhOQABAAABAAQABAAAAAAQABABAAAAQAAABAAAAQgBABAAAAQAAABAAABQAAAAAAAAQAAABABAAQgLAzgBAhQAAgJgJgDg");
	this.shape_212.setTransform(248.2778,22.45);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#59924C").s().p("AADAWQgBgFgKgDQAEgZABgeIAEgBIADAzIACABIADAhIgCAAIgEgVg");
	this.shape_213.setTransform(250.275,25.275);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#7AAC4D").s().p("AghDqIgFhgIgFhfQABhegBgwIgGiRIAEABIACASQABACAEgIQAKgWgBgXIAOAsIABAIQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAFQAAABABAAQAAAAAAgBQABAAAAgBQABgBABgBQACgDAJggQAIAEABAIQgBAoAEgFQAEgEAFgiQALADACAEIAEAWIACgBQACAVADALIACABQgRBAgDAQQgNBHAAB4QABCNgFAzQgGhIgGgRQgBgBAAgBQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAABAAABQAAAAgBABQAAABAAAAQgBAAAAAAIgGAAIgFh0IgFhzQgDAsAABHIgCBzIgCA5IgCAig");
	this.shape_214.setTransform(246.925,51.625);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#417545").s().p("AgDBLIgEABQACgMABgUIACghQAGg6ACgeQADAIgCAnIgEAwQgDAlABAGQgBABAAAIQgBABAAAHIgCgDg");
	this.shape_215.setTransform(263.8031,16.125);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#59924C").s().p("AgIAgQAFgVABgyIADAEQADgIAAAQIABAdQACAPABAAIACAWQgKgBgIgGg");
	this.shape_216.setTransform(268.75,24.95);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#7AAC4D").s().p("AALCcIgCABQgGAdgEA6IgBAAIgGhQIgWj8QgKhXgDgsIgDgLIAIgdQADAAACgEQACgEAIADIABAPQgBAIACgCIAHgGQAHABABAEQAAABAAAAQAAABABABQAAAAAAAAQAAABABAAIAEgQQACgBAGALIgCADQgBABAGACQABAOAEgGQADgGAEgQQAJAGAKABQACAcADAIIgRBQQgIAqgCAqQgBAhAABgQAABSgEA7QgDAhgCALg");
	this.shape_217.setTransform(265.525,53.6857);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#417545").s().p("AgJBHQAAgKgNgkQgOglgKgJQAQAOAJAXQAFANAIAgIAXhLQAPgrARgcQgTA+gUA7IgKAfIgCAOQgBAFgHABIADgQg");
	this.shape_218.setTransform(233.1625,8.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#417545").s().p("AgOBaIAIghQAAgDgIgbQgJgZgCgFQgFgLgNgUQAOAOALAWQAGAPAIAcQAehpAOgXQAGgKgCAGIgFAOIgfBtIgIATIACAQQACAMgFgDQAAgNgCADIgEAPQAAAAAAAAQAAABAAAAQgBABAAAAQAAABAAABQgBAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIgDgBg");
	this.shape_219.setTransform(192.9,9.2275);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#498148").s().p("AgYBYIAQhRQAJgfADgRQAHAAABgGIACgOIALgeIgHAVIgFASIABA8QABA9gBAVIAAgNQgBgHgGgDIAAg0IABgyIgBgBQgGAXgGArQgIAyABAMQgHgFgFABg");
	this.shape_220.setTransform(231.45,21.575);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#417545").s().p("AgLB2QABgLgEAAQAAgCAAAAQAAgBAAABQgBAAAAACQAAABgBADIgDAQIgMgCQAEgMAMg9QALhBAFgVQAKgtATgyIABAAIgKAeIgPBJQgLA5gBANIgBAQQgDABAABFQgCgCABgKg");
	this.shape_221.setTransform(205.75,14.85);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#417545").s().p("AgECCIgCg0IgGABQAAg4gEAeQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAgBABAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQAKgiAAgEQAAgJgKgeQgKgigIgIQAPAMAIAfIAIAbQAHgVANgsQAMgpAOgVIgYBUIgWBGQgBAHADAsIADA3IgCgBg");
	this.shape_222.setTransform(251.1,13.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#498148").s().p("AAGB3IgBgfQAAgQgDAIIgDgDQABg0gCAGQgBACgLA2IgEAlIgBgIQgBgEgEgDIAJguIAKgpQgBgGgQglQgRgmgHgIQAYAYARA4QAZhoAbgpQgHASgSA6QgSA9AAAGIABA5IAEBBIAAAAQgBAAgCgOg");
	this.shape_223.setTransform(268.65,13.3258);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#7AAC4D").s().p("AgPAVQAHg4AQhAIALgnIABgEQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAABQgBAKACAGIgXCRIgHBDQgFAogKAUQAAhDAHg5g");
	this.shape_224.setTransform(253.425,44.545);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#7AAC4D").s().p("AgJgfQACgTAHgtQAIgoACgYQABABACAJQABAIACACIAAACQgJArgFBrQgDBkgOAvQgCh5AIhGg");
	this.shape_225.setTransform(240.305,38.725);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#7AAC4D").s().p("AABhfIANg+IACgBIAAAmIACAAIgJBaIgIBYQgBAZgBA6IgHAJIgJAJQgDiLAVhzg");
	this.shape_226.setTransform(235.112,45.125);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#7AAC4D").s().p("AgWBKQAChaAIgzQADgXAJgqQAJgnAIgZQAHgVACABQgCASABAQQgRAugIBcQgIBDgCBLIABBWIgIAQQgHAPgBADIADiQg");
	this.shape_227.setTransform(213.375,51.2994);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#7AAC4D").s().p("AgZDyIABgPIAEiyQADhpAMhHIANg7QAKglADgXIACAAIADADQgDAWgDAsIgJAvIgJAvQgIA1gDBeQgEBlgGAwIgFAiIAAAAQgBAAAAgFg");
	this.shape_228.setTransform(271.2938,55.9882);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#7AAC4D").s().p("AACCrQgCgXgJidQgDg4gChwIAFgqIAIAJIABAOIACAWQACAigBBAIABBhIAEBgQADBGACAUIACAMIgBABQgJghgDgQg");
	this.shape_229.setTransform(220.8,55.425);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#7AAC4D").s().p("AgcD0QACgNAAgrIAAhCQAGiZAThlIAQhDIAIgtQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAGADABIgHBBQgDAWgIAnIgLA8QgHAvgFBRQgGBfgEAjIgEAiIAAAEg");
	this.shape_230.setTransform(195.4,55.655);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#3F603C").s().p("AgSCpQgBgCgNgBQALigAVhbIAIgjQAIgYACgKIAFgVQAIAGAAgEIACgHIgCAaQgCAcgHAfIgNAzQgPBOgKCTQAAgKgCgCg");
	this.shape_231.setTransform(229.5,50.65);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#7AAC4D").s().p("AADCZQgCgRgCgqIgJiOQgEgogBgUQAAgSADg3QAKgRACgMIAMACQgBALADAAIgIBZQgEA+AFBhIAJCgQgIgZgFghg");
	this.shape_232.setTransform(202.5964,48.425);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#7AAC4D").s().p("AgQDgQAJguAAgfQgMAhgFAaQgBAHgCADIAFhrQALiSAPhPIAMg0QAIgeACgcIACABQgBAVgFAmQgFApgBASQgCAegBBBQgBBCgCAeQgEA9gFAWQgBALgHAUIgJAdIAAgDg");
	this.shape_233.setTransform(230.025,57.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.lf(["#41623C","#3C4E39"],[0,1],2.8,-6.1,-8.7,19.2).s().p("AAOEmIgOgrQgEgBACANQACAMgGgEQgCgUgDhGIgEhgIgBhhQABhAgCgiIgCgWIgCgOQgBgMADgVIAEghIAAgoIgBgpIADAbQgCAGAIAQQAGAPgCABQgDgGAAAFIABANIgFABQgEAkAGArIALBKQAIA6AFBmIAGCmIgCAUQAAAGgEgSQgCgBABALQABAMgCAAIAAAAg");
	this.shape_234.setTransform(222.8214,49.001);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.lf(["#40683F","#374A36"],[0,1],9.9,-11.3,-15.6,20.4).s().p("AgPFNIAAgNQgPAAgCgBQAEg6AAhTQAAhhACghQABgqAJgoIAQhRIALgwQAGgdACgTQADgUADgvQACgrAEgYQADAygEBlIACAiQACAXgCAKIgCABQgCAWgKAlIgOA8QgLBGgDBqIgECxQgCgDABgKg");
	this.shape_235.setTransform(270.3,44.025);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.lf(["#42683F","#384936"],[0,1],9.9,-7.2,-17.5,14.6).s().p("AgkFVIAHjWQAFh+AZhTIADgZQAPg5AEgcQADgaADgxQADgzADgXQACAfgBAyIgCBRIADBAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgIAsIgQBEQgTBkgGCaIgBAAQgBAEAAAnQAAAngCAIg");
	this.shape_236.setTransform(194.275,42.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#7AAC4D").s().p("AgCETIgEggQgFgqgEg/IgGhqIgLhqQgGhFAFgkQAGgbABgPQABgNgDgmIADgCQACAIACAUIACAeQAAAFAEgMQADABAEAJIABADIABAFQACAEADAAIAAABQAAABABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIABAFQAAABAAAAQABAAAAAAQAAAAABAAQAAgBAAgBQABgHAGgQIAHgUQACgNAAgTIACABQgFAxAUA8IgIAeQgHAYgDAPQgJA6gBBaIADCWQgEACgBAAIgCgDIABAIQgEAVgCApg");
	this.shape_237.setTransform(208.1036,49.775);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#7AAC4D").s().p("AgKEbIgCglIgGimQgFhmgIg6IgMhKQgGgrAEgkIAFgBIAFAjQAHgEgDgSQgCgNgFgMQACgBgGgPQgIgQACgGQACAPAMAYQANAbADAMQAFgKACgeQACgTADAQIACAaQABASACgBQACgJACgcQABgOADARIADAfIAOg5QABABABA9QAGgBAGAGIAGATQAFASABAGQgCALgIAXIgJAjQgVBbgLCgQgDAngBApIgDAhIAAAIQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_238.setTransform(226.3375,50.825);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.lf(["#466C40","#3A5A3A","#384939"],[0,0.224,1],-1.4,-20.7,2.8,32).s().p("AAWFJQgBAPgJALQgIAJgCgDIAEg0QADgfgBgWIgCAAQgGAqAAAVQgHACgCgDQgBAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgOArgEAIIgDAAQgBgCAEgaQAEgZACgGQgGAEgLgEQAGgwAEhmQADhfAJg1IAJgtIAJgvQACgsADgWQADgQAFgRIAIgeQAJgkADg4IAFhcQAECUgFBTIgFAhQAAAKACAzIgEAAIAAA3IADA7IADA9QACA+gBB8IADArIgBAeQAAASACALIgBABg");
	this.shape_239.setTransform(273.375,46.425);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#2E3835").s().p("AgCALQgFgXACACIALAVg");
	this.shape_240.setTransform(220.6063,87.7675);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#417545").s().p("AgDAOIAAgdIABABQACAFAEAWQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_241.setTransform(185.625,29.0021);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#789248").s().p("AAAAFIgBgsQABgBAAgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAABAAIAABhQgCgSAAgag");
	this.shape_242.setTransform(278.075,63.1722);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#7AAC4D").s().p("AAAA1IgFhiQgDgyABgLIAEghIALgMIAAEmQAAAAgBAAQgBAAAAABQAAAAgBABQAAABAAABQABAEgBABQgBghgEhCg");
	this.shape_243.setTransform(277.4208,44);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#314436").s().p("AAADbIABgDQgFgJgCACIAAmuQAGADABgEQADAUgBAUQAAAMgCAYQgBBOAGBmQgBAEABAJQABAHgFADQgDBvAEA3QgEgBABgDg");
	this.shape_244.setTransform(185.9077,52.65);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#2E3835").s().p("AhVBSIAAiZQACgBAGAJIgCADQAAADAEABIAFAsQAAACABAAQABABAAABQAAAAAAgBQABAAgBgBIgBgIQABAAAAAAQAAAAABAAQAAgBAAAAQABAAAAgBIADgFQAPAPgBgIQgDgSABgMQACASABABIAAAQIAMACIABAFIABgIIAAgDQAEAAAAAIIABAJQABACAHAFIACAGQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIgBAHQgBAFACAAIAGgfIAAgEQAIAAACgHQAFgGAJgNIgFAYQgEAPgBAGIAAAHQABAAAAAAQAAAAABgBQAAAAABgBQAAAAABgBQAHgKAHgjIALgyQACAcgHA9IABAAQAEgnAUgzIACAAIgKAxQgGAcACAVQABADAHgIIAIgJQAAAJAFANIAJAWIADAVQAEALAHgRIAAAUg");
	this.shape_245.setTransform(193.8,80.675);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#2E3835").s().p("AhTBfQACgLgDgXQgDgBABgJQAGALAEATQAFgPgEgYQgHgagBgNIgCgfQgBgbADALIAGAnQAFAfAFANQgBgPADgbIADgoIgCgBIAIABIAEArIACgiQAGgBAHABQAIABAEADIACAPIgBhPQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQAGARAGBIIAJgMQAEgHAFgDQgKAjgCAXIACAAIAlhwQAAALgKAtQgIAjAGATIALgZIAGAXIADgXQAKg3ASglQgBAIgLAsQgKAoADAGIANALQANAPAFAaIAAAPQABAJADAFg");
	this.shape_246.setTransform(249.275,79.4225);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#2E3835").s().p("AhPD4QAEgggHgwQgLhFAAgKQAKAdAMA8QABgVgDgdIgGgyQAKAVAFAfIAEA1QAHgugHgjQABgRADAMQAFAdADAGIACAAQAAgIAAgeQAAgfAAgDQABgBAFAAIAFBRIABAIIAAgIQAGg7AGgdIACgBIgBBvQABgLADghQACABAPAAIAAANQgBAKABADIAAAPQgBAHABgBIAFgiQALAEAGgEQgCAGgEAZQgEAaABACIADAAQAEgJAOgqQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQADADAGgCQACgVAGgqIABAAQACAWgDAfIgEA0QACADAIgJQAJgLABgQIASBDIABgBQgCgMAAgRIABgeIgEgsQABh6gBg/IgDg8IgDg8IAAg3IAEAAIAGBjQAEBBABAiIABAsQABAZACASIAADRg");
	this.shape_247.setTransform(268.8,64.15);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.lf(["#466D41","#3A5A3A","#3A5939","#364639"],[0,0.184,0.22,1],6,-18.5,-1.9,40.4).s().p("AAVGuIAAgVQgIARgDgKIgEgWIgIgVQgFgNABgKIgJAKQgHAHgBgDQgBgWAFgcIALgxIgDAAQgTAzgFApIgBAAQAHg/gCgcIgKAzQgIAjgHAKQgBABAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIAAgGQAAgHAEgQIAGgYQgKAOgGAGQgCgEgBgKQAAgJgDgEQAEgjAGhfQAFhSAIgwIALg7QAIgmADgWIAHhBQACgPAHgWIAKgjQADgSAMhZQAJhIAOgnQgUBxgICgQgDA3AAASQABAUAEAoIAJCOQADAqACARQAFAhAIAZIgJigQgFhhAEg+IAIhZQAEgUgBgLQADAAAAALQgBALACABIAAAoQgEAkAGBEIAKBrIAHBpQAEA/AFArQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBACABAaIAAAdQAAAAAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQgCgBAAgbQAAgbgIgCIgBA+IgCAAQgBgcgHgpIgCgBIAABUIgQhVQgFAeANA8QAKAwgNARg");
	this.shape_248.setTransform(200.275,45.925);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.lf(["#456C40","#374738"],[0,1],7.7,-17.2,-6.2,36.1).s().p("AAWGzQAAgRgKggQgKggAAgSQgLAjgCAAQgIgDACgjIABgiQgDAIgGAmIgHAmQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAQgEgcAJgmQANgsAEgVQgMAXgNAnIgUBAIgEgBQAEgbAHgZIgcAmQgDAEABgUIABgbIAEgPQADgKgFgFQAFgWAEg9QACgfABhCQABhCACgdQABgRAFgpQAFgmABgWQABgaAQgtQASgvACgXIACgBIAABSIgCABIgNA+QgWBzADCLIAJgJIAHgJQABg6ACgZIAIhYIAJhaQADgVALgfIARg0IAIgkIAHgkQAYhaAXgtQgPAqgNAxIgLA2QgKAsABAFIACAKIACAYQgCgCgBgIQgCgJgBgBQgCAYgIAoQgIAtgCATQgIBHACB4QAOgvAEhjQAFhsAJgrIAEAXIgEgBIAGCRQABAvgBBfIAFBfIAFBgIgIgBIACABIgDAoQgDAcABAPQgEgNgFggIgHgnQgDgLABAbIACAgQACANAGAaQAFAYgFAPQgFgTgFgLQgCAJADABQAEAXgDALg");
	this.shape_249.setTransform(238.0464,45.425);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.lf(["#456E41","#384839","#2D3835"],[0,0.761,1],15.3,-7,-18.9,33.2).s().p("ABXG0IgMgXQgCgCAFAZIipAAQAOgRgLgwQgNg8AGgeIAQBVIAAhUIACABQAGApABAcIADAAIABg+QAHACAAAbQAAAbACABQABAAABgBQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgdQgBgaABgCQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIAEAgIAAAHIABgHQADgpAEgVIACADQABARAAArQABAVABgBQACgCABgUQABgOgBgUIgCgiIgDiXQABhbAJg5QADgPAHgYIAIgeIACgQQAFgBABgCIACgJQArhkABgLQgBgZACgSQAGg7AjhNQgVA5gPBlIABAAQAHgXAMgeIAXg0IACAAQgMAbgNArIgVBHIADAWQABAmgCgGQgCgFgBgkIgCgBQgMAwgDAYQgCAAgHAVQgHAYgKAoQgJAqgDAWQgHAzgCBaIgDCQQAAgDAIgPIAHgPIgBhWQAChMAHhDQAKhbAQguQAKgbARgeQAAAXgFAgIgEAeIgQBZQgIAzABAmQALgdAFg3IAKheIAFgYQAGgfAHgTQACARgCAhIgEAqQACBvACA4QAKCeADAXQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAABQgBAAAAAAQABAFgCAGQgCAIAAADQAAAFAMA+QALA2gHAZg");
	this.shape_250.setTransform(212.5182,45.325);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#D8DFAD").s().p("AgGAVIgBgFQgCgNACgZIAJAHQACACAFgJIgHAUQgFAPgBAHIgCADIAAgCg");
	this.shape_251.setTransform(208.925,28.0521);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#498148").s().p("AAAAVIgBgFQACgmABABQABABgBAmIgCAEIAAgBg");
	this.shape_252.setTransform(245.7833,27.5175);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#498148").s().p("AAAg3QAEApgEBGQgDgzADg8g");
	this.shape_253.setTransform(237.7,14.55);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#498148").s().p("AADBhQgBgzAAgCIgFgBIABhFQABgsACgaIADDBg");
	this.shape_254.setTransform(188.3,18.35);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#789248").s().p("AgBAHIgBgFIgBgDQADgCAAgEQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAABAAIABATIgBAAQgDAAgBgDg");
	this.shape_255.setTransform(114.975,28.5153);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#417545").s().p("AARBBQAChMgCgTIgDgkIgCAAIgTBUQgOA4gCAZQgDAWADAQQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIAAgBIgBgUQgBgBAAAAQgBAAAAABQgBAAAAAAQAAABAAABQAAAEgEACQgDgJgDgBIAfiJQAUhYAdgwQgEAOgVBBQAIAqgBAXIAACiIgDAJQgBADgGAAQACgUAChKg");
	this.shape_256.setTransform(117.95,15.95);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D8DFAD").s().p("AgEgJIgBgNQAAgFADAGQAFAMACAMQACASgHAEIgEgig");
	this.shape_257.setTransform(130.0563,28.3286);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#3C553A").s().p("AgBAoIgJAAIAFhPQAMABACACIACAMIgEA/QgCABgEAAIgCAAg");
	this.shape_258.setTransform(134.1,71.23);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C8E09F").s().p("AAAgWIABgIQAFAwgDAHIgFAGQgCgQAEglg");
	this.shape_259.setTransform(171.0913,26.175);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#ECE4C1").s().p("AgGA7QgEg3AMg5IAEgQQABgCABANQABAYgCAfQgBAggFAVIgBAKQgBAGgCAEQgDgDAAgIg");
	this.shape_260.setTransform(99.3388,23.1548);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#59924C").s().p("AABAkQgFgBgDAAQAGgtABgaIAFABQABACAAAyIACAAIAAATIgCABIgFgBg");
	this.shape_261.setTransform(95.325,26.3875);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#59924C").s().p("AAFA9QABgJgFgCQgIgBgGgCQAGgVAGgeIAIg1QAEACABgDQAAAAABgBQAAgBAAAAQABgBAAAAQAAAAAAAAQgNA6AEA2QABAIACADg");
	this.shape_262.setTransform(98.1,23.95);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#59924C").s().p("AACBPQgEgLgIgEQAEgUACgiQABgegBgYQAFADgBgMIgCgQIAGgTIgEARQABAQACBBQACA3AGAYQgEAAgFgKg");
	this.shape_263.setTransform(100.55,21.725);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#7AAC4D").s().p("AgCD/IABgqQABgqgDgOIgBAAIgGApQgDAaAAAQQgCgBgBgGIgBgMIgGgwQgKhWgEg/QgGhdAAhXIADgkQADgCAFgkIABgHQADAAAGABQAGACABgCIAFgOQAHADAHABQAGACgBAJIADABQACgEABgGIACgKQAIADAGALQAEAKAEAAQACALADACQgCAIgCARQgaBUgFB+IgHDVIgCAVIAAADg");
	this.shape_264.setTransform(97.7231,53.675);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#3F603C").s().p("AABByIgHgCIABhyQABhGADgtIADB0QACBJADApIAAAFQgCgDgEgBg");
	this.shape_265.setTransform(152.575,58.95);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#314436").s().p("AAAAbQgGgBgFABIACg5IAIACQAEABACADQACAZAFAeQgDgDgJgBg");
	this.shape_266.setTransform(152.825,73.25);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#3C553A").s().p("AgCALIACgGIACgUIABABQgDAVgCAJQAAAAAAAAQAAAAAAgBQAAgBAAgBQAAAAAAgCg");
	this.shape_267.setTransform(99.675,81.725);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#314436").s().p("AAEAwIgKgCIAAgQQAAgQAEgYIAEgqIACAAQADAOgBApIgBAqIACAAIgCAIIgBgFg");
	this.shape_268.setTransform(96.975,74.65);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#314436").s().p("AADBFIgCgFQgHgGAAgCQAAgSgFAAIACgVIARACQABgIAAgnQAAgmABgEIACgBIgBBCQAAArgBANIgEAVIAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_269.setTransform(98.925,75.0286);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#314436").s().p("AgDAgIgDAFQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAgBIABgmIAAgmIAFgCQABAAABAAQAAAAABAAQAAAAAAABQAAAAABAAIAGAvIADAeQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgDAAgJgJg");
	this.shape_270.setTransform(95.2031,74.9122);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#3C553A").s().p("AgCBzIgFgsQgEgzADhyQAGgDgBgHQgCgKACgDQADA/AKBVQgBgBAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIgFADIAAAmIAAAnIAAAIIAAABIgCgDg");
	this.shape_271.setTransform(94.3107,67.8931);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#3D5041").s().p("AAAABQgBgOgCgIIABgBIADAWQADAOAAAJIgEgWg");
	this.shape_272.setTransform(130.0036,79.625);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#314436").s().p("AgBgBQAAgZACABQACASgDAiQgBgKAAgSg");
	this.shape_273.setTransform(134.2,84.0995);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#3C553A").s().p("AAAAwQgCgDAAgsQAAgqACgFQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIAAAuQAAAdgCASg");
	this.shape_274.setTransform(132.475,83.925);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#2E3835").s().p("AhSBbQAHgZgMg2QgMg9ABgFIACgMQACgFgCgFQABAAAAgBQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAAAAAABQABAAAAAAQAAABABAAQACAQAJAhQADAIABAPIAFAVQAAgJgDgPIgFgVIgBgMQAFAEgCgMQgBgNAEABIAOAqQACABgBgMQgBgLADABQADARABgFIABgUIACAlQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgCAFAAAqQAAArACAEIACAAQACgSAAgdIABgvIAAgHQAAAAABAAQAAAAABABQAAAAAAABQABAAAAABIgBAHIACACIAAACQABADAJADQABAAAAAAQABAAAAgBQAAAAABgBQAAgBAAgBIABgHQABgCABgIQABAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIgBAEQABADAHACIAAAGIAAAEQACgJAHgUIAJgeQADAFgDAKIgCAOQgEAwAFgFIAbglQgIAYgDAbIADABIAVg/QANgoAMgWQgFAVgMAsQgJAlAEAbQAAABAAAAQABgBAAAAQABAAAAAAQABgBAAgBQALhEAFgOQABAAgCAhQgDAjAIADQADAAAMgiQAAARAKAfQAKAhgBARg");
	this.shape_275.setTransform(137.65,79.85);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#314436").s().p("AAAAfQgGgCgBgDIABgEQAAAAAAgBQAAAAAAAAQAAAAgBgBQAAAAgBAAQAFgVAMgkQAAAZgJAyIAAgHg");
	this.shape_276.setTransform(135.725,76.45);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#314436").s().p("AAFAcQgIgDgBgDIAAgDIgDgCIABgHQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIACghIAIABQAGAAADgCIgCArIAAAIQgBABAAAAQAAABAAABQgBAAAAABQAAAAgBAAIAAAAg");
	this.shape_277.setTransform(133.8,77.8775);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#789248").s().p("AADAYQgFgcgCgaIAAgFIAEABQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBIACBNg");
	this.shape_278.setTransform(153.8,73.875);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#516749").s().p("AAAgDIAAAAQABAHgBAAIAAgHg");
	this.shape_279.setTransform(172.7083,78.525);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#D7E9BE").s().p("AgBAFQABgIACgLQABAGgBAIIgCAPQgBAAAAgKg");
	this.shape_280.setTransform(111.395,27.075);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#314436").s().p("AAAgQQACAEAAAKQABAJACADQgBAHgIAAg");
	this.shape_281.setTransform(100.5,78.075);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#D8DFAD").s().p("AgDAPQAAhEADgBIABAQQADApgBAKQgBAOgFAbg");
	this.shape_282.setTransform(112.4542,26.35);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#D8DFAD").s().p("AgEAZQADggAFgbIABBGg");
	this.shape_283.setTransform(166.95,25.15);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.lf(["#6E9E4C","#84B54D"],[0,1],1.6,-20.3,0.1,1.4).s().p("AAPDKIgIgRQgDgKgBgaIgCglQgJhRgDgoIgHheQgFhHABgMQABgIADgKIAFgSIAIAHIAJALIACB2QABBJACAsQADBAALCBQgBgHgHgPg");
	this.shape_284.setTransform(167.0327,49.25);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#2E3835").s().p("AgCAGQgCgNAEACQADACABAJg");
	this.shape_285.setTransform(166.1667,88.2677);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#2E3835").s().p("AgFAMIAAgXIALAXg");
	this.shape_286.setTransform(167.375,87.725);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.lf(["#3E603C","#374739"],[0.118,1],-0.8,-19.7,0.3,40.7).s().p("AAqGwIgMgXIAAAXIgCAAQgBgKgEgCQgEgCACAOIgFAAQgEgFAAgJQAAgKgBgEQgEgagMgPQgNgKAAgCQgDgGAKgpQALgrAAgIQgRAkgKA5IgEAWIgFgXIgLAaQgGgTAIgkQAKgsAAgMIgmBwIgDAAQACgUAMgmQgFADgFAHIgJALQAFgygBiOQAAh4ANhGQADgQARhBQAXhIAEgVQADgUADg5QADg5AEgXQACBTgFCMQgBgBgCAGIgLAoQgRBAgHA4QgHA5AABCQAKgTAFgpIAIhCIAXiSQAQgtAVhlQAUhhAUgxQgHAUgNBCQgOBCAAANIACAUIADAeIABAhIABAhIADALIAOCDIAVD8QgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgBACAAAgQAAAeABAIIgDAAQgCgHgGgcQgDgMgBARQAHAlgGArQgDgjgCgSQgFgegJgVIAFAyQADAdgBAUQgMg8gKgcQABANAKBCQAIAwgFAfg");
	this.shape_287.setTransform(163.775,45.675);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#516749").s().p("AAAgCIABAAIgBAGIAAgGg");
	this.shape_288.setTransform(115.2,77.65);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#638245").s().p("AAAAaQAAgqgBgRIgCgDIgBgJIACADQACABACgCIACAiQABAUgBANQgBAUgBACIAAAAQgCAAAAgUg");
	this.shape_289.setTransform(116.3688,74.8287);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#7AAC4D").s().p("AgEAAQAKg7AEgdIAEAAQgCALgIBRQgFA5gLAdQgBgmAJg0g");
	this.shape_290.setTransform(123.9986,44.75);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#417545").s().p("AgCgHQABAAAEANIgDACIgCgPg");
	this.shape_291.setTransform(112.625,21.675);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#C8E09F").s().p("AgDAPIAEgdQABAAAAAAQABAAABAAQAAAAAAAAQAAABAAAAQgBAEABACIgEAWg");
	this.shape_292.setTransform(125.3778,34.2719);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#59924C").s().p("AAGAXIgBgQQgHgDgCAEQgDAFgCgBQAKgZADgNIADgBQABAAAAAAQABAAAAABQAAAAAAAAQABABAAABQgEAkABAQIAAAAQgCAAABgFg");
	this.shape_293.setTransform(170,26.4461);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#417545").s().p("AgFAWIAEgvQAFAEAAAHIABANIAAASQAAABgCAGQAAAAAAABQAAAAgBAAQAAAAAAAAQAAABgBAAQgBAAgFgEg");
	this.shape_294.setTransform(139.7,30.8092);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#59924C").s().p("AAEAhQAAgEgHgBQADgIgFgvQgBgHACgCIAGAaQADAPABAfQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAgBgBg");
	this.shape_295.setTransform(171.7583,25.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#59924C").s().p("AAAAYIADgDQgHgLgCABIAGglQAFADABAEIABAIQgDAaABAMQgFgCAAgBg");
	this.shape_296.setTransform(173.5,26.875);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#498148").s().p("AgKAiQAFgPAFgYIAIgnQAAAAABAAQABAAAAAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAQgLAxAAAjQgCgJgIgDg");
	this.shape_297.setTransform(155.65,22.45);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#59924C").s().p("AADAWQgCgFgJgDQAFgaAAgdIAEgBIADAzIACABIADAhIgCAAIgEgVg");
	this.shape_298.setTransform(157.65,25.275);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#7AAC4D").s().p("AghDqQAAgggFhAIgFhfQgBgZABgtIAAhIIgGiRIADABIADASQABACAEgIQAKgWgCgXIAOAsIABAIQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABAFQAAABABAAQAAAAAAgBQABAAAAgBQABgBABgBIAGgRIAEgSQAIADACAJQgBAoAEgFQAEgEAFgiQALADABAEIAFAWIABgBIAGAgIACABQgRBAgDAQQgNBHAAB4QAACOgFAyQgGhIgFgRQgBgEgBAAQAAABgBABQAAAAAAABQAAABgBAAQAAAAgBAAIgFAAQgDgqgChKIgFhzQgDAsgBBHIgBBzIgCA5IgCAig");
	this.shape_299.setTransform(154.325,51.625);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#417545").s().p("AgDBLIgEABQADgNABgTIABghQAHg6ABgeQADAIgCAnIgEAwQgDAlABAGQgBACAAAHIgBAIQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAg");
	this.shape_300.setTransform(171.1531,16.125);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#59924C").s().p("AABAlQgEgCgFgDQAEgVABgyIAEAEQADgIAAAQIABAdQAAAPADAAIACAWIgJgCg");
	this.shape_301.setTransform(176.15,24.95);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#7AAC4D").s().p("AALCcIgCABQgFAZgFA+IgBAAIgclMIgOiDIgCgLIAIgdQACAAADgEQACgEAIADIAAAPQAAAIACgCIAGgGQAIABABAEQAAABAAAAQAAABAAABQABAAAAAAQAAABAAAAQADgFACgLQABgBAHALIgCADQgBABAGACQABAaALgoQAFADAFACIAJACQACAcADAIIgRBQQgJAqgBAqQgBAfAABiQAABSgFA7QgCAjgCAJg");
	this.shape_302.setTransform(172.925,53.6857);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#417545").s().p("AgIBHQgBgKgNgkQgPgmgJgJQAQAOAJAYQAFALAIAiIAXhLQAPgrARgcQgSA+gVA7IgKAfIgCAOQgBAFgHABIAEgQg");
	this.shape_303.setTransform(140.5125,8.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#417545").s().p("AgOBaIAJghQAAgDgJgbQgIgZgDgFIgSgfQAOAOALAWQAGAOAIAdQAbhjARgdQAGgKgCAGIgFAOIggBtIgHATIACAQQABAMgEgDQAAgNgCADIgDAPQgBAAAAAAQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgDgBg");
	this.shape_304.setTransform(100.29,9.2275);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#498148").s().p("AgYBYIAJgoIAIgpQAIgfADgRQAHAAABgGIACgOIALgeIgGAVIgGASIABA8IAABSIgBgNQAAgHgGgDIABg0QAAgfABgTIgCgBQgFAYgHAqQgIAyABAMQgHgFgFABg");
	this.shape_305.setTransform(138.8,21.575);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#417545").s().p("AgLB2QAAgLgDAAQgEALgBAJIgLgCQAEgMAKg9QAMhBAEgVQANgzAQgsIACAAIgKAeIgPBJQgKA4gCAOIgBAQQgCABAABFQgDgCABgKg");
	this.shape_306.setTransform(113.125,14.85);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#417545").s().p("AgECCIgCg0IgGABQAAg5gEAfQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQAKgiAAgEQAAgJgKgeQgKgigIgIQAPAMAIAfIAHAbQAIgVAMgsQAOgpANgVIgYBUQgDAMgTA6QgBAHADAsIADA3IgCgBg");
	this.shape_307.setTransform(158.475,13.2);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#498148").s().p("AAGB3IAAgfQgBgQgDAIIgDgDQABg0gCAGQgCACgKA2IgDAlIgCgIQgBgEgEgDIAIguIAKgpQAAgGgQglQgRgmgHgIQAYAaARA2QAYhoAcgpQgGAPgTA9QgSA8gBAHQAAAKAGBwIAAAAQgDAAAAgOg");
	this.shape_308.setTransform(176.025,13.3258);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#7AAC4D").s().p("AgPAVQAHg3AQhBIALgnQACgHABACQAAANABADIgXCRIgHBDQgFAogKAUQAAhCAHg6g");
	this.shape_309.setTransform(160.7984,44.5359);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#7AAC4D").s().p("AgJgfQACgTAHgtQAIgoACgYQACACABAIQABAIACACIAAACQgJAqgFBsQgDBkgOAvQgDh1AJhKg");
	this.shape_310.setTransform(147.6734,38.725);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#7AAC4D").s().p("AABhfIAOg+IACgBIAAAmIABAAIgJBaQgGA3gCAhQgBAZgBA6IgHAJIgJAJQgDiKAVh0g");
	this.shape_311.setTransform(142.482,45.125);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#7AAC4D").s().p("AgVBKQAChaAHgzQADgXAJgqQAJgnAIgZQAFgVAEABQgCASABAQQgQAugKBcQgHBEgCBKIAABWIgHAQQgIAPAAADIAEiQg");
	this.shape_312.setTransform(120.75,51.2994);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#7AAC4D").s().p("AgZDyIABgPIAEiyQAChoANhIQADgQAKgrQAKglACgXIACAAIAEADQgDAWgDAsIgJAvIgKAvQgHA1gEBeQgDBmgGAvIgFAiIAAAAQgBAAAAgFg");
	this.shape_313.setTransform(178.6688,55.9882);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#7AAC4D").s().p("AACCrQgCgQgEhHIgFhdQgDg4gChwIAFgqIAIAJQADAZAAALQABAkAAA+IABBhIAEBgQADBHACATIACAMIgBABQgJghgDgQg");
	this.shape_314.setTransform(128.2,55.425);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#7AAC4D").s().p("AgcD0QABgNAAgrIABhCQAGiZAUhlIAPhDIAIgtQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAQABAHACAAIgDAeQgCAXgCAMIgLA9QgIAogDAUQgHAwgFBQQgGBggEAiIgFAiIAAAEg");
	this.shape_315.setTransform(102.775,55.655);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#3F603C").s().p("AgSCpQgBgCgOgBQAMihAVhaIAShFIAFgVQAIAGAAgEQACgHABAAIgCAaQgDAcgIAfIgMAzQgPBSgKCPIgCgMg");
	this.shape_316.setTransform(136.875,50.65);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#7AAC4D").s().p("AADCZIgFg7IgIiOQgFgoAAgUIAAglIADgkQAIgOAEgPIAMACQAAALACAAIgIBZQgEA/AFBgIAJCgQgJgZgEghg");
	this.shape_317.setTransform(109.9667,48.425);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#7AAC4D").s().p("AgQDgQAJgzAAgaQgNAkgFAXQgBAHgBADIAFhrQAKiOAPhTIANg0QAIgeACgcIACABQgBAVgFAmQgGApgBASQgBAcgBBDQgBBBgCAfQgDA1gGAeIgIAfQgHATgCAKIAAgDg");
	this.shape_318.setTransform(137.425,57.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.lf(["#41623C","#3C4E39"],[0,1],2.9,-6.1,-8.7,19.2).s().p("AAOEmIgOgrQgEgBACANQACAMgGgEQgCgTgDhHIgEhgIAAhhQAAg+gCgkQAAgLgEgZQgBgMADgVIAEghQABgPgBgZIgBgpIADAbQgCAGAIAQQAGAPgCABQgDgGAAAFIABANIgEABQgFAkAGArIALBKQAIA6AFBmIAGCmIgBAUQgBAGgDgSQgDgBABALQABAMgCAAIAAAAg");
	this.shape_319.setTransform(130.1714,49.001);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.lf(["#40683F","#374A36"],[0,1],9.9,-11.3,-15.6,20.4).s().p("AgOFNIAAgNQgPAAgDgBQAFg6gBhTQAAhiABggQACgqAIgoIARhRQAQhBAEgfQACgTADgwQACgrAEgYQACAegBAtIgBBMIABAiQABAXgBAKIgBABQgDAWgKAlQgKArgDARQgMBGgDBqIgDCxQgCgDABgKg");
	this.shape_320.setTransform(177.65,44.025);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.lf(["#42683F","#384936"],[0,1],9.9,-7.2,-17.5,14.6).s().p("AgkFVIAHjWQAFh+AZhTQACgRACgIIAKgrIAIgqQADgZADgyQADgzADgXQADAegCAzQgCA9ABAUQAAAhACAfQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgJAsIgQBEQgTBkgFCaIgCAAQgBAEAAAnQAAAngBAIg");
	this.shape_321.setTransform(101.625,42.7);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#7AAC4D").s().p("AgCETIgEggQgFgqgEg/IgGhqIgKhqQgGhFAEgkQAGgbABgPQABgJgDgqIADgCQADAMACAQIABAeQABAFADgMQADABAEAJIABADIABAFQADAEADAAIAAABQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAKACgGQABgHAGgQIAHgUQADgMAAgUIABABQgFAvAUA+IgIAeQgHAYgCAPQgKA5AABbIACCWQgDACgCAAIgCgDIABAIQgFAZgBAlg");
	this.shape_322.setTransform(115.4786,49.775);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#7AAC4D").s().p("AgKEbIgCglIgHimQgFhmgHg6IgMhKQgGgrAEgkIAFgBIAEAjQAIgEgDgSQgCgNgFgMQACgBgHgPQgHgQACgGQACAPAMAYQANAbADAMQAEgKADgeQABgTADAQIADAaQABASABgBQACgJADgcQABgOADARIABAQQABAJABAGIAOg5QABABABA9QAFgBAHAGIAFATQAGARABAHIgTBFQgWBbgKCgIgFBQIgCAhIAAAIQgBAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_323.setTransform(133.729,50.825);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.lf(["#466C40","#3A5A3A","#384939"],[0,0.224,1],-1.5,-20.7,2.7,32).s().p("AAWFJQgBAPgJALQgIAJgCgDIAEg0QADgfgBgWIgCAAIgGA/QgHACgCgDQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQgOArgFAIIgCAAQgBgCAEgaQAEgZACgGQgGAEgLgEQAGgvADhnQAEheAIg2IAKgtIAJgvQACgsADgWQACgQAFgRIAJgeQAJgkADg4IAFhcQAECOgFBZIgFAhIAAAfIACAeIgFAAIAAA3IAEA7IADA9QABAfgBA+IABBdQAAAOACAdIAAAeQAAASACALIgCABg");
	this.shape_324.setTransform(180.775,46.425);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#2E3835").s().p("AgCALQgFgXACACIALAVg");
	this.shape_325.setTransform(127.9577,87.7706);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#417545").s().p("AgDAOIAAgdIACABQABAEADAXQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_326.setTransform(93,29.0021);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#789248").s().p("AAAAFIgBgsQABgBAAgEQAAgBAAgBQAAgBAAAAQAAgBABAAQAAAAABAAIAABhQgCgSAAgag");
	this.shape_327.setTransform(185.425,63.1722);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#7AAC4D").s().p("AAAA1IgGhiIgBgeIAAgfIAEghIALgMQABCUgBCSQgBAAAAAAQgBAAAAABQAAAAAAABQgBABAAABQABAEgCABIgEhjg");
	this.shape_328.setTransform(184.8125,44);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#314436").s().p("AAADbIABgDQgFgJgBACIAAmuQAFADABgEQADAWAAASIgDAkQgBBXAGBdQgBAEABAJQABAHgFADQgCB0ADAyQgEgBABgDg");
	this.shape_329.setTransform(93.2827,52.65);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#2E3835").s().p("AhUBSIAAiZQABgBAGAJIgCADQgBADAFABIAEAsQABACABAAQAAABABABQAAAAAAgBQAAAAAAgBIgBgIQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIADgFQAPAPgBgIIgDgeIACAMQABAGABABIAAAQIALACIABAFIADgLQAFAAgBARQABACAHAFIACAGQAAABABAAQAAABABAAQAAAAABAAQAAAAABAAIgCAHQAAABAAABQAAABAAABQAAAAAAAAQAAABAAAAQADgKADgVIAAgEQAJAAABgHIAQgTIgGAYQgEAPAAAGIAAAHIACgDQAHgKAJgjIAKgyQACAUgDAZIgFAsIACAAQAFgqATgwIACAAIgKAxQgGAcACAVQABADAHgIIAIgJQAAAJAFANIAJAWIAEAVQADALAHgRIAAAUg");
	this.shape_330.setTransform(101.175,80.675);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#2E3835").s().p("AhUBfQADgOgEgUQgDgBACgJIAKAeQAFgQgEgXQgHgagCgNIgCgfQgBgbADALIAHAnQAFAfAEANQgBgPADgbQADgeAAgKIgCgBIAJABIAEArIACgiQAGgBAHABQAIABAEADIACAPIgChPQACAAABAEQAGARAGBIIAJgMQAEgHAFgDQgLAlgCAVIADAAIAlhwQAAAMgKAsQgIAjAGATIALgZIAFAXIAEgXQAKg3ASglQgBAIgLAsQgKAoADAGQAAABANAKQANAPAEAaQABAFAAAKQAAAJAEAFg");
	this.shape_331.setTransform(156.66,79.4225);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#2E3835").s().p("AhPD4QAFgggIgwQgKhCgBgNQAKAdAMA8QABgVgDgdIgFgyQAJAVAFAfQACARADAkQAGgsgHglQABgRADAMQAGAdACAGIADAAQgBgIAAgeQAAgfABgDQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABAAIAHBRIAAAIQABAAAAgIQAFg/AFgZIACgBIgBBvQACgIADgkQACABAPAAIAAANQAAAKAAADIAAAPQAAAHAAgBIAFgiQALAEAGgEQgCAGgEAZQgEAaABACIACAAQAFgJAOgqQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABABQACADAHgCIAHg/IACAAQABAWgDAfIgEA0QACADAIgJQAJgLABgQIARBDIACgBQgCgMAAgRIAAgeQgCgdAAgPIgBhcQABg9gBggIgDg8IgEg8IAAg3IAFAAIAFBjIAGBjIABAsQAAAZACASIAADRg");
	this.shape_332.setTransform(176.175,64.15);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.lf(["#466D41","#3A5A3A","#3A5939","#364639"],[0,0.184,0.22,1],6.1,-18.5,-1.9,40.4).s().p("AAVGuIAAgVQgIARgDgKIgEgWIgIgVQgFgNABgKIgJAKQgGAHgCgDQgBgWAFgcIALgxIgDAAQgSAwgFAsIgCAAIAFgtQACgagBgUIgLAzQgIAjgHAKIgDADIAAgGQABgHAEgQIAFgYIgQAUQgCgEgBgKQAAgJgDgEQAEgjAGhfQAGhSAHgwQADgUAJgnIALg8QACgNABgXIADgdQACgQAHgVIAKgjQADgSAMhZQAKhIAOgnQgVBsgIClIgCAkIgBAlQABAUAFAoIAICOIAGA7QAEAhAJAZIgKigQgEhgADg/IAIhZIACgPQACgJgBgHQADAAAAALQgBALADABIAAAoQgFAkAGBEIAKBrIAHBpQAEA/AFArQgBAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBACABAaIAAAdIgDACQgCgBAAgbQAAgbgIgCIAAA+IgDAAQgBgcgGgpIgCgBIgBBUIgQhVQgFAeANA8QALAwgOARg");
	this.shape_333.setTransform(107.625,45.925);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.lf(["#456C40","#374738"],[0,1],7.7,-17.2,-6.2,36.1).s().p("AAWGzQAAgRgKggQgKggAAgSQgLAjgCAAQgIgDACgjQACgigBAAQgFAOgLBGQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAQgEgcAJgmQANgsAEgVQgMAXgNAnIgVBAIgDgBQADgbAIgZIgcAmQgEAGADgxIAEgPQACgKgEgFQAGgeADg1QACggABhBQABhDABgcQABgRAGgpQAFgmABgWQABgaAQgtQASgvACgXIACgBIAABSIgCABIgNA+QgWB0ADCKIAJgJIAHgJQABg6ACgZQACghAGg3IAJhaQADgUAKggIASg0QAJgxAGgXQAWhYAYgvQgQAvgLAsIgMA2QgJAsAAAFIADAKIACAYQgCgCgBgIQgCgIgCgCQgCAYgHAoQgJAtgCATQgIBLADB0QAOgvAEhjQAEhtAKgqIADAXIgDgBIAGCRIAABHQgBAuABAZIAFBfQAFBAAAAgIgIgBIACABQAAAKgDAeQgDAcABAPQgFgNgFggIgGgnQgDgLABAbIACAgQACANAGAaQAFAXgFAQIgKgeQgCAJADABQAEAUgDAOg");
	this.shape_334.setTransform(145.4107,45.425);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.lf(["#456E41","#384839","#2D3835"],[0,0.761,1],15.3,-7,-18.9,33.2).s().p("ABXG0IgMgXQgCgBAFAYIipAAQAOgRgLgwQgNg8AGgeIAQBVIAAhUIACABQAHApABAcIACAAIABg+QAIACAAAbQAAAbABABIAEgCIgBgdQAAgaABgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAIAEAgIAAAHIABgHQACglAFgZIACADQABARAAArQABAVACgBQABgCABgUQABgNgBgVIgCgiIgCiXQAAhbAKg5QACgPAHgYIAIgeIACgQQAFgBABgCIADgJIAYg7QASgtABgHQgBgZACgSQAGg7AkhNQgXA8gOBiIACAAQAGgXANgeIAWg0IACAAQgLAbgNArIgWBHIAEAWQABAmgCgGQgDgFgBgkIgCgBQgMAwgCAYQgEAAgFAVQgIAYgJAoQgJAqgDAWQgIAygCBbIgDCQQAAgDAIgPIAHgPIgBhWQAChLAHhEQAKhbARguQAJgbASgeIgFA3IgFAeQgEAegLA7QgJAzABAmQALgdAGg3QAIhTACgLIAEgYQAHgeAGgUQADATgCAfIgFAqQACBvADA4IAFBeQAFBHACAQQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAABQgBAAAAAAQABAFgBAGIgDALQAAAFAMA+QAMA2gHAZg");
	this.shape_335.setTransform(119.8932,45.325);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#D8DFAD").s().p("AgGAQQgDgQADgWIAIAHQACACAFgJIgHAUQgFAPgBAHIgBADQgBAAAAgHg");
	this.shape_336.setTransform(116.275,28.0508);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#498148").s().p("AAAAWIgBgFQAEhPgBBRIgCADIAAAAg");
	this.shape_337.setTransform(153.1827,27.4434);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#498148").s().p("AAAg3QADAlgDBKQgDgzADg8g");
	this.shape_338.setTransform(145.05,14.55);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#498148").s().p("AACBhQABgzgCgCIgEgBQABgPAAg2QABgrACgbIADDBg");
	this.shape_339.setTransform(95.7,18.35);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#789248").s().p("AAAAHIgCgFIgBgDQADgCAAgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAATIAAAAQgDAAAAgDg");
	this.shape_340.setTransform(22.35,28.5153);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#417545").s().p("AARBBQAChLgBgUQgBgQgDgUIgCAAIgTBUQgOA4gCAZQgCAaACAMQgDADABgEIgBgUQAAgBgBAAQgBAAAAABQAAAAgBAAQAAABAAABQAAAEgDACQgEgJgEgBIAhiJQAThZAdgvQgDAOgWBBQAJAqgCAXIAACiIgCAJQgBADgHAAQACgSAChMg");
	this.shape_341.setTransform(25.325,15.95);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#D8DFAD").s().p("AgDgJIgCgNQAAgFADAGQAFAMACAMQADASgIAEIgDgig");
	this.shape_342.setTransform(37.4179,28.3286);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#3C553A").s().p("AgBAoIgIAAQABgoADgnQAMABACACQABACAAAKIgDA/QgDABgEAAIgBAAg");
	this.shape_343.setTransform(41.475,71.23);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#C8E09F").s().p("AAAgWQAAgHABgBQAFAvgDAIIgGAGQgCgSAFgjg");
	this.shape_344.setTransform(78.4527,26.175);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#ECE4C1").s().p("AgGA7QgEg3AMg5IAEgQQABgCAAANQACAZgCAeQgCAhgEAUQgCAQgCAEQgCgCgBgJg");
	this.shape_345.setTransform(6.7154,23.1548);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#59924C").s().p("AABAkQgFgBgCAAQAFgtABgaIAFABQABACAAAyIABAAIAAATIgCABIgEgBg");
	this.shape_346.setTransform(2.7,26.3875);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#59924C").s().p("AAGA9QAAgJgGgCQgHgBgHgCQAHgVAHgeIAIg1QADACABgDQABAAAAgBQAAgBABAAQAAgBAAAAQAAAAABAAQgOA7AFA1QABAJABACg");
	this.shape_347.setTransform(5.45,23.95);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#59924C").s().p("AADBPQgFgLgIgEQAEgUACgiQACgdgCgZQAFADgBgMIgCgQIAHgTIgFARQABARADBAQACA3AFAYQgEAAgEgKg");
	this.shape_348.setTransform(7.925,21.725);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#7AAC4D").s().p("AgBD/IAAgqQABgqgCgOIgCAAIgGApQgDAaAAAQQgBgBgDgSIgGgwQgIhKgGhLQgHhmAChOQACgYAAgMQAEgCAFgkIABgHQACAAAGABQAGACABgCQADgDACgLQAHADAHABQAGACgBAJIADABQACgEAEgQQAIADAFALQAFAKADAAIACAHQABAFACABIgEAZQgZBUgGB+IgHDVIgCAVIAAADIgBAAg");
	this.shape_349.setTransform(5.0868,53.675);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#3F603C").s().p("AABByIgHgCIABhyQAAhGADgtIAEB0QADBJACApIAAAFQgCgDgEgBg");
	this.shape_350.setTransform(59.95,58.95);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#314436").s().p("AAAAbQgGgBgFABIACg5IAIACQAEABACADQACAXAFAgQgDgDgJgBg");
	this.shape_351.setTransform(60.175,73.25);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#3C553A").s().p("AgCALIABgGIADgUIABABQgDAVgCAJQgBAAABgFg");
	this.shape_352.setTransform(7.055,81.725);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#314436").s().p("AAFAwIgLgCIAAgQQAAgPAEgZIAEgqIACAAQADAOgBApIgBAqIACAAIgBAIIgBgFg");
	this.shape_353.setTransform(4.325,74.65);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#314436").s().p("AADBFIgCgFQgGgGgBgCIgBgKQAAgIgEAAIACgVIARACQABgIAAgnQAAgmABgEIACgBIgBBCQAAAqgBAOIgEAVIAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_354.setTransform(6.275,75.0286);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#314436").s().p("AgDAgIgDAFQgBAAAAABQAAAAgBAAQAAAAAAAAQgBABAAgBQADgygBgaIAEgCQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIAGAvQgBANAEARQAAABAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQgDAAgJgJg");
	this.shape_355.setTransform(2.578,74.9122);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#3C553A").s().p("AgBBzIgFgsQgDgkAAguIAChTQAGgDgCgHQgBgKABgDQAFBLAIBJQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgEADQABAagCAzIABAIIgBABIgBgDg");
	this.shape_356.setTransform(1.65,67.8931);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#3D5041").s().p("AAAABIgDgWIAAgBIAEAWQADAOAAAJQgDgIgBgOg");
	this.shape_357.setTransform(37.4031,79.625);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#314436").s().p("AgBgBQABgZABABQADATgEAhIgBgcg");
	this.shape_358.setTransform(41.5813,84.0995);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#3C553A").s().p("AAAAwQgCgDAAgsQAAgqACgFQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAABABQAAAAAAAAIAAAuQAAAdgCASg");
	this.shape_359.setTransform(39.825,83.925);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#2E3835").s().p("AhSBbQAHgZgLg2QgNg9AAgFIADgMQABgFAAgFQAAAAABgBQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAAAABABQAAAAAAAAQABABAAAAQACAQAKAhIAEAXQACANACAIQAAgJgDgPIgEgVIgCgMQAFAEgBgMQgDgNAFABIAPAqQACABgBgMQgCgLADABQAEARAAgFIACgUIACAlQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQgCAFAAAqQAAArACAEIADAAQABgSAAgdIAAgvIAAgHQABAAABAAQAAAAABABQAAAAAAABQAAAAAAABIAAAHQAAABABAAQAAAAAAABQAAAAABAAQAAAAABAAIgBACQABADAKADQAAAAABAAQAAAAAAgBQABAAAAgBQAAgBAAgBIAAgHQACgCABgIQABAAABAAQAAABAAAAQABAAAAAAQAAABAAAAIgBAEQABADAFACIAAAGIABAEIAJgdQAGgTADgLQADAFgCAKIgDAOIgCAaQAAAVADgEIAaglQgGAYgEAbIAEABIAUg/QAMgnANgXQgEAVgNAsQgJAlAEAbQABABAAAAQAAgBABAAQAAAAAAAAQABgBAAgBIAHglQAGgmADgHIgCAhQgCAjAJADQACAAALgiQABARAJAfQALAhAAARg");
	this.shape_360.setTransform(45,79.85);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#314436").s().p("AAAAfQgFgCgBgDIABgEQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAgBAAQAGgYAKghQAAAfgIAsIAAgHg");
	this.shape_361.setTransform(43.1,76.45);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#314436").s().p("AAFAcQgJgDgBgDIABgDQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIAAgHQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIADghIAIABQAFAAADgCIgCAzQAAABAAAAQgBABAAABQAAAAgBABQAAAAgBAAIAAAAg");
	this.shape_362.setTransform(41.15,77.8775);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#789248").s().p("AACAYQgEgfgCgXIAAgFIAFABQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAAAgBIACBNg");
	this.shape_363.setTransform(61.175,73.875);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#516749").s().p("AAAgDIAAAAIAAAHIAAgHg");
	this.shape_364.setTransform(80.05,78.525);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#D7E9BE").s().p("AgBAGIABgPQABgDAAgBQABgCAAAAQAAgBAAABQAAAAAAACQACALgEATQgDAAACgLg");
	this.shape_365.setTransform(18.773,26.947);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#314436").s().p("AAAgQQACAEABAKQAAAJACADQgBAHgIAAg");
	this.shape_366.setTransform(7.9,78.075);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#D8DFAD").s().p("AgDAPQAAhEADgBIACAQQACAmAAANQgBAOgGAbg");
	this.shape_367.setTransform(19.8292,26.35);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#D8DFAD").s().p("AgEAZQADgkAEgXIACBGg");
	this.shape_368.setTransform(74.35,25.15);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.lf(["#6E9E4C","#84B54D"],[0,1],1.6,-20.3,0.1,1.4).s().p("AAPDKIgIgRQgDgKgCgaIgBglQgJhRgDgoQgNihACgQIAJgkIARASIACB2QAABHADAuIAGBhIAIBgQgBgIgHgOg");
	this.shape_369.setTransform(74.417,49.25);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#2E3835").s().p("AgDAGQgBgNAEACQACACACAJg");
	this.shape_370.setTransform(73.5545,88.2677);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#2E3835").s().p("AgGAMIABgXIAMAXg");
	this.shape_371.setTransform(74.75,87.725);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.lf(["#3E603C","#374739"],[0.118,1],-0.8,-19.7,0.3,40.7).s().p("AAqGwIgMgXIgBAXIgBAAQgCgKgDgCQgEgCABAOIgEAAQgEgFAAgJIgBgOQgEgagMgPIgOgMQgCgGAKgpQALgrAAgIQgSAkgKA5IgDAWIgFgXIgLAaQgGgTAIgkQAKgtAAgLIgmBwIgDAAQADgXALgjQgJAFgKAQQAFgzgBiNQAAh5ANhFQADgQARhBQAXhIADgVQAEgVADg4QADg7ADgVQADBbgFCEQAAAAAAAAQgBAAAAAAQAAABgBAAQAAAAAAABIgBADIgLAoQgRBAgHA4QgHA5AABCQAKgTAFgpIAHhCIAYiSQAQgsAVhmQAThhAVgxQgHAUgOBCQgNBCAAANIAFAyIACBCIADALQADAsAKBXIAWD8QgBAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQgCACAAAgIACAmIgDAAQgDgHgGgcQgCgMgBARQAHAjgHAtIgFg1QgEgegKgVIAGAyQADAdgBAUQgMg8gLgcQABAKALBFQAHAwgEAfg");
	this.shape_372.setTransform(71.175,45.675);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#516749").s().p("AAAgCIABAAIgBAGIAAgGg");
	this.shape_373.setTransform(22.6,77.65);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#638245").s().p("AAAAaQAAgqgBgRIgCgDIAAgJIABADQABABAEgCIABAiIABAhQgCAWgCAAQgBAAAAgUg");
	this.shape_374.setTransform(23.75,74.8368);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#7AAC4D").s().p("AgFAAIAPhYIADAAIgKBcQgEA5gLAdQgBgmAIg0g");
	this.shape_375.setTransform(31.3697,44.75);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#417545").s().p("AgCgHIADAGIACAHIgDACIgCgPg");
	this.shape_376.setTransform(20,21.675);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#C8E09F").s().p("AgDAPIADgdQABAAABAAQABAAAAAAQABAAAAAAQAAABAAAAQgBAEABACIgEAWg");
	this.shape_377.setTransform(32.7528,34.2719);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#59924C").s().p("AAFAXIAAgQQgHgDgCAEQgCAFgDgBQAKgZADgNIADgBIADADQgFAiACASIgBAAQgBAAAAgFg");
	this.shape_378.setTransform(77.4,26.4461);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#417545").s().p("AgEAWIADgvQAGAEAAAHQgBAKACADIAAASIgCAHQgBAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAQgBAAgEgEg");
	this.shape_379.setTransform(47.05,30.8092);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#59924C").s().p("AAEAhQAAgEgHgBQADgIgFgvQAAgIABgBIAEALIACAPQADAPABAfQAAAAgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBg");
	this.shape_380.setTransform(79.15,25.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#59924C").s().p("AAAAYIACgDQgFgLgDABIAGglQAFADABAEIABAIIgCAmQgFgCAAgBg");
	this.shape_381.setTransform(80.875,26.875);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#498148").s().p("AgKAiIARhOQABAAABAAQAAAAABAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAABQAAAAABAAQAAABAAAAQgLAxgBAjQgBgJgIgDg");
	this.shape_382.setTransform(63.05,22.45);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#59924C").s().p("AADAWQgBgFgKgDQAEggABgXIAEgBIADAzIACABIADAhIgCAAIgEgVg");
	this.shape_383.setTransform(65.05,25.275);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#7AAC4D").s().p("AghDqIgFhgIgFhfQABhegBgwQgFhgAAgxIADABIACASQABACAEgIQAJgWAAgXIANAsIABAIQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABAFQAAABAAAAQABAAAAgBQABAAAAgBQABgBAAgBQADgDAEgOIAEgSQAJAEAAAIQAAAoAEgFQADgEAHgiQAKADABAEIAFAWIACgBQACAVADALIACABQgRBAgEAQQgNBHABB4QAACNgFAzQgFhIgHgRQAAgBAAgBQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAABAAABQgBAAAAABQAAABgBAAQAAAAAAAAIgGAAQgDgqgDhKIgEhzQgDAsgBBHIgBBzIgCA5IgCAig");
	this.shape_384.setTransform(61.7,51.625);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#417545").s().p("AgDBLIgEABQACgMABgUIACghQAGg6ACgeQADAIgCAnIgEAwQgDAlABAGQgBABAAAIQgBABAAAHIgCgDg");
	this.shape_385.setTransform(78.5531,16.125);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#59924C").s().p("AgJAgQAGgVABgyIADAEQADgIABAQIAAAdQACAPABAAIABAWQgJgBgJgGg");
	this.shape_386.setTransform(83.5,24.95);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#7AAC4D").s().p("AALCcIgCABQgGAdgEA6IgBAAIgGhQIgWj8QgKhXgDgsIgDgLIAIgdQADAAACgEQACgEAIADIABAPQgBAIACgCIAHgGQAHABABAEQAAABAAAAQABABAAABQAAAAAAAAQAAABABAAIAEgQQACgBAGALIgCADQgBABAGACQABAOAEgGQADgGAEgQQAJAGAKABQACAcADAIIgRBQQgIAqgCAqQgBAhAABgQAABSgEA7QgDAhgCALg");
	this.shape_387.setTransform(80.275,53.6857);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#417545").s().p("AgJBHQAAgKgNgkQgPglgJgJQAQAOAJAXQAFANAIAgIAXhLQAPgrARgcQgTA+gUA7IgKAfIgCAOQgBAFgHABIADgQg");
	this.shape_388.setTransform(47.9125,8.7);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#417545").s().p("AgNBaIAIghQAAgDgJgbQgIgZgDgFQgFgLgNgUQAPAOAJAWQAIAPAHAcQAehpAOgXQAGgKgCAGIgFAOIggBtIgHATIACAQQABAMgEgDQAAgNgCADIgDAPQgBAAAAAAQAAABAAAAQgBABAAAAQAAABgBABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAABgBAAIgCgBg");
	this.shape_389.setTransform(7.65,9.2275);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#498148").s().p("AgYBYIARhRQAIgfADgRQAHAAABgGIACgOIALgeIgGAVIgGASIAAA8QACA9gBAVQgBgCAAgLQABgHgHgDIABg0IABgyIgCgBQgFAWgHAsQgIAxABANQgHgFgFABg");
	this.shape_390.setTransform(46.2,21.575);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#417545").s().p("AgLB2QAAgLgDAAQAAgCAAAAQAAgBAAABQgBAAAAACQAAABgBADIgDAQIgLgCQAEgMAKg9QAMhBAEgVQALgtATgyIACAAIgKAeIgQBJQgKA5gCANIgBAQQgDABAABFQgCgCABgKg");
	this.shape_391.setTransform(20.5,14.85);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#417545").s().p("AgDCCIgDg0IgFABQgBg5gEAfQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAQABgBgBAAQAAgBAAAAQgBAAAAgBQgBAAgBAAIAKgmQAAgJgJgeQgLgigIgIQAPAMAIAfIAHAbQAIgVANgsQANgpANgVIgXBUIgXBGQgBAHACAsIAFA3IgCgBg");
	this.shape_392.setTransform(65.85,13.2);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#498148").s().p("AAGB3IAAgfQgBgQgDAIIgDgDQABg0gCAGQgBACgLA2IgEAlIgBgIQgBgEgEgDIAIguIAKgpQAAgGgQglQgRgmgHgIQAYAYARA4QAYhoAbgpQgGASgRA6QgTA9AAAGIACA5IADBBIAAAAQgBAAgCgOg");
	this.shape_393.setTransform(83.4,13.3258);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#7AAC4D").s().p("AgPAVQAHg4AQhAIALgnIABgEQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAABQgBAKACAGIgXCRIgHBDQgFAogKAUQAAhDAHg5g");
	this.shape_394.setTransform(68.175,44.545);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#7AAC4D").s().p("AgJgfQACgTAHgtQAIgoACgYQABABACAJQABAIACACIAAACQgJAqgFBsQgDBkgOAvQgCh5AIhGg");
	this.shape_395.setTransform(55.055,38.725);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#7AAC4D").s().p("AABhfIANg+IACgBIAAAmIACAAIgJBaIgIBYQgBAZgBA6IgHAJIgJAJQgDiLAVhzg");
	this.shape_396.setTransform(49.862,45.125);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#7AAC4D").s().p("AgWBKQAChaAIgzQADgXAJgqQAJgnAIgZQAHgVACABQgCASABAQQgQAugJBcQgIBEgCBKIABBWIgIAQQgHAPgBADIADiQg");
	this.shape_397.setTransform(28.125,51.2994);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#7AAC4D").s().p("AgZDyIABgPIAEiyQADhpAMhHIANg7QAKglADgXIACAAIADADQgDAWgDAsIgJAvIgJAvQgIA1gDBeQgEBlgGAwIgFAiIAAAAQgBAAAAgFg");
	this.shape_398.setTransform(86.0438,55.9882);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#7AAC4D").s().p("AADCrQgDgQgEhHIgFhdQgDg4gChwIAFgqIAIAJIABAOIADAWQABAiAABAIABBhIADBgQADBGACAUIACAMIgBABQgJghgCgQg");
	this.shape_399.setTransform(35.55,55.425);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#7AAC4D").s().p("AgcD0QABgNAAgrIABhCQAGifAThfIAQhDIAIgtQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAAAGACABIgGBBQgDAWgIAnIgLA8QgHAvgFBRQgGBfgEAjIgFAiIAAAEg");
	this.shape_400.setTransform(10.15,55.655);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#3F603C").s().p("AgSCpQgCgCgNgBQAMigAVhbIAIgjQAIgYACgKIAFgVQAHAGACgEIACgHIgCAaQgDAcgHAfIgNAzQgOBOgMCTQABgKgCgCg");
	this.shape_401.setTransform(44.25,50.65);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#7AAC4D").s().p("AADCZIgEg7IgIiOQgFgogBgUIABglIACgkQAJgOADgPIAMACQgBALADAAIgIBZQgEA+AFBhIAJCgQgIgZgFghg");
	this.shape_402.setTransform(17.3417,48.425);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#7AAC4D").s().p("AgQDgQAJguAAgfQgMAhgFAaQgBAHgCADIAFhrQALiSAPhPIAMg0QAIgeACgcIACABQgBAVgFAmQgFApgBASQgCAegBBBQgBBCgCAeQgEA9gFAWQgBALgHAUIgJAdIAAgDg");
	this.shape_403.setTransform(44.775,57.9);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.lf(["#41623C","#3C4E39"],[0,1],2.8,-6.1,-8.7,19.2).s().p("AAOEmIgOgrQgEgBACANQACAMgGgEQgCgUgDhGIgEhgIgBhhQABhAgCgiIgCgWIgCgOQgBgMADgVIAEghIAAgoIgBgpIADAbQgCAGAIAQQAGAPgCABQgDgGAAAFIABANIgFABQgEAkAGArIALBKQAIA6AFBmIAGCmIgCAUQAAAGgEgSQgCgBABALQABAMgCAAIAAAAg");
	this.shape_404.setTransform(37.5714,49.001);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.lf(["#40683F","#374A36"],[0,1],9.9,-11.3,-15.6,20.4).s().p("AgPFNIAAgNQgPAAgCgBQAEg6AAhTQAAhhABghQACgqAJgoIAQhRIALgwQAGgdADgTQACgUACgvQADgrAEgYQADAygDBlIABAiQABAXgBAKIgBABQgDAWgKAlIgOA8QgLBGgEBqIgDCxQgCgDABgKg");
	this.shape_405.setTransform(85.05,44.025);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.lf(["#42683F","#384936"],[0,1],9.9,-7.2,-17.5,14.6).s().p("AgkFVIAHjWQAFh+AZhTIADgZQAPg5AEgcQADgaADgxQADgzADgXQACAfgBAyIgCBRIADBAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgIAsIgQBEQgSBegHCgIgBAAQgBAEAAAnQAAAngCAIg");
	this.shape_406.setTransform(9.025,42.7);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#7AAC4D").s().p("AgCETIgEggQgFgqgEg/IgGhqIgLhqQgGhFAFgkQAGgbABgPQABgNgDgmIADgCIAFAcIABAeQAAAFAEgMQADABAEAJIABADIABAFQACAEADAAQgBAEACgDIABAFQAAABAAAAQABAAAAAAQAAAAABAAQAAgBAAgBQABgHAGgQIAHgUQACgNAAgTIACABQgFAxAUA8IgIAeIgKAnQgJA6gBBaIADCWQgEACgBAAIgCgDIABAIQgEAVgCApg");
	this.shape_407.setTransform(22.8536,49.775);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#7AAC4D").s().p("AgKEbIgCglIgGimQgFhmgIg6IgMhKQgGgrAEgkIAFgBIAFAjQAHgEgDgSQgCgNgFgMQACgBgGgPQgIgQACgGQACAPAMAYQANAaADANQAFgKACgeQACgTADAQIACAaQABASACgBQACgJACgcQABgOADARIADAfIAOg5QABABABA9QAGgBAGAGIAGATQAFASABAGQgCALgIAXIgJAjQgVBbgLCgQgDAngBApIgDAhIAAAIQgBAAAAAAQAAgBgBAAQAAAAAAAAQAAgBAAAAg");
	this.shape_408.setTransform(41.0875,50.825);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.lf(["#466C40","#3A5A3A","#384939"],[0,0.224,1],-1.4,-20.7,2.8,32).s().p("AAWFJQgBAPgJALQgIAJgCgDIAEg0QADgfgBgWIgCAAQgGAqAAAVQgGACgDgDQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgOArgEAIIgDAAQgBgCAEgaQAEgZACgGQgGAEgLgEQAGgwAEhmQADhfAJg1IAJgtIAJgvQACgsADgWQADgQAFgRIAJgeQAIgkADg4IAFhcQAECUgFBTIgFAhQAAAKACAzIgEAAIAAA3IADA7IADA9QACA+gBB8IADArIAAAeQgBASACALIgBABg");
	this.shape_409.setTransform(88.125,46.425);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#2E3835").s().p("AgCALQgFgXACACIALAVg");
	this.shape_410.setTransform(35.3563,87.7675);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#417545").s().p("AgDAOIAAgdIABABQACAFAEAWQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDgCg");
	this.shape_411.setTransform(0.375,29.0021);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#789248").s().p("AAAAFIgBgsQABgBAAgEQAAgBAAgBQAAgBAAAAQAAgBAAAAQABAAABAAIAABhQgCgSAAgag");
	this.shape_412.setTransform(92.825,63.1722);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#7AAC4D").s().p("AAAA1IgFhiQgDgyABgLIAEghIALgMIAAEmQAAAAgBAAQgBAAAAABQAAAAgBABQAAABAAABQABAEgBABQgBghgEhCg");
	this.shape_413.setTransform(92.1708,44);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#314436").s().p("AABDYIgCgFQgEgDgBABIAAmuQAGADABgEQADAUgBAUQAAAMgCAYQgBBOAGBmQgBAEABAJQABAHgFADIgCBTQAAAvADAkQgHgCAFgFg");
	this.shape_414.setTransform(0.6577,52.65);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#2E3835").s().p("AhVBSIAAiZQACAAADADIADAFQgFAFAHACIAFAsQAAACABAAQABABAAABQAAAAABgBQAAAAAAgBIgCgIQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBIADgFQAPAPgBgIQgDgSABgMQACASABABIAAAQIALACIABAFIACgIIABgDQADAAAAAIIABAJQABACAHAFIACAGQAAABABAAQAAABAAAAQABAAAAAAQABAAABAAIgCAHQgBAFACAAQADgKACgVIAAgEQAKAAAAgHIAPgTIgFAYQgEAPgBAGIAAAHQABAAAAAAQAAAAABgBQAAAAABgBQAAAAAAgBQAHgKAJgjIAKgyQACAcgHA9IABAAQAFgpATgxIADAAIgMAxQgFAcACAVQABADAHgIIAJgJQgCAJAGANIAJAWIAEAVQACALAJgRIAAAUg");
	this.shape_415.setTransform(8.55,80.675);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#2E3835").s().p("AhTBfQACgLgDgXQgDgBABgJQAGALAEATQAFgPgEgYQgHgagBgNIgCgfQgBgbADALIAGAnQAFAfAFANQgBgPADgbIADgoIgCgBIAIABIAEArIACgiQAGgBAHABQAIABAEADIACAPIgBhPQAAAAAAAAQABABAAAAQAAABABAAQAAABAAABQAGARAGBIQAKgRAIgFQgKAjgCAXIACAAIAlhwQAAALgKAtQgIAjAGATIALgZIAGAXIADgXQAKg3ASglQgBAIgLAsQgKAoADAGIANALQANAPAFAaIAAAPQABAJADAFg");
	this.shape_416.setTransform(64.025,79.4225);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#2E3835").s().p("AhPD4QAFgggIgwQgLhFgBgKQALAdAMA8QABgVgCgdIgHgyQAKAVAFAfIAEA1QAIgugIgjQABgRACAMQAHAdACAGIADAAIgBgmQAAgfABgDQAAAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIAHBRIAAAIIAAgIQAFg7AGgdIACgBIgBBvQACgLADghQACABAPAAIAAANQgBAKABADIAAAPQgBAHABgBIAEgiQAMAEAGgEQgCAGgEAZQgEAaABACIADAAQAEgJAOgqQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABABQADADAGgCQABgVAGgqIACAAQAAAWgCAfIgEA0QACADAIgJQAJgLAAgQIASBDIACgBQgCgMAAgRIAAgeIgDgsQACh6gCg/IgDg8IgEg8IAAg3IAFAAIAFBjQAFBBABAiIABAsQABAZABASIAADRg");
	this.shape_417.setTransform(83.55,64.15);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.lf(["#466D41","#3A5A3A","#3A5939","#364639"],[0,0.184,0.22,1],6,-18.5,-1.9,40.4).s().p("AAVGuIAAgVQgIARgDgKIgEgWIgIgVQgFgNABgKIgJAKQgHAHgBgDQgBgWAFgcIALgxIgDAAQgTAygFAqIgBAAQAHg/gCgcIgKAzQgIAjgHAKQgBABAAABQgBAAAAABQAAAAgBAAQAAAAAAAAIAAgGQAAgHAEgQIAGgYIgQAUQgCgEgBgKQAAgJgDgEQAEgjAGhfQAFhSAIgwIALg7QAIgmADgWIAHhBQACgPAHgWIAKgjQADgSAMhZQAJhIAOgnQgUBxgICgIgCAkIgBAlQABAUAFAoIAICOIAFA7QAFAhAIAZIgJigQgFhhAEg+IAIhZQAEgUgBgLQADAAAAALQgBALACABIAAAoQgEAkAGBEIAKBrIAHBpQAEA/AFArIgEAAQgBACABAaIAAAdQAAAAAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgCgBAAgbQAAgbgIgCIgBA+IgCAAQgCgdgGgoIgCgBIAABUIgQhVQgFAeANA8QAKAwgNARg");
	this.shape_418.setTransform(15.025,45.925);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.lf(["#456C40","#374738"],[0,1],7.7,-17.2,-6.2,36.1).s().p("AAWGzQAAgRgKggQgKggAAgSQgLAjgCAAQgIgDACgjIABgiQgDAIgGAmIgHAmQAAAAgBABQAAAAAAAAQgBABAAAAQAAAAgBAAQgEgcAJgmQANgsAEgVQgMAXgNAnIgUBAIgEgBQAEgbAHgZIgcAmQgDAEABgUIABgbIAEgPQADgKgFgFQAFgWAEg9QACgfABhCQABhCACgdQABgRAFgpQAFgmABgWQABgaAQgtQASgvACgXIACgBIAABSIgCABIgNA+QgWBzADCLIAJgJIAHgJQABg6ACgZIAIhYIAJhaQADgVALgfIARg0IAIgkIAHgkQAYhaAXgtQgPAqgNAxIgLA2QgKAsABAFIACAKIACAYQgCgCgBgIQgCgJgBgBQgCAYgIAoQgIAtgCATQgIBHACB4QAOgvAEhjQAFhtAJgqIAEAXIgDgBQABAxAEBgQABAvgBBfIAFBfIAFBgIgIgBIACABIgDAoQgDAcABAPQgEgNgFggIgHgnQgDgLABAbIACAgQACANAGAaQAFAYgFAPQgFgTgFgLQgCAJADABQAEAXgDALg");
	this.shape_419.setTransform(52.7964,45.425);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.lf(["#456E41","#384839","#2D3835"],[0,0.761,1],15.3,-7,-18.9,33.2).s().p("ABXG0IgMgXQgCgCAFAZIipAAQAOgRgLgwQgNg8AGgeIAQBVIAAhUIACABQAGAoACAdIACAAIABg+QAHACAAAbQAAAbACABQABAAABgBQAAAAABAAQAAAAAAgBQAAAAAAAAIAAgdQgBgaABgCIAEAAIAEAgIAAAHIABgHQADgpAEgVIACADQABARAAArQACApADgrIAAgiIgCgiIgDiXQABhbAJg5IAKgnIAIgeIACgQQAFgBABgCIADgJQAqhkABgLQgBgZACgSQAGg7AjhNQgVA5gPBlIABAAQAHgXAMgeIAXg0IACAAQgMAbgNArIgVBHIADAWQABAmgCgGQgCgFgBgkIgCgBQgMAwgDAYQgCAAgHAVQgHAYgKAoQgJAqgDAWQgHAzgCBaIgDCQQAAgDAIgPIAHgPIgBhWQAChLAHhEQAKhbAQguQAKgbARgeQAAAXgFAgIgEAeIgQBZQgIAzABAmQALgdAFg3IAKheIAFgYQAGgfAHgTQACANgBAlIgFAqQACBvADA4IAFBeQAFBHACAQQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAABQgBAAAAAAQABAFgCAGIgCALQAAAFAMA+QALA2gHAZg");
	this.shape_420.setTransform(27.2682,45.325);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#D8DFAD").s().p("AgGAVIgBgFQgCgNACgZIAJAHQACACAFgJIgHAUQgFAPgBAHIgCADIAAgCg");
	this.shape_421.setTransform(23.675,28.0521);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#498148").s().p("AAAAWIgBgFQAFhQgCBSIgCAEIAAgBg");
	this.shape_422.setTransform(60.54,27.4184);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#498148").s().p("AAAg3QAEApgEBGQgDgzADg8g");
	this.shape_423.setTransform(52.45,14.55);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#498148").s().p("AADBhQAAgzgBgCIgFgBIABhFQAAgsACgaIAEDBg");
	this.shape_424.setTransform(3.05,18.35);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#FFFFFF").s().p("Ah3AEIAAgHIDvAAIAAAHg");
	this.shape_425.setTransform(309.15,48.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,463.5,88.9);


(lib.cLOUD2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bumble_bee_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292929").s().p("AqRJ4QiZAAhshsQhshsAAiZQgBiUBnhrQBmhpCUgHQAthgBag6QBag5BsAAQAgAAAdAFQBJiUCLhWQCLhXCmAAQDrAACpCkQCoCkAIDqQBgAuA5BZQA5BaAABrQAACZhsBsQhsBsiZAAgAtMBNQhNBNAABtQAABtBNBNQBOBOBtAAIUjAAQBuAABNhOQBNhNAAhtQAAhTgxhFQgxhEhOgcIglgNIACg2QABjEiMiLQiLiLjEAAQiSAAh2BRQh3BQg4CIIgSAsIgugOQgjgLgoAAQhUAAhFAxQhEAwgcBPIgNAlIg2gDQhtAAhOBNg");
	this.shape.setTransform(1313.95,113.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6C5C5").s().p("AqRIPQhtAAhOhOQhNhMAAhtQAAhuBNhNQBOhNBtAAIA2AEIANglQAchPBEgxQBFgxBUAAQAoABAjAKIAuAPIASgtQA4iIB3hQQB2hRCSAAQDEAACLCLQCMCLgBDFIgCA2IAlAMQBOAcAxBFQAxBEAABUQAABthNBMQhNBOhuAAg");
	this.shape_1.setTransform(1313.95,113.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1211.2,50.2,205.5,126.49999999999999);


(lib.Cloudrings = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bumble_bee_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B0B0B0").p("AAdgUQgIAdgmANIAqgug");
	this.shape.setTransform(477.5863,77.4635);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AATgWIAFAEQgJAdgmANg");
	this.shape_1.setTransform(478.125,77.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B0B0B0").p("AgOgEIAfAEIgBAFIgfgCg");
	this.shape_2.setTransform(436.2882,26.0604);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgQADIACgHIAeAEIAAAFg");
	this.shape_3.setTransform(436.3,26.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B0B0B0").p("AAiALIgfgIIgZgNQAjgBAXASQABABgBACg");
	this.shape_4.setTransform(482.8137,106.9094);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AgCAEIgbgOQAkgBAWASQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAIgDABg");
	this.shape_5.setTransform(483.495,106.8975);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#B0B0B0").p("AgNAcIAKhZIAGAKIAFgMIABgBQAJAKABAPQABADgCAZIgCgMQgBgJgBgEQgEgFgCgDIgFACIAGAMIACAPIgHgMg");
	this.shape_6.setTransform(421.8854,55.0646);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AgGgrIAGAKIAFgMIABgBQAJAKABAQIgBAaIgCgLIgCgNIgGgIIgFACIAGAMIACAOIgHgLIgRA3g");
	this.shape_7.setTransform(422.1563,53.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B0B0B0").p("AjXlXIAOAPQgUgIgugiQgugigLgOIBZAQIgBAEIgjgEIgBACQADABAGACQBWARBBgKQAJgCAZgCQAWgDAMgCQALgDAPgGQAJgDAQgHQAEgCAHgEQAWgFAagSQAOgJAdgVQAIgFADgLQAEgPADgEIAAASIAEABQAEgIABgEQADgHABgFQACgNAMACQAXACACAEQADAEgFAXQgBAGACAJQABAGACAKQABABADABQAGABABAAQAAAOAJANQAGAJAOAMQAqAjAoAPQAYAJAeACQASABAjgCQAFAAAJgIQAiggAMgJQABAaAAAHQgCARgJAMQgIALAJAMIAVAgIgMgGQAEAMAIAJQAGAGALAIQAMAIAZAVQgcAogPAXQgCADgFARQgHAZgCANIgLA2QgBADABAHQgGAyACATQADATAWAsIgOgEQACAWARAQQAQAPAZAGIAIABIAWAJQACATgHAGQgIAGgTgFQgKgDgUAJQgEACgGAGQgGAGgDACQg7AqgdAqQgMASgDATQgDAUAIAQQAIAQAHAcQAJAfAEAMQABACADAOIg3g/IgFACIAJAiQgRADgPgMQgPgNg0grQgCgCgFgCQgJgDgCgBIAVgCIABgFIgPgGQgJgDgGgBQgEgBgigDQgNABgHAAIAIAVQgEABgCAAQgtgEgeAeQgNANADAQQALBCAEAhQgMgNgFgHQgIgNAFgOQACgFgDgIQgDgKgBgEIgFAAIgEANIgngyIgEACIAgA0IgEADIg9hiIACgDIA0AoIAEgCQgFgJgCgEQgFgJgEgEQgagaglACQgLACgGgBQgJgBgDgMQAAgBgEAAQgFgBgCABIhJAUQghAKghAMQgCABgEAEQgDAEgCACQgFAIgCADQgFAHgJgDQgBAAgCADQgCADgBADQgCAPgNAPQgPAPgIAIIgGAHIAKADIgZAlQgOgegGgOQgBgCABgDQABgEAAgCIAFglQAKgnADgTQANhTgrgtQgngogsAJQglALgTAFQgMAEgPgCIAOgEIABgEQgLgEgCAAQghAHgRABQgQABgGgIQgGgIAHgOQAPggAVgaQAJgKARgPQAXgTAEgEQACgCAOgQIAFADIgbAmQANgDAHgJQAHgIACgQQACgKAGgNIAJgWQAHgSABgEQABgKgEgFQgEgEgMgBQgJAAgEgCQgGgCgCgIQgEgKADgGQACgGALgEQAngOABgBQAWgJAPgKQAdgSAlgcQAVgQAqghQADgCAIgEQAFgFgDgIQgBgBAKgGQAYgOAHgWQABgFAFgJQAFgJACgEQAGgYgKgTQgKgUgXgKgACUnNQgZAXgMAHQgeASgvAXQgEACgJABQgJABgEACQguARgjAHQgtAJgpgFIgMABIAUARQAJAIAFAQQAFAQgDAJQgHARACAIQAFAPgNAOIg+BAQgLAMgYAQQgaATgKAJQgOANgaAOQgeAPgPAIQgZALgLAHQgCABgCAFQgCAFABABQAbAbgXAkQgKARgRAYQgUAagJAOIgFAFQgDADAAADQgDAVgZAUQgEADgZAaQAMAKAPgBQAJAAANgGQAtgSA7AEQA4AEAfAmQAfAngJA3QgDAUgBArIAHgFQBVhIBvgHQBlgGArBHQAcgWAUgIQAbgLAdAGQADAAAMgCQAEgBAHgCQAGgCAEABQBHADAvAXQAXhuB3hEIgCgFIgFgEQglgcgHgnQgGgkgBg2QAAgJADgTQADgTAAgKQgCghAPgnQAEgMAag3IgKAhIAEABQAGgQADgIQAFgNAGgIQAIgJgDgGQgBgDgKgHQgdgUgLgMQgSgVgCgaQgoAHgqgKQghgIgsgWQgrgUgagaQgegdgOgqg");
	this.shape_8.setTransform(406.6271,112.6325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B0B0B0").p("AMDgkQAxAlgBAuIgHgPIgBAAQABAKADATQAMAzgOA4QgGAYgKAwQgKArgKAcQgaBJgqBFQgcAugwAqQgLAKgWAJQgZAJgMAGQgFABgDABIAFAGIgBADIgzgMQiND+kiAiIgDgFIAogCIAAgGIhLAFQgCAAgEgBQgggIgOgFQgbgJgRgPQgGgFgUgPQgRgMgIgJQgMgNgPgVQgQgYgJgMIgQgWQgNAVgeASQgmAYgKAJQgcAbgaAHQg0AOgoAHQgHABgLgDQgLgDgGgCIhJgMIAHAKQgbgIgKgFQgbgPgNgIQgYgOgPgMQgrgjgBg8QgBg9ADgaQAGgwAVgjQAEgHAMgNQAFgHALgUQgoADgDABQgvAKgzgdQg2gegJgzQgFgbAEg4QAGhjA3hjQAIgNAJgOQANgVAVgdQAMgQAZghIARgbIgLAFIAJgMIg4g2QgRgPADgUQACgJgCgPQgBgTAAgGQABgfAEgOQAghuBShHQBkhXBlgNQAEgBAFgCQADgBAGgDQgEgLgBAAQgBAAgTAFIgHAEQAIgWAQgXQAHgIAZgdQAMgOAVgUQAMgLAagYIgDAPQAXgTAigNQAQgGAvgMIgBgEIguAHQAagNAgACQAWABAlAJQhSAIgtAWICigQQANgCALAGQADABAIADQAFAFgFAJQgBACAGAGQADADAGAHIAlg3QAHgJAEgBQALgCAMgKQAGgGAMgLQADgCAFgFQAGgDAGAEQACABAGgDQAHgEADgEQAGgJALgEQAHgDAOgCQAEgBAsgFIgIgKIAkgEIgBAcQgwAJgIACQgRAFgJACQgPAFgKAGQg3AgggAwQgEAGgDAMQgFARgBADQgEALgBACQgEAHgDAAQgKACgVgIQgEgBgBgEQgBgFAJAAQgCgLAAAAQgNgMgHgGQgMgKgKgDQg/gZhSAXQhOAVhCBVQgEAGgEAMQgCAGgFAOIA8ATIgBAGIgxAAIAgA4IgjgFIABgDIAZAAIgSgWIgTAaQgNgXgTgBQgOgBgVAKQgyAYgaAUQgjAbgTARQgcAagTAaQgdApglA5QgLARAEAmQADAmANAPQAHAIANgCQAPgDBEgPIAQgDIAQAoIgmAPIAAACIA+AAIABADIgTANQgQALgNAJQg9AogOAKQgGADgFAJQgGAKgEAFQgXAfgMARQgIALgHAKQgLAQgHANQgXAqgRA1QgJAdgEA/IAIgcIAFACQgCAGgDALQgCAKgEAHQgKAVAFAcQAFAcARAPQAEAEAFAIQAFAIAEADQALAKAKACQAXAEAaAAQAaAAAygCIAZgCIgLAXQgKAZgWAzQgSAtgLAgQgSAwASAkQAIAPAQAQQAHAJAPAQQAOAPALAHQA7AmA8ACQBmABBWg7QAzgjArg3IANgSIARAoQApBgA/AsQAKAHARARQAGAEAGgBQBggBAvgIQBOgMA5glQBLgwA/g/QAUgUATghQALgTAVgmIANgbQARAPABABQAaAZAhgTQAkgVAigmQAagcAYgqQAHgNAfhAQAagzAOhBQAJgtAJhMQAFgtgYghQgVgdgpAGQggADgQACQgFABgIAEIgbAWQgHAHgKAAQgKAAgHgHQgHgGgBgKQgBgJAHgHQAEgEAIgEQAKgEADgCQAGgEALgIQAKgIAFgHQAbgqAUgsQAGgNAEgSQAAgBAGgeQANg/ACgZQAIhXgghZQgHgTgZgdQgqgug8gOQgHgBAAAAQgOAIgVAAQgYgCgMABQgEAAgGAEQgFAEgBAEQgJAvgvAhQgGAEgMACQgTADgBABIgBgFIARgEIAAgDIgVgHQAEgjAPgTQATgYAdgXQAMgKgBgMQgHhkg/hRQgbgjg8gHQgngEgUgEQBAgVAmAPQAyAUAeApQAyBIAHBdIABAPQBJgNBJArIgcgFQgCAAgagKIgDAHQAJADAQAIQAPAGAJgBQAJgBARAGQBOAZAYBkQAFAVABAgQABASAAAkQABAXAAAuQgBAZgEAMQgXBUAAACQgQAwgYAhIBDAHgAG0ofIgEgFIgrAvQAngMAIgegAo7ixIhdAUQAJAJAPgCQASgDAFACIgZAFQAOALAXgKQAXgKALgWg");
	this.shape_9.setTransform(425.8578,102.7609);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E0E1E2").p("ALkgsIhDgHQAYghAQgwQAQg5AIgdQADgMABgZQAAgugBgXQAAgkgBgSQgBgfgFgVQgYhkhOgaQgRgGgIABQgKABgPgGQgQgIgIgDIACgHQAaAKACAAQAGACAWADQhJgrhJANIgBgPQgHhdgyhIQgdgogzgVQgngPg/AVQAUAEAnAEQA8AGAbAkQA/BSAHBkQABAHgDAFQgCAEgHAFQgeAYgSAXQgPATgEAjIAVAHIAAAEIgRADIABAFQAGgCAOgCQALgCAHgEQAvghAJgvQABgEAGgEQAFgEAEAAQAMAAAYABQAVAAAOgIQAAAAAHABQA8AOAqAuQAZAdAHATQAgBagIBWQgCAZgNA/QgGAfAAABQgEASgGAMQgUAsgbAqQgFAIgKAHQgLAIgGAEQgDADgKAEQgIADgEAEQgHAHABAJQABAKAHAGQAHAHAKAAQAKAAAHgHIAcgWQAGgEAGgBQAQgCAhgDQApgGAUAdQAYAhgFAtQgJBMgJAtQgOBBgaAzQgfBAgHANQgYAqgaAcQghAmglAWQghASgZgZQgMgKgHgGIgNAbQgUAngLASQgTAhgVAUQg/A/hLAwQg5AlhOAMQguAIhhACQgGAAgFgEQgSgRgKgHQg/gsgphgIgQgoIgOASQgoA1g2AlQhVA7hngBQg8gCg7gmQgLgHgOgPQgPgQgHgJQgQgQgIgPQgSgkASgwQALghASgsQAWgyAKgaQACgDAJgUIgZACQgzACgZAAQgeAAgTgEQgKgBgLgLQgEgDgFgIQgFgIgEgDQgRgQgFgcQgFgcALgVQADgGACgLQAEgQABgBIgFgBIgIAbQAEg8AJggQARg1AXgqQAMgVAVgdQAMgRAXgfQAEgFAGgKQAGgIAFgEQARgMBXg6IATgNIgBgDIg+AAIAAgCIAmgPIgQgoIgQADQhEAPgPADQgNACgHgIQgNgPgDgmQgEgmALgRQAlg5AdgpQATgaAcgaQATgRAjgbQAagUAygYQAVgKAOABQATABANAXIAUgaIARAWIgZAAIgBADIAjAGIgfg5IAwAAIABgGIg8gTQAFgNACgHQAEgLAEgHQBDhVBNgVQBTgXA+AZQAKADAMAKQAHAGANAMQABABABAEQAAACAAAEQgJAAABAFQABADAEACQAXAIAIgBQAEgBAIgUQABgDAFgRQADgMAEgGQAggwA3ggQANgIAngKQAIgCAvgJIACgcIglAFIAIAJQgsAFgEABQgQADgFACQgLAEgGAJQgDAEgGAEQgHAEgCgCQgGgEgGADQgFAFgDACQgMALgGAGQgLAKgMACQgFABgGAKQgOATgXAjQgGgHgDgDQgFgGABgCQAFgJgGgFQgIgDgDgBQgLgGgNACQhRAHhRAJQAvgWBQgIQgmgJgUgBQghgCgaANIAugHIABAEQgtAMgSAGQgiANgXATIADgPQgaAYgMALQgVAUgMAPQgaAdgGAIQgQAWgIAWIAHgEQATgFABAAQAAAAAFALQgGADgDABQgFACgEABQg3AHg1AcQgtAYgwApQhRBHghBuQgEAQgBAdQAAAGABATQACAPgCAJQgDATARAQIA4A2IgJAMIALgFIgRAbQgZAhgMAQQgVAcgNAWQhHBxgHBwQgEA4AFAbQAJAzA2AeQAzAdAvgKQADgBAogDQgLAUgFAIQgMAMgEAHQgVAjgGAwQgCAYAAA/QABA8AsAjQAOAMAYAOQANAIAbAPQAEACAhALIgHgKIBJANQAGABALADQALADAHgBQAlgGA3gPQAagHAcgbQAJgJAngXQAegTANgVIAQAWQAJAMAQAYQAPAVAMANQAIAJARAMQAVAQAFAEQARAPAbAJQAOAFAgAIQAEABACAAIBLgFIABAGIgpACIADAFQEhgiCOj+IAzANIABgEIgFgGIAIgCQAMgGAZgJQAWgJALgKQAwgqAcguQAphEAbhKQAKgcAKgrIAQhIQAOg5gMgyQAAgCgEgbIACAAIAGAPQAAgugwglIACgBIAAgDQgWgSgmAAgAjxkdQAXAKAKAUQAKAUgHAXQgBAFgFAJQgFAJgCAEQgGAXgYAOQgKAFAAABQADAIgFAFQgHAFgDACQhdBHgkAYQgPAJgWAJQgbAJgNAFQgLAEgDAGQgCAGAEALQACAHAGADQAEABAIAAQAMABAFAEQAEAFgCALQgBAIgGAOQgDAIgHAPQgFANgCAJQgDAQgGAIQgHAJgOADIAbglIgFgEQgLAOgEAEIgbAYQgRANgJALQgWAagPAgQgGAPAGAIQAGAIAQgBQARgBAggHQABAAAMADIAAAEIgOAEQAOADANgEQAHgCAVgHQASgFAKgDQAsgJAnApQArAtgOBSQgDAUgJAmIgGAlQgBAKAAABIAVAsIAYgkIgJgEIAGgHQAHgIAQgPQANgPACgPQAAgCADgDQACgEABABQAIACAFgGQADgEAFgIQABgBAEgFQADgDADgBQAigNAggKIBIgUQADAAAFAAQAEAAAAABQACAMAKABQAFABAMgCQAlgCAaAaQAHAHAJAUIgEACIgzgoIgCADIA8BhIADgCIgfg0IADgCIAoAyIAEgNIAEgBQABAFAEAJQACAJgBAEQgFAPAIAMQAFAHAMANIgPhjQgDgQANgNQAfgeArAEIAGAAIgIgWQAHAAAOAAQAaABAMACQAKACAUAJIgCAFIgUABQARAIABAAQAeAYAlAgQAOANASgEIgJghIAFgDIA3A/IgEgQQgEgKgJghQgHgbgIgQQgRgiAbgnQAegrA6gpQADgCAGgHQAGgGAEgCQAVgJAJADQATAFAHgFQAIgGgCgUIgWgJQgGAAgCgBQgZgFgQgQQgRgQgCgWIANAEQgVgsgDgTQgDgTAHgyQgBgIABgDQAKgyAAgDQACgHAIgfQADgOAEgGQAJgOAigwQgkgdgBgBQgMgIgFgGQgIgIgEgMIAMAFIgWggQgIgMAIgKQAJgMACgSQAAgFgBgcQgIAGgnAjQgJAIgEAAQglACgRgBQgdgCgYgJQgngOgrgkQgOgMgHgJQgJgMAAgPQgJgCgBgBQgDgKgBgGQgCgJACgFQAFgXgDgFQgDgEgWgCQgNgBgBAMQgCAJgHAQIgFgCIAAgRQgCADgEAQQgDALgIAFQgdAUgOAKQgaARgVAFQgHAFgEABQgRAHgJAEQgQAGgLACQgMADgWACQgZACgJACQhAALhXgSQgFgCgDgBIABgCIAjAFIAAgEIhYgRQAKAPAvAiQAuAhAUAJg");
	this.shape_10.setTransform(594.4506,86.7844);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(342.6,-0.4,335,190.4);


(lib.Cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bumble_bee_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EFEFF0").s().p("AzONhQipgBh7hOQh8hOhGiZQg0hwAGh8QAGh1A4hpQA5hoBfhGQBjhJB5gTQAegFAtgCIBOgEQgYkWDWiHQDViGD2CQIAbhPQAdhUBIg5QBHg5BSgFQDQgMBgC2IAfA/QD7ibDWCWQBsBNAlBzQAiBqgXCOIBUgdQCwg9CeBDQCeBEBPCnQAGANAIAHQAJAHAQACQCjAYBmB6QBjB2gGCaQgGCwh4ByQh4ByiyAAI5VAAInaABIhtAAQjTAAiagCg");
	this.shape.setTransform(914.7832,134.5428);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AzMPkQjzAAiyiOQiziPgyjrQgdiKAeiHQAdiBBOhrQBNhrBxhEQB1hHCHgRQATgDAGgNIAFgYQAnjhC+iCQBhhDBygTQB8gVCHAoQBIiEB9g9QCLhDCWAjQCVAkBeB6QAJAMAHAEQAJAEAOgFQDrhJDJB8QDIB8AnD0IAEAQIA2gGQFkgSDCErQAHALALAIQALAJALADQCxA1BrCFQBtCHAIC0QAIDLh9CdQh6CajDAmQg2ALhKAAI25ABIxGAAgAvZpQQjWCIAYEWIhOAEQgtACgeAFQh5AThjBJQhfBFg5BoQg4BqgGB1QgGB7A0BwQBGCZB8BPQB7BNCpACQDAACEagBIHagBIZVAAQCyAAB4hxQB4hyAGiwQAGiahjh3Qhmh5ijgYQgQgDgJgHQgIgGgGgOQhPiniehDQiehDiwA8IhUAdQAXiOgihpQglh0hshMQjWiWj7CaIgfg/Qhgi1jQAMQhSAEhHA5QhIA5gdBVIgbBOQiAhKh2AAQhuAAhnBAg");
	this.shape_1.setTransform(914.7894,134.3832);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AzMPkQjzAAiyiOQiziPgyjrQgdiKAeiHQAdiBBOhrQBNhrBxhEQB1hHCHgRQATgDAGgNIAFgYQAnjhC+iCQBhhDBygTQB8gVCHAoQBIiEB9g9QCLhDCWAjQCVAkBeB6QAJAMAHAEQAJAEAOgFQDrhJDJB8QDIB8AnD0IAEAQIA2gGQFkgSDCErQAHALALAIQALAJALADQCxA1BrCFQBtCHAIC0QAIDLh9CdQh6CajDAmQg2ALhKAAI25ABIxGAAg");
	this.shape_2.setTransform(914.7894,134.3832);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(725.5,34.8,378.5999999999999,199.2);


(lib.Buzzoff = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgEASIAAg3IAJAAIAAA3g");
	this.shape.setTransform(50.5,9.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgGAnIAAgnIgJAAIAAgIIAJAAIAAgMQAAgIAEgFQADgFAHAAQAEAAAEADIAAAKQgEgDgDAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQgBACAAADIAAANIANAAIAAAIIgNAAIAAAng");
	this.shape_1.setTransform(46.925,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIAAgnIgJAAIAAgIIAJAAIAAgMQAAgIAEgFQADgFAHAAQAEAAAEADIAAAKQgEgDgDAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQgBACAAADIAAANIANAAIAAAIIgNAAIAAAng");
	this.shape_2.setTransform(42.925,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgRARQgIgHAAgKQAAgKAIgHQAHgIAKAAQAKAAAIAIQAIAHAAAKQAAAKgIAHQgHAJgLgBQgJABgIgJgAgKgKQgFAEAAAGQAAAGAFAEQAFAGAFgBQAGABAFgGQAFgEAAgGQAAgFgFgFQgFgFgGABQgFgBgFAFg");
	this.shape_3.setTransform(37.95,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAYIAdgmIgcAAIAAgJIAsAAIgcAmIAcAAIAAAJg");
	this.shape_4.setTransform(28.95,10.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgWAYIAdgmIgdAAIAAgJIAtAAIgcAmIAcAAIAAAJg");
	this.shape_5.setTransform(23.7,10.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOATQgGgGAAgKIAAgbIAKAAIAAAaQAAANAKAAQAFAAADgEQADgCAAgHIAAgaIAKAAIAAAcQAAAJgGAGQgGAGgJAAQgJAAgFgGg");
	this.shape_6.setTransform(18.5,10.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVAlIAAhJIALAAQAMAAAGAFQAIAFAAAHQAAAKgLAGQARAFAAAOQAAAJgJAGQgJAGgNAAgAgLAcIAAAAQANAAAEgEQAGgEAAgFQgBgGgFgDQgGgDgHAAIgEAAgAgLgFQAIAAAEgEQAEgDAAgFQAAgFgEgDQgDgCgHAAIgCAAg");
	this.shape_7.setTransform(13.05,9.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.8,17.8);


(lib.Bumblebeeai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bumble_bee_ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#34353C").s().p("AgPA6QgJgCgGgKQgFgJACgKIAThDQADgJAJgFQAIgGAKADQAKACAFAKQAFAKgCAJIgTBCQgDALgJAEQgFAEgGAAIgHgBg");
	this.shape.setTransform(26.6,75.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F3F3EC").s().p("AjKD6IgogHQgNg8AChKQADiVBIhIQBchbB4gkQB/glA6A6QA7A6gmCAQgjB4hbBbQhKBJiTADIgOAAQgoAAgpgFg");
	this.shape_1.setTransform(87.5497,29.5959);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AgmCeQAihmgRhwQgPhog6hjQBVBDA1BNQAzBHAAAsQAAAygxBIQgwBJhSBBQAdgzARgzg");
	this.shape_2.setTransform(110.375,90.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AgCBSQAChlgbhlQgahkg1hZQghg2glgtQBLAFBJAZQAkAmAbAfIAaAgIAdApQAeAtATArIACAFIAEAIIAJAZQAJAcAFAVIAHAlQADAigBASQAAAOgBANIgBAJIAAACIgBABQgFAdgGAWQgHAZgIAVIgCAEIgRAjQgXAtgdAnIhSBjQgoAOgoAJQBPiZAEiug");
	this.shape_3.setTransform(81.1286,89.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD995").s().p("AmnEmQivh6AAisQAAirCvh6QCwh6D3AAQDfAADJCoQBOBCAyBIQAvBEAAApQAAAzgvBGQgwBJhQBAQjECejkAAQj3AAiwh6g");
	this.shape_4.setTransform(59.925,90.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E9E9E8").s().p("AjLCsQgqiPAvhaQA7hzBphGQBshLBKAmQBJAmADCEQADB+g7ByQgvBciMAwQgsAPgwAJIgoAGQgeg1gWhIg");
	this.shape_5.setTransform(67.2482,29.5722);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.1,119.9,131.79999999999998);


(lib.Grasslong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.grassAibackgroundai("synched",0);
	this.instance.setTransform(172.55,33.15,0.7447,0.7447,0,0,0,231.7,44.5);

	this.instance_1 = new lib.grassAibackgroundai("synched",0);
	this.instance_1.setTransform(513.7,33.15,0.7447,0.7447,0,0,0,231.7,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,686.3,66.2);


(lib.Paperplane = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(5);
		}
		
		
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(2);
		
		
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{
			this.gotoAndPlay(5);
		}
	}
	this.frame_3 = function() {
		/* Fade Out Movie Clip
		Fades out the symbol instance by decreasing its alpha property within an Tick event until it is invisible.
		
		Instructions:
		1. To change the speed at which the symbol instance fades out, change the 0.01 value below (the number must be greater than 0 and less than or equal to 1). Higher values cause faster fade out.
		2. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
		*/
		
		var movieClip_1_FadeOutCbk = fl_FadeSymbolOut_2.bind(this);
		this.addEventListener('tick', movieClip_1_FadeOutCbk);
		this.movieClip_1.alpha = 1;
		
		function fl_FadeSymbolOut_2()
		{
			this.movieClip_1.alpha -= 0.01;
			if(this.movieClip_1.alpha <= 0)
			{
				this.removeEventListener('tick', movieClip_1_FadeOutCbk);
			}
		}
	}
	this.frame_139 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.movieClip_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{
			this.gotoAndPlay(145);
		}
	}
	this.frame_152 = function() {
		playSound("CartoonBalloonBeingBlownUp03wav");
	}
	this.frame_352 = function() {
		playSound("interface124464");
	}
	this.frame_368 = function() {
		playSound("interface124464");
	}
	this.frame_443 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.buzzoff.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(456);
		}
	}
	this.frame_461 = function() {
		playSound("CartoonBalloonBeingBlownUp03wav");
	}
	this.frame_714 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Tryagain.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(5);
		}
	}
	this.frame_716 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop(720);
	}
	this.frame_719 = function() {
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Tryagain.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(5);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3).call(this.frame_3).wait(136).call(this.frame_139).wait(13).call(this.frame_152).wait(200).call(this.frame_352).wait(16).call(this.frame_368).wait(75).call(this.frame_443).wait(18).call(this.frame_461).wait(253).call(this.frame_714).wait(2).call(this.frame_716).wait(3).call(this.frame_719).wait(1618));

	// Tryagain
	this.Tryagain = new lib.Tryagain();
	this.Tryagain.name = "Tryagain";
	this.Tryagain.setTransform(131.8,126.45,1,1,0,0,0,27.1,8.9);
	this.Tryagain._off = true;
	new cjs.ButtonHelper(this.Tryagain, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Tryagain).wait(712).to({_off:false},0).to({_off:true},44).wait(1581));

	// Mayday
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEASIAAg3IAJAAIAAA3g");
	this.shape.setTransform(253.35,9.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAfQgHgIAAgKQAAgKAHgHQAHgHAJAAQAFAAAFADQAFADADAFIAAgmIAKAAIAABLIgKAAIAAgKQgHAMgLAAQgJAAgHgIgAgJACQgGAEABAHQgBAGAGAFQAEAFAGAAQAGAAAFgFQAFgEAAgHQAAgHgFgEQgEgEgHAAQgGAAgEAEg");
	this.shape_1.setTransform(248.6,8.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRASQgHgHAAgLQAAgKAHgHQAIgHAJgBQALABAHAHQAHAIAAALIgoAAQABAHAFADQAFAEAFAAQAIAAAGgHIAIAGQgJAKgOABQgKAAgHgIgAgOgGIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_2.setTransform(242.425,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgOAZIAAgwIAKAAIAAAKQAEgGACgCQADgDAGAAIAEABIgDAKIgEgBQgFAAgDAEQgDAEAAAFIAAAag");
	this.shape_3.setTransform(237.725,10.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEAkIAAgwIAJAAIAAAwgAgEgWQgDgCAAgDQAAgDADgCQACgDACAAQADAAADADQACACAAADQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_4.setTransform(234.075,9.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOATQgGgGAAgJIAAgcIAKAAIAAAbQAAAMALAAQAEAAADgDQADgDAAgGIAAgbIAKAAIAAAcQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_5.setTransform(230.15,10.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAQAkIAAggQgIALgKAAQgJAAgHgIQgHgHAAgKQAAgKAHgIQAHgHAJAAQAEAAAGADQAFADADAFIAAgKIAKAAIAABGgAgKgVQgEAFAAAGQAAAHAEAEQAGAEAFAAQAHAAAFgEQAEgEAAgHQAAgHgEgEQgFgFgHABQgGgBgFAFg");
	this.shape_6.setTransform(224.1,11.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRASQgHgHAAgLQAAgKAHgHQAIgHAJgBQALABAHAHQAHAIAAALIgoAAQABAHAFADQAFAEAFAAQAIAAAGgHIAIAGQgJAKgOABQgKAAgHgIgAgOgGIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_7.setTransform(217.925,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAZIAAgwIAKAAIAAAKQAEgGACgCQADgDAGAAIAEABIgDAKIgEgBQgFAAgDAEQgDAEAAAFIAAAag");
	this.shape_8.setTransform(213.225,10.225);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgLAgQgHgEgDgIIALAAQAFAHAHABQAGAAAEgFQAEgEAAgGIAAgJQgIALgKAAQgJAAgHgIQgHgHAAgKQAAgKAHgIQAHgHAJAAQALAAAHAMIAAgLIAKAAIAAAuQAAAKgHAHQgHAHgKAAQgHAAgGgEgAgJgVQgFAFAAAGQAAAGAEAFQAFAEAGAAQAHAAAEgEQAFgEAAgHQAAgHgEgEQgFgFgHABQgGgBgEAFg");
	this.shape_9.setTransform(204.175,11.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_10.setTransform(198.375,10.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEAkIAAgwIAJAAIAAAwgAgEgWQgDgCAAgDQAAgDADgCQACgDACAAQADAAADADQACACAAADQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_11.setTransform(194.425,9.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAfQgHgIAAgKQAAgKAHgHQAHgHAJAAQAFAAAFADQAFADADAFIAAgmIAKAAIAABLIgKAAIAAgKQgHAMgLAAQgJAAgHgIgAgKACQgEAEAAAHQAAAGAEAFQAFAFAFAAQAHAAAGgFQAEgEAAgHQAAgHgEgEQgGgEgGAAQgGAAgFAEg");
	this.shape_12.setTransform(189.7,8.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_13.setTransform(183.875,10.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSASQgHgHAAgLQAAgKAHgHQAHgHAJgBQAFAAAFADQAFAEADAEIAAgKIAKAAIAAAwIgKAAIAAgJQgIAKgKABQgJAAgHgIgAgJgKQgFAEAAAGQAAAGAFAFQAEAFAGAAQAHAAAEgFQAFgEAAgHQAAgFgFgFQgEgFgHAAQgFAAgFAFg");
	this.shape_14.setTransform(177.875,10.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_15.setTransform(173.375,8.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgQAjIAPgiIgYgkIAMAAIARAbIALgbIALAAIgfBGg");
	this.shape_16.setTransform(165.7,11.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgLASQgIgHAAgLQAAgKAIgHQAHgHAKgBQAHABAHADIAAALQgIgEgGgBQgGAAgEAFQgGAEABAGQAAAGAEAEQAFAFAFAAQAHAAAIgGIAAAMQgIAEgHABQgJAAgHgIg");
	this.shape_17.setTransform(160.35,10.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_18.setTransform(155.375,10.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRASQgHgHAAgLQAAgKAHgHQAIgHAJgBQALABAHAHQAHAIAAALIgoAAQABAHAFADQAFAEAFAAQAIAAAGgHIAIAGQgJAKgOABQgKAAgHgIgAgOgGIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_19.setTransform(149.775,10.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgLAgQgHgEgDgIIALAAQAFAHAHABQAGAAAEgFQAEgEAAgGIAAgJQgIALgKAAQgJAAgHgIQgHgHAAgKQAAgKAHgIQAHgHAJAAQALAAAHAMIAAgLIAKAAIAAAuQAAAKgHAHQgHAHgKAAQgHAAgGgEgAgJgVQgFAFAAAGQAAAGAEAFQAFAEAGAAQAHAAAEgEQAFgEAAgHQAAgHgEgEQgFgFgHABQgGgBgEAFg");
	this.shape_20.setTransform(143.625,11.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOAZIAAgwIAKAAIAAAKQAEgGACgCQADgDAGAAIAEABIgDAKIgEgBQgFAAgDAEQgDAEAAAFIAAAag");
	this.shape_21.setTransform(138.775,10.225);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRASQgHgHAAgLQAAgKAHgHQAIgHAJgBQALABAHAHQAHAIAAALIgoAAQABAHAFADQAFAEAFAAQAIAAAGgHIAIAGQgJAKgOABQgKAAgHgIgAgOgGIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_22.setTransform(133.475,10.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAYAZIAAggQAAgIgIAAQgEAAgEAEQgDAEAAAGIAAAaIgJAAIAAgeQAAgKgIAAQgFAAgDAEQgDAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIQADgFAEgCQADgCAEAAQAGAAADACQACADACAFQAEgFADgDQAEgCAFAAQAGAAAEAEQAEAFAAAGIAAAig");
	this.shape_23.setTransform(126.5,10.225);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgUAlIAAhJIApAAIAAAKIgfAAIAAASIAfAAIAAAKIgfAAIAAAZIAfAAIAAAKg");
	this.shape_24.setTransform(120.025,8.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgEASIAAg3IAJAAIAAA3g");
	this.shape_25.setTransform(238.6,-6.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgIAJABQALgBAHAIQAHAHAAAMIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJAMgOgBQgKAAgHgHgAgOgFIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_26.setTransform(234.275,-5.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgLASQgIgIAAgKQAAgKAIgHQAHgIAKABQAHAAAHADIAAALQgIgFgGABQgGAAgFADQgEAFAAAGQgBAGAFAFQAFAEAFAAQAGAAAJgGIAAAMQgHAFgIgBQgJAAgHgHg");
	this.shape_27.setTransform(229,-5.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgEAkIAAgvIAJAAIAAAvgAgEgVQgDgDAAgDQAAgEADgCQACgCACAAQADAAADACQACACAAAEQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_28.setTransform(225.325,-6.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgOATQgGgGAAgKIAAgbIAKAAIAAAaQAAANALAAQAEAAADgEQADgCAAgHIAAgaIAKAAIAAAcQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_29.setTransform(221.4,-5.45);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgEAvIAAhGIAJAAIAABGgAgFghQgCgCAAgDQAAgEACgCQADgCACAAQADAAACACQADACAAAEQAAADgDACQgCADgDAAQgCAAgDgDg");
	this.shape_30.setTransform(217.45,-5.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgSASQgHgIAAgKQAAgJAHgIQAHgIAJABQAFAAAFADQAFACADAGIAAgKIAKAAIAAAvIgKAAIAAgKQgIAMgKgBQgJAAgHgHgAgJgLQgFAFAAAGQAAAGAFAGQAEAEAGAAQAHAAAEgEQAFgGAAgGQAAgGgFgFQgEgEgHAAQgFAAgFAEg");
	this.shape_31.setTransform(209.425,-5.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgFAfIAAgmIgIAAIAAgJIAIAAIAAgOIAJAAIAAAOIAKAAIAAAJIgKAAIAAAmg");
	this.shape_32.setTransform(204.625,-6.225);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgFAfIAAgmIgIAAIAAgJIAIAAIAAgOIAJAAIAAAOIAKAAIAAAJIgKAAIAAAmg");
	this.shape_33.setTransform(201.375,-6.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgOATQgGgGAAgKIAAgbIAKAAIAAAaQAAANALAAQAEAAADgEQADgCAAgHIAAgaIAKAAIAAAcQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_34.setTransform(197.1,-5.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgRARQgIgHAAgKQAAgJAIgIQAHgIAKABQALgBAHAIQAIAIAAAJQAAAKgIAHQgHAJgLgBQgJABgIgJgAgKgKQgFAEAAAGQAAAGAFAFQAEAEAGAAQAGAAAGgEQAEgFAAgGQAAgFgEgFQgGgFgGABQgGgBgEAFg");
	this.shape_35.setTransform(191.5,-5.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgQAQIAIgEQAEAEAEAAQADAAADgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgFgIgDQgIgDgDgDQgDgDAAgFQAAgFAFgFQAEgDAGAAQAHAAAIAGIgHAGIgEgCIgFgBQgFgBAAAFQAAAEAHADQAIACADAEQAEADAAAFQAAAGgFAFQgFAFgHgBQgJAAgHgJg");
	this.shape_36.setTransform(183.175,-5.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgCAPIgDgPIAAgOIALAAIAAAOIgDAPg");
	this.shape_37.setTransform(180.05,-10.175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgIAJABQALgBAHAIQAHAHAAAMIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJAMgOgBQgKAAgHgHgAgOgFIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_38.setTransform(175.875,-5.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_39.setTransform(170.225,-5.575);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgSASQgHgIAAgKQAAgJAHgIQAHgIAJABQAFAAAFADQAFACADAGIAAgKIAKAAIAAAvIgKAAIAAgKQgIAMgKgBQgJAAgHgHgAgJgLQgFAFAAAGQAAAGAFAGQAEAEAGAAQAHAAAEgEQAFgGAAgGQAAgGgFgFQgEgEgHAAQgFAAgFAEg");
	this.shape_40.setTransform(164.225,-5.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_41.setTransform(159.725,-6.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAkIAAhGIAKAAIAAAKQAIgLAKAAQAJAAAHAIQAHAHAAAKQAAAKgHAHQgHAIgJAAQgFAAgFgDQgFgDgDgFIAAAggAgLgVQgFAEAAAHQAAAHAFADQAFAFAGABQAGgBAEgFQAFgDAAgHQAAgHgFgEQgEgFgGAAQgGAAgFAFg");
	this.shape_42.setTransform(155.2,-4.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgIAJABQALgBAHAIQAHAHAAAMIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJAMgOgBQgKAAgHgHgAgOgFIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_43.setTransform(145.475,-5.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AALAmIAAgfQAAgEgCgDQgDgCgEAAQgEAAgEADQgEAFABAFIAAAbIgLAAIAAhLIALAAIAAAkQAEgGADgBQADgCAFAAQAGgBAFAFQAEAFAAAFIAAAig");
	this.shape_44.setTransform(139.8,-6.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEAlIAAg/IgSAAIAAgKIAtAAIAAAKIgSAAIAAA/g");
	this.shape_45.setTransform(134.6,-6.825);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEASIAAg3IAJAAIAAA3g");
	this.shape_46.setTransform(205.95,-22.575);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgQAjIAPgiIgYgkIAMAAIARAbIALgbIALAAIgfBGg");
	this.shape_47.setTransform(201.6,-20.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgSASQgHgHAAgLQAAgJAHgIQAHgHAJgBQAFAAAFADQAFAEADAEIAAgKIAKAAIAAAwIgKAAIAAgKQgIAMgKAAQgJAAgHgIgAgJgKQgFAEAAAGQAAAGAFAFQAEAFAGAAQAHAAAEgFQAFgEAAgHQAAgFgFgFQgEgFgHAAQgFAAgFAFg");
	this.shape_48.setTransform(195.525,-21.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgSAfQgHgIAAgKQAAgKAHgHQAHgHAJAAQAFAAAFADQAFADADAFIAAgmIAKAAIAABLIgKAAIAAgKQgHAMgLAAQgKAAgGgIgAgKACQgEAEAAAHQAAAGAEAFQAGAFAEAAQAHAAAGgFQAEgEAAgHQAAgHgEgEQgGgEgGAAQgGAAgFAEg");
	this.shape_49.setTransform(188.9,-22.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgRAjIARgiIgZgkIALAAIARAbIANgbIAKAAIggBGg");
	this.shape_50.setTransform(183.2,-20.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgSASQgHgHAAgLQAAgJAHgIQAHgHAJgBQAFAAAFADQAFAEADAEIAAgKIAKAAIAAAwIgKAAIAAgKQgIAMgKAAQgJAAgHgIgAgJgKQgFAEAAAGQAAAGAFAFQAEAFAGAAQAHAAAEgFQAFgEAAgHQAAgFgFgFQgEgFgHAAQgFAAgFAFg");
	this.shape_51.setTransform(177.125,-21.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgUgJIgNAuIgKAAIAVhNIAWA4IAXg4IAVBNIgKAAIgNguIgVAxg");
	this.shape_52.setTransform(169.325,-22.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},555).to({state:[]},38).wait(1744));

	// Blow
	this.movieClip_2 = new lib.Symbol2();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.setTransform(136.1,26.4);
	this.movieClip_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.movieClip_2).wait(138).to({_off:false},0).to({_off:true},14).wait(2185));

	// SlowsDown
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgDAkQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAgAgEASIAAg3IAJAAIAAA3g");
	this.shape_53.setTransform(214.45,2.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgSAfQgHgIAAgKQAAgKAHgHQAHgHAJAAQAFAAAFADQAFADADAFIAAgmIAKAAIAABLIgKAAIAAgKQgHAMgLAAQgKAAgGgIgAgKACQgEAEAAAHQAAAGAEAFQAGAFAFAAQAHAAAFgFQAEgEAAgHQAAgHgEgEQgFgEgHAAQgGAAgFAEg");
	this.shape_54.setTransform(209.7,2.825);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_55.setTransform(203.875,4.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgEAkIAAgvIAJAAIAAAvgAgEgVQgDgDAAgDQAAgEADgBQACgDACAAQADAAADADQACABAAAEQAAADgCADQgDACgDgBQgCABgCgCg");
	this.shape_56.setTransform(199.925,2.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAAgEIgMAeIgYgxIAJAAIAPAdIAMgfIAOAfIAOgdIAJAAIgYAxg");
	this.shape_57.setTransform(194.625,4.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQALAAAHAHQAHAIAAALIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJALgOAAQgKABgHgIgAgOgFIAdAAQgFgLgKABQgJgBgFALg");
	this.shape_58.setTransform(184.325,4.15);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAYAZIAAggQAAgIgIAAQgEAAgEAEQgDAEAAAGIAAAaIgJAAIAAgeQAAgKgIAAQgFAAgDAEQgDAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIQADgFAEgCQADgCAEAAQAGAAADACQACADACAFQAEgFADgDQAEgCAFAAQAGAAAEAEQAEAFAAAGIAAAig");
	this.shape_59.setTransform(177.35,4.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgRASQgIgIAAgKQAAgJAIgIQAHgHAKAAQALAAAHAHQAIAIAAAJQAAAKgIAIQgHAHgLAAQgJAAgIgHgAgKgKQgFAFAAAFQAAAGAFAFQAEAEAGAAQAGAAAGgEQAEgFAAgGQAAgGgEgEQgGgEgGAAQgGAAgEAEg");
	this.shape_60.setTransform(170.35,4.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgQAQIAIgEQAEAEAEAAQADAAADgCQAAAAABgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgFgIgDQgIgDgDgDQgDgDAAgFQAAgFAFgFQAEgDAGAAQAHgBAIAIIgHAFIgEgCIgFgBQgFgBAAAFQAAAEAHACQAIADADAEQAEADAAAFQAAAHgFAEQgFAFgHgBQgJABgHgKg");
	this.shape_61.setTransform(165.325,4.15);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgLAgQgHgEgDgJIALAAQAFAIAHAAQAGABAEgFQAEgEAAgFIAAgKQgIALgKAAQgJAAgHgIQgHgHAAgKQAAgKAHgIQAHgHAJAAQALAAAHAMIAAgLIAKAAIAAAuQAAAKgHAHQgHAHgKAAQgHAAgGgEgAgJgVQgFAFAAAGQAAAGAEAEQAFAGAGAAQAHAAAEgGQAFgDAAgHQAAgGgEgFQgFgFgHAAQgGAAgEAFg");
	this.shape_62.setTransform(156.575,5.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_63.setTransform(150.775,4.075);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgEAkIAAgvIAJAAIAAAvgAgEgVQgDgDAAgDQAAgEADgBQACgDACAAQADAAADADQACABAAAEQAAADgCADQgDACgDgBQgCABgCgCg");
	this.shape_64.setTransform(146.825,2.95);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAAgEIgMAeIgYgxIAJAAIAPAdIAMgfIAOAfIAOgdIAJAAIgYAxg");
	this.shape_65.setTransform(141.525,4.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgRASQgIgIAAgKQAAgJAIgIQAHgHAKAAQAKAAAIAHQAIAIAAAJQAAAKgIAIQgHAHgLAAQgJAAgIgHgAgKgKQgFAFAAAFQAAAGAFAFQAEAEAGAAQAGAAAGgEQAEgFAAgGQAAgGgEgEQgGgEgGAAQgGAAgEAEg");
	this.shape_66.setTransform(134.9,4.15);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_67.setTransform(130.575,2.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgHAjQgFgDgDgFIAAAKIgKAAIAAhLIAKAAIAAAlQAHgKALAAQAJAAAHAHQAHAHAAAKQAAAKgHAIQgHAIgJAAQgEAAgGgEgAgLACQgFAEAAAHQAAAHAFAEQAEAFAHAAQAGAAAFgFQAEgFAAgGQAAgHgFgEQgEgEgGAAQgHAAgEAEg");
	this.shape_68.setTransform(126.075,2.825);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgQAkIAQgjIgZgjIALAAIARAaIAMgaIALAAIgfBGg");
	this.shape_69.setTransform(116.3,5.25);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgHAjQgFgDgDgFIAAAKIgKAAIAAhLIAKAAIAAAlQAHgKALAAQAJAAAHAHQAHAHAAAKQAAAKgHAIQgHAIgJAAQgEAAgGgEgAgLACQgFAEAAAHQAAAHAFAEQAEAFAHAAQAGAAAFgFQAEgFAAgGQAAgHgFgEQgEgEgGAAQgHAAgEAEg");
	this.shape_70.setTransform(110.775,2.825);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgFAfIAAgmIgIAAIAAgJIAIAAIAAgOIAJAAIAAAOIAKAAIAAAJIgKAAIAAAmg");
	this.shape_71.setTransform(102.425,3.425);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgEAkIAAgvIAJAAIAAAvgAgEgVQgDgDAAgDQAAgEADgBQACgDACAAQADAAADADQACABAAAEQAAADgCADQgDACgDgBQgCABgCgCg");
	this.shape_72.setTransform(99.425,2.95);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgZAkIAAhGIAKAAIAAAKQAIgLAKAAQAJAAAHAHQAHAIAAAKQAAAKgHAHQgHAIgJAAQgFAAgEgDQgFgDgEgFIAAAggAgMgVQgEAFAAAGQAAAGAEAEQAGAGAGAAQAGAAAEgGQAFgDAAgHQAAgGgFgFQgEgFgGAAQgGAAgGAFg");
	this.shape_73.setTransform(91.65,5.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_74.setTransform(86.925,2.75);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQALAAAHAHQAHAIAAALIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJALgOAAQgKABgHgIgAgOgFIAdAAQgFgLgKABQgJgBgFALg");
	this.shape_75.setTransform(82.575,4.15);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AASAlIAAgkIgjAAIAAAkIgKAAIAAhJIAKAAIAAAcIAjAAIAAgcIAKAAIAABJg");
	this.shape_76.setTransform(75.95,2.825);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgSAfQgHgIAAgKQAAgKAHgHQAHgHAJAAQAFAAAFADQAFADADAFIAAgmIAKAAIAABLIgKAAIAAgKQgHAMgLAAQgKAAgGgIgAgKACQgEAEAAAHQAAAGAEAFQAGAFAFAAQAHAAAEgFQAFgEAAgHQAAgHgFgEQgEgEgHAAQgGAAgFAEg");
	this.shape_77.setTransform(202.15,-12.975);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgRASQgHgHAAgLQAAgKAHgHQAIgIAJAAQALAAAHAIQAHAHAAAMIgoAAQABAHAFADQAFAEAFAAQAIAAAGgHIAIAGQgJAKgOABQgKgBgHgHgAgOgGIAdAAQgFgJgKgBQgJABgFAJg");
	this.shape_78.setTransform(195.975,-11.65);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgRASQgHgHAAgLQAAgKAHgHQAIgIAJAAQALAAAHAIQAHAHAAAMIgoAAQABAHAFADQAFAEAFAAQAIAAAGgHIAIAGQgJAKgOABQgKgBgHgHgAgOgGIAdAAQgFgJgKgBQgJABgFAJg");
	this.shape_79.setTransform(189.975,-11.65);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgZAkIAAhGIAKAAIAAAKQAIgLAKAAQAJAAAHAIQAHAHAAAKQAAAKgHAHQgHAIgJAAQgFAAgEgDQgFgDgEgFIAAAggAgMgVQgEAFAAAGQAAAGAEAFQAGAEAGAAQAGAAAFgEQAEgEAAgHQAAgGgEgFQgFgFgGAAQgGAAgGAFg");
	this.shape_80.setTransform(183.8,-10.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgQAQIAIgEQAEAEAEAAQADAAADgBQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgIgDQgIgDgDgCQgDgEAAgEQAAgHAFgDQAEgFAGAAQAHAAAIAHIgHAHIgEgEIgFgBQgFABAAAEQAAADAHADQAIAEADACQAEAEAAAFQAAAHgFAEQgFAEgHABQgJAAgHgKg");
	this.shape_81.setTransform(178.375,-11.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgQAQIAIgEQAEAEAEAAQADAAADgBQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAgEgIgDQgIgDgDgCQgDgEAAgEQAAgHAFgDQAEgFAGAAQAHAAAIAHIgHAHIgEgEIgFgBQgFABAAAEQAAADAHADQAIAEADACQAEAEAAAFQAAAHgFAEQgFAEgHABQgJAAgHgKg");
	this.shape_82.setTransform(171.075,-11.65);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgFAfIAAgmIgIAAIAAgJIAIAAIAAgOIAJAAIAAAOIAKAAIAAAJIgKAAIAAAmg");
	this.shape_83.setTransform(167.475,-12.375);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgEAkIAAgwIAJAAIAAAwgAgEgWQgDgCAAgDQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_84.setTransform(164.475,-12.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgLAgQgHgEgDgIIALAAQAFAHAHABQAGgBAEgEQAEgEAAgGIAAgJQgIALgKAAQgJAAgHgIQgHgHAAgKQAAgLAHgGQAHgIAJAAQALAAAHALIAAgKIAKAAIAAAtQAAALgHAHQgHAHgKAAQgHAAgGgEgAgJgVQgFAFAAAGQAAAGAEAFQAFAEAGAAQAHAAAEgEQAFgEAAgHQAAgGgEgFQgFgFgHABQgGgBgEAFg");
	this.shape_85.setTransform(156.425,-10.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_86.setTransform(150.625,-11.725);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgEAkIAAgwIAJAAIAAAwgAgEgWQgDgCAAgDQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_87.setTransform(146.675,-12.85);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgQAQIAIgEQAEAEAEAAQADAAADgBQAAgBABAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAgEgIgDQgIgDgDgCQgDgEAAgEQAAgHAFgDQAEgFAGAAQAHAAAIAHIgHAHIgEgEIgFgBQgFABAAAEQAAADAHADQAIAEADACQAEAEAAAFQAAAHgFAEQgFAEgHABQgJAAgHgKg");
	this.shape_88.setTransform(143.375,-11.65);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgRARQgIgHAAgKQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAAKgIAHQgHAJgLAAQgJAAgIgJgAgKgKQgFAFAAAFQAAAGAFAEQAEAGAGAAQAGAAAGgGQAEgEAAgGQAAgFgEgFQgGgFgGAAQgGAAgEAFg");
	this.shape_89.setTransform(138.4,-11.65);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_90.setTransform(134.075,-13.05);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgQAQIAIgEQAEAEAEAAQADAAADgBQAAgBABAAQAAgBAAAAQAAgBABgBQAAAAAAgBQAAgEgIgDQgIgDgDgCQgDgEAAgEQAAgHAFgDQAEgFAGAAQAHAAAIAHIgHAHIgEgEIgFgBQgFABAAAEQAAADAHADQAIAEADACQAEAEAAAFQAAAHgFAEQgFAEgHABQgJAAgHgKg");
	this.shape_91.setTransform(127.425,-11.65);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgDAPIgCgPIAAgOIALAAIAAAOIgDAPg");
	this.shape_92.setTransform(124.3,-16.325);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgFAfIAAgmIgIAAIAAgJIAIAAIAAgOIAJAAIAAAOIAKAAIAAAJIgKAAIAAAmg");
	this.shape_93.setTransform(121.525,-12.375);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgEAkIAAgwIAJAAIAAAwgAgEgWQgDgCAAgDQAAgDADgDQACgCACAAQADAAADACQACADAAADQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_94.setTransform(118.525,-12.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgLAOIALgeIAMAEIgOAdg");
	this.shape_95.setTransform(112.6,-9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgRARQgIgHAAgKQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAAKgHAHQgIAJgKAAQgKAAgIgJgAgKgKQgFAFAAAFQAAAGAFAEQAEAGAGAAQAHAAAEgGQAFgEAAgGQAAgFgFgFQgEgFgHAAQgGAAgEAFg");
	this.shape_96.setTransform(108.65,-11.65);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_97.setTransform(102.975,-11.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AALAmIAAgfQAAgFgDgCQgCgCgDAAQgFAAgEAEQgDADgBAHIAAAaIgKAAIAAhLIAKAAIAAAjQAFgEADgDQADgCAFAAQAGABAEAEQAFAFAAAFIAAAig");
	this.shape_98.setTransform(94.4,-13.05);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgcAcQgMgMAAgQQAAgQAMgLQAMgMAQAAQARAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgRAAQgQAAgMgMgAgVgUQgIAJAAALQAAAMAJAJQAJAIAMAAQAMAAAJgJQAIgIAAgMQAAgLgIgJQgJgIgNAAQgMAAgJAIg");
	this.shape_99.setTransform(87.175,-12.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},108).to({state:[]},36).wait(2193));

	// Take_Flight
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(152.1,32.6);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).to({_off:true},14).wait(2323));

	// Oh_NO_bee
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgEASIAAg3IAJAAIAAA3g");
	this.shape_100.setTransform(232.6,-11.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgIAJABQALgBAHAIQAHAHAAAMIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJAMgOgBQgKAAgHgHgAgOgFIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_101.setTransform(228.275,-10);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgIAJABQALgBAHAIQAHAHAAAMIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJAMgOgBQgKAAgHgHgAgOgFIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_102.setTransform(222.275,-10);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgHAjQgFgDgDgFIAAAKIgKAAIAAhLIAKAAIAAAlQAHgKALAAQAJAAAHAHQAHAHAAAKQAAAKgHAIQgHAIgJAAQgEAAgGgEgAgLACQgFAEAAAHQAAAHAFAEQAEAFAHAAQAGAAAFgFQAEgFAAgGQAAgHgFgEQgEgEgGAAQgHAAgEAEg");
	this.shape_103.setTransform(216.125,-11.325);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgSASQgHgIAAgKQAAgJAHgIQAHgIAJABQAFAAAFADQAFACADAGIAAgKIAKAAIAAAvIgKAAIAAgKQgIAMgKgBQgJAAgHgHgAgJgLQgFAFAAAGQAAAGAFAGQAEAEAGAAQAHAAAEgEQAFgGAAgGQAAgGgFgFQgEgEgHAAQgFAAgFAEg");
	this.shape_104.setTransform(205.975,-10);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AgQAQIAIgEQAEAEAEAAQADAAADgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgFgIgDQgIgDgDgDQgDgDAAgFQAAgFAFgFQAEgDAGAAQAHAAAIAGIgHAGIgEgCIgFgBQgFgBAAAFQAAAEAHADQAIACADAEQAEADAAAFQAAAGgFAFQgFAFgHgBQgJAAgHgJg");
	this.shape_105.setTransform(197.475,-10);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgCAPIgDgPIAAgOIALAAIAAAOIgDAPg");
	this.shape_106.setTransform(194.35,-14.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgFAfIAAgmIgIAAIAAgJIAIAAIAAgOIAJAAIAAAOIAKAAIAAAJIgKAAIAAAmg");
	this.shape_107.setTransform(191.575,-10.725);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgEAlIAAhJIAJAAIAABJg");
	this.shape_108.setTransform(188.55,-11.325);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAgAgEASIAAg3IAJAAIAAA3g");
	this.shape_109.setTransform(207.2,-29.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgRASQgIgIAAgKQAAgJAIgIQAIgHAJAAQALAAAHAHQAIAIAAAJQAAAKgIAIQgIAHgKAAQgJAAgIgHgAgKgKQgFAFAAAFQAAAGAFAFQAFAEAFAAQAHAAAEgEQAFgFAAgGQAAgGgFgEQgEgEgHAAQgFAAgFAEg");
	this.shape_110.setTransform(202.9,-27.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AALAZIAAgfQAAgEgDgDQgCgCgEAAQgEAAgEAEQgEAEAAAGIAAAaIgKAAIAAgwIAKAAIAAAIIAIgHQADgCAEAAQAHAAAEAEQAFAFAAAGIAAAig");
	this.shape_111.setTransform(197.225,-27.875);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AALAmIAAgfQAAgEgCgDQgDgCgDAAQgFAAgEADQgEAFAAAFIAAAbIgKAAIAAhLIAKAAIAAAkQAFgGADgCQADgBAFAAQAGgBAEAFQAFAEAAAHIAAAhg");
	this.shape_112.setTransform(188.65,-29.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgcAcQgMgMAAgQQAAgQAMgLQAMgMAQAAQARAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgRAAQgQAAgMgMgAgVgUQgIAJAAALQAAAMAJAJQAJAIAMAAQAMAAAJgJQAIgIAAgMQAAgLgIgJQgJgIgNAAQgMAAgJAIg");
	this.shape_113.setTransform(181.425,-29.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},413).to({state:[]},31).wait(1893));

	// buzzoff
	this.buzzoff = new lib.Buzzoff();
	this.buzzoff.name = "buzzoff";
	this.buzzoff.setTransform(146.45,-4.05,1,1,0,0,0,23.1,8.9);
	this.buzzoff._off = true;
	new cjs.ButtonHelper(this.buzzoff, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.buzzoff).wait(443).to({_off:false},0).to({_off:true},30).wait(1864));

	// Blow_the_bee_away_
	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgEAkQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAgAgEASIAAg3IAJAAIAAA3g");
	this.shape_114.setTransform(208.65,-44.875);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgQAjIAPgiIgYgkIAMAAIARAbIALgbIALAAIgfBGg");
	this.shape_115.setTransform(204.3,-42.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgSASQgHgHAAgLQAAgKAHgHQAHgIAJAAQAFAAAFAEQAFADADAEIAAgKIAKAAIAAAwIgKAAIAAgJQgIAKgKABQgJgBgHgHgAgJgKQgFAFAAAFQAAAHAFAEQAEAFAGAAQAHAAAEgFQAFgFAAgGQAAgGgFgEQgEgFgHAAQgFAAgFAFg");
	this.shape_116.setTransform(198.225,-43.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAAgEIgMAdIgYgwIAJAAIAPAdIAMgfIAOAfIAOgdIAJAAIgYAxg");
	this.shape_117.setTransform(191.525,-43.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgSASQgHgHAAgLQAAgKAHgHQAHgIAJAAQAFAAAFAEQAFADADAEIAAgKIAKAAIAAAwIgKAAIAAgJQgIAKgKABQgJgBgHgHgAgJgKQgFAFAAAFQAAAHAFAEQAEAFAGAAQAHAAAEgFQAFgFAAgGQAAgGgFgEQgEgFgHAAQgFAAgFAFg");
	this.shape_118.setTransform(184.125,-43.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgIAJABQALgBAHAIQAHAIAAALIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJALgOAAQgKABgHgIgAgOgFIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_119.setTransform(223.475,-59.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgIAJABQALgBAHAIQAHAIAAALIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJALgOAAQgKABgHgIgAgOgFIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_120.setTransform(217.475,-59.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgHAjQgFgDgDgFIAAAKIgKAAIAAhLIAKAAIAAAlQAHgKALAAQAJAAAHAHQAHAHAAAKQAAAKgHAIQgHAIgJAAQgEAAgGgEgAgLACQgFAEAAAHQAAAHAFAEQAEAFAHAAQAGAAAFgFQAEgFAAgGQAAgHgFgEQgEgEgGAAQgHAAgEAEg");
	this.shape_121.setTransform(211.325,-60.725);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgIAJABQALgBAHAIQAHAIAAALIgoAAQABAHAFAEQAFADAFAAQAIAAAGgHIAIAFQgJALgOAAQgKABgHgIgAgOgFIAdAAQgFgKgKAAQgJAAgFAKg");
	this.shape_122.setTransform(201.575,-59.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AALAmIAAgfQAAgEgDgDQgBgCgFAAQgEAAgEADQgDAEgBAGIAAAbIgKAAIAAhLIAKAAIAAAkQAEgGAEgBQADgCAFAAQAGgBAFAFQAEAFAAAFIAAAig");
	this.shape_123.setTransform(195.9,-60.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgFAfIAAgmIgIAAIAAgJIAIAAIAAgOIAJAAIAAAOIAKAAIAAAJIgKAAIAAAmg");
	this.shape_124.setTransform(191.725,-60.125);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AAAgEIgMAeIgYgxIAJAAIAPAdIAMgfIAOAfIAOgdIAJAAIgYAxg");
	this.shape_125.setTransform(182.775,-59.45);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgRARQgIgHAAgKQAAgJAIgIQAHgIAKABQALgBAHAIQAIAIAAAJQAAAKgHAHQgIAIgKAAQgKAAgIgIgAgKgKQgFAFAAAFQAAAGAFAFQAFAEAFAAQAHAAAFgEQAEgFAAgGQAAgGgEgEQgFgFgHABQgFgBgFAFg");
	this.shape_126.setTransform(176.15,-59.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgEAmIAAhLIAJAAIAABLg");
	this.shape_127.setTransform(171.825,-60.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgVAlIAAhJIALAAQAMAAAGAFQAIAFAAAHQAAAKgLAGQARAFAAAOQAAAJgIAGQgKAGgNAAgAgLAcIABAAQAMAAAFgEQAEgEABgFQAAgGgGgDQgFgDgJAAIgDAAgAgLgFQAJAAADgEQAEgDAAgFQAAgFgEgDQgDgCgHAAIgCAAg");
	this.shape_128.setTransform(167.65,-60.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},421).to({state:[]},59).wait(1857));

	// Cloud3_copy
	this.instance = new lib.Cloud("synched",0);
	this.instance.setTransform(638.2,-44.95,0.2369,0.2369,0,0,0,914.8,134.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({_off:false},0).to({startPosition:0},404).to({x:-297.3},243).to({_off:true},723).wait(853));

	// Cloud3
	this.instance_1 = new lib.Cloud("synched",0);
	this.instance_1.setTransform(638.2,-44.95,0.2369,0.2369,0,0,0,914.8,134.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({startPosition:0},403).to({x:-297.3},243).to({_off:true},723).wait(968));

	// Bee
	this.instance_2 = new lib.Bumblebeeai("synched",0);
	this.instance_2.setTransform(407,12.95,0.4537,0.4537,0,0,0,60,65.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(402).to({_off:false},0).to({guide:{path:[407.1,13,406.9,13.3,406.5,13.6,405.7,14.2,404.6,14.4,394.2,15.7,384.7,21.2,379.3,24.7,376.4,26.2,371.5,28.8,367.4,28.5,364.2,28.3,361.1,26.5,358.2,24.8,356,21.9,352.6,17.5,350.6,9.7,349.8,6.3,349.4,4.5]}},5).to({rotation:14.9991,x:196.7,y:-2.8},49).to({x:182.8,y:-25.7},10).to({_off:true},1).wait(1870));

	// WindBlow_copy
	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#CCCCCC").s().p("AhDCCQgCgDABgEQABgFAHgGQAKgMAMgRIAZgjQATgcAIgOQANgTAJgWQAVgtAGguQAAgGAEAAQAFAMgFAWQgJAugXAuQgTAkgoA5IgdAoQgEAGgFAAQgDABgCgEg");
	this.shape_129.setTransform(84.3583,39.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#CCCCCC").s().p("AiOBYQgIgDACgHQABgHAPgCQAQgDApgNIAsgPQANgFAjgSQAjgRATgNQAlgaAfgpQAEgGAEgBQAEAJgEALQgDAGgJAKQgYAcgOAMQgTAPgrAZQgiAUgUAIIhJAZQgXAIgOABIgFABQgFAAgDgCg");
	this.shape_130.setTransform(64.2741,54.6667);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#CCCCCC").s().p("AiMBHIgEgBQgDgCAAgEQgBgIAEgCIAGgCQAngCBNgNQAxgIAYgMQAagMAcgZQAYgVAHgRQAFgMAGgBQAEAKgIAQQgMAZgVATQgGAFgJAGIgWAQQgZASgeAHIhBAMIguAHQgSACgPAAIgOgBg");
	this.shape_131.setTransform(61.2949,51.825);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#CCCCCC").s().p("AgpBXQADgJALgJQAPgMADgEIAHgKIAFgGIAEgGQAOgbAHgaQAEgOABgMIACgMIADgrIABgDQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAABQADAXgBAQIgEAfIgHAgIgFAOQgOAngQATIgVAUQgMAMgFAKQgGgKAFgMg");
	this.shape_132.setTransform(85.9556,35.31);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#CCCCCC").s().p("AhlCNQgIgBgCgHQgBgDACgDQABgEADgBIAIgCQAQgBAdgPQAegPATgPIAPgPQAvgtATgcQAjg0gGg2QgCgQAGgEQAFAugFAcQgIAsgfAoQgWAdgrAnIgQAOQgOAKgbAOQgYAMgNAEIgKABIgDAAg");
	this.shape_133.setTransform(70.7425,44.9417);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#CCCCCC").s().p("Ag4ClQADgFAPgMQAagTATgaQAPgSALgVQATgoAChHQAChAgIgkQgHgcAGgLQAKAbACAjQACAXAAApQgBAugDAbQgGAogOAeQgOAcgbAdQgSATgkAcQgGgKAIgMg");
	this.shape_134.setTransform(92.0514,33.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#CCCCCC").s().p("AATAwQgRgmgWghQgGgJgBgFQgDgGABgIQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAABIAOAUIAXArIAKATQAJAQgFAKIgBAAQgFAAgDgIg");
	this.shape_135.setTransform(96.0008,12.5321);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#CCCCCC").s().p("AgmCoIAOgVQAQgWALgfQAHgVAKglQAMgqABgXIABgeIABhHQAAgRgCgIQgGgTAAgLQAAgEADgCQAEgBADAIQAEAXABAuQABBOgGAmQgCAQgFAUQgXBkgvA3QgEgKAGgOg");
	this.shape_136.setTransform(82.5021,16.0888);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CCCCCC").s().p("AgECVQADgGAHgLQAWgbALgaQAOghADg3IABgmQgBgVgDgHQgEgLgLgKQgPgQgngUIgjgQIgIgEQgEgDACgGQACgGAEgBQAFgBAJAEIAbAOQAaAMAPAMQAXASAHAUQAGAPAAAfQgBAwgEAdQgFAqgQAfQgLAYgeAmQgFgJAFgLg");
	this.shape_137.setTransform(88.7386,21.8063);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CCCCCC").s().p("AAmBAIhOhlQgHgJgDgHQgCgLAGgGQApA6AvA4QAOARgHAJIgBABQgEAAgGgHg");
	this.shape_138.setTransform(91.9183,7.3563);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#CCCCCC").s().p("AAACVQgBgQABgYIAFgpQACgfgBguQAAgogBgUQgDghgHgZIgIgeQAAgDABgCQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAIASAGAhQAJA3gCBKIgHCCIgDATQgDgEAAgMg");
	this.shape_139.setTransform(88.3111,13.1208);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#CCCCCC").s().p("AAHBDIADgbQADgbgIgcQgFgSgKgXQgLgZAHgMQAWArAHAwQAHAxgLAvQgFgLABgQg");
	this.shape_140.setTransform(83.175,-1.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#CCCCCC").s().p("AAjAyQgcgxgpgiQgHgEgDgFQgEgHADgGQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQACAAADADQAaAWAUAaIAdAmQAFAIACAFQADAJgFAGQgEgBgFgIg");
	this.shape_141.setTransform(81.1181,-6.5786);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#CCCCCC").s().p("AAeCKIAEhDQADg/gDgbQgKhLg1g3QgJgJgCgFQgFgKAHgGQA4A2ARBMQAHAfABAmQAAAWgDAxIgEBKQgBALgDAEQgEgPACgbg");
	this.shape_142.setTransform(93.0208,7.875);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#CCCCCC").s().p("AAxBeIgKglIgag3Igig3IgHgJIgOgKQgHgEgCgDQgDgEAAgGQAAgFAEgEQARAJAJAKQAJAIAIAPIAVAjQAXAqAKAfIAEALQAHAXgFANIgEgFg");
	this.shape_143.setTransform(79.7929,-17.975);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCCCCC").s().p("AgeDBQADgGAKgRQARggAJgfQASg4AAhBQAAgogFgbQgKg1gbguQgIgMgCgHQgEgMAEgIQArA/ALBLQAEAeAAAnQgBBMgRA1QgHAWgVAvIgQAiQgGgLAFgQg");
	this.shape_144.setTransform(77.431,4.625);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CCCCCC").s().p("AAmAMQgHgDgOAAIg0AAIgEgBIgCgFIgBgHQAAgFADgBIAEgBIBBABQAIAAADADQACACAAAFIAAAGQAAAFgCABg");
	this.shape_145.setTransform(70.075,-27.675);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CCCCCC").s().p("AgQA8QgDgsAFgSQADgKAIgPQAMgbAHgKQAHAKgLATIgOAdQgIAPAAAOIAAAVQAAANgDAIIAAAAQgDAAAAgFg");
	this.shape_146.setTransform(60.4491,-19.1479);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#CCCCCC").s().p("AgPBiQAAgLAGgUIAKg/QAEgPAAgNIACgQIACgSIgCgKQgDgNACgWQACgGACABIAEAbQADAcgCAMIgMBXQgGAngGATIgDAFIgDgLg");
	this.shape_147.setTransform(91.8344,6.1683);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#CCCCCC").s().p("AB1CnQAUhagahbQgahchAhCQgKgLgIgEQgMgFgYAFQgYAFgLAGQgbAOgOAiQgJAVgFApQgCAMADAFQADAGAKAEQAXALAYABQAEADgBAGQgBAGgEACQgHAEgNgDQgLgCgMgFQgQgHgGgKQgDgHAAgPQACghAIgdQANg1AfgWQAUgOAmgDQAQgCAJAEQAKAEAMANQBKBSAXBsQAXBqgiBpQgEgNAIgfg");
	this.shape_148.setTransform(73.889,-9.4583);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#CCCCCC").s().p("Ag2AhIgCgFQAAgMAJgOQAFgGAOgOQAKgLAIgDQAEgBAJAAIAzABQAFAKgFAJIg0ABQgLABgEACQgEACgMAMIgNANQgGAJgCAHIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_149.setTransform(65.469,-29.8607);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#CCCCCC").s().p("AAbClQgCgZADhFQADg7gIggQgEgSgNggIgQgoIgLgWIgJgOQgEgIgBgHQgBgIAEgGQAMARAMAZIASAtQAOAhAEASQAJAjgCA3QgCBRAAAMQACAUgCAKQgFgBgBgKg");
	this.shape_150.setTransform(91.4582,-13.875);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#CCCCCC").s().p("AgUAuQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgCgNAMgVIAJgPQAOgbAKgNQAEAHgDALQgBAEgGAMIgVAkQAGAEAAAIQAAAFgEAIQgCgBgHABIgCAAQgDAAgCgCg");
	this.shape_151.setTransform(48.7838,-51.27);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#CCCCCC").s().p("Ah1BNQgNgBgGgEQgIgHgCgRQgCgSADgdQACggAJgOQAGgIAJgGQAPgMAPgEQAIgDAXAAQAOAAAKACQANADATAMQBGArAfAbQAZAVAGADIAIAFQAFADACADQADAEAAAFQAAAFgEACQgLgCgLgJIgTgRQgngihLgqQgOgJgKgCQgHgCgQAAIgYACQgXAEgQAQQgJAJgDAHQgCADgCAOIgCATQgDAXAHAJQAJAJAWAAQASAAAJgEQAJgEAHgJQAHgHAHgNQAHAKgHAOQgEAJgMALIgNAKQgGAEgPAAg");
	this.shape_152.setTransform(57.3219,-51.025);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CCCCCC").s().p("AAVAtIgKgcQgLgXgagjQgHgJgCgFQgEgJAHgGQAkAvAMAcQAGASAFAJIAJATQADAMgEAIQgHgJgHgRg");
	this.shape_153.setTransform(86.5805,-27.975);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#CCCCCC").s().p("AAaAbIgZgdQgFgHgIgGQgKgHgLgCQgIgBgCgDQgBgDAAgEQAAgGADgCQABgCAEAAQAOAAANALQAHAFANAQIAXAbQAIAKABAFQAFAJgGAIQgEgEgMgPg");
	this.shape_154.setTransform(55.7763,-67.075);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#CCCCCC").s().p("AgfAhQgHgZAMgVQAIgPAXgUIAZgVQADACABAFQABAEgCAFQgCAFgJAHIgZAYQgMAKgFAIQgIANAEALQACAFAGAGIALAKQAFAFABAHQABAIgDAEQgXgNgHgYg");
	this.shape_155.setTransform(48.5161,-65.15);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#CCCCCC").s().p("AAGgFIgdgtQgVgfgSgMIgIgHQgCgEABgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQADgBACACQATAMAYAiIAlA6QAXAkAJASQARAgAHAcQADANgFAFQgRg2guhGg");
	this.shape_156.setTransform(74.8613,-35.0917);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#CCCCCC").s().p("AAyAWIgJgJQgHgEgPgCIgOgHQgIgFgWAAIgdAAIgFgBQgEgBAAgIQAAgIADgCIAGgBIAmABIANABQAFABAJAFIAPAHIALACQAGACADADIAHAHQAFAFAEgBQAEAJgFAKIgCABQgEAAgFgFg");
	this.shape_157.setTransform(38.7139,-58.935);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CCCCCC").s().p("ABLBLQgTgggogpIgUgUIgQgPIgZgVQgFgEgEgBIgGAAQgQAAgFAFQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQgCgNAFgFIAGgEQAOgEAMAGIANAKIAeAaQAIAIAKAMIAJALIAbAaIAdAnIAHALQADAKgDAHIgBAAQgEAAgEgHg");
	this.shape_158.setTransform(59.0657,-47.736);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#CCCCCC").s().p("AAhAzIgig7QgdgygRgYIgagiIgIgOQgDgGACgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIAEACIARAVIAWAgQA8BgAyBdQAIAPACAIQADANgGALQgLgggkg/g");
	this.shape_159.setTransform(76.5395,-40.975);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#CCCCCC").s().p("AgbAuQgEgMAMgSQATgdAVgaIAFgGQAGAHgFALQgCAFgIAKQgUAYgQAbQgEAHgEAAIAAAAg");
	this.shape_160.setTransform(29.0778,-56.5483);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CCCCCC").s().p("ABFAxQgTgYgIgIIgOgMQgdgZgSgKQgLgHghgNIgUgFQgIgBgBgCIgBgKQAAgGACgBQABgBAEAAQALACANAEIAhAOQAbAOApAlQAMAKAFAHIAKAOIAJAJQAFAGAGAKQAGAKABADQACAIgGAFg");
	this.shape_161.setTransform(56.7517,-64.025);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#CCCCCC").s().p("AgCBKQgGgBgLgKQgPgOgCgDQgIgOABgRQABgWATgkIASgeQAFALgKAUIgUApQgHANACAJQABAFAFAFIAJAJQAJAKAEABQAMAFAUgTQANgOgEgJQgBgDgMgHQgLgFACgIQACgHAIABQAFAAAGAFQAIAHACAMQADALgEALQgFATgVARQgJAHgHAAIgCAAg");
	this.shape_162.setTransform(22.2402,-46.0568);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#CCCCCC").s().p("AAlAXQgkgigxgIQgMgCgDgDQgEgCgBgEQgBgFACgDQAEgGAMADQA5ANAZAYIASARIAJAFQAFADACAEQAEAEAAAFQAAAGgEADQgLgCgRgSg");
	this.shape_163.setTransform(46.4083,-61.7279);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#CCCCCC").s().p("AheA6IAHgPIAWgoQAGgJARgTIAWgYQAKgLAOgLIAFgEIAGgBIASABIALABQAGABAGADQASAIANAKQAHAIACAEQACAJgGAFIgSgNQgKgHgHgDQgNgGgaACQgHgBgEACQgFACgGAGIgnAqQgMANgGAKIgMAYQgGALgNAUIgCAAQgDgIADgKg");
	this.shape_164.setTransform(33.2243,-54.95);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#CCCCCC").s().p("AA6gEIgPgIQgKgEgNgBQgRgCghgBIhYgBQgCgHAAgGQAAgBAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQABgBAEAAQBVgCAqAEQASACAIADQAKAEAIAFQAXAPAMAJIANAMIANANQACAFAAAFQgBAFgEACQgZgbghgTg");
	this.shape_165.setTransform(40.155,-69.8583);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#CCCCCC").s().p("AhNBcQABgfAdgoQA1hKBEgtQAEAGAAAEQAAAHgNAJQgYAQgVAUIgqAuIgFAGQgfAkgQAwQgEgCABgGg");
	this.shape_166.setTransform(19.9159,-57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},455).to({state:[{t:this.shape_133},{t:this.shape_132}]},2).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151}]},1).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154}]},1).to({state:[{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_161},{t:this.shape_160}]},1).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[]},1).to({state:[]},737).wait(1127));

	// Bee2
	this.instance_3 = new lib.Bumblebeeai("synched",0);
	this.instance_3.setTransform(181.5,-25.4,0.4537,0.4537,0,0,0,60,65.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(466).to({_off:false},0).to({regY:65.7,rotation:29.9987,x:204.85,y:-12.75},29).to({guide:{path:[204.8,-12.9,217.4,-17,225.8,-17.9,236.7,-19.1,245.3,-15.8,246.5,-15.3,247.6,-14.8,256.9,-10.4,261.7,-4,265.8,1.4,265.8,6.8,265.8,12.2,260.2,16.4,253.9,21,245.7,19.3,237,17.4,233.6,10.5,230.3,3.7,234.2,-2.9,237.7,-8.7,245.3,-15.8,245.9,-16.3,246.4,-16.8,254.5,-24,264.2,-30.3,264.5,-30.4,264.7,-30.6,271.2,-34.1,277.6,-37.7,292.1,-45.1,297,-45.4,306.1,-46.1,312.9,-43.2,322.3,-39.4,318.8,-30.3,315.1,-21.1,299.1,-19.4,293,-18.8,286.5,-19.5,280.6,-20.1,277.3,-21.4,273.9,-22.8,269.6,-26.2,266.9,-28.3,264.7,-30.6,262.8,-32.5,261.3,-34.5,252.2,-46.2,257.5,-56,258.7,-57.7,259.9,-59.4,263.2,-63.7,267.1,-67.7,279.5,-80.3,293.9,-84.8,308.2,-89.3,333.9,-94.8,346.7,-97.6,356.7,-99.4], orient:'fixed'}},70).to({x:426.4,y:-124.85},25).to({_off:true},486).wait(1261));

	// Cloud_Ring
	this.instance_4 = new lib.Cloudrings("synched",0);
	this.instance_4.setTransform(705.85,34.85,1,1,0,0,0,509.8,94.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(310).to({_off:false},0).to({x:224.9,y:7.95},28).to({guide:{path:[224.9,8,222.9,7.9,221,7.9,211,7.8,202.7,8.8,198.4,9.4,193.6,10.3]}},5).to({guide:{path:[193.5,10.4,189.6,11.1,185.3,12.1,180,13.4,168.3,16.6,137.1,25.2,105.8,33.8,69.2,43.9,49.9,47.2,42.7,48.5,35.9,49.3]}},25).to({guide:{path:[35.8,49.2,15,51.7,-3,50.1]}},6).to({guide:{path:[-3.1,50.1,-5.1,49.9,-7,49.7,-23.8,47.7,-54.1,38.6,-86,29.1,-101,26.8,-129.6,22.6,-165.6,27.8,-187.7,31.1,-229.5,41.7,-230,41.4,-230,40.8,-230.1,40.2,-229.7,39.7,-229.1,39,-227.6,38.7,-222.7,37.5,-218,36.5]}},13).to({_off:true},667).wait(1283));

	// WindBlow
	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#CCCCCC").s().p("AhDCCQgCgDABgEQABgFAHgGQAKgMAMgRIAZgjQATgcAIgOQANgTAJgWQAVgtAGguQAAgGAEAAQAFAMgFAWQgJAugXAuQgTAkgoA5IgdAoQgEAGgFAAQgDABgCgEg");
	this.shape_167.setTransform(84.3583,39.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#CCCCCC").s().p("AiOBYQgIgDACgHQABgHAPgCQAQgDApgNIAsgPQANgFAjgSQAjgRATgNQAlgaAfgpQAEgGAEgBQAEAJgEALQgDAGgJAKQgYAcgOAMQgTAPgrAZQgiAUgUAIIhJAZQgXAIgOABIgFABQgFAAgDgCg");
	this.shape_168.setTransform(64.2741,54.6667);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CCCCCC").s().p("AiMBHIgEgBQgDgCAAgEQgBgIAEgCIAGgCQAngCBNgNQAxgIAYgMQAagMAcgZQAYgVAHgRQAFgMAGgBQAEAKgIAQQgMAZgVATQgGAFgJAGIgWAQQgZASgeAHIhBAMIguAHQgSACgPAAIgOgBg");
	this.shape_169.setTransform(61.2949,51.825);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#CCCCCC").s().p("AgpBXQADgJALgJQAPgMADgEIAHgKIAFgGIAEgGQAOgbAHgaQAEgOABgMIACgMIADgrIABgDQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAABQADAXgBAQIgEAfIgHAgIgFAOQgOAngQATIgVAUQgMAMgFAKQgGgKAFgMg");
	this.shape_170.setTransform(85.9556,35.31);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#CCCCCC").s().p("AhlCNQgIgBgCgHQgBgDACgDQABgEADgBIAIgCQAQgBAdgPQAegPATgPIAPgPQAvgtATgcQAjg0gGg2QgCgQAGgEQAFAugFAcQgIAsgfAoQgWAdgrAnIgQAOQgOAKgbAOQgYAMgNAEIgKABIgDAAg");
	this.shape_171.setTransform(70.7425,44.9417);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#CCCCCC").s().p("Ag4ClQADgFAPgMQAagTATgaQAPgSALgVQATgoAChHQAChAgIgkQgHgcAGgLQAKAbACAjQACAXAAApQgBAugDAbQgGAogOAeQgOAcgbAdQgSATgkAcQgGgKAIgMg");
	this.shape_172.setTransform(92.0514,33.775);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#CCCCCC").s().p("AATAwQgRgmgWghQgGgJgBgFQgDgGABgIQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAABIAOAUIAXArIAKATQAJAQgFAKIgBAAQgFAAgDgIg");
	this.shape_173.setTransform(96.0008,12.5321);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CCCCCC").s().p("AgmCoIAOgVQAQgWALgfQAHgVAKglQAMgqABgXIABgeIABhHQAAgRgCgIQgGgTAAgLQAAgEADgCQAEgBADAIQAEAXABAuQABBOgGAmQgCAQgFAUQgXBkgvA3QgEgKAGgOg");
	this.shape_174.setTransform(82.5021,16.0888);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#CCCCCC").s().p("AgECVQADgGAHgLQAWgbALgaQAOghADg3IABgmQgBgVgDgHQgEgLgLgKQgPgQgngUIgjgQIgIgEQgEgDACgGQACgGAEgBQAFgBAJAEIAbAOQAaAMAPAMQAXASAHAUQAGAPAAAfQgBAwgEAdQgFAqgQAfQgLAYgeAmQgFgJAFgLg");
	this.shape_175.setTransform(88.7386,21.8063);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#CCCCCC").s().p("AAmBAIhOhlQgHgJgDgHQgCgLAGgGQApA6AvA4QAOARgHAJIgBABQgEAAgGgHg");
	this.shape_176.setTransform(91.9183,7.3563);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#CCCCCC").s().p("AAACVQgBgQABgYIAFgpQACgfgBguQAAgogBgUQgDghgHgZIgIgeQAAgDABgCQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAIASAGAhQAJA3gCBKIgHCCIgDATQgDgEAAgMg");
	this.shape_177.setTransform(88.3111,13.1208);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CCCCCC").s().p("AAHBDIADgbQADgbgIgcQgFgSgKgXQgLgZAHgMQAWArAHAwQAHAxgLAvQgFgLABgQg");
	this.shape_178.setTransform(83.175,-1.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#CCCCCC").s().p("AAjAyQgcgxgpgiQgHgEgDgFQgEgHADgGQABAAAAgBQAAgBABAAQAAAAABgBQAAAAABAAQACAAADADQAaAWAUAaIAdAmQAFAIACAFQADAJgFAGQgEgBgFgIg");
	this.shape_179.setTransform(81.1181,-6.5786);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#CCCCCC").s().p("AAeCKIAEhDQADg/gDgbQgKhLg1g3QgJgJgCgFQgFgKAHgGQA4A2ARBMQAHAfABAmQAAAWgDAxIgEBKQgBALgDAEQgEgPACgbg");
	this.shape_180.setTransform(93.0208,7.875);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#CCCCCC").s().p("AAxBeIgKglIgag3Igig3IgHgJIgOgKQgHgEgCgDQgDgEAAgGQAAgFAEgEQARAJAJAKQAJAIAIAPIAVAjQAXAqAKAfIAEALQAHAXgFANIgEgFg");
	this.shape_181.setTransform(79.7929,-17.975);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#CCCCCC").s().p("AgeDBQADgGAKgRQARggAJgfQASg4AAhBQAAgogFgbQgKg1gbguQgIgMgCgHQgEgMAEgIQArA/ALBLQAEAeAAAnQgBBMgRA1QgHAWgVAvIgQAiQgGgLAFgQg");
	this.shape_182.setTransform(77.431,4.625);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CCCCCC").s().p("AAmAMQgHgDgOAAIg0AAIgEgBIgCgFIgBgHQAAgFADgBIAEgBIBBABQAIAAADADQACACAAAFIAAAGQAAAFgCABg");
	this.shape_183.setTransform(70.075,-27.675);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CCCCCC").s().p("AgQA8QgDgsAFgSQADgKAIgPQAMgbAHgKQAHAKgLATIgOAdQgIAPAAAOIAAAVQAAANgDAIIAAAAQgDAAAAgFg");
	this.shape_184.setTransform(60.4491,-19.1479);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#CCCCCC").s().p("AgPBiQAAgLAGgUIAKg/QAEgPAAgNIACgQIACgSIgCgKQgDgNACgWQACgGACABIAEAbQADAcgCAMIgMBXQgGAngGATIgDAFIgDgLg");
	this.shape_185.setTransform(91.8344,6.1683);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CCCCCC").s().p("AB1CnQAUhagahbQgahchAhCQgKgLgIgEQgMgFgYAFQgYAFgLAGQgbAOgOAiQgJAVgFApQgCAMADAFQADAGAKAEQAXALAYABQAEADgBAGQgBAGgEACQgHAEgNgDQgLgCgMgFQgQgHgGgKQgDgHAAgPQACghAIgdQANg1AfgWQAUgOAmgDQAQgCAJAEQAKAEAMANQBKBSAXBsQAXBqgiBpQgEgNAIgfg");
	this.shape_186.setTransform(73.889,-9.4583);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#CCCCCC").s().p("Ag2AhIgCgFQAAgMAJgOQAFgGAOgOQAKgLAIgDQAEgBAJAAIAzABQAFAKgFAJIg0ABQgLABgEACQgEACgMAMIgNANQgGAJgCAHIgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_187.setTransform(65.469,-29.8607);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#CCCCCC").s().p("AAbClQgCgZADhFQADg7gIggQgEgSgNggIgQgoIgLgWIgJgOQgEgIgBgHQgBgIAEgGQAMARAMAZIASAtQAOAhAEASQAJAjgCA3QgCBRAAAMQACAUgCAKQgFgBgBgKg");
	this.shape_188.setTransform(91.4582,-13.875);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#CCCCCC").s().p("AgUAuQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQgCgNAMgVIAJgPQAOgbAKgNQAEAHgDALQgBAEgGAMIgVAkQAGAEAAAIQAAAFgEAIQgCgBgHABIgCAAQgDAAgCgCg");
	this.shape_189.setTransform(48.7838,-51.27);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CCCCCC").s().p("Ah1BNQgNgBgGgEQgIgHgCgRQgCgSADgdQACggAJgOQAGgIAJgGQAPgMAPgEQAIgDAXAAQAOAAAKACQANADATAMQBGArAfAbQAZAVAGADIAIAFQAFADACADQADAEAAAFQAAAFgEACQgLgCgLgJIgTgRQgngihLgqQgOgJgKgCQgHgCgQAAIgYACQgXAEgQAQQgJAJgDAHQgCADgCAOIgCATQgDAXAHAJQAJAJAWAAQASAAAJgEQAJgEAHgJQAHgHAHgNQAHAKgHAOQgEAJgMALIgNAKQgGAEgPAAg");
	this.shape_190.setTransform(57.3219,-51.025);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#CCCCCC").s().p("AAVAtIgKgcQgLgXgagjQgHgJgCgFQgEgJAHgGQAkAvAMAcQAGASAFAJIAJATQADAMgEAIQgHgJgHgRg");
	this.shape_191.setTransform(86.5805,-27.975);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#CCCCCC").s().p("AAaAbIgZgdQgFgHgIgGQgKgHgLgCQgIgBgCgDQgBgDAAgEQAAgGADgCQABgCAEAAQAOAAANALQAHAFANAQIAXAbQAIAKABAFQAFAJgGAIQgEgEgMgPg");
	this.shape_192.setTransform(55.7763,-67.075);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#CCCCCC").s().p("AgfAhQgHgZAMgVQAIgPAXgUIAZgVQADACABAFQABAEgCAFQgCAFgJAHIgZAYQgMAKgFAIQgIANAEALQACAFAGAGIALAKQAFAFABAHQABAIgDAEQgXgNgHgYg");
	this.shape_193.setTransform(48.5161,-65.15);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#CCCCCC").s().p("AAGgFIgdgtQgVgfgSgMIgIgHQgCgEABgKQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQADgBACACQATAMAYAiIAlA6QAXAkAJASQARAgAHAcQADANgFAFQgRg2guhGg");
	this.shape_194.setTransform(74.8613,-35.0917);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#CCCCCC").s().p("AAyAWIgJgJQgHgEgPgCIgOgHQgIgFgWAAIgdAAIgFgBQgEgBAAgIQAAgIADgCIAGgBIAmABIANABQAFABAJAFIAPAHIALACQAGACADADIAHAHQAFAFAEgBQAEAJgFAKIgCABQgEAAgFgFg");
	this.shape_195.setTransform(38.7139,-58.935);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#CCCCCC").s().p("ABLBLQgTgggogpIgUgUIgQgPIgZgVQgFgEgEgBIgGAAQgQAAgFAFQgBAAAAAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQgCgNAFgFIAGgEQAOgEAMAGIANAKIAeAaQAIAIAKAMIAJALIAbAaIAdAnIAHALQADAKgDAHIgBAAQgEAAgEgHg");
	this.shape_196.setTransform(59.0657,-47.736);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#CCCCCC").s().p("AAhAzIgig7QgdgygRgYIgagiIgIgOQgDgGACgGQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAIAEACIARAVIAWAgQA8BgAyBdQAIAPACAIQADANgGALQgLgggkg/g");
	this.shape_197.setTransform(76.5395,-40.975);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#CCCCCC").s().p("AgbAuQgEgMAMgSQATgdAVgaIAFgGQAGAHgFALQgCAFgIAKQgUAYgQAbQgEAHgEAAIAAAAg");
	this.shape_198.setTransform(29.0778,-56.5483);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#CCCCCC").s().p("ABFAxQgTgYgIgIIgOgMQgdgZgSgKQgLgHghgNIgUgFQgIgBgBgCIgBgKQAAgGACgBQABgBAEAAQALACANAEIAhAOQAbAOApAlQAMAKAFAHIAKAOIAJAJQAFAGAGAKQAGAKABADQACAIgGAFg");
	this.shape_199.setTransform(56.7517,-64.025);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#CCCCCC").s().p("AgCBKQgGgBgLgKQgPgOgCgDQgIgOABgRQABgWATgkIASgeQAFALgKAUIgUApQgHANACAJQABAFAFAFIAJAJQAJAKAEABQAMAFAUgTQANgOgEgJQgBgDgMgHQgLgFACgIQACgHAIABQAFAAAGAFQAIAHACAMQADALgEALQgFATgVARQgJAHgHAAIgCAAg");
	this.shape_200.setTransform(22.2402,-46.0568);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#CCCCCC").s().p("AAlAXQgkgigxgIQgMgCgDgDQgEgCgBgEQgBgFACgDQAEgGAMADQA5ANAZAYIASARIAJAFQAFADACAEQAEAEAAAFQAAAGgEADQgLgCgRgSg");
	this.shape_201.setTransform(46.4083,-61.7279);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#CCCCCC").s().p("AheA6IAHgPIAWgoQAGgJARgTIAWgYQAKgLAOgLIAFgEIAGgBIASABIALABQAGABAGADQASAIANAKQAHAIACAEQACAJgGAFIgSgNQgKgHgHgDQgNgGgaACQgHgBgEACQgFACgGAGIgnAqQgMANgGAKIgMAYQgGALgNAUIgCAAQgDgIADgKg");
	this.shape_202.setTransform(33.2243,-54.95);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#CCCCCC").s().p("AA6gEIgPgIQgKgEgNgBQgRgCghgBIhYgBQgCgHAAgGQAAgBAAgBQAAAAAAgBQABgBAAAAQAAgBABAAQABgBAEAAQBVgCAqAEQASACAIADQAKAEAIAFQAXAPAMAJIANAMIANANQACAFAAAFQgBAFgEACQgZgbghgTg");
	this.shape_203.setTransform(40.155,-69.8583);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#CCCCCC").s().p("AhNBcQABgfAdgoQA1hKBEgtQAEAGAAAEQAAAHgNAJQgYAQgVAUIgqAuIgFAGQgfAkgQAwQgEgCABgGg");
	this.shape_204.setTransform(19.9159,-57.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]},152).to({state:[{t:this.shape_171},{t:this.shape_170}]},2).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_175},{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_177},{t:this.shape_176}]},1).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178}]},1).to({state:[{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_186},{t:this.shape_185},{t:this.shape_184}]},1).to({state:[{t:this.shape_188},{t:this.shape_187}]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[]},1).to({state:[]},754).wait(1413));

	// Plane2
	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(36.5,33.75,1,0.6349,0,0,0,0,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(154).to({_off:false},0).to({regX:0.1,regY:-0.1,scaleY:1,rotation:-17.9163,guide:{path:[38,33.7,37.4,-24.5,59.3,-84.2]}},29).to({rotation:19.7472,x:21.3,y:55.55},61).to({regX:0,regY:0,rotation:-14.9983,x:49.25,y:-52.75},38).to({guide:{path:[49.3,-52.6,50.8,-58.2,52.5,-63.8]}},10).to({guide:{path:[52.5,-63.8,51.3,-60,50.3,-56.2]}},9).to({guide:{path:[50.3,-56.2,51.3,-60,52.5,-63.8]}},6).to({regX:0.1,regY:-0.1,scaleX:0.9999,scaleY:0.9999,rotation:-3.4198,guide:{path:[52.5,-63.9,39.7,-21.9,38.2,19.3]}},21).to({regX:0.2,regY:0.1,scaleY:0.7901,rotation:11.5799,guide:{path:[38.1,19.3,38.1,19.3,38.1,19.3]}},19).to({scaleY:0.8071,rotation:10.3606,guide:{path:[38.1,19.3,37.8,27.5,38,35.6]}},7).to({regX:0.3,regY:0.2,scaleX:0.9998,scaleY:0.9659,rotation:-4.9855,guide:{path:[38,35.6,38.1,45.3,38.9,55]}},16).to({regX:0.2,regY:0.1,scaleX:0.9999,scaleY:0.8413,rotation:7.9188,guide:{path:[38.9,55,37.5,37.3,38.1,19.5]}},12).to({regY:0.2,rotation:-7.0803,guide:{path:[38.1,19.5,37.8,28.3,38,37.2]}},24).to({regX:0.4,regY:0.3,rotation:17.755,guide:{path:[38,37.1,38.2,44.5,38.7,51.8]}},101).to({regX:0.2,regY:0.1,rotation:7.9188,guide:{path:[38.7,51.8,37.6,35.7,38.1,19.5]}},53).to({regX:0.1,regY:-0.1,scaleY:0.9999,rotation:-3.4198,guide:{path:[38.1,19.5,38.1,19.4,38.1,19.3]}},14).to({regY:0,rotation:-9.3772,guide:{path:[38.1,19.3,38,24.1,37.9,28.9]}},45).to({startPosition:0},24).to({regY:-0.1,rotation:-3.4198,guide:{path:[37.9,28.9,38,24.1,38.1,19.3]}},4).to({scaleX:1,scaleY:1,rotation:14.9184,guide:{path:[38.2,19.4,36.2,74.2,54.1,127.6]}},39).to({regX:0.2,scaleX:0.9999,scaleY:0.9999,rotation:15.262,x:28.55,y:105.3},4).to({regX:0.1,scaleX:1,scaleY:1,rotation:15.4336,x:59.4,y:141.8},2).to({_off:true},407).wait(1238));

	// Plane
	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(1,1,1).p("AHxjbIjxGwIjyhkAj/AfIAfC9IB8icAj/AfIjxhAIPhi6AjgDcIDuhrIhygxIJVkbIrwD6");
	this.shape_205.setTransform(-1.2481,34.6309,0.3564,0.3564);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#666666").s().p("AAEhNIB0AxIjvBqg");
	this.shape_206.setTransform(-4.9988,39.6911,0.3564,0.3564);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#CCCCCC").s().p("Al4AfILxj6IpWEbIh7Ccg");
	this.shape_207.setTransform(3.037,34.6309,0.3564,0.3564);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(1,1,1).p("AHxjbIjxGwIjyhkIhygxIJVkbIrwD6IjxhAgAjgDcIB8icAj/AfIAfC9IDuhr");
	this.shape_208.setTransform(-1.2481,34.6309,0.3564,0.3564);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_207,p:{x:3.037,y:34.6309,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:-4.9988,y:39.6911,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_205,p:{x:-1.2481,y:34.6309,rotation:0,scaleX:0.3564,scaleY:0.3564}}]},14).to({state:[{t:this.shape_207,p:{x:3.037,y:34.6309,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:-4.9988,y:39.6911,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_208,p:{x:-1.2481,y:34.6309,rotation:0,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:3.937,y:32.0809,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:-4.0988,y:37.1411,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_208,p:{x:-0.3481,y:32.0809,rotation:0,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:3.937,y:32.0809,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:-4.0988,y:37.1411,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_208,p:{x:-0.3481,y:32.0809,rotation:0,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:10.087,y:26.5809,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:2.0512,y:31.6411,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_205,p:{x:5.8019,y:26.5809,rotation:0,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[]},1).to({state:[{t:this.shape_207,p:{x:23.487,y:1.1309,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:15.4512,y:6.1911,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_208,p:{x:19.2019,y:1.1309,rotation:0,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:31.887,y:-3.0691,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:23.8512,y:1.9911,rotation:0,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_208,p:{x:27.6019,y:-3.0691,rotation:0,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:50.511,y:-4.2958,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:41.4395,y:-1.4877,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_208,p:{x:46.3719,y:-5.4048,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:73.411,y:2.3042,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:64.3395,y:5.1123,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_205,p:{x:69.2719,y:1.1952,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:94.561,y:3.9042,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:85.4895,y:6.7123,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_205,p:{x:90.4219,y:2.7952,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:106.461,y:3.3042,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:97.3895,y:6.1123,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_205,p:{x:102.3219,y:2.1952,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:117.911,y:3.8542,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:108.8395,y:6.6623,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_205,p:{x:113.7719,y:2.7452,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:125.561,y:3.8542,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:116.4895,y:6.6623,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_208,p:{x:121.4219,y:2.7452,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:137.061,y:3.8542,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:127.9895,y:6.6623,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_208,p:{x:132.9219,y:2.7452,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:145.161,y:3.8542,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_206,p:{x:136.0895,y:6.6623,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}},{t:this.shape_205,p:{x:141.0219,y:2.7452,rotation:14.9991,scaleX:0.3564,scaleY:0.3564}}]},1).to({state:[{t:this.shape_207,p:{x:146.4207,y:4.216,rotation:14.9991,scaleX:0.4669,scaleY:0.4669}},{t:this.shape_206,p:{x:134.535,y:7.8952,rotation:14.9991,scaleX:0.4669,scaleY:0.4669}},{t:this.shape_208,p:{x:140.9975,y:2.7629,rotation:14.9991,scaleX:0.4669,scaleY:0.4669}}]},1).to({state:[{t:this.shape_207,p:{x:143.9804,y:10.4308,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}},{t:this.shape_206,p:{x:126.4716,y:15.8514,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}},{t:this.shape_205,p:{x:135.9914,y:8.2906,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}}]},1).to({state:[{t:this.shape_207,p:{x:135.0304,y:15.4308,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}},{t:this.shape_206,p:{x:117.5216,y:20.8514,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}},{t:this.shape_208,p:{x:127.0414,y:13.2906,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}}]},1).to({state:[{t:this.shape_207,p:{x:123.9804,y:18.3308,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}},{t:this.shape_206,p:{x:106.4716,y:23.7514,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}},{t:this.shape_205,p:{x:115.9914,y:16.1906,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}}]},1).to({state:[{t:this.shape_207,p:{x:123.9804,y:13.2308,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}},{t:this.shape_206,p:{x:106.4716,y:18.6514,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}},{t:this.shape_208,p:{x:115.9914,y:11.0906,rotation:14.9969,scaleX:0.6878,scaleY:0.6878}}]},1).to({state:[]},1).wait(2302));

	// Plane1_5
	this.instance_6 = new lib.Tween5("synched",0);
	this.instance_6.setTransform(128.85,23.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({_off:false},0).to({scaleY:0.7738,guide:{path:[128.8,23.8,108.4,31.7,88.4,34.5]}},22).to({scaleY:1,rotation:-8.2121,guide:{path:[88.4,34.6,39.6,41.5,-6.5,18]}},51).to({rotation:0,guide:{path:[-6.6,17.8,14.8,28.8,36.6,33.1]}},46).to({_off:true},3).wait(2180));

	// Stickman
	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#999999").ss(2,1,1).p("ACNAAQAAA6gqApQgpAqg6AAQg5AAgpgqQgpgpAAg6QAAg5ApgqQApgpA5AAQA6AAApApQAqAqAAA5g");
	this.shape_209.setTransform(36.05,22.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#999999").s().p("AhiBjQgqgpAAg6QAAg5AqgqQApgpA5ABQA6gBApApQAqAqAAA5QAAA6gqApQgpAqg6AAQg5AAgpgqg");
	this.shape_210.setTransform(36.05,22.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#999999").ss(4,1,1).p("AB6BUIjzin");
	this.shape_211.setTransform(4.95,47.425);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#999999").ss(4,1,1).p("ABmhgIjLDB");
	this.shape_212.setTransform(27.275,46.125);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#999999").ss(4,1,1).p("AAAh/IAAD/");
	this.shape_213.setTransform(66,60.05);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#999999").ss(4,1,1).p("AiOg1IEdBr");
	this.shape_214.setTransform(51.725,41.85);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#999999").ss(4,1,1).p("AglAAIBLAA");
	this.shape_215.setTransform(79.275,146.05);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#999999").ss(4,1,1).p("AgRi/IAjF/");
	this.shape_216.setTransform(73.7,126.85);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#999999").ss(4,1,1).p("AiOiGIEdEN");
	this.shape_217.setTransform(57.625,94.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#999999").ss(4,1,1).p("AAiAAIhEAA");
	this.shape_218.setTransform(7.4,147.35);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#999999").ss(4,1,1).p("AAcjUIg3Gp");
	this.shape_219.setTransform(13.65,126.025);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#999999").ss(4,1,1).p("ACHh3IkNDv");
	this.shape_220.setTransform(29.9,92.725);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#999999").ss(4,1,1).p("AgCh1IAFDr");
	this.shape_221.setTransform(43.025,68.925);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#999999").ss(4,1,1).p("AgZhmIAzDN");
	this.shape_222.setTransform(40.075,46.775);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#999999").ss(4,1,1).p("AB4AAQAAAxgjAkQgjAjgyAAQgwAAgkgjQgjgkAAgxQAAgwAjgkQAkgjAwAAQAyAAAjAjQAjAkAAAwg");
	this.shape_223.setTransform(36.4,22.15);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#999999").s().p("AhTBVQgjgkAAgxQAAgxAjgiQAjgkAwAAQAyAAAiAkQAkAigBAxQABAxgkAkQgiAigyABQgwgBgjgig");
	this.shape_224.setTransform(36.4,22.15);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#999999").ss(4,1,1).p("ABsBLIjXiV");
	this.shape_225.setTransform(5.775,42.675);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#999999").ss(4,1,1).p("ABkhAIjHCC");
	this.shape_226.setTransform(26.525,43.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#999999").ss(4,1,1).p("AAAh8IAAD5");
	this.shape_227.setTransform(60.9,61.875);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#999999").ss(4,1,1).p("Ah5g9IDzB7");
	this.shape_228.setTransform(48.7,43.225);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#999999").ss(4,1,1).p("AgWjFIAuGL");
	this.shape_229.setTransform(72.2,127.225);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#999999").ss(4,1,1).p("AiIiEIEREJ");
	this.shape_230.setTransform(56.2,94.075);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#999999").ss(4,1,1).p("AAAjUIAAGp");
	this.shape_231.setTransform(20.25,126.825);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#999999").ss(4,1,1).p("ABvh7IjdD3");
	this.shape_232.setTransform(31.4,93.15);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#999999").ss(4,1,1).p("AgEh1IAJDr");
	this.shape_233.setTransform(42.025,69);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#999999").ss(4,1,1).p("AgYhkIAxDJ");
	this.shape_234.setTransform(39,47.15);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#999999").ss(4,1,1).p("ABdBDIi5iF");
	this.shape_235.setTransform(8.025,38.75);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#999999").ss(4,1,1).p("ABdghIi5BD");
	this.shape_236.setTransform(26.675,42.025);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#999999").ss(4,1,1).p("AAAjmIAAHN");
	this.shape_237.setTransform(27.05,124.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#999999").ss(4,1,1).p("ABEhlIiHDL");
	this.shape_238.setTransform(33.875,90.925);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#999999").ss(4,1,1).p("AiBiMIEDEZ");
	this.shape_239.setTransform(53.7,94.875);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#999999").ss(4,1,1).p("AAAheIAAC9");
	this.shape_240.setTransform(40.7,71.25);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#999999").ss(4,1,1).p("AgXhzIAvDn");
	this.shape_241.setTransform(38.35,50.175);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#999999").ss(4,1,1).p("AAAhgIAADB");
	this.shape_242.setTransform(53.85,64.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#999999").ss(4,1,1).p("AhYhOICxCd");
	this.shape_243.setTransform(44.925,46.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#999999").ss(4,1,1).p("AAAjTIAAGn");
	this.shape_244.setTransform(33.9,122.25);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#999999").ss(4,1,1).p("AAYhlIgvDL");
	this.shape_245.setTransform(36.25,90.925);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#999999").ss(4,1,1).p("AgYi3IAxFu");
	this.shape_246.setTransform(67.6,130.3);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#999999").ss(4,1,1).p("AiDibIEIE3");
	this.shape_247.setTransform(51.85,96.35);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#999999").ss(4,1,1).p("AAAhWIABCt");
	this.shape_248.setTransform(38.475,72.025);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#999999").ss(4,1,1).p("AgMh2IAZDu");
	this.shape_249.setTransform(37.025,51.35);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#999999").ss(4,1,1).p("AA6BAIhzh/");
	this.shape_250.setTransform(11.575,32.975);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#999999").ss(4,1,1).p("ABcAAIi3AA");
	this.shape_251.setTransform(26.525,39.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#999999").ss(4,1,1).p("AAAhZIAACz");
	this.shape_252.setTransform(47,64.5);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#999999").ss(4,1,1).p("Ag3hPIBvCf");
	this.shape_253.setTransform(41.35,47.425);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#999999").ss(4,1,1).p("Agbi0IA3Fp");
	this.shape_254.setTransform(67.1,130.025);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#999999").ss(4,1,1).p("AiAiFIEBEL");
	this.shape_255.setTransform(51.475,98.525);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#999999").ss(4,1,1).p("AAAiuIAAFd");
	this.shape_256.setTransform(42,120.925);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#999999").ss(4,1,1).p("AgQhbIAhC3");
	this.shape_257.setTransform(40.3,94.275);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#999999").ss(4,1,1).p("AgXiGIAvEN");
	this.shape_258.setTransform(36.25,52.125);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#999999").ss(4,1,1).p("AAABgIAAi/");
	this.shape_259.setTransform(15.5,24.825);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#999999").ss(4,1,1).p("ABcAVIi3gp");
	this.shape_260.setTransform(24.7,36.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#999999").ss(4,1,1).p("AAAhfIAAC/");
	this.shape_261.setTransform(44.4,67.625);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#999999").ss(4,1,1).p("Ag0hgIBpDB");
	this.shape_262.setTransform(39.15,48.325);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#999999").ss(4,1,1).p("AAAh4IAADx");
	this.shape_263.setTransform(61.45,63.025);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#999999").ss(4,1,1).p("AhohGIDRCN");
	this.shape_264.setTransform(50.95,43.875);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#999999").ss(4,1,1).p("AAABtIAAjZ");
	this.shape_265.setTransform(19.2,11.975);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#999999").ss(4,1,1).p("ABqBGIjTiL");
	this.shape_266.setTransform(29.825,29.825);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#999999").ss(4,1,1).p("AAIjbIgPG3");
	this.shape_267.setTransform(39.65,58.775);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#999999").ss(4,1,1).p("AgcixIA5Fj");
	this.shape_268.setTransform(66.425,129.775);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#999999").ss(4,1,1).p("Ah7ibID2E3");
	this.shape_269.setTransform(51.2,96.35);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#999999").ss(4,1,1).p("AgUidIApE7");
	this.shape_270.setTransform(53.3,120.8);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#999999").ss(4,1,1).p("Ag9h5IB7Dy");
	this.shape_271.setTransform(45.025,92.9);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#999999").ss(4,1,1).p("AAAB5IAAjx");
	this.shape_272.setTransform(27.6,8.975);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#999999").ss(4,1,1).p("ABfBVIi8ip");
	this.shape_273.setTransform(37.05,29.575);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#999999").ss(4,1,1).p("AAjhxIhGDj");
	this.shape_274.setTransform(53.45,72.625);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#999999").ss(4,1,1).p("Ag0hzIBpDm");
	this.shape_275.setTransform(51.75,49.65);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#999999").ss(4,1,1).p("AgXiXIAvEv");
	this.shape_276.setTransform(61.975,127.15);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#999999").ss(4,1,1).p("AhiiIIDFER");
	this.shape_277.setTransform(49.75,98.25);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#999999").ss(4,1,1).p("AgQiSIAhEl");
	this.shape_278.setTransform(70.25,126.625);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#999999").ss(4,1,1).p("AiOiIIEdER");
	this.shape_279.setTransform(54.225,98.25);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#999999").ss(4,1,1).p("AAhjnIhBHP");
	this.shape_280.setTransform(43.2,61.325);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#999999").ss(4,1,1).p("AgSCDIAmkF");
	this.shape_281.setTransform(45.3,7.625);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#999999").ss(4,1,1).p("AAnBkIhNjH");
	this.shape_282.setTransform(47.275,30.725);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#999999").ss(4,1,1).p("AA6iJIhzET");
	this.shape_283.setTransform(58.275,70.775);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#999999").ss(4,1,1).p("Ag/hQIB/Ch");
	this.shape_284.setTransform(57.625,48.85);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#999999").ss(4,1,1).p("Ag3DfIBwm9");
	this.shape_285.setTransform(45.55,63.025);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#999999").ss(4,1,1).p("AAAihIAAFD");
	this.shape_286.setTransform(53.3,130.65);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#999999").ss(4,1,1).p("AhCiRICFEj");
	this.shape_287.setTransform(46.6,99.925);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#999999").ss(4,1,1).p("AAAiWIAAEt");
	this.shape_288.setTransform(64.05,129.85);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#999999").ss(4,1,1).p("Ah4iSIDxEl");
	this.shape_289.setTransform(51.975,100.05);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#999999").ss(4,1,1).p("AhXBsICvjX");
	this.shape_290.setTransform(60.525,11.85);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#999999").ss(4,1,1).p("AAWBoIgrjP");
	this.shape_291.setTransform(53.975,32.975);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#999999").ss(4,1,1).p("ABIh5IiPDz");
	this.shape_292.setTransform(59.725,74.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#999999").ss(4,1,1).p("Ag1hcIBrC5");
	this.shape_293.setTransform(61.575,52.675);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#999999").ss(4,1,1).p("AhQDaICimz");
	this.shape_294.setTransform(48.05,65.15);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#999999").ss(4,1,1).p("AgQiyIAhFl");
	this.shape_295.setTransform(49.75,133.425);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#999999").ss(4,1,1).p("AgoiOIBREd");
	this.shape_296.setTransform(43.975,101.25);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#999999").ss(4,1,1).p("AAsilIhYFK");
	this.shape_297.setTransform(35.45,131.05);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#999999").ss(4,1,1).p("AAAiJIAAET");
	this.shape_298.setTransform(39.9,100.725);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#999999").ss(4,1,1).p("AAAibIAAE3");
	this.shape_299.setTransform(45.95,132.725);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#999999").ss(4,1,1).p("AgsidIBZE7");
	this.shape_300.setTransform(41.5,101.35);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#999999").ss(4,1,1).p("ABjhWIjFCu");
	this.shape_301.setTransform(17.2,120.7);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#999999").ss(4,1,1).p("AAyiDIhjEH");
	this.shape_302.setTransform(32.05,98.775);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#999999").ss(4,1,1).p("AAUhYIgnCx");
	this.shape_303.setTransform(39,76.675);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#999999").ss(4,1,1).p("ABKh8IiSD5");
	this.shape_304.setTransform(48.3,55.275);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#999999").ss(4,1,1).p("AA8hxIh4Dj");
	this.shape_305.setTransform(56.45,76.025);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#999999").ss(4,1,1).p("AghhsIBDDZ");
	this.shape_306.setTransform(59.075,53.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#999999").ss(4,1,1).p("AguAfIBdg9");
	this.shape_307.setTransform(79.1932,17.1432,1.9778,2.068);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#999999").ss(4,1,1).p("AhGBgICNi/");
	this.shape_308.setTransform(62.75,33.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216,p:{x:73.7,y:126.85}},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209}]},14).to({state:[{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224,p:{x:36.4,y:22.15}},{t:this.shape_223,p:{x:36.4,y:22.15}}]},1).to({state:[{t:this.shape_243},{t:this.shape_242,p:{x:53.85,y:64.1}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_216,p:{x:68.525,y:128.15}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_224,p:{x:37,y:23.9}},{t:this.shape_223,p:{x:37,y:23.9}}]},1).to({state:[{t:this.shape_243},{t:this.shape_242,p:{x:53.85,y:64.1}},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_216,p:{x:68.525,y:128.15}},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_224,p:{x:39,y:23.9}},{t:this.shape_223,p:{x:39,y:23.9}}]},1).to({state:[{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_224,p:{x:39.6,y:24.15}},{t:this.shape_223,p:{x:39.6,y:24.15}}]},1).to({state:[{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_242,p:{x:38.6,y:75.375}},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_224,p:{x:44.1,y:22.45}},{t:this.shape_223,p:{x:44.1,y:22.45}}]},1).to({state:[{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_224,p:{x:53.55,y:24.85}},{t:this.shape_223,p:{x:53.55,y:24.85}}]},1).to({state:[{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_224,p:{x:58.45,y:28.4}},{t:this.shape_223,p:{x:58.45,y:28.4}}]},1).to({state:[{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_224,p:{x:66.9,y:34.4}},{t:this.shape_223,p:{x:66.9,y:34.4}}]},1).to({state:[{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_224,p:{x:70.85,y:41}},{t:this.shape_223,p:{x:70.85,y:41}}]},1).to({state:[{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_224,p:{x:70.6,y:46.75}},{t:this.shape_223,p:{x:70.6,y:46.75}}]},1).to({state:[]},1).to({state:[]},839).wait(1473));

	// Grass
	this.instance_7 = new lib.Grasslong("synched",0);
	this.instance_7.setTransform(295.6,166.4,1,1,0,0,0,343.2,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({startPosition:0},24).to({x:12.45},94).to({x:295.6},1).to({x:12.45},94).to({_off:true},26).wait(2098));

	// cLOUD2
	this.instance_8 = new lib.cLOUD2("synched",0);
	this.instance_8.setTransform(409.4,-51.95,0.4145,0.4145,0,0,0,1313.9,113.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},352).to({x:1.4},307).to({_off:true},551).wait(1127));

	// Cloud2
	this.instance_9 = new lib.Cloud("synched",0);
	this.instance_9.setTransform(440.25,-43.45,0.224,0.1606,0,0,0,914.9,134.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:-162.65},45).to({startPosition:0},239).to({_off:true},926).wait(1127));

	// Clouds
	this.instance_10 = new lib.Cloud("synched",0);
	this.instance_10.setTransform(451,-26.45,0.2645,0.2645,0,0,0,914.9,134.4);
	this.instance_10._off = true;

	this.instance_11 = new lib.Cloud("synched",0);
	this.instance_11.setTransform(433.9,-61.15,0.3037,0.3037,0,0,0,914.7,134.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},206).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},218).to({state:[]},992).wait(920));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(206).to({_off:false},0).wait(1).to({regX:914.7,regY:134.3,scaleX:0.3037,scaleY:0.3037,x:433.9,y:-61.15},0).to({x:-129.9},218).to({_off:true},992).wait(920));

	// Grass
	this.instance_12 = new lib.Grasslong("synched",0);
	this.instance_12.setTransform(295.6,166.4,1,1,0,0,0,343.2,33.1);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(727).to({_off:false},0).to({startPosition:0},25).to({x:12.45},94).to({x:295.6},1).to({x:12.45},94).to({_off:true},30).wait(1366));

	// Grass
	this.instance_13 = new lib.Grasslong("synched",0);
	this.instance_13.setTransform(295.6,166.4,1,1,0,0,0,343.2,33.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(465).to({_off:false},0).to({startPosition:0},10).to({x:12.45},127).to({x:295.6},1).to({x:12.45},94).to({_off:true},30).wait(1610));

	// grassoverlay
	this.instance_14 = new lib.Grasslong("synched",0);
	this.instance_14.setTransform(694.35,166.45,1,1,0,0,0,343.2,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({startPosition:0},372).to({x:-495.4,y:168.45},348).to({_off:true},764).wait(853));

	// Sunray
	this.instance_15 = new lib.Sunray("synched",0);
	this.instance_15.setTransform(292.1,-62.7,0.4501,0.4501,0,0,0,1737.7,100.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:1737.5,regY:100,scaleX:0.3742,scaleY:0.3742,rotation:729.3171,x:292.15,y:-62.75},853).to({regX:1737.6,regY:100.2,scaleX:0.3806,scaleY:0.3806,rotation:890.0705,y:-62.65},188).to({regX:1737.7,regY:100.1,scaleX:0.4041,scaleY:0.4041,rotation:720,x:292.1,y:-62.7},373).wait(923));

	// Sun
	this.instance_16 = new lib.Tween8("synched",0);
	this.instance_16.setTransform(291.65,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:0},1).to({regX:0.1,scaleX:0.7534,scaleY:0.7534,x:291.75},185).to({regX:0,scaleX:0.9228,scaleY:0.9228,x:291.65},53).to({scaleX:1.1704,scaleY:1.1704},153).to({regX:0.1,regY:-0.1,scaleX:0.94,scaleY:0.94,x:291.8,y:-63.15},19).to({regX:0.2,regY:-0.2,scaleX:0.8087,scaleY:0.8087,y:-63.2},183).to({regX:0,regY:0,scaleX:1.002,scaleY:1.002,x:291.7,y:-63.05},77).to({scaleX:0.862,scaleY:0.862,x:291.75,y:-63.1},108).to({regX:0.1,regY:-0.1,scaleX:1.0179,scaleY:1.0179,x:291.85,y:-63.2},278).wait(1280));

	// Grass
	this.instance_17 = new lib.Grasslong("synched",0);
	this.instance_17.setTransform(295.6,166.4,1,1,0,0,0,343.2,33.1);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(183).to({_off:false},0).to({x:12.45},94).to({x:295.6},1).to({x:12.45},94).to({_off:true},87).wait(1878));

	// Sky
	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.lf(["#0067C8","#2B97D9","#FFFFFF"],[0,0.204,0.686],0,-270.3,0,270.4).s().p("Eg93AqQMAAAhUfMB7uAAAMAAABUfg");
	this.shape_309.setTransform(184.1,-21.925);

	this.timeline.addTween(cjs.Tween.get(this.shape_309).to({_off:true},1211).wait(1126));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-838.6,-292.3,1876.1,540.8);


// stage content:
(lib.TakeFlight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Paperplane
	this.instance = new lib.Paperplane();
	this.instance.setTransform(97.4,124.45,1,1,0,0,0,49.6,21.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(35.9,-39.7,1049.3999999999999,390.7);
// library properties:
lib.properties = {
	id: '2F961760C7240048978D5BAE2FF53A33',
	width: 400,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"sounds/CartoonBalloonBeingBlownUp03wav.mp3", id:"CartoonBalloonBeingBlownUp03wav"},
		{src:"sounds/interface124464.mp3", id:"interface124464"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2F961760C7240048978D5BAE2FF53A33'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;