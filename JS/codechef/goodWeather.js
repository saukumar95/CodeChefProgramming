const { question } = require("readline-sync");

/**
 * ================================================================================================================================
 * 
 *                                      Problem 3
 *                                   Good Weather Problem
 * 
 * The weather report of Chefland is Good if the number of sunny days in a week is strictly greater than the number of rainy days.
 * Given 7 integers A1,A2,A3,A4,A5,A6,A7 where Ai=1 denotes that the ith day of week in Chefland is a sunny day, Ai=0 denotes that 
 * the ith day in Chefland is a rainy day. Determine if the weather report of Chefland is Good or not.
 * 
 * Constraints: 
 * 1≤T≤20 
 * 0≤Ai≤1
 * 
 * Consider:
 * s = sunny days
 * r = rainy days
 * 
 * 1 week = 7 days
 * Ai = 1 (s)
 * Ai = 0 (r)
 * 
 * 1 0 1 0 1 1 0
 * 0 1 1 1 0 1 0
 * 1 1 1 1 1 0 0
 * 
 * ================================================================================================================================
 * 
 */
const goodWeather = () => {
    const weekWeatherReport = question("Provide weather of a week.(1 = sunny, 0 = rainy): ")
    const weatherReport = weekWeatherReport.split(" ")
    const sunnyWeather = weatherReport.filter((w) => w === '1').length
    const rainyWeather = weatherReport.filter(w => w === '0').length

    if (sunnyWeather > rainyWeather)
        console.log("YES");
    else
        console.log("NO");

}

module.exports = {
    goodWeather
}