/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function findIndex(arr, left, right, target){
    if (left>right) return -1
    let mid=Math.floor((left+right)/2)
    if(arr[mid]==target) return mid
    if(arr[left]<=arr[mid])
    {
        if(arr[left]<=target && arr[mid]>target) return findIndex(arr,left,mid-1,target)
        else return findIndex(arr,mid+1,right,target)
    }
    else
    {
        if(arr[mid]<target && arr[right]>=target) return findIndex(arr,mid+1,right,target)
        else return findIndex(arr,left,mid-1,target)
    }
}

var search = function(nums, target) {
    let left=0;
    let right=nums.length-1;
    return findIndex(nums,left,right,target)
};