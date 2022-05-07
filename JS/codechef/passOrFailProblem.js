const { question } = require("readline-sync");
const { validateInputs } = require("../helpers/utils")

/**
 * =====================================================================================================
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
 * Constraints:
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
 * 
 * =========================================================================================================
 */
const passOrFail = () => {
    const numberOfQuestions = question(`Please enter number of questions: `)
    const correctAnswers = question(`Please enter number of correct answers: `)
    const passingMarks = question(`Please enter passing marks: `)

    const isValid = validateInputs({
        numberOfQuestions,
        correctAnswers,
        passingMarks
    })

    if (isValid) {
        const attemptedQuestionMarks = 3 * x;
        const penalityMarksForWrongAnswer = (n - x) * -1
        const finalScore = attemptedQuestionMarks + penalityMarksForWrongAnswer

        if (finalScore >= p) console.log("PASS")
        else console.log("FAIL")
    }

}

module.exports = {
    passOrFail
}