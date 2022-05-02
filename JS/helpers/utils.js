
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

module.exports = {
    validateInputs
}