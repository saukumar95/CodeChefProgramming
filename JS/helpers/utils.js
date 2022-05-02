
const validateInputs = (obj) => {
    const { numberOfQuestions, wrongAnswer, passingMarks } = obj
    if (numberOfQuestions < 1 && numberOfQuestions > 100) {
        return false
    } else if (wrongAnswer < 0 && wrongAnswer > numberOfQuestions) {
        return false
    } else if (passingMarks < 0 && passingMarks > 3 * numberOfQuestions) {
        return false
    } else {
        return true
    }
}

/**
 * This method takes height and mass from user and apply the bmi formulae 
 * to calculate the user's bmi and categories them under 4 categories
 * 
 * Category 1: Underweight
 * Category 2: Normal weight
 * Category 3: Overweight
 * Category 4: Obescity
 * 
 * @param {Number} height 
 * @param {Number} mass 
 * @returns {void}
 */
const bmiChecker = (height, mass) => {
    const bmi = mass / (height * height)
    if (bmi >= 30)
        console.log("Category 4")
    else if (bmi >= 25 && bmi <= 29)
        console.log("Category 3");
    else if (bmi >= 19 && bmi <= 24)
        console.log("Category 2");
    else
        console.log("Category 1");
}

module.exports = {
    validateInputs,
    bmiChecker
}