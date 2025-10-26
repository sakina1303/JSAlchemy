function mostFrequentElement(arr) {
  const frequencyMap = {};
  let maxCount = 0;
  let mostFrequent;

  for (const item of arr) {
    frequencyMap[item] = (frequencyMap[item] || 0) + 1;

    if (frequencyMap[item] > maxCount) {
      maxCount = frequencyMap[item];
      mostFrequent = item;
    }
  }

  return { element: mostFrequent, frequency: maxCount };
}

// Example usage:
const array = [3, 7, 3, 2, 9, 3, 7, 2, 7, 7];
const result = mostFrequentElement(array);
console.log(`Most frequent element: ${result.element} (appears ${result.frequency} times)`);