// ● Write a program to sort a 2D array of integers using selection sort.
function selectionSort2DArray(matrix){
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols - 1; j++){
        // Find the minimum element in the unsorted part of the row
        let minIndex = j;
        for(let k = j + 1; k < cols; k++){
          if(matrix[i][k] < matrix[i][minIndex]){
            minIndex = k;
          }
        }
  
        // Swap only if the minimum element is not in its correct position
        if(minIndex !== j){
          [matrix[i][j], matrix[i][minIndex]] = [matrix[i][minIndex], matrix[i][j]];
        }
      }
    }
  
    return matrix;
  }
  
  // Example usage:
  const inputMatrix = [
    [64, 25, 12, 22],
    [11, 45, 9, 2],
    [14, 35, 20, 7],
  ];
  
  const sortedMatrix = selectionSort2DArray([...inputMatrix]);
  
  console.log("Sorted 2D Array:");
  for (const row of sortedMatrix) {
    console.log(row);
  }
  