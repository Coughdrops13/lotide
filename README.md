# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @coughdrops13/lotide`

**Require it:**

`const _ = require('@coughdrops13/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element in an array
* `tail(array)`: returns all but the first element of an array
* `middle(array)`: returns with middle 1 or two elements of an array depending on array length being odd or even respectively
* `min(array)`: returns the smallest value of an array
* `assertArraysEqual(array1, array2)`: returns true if two input arrays are idetical and false if not
* `assertEqual(actual, expected)`: returns true if actual is equal to expected and false if not
* `assertObjectsEqual(object1, object2)`: returns true if two input objects are identical and false if not
* `countLetters(string)`: returns an object whose keys are characters from a string and whose values are the number of instances of that character in the input string
* `countOnly(array, itemsToCount)`: returns an object whose keys are the elements of an itemsToCount array and whose values are the number of instances that key occurs in the input array
* `eqArrays(array1, array2)`: returns true if two input arrays are identical and false if not
* `eqObjects(object1, object2)`: returns true if two input objects are identical and false if not
* `findKey(object, callback)`: returns true input function value exists with key in the object
* `findKeyByValue(object, value)`: return key name in input object with given input value
* `flatten(arrayOfArrays)`: returns one array conataining no other arrays and all values of input array
* `letterPositions(string)`: returns an object of arrays whose keys are characters in the input string and whose values are the indeces at which those characters occer
* `map(array, callback)`: manual implementation of the .map() function
* `takeUntil(array, callback)`: returns an array with elements from original array up until an element inserted into callback function returns true
* `without(array, itemsToRemove)`: returns array with all items of the input array aside from those specified by itemsToRemove array