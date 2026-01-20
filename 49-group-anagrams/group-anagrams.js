/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let maps=new Map()
    for(let i=0;i<strs.length;i++)
    {
        let sorted=strs[i].split('').sort().join('')
        if(!maps.has(sorted))
        {
            maps.set(sorted,[strs[i]])
        }
        else
        {
            let arr=maps.get(sorted)
            maps.set(sorted,[...arr,strs[i]])
        }
    }
    let result=[]
    for(let [k,v] of maps)
    {
        result.push(v)
    }
    return result
};