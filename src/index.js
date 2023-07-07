module.exports = function reverse(n) {
    let result = '';
    let s = String(Math.abs(n));
    for (let i = s.length; i > 0; i--) {
        result += s[i - 1];
        console.log(result);
    }
    return +result;
}
