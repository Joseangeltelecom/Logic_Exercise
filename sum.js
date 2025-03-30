// Description: Write a function that takes an array of numbers and returns the sum of the numbers. Use recursion.
// Example: sum([3, 1, 4, 1, 5]) should return 14.
const sum = (arr) => { 
    const helper = (i, sum) => {
        if (i == arr.length) {
          return sum;
        }
      
      return helper(i + 1, sum + arr[i]); 
    }

    return helper(0, 0);
}

const result = sum([3, 1, 4, 1, 5]);
console.log(result); // 14
