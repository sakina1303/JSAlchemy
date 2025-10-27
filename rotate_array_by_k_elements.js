
// Function to reverse a portion of the array
function reverse(arr, start, end) {
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Function to rotate k elements to the left
function rotateElementsToLeft(arr, n, k) {
  // Reverse first k elements
  reverse(arr, 0, k - 1);
  // Reverse last n - k elements
  reverse(arr, k, n - 1);
  // Reverse the whole array
  reverse(arr, 0, n - 1);
}

// Main
const arr = [1, 2, 3, 4, 5, 6, 7];
const n = arr.length;
const k = 2;

rotateElementsToLeft(arr, n, k);

console.log("After rotating the k elements to left:", arr.join(" "));

---

  // Function to reverse a portion of the array
function reverse(arr, start, end) {
  while (start <= end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

// Function to rotate k elements to the right
function rotateElementsToRight(arr, n, k) {
  k = k % n; // Handle cases where k > n
  // Reverse first n - k elements
  reverse(arr, 0, n - k - 1);
  // Reverse last k elements
  reverse(arr, n - k, n - 1);
  // Reverse the whole array
  reverse(arr, 0, n - 1);
}

// Main
const arr = [1, 2, 3, 4, 5, 6, 7];
const n = arr.length;
const k = 2;

rotateElementsToRight(arr, n, k);

console.log("After rotating the k elements to right:", arr.join(" "));

