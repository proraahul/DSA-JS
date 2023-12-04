// JavaScript program for the above approach

	// Returns true if arr1[0..n-1] and arr2[0..m-1]
	// contain same elements.
	function areEqual(arr1, arr2){
		let N = arr1.length;
		let M = arr2.length;

		// If lengths of array are not equal means
		// array are not equal
		if (N != M)
			return false;

		// Sort both arrays
		arr1.sort();
		arr2.sort();

		// Linearly compare elements
		for (let i = 0; i < N; i++)
			if (arr1[i] != arr2[i])
				return false;

		// If all elements were same.
		return true;
	}

// Driver Code
	let arr1 = [3, 5, 2, 5, 2];
	let arr2 = [2, 3, 5, 5, 2];

	if (areEqual(arr1, arr2))
		console.log(1);
	else
		console.log(0);

