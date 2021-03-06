function getNumericSuffix(num)
{
	//The condition checks first to make sure the number doesn't end in 11 before checking to see if the number ends in 1.
	/*
		Modulus (%) is a mathematical operation that returns the remainder of an integer divide.
	*/
	if (num % 100 != 11 && num % 10 == 1)
	{
		return "st";
	}
	
	if (num % 100 != 12 && num % 10 == 2)
	{
		return "nd";
	}
	
	if (num % 100 != 13 && num % 10 == 3)
	{
		return "rd";
	}
	
	/*
		If any of the previous conditionals had triggered, the return statement inside of it would have ended the function, returning the proper "Special Case" suffix.
		
		If none of them trigger, then all the function is left with is numbers that are assigned the suffix "th".  There's no reason to ask further questions because all of the questions have been answered.
	*/
	return "th";
}

/*
	getRandomInteger
	
	generates a random number between the lower bound (inclusive) and the upper bound (inclusive).
	
	parameters:
		lower - the lower bound of the range of random numbers.
		upper - the upper bound of the range or random numbers.
		
	returns:
		a random number between lower and upper, inclusive.
		a random number between lower and upper, inclusive.
*/
function getRandomInteger(lower, upper)
{
	//R = (rnd * (u - (L - 1)) + L
	multiplier = upper - (lower - 1);
	rnd = parseInt(Math.random() * multiplier) + lower;
	
	return rnd;
}