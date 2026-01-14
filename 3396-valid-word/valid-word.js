/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    if(word.length<3) return false
    let vowels=false
    let constants=false
    for(let i=0;i<word.length;i++)
    {
        if(['a', 'e', 'i', 'o', 'u'].includes(word[i].toLowerCase()))
        {
            vowels=true
        }
        else if((word[i]-'0'<=9)||(word[i]-'0'>=0))
        {
        }
        else if((word.charCodeAt(i)<=90)&&(word.charCodeAt(i)>=65))
        {
            constants=true
        }
        else if((word.charCodeAt(i)<=122)&&(word.charCodeAt(i)>=97))
        {
            constants=true
        }
        else
        {
            return false
        }
    }
    return vowels  && constants
};