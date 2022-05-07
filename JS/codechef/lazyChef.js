
const { question } = require("readline-sync");
/**
 * ================================================================================================================================
 * 
 *                                      Problem 4
 *                                   Lazy Chef Problem
 * 
 * Chef is a very lazy person. Whatever work is supposed to be finished in x units of time, he finishes it in m * x units of time. 
 * But there is always a limit to laziness, so he delays the work by at max d units of time. Given x,m,d, find the maximum time taken 
 * by Chef to complete the work.
 * 
 * Ideal:
 * x(time) = w
 * 
 * After delay: 
 * m*x(time) = w
 * 
 * Adding max delay to work:
 * x+d(time) = w
 * 
 * Max time taken will be between 
 * m*x < t >= x+d
 * 
 * Constraints:
 * 
 * 1≤T≤104 
 * 1≤x,m≤10 
 * 0≤d<100
 * 
 * Sample Input:
 * 
 * t = 3
 * 
 * x | m | d
 * 1   1   0
 * 1   3   1
 * 2   2   3
 * 
 * Sample Output:
 * 
 * 1
 * 2
 * 4
 * 
 * ================================================================================================================================
 * 
 */

const lazyChef = () => {
    const userInput = question(`Please provide x, m and d values: `);
    const [x, m, d] = userInput.split(" ");
    const t = Math.min(Number(m) * Number(x), Number(x) + Number(d)) // 1*3 = 3 -- 1+1 = 2
    console.log(t);
}

module.exports = {
    lazyChef
}