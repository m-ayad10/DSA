/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const maps=new Map()
    for(const i of nums)
    {
        let count=(maps.get(i)||0)+1
        maps.set(i,count)
    }
    for(const [k,v] of maps)
    {
        if(v==1) return k
    }
};