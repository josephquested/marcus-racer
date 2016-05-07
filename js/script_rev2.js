document.addEventListener("keyup", simpleControls);
/* changed this function to "keyup", otherwise it would fire over and over
again if the key was held down */

a = 0; b = 0;

var racers = {
	racer_1: a,
	racer_2: b
}

var keys = [];
for (var i in racers) {
	keys.push(i);
}

var tracks = [];
for (i = 0; i < keys.length; i++) {
	tracks.push(document.getElementById(keys[i]).querySelectorAll('td'));
}

function counter(playerNumber) {
	var entry = 'racer_' + playerNumber;
	var player = racers[entry];
	return player;
}

function controls() {
	if (event.which === 13) {
		var winning_player = keys[0];
		var block = tracks[0];
		var count = racers[winning_player]; // here you're setting the count based on 'winning_player' variable
		console.log("player 1 moved");
		advance(count, winning_player, block);
	} else if (event.which = 220) {
		/* in the above line: the else if was activating, no matter what key was pressed.
		it's better to just use 'if' statements unless you actually want an 'else'
		condition. Also, '=' vs '===' was messing it up.
		*/
		var winning_player = keys[1];
		var block = tracks[1];
		var count = racers.racer_2; // but here you're hardcoding in player_2. What happened to winning_player?
		console.log("player 2 moved");
		advance(count, winning_player, block);
	}
}

// Added function: simpleControls
function simpleControls (e) {
	if (e.which === 13) {
		simpleAdvance(1)
	}

	if (e.which === 220) {
		simpleAdvance(2)
	}
}

function advance(counter, racer, grid) {
	// console logged to see what you're getting back. Counter is always 0!
	console.log(counter)
	console.log(racer)
	console.log(grid)
	//
	if (counter > grid.length) {
		alert(racer + " wins!");
	} else {
		grid[counter].nextElementSibling.className = "active";
		grid[counter + 1].previousElementSibling.className = "";
	}
}

// Added function: simpleAdvance
function simpleAdvance (playerNumber) {
  var row = document.getElementById('racer_' + playerNumber)
  var cell = document.getElementsByClassName('active' + playerNumber)[0]
  var nextCell = row.cells[cell.cellIndex + 1]

  cell.className = ''
  nextCell.className = 'active' + playerNumber
}
