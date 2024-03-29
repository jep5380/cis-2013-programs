var intGame = 0;
var intPoints = 0;
while(intGame == 0)
{
	/* This program challenges the user to guess a randomly generated number
	 * within a range chosen by the user. Basic user input is validated to 
	 * ensure numbers are entered and there are no guessing range violations
	 * (such as choosing a number outside the high or low boundary of the range). 
	 */

	var intMax, intMin, intRandom, intGuess, intCount, booleanGuessCheck;
	var arrayGuessCheck = [];

	/* the following section prompts the user to enter the low number of their guessing range
	 * and then validates that the user entered an actual number and make sure that the
	 * number is at least 0.
	*/
	intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range"));
	while(intMin < 0 || isNaN(intMin))
	{
	    intMin = parseInt(prompt("Choose the lowest number (but no lower than 0) in your guessing range"));
	}
	/* the following section prompts the user to enter the high number of their guessing range
	 * and then validates that the user entered an actual number and make sure that the
	 * number is at least 2 more than the minimum (so that there is some guessing involved).
	*/
	intMax = parseInt(prompt("Choose the highest number in your guessing range(must be at least 2 more " +intMin + "):"));

	while(isNaN(intMax) || intMax < intMin+2)
	{
	    intMax = parseInt(prompt("Choose the highest number in your guessing range(must be at least 2 more than your lowest number):"));
	}
	/* the following section prompts the user to enter their guess
	 * and then validates that the user entered an actual number and makes sure that the
	 * number is between the allowed max and min number choices.
	*/
	intGuess = parseInt(prompt("what is your guess on the random number between " + intMin + " and " + intMax));
	while(intGuess < intMin || intGuess > intMax)
	{
	    intGuess = parseInt(prompt("Your guess is not between " +intMin + " and " + intMax));   
	}
	/*The following line of code generates the random number to be used in the guessing game.
	 * Math.floor rounds the random number down to the nearest integer
	 * Math.random() generates a random number between 0 and 1
	 * the portion of (intMax-intMin +1) provides the range of random values
	 * the addition of + intMin provides the floor for the random number 
	 */
	intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);
	// set the loop counter
	intCount = 1;
	/* The following section provides the main loop and logic for the program.
	 * The user's guess is compared to the randomly generated number and feedback
	 * is given based upon whether the guess is higher or lower. The loop exits when
	 * the user chooses the correct number. Each time through the loop updates the loop counter.
	 */

	while(intGuess != intRandom)
	{
	    booleanGuessCheck === false;
	    for(var j = 0; j < arrayGuessCheck.length; j++)
	    {
		 if(intGuess === arrayGuessCheck[j])
		 {
		     booleanGuessCheck === true;
		 }
	    }
	    if(booleanGuessCheck === false)
	    {
		    if( intGuess < intRandom)
		    {
			 intGuess = parseInt(prompt("Guess is too low. What is your guess on the random number between " + intMin + " and " + intMax));
		    	 arrayGuessCheck[arrayGuessCheck.length] = intGuess;
		    }
		    else
		    {
			 intGuess = parseInt(prompt("Guess is too high. What is your guess on the random number between " + intMin + " and " + intMax));
		    	 arrayGuessCheck[arrayGuessCheck.length] = intGuess;
		    }
		    intGuess = parseInt(prompt("what is your guess on the random number between " + intMin + " and " + intMax));
	    }
	    else
	    {
		 intGuess = parseInt(prompt("You have already guessed this number"));   
	    }
	    while(intGuess < intMin || intGuess > intMax)
	    {
		intGuess = parseInt(prompt("Your guess is not between " +intMin + " and " + intMax));   
	    }
	    intCount++;
	}
	// provides final output upon successful guessing
	intPoints = intPoints + ((intMax-intMin)-intCount);
	alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
			" and it only took you " + intCount + " attempts! You earned " + intPoints + " points so far!");
	intGame = parseInt(prompt("To play again enter 0, to stop playing enter 1"));
}
