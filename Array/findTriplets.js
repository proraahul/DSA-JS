function findTriplets(arr, n)
    {
        //your code here arr.sort((a, b) => a - b);

    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;
        let target = -arr[i];

        while (left < right) {
            let sum = arr[left] + arr[right];

            if (sum === target) {
                // Triplet found
                return 1;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    // No triplet found
    return 0;
    }

    let arr = [0, -1, 2, -3, 1];
    let n = arr.length;
    let result = findTriplets(arr, n);
    console.log(result);
    // Note: Return 1, if there is at least one triplet following the condition else return 0.
