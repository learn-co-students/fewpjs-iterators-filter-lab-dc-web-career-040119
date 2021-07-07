// Code your solution here

const findMatching = (drivers, string) => {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

const fuzzyMatch = (drivers, string) => {
  return drivers.filter(driver => {
    string = string.toLowerCase()
    driver = driver.toLowerCase()
    return driver.indexOf(string) === 0
  })
}

const matchName = (drivers, string) => {
  return drivers.filter(driver => { return driver.name.toLowerCase() === string.toLowerCase() })
}
