/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    var s1 = s.toLowerCase();
    var s2 = t.toLowerCase();

    var freqTable1 = {};
    var freqTable2 = {};

    for (var char in s1){
        if (s1[char] != " "){
            if (!freqTable1[s1[char]]){
                freqTable1[s1[char]] = 1;
            } else {
                freqTable1[s1[char]]++;
            }
        }
    }

    for (var char in s2){
        if (s2[char] != " "){
            if (!freqTable2[s2[char]]){
                freqTable2[s2[char]] = 1;
            } else {
                freqTable2[s2[char]]++;
            }
        }
    }

    let freq1length = Object.keys(freqTable1).length;
    let freq2length = Object.keys(freqTable2).length;

    if (freq1length != freq2length){
        return false;
    }

    for (var i in freqTable1){
        if (freqTable1[i] != freqTable2[i]){
            return false;
        }
    }

    return true;
};