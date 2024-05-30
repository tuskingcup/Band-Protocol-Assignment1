const { bossBaby, status } = require("./BossBaby.js")

//test case for Good boy
it("should get Good boy", () => {
	expect(bossBaby("SRSSRRR")).toEqual(status.GOOD)
	expect(bossBaby("SSRSRRR")).toEqual(status.GOOD)
	
})

//test case for Bad boy
it("should get Bad boy", () => {
	expect(bossBaby("RSSRR")).toEqual(status.BAD)
	expect(bossBaby("SSSRRRRS")).toEqual(status.BAD)
	expect(bossBaby("SRRSSR")).toEqual(status.BAD)
})
