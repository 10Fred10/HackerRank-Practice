/** Given a square matrix (arr), calculate the absolute difference
* between the sums of its diagonals.
* Time complexity here is O(n).
*/
function solve(arr, sum = 0, l = arr.length) {
    for (let i = 0; i < l; i++) {
        sum += arr[i][i] - arr[i][l - i - 1];
    }
    return Math.abs(sum);
}
