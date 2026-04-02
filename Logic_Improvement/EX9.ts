const myDict = {
    'Ashwin': 100,
    'rakesh': 9,
    'Ravindra': 25,
    'yash': 200,
    'sai': 32
};


const e = Object.entries(myDict);


const n = e.length;
for (let i = 0; i < n - 1; i++) {
for (let j = 0; j < n - i - 1; j++) {
    if (e[j][0] > e[j + 1][0]) {
            
            [e[j], e[j + 1]] = [e[j + 1], e[j]];
        }
    }
}


const sortedDict: { [key: string]: number } = {};
for (const [key, value] of e) {
    sortedDict[key] = value;
}

console.log(sortedDict);