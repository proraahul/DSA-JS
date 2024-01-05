function subarraySum(arr, N, S) {
    let left = 0;
    let right = 0;
    let currentSum = 0;
  
    while (right <= N) {
      if (currentSum === S) {
        return [left + 1, right];
      } else if (currentSum < S) {
        currentSum += arr[right];
        right++;
      } else {
        currentSum -= arr[left];
        left++;
      }
    }
  
    return [-1];
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 7, 5];
  const N1 = 5;
  const S1 = 12;
  console.log(subarraySum(arr1, N1, S1)); // Output: [2, 4]
  
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const N2 = 10;
  const S2 = 15;
  console.log(subarraySum(arr2, N2, S2)); // Output: [1, 5]
  