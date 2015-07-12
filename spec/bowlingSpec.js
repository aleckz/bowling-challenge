describe('Scoresheet', function(){ 
	var scoresheet;

	beforeEach(function(){
		scoresheet = new Scoresheet();
	});

	describe('When Initialized', function(){
		it('the score is zero', function(){
			expect(scoresheet.totalScore()).toEqual(0)
		});
	});

		it('player rolls are stored in an array', function(){
			scoresheet.roll(8);
			expect(scoresheet.frames.length).toEqual(1)
		});

	describe('When Playing', function(){
		it('player can view their rolls', function(){
			scoresheet.roll(8);
			scoresheet.frameList();
			expect(scoresheet.frameList()).toEqual([8])
		});

		it('players cant score more than 10', function(){
			scoresheet.roll(12);
			expect(function() { scoresheet.roll(12) }).toThrow(new Error("You can't roll more than 10!"))
		});

		it('number of Rolls are logged', function() {
			scoresheet.roll(1);
			scoresheet.roll(3);
			expect(scoresheet.numberOfRolls).toEqual(2);
		});

	describe('Logging Scores', function(){
		it('Strike finishes the frame', function(){
			scoresheet.roll(10)
			expect(scoresheet.frames.length).toEqual(2);
		});
	});

	});

});