const games = [];

games[games.length] = {
	name: "Sidereal Confluence", imageName: "sidereal.jpg",
	weight: 3,
	timeToPlay: "2.5h", timeToPlayNum: 150,
	timeToLearn: "", timeToLearnNum: 0,
	playerCount: [4, 5, 6, 7, 8, 9],
	recPlayerCount: [5, 6, 7, 8, 9],
	bestPlayerCount: [6],
	coop: false,
	type: "negotiation",
	tags: ["negotiation", "trading", "economy", "asymmetric"],
	expansions: [],
	description: "<i>Nine species come together during the great Confluence. Their goal: to build a joint society where every species is equal and every innovation shared. Each wants their own ideals at the core of the growing society. What follows is the most aggressive cooperation the galaxy has ever seen.</i><br><br>Each player chooses one of the nine unique and asymmetrical alien races. Over the course of the game, each race must trade and negotiate with the rest to acquire the resource cubes necessary to fund their economy and allow it to produce goods for the next turn. Mutually beneficial agreements are key to success.<br>While technically a competitive game, Sidereal Confluence has a cooperative feel during the trading phase as no race has the ability to thrive on its own."
};

games[games.length] = {
	name: "Unfathomable", imageName: "unfathomable.jpg",
	weight: 3,
	timeToPlay: "3h", timeToPlayNum: 180,
	timeToLearn: "", timeToLearnNum: 0,
	playerCount: [3, 4, 5, 6],
	recPlayerCount: [4, 5, 6],
	bestPlayerCount: [5],
	coop: false,
	type: "hidden roles",
	tags: ["hidden roles", "traitor", "team-based", "thematic", "asymmetric"],
	expansions: [],
	description: "<i>The year is 1913. The steamship SS Atlantica has set out on its voyage across the Atlantic Ocean. Its unsuspecting passengers are fully anticipated a calm journey. However, tensions rise when a body is discovered in the ship's chapel, signs of a strange ritual littered around the corpse.</i><br><br>Some players are humans who are fighting for the survival of the ship, while others are traitors sent aboard the ship by the Deep Ones to ensure that it never reaches port! Because player loyalties are hidden, determining who is friend and who is foe is critical to winning a thrilling game of Unfathomable."
};

games[games.length] = {
	name: "Dune", imageName: "dune.jpg",
	weight: 5,
	timeToPlay: "5h+", timeToPlayNum: 301,
	timeToLearn: "1h", timeToLearnNum: 60,
	playerCount: [2, 3, 4, 5, 6],
	recPlayerCount: [5, 6],
	bestPlayerCount: [6],
	coop: false,
	type: "strategy",
	tags: ["area control", "alliances", "negotiation", "conflict", "thematic", "asymmetric"],
	expansions: [],
	description: "<i>The most precious substance in the universe is the spice Melange… The spice extends life… expands consciousness… gives them the ability to fold space…that is, travel to any part of the universe without moving.</i><br><br>Take control of one of the factions attempting to control Dune. Each faction has special powers that overlook certain rules in the game. Each turn players move about the map attempting to pick up valuable spice while dealing with giant sandworms, deadly storms, and other players' military forces. A delicate political balance is formed amongst the factions to prevent any one side from becoming too strong. When a challenge is made in a territory, combat takes the form of hidden bids with additional treachery cards to further the uncertainty."
};

var collection = document.getElementById("collection");
games.forEach(addGame);

var infoWindow = document.getElementById("fullInfoWindow");

function addGame(game) {
	collection.innerHTML += '<div class="card" style="background-image: url(\'images/' + game.imageName + '\');"><div class="cardInfo w' + Math.floor(game.weight) + '"><div><i class="material-icons">access_time</i>' + game.timeToPlay + '</div><div>' + game.type + '</div><div><i class="material-icons">extension</i>' + game.weight + '</div></div></div>';
}

function openWindow() {
	infoWindow.style.display = 'flex';
}

function closeWindow() {
	infoWindow.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == infoWindow) {
    infoWindow.style.display = 'none';
  }
}

