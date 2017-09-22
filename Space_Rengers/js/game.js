// _____begin view

var view = {
	showCount: function function (count) {
		var elCount = document.getElementById("area_game__user_count--total");
		elCount.innerHTML = count;
	},

	showMsg: function (msg) {
		var elMessage = document.getElementById("area_game__user-message--msg")
		elMessage.innerHTML = msg;


	},

	showship: function (id, color) {
		var elship = document.getElementById(id);
		if (color == "red") {
			elShip.setAttribute("class", "ship-red");

		} else if (color == "blue") {
			elShip.setAttribute("class", "ship-blue");
		}	
	},

	showAsteroid: function (id) {
		var elAsteroid = document.getElementById(id);
		elAsteroid.setAttribute("class", "asteroid");
	},

	soundShot: function() {
		var audio = document.getElementsByTagName("audio")[0];
		audio.pause();
		audio.currentTime = 0;
		audio.play();
	}
}

// _____end view

// _____begin model
// _____end model

// _____begin controller
// _____end controller