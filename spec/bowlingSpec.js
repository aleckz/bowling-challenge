describe('Bowling Scorecard', function(){ 
	var bowling;

	beforeEach(function(){
		bowling = new Bowling();
	});

	describe('when initialized', function(){
		it('the score is zero', function(){
			expect(bowling.totalScore()).toEqual(0)
		});
	});

		it('players rolls are stored in an array', function(){
			bowling.roll(8);
			expect(bowling.frames.length).toEqual(1)
		});



});