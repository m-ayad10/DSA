/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0
    for(let i=0;i<sentences.length;i++)
    {
        let len=sentences[i].split(' ').length
        max=Math.max(len,max)
    }
    return max
};