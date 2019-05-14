// Code your solution here
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function findMatching(drivers, driver){
  let names = []
  for(var i=0; i < drivers.length; i++){
    if(drivers[i].toLowerCase() === driver.toLowerCase()) names.push(drivers[i]);
  }
  return names
}

function fuzzyMatch(drivers, driverInitials){
  let name = driverInitials
  let names = []
  for(var i=0; i < drivers.length; i++){
    if(drivers[i][0] === name[0] && drivers[i][1] === name[1]) names.push(drivers[i]);
  }
  return names
}

function matchName(drivers,driver){
	let names = []
  for(var i=0; i < drivers.length; i++){
    if(drivers[i].name === driver) names.push(drivers[i]);
  }
  return names
}
