/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let max=0;
    let sum=new Map([['0',0],['1',0]])
    let min=0
    let prev=s[0];
    for(let i=0;i<s.length;i++)
    {
        if(prev=='1' && s[i]==='0')
        {
            prev='0'
            min=Math.min(sum.get('0'),sum.get('1'))
            max=Math.max(max,(min+min))
            sum.set('0',1)
            sum.set('1',0)
        }
        else if(s[i]=='1'){
            prev='1'
            sum.set('1',sum.get('1')+1)
        }
        else{
            prev=s[i]
            sum.set('0',sum.get('0')+1)
        }
    }
    min=Math.min(sum.get('0'),sum.get('1'))
    max=Math.max(max,(min+min))
    return max
};