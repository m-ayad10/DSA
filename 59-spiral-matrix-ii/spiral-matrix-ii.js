/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let ans = Array.from({ length: n }, () => Array(n).fill(0))
    let colStart = 0
    let rowStart = 0
    let colEnd = n - 1
    let rowEnd = n - 1
    let k = 1
    while (colStart <= colEnd && rowStart <= rowEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            ans[rowStart][i] = k++
        }
        rowStart++
        for (let i = rowStart; i <= rowEnd; i++) {
            ans[i][colEnd] = k++
        }
        colEnd--
        if (rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                ans[rowEnd][i] = k++
            }
            rowEnd--
        }
        if (colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                ans[i][colStart] = k++
            }
            colStart++
        }
    }
    return ans
};