function getMaxFrequencyChar(str:any) {
    if (str.length === 0) return null;
    
    const freqMap = new Map();
    

    for (let char of str) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    
    
    let maxChar = '';
    let maxCount = 0;
    
    for (let [char, count] of freqMap) {
        if (count > maxCount) {
            maxCount = count;
            maxChar = char;
        }
    }
    
    return { character: maxChar, frequency: maxCount };
}

console.log("max frequency character in hello world")
const result = getMaxFrequencyChar("hello world");
console.log(result);