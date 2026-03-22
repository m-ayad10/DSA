/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */

var minBitFlips = function (start, goal) {
    let count=0;
    start=start ^ goal
    while(start>0)
    {
        if((start&1)==1) count++
        start=start>>1
    }
    return count
};

