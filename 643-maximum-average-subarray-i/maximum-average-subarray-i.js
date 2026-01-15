/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max=0;
    let sum=0
    for(let i=0;i<k;i++)
    {
        sum+=nums[i]
    }
    max=(sum/k)
    for(let i=1;i<=nums.length-k;i++)
    {
        sum -= nums[i-1]
        sum+=nums[i+k-1]
        if((sum/k)>max)
        {
            max=(sum/k)
        }
    }
    return Number((max).toFixed(5))
};