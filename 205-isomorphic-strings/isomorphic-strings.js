/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let maps=new Map()
    let maps2=new Map()
    for(let i=0;i<s.length;i++)
    {
        if(!maps2.get(t[i]) )
        {
            maps2.set(t[i],s[i])
        }
        else if( maps2.get(t[i])!==s[i] ) return false
        if(!maps.get(s[i]) )
        {
            maps.set(s[i],t[i])
        }
        else if(maps.get(s[i])!==t[i] ) return false
    }
    return true
};