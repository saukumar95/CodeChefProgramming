const { question } = require("readline-sync");
/**
 * ================================================================================================================================
 * 
 *                                          Problem 7
 *                                   Vaccine Dates Problem
 * Chef has taken his first dose of vaccine D days ago. He may take the second dose no less than L days and no more than R
 * days since his first dose.
 * 
 * Determine if Chef is too early, too late, or in the correct range for taking his second dose.
 * 
 * Constraints:
 * 
 * 1≤T≤10^5
 * 1≤D≤10^9
 * 1≤L≤R≤10^9
 * 
 * Sample Input: 
 * 4
 * 10 8 12 
 * 14 2 10
 * 4444 5555 6666 
 * 8 8 12
 * 
 * Sample Output:
 * 
 * Take second dose now
 * Too Late
 * Too Early
 * Take second dose now
 * 
 * 
 * Input : D, L , R where each unit are in days.
 * 
 * First dose of vaccine --> D days ago from present. i.e. current day - D day = vaccine day.
 * 
 * Second dose of vaccine --> R day <= vaccine day >= L days
 * 
 * Possible answers:
 * 
 * 1. Take second dose now (day ranges between R and L)
 * 2. Too Late (day more that R)
 * 3. Too Early (day less than L)
 * 
 * 
 * ================================================================================================================================
 * 
 */

const vaccineDates = () => {
    const d = Number(question("Provide first vaccine dose day: "))
    const l = Number(question("Provide minimum days to take second dose: "))
    const r = Number(question("Provide maximum days to second dose: "))

    if (d <= r && d >= l) {
        console.log("Take second dose now");
    } else if (d > r) {
        console.log("Too Late");
    } else if (d < l) {
        console.log("Too Early");
    } else {
        console.log("Invalid input");
    }
}

module.exports = {
    vaccineDates
}