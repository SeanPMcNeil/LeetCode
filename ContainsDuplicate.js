/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    for (var i = 0; i < nums.length-1; i++){
        for (var j = i + 1; j < nums.length; j++){
            if (nums[i] == nums[j]){
                return true;
            }
        }
    }
    return false;
};

// Hash Map Solution
var containsDuplicate = function(nums) {
    
    var dict = {};
    
    for(let num of nums) {
        if(num in dict) {
            dict[num]++;
            return true;
        }
        
        else dict[num] = 1;
    }
    
    return false;
};