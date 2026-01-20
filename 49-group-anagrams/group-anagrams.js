/**
 * @param {string[]} strs
 * @return {string[][]}
 */


function getFreqStr(strs) {
    let freq = new Array(26).fill(0)
    for(let ch of strs )
    {
        freq[ch.charCodeAt(0)-97]++
    }
    let freqStr = ''
    for(let i in freq)
    {
        if(freq[i]>0)
        {
            freqStr+= (String.fromCharCode(i+97)+freq[i])
        }
    }
    return freqStr
}
var groupAnagrams = function (strs) {
    let maps = new Map()
    for (let i = 0; i < strs.length; i++) {
        let freqStr =  getFreqStr(strs[i])
        if (!maps.has(freqStr)) {
            maps.set(freqStr, [strs[i]])
        }
        else {
            let arr = maps.get(freqStr)
            maps.set(freqStr, [...arr, strs[i]])
        }
    }
    let result = []
    for (let [k, v] of maps) {
        result.push(v)
    }
    return result
};