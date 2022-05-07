const { question } = require("readline-sync");

/**
 * ================================================================================================================================
 * 
 *                                          Problem 6
 *                                   Puppy and Sum Problem
 * Yesterday, puppy Tuzik learned a magically efficient method to find the sum of the integers from 1 to N. He denotes it as sum(N). 
 * But today, as a true explorer, he defined his own new function: sum(D, N), which means the operation sum applied D times: the first 
 * time to N, and each subsequent time to the result of the previous operation.
 * 
 * For example, if D = 2 and N = 3, then sum(2, 3) equals to sum(sum(3)) = sum(1 + 2 + 3) = sum(6) = 21.
 * 
 * Tuzik wants to calculate some values of the sum(D, N) function. Will you help him with that?
 * 
 * Constraints:
 * 
 * 1 ≤ T ≤ 16
 * 1 ≤ D, N ≤ 4
 * 
 * 2
 * 1 4
 * 2 3
 * 
 * 
 * 10
 * 21
 * 
 * total sum of numbers formula:
 * 
 * sum = N * (N + 1) / 2
 * 
 * 
 * ================================================================================================================================
 * 
 */

const puppyAndSum = () => {
    const d = Number(question("Please provide the D: "));
    const n = Number(question("Please provide the N: "));
    // Init the curr with input number which we used for find sum of nth number. 
    let curr = n
    for (let start = 1; start <= d; start++) {
        /*
        looping the nth number sum till D times and updating the current value. 
        Later it will update curr and update curr will provide new sum value 
        */
        curr = (curr * (curr + 1)) / 2
    }
    // Final result
    console.log(curr);
}

module.exports = {
    puppyAndSum
}