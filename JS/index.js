// Problems Link: https://www.codechef.com/practice?page=0&limit=20&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=0&end_rating=999&topic=Basic+Programming&tags=&group=all

/**
 *                          Problem 1
 * 
 *                      Pass or Fail Problem
 *
 * The test has a total of N question, each question carries 3
 * marks for a correct answer and −1 for an incorrect answer. 
 * Chef is a risk-averse person so he decided to attempt all the questions. 
 * It is known that Chef got X questions correct and the rest of them incorrect. 
 * For Chef to pass the course he must score at least P marks. 
 * 
 * 1≤T≤1000
 * 1≤N≤100
 * 0≤X≤Nƒ
 * 0≤P≤3⋅N
 * 
 * First line will contain T, number of testcases. Then the testcases follow.
 * Each testcase contains of a single line of input, three integers N, X, P
 * 
 * 3
 * 5 2 3
 * 4 0 0 
 */

const readline = require("readline-sync");
const { validateInputs, bmiChecker } = require("./helpers/utils")

const testCase = Number(readline.question(`Please enter number of testcases to run: `))

const passOrFail = (n = 4, x = 0, p = 0) => {
    const isValid = validateInputs({
        n,
        x,
        p
    })

    if (isValid) {
        const attemptedQuestionMarks = 3 * x;
        const penalityMarksForWrongAnswer = (n - x) * -1

        const finalScore = attemptedQuestionMarks + penalityMarksForWrongAnswer

        if (finalScore >= p) console.log("PASS")
        else console.log("FAIL")
    }

}

for (let i = 0; i < testCase; i++) {
    const numberOfQuestions = readline.question(`Please enter number of questions: `)
    const correctAnswers = readline.question(`Please enter number of correct answers: `)
    const passingMarks = readline.question(`Please enter passing marks: `)
    passOrFail(numberOfQuestions, correctAnswers, passingMarks)
}

/**
 * ================================================================================================================================
 * 
 *                                      Problem 2
 *                                   Body Mass Index
 * 
 * You are given the height H (in metres) and mass M (in kilograms) of Chef. 
 * The Body Mass Index (BMI) of a person is computed as M/H^2.
 * Report the category into which Chef falls, based on his BMI:
 * Category 1: Underweight if BMI ≤18
 * Category 2: Normal weight if BMI ∈{19, 20,…, 24}
 * Category 3: Overweight if BMI ∈{25, 26,…, 29}
 * Category 4: Obesity if BMI ≥30
 * 
 * 
 * ================================================================================================================================
 * 
 */
for (let start = 0; start < testCase; start++) {
    const height = Number(readline.question("Provide your height(in meters): "))
    const mass = Number(readline.question("Provide your mass (in kilograms): "))
    bmiChecker(height, mass)
}


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
 * 
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
const startTime = Date.now()
for (let start = 0; start < testCase; start++) {
    const weekWeatherReport = readline.question("Provide weather of a week.(1 = sunny, 0 = rainy): ")
    const weatherReport = weekWeatherReport.split(" ")
    const sunnyWeather = weatherReport.filter((w) => w === '1').length
    const rainyWeather = weatherReport.filter(w => w === '0').length

    if (sunnyWeather > rainyWeather)
        console.log("YES");
    else
        console.log("NO");
}
const endTime = Date.now()
console.log(`Problem 3: Time taken ${(endTime - startTime) / 1000}`);