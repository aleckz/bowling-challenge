describe('Frame', function(){
	var frame;

	beforeEach(function(){
		frame = new Frame;
	})

	describe('knows when the frame is in progress', function(){
		it('is in progress', function(){
			expect(frame.inProgress()).toBe(true)
		});

		it('is in progress after one roll', function(){
			frame.roll(5)
			expect(frame.inProgress()).toBe(true)
		});
	});

	describe('knows when the frame is over', function(){
		it('is over after 2 rolls', function(){
			frame.roll(3)
			frame.roll(4)
			expect(frame.inProgress()).toBe(false)
		});

		it('when a strike is rolled', function(){
			frame.roll(10)
			expect(frame.inProgress()).toBe(false)
		});

		it('when a spare is rolled', function(){
			frame.roll(5)
			frame.roll(5)
			expect(frame.inProgress()).toBe(false)
		})

		describe('knows its score', function(){
			it('has the totalscore', function(){
				frame.roll(3)
				frame.roll(5)
				expect(frame.score).toEqual(8)
			})
		})
	});

});