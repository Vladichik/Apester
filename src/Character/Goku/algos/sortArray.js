// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

export const sortArray = function sortArray(array) {
  const temp = []
  array
      .filter((num, i) => num % 2 && temp.push(i))
      .sort((a, b) => a - b)
      .map((num, i) => array[temp[i]] = num);
  return array;
};

export default sortArray;
