function insertionSort<T>(arr: T[]): T[] {
    const n = arr.length;
    
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        
        // Shift elements greater than current to the right
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        // Place current element in its correct position
        arr[j + 1] = current;
    }
    
    return arr;
}

// Example
 const numbers = [64, 34, 25, 12, 22, 11, 90];
const strings=["S","A","V","B","D"
];
console.log("Original:", numbers);
console.log("Sorted:", insertionSort(numbers));
console.log("Original:", strings);
console.log("Sorted:", insertionSort(strings));
// Output: [11, 12, 22, 25, 34, 64, 90]