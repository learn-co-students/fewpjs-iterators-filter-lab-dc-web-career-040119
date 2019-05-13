// Code your solution here

function findMatching(array, string) {
	let matches = array.filter(n => {
		return n.toLowerCase() === string.toLowerCase()}
		)
	return matches
}

function fuzzyMatch(array, string) {
	let begins_with = array.filter(n =>{
		return n.startsWith(string)
	})
	return begins_with
}

function matchName(array, string) {
	let matches = array.filter(n => {
		return n.name === string}
		)
	return matches
}