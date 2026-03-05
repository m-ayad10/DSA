/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i=a.length-1
    let j=b.length-1
    let carry=0
    let ans=''
    while(i>=0 || j>=0 ||carry)
    {
        let sum=carry
        if(i>=0)
        {
            sum+= Number(a[i])
            i--
        }
        if(j>=0)
        {
            sum+= Number(b[j])
            j--
        }
        carry=sum>>1
        ans=(sum%2)+ans
    } 
    return ans
};