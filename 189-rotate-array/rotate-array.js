/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k=k % nums.length
    if(nums.length<2) return nums
    reverse(nums,0,nums.length-1)
    reverse(nums,0,k-1)
    reverse(nums,k,nums.length-1)
    return nums
};

function reverse(arr, start,end){
    while(start<=end)
    {
        let temp=arr[end]
        arr[end--]=arr[start]
        arr[start++]=temp
    }
}