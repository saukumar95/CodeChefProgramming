const { question } = require("readline-sync");
const { bmiChecker } = require("../helpers/utils");


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
const bmiCalculator = () => {
    const height = Number(question("Provide your height(in meters): "))
    const mass = Number(question("Provide your mass (in kilograms): "))
    bmiChecker(height, mass)
}

module.exports = {
    bmiCalculator
}