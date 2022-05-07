// Problems Link: https://www.codechef.com/practice?page=0&limit=20&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=0&end_rating=999&topic=Basic+Programming&tags=&group=all
const { question } = require("readline-sync");
const { passOrFail } = require("./codechef/passOrFailProblem");
const { bmiCalculator } = require("./codechef/bmiCalculator")
const { goodWeather } = require("./codechef/goodWeather")
const { lazyChef } = require("./codechef/lazyChef")
const { findDirection } = require("./codechef/findDirection")
const { puppyAndSum } = require("./codechef/puppyAndSum")
const { vaccineDates } = require("./codechef/vaccineDates")

let testCase = Number(question(`Please enter number of testcases to run: `))

while (testCase--) {
    passOrFail()
    bmiCalculator()
    goodWeather()
    lazyChef()
    findDirection()
    puppyAndSum()
    vaccineDates()
}

