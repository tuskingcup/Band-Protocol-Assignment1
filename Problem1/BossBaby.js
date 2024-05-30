//enum status
const status = {
	GOOD: "Good boy",
	BAD: "Bad boy",
}

const bossBaby = (S) => {
	//score for check status if score equal 0 it's mean Boss baby revenge all shot 
	//but if score > 0 it's mean Boss baby have a shot doesn't revenge
	let shotscore = 0

	//if start with revenge it's mean Bad boy
	if (S[0] === "R") {
		return status.BAD
	}

	//loop all letter in S
	//if letter is S it's mean Boss baby was shot 1 time shotScore will increase by 1
	//but if letter is R it's mean Boss baby revenge neighborhood kids 1 times shotScore will decrease by 1
	for (let letter of S){
		if (letter === "S") {
			shotscore += 1
		} else if (letter === "R" && shotscore > 0) {
			shotscore -= 1
		}
	}

	//check status is Bad Boy or Good Boy
	if (shotscore > 0) {
		return status.BAD
	} else if (shotscore === 0) {
		return status.GOOD
	} else {
		return "ERROR"
	}
}

module.exports = {
	bossBaby,
	status
}


