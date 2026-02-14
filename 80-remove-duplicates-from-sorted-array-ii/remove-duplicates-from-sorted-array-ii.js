/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let ind= 2
    for(let i=2;i<nums.length;i++)
    {
        if(nums[i]!==nums[ind-2])
        {
            nums[ind++]=nums[i]
        }
    }
    return ind
};