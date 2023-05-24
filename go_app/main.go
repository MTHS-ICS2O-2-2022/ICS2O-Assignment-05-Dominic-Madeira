// Created by: Dominic M.
// Created on: April 2023
//
// This program finds the amount of integers between two numbers.
package main

import (
	"fmt"
)

func main() {

	var numberA int
	var numberB int
	var counter int
	var answer int

	// input
	fmt.Println("This program finds the amount of integers between two numbers.")
	fmt.Println()
	fmt.Print("Enter an integer: ")
	fmt.Println()
	fmt.Scanln(&numberA)
	fmt.Println()
	fmt.Print("Enter another integer: ")
	fmt.Println()
	fmt.Scanln(&numberB)
	fmt.Println()

	// process
	if numberA < numberB {
		counter = numberA
		for counter < numberB {
			answer++
			counter++
		}
	} else {
		counter = numberB
		for counter < numberA {
			answer++
			counter++
		}
	}

	if numberA > numberB {
		if answer == 1 {
			fmt.Print("There is ", answer, " different integer between ", numberA, " and ", numberB, ".")
		} else {
			fmt.Print("There are ", answer, " different integers between ", numberA, " and ", numberB, ".")
		}
	} else {
		if answer == 1 {
			fmt.Print("There is ", answer, " different integer between ", numberB, " and ", numberA, ".")
		} else {
			fmt.Print("There are ", answer, " different integers between ", numberB, " and ", numberA, ".")
		}
	}
	fmt.Println()
	fmt.Print("\nDone.")
	fmt.Println()
}
