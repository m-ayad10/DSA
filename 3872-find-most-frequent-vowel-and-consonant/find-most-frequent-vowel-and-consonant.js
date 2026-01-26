/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let constant={}
    let vowels={}
    let maxVowels=0
    let maxconstant=0;
    for(let i=0;i<s.length;i++)
    {
        if(['a', 'e', 'i', 'o','u'].includes(s[i]))
        {
            let count=(vowels[s[i]]||0)+1
            vowels[s[i]]=count
            maxVowels=Math.max(maxVowels,count)
        }
        else
        {
            let count=(constant[s[i]]||0)+1
            constant[s[i]]=count
            maxconstant=Math.max(maxconstant,count)
        }
    }
    return maxconstant+maxVowels
};