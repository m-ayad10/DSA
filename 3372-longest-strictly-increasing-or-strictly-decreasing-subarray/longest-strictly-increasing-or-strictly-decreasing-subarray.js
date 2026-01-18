/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let inc=1;
    let dec=1;
    let max=1;
    for(let i=1;i<nums.length;i++)
    {
        if(nums[i]>nums[i-1])
        {
            inc++
        }
        else{
            inc=1
        }
        if(nums[i]<nums[i-1])
        {
            dec++
        }
        else{
            dec=1
        }
        max=Math.max(max,inc,dec)
    }
    return max
};