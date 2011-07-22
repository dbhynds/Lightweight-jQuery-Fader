$(document).ready(makespotlight);

var spot = 4000; // time slides stay visible for
var int = 300 // time it takes for slides to transition
var randomize = false; // change to true to have the images display in random order
var t;
var imgs = new Array;
var imgn = 0;

function makespotlight() {
	$('#ac-fader').children().fadeTo(0,0);
	x = 0;
	$('#ac-fader').children().each(function(){
		imgs[x] = this;
		x++;
	});
	if (randomize == true) {
		imgs.sort(function(){ return Math.random()-0.5; });
	}
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
