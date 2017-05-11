"use strict"

function getPlayerDiceChoice(){					//prompts for dice choice
	var playerDiceChoice= Number(prompt("Choose a die!\n"+
										"press 1 for a 4-sided die\n"+
										"press 2 for a 6-sided die\n"+
										"press 3 for a 8-sided die\n"+
										"press 4 for a 10-sided die\n"+
										"press 5 for a 12-sided die\n"+
										"press 6 for a 20-sided die\n"))
	return playerDiceChoice
}
function roll4Sided(){							//roll value rng
	var roll= Math.floor((Math.random()*4)+1)
	return roll
}

function roll6Sided(){
	var roll= Math.floor((Math.random()*6)+1)
	return roll
}

function roll8Sided(){
	var roll= Math.floor((Math.random()*8)+1)
	return roll
}

function roll10Sided(){
	var roll= Math.floor((Math.random()*10)+1)
		if(roll<=5){
			var roll=-5
		}
	return roll
}

function roll12Sided(){
	var roll= Math.floor((Math.random()*12)+1)
		if(roll<=7){
			var roll=-6
		}
	return roll
} 

function roll20Sided(){
	var roll= Math.floor((Math.random()*20)+1)
		if (roll<=12) {
			var roll=-10
		}
	return roll
}

function getRoll(DiceChoice){		//gets roll value
	switch(DiceChoice){
		case 1:
			var roll=roll4Sided();
			return(roll);
		case 2:
			var roll=roll6Sided();
			return(roll);
		case 3:
			var roll=roll8Sided();
			return(roll);
		case 4:
			var roll=roll10Sided();
			return(roll);
		case 5:
			var roll=roll12Sided();
			return(roll);
		case 6:
			var roll=roll20Sided();
			
			return(roll);
		default:
			alert("Please choose a die!(1-6)")
			var roll=getRoll(getPlayerDiceChoice())
			return roll



	}
	return roll
}
function getPlayerMove(){					//collects user data						
	var playerRoll= getRoll(getPlayerDiceChoice()) 
	alert("you rolled a:" +'\n' + playerRoll)
	return playerRoll
}
function difficultySelector(selection){
	switch(selection){
		case 1:
			return Number(40)
		case 2:
			return Number(30)
		case 3:
			return Number(20)
		default:
			alert("OH NO YOU DI-INT")
			return Number(20)



	}
}


function mainFunction(){
	var difficulty= difficultySelector(Number(prompt("Do you want to play a game?\n"+
													"press 1 to be babied\n"+
													"press 2 for a challenge\n"+
													"press 3 for P90X INSANITY\n")))
	var playerData= getPlayerMove()
	var computerData= getRoll(roll6Sided())
		while(playerData<=40 && computerData<=difficulty){
			playerData+=getPlayerMove()
				console.log("player"+playerData)
			computerData+= getRoll(roll6Sided())
				console.log("computer"+computerData)
				alert("Your current score is"+ '\n' + playerData + '\n' + "Your opponents current score is"+ '\n' + computerData)
					if (playerData>=40 && computerData>=difficulty){
						alert("too bad you tied")
					}else if(playerData>=40){
						alert("You beat that filthy computer...Yes you")
					}else if (computerData>difficulty) {
						alert("YAY YOU WON...wait no you didnt. How do you even lose to this basic computer")
					}
		}
}

