/*
Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
Examples
Input: "aa_"
Output: false
Input: "u__hello_world123"
Output: true
*/

function CodelandUsernameValidation(str = "", len = str.length) { 
    if (len < 4 || len > 25) return false; //len of str must be between 4 and 25
    if (!str[0].match(/[a-z]/i)) return false; //first element must be letter
    if (!str.match(/^[0-9a-zA-Z_]+$/)) return false; //contain only letters, numbers and underscore
    if (str[len -1] === '_') return false; //last element '_'
    return true;
  }
     
  console.log(CodelandUsernameValidation(readline()));


// ANOTHER OPTION:

isLowerCase = (element) => element >= 'a' && element <= 'z'; 
isUpperCase = (element) => element >= 'A' && element <= 'Z'; 
isNumber = (element) => element >= '0' && element <= '9'; 

function CodelandUsernameValidation(str) { 
  var len = str.length;
  if(len < 4 || len > 25) return false;
  else if(!isLowerCase(str[0]) && !isUpperCase(str[0])) return false;
  else if(str[len-1] === "_") return false;
  for(let i=0; i<len; i++){
    if(!isLowerCase(str[i]) && !isUpperCase(str[i]) && !isNumber(str[i]) && str[i] !== "_") return false;
  }
  return true; 
}
   
console.log(CodelandUsernameValidation(readline()));
