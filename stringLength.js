module.exports = (str) => {
    let countChars = 0;

    for(let char in str) {
        countChars++
    }
    return countChars;
}