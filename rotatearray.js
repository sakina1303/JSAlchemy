function rotatearray(arr, k){
  // rotate array clockwise(right) k times in O(n) time complexity and O(n) space complexity
  // make k as negative for opposite rotation
  const n=arr.length;
  const result=Array(n);
  k=k%n;// as each n rotation returns original array
  for(let i=0; i<n; i++){
    let ind=(i-k+n)%n; // making sure we end up a valid index
    result[i]=arr[ind];
  }
  return result;
}

// // example uses / tests:-
// const array = [1,2,3,4,5,6];
// console.log(rotatearray(array, 1));
// console.log(rotatearray(array, 0));
// console.log(rotatearray(array, -1));
// console.log(rotatearray(array, 100));