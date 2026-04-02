function addMatrices(A:any, B:any) {
    let rows = A.length;        
    let cols = A[0].length;     
    
    // Create a 3x3 matrix filled with zeros
    let result = Array.from({ length: rows }, () => Array(cols).fill(0));
    // Creates: [[0,0,0], [0,0,0], [0,0,0]]
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            result[i][j] = A[i][j] + B[i][j];
        }
    }
    return result;
}


let A = [[1,2,3], [4,5,6], [7,8,9]];
let B = [[9,8,7], [6,5,4], [3,2,1]];
console.log("Matrix A is :");
console.log(A);
console.log("Matrix B is :");
console.log(B);
console.log("Sum is ");
console.log(addMatrices(A, B))
