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
    for(let i=0;i<nums.length;i++)
        {
            if(nums[i]==target) return i;
        }
        return -1;
};