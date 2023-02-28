const games = [];
games[games.length] = {
	name: "Kings' Struggle",
	imageName: "kingsstruggle.jpg", imagePosition: "",
	bggLink: "https://boardgamegeek.com/boardgame/253568/kings-struggle",
	weight: 1.5,
	timeToPlay: "45", timeToPlayNum: 45,
	timeToLearn: "10", timeToLearnNum: 10,
	playerCount: [4, 5, 6],
	recPlayerCount: [4, 5, 6],
	bestPlayerCount: [5, 6],
	coop: false,
	type: "negotiation",
	tags: ["negotiation", "set collection", "trick-taking"],
	expansions: [],
	description: "<i>In Kings' Struggle, negotiation is king.</i><br><br>Over the course of 7 rounds, each player will play a single card per round. Most of the cards have powerful abilities that may be activated if a player chooses. Doing so could earn them gold, take other cards out of play, allow new cards to be played, etc. Players may use gold or future promises to negotiate with other players to try and influence how they use their card's ability. Analyzing who has the most to win or the most to lose from your current ability and leveraging it to your benefit is the key to success."
};
games[games.length] = {
	name: "Sidereal Confluence",
	imageName: "sidereal.jpg", imagePosition: "",
	bggLink: "https://boardgamegeek.com/boardgame/202426/sidereal-confluence",
	weight: 3,
	timeToPlay: "2.5h", timeToPlayNum: 150,
	timeToLearn: "30", timeToLearnNum: 30,
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
	name: "Unfathomable",
	imageName: "unfathomable.jpg", imagePosition: "",
	bggLink: "https://boardgamegeek.com/boardgame/340466/unfathomable",
	weight: 3,
	timeToPlay: "3h", timeToPlayNum: 180,
	timeToLearn: "30", timeToLearnNum: 30,
	playerCount: [3, 4, 5, 6],
	recPlayerCount: [4, 5, 6],
	bestPlayerCount: [5],
	coop: false,
	type: "hidden roles",
	tags: ["hidden roles", "traitor", "team-based", "thematic", "asymmetric"],
	expansions: [],
	description: "<i>The year is 1913. The steamship SS Atlantica has set out on its voyage across the Atlantic Ocean. Its unsuspecting passengers are fully anticipating a calm journey. However, tensions rise when a body is discovered in the ship's chapel, signs of a strange ritual littered around the corpse.</i><br><br>Some players are humans who are fighting for the survival of the ship, while others are traitors sent aboard the ship by the Deep Ones to ensure that it never reaches port! Because player loyalties are hidden, determining who is friend and who is foe is critical to winning a thrilling game of Unfathomable."
};
games[games.length] = {
	name: "Dune",
	imageName: "dune.jpg", imagePosition: "",
	bggLink: "https://boardgamegeek.com/boardgame/283355/dune",
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
	description: "<i>He who controls the spice controls the universe.</i><br><br>Take control of one of the factions attempting to control Dune. Each faction has special powers that overlook certain rules in the game. Each turn players move about the map attempting to pick up valuable spice while dealing with giant sandworms, deadly storms, and other players' military forces. A delicate political balance is formed amongst the factions to prevent any one side from becoming too strong. When a challenge is made in a territory, combat takes the form of hidden bids with additional treachery cards to further the uncertainty."
};
games[games.length] = {
	name: "Beyond Baker Street",
	imageName: "bakerstreet.jpg", imagePosition: "",
	bggLink: "https://boardgamegeek.com/boardgame/168681/beyond-baker-street",
	weight: 2,
	timeToPlay: "1h", timeToPlayNum: 60,
	timeToLearn: "15", timeToLearnNum: 15,
	playerCount: [2, 3, 4],
	recPlayerCount: [2, 3, 4],
	bestPlayerCount: [4],
	coop: true,
	type: "deduction",
	tags: ["deduction", "limited communication"],
	expansions: [],
	description: "<i>A heinous crime has been committed! Can your team solve it before the famous Sherlock Holmes?</i><br><br>You and your fellow detectives must gather enough evidence by playing the right cards. The catch is: you hold your cards so that they're visible only to other players. To assist other players in playing a card, you must give them hints regarding the numbers or the colors of their cards. Players must act as a team to avoid errors and to solve the case before Sherlock Holmes does."
};
games[games.length] = {
	name: "Codenames",
	imageName: "codenames.jpg", imagePosition: "",
	bggLink: "https://boardgamegeek.com/boardgame/178900/codenames",
	weight: 1,
	timeToPlay: "30", timeToPlayNum: 30,
	timeToLearn: "5", timeToLearnNum: 5,
	playerCount: [4, 5, 6, 7, 8],
	recPlayerCount: [4, 5, 6, 7, 8],
	bestPlayerCount: [6],
	coop: false,
	type: "deduction",
	tags: ["teams", "deduction", "limited communication"],
	expansions: [],
	description: "Players are divided into two teams, each with a Spymaster as the team's leader. Only the Spymasters know which words belong to which team, so they must guide their team to pick the correct ones. They give one-word clues that can point to multiple words in the grid and their teammates try to guess the correct words while avoiding those that belong to the opposing team. The first team to guess all of their words wins!"
};

var collection = document.getElementById("collection");
games.forEach(addGame);

function addGame(game, index) {
	collection.innerHTML += '<div class="card" id="' + index + '" onclick="openWindow(this)" style="background-image: url(\'images/' + game.imageName + '\');"><div class="cardInfo w' + Math.floor(game.weight) + '"><div><i class="material-icons">access_time</i>' + game.timeToPlay + '</div><div>' + game.type + '</div><div><i class="material-icons">extension</i>' + game.weight + '</div></div></div>';
}

var infoWindow = document.getElementById("fullInfoWindow");
var infoWindowName = document.getElementById("name");
var infoWindowCover = document.getElementById("cover");
var infoWindowPhoto = document.getElementById("photo");
var infoWindowWeight = document.getElementById("weight");
var infoWindowTimeToLearn = document.getElementById("timeToLearn");
var infoWindowTimeToPlay = document.getElementById("timeToPlay");

var infoWindowExpansions = document.getElementById("expansions");
var infoWindowTags = document.getElementById("tags");
var infoWindowDescription = document.getElementById("description");

function openWindow(card) {
	let game = games[card.id];
	
	infoWindowName.innerHTML = game.name;
	
	infoWindowCover.innerHTML = '<img src="images/' + game.imageName + '">';
	infoWindowPhoto.src = 'setups/' + game.imageName;

	switch(Math.floor(game.weight)) {
		case 1:
			infoWindowWeight.innerHTML = 'light';
			infoWindowWeight.className = 'box weight1';
			break;
		case 2:
			infoWindowWeight.innerHTML = 'medium-light';
			infoWindowWeight.className = 'box weight2';
			break;
		case 3:
			infoWindowWeight.innerHTML = 'medium';
			infoWindowWeight.className = 'box weight3';
			break;
		case 4:
			infoWindowWeight.innerHTML = 'medium-heavy';
			infoWindowWeight.className = 'box weight4';
			break;
		case 5:
			infoWindowWeight.innerHTML = 'heavy';
			infoWindowWeight.className = 'box weight5';
			break;
		default:
			infoWindowWeight.innerHTML = 'error';
	}

	infoWindowTimeToLearn.innerHTML = game.timeToLearn;
	infoWindowTimeToPlay.innerHTML = game.timeToPlay;
	
	//TODO player count
	
	if (game.expansions.length) {
		infoWindowExpansions.parentElement.style.display = 'inline';
		infoWindowExpansions.innerHTML = '';
		game.expansions.forEach( x => {infoWindowExpansions.innerHTML += '&bull; ' + x + '<br>'; });
	} else {
		infoWindowExpansions.parentElement.style.display = 'none';
	}
	
	infoWindowTags.innerHTML = '';
	if (game.coop) infoWindowTags.innerHTML += '<span>cooperative</span>';
	game.tags.forEach(tag => {infoWindowTags.innerHTML += '<span>' + tag + '</span>';});
	
	infoWindowDescription.innerHTML = game.description;
	
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

