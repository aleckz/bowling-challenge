var Bowling = function(){
	this.score = 0
	this.frames = []
}

Bowling.prototype.totalScore = function() {
	return this.score;
};

// Bowling.prototype.frameList = function(){
// 	return this.frames;
// }

Bowling.prototype.roll = function (number){
	this.frames.push(number)
}



// var roll = Math.floor((Math.random() * 10) + 1)