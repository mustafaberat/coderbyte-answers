/*
Longest Word
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/

function LongestWord(sen) {
    let longestWord = "", senArr = sen.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
    for (let elementStr of senArr) {
        if (elementStr.length > longestWord.length) longestWord = elementStr;
    }
    return longestWord;
}

console.log(LongestWord(readline()));