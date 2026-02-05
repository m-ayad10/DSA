/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let maps=new Map()
    for(let i=0;i<nums.length;i++)
    {
        let count=(maps.get(nums[i])||0)+1
        maps.set(nums[i],count)
    }
    for(let [k,v] of maps)
    {
        if(v==1) return k
    }
};