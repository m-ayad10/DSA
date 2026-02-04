/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m=matrix.length
    let n=matrix[0].length
    let rowSet=new Set()
    let colSet=new Set()
    for(let i=0;i<m;i++)
    {
        for(let j =0;j<n;j++)
        {
            if(matrix[i][j]==0)
            {
                if(!rowSet.has(i)) rowSet.add(i)
                if(!colSet.has(j)) colSet.add(j)
            }
        }
    }
    for(let i of rowSet)
    {
        for(let j=0;j<n;j++)
        {
            matrix[i][j]=0
        }
    }
    for(let i of colSet)
    {
        for(let j=0;j<m;j++)
        {
            matrix[j][i]=0
        }
    }
    return matrix
};