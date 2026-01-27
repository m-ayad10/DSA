/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let small=n
    while(n>0)
    {
        if(small%n==0 && small%2==0)
        {
            return small
        }
        small+=n
    }
};