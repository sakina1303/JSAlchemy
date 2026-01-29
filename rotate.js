function rotateArray(arr, k) {
  const n = arr.length;
  k = k % n; // handle cases where k > n
  return arr.slice(-k).concat(arr.slice(0, n - k));
}

