function MainCtrl ($scope) {
	$scope.storylineTitles = [
		"Forest Odyssey", "Praece Internship", "An Epic Quest"
	];

	$scope.storylines = [
		forestOdyssey = [
			{
				name: "start", 
				description: "One day you are happily skipping through the forest when suddenly you happen upon a fat pie salesman. You look down to see a knife in your hand. What do you do?", 
				options: ["STAB!", "Cheerfully purchase a pie."], 
				results: ["stabSalesman", "purchasePie"]
			},
			{
				name: "stabSalesman",
				description: "You take out your knife and stab him in his fat belly. He falls to the ground, dead. Suddenly mortified at the sight of blood, you run and climb up the nearest tree. A bear comes sniffing around and begins to feast on the remains. He looks as if he will be there for a good while. What do you do?",
				options: ["Wait it out", "Try to sneak off quietly"],
				results: ["wait", "sneakOff"]
			},	
			{
				name: "wait",
				description: "You decide to wait it out. It gets colder and becomes night time. You had no idea bears were such slow eaters. Finally it finishes off the last bit of salesman and staggers off. You slowly climb down the tree. Listening, you hear a high, girlish voice calling for help. What do you do?",
				options: ["Search for it", "Let it be"],
				results: ["search", "letItBe"]
			},
			{
				name: "search",
				description: "It is not a girl; it is simply a girlish boy. He seems to have misplaced his second beret. Will you help him look?",
				options: ["STAB!", "Try to help the fellow."],
				results: ["stabBeret","helpBeret"]
			},
			{
				name: "stabBeret",
				description: "You were beaten with a beret. One stabbing is excusable. Another is punishable by death.",
				options: [],
				results: []
			},
			{
				name: "helpBeret",
				description: "He told you to try the canyon, and, sure enough, it's there. But... what will you do with it?",
				options: ["Take it for yourself", "Return it to its rightful owner"],
				results: ["takeBeret", "returnBeret"]
			},
			{
				name: "takeBeret",
				description: "The beret is yours! You are the true heir to the Iron Throne.",
				options: [],
				results: []
			},
			{
				name: "returnBeret",
				description: "The halo is yours! You feel like an honorable person, but that's about it. You are soon beheaded.",
				options: [],
				results: []
			},
			{
				name: "letItBe",
				description: "You were devoured by a bear.",
				options: [],
				results: []
			},
			{
				name: "sneakOff",
				description: "You slowly try to climb down the tree, but the bear sees you and immediately pounces, bearlike. Your scream hardly has time to reach your throat before you are devoured.",
				options: [],
				results: []
			},
			{
				name: "purchasePie",
				description: "You reach into your pocket and pay him the few pence. \"Thank \'ee, sir,\" he says. \"Now I won\'t \'ave to kick ya\'.\" He continues on his merry way. You are at a fork in the road. Which way do you go?",
				options: ["Left...?", "Right!"],
				results: ["goLeft", "goRight"]
			},	
			{
				name: "goLeft",
				description: "You were devoured by a bear.",
				options: [],
				results: []
			},
			{
				name: "goRight",
				description: "In the immortal words of Robert Muldoon from Jurassic Park, \"Clever girl.\" He was shortly eaten by a raptor; you, however, won't be, for you chose the right path. Sauntering merrily down it, you happen upon a large boar. What do you do?",
				options: ["Take a swig of lemonade", "Charge!"],
				results: ["swigLemonade", "charge"]
			},
			{
				name: "swigLemonade",
				description: "You take a swig of lemonade. The boar remains unfazed. It continues to stare at you with those steely eyes... but what is it hungry for?",
				options: ["Slaughter!", "Friendship?"],
				results: ["slaughter", "friendship"]
			},
			{
				name: "slaughter",
				description: "You were devoured by a boar. You probably shouldn't have drunk the lemonade. It does tend to make you groggy...",
				options: [],
				results: []
			},
			{
				name: "friendship",
				description: "You made friends with the boar! I do believe you've found your new best friend.",
				options: [],
				results: []
			},
			{
				name: "charge",
				description: "You scared off the boar! +1 to masculinity!",
				options: [],
				results: []
			}
		],
		praeceInternship = [
			{
				name: "start",
				description: "You walk in the door. The fine gentlemen of Praece are currently interviewing a potential employee. They tell you to get in the conference room for solitary confinement. What do you do?",
				options: ["be a sheep and do as they say", "be courageous and refuse"],
				results: ["goToConference", "refuse"]
			},
			{
				name: "goToConference",
				description: "You obediently enter the conference room. Way to submit to our oppressors.",
				options: ["start coding", "play Fire Emblem on a GBA emulator"],
				results: ["coding", "fireEmblem"],
			},
			{
				name: "refuse",
				description: "You get a funny look from Kevin and realize how silly you are being. You retreat to the conference room and immediately start Visual Boy Advance, your GBA emulator.",
				options: ["start playing Fire Emblem", "start playing Pokemon", "sit there and stare at the black, empty program window"],
				results: ["fireEmblem", "pokemon", "blackness"]
			},
			{
				name: "coding",
				description: "You start work on ColorzXD Deluxe 2, the sequel to your hit webapp ColorzXD. What should you work on?",
				options: ["adding more buttons", "adding IE support", "changing all the text to Comic Sans"],
				results: ["moreButtons", "internetExplorer", "comicSans"]
			},
			{
				name: "fireEmblem",
				description: "You enjoy some old school Fire Emblem, but then your whole party dies. Too bad.",
				options: ["get to work", "go out to see if the conference is over"],
				results: ["coding", "checkOnConference"]
			},
			{
				name: "pokemon",
				description: "You play Pokemon Emerald, the best Pokemon game ever. It only takes you, like, 30 minutes to beat the first gym leader.",
				options: ["continue playing pokemon", "go out to see if the conference is over"],
				results: ["playMorePokemon", "checkOnConference"]
			},
			{
				name: "blackness",
				description: "The black screen offers no solace to your dejected spirit. Your mind gets lost wandering the boundless void of comphrehending the inconceivable.",
				options: [],
				results: []
			},
			{
				name: "moreButtons",
				description: "You add a couple more buttons here and there, adding some shades of blue and green. Should you keep going?",
				options: ["keep adding buttons", "stop adding buttons"],
				results: ["keepAdding", "stopAdding"]
			},
			{
				name: "keepAdding",
				description: "Your superfluous buttons cause the program to look terrible. Kevin would disapprove.",
				options: ["who cares what he thinks", "bow to his will and stop adding buttons"],
				results: ["keepAddingMore", "stopAdding"]
			},
			{
				name: "keepAddingMore",
				description: "You add even more buttons. Tertiary colors and a button that attempts to fetch you a cold Mountain Dew are the latest additions. You can feel disappoval burning down on you... or is that the world bending under the weight of too many buttons?",
				options: ["who cares about the world", "stop adding buttons"],
				results: ["keepAddingMoar", "stopAdding"]
			},
			{
				name: "keepAddingMoar",
				description: "You add a button that unintentionally gets stuck in an infinite loop of adding more buttons. You can\'t stop it. You feel the ground beneath your feet start to crumble under the sheer weight of all the data. As the earth crumbles away beneath you, you see Kevin's face appear before you. \"You're fired,\" he says, and pushes you into the gaping void.",
				options: [],
				results: []
			},
			{
				name: "stopAdding",
				description: "You managed to stop adding buttons before the world was consumed by them. Good job.",
				options: ["go out to see if the conference is over"],
				results: ["checkOnConference"]
			},
			{
				name: "internetExplorer",
				description: "Internet Explorer is terrible, but so many people have yet to drink from the Fountain of Knowledge that is Google Chrome, so you better accomodate it in ColorzXD Deluxe 2.",
				options: ["get bored and go out to see if the conference is over", "successfully implement IE support and go out to see if the conference is over"],
				results: ["checkOnConference", "checkOnConference"]
			},
			{
				name: "comicSans",
				description: "The minute you update the CSS to use The Greatest Font Ever Created instead of boring old Helvetica, Kevin appears behind you with a knife and quickly slits your throat. \"No Comic Sans!\" he yells. You have died.",
				options: [],
				results: []
			},
			{
				name: "playMorePokemon",
				description: "You keep playing your mindless game. You become so embroiled in your constant quest to \'Catch \'em All\' that you lose track of time. It grows dark outside and they lock up the building at night, forgetting about you. You are hungry and there is no food around.",
				options: ["gnaw off your own arm"],
				results: ["gnawArm"]
			},
			{
				name: "checkOnConference",
				description: "Turns out they had finished 20 minutes ago and are currently playing Super Smash Bros. Brawl. Miles is mysteriously missing, so they invite you to play a tag team battle.",
				options: ["join in on Tyler's team", "join in on Kevin's team", "join in on Mike's team"],
				results: ["teamTyler", "teamKevin", "teamMike"]
			},
			{
				name: "gnawArm",
				description: "That's right, you didn't have a choice. The pain is almost unbearable, but at least you have some food in you... even though you're missing an arm. They let you out in the morning, though without an arm, you fail in everything else you try to do in life and die poor, alone, and rejected.",
				options: [],
				results: []
			},
			{
				name: "teamTyler",
				description: "You kind of suck at this game. Your ineptitude with Mr. Game & Watch merits Tyler's disapproval.",
				options: ["try to redeem yourself","blame the loss on your character"],
				results: ["playAnotherRound","karma"]
			},
			{
				name: "playAnotherRound",
				description: "You manage to win, but just barely. Exhilarated by your unlikely win, you march out the door in victory.",
				options: [],
				results: []
			},
			{
				name: "karma",
				description: "You play another round and lose, but this time to Mr. Game & Watch. You had Mr. Over-Powered himself, Meta Knight. Hanging your head in shame, you walk out the door, never to return.",
				options: [],
				results: []
			},
			{
				name: "teamKevin",
				description: "You miraculously manage to hang on to four of your initial five lives by the time Kevin has lost all of his. He gratefully accepts them, and he wins the game for your team.",
				options: ["see if you can go two-for-two"],
				results: ["playAnotherRound"]
			},
			{
				name: "teamMike",
				description: "You amd Mike dominate a few rounds of Smash. He did most the work, but still. Now you can go home with your head held high.",
				options: [],
				results: []
			}
		],
		epicQuest = [
			{
				name: "start",
				description: "A bat welcomes you with shrieking and fluttering as you force open the heavy stone doors. Hewn from the two massive slabs are ornate depictions of the promising treasure contained within the famous labyrinth, as well as warnings of the dangers within. You are about to enter the Catacombs of Ragnarok to seek out the great treasure rumored to be within.",
				options: ["chicken out","continue"],
				results: ["chickenOut","continue"],
				stats: [{stat:"hp",amt:10}],
				inv: [{item:"iron greatsword",amt:1}]
			},
			{
				name: "chickenOut",
				description: "The atmosphere of the place is starting to get to you. Eventually you can't stand it anymore. You turn and leave, your greatest chance at fame and reknown as an adventurer lost before it began.",
				options: [],
				results: []
			},
			{
				name: "continue",
				description: "You pass through the entrance, which is immediately shut behind you by an unknown force. You are plunged into complete darkness.",
				options: ["rummage through pack for a match","grope along the wall for a light switch"],
				results: ["retrieveMatch","gropeWall"]
			},
			{
				name: "retrieveMatch",
				description: "You manage to find and strike a match. You use the dim light to look around, searching for something to light. There is a torch on the ground to the side, which you retrieve and light.",
				options: ["admire your surroundings"],
				results: ["admire"]
			},
			{
				name: "admire",
				description: "The high-ceilinged room is decorated with carvings and pots ripe for the smashing. Probably isn't anything valuable in them, though.",
				options: ["smash stuff anyway","continue into the next chamber"],
				results: ["smashPot","room2"]
			},
			{
				name: "smashPot",
				description: "You find a few coins in the pots.",
				options: ["continue onward"],
				results: ["room2"],
				inv: [{item:"coins",amt:6}]
			},
			{
				name: "gropeWall",
				description: "You feel your way around, starting on the wall to your left, of course. Unfortunately, in your blindness you trip over some clay containers, cutting and bruising you. You manage to find what seems like an entrance to a hallway.",
				options: ["proceed down it"],
				results: ["room2"],
				effects: [{stat:"hp",amt:-2}]
			},
			{
				name: "room2",
				description: "In the next room you see only a high elf. He doesn't seem to be paying attention to his surroundings, just rummaging through the filth.",
				options: ["ambush him","attempt to sneak by","make friends with him"],
				results: ["ambushElf","sneakBy","makeFriends"]
			},
			{
				name: "ambushElf",
				description: "With a snarl, you leap at the elf, arms outstretched. Unfortunately, he grabs your greatsword and rips you in two. You are dead.",
				options: [],
				results: [],
			},
			{
				name: "sneakBy",
				description: "You try to sneak past him, but he hears your light footsteps and whirls around. He kills you.",
				options: [],
				results: []
			},
			{
				name: "makeFriends",
				description: "Upon seeing your darling little body, he immediately pledges himself to your service. He will do whatever you want him to. Whatever. You. Want.",
				options: ["continue on"],
				results: ["room3"],
				inv: [{item:"high elf",amt:1}]
			},
			{
				name: "room3",
				description: "This next room has obstacles littered about - gaping holes in the floor, jagged spikes littered about, and slight bumps in the floor that you know from your experience as an epic adventurer as traps.",
				options: ["sprint and leap by","take your time navigating the traps"],
				results: ["sprintBy","takeTime"],
			},
			{
				name: "sprintBy",
				description: "Your outstanding agility proves useful as you duck and dodge poisonous darts, arrows, and the like. You make it across this room safely.",
				options: ["continue"],
				results: ["room4"]
			},
			{
				name: "takeTime",
				description: "You are unable to sneak by some of the traps, taking massive damage!",
				options: ["bandage up","continue into what must be the final room"],
				results: ["heal","room4Hurt"],
				effects: [{stat:"hp",amt:-7}]
			},
			{
				name: "heal",
				description: "You bandage up and continue on.",
				options: ["go on"],
				results: ["room4"],
				effects: [{stat:"hp",amt:5}]
			},
			{
				name: "room4Hurt",
				description: "You enter the grandest of all the chambers you have travelled through thus far. High pillars, wrapped in ivy, support the ornately decorated interior of the place. Just ahead you can see a tall dwarf guarding piles upon piles of gold and rubies - the treasure, at last!",
				options: ["rush the tall dwarf","distract the dwarf"],
				results: ["die","useElf"]
			},
			{
				name: "room4",
				description: "You enter the grandest of all the chambers you have travelled through thus far. High pillars, wrapped in ivy, support the ornately decorated interior of the place. Just ahead you can see a tall dwarf guarding piles upon piles of gold and rubies - the treasure, at last!",
				options: ["rush the tall dwarf","distract the dwarf"],
				results: ["fight","useElf"]
			},
			{
				name: "fight",
				description: "You manage to overcome the dwarf in a matter of seconds. His treasure is yours!",
				options: ["leave this place"],
				results: ["end"],
				inv: [{item:"dwarf beard",amt:1},{item:"gold",amt:5000},{item:"rubies",amt:1024}]
			},
			{
				name: "useElf",
				description: "You retrieve the high elf from your pack and throw him at the dwarf. They immediately become embroiled in an intense political debate, while you stealthily make off with plenty of treasure, and an interesting story to share.",
				options: ["leave"],
				results: ["end"],
				inv: [{item:"gold",amt:500},{item:"rubies",amt:256}]
			},
			{
				name: "end",
				description: "You head back to the nearby town once you exit the dungeon. In excitement you describe all of the events to the villagers, but they do not believe you. Mainly because, what would a high elf be doing rummaging through garbage in a dark cave? That's a filthy goblin's position. You are arrested for theft and imprisoned for the rest of your natural, and supernatural, lives.",
				options: [],
				results: []
			},
			{
				name: "die",
				description: "The dwarf heaves his massive axe against your oncoming greatsword, knocking the weapon from your hands. He decapitates you swiftly and without mercy.",
				options: [],
				results: []
			}
		]
	];

	/*	
			{
				name: "",
				description: "",
				options: [],
				results: []
			},
			{
				name: "",
				description: "",
				options: [],
				results: [],
				stats: [{stat:"",amt:}],
				effects: [{stat:"",amt:0}],
				inv: [{item:"",amt:""}],
				req: [{reqType:"inv",reqs:["gold",3]}]
			},
	*/
	$scope.stats;
	$scope.inventory;

	$scope.rooms = [];
	$scope.displayed = [];

	$scope.removeOptions = function (indexOfChosen) {
		var objToAppend = $scope.displayed.length - 1;
		var newOptions = [$scope.displayed[objToAppend].options[indexOfChosen]];
		$scope.displayed[objToAppend].options = newOptions;
	}

	$scope.buttonDisabilityCheck = function (nameOfRoom) {
		/*if ($scope.displayed[$scope.displayed.length - 1].hasOwnProperty("req")) {
			switch ($scope.displayed[$scope.displayed.length-1].req.reqType) {
				case "inv":
					return $scope.checkInv($scope.displayed[$scope.displayed.length - 1].req.reqs[0], $scope.displayed[$scope.displayed.length - 1].req.reqs[1])
					break;
				case "stat":
					break;
				default:
					break;
			}
		}
		else */if($scope.displayed[$scope.displayed.length - 1].name === nameOfRoom) return false;
		return true;
	}

	$scope.chosenStoryline = "";

	$scope.storyButtonDisability = function (indexOfStory) {
		if($scope.chosenStoryline === $scope.storylineTitles[indexOfStory]) return true;
		return false;
	}

	$scope.nextRoom = function (id) {
		var newRoom = $scope.rooms.filter(function (element) {
			return element.name === $scope.displayed[$scope.displayed.length - 1].results[id];
		})[0];
		
		$scope.removeOptions(id);
		$scope.displayed.push(newRoom);

		for (var i = 0; i < $scope.stats.length; i++) {
			$scope.stats[i].col = "#000000";
		}

		if ($scope.displayed[$scope.displayed.length - 1].hasOwnProperty('effects'))
			for (var i = 0; i < $scope.displayed[$scope.displayed.length - 1].effects.length; i++)
				$scope.doEffect($scope.displayed[$scope.displayed.length - 1].effects[i].stat, $scope.displayed[$scope.displayed.length - 1].effects[i].amt);

		if ($scope.displayed[$scope.displayed.length - 1].hasOwnProperty('inv'))
			for (var i = 0; i < $scope.displayed[$scope.displayed.length - 1].inv.length; i++)
				$scope.changeInv($scope.displayed[$scope.displayed.length - 1].inv[i].item, $scope.displayed[$scope.displayed.length - 1].inv[i].amt);
	}

	$scope.changeInv = function (item, amt) {
		for (var i = 0; i < $scope.inventory.length; i++) {
			if ($scope.inventory[i].item === item) {
				$scope.inventory[i].amt += amt;
				return;
			}
		}
		$scope.inventory.push({item: item, amt: amt});
	}

	/*$scope.checkInv = function (itemToFind, amt) {
		for (var i = 0; i < $scope.inventory.length; i++) {
			if ($scope.inventory[i].item === item && $scope.inventory[i].amt == amt) {
				return true;
			}
		} return false;
	}*/

	$scope.doEffect = function (statToAffect, addition) {
		var index = -1;
		for (var i = 0; i < $scope.stats.length; i++) {
			if (statToAffect === $scope.stats[i].stat) {
				index = i;
				if (addition > 0) {
					$scope.stats[i].col = "#00ff00";
				} else {
					$scope.stats[i].col = "#ff0000";
				}
				break;
			}
		}
		if (index < 0) {
			console.log("error editing stat " + statToAffect + "; " + statToAffect + " does not exist!");
			return;
		}
		$scope.stats[index].amt += addition;
	}

	$scope.reload = function () {
		location.reload();
	}

	$scope.chooseStoryline = function (indexOfChosen) {
		$scope.rooms = $scope.storylines[indexOfChosen];
		$scope.displayed.push($scope.rooms[0]);
		$scope.chosenStoryline = $scope.storylineTitles[indexOfChosen];
		$scope.storylineTitles = [$scope.chosenStoryline];
		if ($scope.displayed[0].hasOwnProperty('stats')) $scope.stats = $scope.displayed[0].stats;
		if ($scope.displayed[0].hasOwnProperty('inv')) $scope.inventory = $scope.displayed[0].inv;
	}

}
