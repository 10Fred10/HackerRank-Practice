/* Problem description : https://www.hackerrank.com/challenges/new-year-chaos/problem
* It must print an integer representing the minimum number of bribes necessary,
* or Too chaotic if the line configuration is not possible.
* Time complexity : O(n²).
*/
function minimumBribes(q, c = 0, l = q.length) {
    let i = l - 1;
    while (i >= 0) {
        if (q[i] - i > 3) {
            console.log("Too chaotic")
            return; 
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j ++ ) 
            if(q[j] > q[i]) c ++;
        i --
    };
    console.log(c) ;
}
