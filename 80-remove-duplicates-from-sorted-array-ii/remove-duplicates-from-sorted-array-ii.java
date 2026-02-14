class Solution {
    public int removeDuplicates(int[] nums) {
        int inx=2;
        for(int i=2;i<nums.length;i++)
        {
            if(nums[i]!=nums[inx-2])
            {
                nums[inx++]=nums[i];
            }
        }
        return inx;
    }
}