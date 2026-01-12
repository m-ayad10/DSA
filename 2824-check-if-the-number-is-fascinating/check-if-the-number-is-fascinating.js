/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let tot=n.toString()
    tot+=(n*2)
    tot+=(n*3)
    let set=new Set()
    for(let i=0;i<tot.length;i++)
    {
        if(tot[i]=='0' || set.has(tot[i])) return false
        set.add(tot[i])
    }
    return set.size==9
};