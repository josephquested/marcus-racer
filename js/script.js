// WARNING: Everything below is experimental in the sense that
// I'm learning as I go along. No way at all is any of this code
// elegant. In fact, it's kinda hideous but I'll be cleaning it
// up and condensing it all once I have a working prototype.
// Until then, everything below may break and will contain too
// much repetition for use in an actual "public release" if you will.

var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");

var tablelength = p1.children.length;
var track1 = p1.querySelector("td");
var track2 = p2.querySelector("td");

document.addEventListener("keypress", p1controls);
document.addEventListener("keypress", p2controls);

// Upon keypress
	// Remove .active class
	// Apply .active class to next child eg; track1[i]

i = 0;
j = 1;

k = 0;
l = 1;

function p1advance(i, j) {
	this.track1[i].className = "";
	this.track1[j].className = "active";
}

function p2advance(k, l) {
	this.track2[k].className = "";
	this.track2[l].className = "active";
}

function p1controls() {
	if (event.which === 32) {
		p1advance(i, j);
		i++;
		j++;
	}
}

function p2controls() {
	if (event.which === 13) {
		p2advance(k, l);
		k++;
		l++;
	}
}