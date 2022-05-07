const { question } = require("readline-sync");

/**
 * ================================================================================================================================
 * 
 *                                          Problem 5
 *                                   Find the direction Problem
 * 
 * Chef is currently facing the north direction. Each second he rotates exactly 90degrees in clockwise direction. Find the direction 
 * in which Chef is facing after exactly X seconds.
 * 
 * Note:There are only 4 directions: North, East, South, West (in clockwise order).
 * 
 * Current state: 
 * 
 * Chef - North
 * 
 * 1s = 90degree clockwise
 * 
 * 90degree * X(s) = final direction
 * 
 * or 
 * 
 * We will do module of input time in seconds by 4 as there are four directions of 90 degree each
 * 
 * final direction = X(s) % 4
 * 
 * 
 * Constraints:
 * 
 * 1≤T≤100
 * 1≤X≤1000
 * 
 * Sample Input:
 * t = 3
 * 
 * X = 1
 * X = 3
 * X = 6
 * 
 * Sample Output:
 * East
 * West
 * South
 * 
 * 
 * 
 * ================================================================================================================================
 * 
 */

const findDirection = () => {
    let timeInSeconds = Number(question("Please provide the X time(seconds) of movement: "))
    const directionInClockwise = ["North", "East", "South", "West"]
    console.log(directionInClockwise[timeInSeconds % 4])
}

module.exports = {
    findDirection
}