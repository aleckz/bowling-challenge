var Scoresheet = function(){
	this.score = 0
	this.frames = []
	this.numberOfRolls = 0
}

Scoresheet.prototype.totalScore = function() {
	return this.score;
};

Scoresheet.prototype.frameList = function(){
	return this.frames;
}

Scoresheet.prototype.roll = function (number){
	this.numberOfRolls ++

	if (number < 10){
		this.frames.push(number)
		
	} else if (number == 10) {
		this.frames.push(number)
		this.frames.push(0)
	} else {
		throw new Error("You can't roll more than 10!")		
	};
	this.score += number
};

Scoresheet.prototype.scoreCount = function(){
	return this.numberOfRolls;
}
