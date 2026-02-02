/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let rev=''
    let vowels='aeiou'
    for(let i=s.length-1;i>=0;i--)
    {
        if(vowels.includes(s[i].toLowerCase()))
        {
            rev+=s[i]
        }
    }
    let ans=''
    let k=0
    for(let i=0;i<s.length;i++)
    {
        if(vowels.includes(s[i].toLowerCase()))
        {
            ans+=rev[k++]
        }
        else ans+=s[i] 
    }
    return ans
};