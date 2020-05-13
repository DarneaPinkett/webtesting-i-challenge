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
})

// test away!
