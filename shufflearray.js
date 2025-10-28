// function to shuffle array such that all permutations have equal probability
// impelmentation of the modern version of fisher-yates implementation working in O(n) time complexity
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#JavaScript_implementation

function shufflearray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// example usage:-
// const array1 = [1, 2, 3, 4, 5];
// console.log(shufflearray(array1));

// const array2 = [1, 2, 3, 4];
// const experiments=1000000; //as experiments increases the probability of all permutation approach same value
// let freq= new Map();
// for (let i = 0; i < experiments; i++) {
//   // Always shuffle a *copy* so original array2 isn’t modified
//   const shuffled = shufflearray([...array2]);
  
//   // Use string as key to compare arrays
//   const key = JSON.stringify(shuffled);
  
//   // Update frequency
//   freq.set(key, (freq.get(key) || 0) + 1);
// }

// // Iterate over the Map
// for (const [arr, count] of freq) {
//   console.log('Probability of permutation', arr, 'is:', count/experiments);
// }