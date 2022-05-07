const { question } = require("readline-sync")


const compareTriplet = () => {
    const aliceScores = question("Alice scores: ");
    const bobScores = question("Bob scores: ");

    let aliceArray = aliceScores.split(" ");
    let bobArray = bobScores.split(" ");

    aliceArray = aliceArray.map(val => Number(val));
    bobArray = bobArray.map(val => Number(val));
    let alicePoints = 0
    let bobPoints = 0

    for (let i = 0; i < aliceArray.length; i++) {
        if (aliceArray[i] > bobArray[i]) {
            alicePoints += 1
        } else if (aliceArray[i] < bobArray[i]) {
            bobPoints += 1
        }
    }
    return [alicePoints, bobPoints]
}

module.exports = {
    compareTriplet
}