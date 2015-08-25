	var totalPoints = 0;
	var numOfRolls = 0;	
	var dragonLife = Math.floor(Math.random() * 100)+1;

	
function fight(){
	var knight = document.getElementById("dragLife");
	var die1 = document.getElementById("die1");
	var die2 = document.getElementById("die2");
	var status = document.getElementById("status");
	var d1 = Math.floor(Math.random()* 6)+1;
	var d2 = Math.floor(Math.random()* 6)+1;
	die1.innerHTML = d1;
	die2.innerHTML = d2;
	var roll = d1+d2;
	
	
	dragLife.innerHTML= "Dragon's life = " + dragonLife;
		
	if(dragonLife <= totalPoints){
		document.getElementById("btn").style.visibility = "hidden";
		document.getElementById("newGame").style.visibility = "visible";
		status.innerHTML = "WOW!  Beyond all odds, you defeated the dragon.  YOU! <br/> Maybe next time try using a sword instead of some dice.  It might go quicker. Just a thought...";
	}else{
		if(d1 === d2){
		numOfRolls++;
		status.innerHTML = "You rolled doubles! Take ALL "+ roll +" points!";
	    totalPoints += roll;
	
		}else if (roll < 7){
			numOfRolls++;
			status.innerHTML = "You rolled " + roll + ". You can do better then that! Do you WANT the dragon to eat your face? You get 2 points!";
			totalPoints+=2;
		
		}else{
			numOfRolls++;
			status.innerHTML = "You rolled " + roll + ". You get "+ Math.round(roll/2) +" points!";
			totalPoints += Math.round(roll/2);
		}
		totalPointsId.innerHTML = "Total Points = " + totalPoints;
		numOfRollsId.innerHTML = "Total Number of rolls = " + numOfRolls;		
	}
}



