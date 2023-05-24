// Copyright (c) 2023 Dominic M. All rights reserved
//
// Created by: Dominic M.
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Assignment-05-Dominic-Madeira/sw.js", {
    scope: "/ICS2O-Assignment-05-Dominic-Madeira/",
  })
}

function myButtonClicked() {
  const numberA = parseInt(document.getElementById('number-a').value)
  const numberB = parseInt(document.getElementById('number-b').value)
  let output = 0

 // process
  if (numberA > numberB) {
    for (let counter = numberB; counter < numberA; counter++) {
      output++
    }
  } else {
    for (let counter = numberA; counter < numberB; counter++) {
      output++
    }
  }

  if (numberA > numberB) {
    if (output == 1) {
      document.getElementById('answer').innerHTML = "There is " + output + " different integer between " + numberA + " and " + numberB + "."
    } else {
      document.getElementById('answer').innerHTML = "There are " + output + " different integers between " + numberA + " and " + numberB + "."
    }
  } else {
    if (output == 1) {
      document.getElementById('answer').innerHTML = "There is " + output + " different integer between " + numberB + " and " + numberA + "."
    } else {
      document.getElementById('answer').innerHTML = "There are " + output + " different integers between " + numberB + " and " + numberA + "."
    }
  }
}
