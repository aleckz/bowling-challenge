describe('Bowling Scorecard', function(){ 
	var bowling;

	beforeEach(function(){
		bowling = new Bowling();
	});

	describe('When Initialized', function(){
		it('the score is zero', function(){
			expect(bowling.totalScore()).toEqual(0)
		});
	});

		it('player rolls are stored in an array', function(){
			bowling.roll(8);
			expect(bowling.frames.length).toEqual(1)
		});

	describe('When Playing', function(){
		it('player can view their rolls', function(){
			bowling.roll(8);
			bowling.frameList();
			expect(bowling.frameList()).toEqual([8])
		});

		it('players cant score more than 10', function(){
			bowling.roll(12);
			expect(function() { bowling.roll(12) }).toThrow(new Error("You can't roll more than 10!"))
		});

		it('number of Rolls are logged', function() {
			bowling.roll(1)
			bowling.roll(3)
			expect(bowling.numberOfRolls).toEqual(2)
		})

	});

});