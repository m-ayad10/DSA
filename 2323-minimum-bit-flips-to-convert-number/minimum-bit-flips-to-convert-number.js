/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */

var minBitFlips = function (start, goal) {
    let first = ''
    let second = ''
    while (start > 0) {
        if ((start & 1) == 1) {
            first = 1 + first
        }
        else {
            first = 0 + first
        }
        start = start >> 1
    }
    while (goal > 0) {
        if ((goal & 1) == 1) {
            second = 1 + second
        }
        else {
            second = 0 + second
        }
        goal = goal >> 1
    }
    let i = first.length - 1
    let j = second.length - 1
    let count = 0
    while (i >= 0 && j >= 0) {
        if (first[i--] != second[j--]) {
            count++
        }
    }
    if (i != -1) {
        while (i >= 0) {
            if (first[i--] == 1) count++
        }
    }
    else {
        while (j >= 0) {
            if (second[j--] == 1) count++
        }
    }
    return count
};