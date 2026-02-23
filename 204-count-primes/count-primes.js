/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    if (n < 2) return 0
    let arr = new Array(n).fill(1)
    let count=0
    for(let i=2;i<arr.length;i++)
    {
        if(arr[i]==1)
        {
            count++
            for(let j=i*i;j<arr.length;j+=i)
            {
                arr[j]=0
            }
        }
    }
    // let count=0
    // for(let i=2;i<arr.length;i++)
    // {
    //     if(arr[i]==1) count++
    // }
    return count
};