/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let maj=Math.floor(nums.length/3)
    let maps=new Map()
    let arr=[]
    for(let i=0;i<nums.length;i++)
    {
        let count=(maps.get(nums[i])||0)+1
        maps.set(nums[i],count)
        if(count==maj+1) arr.push(nums[i])
    }
    return arr
};