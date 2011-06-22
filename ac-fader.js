$(document).ready(makespotlight);

var spot = 4000; // time slides stay visible for
var t;
var imgs = new Array;
var imgn = 0;
var int = 300 // time it takes for slides to transition

function makespotlight() {
	$('#fader img').fadeTo(0,0);
	x = 0;
	$('#fader img').each(function(){
		imgs[x] = this;
		x++;
	});
	// comment out the next line if you don't want the images to display in random order
	imgs.sort(function(){ return Math.random()-0.5; });
	$(imgs[imgn]).fadeTo(int,1);
	t = setTimeout('spotlight()',spot);
}

function spotlight() {
	$(imgs[imgn]).stop().fadeTo(int,0);
	imgn++;
	if (imgn == imgs.length) {
		imgn = 0;
	}
	$(imgs[imgn]).stop().fadeTo(int,1);
	t = setTimeout('spotlight()',spot);
} 
