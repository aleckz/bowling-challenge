var Frame = function() {
	this.rollsRemaining = 2;
	this.rolls = []
	this.score = 0
};

Frame.prototype.inProgress = function(){
	return (this.rollsRemaining > 0)
};

Frame.prototype.roll = function(number){
	if (number === 10){
		this.rollsRemaining -= 2
	}
	this.rollsRemaining --
	this.rolls.push(number)
};

Frame.prototype.totalScore = function(){
	this.rolls.reduce(function(previousValue, currentValue, index, array) {
		this.score += (previousValue + currentValue)
	});
}

