const reverseString = function(str) {
    let str2='';
    for (let i=0; i<str.length;i++){
        str2+=str[str.length-1-i];
    }
    return str2;
};

// Do not edit below this line
module.exports = reverseString;
