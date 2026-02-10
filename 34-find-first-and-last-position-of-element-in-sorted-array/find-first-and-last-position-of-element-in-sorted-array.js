/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left=0;
    let right=nums.length-1
    while(left<=right)
    {
        let mid=Math.floor(((left+right)+1)/2)
        if(nums[mid]==target)
        {
            let first=mid-1
            let last=mid+1
            while(first>=0)
            {
                if(nums[first]!==target)
                {
                    break
                }
                first --
            }
            while(last<nums.length)
            {
                if(nums[last]!==target) 
               { 
                   break
               }
               last++
            }
            return [first+1,last-1]
        }
        if(nums[mid]<target)
        {
            left=mid+1
        }
        else{
            right=mid-1
        }
    }
    return [-1,-1]
};