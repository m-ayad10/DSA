/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let first = m - 1
    let sec = n - 1
    let k = m + n - 1
    while (first >= 0 && sec >= 0) {
        if (nums1[first] > nums2[sec]) {
            nums1[k--] = nums1[first--]
        }
        else {
            nums1[k--] = nums2[sec--]
        }
    }
    while (sec >= 0) {
        nums1[k--] = nums2[sec--]
    }
    while (first >= 0) {
        nums1[k--] = nums1[first--]
    }
    return nums1
};