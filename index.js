
// find match, disregard capitalization
// attempt
function findMatching (list, term) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === term.toLowerCase();
  });
}

// find matches that begin w/ same letters

// initial
// function fuzzyMatch (list, term) {
//   return list.filter(function (driverName) {
//     return driverName.toLowerCase() === name.slice(0..3)
//   });
// }

// actual
function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}


// differences (assumed term was fixed length)

// find exact matches only
function matchName (list, givenName) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === givenName.toLowerCase();
  });
}
