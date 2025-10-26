function countCharacters(str) {
    const count = {};

    for (let char of str) {
       
        if (count[char]) {
            count[char]++;
        } else {
            count[char] = 1;
        }
    }

    return count;
}

