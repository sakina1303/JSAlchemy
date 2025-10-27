function countCharFrequency(str) {
  const freq = {};
  for (const ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  return freq;
}

console.log(countCharFrequency("hello"));

module.exports = countCharFrequency;
