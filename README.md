# JavaScript Null Handling in Function

This repository demonstrates a common error when dealing with null values in JavaScript functions and presents a solution for improved error handling.

## Bug

The original `foo` function correctly returns `null` when any input is `null`, but doesn't provide any additional information. 

## Solution

The improved solution uses the nullish coalescing operator (`??`) to provide default values when input parameters are `null` or `undefined` and returns an error message if any other type of unexpected value is passed.