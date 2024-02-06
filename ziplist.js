const letterArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];
// const _ = require('underscore');

function zipList(firstArray, secondArray) {
  if (firstArray.length !== secondArray.length) { return 'The lists are not the same length'; }
  const sumArray = [];
  for (let i = 0; i < firstArray.length; i++) {
    sumArray.push(firstArray[i]);
    sumArray.push(secondArray[i]);
  }
  return sumArray;
}
console.log(zipList(letterArray, numberArray));

function zipListTheSimpleWay(firstArray, secondArray) {
  return _.flatten(_.zip(firstArray, secondArray));
}

console.log(zipListTheSimpleWay(letterArray, numberArray));
