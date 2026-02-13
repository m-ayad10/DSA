/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] <= target) {
            let left = 0
            let right = n - 1
            while (left <= right) {
                let mid = Math.floor((left + right) / 2)
                if (matrix[i][mid] == target) {
                    return true
                }
                else if (matrix[i][mid] > target) {
                    right = mid-1
                }
                else {
                    left = mid + 1
                }
            }
        }
        else return false
    }
    return false
};