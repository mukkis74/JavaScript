/**
 * Determines if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean} True if the year is a leap year, false otherwise.
 */
function isLeap(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year.";  // Divisible by 400 → leap year
      } else {
        return "Not leap year."; // Divisible by 100 but not by 400 → not leap year
      }
    } else {
      return "Leap year";    // Divisible by 4 but not by 100 → leap year
    }
  } else {
    return "Not leap year.";     // Not divisible by 4 → not leap year
  }
}

console.log(isLeap(2020)); // true
console.log(isLeap(1900)); // false
console.log(isLeap(2000)); // true
console.log(isLeap(2021)); // false 