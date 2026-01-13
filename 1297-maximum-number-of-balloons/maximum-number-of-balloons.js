/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let freq=new Map([['b',0],['a',0],['l',0],['n',0],['o',0]])
    for(let i=0;i<text.length;i++)
    {
        if(!freq.has(text[i])) continue
        let count=(freq.get(text[i])||0)+1
        freq.set(text[i],count)
    }
    let curr=null;
    for(let [k,v] of freq)
    {
        if((k=='l'||k=='o')&&(Math.floor(v/2)<curr||curr==null))
        {
            curr=(Math.floor(v/2))
        }
        else if(v<curr||curr==null)
        {
            curr=v
        }
    }
    return curr
};