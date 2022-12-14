/**
 *  ```javascript
 *  isPalindrome('Mr. Owl ate my metal worm')
 *  // true
 *  isPalindrome('Eva, can I see bees in a cave?')
 *  // true
 *  ```
 */
function isPalindrome(text) {
    let lettersFromText = text.replace(/[\W ]/g, "").toLowerCase();
    return lettersFromText === lettersFromText.split("").reverse().join("") ? true : false;
}
console.log("Is Palindrome: " + isPalindrome('Eva, can I see bees in a cave?'));

/**
 *  ```javascript
 *  isIsogram('uncopyrightables')
 *  true
 *  ```
 */
function isIsogram(text) {
    let lettersFromText = text.replace(/[\W ]/g, "").toLowerCase().split("");
    return lettersFromText.length === lettersFromText.filter((x, index) => lettersFromText.indexOf(x) === lettersFromText.lastIndexOf(x)).length ? true : false;
}
console.log("Is Isogram: " + isIsogram("uncopyrightables"))

/**
 *  ```javascript
 *  isPangram('The quick brown fox jumps over the lazy dog')
 *  true
 *  ```
 */
function isPangram(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lettersFromText = text.replace(/[\W ]/g, "").toLowerCase().split("");
    return alphabet.split("").every(x => lettersFromText.indexOf(x) > -1)
}
console.log("Is Pangram: " + isPangram('The quick brown fox jumps over the lazy dog'));

/**
 *  ```javascript
 *  isAnagram('Justin Timberlake', "I'm a jerk but listen")
 *  true
 *  ```
 */
function isAnagram(text1, text2) {
    return text1.replace(/[\W ]/g, "").toLowerCase().split("").sort().join("") === text2.replace(/[\W ]/g, "").toLowerCase().split("").sort().join("");
}
console.log("Is Anagram: " + isAnagram('Justin Timberlake', "I'm a jerk but listen"))

/**
 *  ```javascript
 *  isBlanagram('Justin Timberlake', "I'm a berk but listen")
 *  true
 *  ```
 */
function isBlanagram(text1, text2) {
    let lettersFromText1 = text1.replace(/[\W ]/g, "").toLowerCase().split("").sort();
    let lettersFromText2 = text2.replace(/[\W ]/g, "").toLowerCase().split("").sort();
    if (lettersFromText1.length !== lettersFromText2.length) {
        return false;
    }
    for (let i = lettersFromText1.length - 1; i >= 0; i--) {
        if (lettersFromText2.indexOf(lettersFromText1[i]) > -1) {
            lettersFromText2.splice(lettersFromText2.indexOf(lettersFromText1[i]), 1);
            lettersFromText1.splice(i, 1);
        }
    }
    return lettersFromText1.length === 1 && lettersFromText2.length === 1 ? true : false;
}
console.log("Is Blanagram: " + isBlanagram('Justin Timberlake', "I'm a berk but listen"))