const {repair, succeed, fail, get} = require('./enhancer.js');

describe('repair item function', () => {
        it('should accept an obj and return 100 durability', () => {
            expect(repair({
                name: "itemA",
                durability: 5,
                enhancement: 15,
                })).toEqual({
                    name: "itemA",
                    durability: 100,
                    enhancement: 15,
                })
            })
        });

describe('enhancement success', () => {
    it('should accept an obj with enhancement increase by 1', () => {
        expect(succeed({
            name: "itemB",
            durability: 0,
            enhancement: 5,
        })).toEqual({
            name: "itemB",
            durability: 0,
            enhancement: 6,
        })
    });
    it('the item enhancement level is 20, the enhancement is not changed', () => {
        expect(succeed({
            name: "itemB",
            durability: 0,
            enhancement: 20,
        })).toEqual({
            name: "itemB",
            durability: 0,
            enhancement: 20,
        });
        expect(succeed({
            name: "itemB",
            durability: 0,
            enhancement: 20,
        })).not.toEqual({
            name: "itemB",
            durability: 0,
            enhancement: 21,
        })
    })
});

describe('enhancement fails', () => {
    it('if item enhancement is less than 15, durablilty decreases by 5', () => {
        expect(fail({
            name: "itemC",
            durability: 62,
            enhancement: 3,
        })).toEqual({
            name: "itemC",
            durability: 57,
            enhancement: 3,
        })
    });
    it('if item enhancement is 15 or more, durabilty decreases by 10', () => {
        expect(fail({
            name: "itemC",
            durability: 62,
            enhancement: 18,
        })).toEqual({
            name: "itemC",
            durability: 52,
            enhancement: 18,
        })
    });
    it('if item enhancement is 16 or more, durability decreases by 10 and enhancement decrease by 1', () => {
        expect(fail({
            name: "itemC",
            durability: 62,
            enhancement: 16,
        })).toEqual({
            name: "itemC",
            durability: 52,
            enhancement: 15,
        })
    })
})

// test away!
