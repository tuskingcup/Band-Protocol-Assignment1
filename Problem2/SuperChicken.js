const readline = require("node:readline")

// for input from keyboard
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})


rl.question(`input n and k seperate with white space\n`, (inputNums) => {
	rl.question(
		`input set of integer seperate with white space\n`,
		(inputPos) => {
            //split both of string input to array and make it number
			let chickenNums = inputNums
				.split(" ")
				.map((inputNums) => Number(inputNums))
			let positions = inputPos.split(" ").map((num) => Number(num))

            //call superChicken function
			console.log(superChicken(chickenNums[1], positions))
			rl.close()
		}
	)
})

const superChicken = (roofSize, positions) => {
	let maxCount = 0

    //slice array for find max chicken 
	for (let i = 0; i < positions.length; i++) {
		const max = maxChicken(roofSize, positions.slice(i, positions.length))
		if (max > maxCount) {
			maxCount = max
		}
	}
	return maxCount
}

//use difference of 2 numbers for find max chicken that roofsize can proctect
const maxChicken = (roofSize, positions) => {
	let tempRange
	let max

	for (max = 1; max < positions.length; max++) {
		tempRange = positions[max] - positions[0]
		if (tempRange + 1 > roofSize) {
			return max
		}
	}
	return max
}

module.exports = {
	superChicken,
	maxChicken,
}
