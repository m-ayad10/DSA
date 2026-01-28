/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m=matrix.length
    let n=matrix[0].length
    // if(matrix[0][0]<target || matrix[m-1][n-1]>target) return false
    for(let i=0;i<m;i++)
    {
        if(matrix[i][0]<=target && matrix[i][n-1]>=target)
        {
            for(let j=0;j<n;j++)
            {
                if(matrix[i][j]==target) return true
            }
            return false
        }
    }
    return false
};