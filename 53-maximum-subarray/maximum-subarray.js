/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max_pos=nums[0]
    let max=nums[0]
    for(let i=1;i<nums.length;i++)
    {
        max_pos=Math.max(nums[i],max_pos+nums[i])
        max=Math.max(max, max_pos)
    }
    return max
};