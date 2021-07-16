const K = 40

export const SARAH_RATING = 10000

export const newRating = (playerRating: number, opponentRating: number, won: boolean): number => {
	const expectedScore = 1 / (1 + Math.pow(10, (playerRating - opponentRating) / 400))
	return playerRating + K * ((won ? 1 : 0) - expectedScore)
}

export const numWinsSARAHNeededToRating = (currentRating: number, target: number): number => {
	let _currentRating = currentRating
	let numWins = 0
	while (_currentRating < target) {
		_currentRating = newRating(_currentRating, 10000, true)
		numWins++
	}
	return numWins
}