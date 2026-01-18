/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count=0;
    let left=0;
    let right=1;
    while(left<right&& left<nums.length-1)
    {
        if(Math.abs(nums[left]-nums[right])==k)
        {
            count++
        }
        right++
        if(right==nums.length)
        {
            left++;
            right=left+1
        }
    }
    return count
};