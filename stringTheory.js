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
console.log(isPalindrome('Eva, can I see bees in a cave?'));

/**
 *  ```javascript
 *  isIsogram('uncopyrightables')
 *  true
 *  ```
 */
function isIsogram(text) {

}

/**
 *  ```javascript
 *  isPangram('The quick brown fox jumps over the lazy dog')
 *  true
 *  ```
 */
function isPangram(text) {

}

/**
 *  ```javascript
 *  isAnagram('Justin Timberlake', "I'm a jerk but listen")
 *  true
 *  ```
 */
function isAnagram(text1, text2) {

}

/**
 *  ```javascript
 *  isBlanagram('Justin Timberlake', "I'm a berk but listen")
 *  true
 *  ```
 */
function isBlanagram(text1, text2) {

}