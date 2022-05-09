
/**
 * 
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix  is shown below:
 * ``[[ 1, 2, 3 ],[ 4, 5, 6 ],[ 9, 8, 9 ]]``  
 * 
 * The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17. 
 * Their absolute difference is |15 - 17| = 2.
 * 
 * ## Function description ##
 * 
 * Complete the  function in the editor below.
 * 
 * **diagonalDifference** takes the following parameter:
 * 
 * int arr[n][m]: an array of integers
 * 
 * ## Return ##
 * 
 * int: the absolute diagonal difference
 * 
 * 
 */


const diagonalDifference = () => {
    const twoD_Array = [
        [11, 2, 4],         // 00  01  02
        [4, 5, 6],          // 10  11  12
        [10, 8, -12]        // 20  21  22
    ]
    let primaryDiagonalArray = []
    let secondaryDiagonalArray = []
    
    for(let i = 0; i < twoD_Array.length; i++) {
        for(let j = 0; j < twoD_Array.length; j++) {
            if(i === j) {
               primaryDiagonalArray.push(twoD_Array[i][j])
            }
        }
    }

    for(let i = 0; i < twoD_Array.length; i++) {
        for(let j = 0; j < twoD_Array.length; j++) {
            if((i+j) === (twoD_Array.length - 1)) {
                secondaryDiagonalArray.push(twoD_Array[i][j])
            }
        }
    }

    const sumPrimaryDiagonalArray = primaryDiagonalArray.reduce((prev, curr) => {
        return prev + curr
    },0)

    const sumSecondaryDiagonalArray = secondaryDiagonalArray.reduce((prev, curr)=> {
        return prev + curr
    }, 0)
    
    const diagonalDifference = Math.abs(sumPrimaryDiagonalArray - sumSecondaryDiagonalArray);

    console.log(diagonalDifference);

}

module.exports = {
    diagonalDifference
}