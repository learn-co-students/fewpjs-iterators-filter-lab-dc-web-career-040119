// Code your solution here
function findMatching (arr, name) {
  return arr.filter(function (nameOfDriver) {
    return nameOfDriver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (arr, partName) {
  let lengthOfName = partName.length;
  return arr.filter(function (driverIsName) {
    return driverIsName.slice(0, lengthOfName) === partName;
  });
}

function matchName (arr, name) {
  return arr.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}