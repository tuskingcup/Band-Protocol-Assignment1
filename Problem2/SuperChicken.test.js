const { superChicken, maxChicken } = require("./SuperChicken.js")
it("should get 2", () => {
	expect(superChicken(5,[2,5,10,12,15])).toEqual(2)
})

it("should get 4", () => {
	expect(superChicken(10,[1,11,30,34,35,37])).toEqual(4)
})

test("roofsize 1000000", () => {
	expect(superChicken(1000000,[1])).toEqual(1)
})

test("chicken position 1000000", () => {
	expect(superChicken(1000000,[1,1000000])).toEqual(2)
})

test("max chicken 1", () => {
	expect(maxChicken(5,[2,5,10,12,15])).toEqual(2)
    expect(maxChicken(5,[5,10,12,15])).toEqual(1)
    expect(maxChicken(5,[10,12,15])).toEqual(2)
    expect(maxChicken(5,[12,15])).toEqual(2)
    expect(maxChicken(5,[15])).toEqual(1)
})

test("max chicken 2", () => {
	expect(maxChicken(10,[1,11,30,34,35,37])).toEqual(1)
    expect(maxChicken(10,[11,30,34,35,37])).toEqual(1)
    expect(maxChicken(10,[30,34,35,37])).toEqual(4)
    expect(maxChicken(10,[34,35,37])).toEqual(3)
    expect(maxChicken(10,[35,37])).toEqual(2)
    expect(maxChicken(10,[37])).toEqual(1)
})