
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