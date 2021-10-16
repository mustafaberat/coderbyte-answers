package samples

import (
	"fmt"
	"unicode"
)

/*
Codeland Username Validation
Have the function CodelandUsernameValidation(str) take the str parameter being passed and
determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.


Examples:
Input: "aa_"
Output: false

Input: "u__hello_world123"
Output: true
*/

func isFirstCharLetter(username string) bool {
	return unicode.IsLetter(rune(username[0]))
}

func isLastCharUnderscore(username string) bool {
	return username[len(username)-1:] == "_"
}

func checkLen(username string) bool {
	return len(username) > 4 && len(username) < 25
}

func checkPattern(username string) bool {
	for _, charRune := range username {
		if !unicode.IsLetter(charRune) {
			if !unicode.IsNumber(charRune) {
				if string(charRune) != "_" {
					return false
				}
			}
		}
	}
	return true
}

func isValidName(username string) string {
	if checkPattern(username) && isFirstCharLetter(username) && !isLastCharUnderscore(username) && checkLen(username) {
		return "true"
	}
	return "false"
}

func Lesson6() {
	inputs := map[string]string{
		"asdasd|?_Asdsad21": "false",
		"aa_":               "false",
		"u__hello_world123": "true",
		"1__hello_world123": "false",
		"a_23412341234213124213124123213232133213131221": "false",
		"adsdasdasd_":     "false",
		"asdasd_Asdsad21": "true",
	}
	for key, result := range inputs {
		res := isValidName(key)
		if res != result {
			fmt.Printf("Value: %v Actual: %v, Expected: %v\n", key, res, result)
		}
	}
}
