/*
Have the function QuestionsMarks(str) take the str string parameter, which will contain single digit numbers, letters, and question marks, and check if there are exactly 3 question marks between every pair of two numbers that add up to 10. If so, then your program should return the string true, otherwise it should return the string false. If there aren't any two numbers that add up to 10 in the string, then your program should return false as well.

For example: if str is "arrb6???4xxbl5???eee5" then your program should return true because there are exactly 3 question marks between 6 and 4, and 3 question marks between 5 and 5 at the end of the string.
Examples
Input: "aa6?9"
Output: false
Input: "acc?7??sss?3rr1??????5"
Output: true
*/


getFirst = (arr = []) => {
    return arr[0];
}

getLast = (arr = []) => {
    return arr[arr.length - 1];
}

QuestionsMarks = (str) => {
    var betweenTwoNumbers = str.match(/\d[\w\?]*?\d/g);
    if (!betweenTwoNumbers) return false;

    for (var betweenTwoNumber of betweenTwoNumbers) {
        if (Number(getFirst(betweenTwoNumber)) + Number(getLast(betweenTwoNumber)) === 10) {
            if (betweenTwoNumber.split('').filter(char => char === '?').length === 3) return true;
        }
    }

    return false;
}

// keep this function call here 
QuestionsMarks(readline());








/*
QuestionsMarks = (str) => {
    var nums = str.match(/\d/g);
    if (nums === null) return false;
    nums = nums.map(num => Number(num));
    var results = [];

    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] + nums[i + 1] === 10) results.push([nums[i], nums[i + 1]]);
    }

    if (nums.length === 0) return false;

    results = results.map(i => i.toString());
    str = str.split("");
    for (let i = 0, len = results.length, start = 0, end = 0, check = false; i < len; i++) {
        start = str.indexOf(results[i].charAt(0));
        end = str.indexOf(results[i].charAt(2), start + 1);
        check = str.splice(start, end - start).join("");
        if (check.match(/\?/g).length === 3) return true;
    }
    return false;
}

// keep this function call here
console.log(QuestionsMarks(readline()));

*/