package algorithms

import (
	"fmt"
	"strings"
)

/*
Find IntersectionHave the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements:
the first element will represent a list of comma-separated numbers sorted in ascending order,
the second element will represent a second list of comma-separated numbers (also sorted).
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.
If there is no intersection, return the string false.
Examples
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13

Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/

func FindIntersection(strArr []string) string {
	first := strings.Split(strArr[0], ",")
	second := strings.Split(strArr[1], ",")
	result := ""

	for _, num := range first {
		for _, num2 := range second {
			if num == num2 {
				result += num + ","
				break
			}
		}
	}

	if result != "" {
		result = strings.TrimSuffix(result, ",")     //Delete last ,
		result = strings.ReplaceAll(result, " ", "") // Delete spaces
		return result
	}

	return "false"
}

func TestFindIntersection() {
	if FindIntersection([]string{"1, 3, 4, 7, 13", "1, 2, 4, 13, 15"}) != "1,4,13" ||
		FindIntersection([]string{"1, 3, 9, 10, 17, 18", "1, 4, 9, 10"}) != "1,9,10" ||
		FindIntersection([]string{"1, 3, 4, 7, 13", "2, 14, 15"}) != "false" {
		panic("Err")
	} else {
		fmt.Println("Success")
	}
}
