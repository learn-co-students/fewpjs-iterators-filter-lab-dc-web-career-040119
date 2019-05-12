// Code your solution here
const findMatching = (array, name) => array.filter(v => v.toLowerCase() === name.toLowerCase());

const fuzzyMatch = (array, letters) => array.filter(v => v.slice(0, letters.length) === letters);

const matchName = (array, name) => array.filter(obj => obj.name === name);
