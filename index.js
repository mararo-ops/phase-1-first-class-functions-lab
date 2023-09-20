function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];  
function createFareMultiplier(integer) {
    return function (fare) {
        return integer*fare;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, returnDriversFunction) {
    return returnDriversFunction(drivers);
  }