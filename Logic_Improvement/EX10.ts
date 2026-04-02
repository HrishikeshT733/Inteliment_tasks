function linearSearch<T>(arr: T[], target: T): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index if found
        }
    }
    return -1; // Return -1 if not found
}

// Example usage
const numbers = [10, 23, 45, 70, 11, 15, 39];
const target = 70;

const strings=["Om","Surya","Mahesh","Tilak"
]
const target2="Surya"


console.log(numbers +" element to find "+target);
const result1 = linearSearch(numbers, target);
if (result1 !== -1) {
    console.log(`Element found at index: ${result1}`);
} else {
    console.log("Element not found");
}



console.log(strings +" element to find "+target2);
const result2 = linearSearch(strings, target2);
if (result2 !== -1) {
    console.log(`Element found at index: ${result2}`);
} else {
    console.log("Element not found");
}
// Output: Element found at index: 3