/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    var openArr = [];

    for (var char of s){
        if (char == "(" || char == "[" || char == "{"){
            openArr.push(char);
        } else if (char == ")"){
            if (openArr[openArr.length - 1] == "("){
                openArr.pop();
            } else {
                return false;
            }
        } else if (char == "]"){
            if (openArr[openArr.length - 1] == "["){
                openArr.pop();
            } else {
                return false;
            }
        } else if (char == "}"){
            if (openArr[openArr.length - 1] == "{"){
                openArr.pop();
            } else {
                return false;
            }
        }
    }
    if (openArr.length > 0){
        return false;
    } else {
        return true;
    }
}