/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/gi, '');
    let j = s.length-1;
    for (var i = 0; i < (s.length-1)/2; i++){
        if (s[i] == s[j]){
            j -= 1;
            continue;
        } else if (s[i] != s[j]) {
            return false;
        }
    }
    return true;
};