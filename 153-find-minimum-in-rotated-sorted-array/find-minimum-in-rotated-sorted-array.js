/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left=0
    let right=nums.length-1
    while(left<=right)
    {
        let mid=Math.floor((left+right+1)/2)//2 4
        if(nums[mid-1]>nums[mid])
        {
            return nums[mid]
        }
        else if(nums[mid]>nums[right])
        {
            left=mid+1
        }else{
            right=mid-1
        }
    }
    return nums[0]
};