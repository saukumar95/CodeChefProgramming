
const sumOfArrayOfArray = () => {

    const array = [
        [3],
        [2, 20],
        [5,4],
        [10]
    ]

    const sumOfArrayOfArrayResult = array.reduce((prev, curr) => {
        return prev + curr.reduce((prev, curr) => {
            return prev + curr
        })
    }, 0)

    console.log(sumOfArrayOfArrayResult);
}

module.exports = {
    sumOfArrayOfArray
}