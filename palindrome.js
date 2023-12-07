// By a For Loop
function palindrome(str) {
    let reversed = " ";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return `${str}${reversed}`;
}

const word = "Moaz";
console.log(palindrome(word));

// By converting the String to an Array

function palindrome2(str2) {
    let arr = str2.split("").reverse().join("");

    return `${str2} ${arr}`;
}

const word2 = "Adam"
console.log(palindrome2(word2));
