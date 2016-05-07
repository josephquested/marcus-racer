// WARNING: Everything below is experimental in the sense that
// I'm learning as I go along. No way at all is any of this code
// elegant. In fact, it's kinda hideous but I'll be cleaning it
// up and condensing it all once I have a working prototype.
// Until then, everything below may break and will contain too
// much repetition for use in an actual "public release" if you will.

playercount = 2;

// Assigning each track to a variable
var p1 = document.getElementById("player1");
var p2 = document.getElementById("player2");

// Assigning the track squares to variables.

var track1 = p1.querySelectorAll("td");
var track2 = p2.querySelectorAll("td");
i = 0;
j = 0;

// Start listening for keypresses and if a certain key is pressed, run the p1controls function
document.addEventListener("keypress", controls);


function controls() {
	// If Enter is pressed
	if (event.which === 13) {
		trackSelection = track1;
		advance(i);
	} else if (event.which === 220) {
		trackSelection = track2;
		advance(j);
	}
}

function advance(counter) {
	if (counter > trackSelection.length) {
		alert("Player wins!");
	} else {
		trackSelection[counter].nextElementSibling.className = "active";
		counter++;
		console.log("moved");
		trackSelection[counter].previousElementSibling.className = "";
	}
}