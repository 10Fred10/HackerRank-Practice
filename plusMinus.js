/* Given an array of integers (arr) and its length (l), calculate the fractions of its elements that are positive,
* negative, and are zeros. Print the decimal value of each fraction on a new line.
* Time complexity here is O(n).
*/
function plusMinus(arr, l, p = 0, n = 0, z = 0) {
    for (let i = 0; i < l; i++) {
        if (arr[i] > 0) {
            p++;
        } else if (arr[i] < 0)
            n++;
        else z++
    }
    [p,n,z].forEach(el => console.log((el/l).toFixed(6)))
}
