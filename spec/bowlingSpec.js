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

		// it('player can roll', function(){
		// 	bowling.roll();
		// 	expect(bowling.frameList.length).toEqual(1)
		// });



});