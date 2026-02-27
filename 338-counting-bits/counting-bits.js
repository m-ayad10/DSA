/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let arr=[]
    for(let i=0;i<=n;i++)
    {
        let count=0
        let num=i
        while(num>0)
        {
            if(num&1) count++
            num=num>>1
        }
        arr.push(count)
    }
    return arr
};