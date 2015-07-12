var Bowling = function(){
	this.score = 0
	this.frames = []
	this.numberOfRolls = 0
}

Bowling.prototype.totalScore = function() {
	return this.score;
};

Bowling.prototype.frameList = function(){
	return this.frames;
}

Bowling.prototype.roll = function (number){
	this.numberOfRolls ++

	if (number <= 10){
		this.frames.push(number)
	} else {
		throw new Error("You can't roll more than 10!")		
	};
};

Bowling.prototype.scoreCount = function(){
	return this.numberOfRolls;
}



// var roll = Math.floor((Math.random() * 10) + 1)